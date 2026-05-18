import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import './ServicesSection.css';

type Service = {
  title: string;
  frontLetterIndex: number;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: 'Websites',
    frontLetterIndex: 4, // 'i'
    description: 'Sites institucionais rápidos, elegantes e otimizados para conversão, com consistência de marca em cada detalhe.',
    image: '/images/services/websites.webp',
  },
  {
    title: 'Design',
    frontLetterIndex: 4, // 'i'
    description: 'Experiências digitais que encantam usuários, elevam sua marca e reduzem a taxa de rejeição.',
    image: '/images/services/design.webp',
  },
  {
    title: 'Estratégia',
    frontLetterIndex: 5, // 'm'
    description: 'Visibilidade orgânica de longo prazo com conteúdo que educa, engaja e gera leads qualificados.',
    image: '/images/services/estrategia.webp',
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateActiveService = () => {
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const travel = Math.max(1, rect.height - viewportH);
      const progress = clamp((-rect.top) / travel, 0, 1);
      const nextIndex = Math.min(services.length - 1, Math.floor(progress * services.length));

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    window.addEventListener('scroll', updateActiveService, { passive: true });
    window.addEventListener('resize', updateActiveService);
    updateActiveService();

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          visibilityObserver.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(section);

    return () => {
      window.removeEventListener('scroll', updateActiveService);
      window.removeEventListener('resize', updateActiveService);
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services-scroll home-section home-section--light${isVisible ? ' is-visible' : ''}`}
      aria-labelledby="services-title"
      style={{ '--service-count': services.length } as CSSProperties}
    >
      <div className="services-scroll__pin">
        <div className="services-scroll-indicator" aria-hidden="true">
          <span className="services-scroll-indicator__text">SCROLL</span>
          <span className="services-scroll-indicator__line" />
        </div>
        <div className="home-section__container services-scroll__container">
          <h2 id="services-title" className="section-eyebrow services-eyebrow" aria-label="Serviços">
            {'O que fazemos'.split('').map((char, i) => {
              const safeChar = char === ' ' ? '\u00A0' : char;

              return (
              <span
                key={i}
                className="services-eyebrow__letter"
                style={{ '--i': i } as CSSProperties}
                aria-hidden="true"
              >
                {safeChar}
              </span>
              );
            })}
          </h2>

          <div className="services-showcase" aria-live="polite">
            <div className="services-showcase__titles" aria-hidden="true">
              {services.map((service, index) => (
                <span
                  key={`${service.title}-title`}
                  className={`services-showcase__title ${index === activeIndex ? 'is-active' : ''}`}
                >
                  {service.title.split('').map((char, ci) => (
                    <span
                      key={ci}
                      className={`services-showcase__title-letter${ci === service.frontLetterIndex ? ' services-showcase__title-letter--front' : ''}`}
                      style={{ '--i': ci } as CSSProperties}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </div>

            <div className="services-showcase__front-titles" aria-hidden="true">
              {services.map((service, index) => (
                <span
                  key={`${service.title}-front-title`}
                  className={`services-showcase__front-title ${index === activeIndex ? 'is-active' : ''}`}
                >
                  {service.title.split('').map((char, ci) => (
                    <span
                      key={ci}
                      className={`services-showcase__front-letter${ci === service.frontLetterIndex ? ' is-front' : ''}`}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </div>

            <div className="services-showcase__media" aria-hidden="true">
              {services.map((service, index) => (
                <div
                  key={`${service.title}-media-item`}
                  className={`services-showcase__media-item ${index === activeIndex ? 'is-active' : ''}`}
                >
                  <img
                    className="services-showcase__image"
                    src={service.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            <div className="services-showcase__copy">
              {services.map((service, index) => (
                <p
                  key={`${service.title}-description`}
                  className={`services-showcase__description ${index === activeIndex ? 'is-active' : ''}`}
                >
                  {service.description}
                </p>
              ))}
            </div>
          </div>

          {/* Mobile-only cards */}
          <ul className="services-mobile-list" aria-label="Serviços">
            {services.map((service) => (
              <li key={`mobile-${service.title}`} className="services-mobile-card">
                <h3 className="services-mobile-card__title">{service.title}</h3>
                <div className="services-mobile-card__media">
                  <img
                    className="services-mobile-card__image"
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
                <p className="services-mobile-card__description">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../services/projects';
import type { Project } from '../../types/project';
import { getWebpSrcSetFromBaseImage } from '../../utils/responsiveImages';
import CtaLinkButton from '../CtaLinkButton/CtaLinkButton';
import './RecentWorksSection.css';

const extractClientName = (title: string) => {
  const match = title.match(/para\s+(.+)$/i);
  if (match?.[1]) {
    return match[1].trim();
  }

  return title;
};

const PARALLAX_STRENGTH = 200; // px de deslocamento total
const REVEAL_THRESHOLD = 0.35;
const REVEAL_ROOT_MARGIN = '0px 0px -12% 0px';

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const RecentWorksSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [imageErrors, setImageErrors] = useState<number[]>([]);

  // cards da coluna 2 = índices 1 e 3
  const col2Refs = useRef<(HTMLElement | null)[]>([null, null]);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const applyParallax = () => {
      const vh = window.innerHeight;

      col2Refs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        // progresso individual: 0 (antes de entrar) -> 1 (passando pela viewport)
        const rawProgress = (vh - rect.top) / (vh + rect.height);
        const progress = clamp(rawProgress, 0, 1);
        // inicia em 0 e sobe gradualmente durante o scroll down
        const translateY = -progress * PARALLAX_STRENGTH;

        el.style.setProperty('--scroll-shift', `${translateY}px`);
      });

    };

    const onScroll = () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(applyParallax);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    applyParallax(); // posição inicial

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    getProjects()
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            entry.target.closest('.recent-work-card')?.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: REVEAL_THRESHOLD,
        rootMargin: REVEAL_ROOT_MARGIN,
      }
    );

    // Observar título e intro
    if (titleRef.current) observer.observe(titleRef.current);
    if (introRef.current) observer.observe(introRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    // Observar media dos cards
    mediaRefs.current.forEach((media) => {
      if (media) observer.observe(media);
    });

    return () => observer.disconnect();
  }, [loading, error, projects]);

  return (
    <section className="home-section home-section--light" aria-labelledby="recent-works-title">
      <div className="home-section__container">
        <h2 ref={titleRef} id="recent-works-title" className="recent-works-fade-enter">
          Trabalhos recentes
        </h2>
        <p ref={introRef} className="recent-works-intro recent-works-fade-enter">
          Explore alguns dos nossos projetos mais recentes.
        </p>
        {loading && <p className="recent-works-feedback">Carregando projetos...</p>}
        {error && <p className="recent-works-feedback">Erro: {error}</p>}

        {!loading && !error && (
          <>
            <div className="recent-works-grid">
              {projects.slice(0, 4).map((project, index) => (
                <article
                  className={`recent-work-card${imageErrors.includes(project.id) ? ' recent-work-card--no-image' : ''}${index % 2 === 1 ? ' recent-work-card--col2' : ''}`}
                  key={project.id}
                  ref={index % 2 === 1
                    ? (el) => { col2Refs.current[Math.floor(index / 2)] = el; }
                    : undefined
                  }
                >
                  <Link
                    className="recent-work-card__link"
                    to={`/portfolio/${project.id}`}
                    aria-label={`Abrir projeto ${extractClientName(project.title)}`}
                  >
                    <div
                      className="recent-work-card__media fade-up-enter"
                      style={{ '--reveal-delay': `${index * 120}ms` } as CSSProperties}
                      ref={(el) => {
                        mediaRefs.current[index] = el;
                      }}
                    >
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={getWebpSrcSetFromBaseImage(project.image)}
                          sizes="(max-width: 900px) 100vw, 50vw"
                        />
                        <img
                          className="recent-work-card__image"
                          src={project.image}
                          alt={`${extractClientName(project.title)} - ${project.type}`}
                          loading={index < 2 ? 'eager' : 'lazy'}
                          decoding="async"
                          fetchPriority={index < 2 ? 'high' : 'auto'}
                          sizes="(max-width: 900px) 100vw, 50vw"
                          onError={() => {
                            setImageErrors((previous) =>
                              previous.includes(project.id) ? previous : [...previous, project.id]
                            );
                          }}
                        />
                      </picture>
                    </div>
                  </Link>
                  <div className="recent-work-card__content" aria-label={extractClientName(project.title)}>
                    <h3>{extractClientName(project.title)}</h3>
                  </div>
                </article>
              ))}
            </div>
            <div ref={footerRef} className="recent-works-footer recent-works-fade-enter">
              <CtaLinkButton to="/portfolio" label="Veja mais trabalhos" ariaLabel="Veja mais trabalhos" />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default RecentWorksSection;

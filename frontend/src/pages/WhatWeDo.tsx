import { useEffect, useState } from 'react';
import FooterSection from '../components/HomeSections/FooterSection';
import InternalPageSection from '../components/InternalPageSection/InternalPageSection';
import Seo from '../components/Seo/Seo';
import '../components/CtaLinkButton/CtaLinkButton.css';
import './WhatWeDo.css';

const serviceSlideImages = [
  {
    src: '/images/services/websites.webp',
    label: 'Website',
  },
  {
    src: '/images/services/design.webp',
    label: 'Criacao',
  },
  {
    src: '/images/services/estrategia.webp',
    label: 'Conteudo',
  },
];

const getRandomIndex = (excludeIndex?: number) => {
  if (serviceSlideImages.length <= 1) {
    return 0;
  }

  let next = Math.floor(Math.random() * serviceSlideImages.length);

  while (next === excludeIndex) {
    next = Math.floor(Math.random() * serviceSlideImages.length);
  }

  return next;
};

const WhatWeDo = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(() => getRandomIndex());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((current) => getRandomIndex(current));
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <Seo
        title="O que fazemos"
        description="Sites rápidos, criativos e estruturados para a melhor performance, engajamento e resultados."
      />
      <InternalPageSection className="what-we-do-page" ariaLabelledby="what-we-do-title">
        <div className="what-we-do-page__container">
          <div className="what-we-do-page__content">
            <p className="section-eyebrow internal-fade fade-delay-1">O que fazemos</p>
            <h1 className="internal-page-title internal-fade fade-delay-2" id="what-we-do-title">
              Sites rápidos, criativos e estruturados
            </h1>
            <p className="what-we-do-page__text internal-fade fade-delay-3">
              Desenvolvemos sites rápidos, criativos e estruturados para entregar a melhor performance
              e gerar mais engajamento e resultados para a sua marca.
            </p>

            <div className="what-we-do-page__performance internal-fade fade-delay-4">
              <h2 className="what-we-do-page__performance-title">Performance</h2>
              <p className="what-we-do-page__performance-text">
                Todos os nossos projetos são testados nas ferramentas que medem performance.
              </p>
              <a
                className="cta-link-button what-we-do-page__performance-cta"
                href="https://pagespeed.web.dev/analysis/https-olatu-com-br/rwwmnjyqkx?form_factor=mobile"
                target="_blank"
                rel="noreferrer"
                aria-label="Confira o resultado desse site no PageSpeed"
              >
                <span className="cta-link-button__label">Confira o resultado desse site</span>
                <span className="cta-link-button__icon" aria-hidden="true">+</span>
              </a>
            </div>
          </div>

          <div className="what-we-do-page__media internal-fade fade-delay-4">
            <img
              key={serviceSlideImages[activeImageIndex].src}
              className="what-we-do-page__image"
              src={serviceSlideImages[activeImageIndex].src}
              alt="Representação visual dos serviços de criação de sites da Olatu"
              loading="lazy"
              decoding="async"
            />

            <div className="what-we-do-page__dots" role="tablist" aria-label="Selecionar imagem de servico">
              {serviceSlideImages.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={index === activeImageIndex}
                  aria-label={`Mostrar slide ${slide.label}`}
                  className={`what-we-do-page__dot${index === activeImageIndex ? ' is-active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </InternalPageSection>
      <FooterSection />
    </>
  );
};

export default WhatWeDo;

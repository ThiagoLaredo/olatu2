import { useEffect, useRef } from 'react';
import CtaLinkButton from '../CtaLinkButton/CtaLinkButton';
import './HeroSection.css';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;

    const updateScrollProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = Math.min(viewportHeight * 0.12, 96);
      const distance = Math.min(
        Math.max(rect.height * 0.45, viewportHeight * 0.6),
        viewportHeight * 1.4
      );
      const rawProgress = (start - rect.top) / distance;
      const progress = Math.max(0, Math.min(1, rawProgress));
      section.style.setProperty('--internal-page-scroll-progress', progress.toFixed(3));
      rafId = 0;
    };

    const requestProgressUpdate = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(updateScrollProgress);
    };

    requestProgressUpdate();
    window.addEventListener('scroll', requestProgressUpdate, { passive: true });
    window.addEventListener('resize', requestProgressUpdate);

    return () => {
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', requestProgressUpdate);
      window.removeEventListener('resize', requestProgressUpdate);
    };
  }, []);

  return (
    <section className="home-hero" ref={sectionRef}>
      <div className="home-section__container">
        <div className="home-hero__content">
          <span className="section-eyebrow">Agência digital criativa</span>
          <h1>Impulsione sua marca com presença digital</h1>
          <p>
            Criamos websites e experiências digitais sob medida para impulsionar
            sua presença online.
          </p>
          <div className="home-hero__actions">
            <CtaLinkButton
              to="/contact"
              label="Falar com a gente"
              ariaLabel="Ir para contato"
              tone="light"
            />
          </div>
        </div>
      </div>
      <div className="home-hero__decor" aria-hidden="true">
        <div className="home-hero__decor__orb" />
      </div>
    </section>
  );
};

export default HeroSection;

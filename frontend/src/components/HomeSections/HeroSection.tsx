import { useEffect, useRef } from 'react';
import CtaLinkButton from '../CtaLinkButton/CtaLinkButton';
import './HeroSection.css';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId = 0;
    let mouseParallaxEnabled = false;

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

    // Enable mouse parallax after page load (LCP+1s) to avoid blocking paint
    const enableMouseParallax = () => {
      mouseParallaxEnabled = true;
    };
    const parallaxTimeout = setTimeout(enableMouseParallax, 1000);

    requestProgressUpdate();
    window.addEventListener('scroll', requestProgressUpdate, { passive: true });
    window.addEventListener('resize', requestProgressUpdate);

    // Mouse parallax effect (only after page load)
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseParallaxEnabled) return;
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      section.style.setProperty('--hero-orb-parallax-x', (x * 18).toFixed(2) + 'px');
      section.style.setProperty('--hero-orb-parallax-y', (y * 18).toFixed(2) + 'px');
    };
    section.addEventListener('mousemove', handleMouseMove);

    // Reset on mouse leave
    const handleMouseLeave = () => {
      section.style.setProperty('--hero-orb-parallax-x', '0px');
      section.style.setProperty('--hero-orb-parallax-y', '0px');
    };
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(parallaxTimeout);
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', requestProgressUpdate);
      window.removeEventListener('resize', requestProgressUpdate);
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="home-hero" ref={sectionRef}>
      <div className="home-section__container">
        <div className="home-hero__content">
          <span className="section-eyebrow">Estúdio digital criativo</span>
          <h1>Sua marca, em movimento</h1>
          <p>
            Criamos websites e experiências digitais sob medida para impulsionar seus resultados online.
          </p>
          <div className="home-hero__actions">
            <CtaLinkButton
              to="/contact"
              label="Solicitar proposta"
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

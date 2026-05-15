import { useEffect, useRef } from 'react';
import './AboutSection.css';

const PARAGRAPH =
  'Criatividade, performance e tecnologia caminhando juntas. Acreditamos que um produto digital de verdade precisa ser tão bonito quanto rápido, tão estratégico quanto bem executado.';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const letters = section.querySelectorAll<HTMLElement>('.about-letter');
    const total = letters.length;
    let revealedCount = 0;
    let lastScrollY = window.scrollY;

    const paintLetters = (count: number) => {
      letters.forEach((letter, i) => {
        letter.classList.toggle('is-active', i < count);
      });
    };

    const update = () => {
      const currentScrollY = window.scrollY;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Reset when section is fully below the viewport, allowing replay on next down-scroll.
      if (rect.top >= windowH) {
        revealedCount = 0;
        paintLetters(0);
        lastScrollY = currentScrollY;
        return;
      }

      // Only advance animation when user scrolls down.
      if (currentScrollY <= lastScrollY) {
        lastScrollY = currentScrollY;
        return;
      }

      const start = windowH * 0.45;
      const range = rect.height * 0.55 + windowH * 0.35;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / range));
      const activeCount = Math.round(progress * total);

      revealedCount = Math.max(revealedCount, activeCount);
      lastScrollY = currentScrollY;
      paintLetters(revealedCount);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <section ref={sectionRef} className="home-section home-section--muted" aria-labelledby="about-title">
      <div className="home-section__container about-section">
        <div>
          <h2 id="about-title" className="section-eyebrow">Estúdio Digital</h2>
          <p className="about-scroll-text">
            <span className="about-sr-only">{PARAGRAPH}</span>
            {PARAGRAPH.split('').map((char, i) => (
              <span key={i} className="about-letter" aria-hidden="true">
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

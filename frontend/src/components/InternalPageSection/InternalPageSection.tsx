import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

type InternalPageSectionProps = {
  className: string;
  ariaLabelledby?: string;
  children: ReactNode;
};

const InternalPageSection = ({ className, ariaLabelledby, children }: InternalPageSectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

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
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(updateScrollProgress);
    };

    requestProgressUpdate();

    window.addEventListener('scroll', requestProgressUpdate, { passive: true });
    window.addEventListener('resize', requestProgressUpdate);

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener('scroll', requestProgressUpdate);
      window.removeEventListener('resize', requestProgressUpdate);
    };
  }, []);

  return (
    <section className={`${className} internal-page-shell`} aria-labelledby={ariaLabelledby} ref={sectionRef}>
      {children}
      <div className="internal-page-decor internal-fade fade-delay-5" aria-hidden="true">
        <div className="internal-page-decor__orb" />
      </div>
    </section>
  );
};

export default InternalPageSection;
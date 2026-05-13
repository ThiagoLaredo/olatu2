import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const logoText = 'OLATU';
type MenuSpeedProfile = 'cinema' | 'balanced' | 'fast';

// Troque este valor para ajustar rapidamente o ritmo geral do menu.
const MENU_SPEED_PROFILE: MenuSpeedProfile = 'cinema';

const MENU_STATE_TIMINGS: Record<MenuSpeedProfile, { open: number; close: number }> = {
  cinema: { open: 1000, close: 760 },
  balanced: { open: 820, close: 620 },
  fast: { open: 600, close: 440 },
};

type MenuState = 'closed' | 'opening' | 'open' | 'closing';

const renderCurtainText = (text: string) => (
  <span className="menu-curtain" aria-label={text}>
    {text.split('').map((char, index) => {
      const safeChar = char === ' ' ? '\u00A0' : char;

      return (
        <span
          key={`${safeChar}-${index}`}
          className="menu-curtain__letter"
          data-char={safeChar}
          style={{ '--i': index } as CSSProperties}
        >
          {safeChar}
        </span>
      );
    })}
  </span>
);

const MAGNET_STRENGTH = 0.9; // 0 = sem atração, 1 = segue o cursor totalmente

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuState, setMenuState] = useState<MenuState>('closed');
  const [isOverLightSection, setIsOverLightSection] = useState<boolean>(false);
  const [isInternalMenuButtonDark, setIsInternalMenuButtonDark] = useState<boolean>(false);
  const [showIntro, setShowIntro] = useState<boolean>(isHome);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const magnetRafRef = useRef<number | null>(null);

  const isMenuVisible = menuState !== 'closed';
  const isMenuOpen = menuState === 'opening' || menuState === 'open';
  const useDarkMenuTheme = !isHome || isOverLightSection;
  const useDarkMenuButtonTheme = isHome ? isOverLightSection : isInternalMenuButtonDark;
  const useDarkLogoTheme = !isHome || isOverLightSection;
  const useCompactLogo = (isHome ? isOverLightSection : isInternalMenuButtonDark) && !isMenuVisible;

  useEffect(() => {
    document.documentElement.setAttribute('data-menu-speed', MENU_SPEED_PROFILE);

    return () => {
      document.documentElement.removeAttribute('data-menu-speed');
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    if (isMenuVisible) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [isMenuVisible]);

  useEffect(() => {
    if (!isHome) return;
    // Remove intro class after animation completes (delay 620ms + duration 680ms + buffer)
    const t = setTimeout(() => setShowIntro(false), 1400);
    return () => clearTimeout(t);
  }, [isHome]);

  useEffect(() => {
    if (menuState === 'opening') {
      const openTimeout = setTimeout(() => setMenuState('open'), MENU_STATE_TIMINGS[MENU_SPEED_PROFILE].open);
      return () => clearTimeout(openTimeout);
    }

    if (menuState === 'closing') {
      const closeTimeout = setTimeout(() => setMenuState('closed'), MENU_STATE_TIMINGS[MENU_SPEED_PROFILE].close);
      return () => clearTimeout(closeTimeout);
    }
  }, [menuState]);

  useEffect(() => {
    const updateHeaderTheme = () => {
      if (location.pathname !== '/') {
        setIsOverLightSection(true);
        setIsInternalMenuButtonDark(window.scrollY > 28);
        return;
      }

      const heroSection = document.querySelector<HTMLElement>('.home-hero');

      if (!heroSection) {
        setIsOverLightSection(true);
        setIsInternalMenuButtonDark(false);
        return;
      }

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const headerTrigger = 80;
      setIsOverLightSection(heroBottom <= headerTrigger);
      setIsInternalMenuButtonDark(false);
    };

    updateHeaderTheme();
    window.addEventListener('scroll', updateHeaderTheme, { passive: true });
    window.addEventListener('resize', updateHeaderTheme);

    return () => {
      window.removeEventListener('scroll', updateHeaderTheme);
      window.removeEventListener('resize', updateHeaderTheme);
    };
  }, [location.pathname]);

  const handleMagnetMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = menuButtonRef.current;
    if (!btn) return;
    if (magnetRafRef.current) cancelAnimationFrame(magnetRafRef.current);
    magnetRafRef.current = requestAnimationFrame(() => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * MAGNET_STRENGTH;
      const dy = (e.clientY - cy) * MAGNET_STRENGTH;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  };

  const handleMagnetLeave = () => {
    const btn = menuButtonRef.current;
    if (!btn) return;
    if (magnetRafRef.current) cancelAnimationFrame(magnetRafRef.current);
    btn.style.transform = 'translate(0px, 0px)';
  };

  const openMenu = () => setMenuState('opening');

  const closeMenu = () => {
    if (menuState === 'closed' || menuState === 'closing') {
      return;
    }

    setMenuState('closing');
  };

  return (
    <>
      <Link
        to="/"
        className={`site-header__logo ${showIntro ? 'is-home-intro' : ''} ${useDarkLogoTheme ? 'is-over-light' : ''} ${isMenuOpen ? 'is-menu-open' : ''} ${menuState === 'closing' ? 'is-menu-closing' : ''} ${useCompactLogo ? 'is-compact' : ''}`}
        onClick={closeMenu}
      >
        {useCompactLogo ? (
          <span className="site-header__logo-avatar" aria-hidden="true">
            <img src="/images/avatar.jpg" alt="" />
          </span>
        ) : (
          <span className="site-header__logo-word" aria-hidden="true">
            {logoText.split('').map((char, index) => (
              <span
                key={`${char}-${index}`}
                className="site-header__logo-letter"
                data-char={char}
                style={{ '--i': index } as CSSProperties}
              >
                {char}
              </span>
            ))}
          </span>
        )}
        <span className="site-header__sr-only">{logoText}</span>
      </Link>

      <button
        ref={menuButtonRef}
        type="button"
        className={`site-header__menu-button ${showIntro ? 'is-home-intro' : ''} ${useDarkMenuButtonTheme ? 'is-over-light' : ''}`}
        aria-label="Abrir menu"
        onClick={openMenu}
        onMouseMove={handleMagnetMove}
        onMouseLeave={handleMagnetLeave}
      >
        <span />
        <span />
        <span />
      </button>

      {isMenuVisible && (
        <div
          className={`site-menu ${useDarkMenuTheme ? 'site-menu--dark' : ''} ${menuState === 'opening' ? 'is-opening' : ''} ${menuState === 'open' ? 'is-open' : ''} ${menuState === 'closing' ? 'is-closing' : ''}`}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="site-menu__close"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            ✕
          </button>

          <div className="site-menu__content">
            <nav className="site-menu__nav">
              <Link to="/" onClick={closeMenu}>
                {renderCurtainText('Home')}
              </Link>
              <Link to="/sobre" onClick={closeMenu}>
                {renderCurtainText('Sobre')}
              </Link>
              <Link to="/portfolio" onClick={closeMenu}>
                {renderCurtainText('Portfolio')}
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                {renderCurtainText('Contato')}
              </Link>
            </nav>

            <div className="site-menu__contact" aria-label="Informações de contato">
              <a href="mailto:olatuthinking@gmail.com">{renderCurtainText('olatuthinking@gmail.com')}</a>
              <a href="tel:+5511999415321">{renderCurtainText('11 99941 5321')}</a>
              <a href="https://www.linkedin.com/company/olatuthinking/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.5 9.8h2.9V19H5.5V9.8Zm4.73 0H13v1.26h.04c.39-.73 1.35-1.5 2.78-1.5 2.98 0 3.53 1.95 3.53 4.5V19h-2.9v-4.37c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3V19h-2.9V9.8Z" />
                </svg>
                {renderCurtainText('LinkedIn')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

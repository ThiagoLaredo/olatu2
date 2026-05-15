import { Link } from 'react-router-dom';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="site-footer" aria-labelledby="site-footer-title">
      <div className="home-section__container site-footer__container">
        <div className="site-footer__column">
          <img className="site-footer__logo" src="/images/logo-olatu.svg" alt="OLATU" width="200" height="42" />
          <h2 id="site-footer-title" className="site-footer__title">
            Construimos presenca digital com estrategia e clareza.
          </h2>
          <a
            className="site-footer__social-link"
            href="https://www.linkedin.com/company/olatuthinking/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.5 9.8h2.9V19H5.5V9.8Zm4.73 0H13v1.26h.04c.39-.73 1.35-1.5 2.78-1.5 2.98 0 3.53 1.95 3.53 4.5V19h-2.9v-4.37c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3V19h-2.9V9.8Z" />
            </svg>
          </a>
        </div>

        <div className="site-footer__column">
          <h3 className="site-footer__heading">Contatos</h3>
          <div className="site-footer__contacts">
            <a className="site-footer__link" href="mailto:olatuthinking@gmail.com">
              olatuthinking@gmail.com
            </a>
            <a className="site-footer__link" href="tel:+5511999415321">
              +55 11 99941-5321
            </a>
          </div>

          <nav className="site-footer__nav" aria-label="Menu do rodape">
            <h3 className="site-footer__heading">Menu</h3>
            <div className="site-footer__menu">
              <Link to="/">Home</Link>
              <Link to="/sobre">Sobre</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contato</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
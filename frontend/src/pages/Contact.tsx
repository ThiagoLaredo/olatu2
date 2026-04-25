import FooterSection from '../components/HomeSections/FooterSection';
import InternalPageSection from '../components/InternalPageSection/InternalPageSection';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <InternalPageSection className="contact-page" ariaLabelledby="contact-title">
        <div className="contact-page__container">
          <p className="section-eyebrow internal-fade fade-delay-1">Contato</p>
          <h1 className="internal-page-title internal-fade fade-delay-2" id="contact-title">Vamos conversar sobre o seu próximo projeto</h1>
          <p className="contact-page__intro internal-fade fade-delay-3">
            Conte para a Olatu o que você precisa. Respondemos rapidamente para alinhar escopo,
            prazo e estratégia com clareza.
          </p>

          <div className="contact-page__cards" role="list" aria-label="Canais de contato">
            <a className="contact-page__card internal-fade fade-delay-3" role="listitem" href="mailto:olatuthinking@gmail.com">
              <span className="contact-page__label">Email</span>
              <span className="contact-page__value">olatuthinking@gmail.com</span>
            </a>

            <a className="contact-page__card internal-fade fade-delay-4" role="listitem" href="tel:+5511999415321">
              <span className="contact-page__label">Telefone</span>
              <span className="contact-page__value">+55 11 99941-5321</span>
            </a>

            <a
              className="contact-page__card internal-fade fade-delay-5"
              role="listitem"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-page__label">LinkedIn</span>
              <span className="contact-page__value">Conectar com a Olatu</span>
            </a>
          </div>
        </div>
      </InternalPageSection>
      <FooterSection />
    </>
  );
};

export default Contact;

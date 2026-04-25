import CtaLinkButton from '../CtaLinkButton/CtaLinkButton';
import './HeroSection.css';

type HeroSectionProps = {
  apiStatus: string;
};

const HeroSection = ({ apiStatus }: HeroSectionProps) => {
  return (
    <section className="home-hero">
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
          <p className="home-hero__status">{apiStatus}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

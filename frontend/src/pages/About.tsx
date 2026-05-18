import './About.css';
import FooterSection from '../components/HomeSections/FooterSection';
import InternalPageSection from '../components/InternalPageSection/InternalPageSection';
import Seo from '../components/Seo/Seo';

const About = () => {
  return (
    <>
      <Seo
        title="Sobre"
        description="Conheca a Olatu: estrategia criativa, design e tecnologia para construir presenca digital com clareza e resultado."
      />
      <InternalPageSection className="about-page" ariaLabelledby="about-title">
        <div className="about-page__container">
          <div className="about-page__content">
            <p className="section-eyebrow internal-fade fade-delay-1">Sobre</p>
            <h1 className="internal-page-title internal-fade fade-delay-2" id="about-title">Estratégia criativa para marcas que querem (e merecem) crescer</h1>
            <p className="about-page__text internal-fade fade-delay-3">
              A Olatu <strong>– estúdio digital –</strong> une design, tecnologia e narrativa para construir <strong>presença digital com intenção</strong>. Cada projeto é claro, elegante e orientado a resultado – respeitando sua identidade em cada decisão.
            </p>
            <p className="about-page__text internal-fade fade-delay-4">
              Da descoberta ao lançamento, caminhamos lado a lado com você. Transformamos objetivos de negócio em experiências digitais memoráveis.
            </p>
            <p className="about-page__text internal-fade fade-delay-4">Conte sua ideia para a Olatu.</p>
          </div>
        </div>
      </InternalPageSection>
      <FooterSection />
    </>
  );
};

export default About;

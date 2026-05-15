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
            <h1 className="internal-page-title internal-fade fade-delay-2" id="about-title">Estratégia criativa para marcas que querem crescer</h1>
            <p className="about-page__text internal-fade fade-delay-3">
              A Olatu combina design, tecnologia e narrativa para construir presença digital com
              intenção. Nosso foco é criar projetos claros, elegantes e orientados a resultado,
              respeitando a identidade de cada cliente em cada decisão.
            </p>
            <p className="about-page__text internal-fade fade-delay-4">
              Da descoberta ao lançamento, trabalhamos lado a lado com as marcas para transformar
              objetivos de negócio em experiências digitais memoráveis.
            </p>
          </div>
        </div>
      </InternalPageSection>
      <FooterSection />
    </>
  );
};

export default About;

import './Home.css';
import AboutSection from '../components/HomeSections/AboutSection';
import FooterSection from '../components/HomeSections/FooterSection';
import HeroSection from '../components/HomeSections/HeroSection';
import RecentWorksSection from '../components/HomeSections/RecentWorksSection';
import ServicesSection from '../components/HomeSections/ServicesSection';
import Seo from '../components/Seo/Seo';

const Home = () => {
  return (
    <>
      <Seo
        title="Criação de Websites"
        description="A Olatu cria websites e experiências digitais sob medida para impulsionar a presença online de marcas em crescimento. Sites rápidos, design estratégico e resultado. Estúdio digital focado em performance."
      />
      <HeroSection />
      <RecentWorksSection />
      <AboutSection />
      <ServicesSection />
      <FooterSection />
    </>
  );
};

export default Home;
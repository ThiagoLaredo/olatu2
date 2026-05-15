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
        title="Criacao de Websites"
        description="A Olatu cria websites e experiencias digitais sob medida para impulsionar a presenca online de marcas em crescimento."
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
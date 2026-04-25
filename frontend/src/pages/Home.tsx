import './Home.css';
import AboutSection from '../components/HomeSections/AboutSection';
import FooterSection from '../components/HomeSections/FooterSection';
import HeroSection from '../components/HomeSections/HeroSection';
import RecentWorksSection from '../components/HomeSections/RecentWorksSection';
import ServicesSection from '../components/HomeSections/ServicesSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <RecentWorksSection />
      <AboutSection />
      <ServicesSection />
      <FooterSection />
    </>
  );
};

export default Home;
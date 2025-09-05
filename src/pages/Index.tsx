import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import About from '@/components/About';
import UbudRetreats from '@/components/UbudRetreats';
import UluwatuRetreats from '@/components/UluwatuRetreats';
import CangguRetreats from '@/components/CangguRetreats';
import Classes from '@/components/Classes';
import Instructor from '@/components/Instructor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <About />
      <UbudRetreats />
      <UluwatuRetreats />
      <CangguRetreats />
      <Classes />
      <Instructor />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

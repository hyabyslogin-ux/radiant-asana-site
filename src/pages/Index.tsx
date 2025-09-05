import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import About from '@/components/About';
import UbudRetreats from '@/components/UbudRetreats';
import UluwatuRetreats from '@/components/UluwatuRetreats';
import CangguRetreats from '@/components/CangguRetreats';
import Classes from '@/components/Classes';
import Instructor from '@/components/Instructor';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSlider />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="ubud-retreats">
        <UbudRetreats />
      </div>
      <div id="uluwatu-retreats">        
        <UluwatuRetreats />
      </div>
      <div id="canggu-retreats">
        <CangguRetreats />
      </div>
      <Classes />
      <Instructor />
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

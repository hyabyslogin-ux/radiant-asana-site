import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Classes from '@/components/Classes';
import Instructor from '@/components/Instructor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Classes />
      <Instructor />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

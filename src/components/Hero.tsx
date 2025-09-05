import { Button } from '@/components/ui/button';
import heroImage from '@/assets/yoga-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yoga-plum/60 to-yoga-mauve/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover
            <span className="block bg-gradient-border bg-clip-text text-transparent">
              Bali Yoga Retreats
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Immerse yourself in transformative yoga retreats in Bali's most sacred locations. 
            Experience authentic Balinese healing, mindfulness practices, and spiritual awakening.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yoga-cream text-yoga-plum hover:bg-yoga-peach-light border-2 border-transparent hover:border-yoga-rose transition-all duration-300 shadow-glow"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-yoga-plum transition-all duration-300"
            >
              View Classes
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yoga-rose/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yoga-peach/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
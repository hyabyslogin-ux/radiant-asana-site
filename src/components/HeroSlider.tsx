import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: '/lovable-uploads/fa196a61-65f0-4c5b-945d-df28079ea3f3.png',
      title: 'Discover Inner Peace',
      subtitle: 'Pranayama & Breathwork Retreats',
      description: 'Connect with your breath and unlock the bridge between body and soul through ancient pranayama techniques in the spiritual heart of Bali.',
      cta: 'Begin Your Journey'
    },
    {
      image: '/lovable-uploads/9e3fcc3b-076b-4912-b3b1-67a84baae207.png',
      title: 'Healing Vibrations',
      subtitle: 'Sound Healing & Meditation',
      description: 'Experience transformative sound healing sessions with Tibetan singing bowls and traditional instruments in sacred spaces across Ubud.',
      cta: 'Find Your Harmony'
    },
    {
      image: '/lovable-uploads/2c8cc260-25f3-4ae5-a498-e425800e509d.png',
      title: 'True Independence',
      subtitle: 'Group Yoga Classes & Community',
      description: 'Join our supportive community of practitioners and free your mind from its own chains through collective practice and shared wisdom.',
      cta: 'Join Our Community'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <div className={`transition-all duration-700 delay-300 ${
                    index === currentSlide 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-10 opacity-0'
                  }`}>
                    <h3 className="text-lg md:text-xl font-medium text-yoga-peach mb-4 tracking-wider">
                      {slide.subtitle}
                    </h3>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="bg-yoga-rose hover:bg-yoga-mauve text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                      >
                        {slide.cta}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-yoga-mauve px-8 py-4 text-lg transition-all duration-300"
                      >
                        Explore Retreats
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yoga-rose scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className={`h-full bg-yoga-rose transition-all duration-100 ease-linear ${
            isAutoPlaying ? 'animate-progress' : ''
          }`}
          style={{ 
            width: isAutoPlaying ? '100%' : `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </section>
  );
};

export default HeroSlider;
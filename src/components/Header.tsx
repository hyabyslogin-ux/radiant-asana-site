import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, MapPin, Users, BookOpen, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRetreatsOpen, setIsRetreatsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsRetreatsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-xl font-bold text-foreground">Bali Yoga Retreats</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </button>

            {/* Retreats Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsRetreatsOpen(true)}
              onMouseLeave={() => setIsRetreatsOpen(false)}
            >
              <button className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Retreats</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isRetreatsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isRetreatsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-soft animate-in slide-in-from-top-2 duration-200">
                  <Link 
                    to="/3-days-retreat"
                    className="w-full text-left px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors rounded-t-lg"
                    onClick={() => setIsRetreatsOpen(false)}
                  >
                    3 Days Retreat
                  </Link>
                  <button 
                    onClick={() => scrollToSection('ubud-retreats')}
                    className="w-full text-left px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Ubud Retreats
                  </button>
                  <button 
                    onClick={() => scrollToSection('uluwatu-retreats')}
                    className="w-full text-left px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Uluwatu Retreats
                  </button>
                  <button 
                    onClick={() => scrollToSection('canggu-retreats')}
                    className="w-full text-left px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors rounded-b-lg"
                  >
                    Canggu Retreats
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 group"
            >
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>About Us</span>
            </button>

            <button 
              onClick={() => scrollToSection('blog')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 group"
            >
              <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Blog</span>
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
            </button>

            {/* Book Now Button */}
            <Link 
              to="/3-days-retreat"
              className="bg-gradient-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-glow hover:scale-105 transition-all duration-300 text-center"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>

              {/* Mobile Retreats Section */}
              <div className="space-y-2">
                <button 
                  onClick={() => setIsRetreatsOpen(!isRetreatsOpen)}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors py-2"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5" />
                    <span>Retreats</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isRetreatsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isRetreatsOpen && (
                  <div className="ml-8 space-y-2 animate-in slide-in-from-top-1 duration-200">
                    <Link 
                      to="/3-days-retreat"
                      className="block text-left text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      3 Days Retreat
                    </Link>
                    <button 
                      onClick={() => scrollToSection('ubud-retreats')}
                      className="block text-left text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      Ubud Retreats
                    </button>
                    <button 
                      onClick={() => scrollToSection('uluwatu-retreats')}
                      className="block text-left text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      Uluwatu Retreats
                    </button>
                    <button 
                      onClick={() => scrollToSection('canggu-retreats')}
                      className="block text-left text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      Canggu Retreats
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <Users className="w-5 h-5" />
                <span>About Us</span>
              </button>

              <button 
                onClick={() => scrollToSection('blog')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Blog</span>
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </button>

              <Link 
                to="/3-days-retreat"
                className="bg-gradient-primary text-white px-6 py-3 rounded-full font-medium mt-4 text-center hover:shadow-glow transition-all duration-300 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, MapPin, Users, BookOpen, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRetreatsOpen, setIsRetreatsOpen] = useState(false);
  const [isUbudOpen, setIsUbudOpen] = useState(false);
  const [isUluwatuOpen, setIsUluwatuOpen] = useState(false);
  const [isCangguOpen, setIsCangguOpen] = useState(false);
  const location = useLocation();
  
  const retreatsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const ubudTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const uluwatuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cangguTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (retreatsTimeoutRef.current) {
        clearTimeout(retreatsTimeoutRef.current);
      }
      if (ubudTimeoutRef.current) {
        clearTimeout(ubudTimeoutRef.current);
      }
      if (uluwatuTimeoutRef.current) {
        clearTimeout(uluwatuTimeoutRef.current);
      }
      if (cangguTimeoutRef.current) {
        clearTimeout(cangguTimeoutRef.current);
      }
    };
  }, []);

  const handleRetreatsEnter = () => {
    if (retreatsTimeoutRef.current) {
      clearTimeout(retreatsTimeoutRef.current);
    }
    setIsRetreatsOpen(true);
  };

  const handleRetreatsLeave = () => {
    retreatsTimeoutRef.current = setTimeout(() => {
      setIsRetreatsOpen(false);
      setIsUbudOpen(false);
      setIsUluwatuOpen(false);
      setIsCangguOpen(false);
    }, 150);
  };

  const handleUbudEnter = () => {
    if (ubudTimeoutRef.current) {
      clearTimeout(ubudTimeoutRef.current);
    }
    setIsUbudOpen(true);
  };

  const handleUbudLeave = () => {
    ubudTimeoutRef.current = setTimeout(() => {
      setIsUbudOpen(false);
    }, 150);
  };

  const handleUluwatuEnter = () => {
    if (uluwatuTimeoutRef.current) {
      clearTimeout(uluwatuTimeoutRef.current);
    }
    setIsUluwatuOpen(true);
  };

  const handleUluwatuLeave = () => {
    uluwatuTimeoutRef.current = setTimeout(() => {
      setIsUluwatuOpen(false);
    }, 150);
  };

  const handleCangguEnter = () => {
    if (cangguTimeoutRef.current) {
      clearTimeout(cangguTimeoutRef.current);
    }
    setIsCangguOpen(true);
  };

  const handleCangguLeave = () => {
    cangguTimeoutRef.current = setTimeout(() => {
      setIsCangguOpen(false);
    }, 150);
  };

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
              onMouseEnter={handleRetreatsEnter}
              onMouseLeave={handleRetreatsLeave}
            >
              <button className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Retreats</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isRetreatsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isRetreatsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50"
                  onMouseEnter={handleRetreatsEnter}
                  onMouseLeave={handleRetreatsLeave}
                >
                  {/* Ubud Retreats with Submenu */}
                  <div 
                    className="relative group"
                    onMouseEnter={handleUbudEnter}
                    onMouseLeave={handleUbudLeave}
                  >
                    <button className="w-full flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-t-lg">
                      <span>Ubud Retreats</span>
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </button>
                    
                    {isUbudOpen && (
                      <div 
                        className="absolute top-0 left-full ml-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-60"
                        onMouseEnter={handleUbudEnter}
                        onMouseLeave={handleUbudLeave}
                      >
                        <Link to="/3-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-t-lg" onClick={() => { setIsRetreatsOpen(false); setIsUbudOpen(false); }}>3 Days Retreat Ubud</Link>
                        <Link to="/4-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUbudOpen(false); }}>4 Days Retreat Ubud</Link>
                        <Link to="/5-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUbudOpen(false); }}>5 Days Retreat Ubud</Link>
                        <Link to="/6-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUbudOpen(false); }}>6 Days Retreat Ubud</Link>
                        <Link to="/7-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUbudOpen(false); }}>7 Days Retreat Ubud</Link>
                        <Link to="/8-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUbudOpen(false); }}>8 Days Retreat Ubud</Link>
                        <Link to="/9-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUbudOpen(false); }}>9 Days Retreat Ubud</Link>
                        <Link to="/10-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUbudOpen(false); }}>10 Days Retreat Ubud</Link>
                        <Link to="/11-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-b-lg" onClick={() => { setIsRetreatsOpen(false); setIsUbudOpen(false); }}>11 Days Retreat Ubud</Link>
                      </div>
                    )}
                  </div>
                  
                  {/* Uluwatu Retreats with Submenu */}
                  <div 
                    className="relative group"
                    onMouseEnter={handleUluwatuEnter}
                    onMouseLeave={handleUluwatuLeave}
                  >
                    <button className="w-full flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <span>Uluwatu Retreats</span>
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </button>
                    
                    {isUluwatuOpen && (
                      <div 
                        className="absolute top-0 left-full ml-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-60"
                        onMouseEnter={handleUluwatuEnter}
                        onMouseLeave={handleUluwatuLeave}
                      >
                        <Link to="/uluwatu-3-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-t-lg" onClick={() => { setIsRetreatsOpen(false); setIsUluwatuOpen(false); }}>3 Days Retreat Uluwatu</Link>
                        <Link to="/uluwatu-4-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUluwatuOpen(false); }}>4 Days Retreat Uluwatu</Link>
                        <Link to="/uluwatu-5-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUluwatuOpen(false); }}>5 Days Retreat Uluwatu</Link>
                        <Link to="/uluwatu-6-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUluwatuOpen(false); }}>6 Days Retreat Uluwatu</Link>
                        <Link to="/uluwatu-7-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUluwatuOpen(false); }}>7 Days Retreat Uluwatu</Link>
                        <Link to="/uluwatu-8-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUluwatuOpen(false); }}>8 Days Retreat Uluwatu</Link>
                        <Link to="/uluwatu-9-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUluwatuOpen(false); }}>9 Days Retreat Uluwatu</Link>
                        <Link to="/uluwatu-10-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsUluwatuOpen(false); }}>10 Days Retreat Uluwatu</Link>
                        <Link to="/uluwatu-11-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-b-lg" onClick={() => { setIsRetreatsOpen(false); setIsUluwatuOpen(false); }}>11 Days Retreat Uluwatu</Link>
                      </div>
                    )}
                  </div>

                  {/* Canggu Retreats with Submenu */}
                  <div 
                    className="relative group"
                    onMouseEnter={handleCangguEnter}
                    onMouseLeave={handleCangguLeave}
                  >
                    <button className="w-full flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-b-lg">
                      <span>Canggu Retreats</span>
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </button>
                    
                    {isCangguOpen && (
                      <div 
                        className="absolute top-0 left-full ml-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-60"
                        onMouseEnter={handleCangguEnter}
                        onMouseLeave={handleCangguLeave}
                      >
                        <Link to="/canggu-3-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-t-lg" onClick={() => { setIsRetreatsOpen(false); setIsCangguOpen(false); }}>3 Days Retreat Canggu</Link>
                        <Link to="/canggu-4-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsCangguOpen(false); }}>4 Days Retreat Canggu</Link>
                        <Link to="/canggu-5-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsCangguOpen(false); }}>5 Days Retreat Canggu</Link>
                        <Link to="/canggu-6-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsCangguOpen(false); }}>6 Days Retreat Canggu</Link>
                        <Link to="/canggu-7-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsCangguOpen(false); }}>7 Days Retreat Canggu</Link>
                        <Link to="/canggu-8-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsCangguOpen(false); }}>8 Days Retreat Canggu</Link>
                        <Link to="/canggu-9-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsCangguOpen(false); }}>9 Days Retreat Canggu</Link>
                        <Link to="/canggu-10-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => { setIsRetreatsOpen(false); setIsCangguOpen(false); }}>10 Days Retreat Canggu</Link>
                        <Link to="/canggu-11-days-retreat" className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-b-lg" onClick={() => { setIsRetreatsOpen(false); setIsCangguOpen(false); }}>11 Days Retreat Canggu</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about-us"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 group"
            >
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>About Us</span>
            </Link>

            <button 
              onClick={() => scrollToSection('blog')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 group"
            >
              <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Blog</span>
            </button>

            <Link 
              to="/contact-us"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
            </Link>

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
                    {/* Ubud Retreats Submenu */}
                    <div>
                      <button 
                        onClick={() => setIsUbudOpen(!isUbudOpen)}
                        className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        <span>Ubud Retreats</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isUbudOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isUbudOpen && (
                        <div className="ml-4 space-y-1 mt-2 animate-in slide-in-from-top-1 duration-200">
                          <Link to="/3-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>3 Days Retreat Ubud</Link>
                          <Link to="/4-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>4 Days Retreat Ubud</Link>
                          <Link to="/5-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>5 Days Retreat Ubud</Link>
                          <Link to="/6-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>6 Days Retreat Ubud</Link>
                          <Link to="/7-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>7 Days Retreat Ubud</Link>
                          <Link to="/8-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>8 Days Retreat Ubud</Link>
                          <Link to="/9-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>9 Days Retreat Ubud</Link>
                          <Link to="/10-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>10 Days Retreat Ubud</Link>
                          <Link to="/11-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>11 Days Retreat Ubud</Link>
                        </div>
                      )}
                    </div>
                    
                    {/* Uluwatu Retreats Mobile Submenu */}
                    <div>
                      <button 
                        onClick={() => setIsUluwatuOpen(!isUluwatuOpen)}
                        className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        <span>Uluwatu Retreats</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isUluwatuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isUluwatuOpen && (
                        <div className="ml-4 space-y-1 mt-2 animate-in slide-in-from-top-1 duration-200">
                          <Link to="/uluwatu-3-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>3 Days Retreat Uluwatu</Link>
                          <Link to="/uluwatu-4-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>4 Days Retreat Uluwatu</Link>
                          <Link to="/uluwatu-5-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>5 Days Retreat Uluwatu</Link>
                          <Link to="/uluwatu-6-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>6 Days Retreat Uluwatu</Link>
                          <Link to="/uluwatu-7-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>7 Days Retreat Uluwatu</Link>
                          <Link to="/uluwatu-8-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>8 Days Retreat Uluwatu</Link>
                          <Link to="/uluwatu-9-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>9 Days Retreat Uluwatu</Link>
                          <Link to="/uluwatu-10-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>10 Days Retreat Uluwatu</Link>
                          <Link to="/uluwatu-11-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>11 Days Retreat Uluwatu</Link>
                        </div>
                      )}
                    </div>

                    {/* Canggu Retreats Mobile Submenu */}
                    <div>
                      <button 
                        onClick={() => setIsCangguOpen(!isCangguOpen)}
                        className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        <span>Canggu Retreats</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isCangguOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isCangguOpen && (
                        <div className="ml-4 space-y-1 mt-2 animate-in slide-in-from-top-1 duration-200">
                          <Link to="/canggu-3-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>3 Days Retreat Canggu</Link>
                          <Link to="/canggu-4-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>4 Days Retreat Canggu</Link>
                          <Link to="/canggu-5-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>5 Days Retreat Canggu</Link>
                          <Link to="/canggu-6-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>6 Days Retreat Canggu</Link>
                          <Link to="/canggu-7-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>7 Days Retreat Canggu</Link>
                          <Link to="/canggu-8-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>8 Days Retreat Canggu</Link>
                          <Link to="/canggu-9-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>9 Days Retreat Canggu</Link>
                          <Link to="/canggu-10-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>10 Days Retreat Canggu</Link>
                          <Link to="/canggu-11-days-retreat" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" onClick={() => setIsMenuOpen(false)}>11 Days Retreat Canggu</Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/about-us"
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-5 h-5" />
                <span>About Us</span>
              </Link>

              <button 
                onClick={() => scrollToSection('blog')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Blog</span>
              </button>

              <Link 
                to="/contact-us"
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>

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
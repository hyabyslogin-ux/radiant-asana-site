import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-yoga-rose/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">Serenity Yoga</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#classes" className="text-foreground hover:text-primary transition-colors">Classes</a>
            <a href="#instructor" className="text-foreground hover:text-primary transition-colors">Instructor</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button variant="outline" className="border-yoga-rose hover:bg-yoga-rose hover:text-background">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#classes" className="text-foreground hover:text-primary transition-colors">Classes</a>
              <a href="#instructor" className="text-foreground hover:text-primary transition-colors">Instructor</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button variant="outline" className="border-yoga-rose hover:bg-yoga-rose hover:text-background w-fit">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
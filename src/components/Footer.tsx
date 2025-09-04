import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yoga-plum text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Serenity Yoga</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Transform your body and mind through the ancient practice of yoga. 
              Our studio is a sanctuary where you can find peace, strength, and community.
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-yoga-rose" fill="currentColor" />
              <span>for your wellness journey</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#classes" className="text-white/80 hover:text-white transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#instructor" className="text-white/80 hover:text-white transition-colors">
                  Instructor
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Studio Info</h4>
            <div className="space-y-2 text-white/80">
              <p>123 Serenity Lane</p>
              <p>Wellness District</p>
              <p>Peaceful City, PC 12345</p>
              <p className="pt-2">
                <a href="tel:5551239642" className="hover:text-white transition-colors">
                  (555) 123-YOGA
                </a>
              </p>
              <p>
                <a href="mailto:info@serenityyoga.com" className="hover:text-white transition-colors">
                  info@serenityyoga.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70">
            © 2024 Serenity Yoga Studio. All rights reserved. | 
            <span className="mx-2">Privacy Policy</span> | 
            <span className="mx-2">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
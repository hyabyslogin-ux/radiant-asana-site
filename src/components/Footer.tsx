import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-yoga-earth via-yoga-plum to-yoga-sage text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yoga-cream/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yoga-peach/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yoga-rose/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8 flex items-center gap-4">
                <img 
                  src="/lovable-uploads/b7c337a0-f964-45ce-ba6f-0dbe704e5e64.png" 
                  alt="Bali Yoga Retreat Logo" 
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="font-playfair text-4xl font-bold mb-4 bg-gradient-to-r from-yoga-cream via-yoga-peach to-white bg-clip-text text-transparent">
                    Bali Yoga Retreats
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed max-w-md">
                    Transform your mind, body, and soul through authentic Balinese healing practices, mindful yoga, and spiritual awakening in paradise.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-white/80 mb-8">
                <span className="font-inter flex items-center gap-2">
                  Made with <Heart className="w-5 h-5 text-yoga-peach" fill="currentColor" /> 
                  for your spiritual journey
                </span>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-4">
                <a href="https://www.facebook.com/yogaschoolinbali/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <Facebook className="w-5 h-5 text-white/80 group-hover:text-white" />
                </a>
                <a href="https://www.instagram.com/baliyogaschool/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <Instagram className="w-5 h-5 text-white/80 group-hover:text-white" />
                </a>
                <a href="https://twitter.com/BaliYogaSchool1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <Twitter className="w-5 h-5 text-white/80 group-hover:text-white" />
                </a>
                <a href="https://www.youtube.com/channel/UCCuk6dzNT49OSJf0mK0bYSg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <MessageCircle className="w-5 h-5 text-white/80 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-2xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-yoga-cream rounded-full group-hover:w-2 transition-all duration-200"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-yoga-cream rounded-full group-hover:w-2 transition-all duration-200"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#ubud-retreats" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-yoga-cream rounded-full group-hover:w-2 transition-all duration-200"></span>
                    Ubud Retreats
                  </a>
                </li>
                <li>
                  <a href="/#uluwatu-retreats" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-yoga-cream rounded-full group-hover:w-2 transition-all duration-200"></span>
                    Uluwatu Retreats
                  </a>
                </li>
                <li>
                  <a href="/#canggu-retreats" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-yoga-cream rounded-full group-hover:w-2 transition-all duration-200"></span>
                    Canggu Retreats
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-yoga-cream rounded-full group-hover:w-2 transition-all duration-200"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-playfair text-2xl font-bold mb-6 text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-yoga-cream" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Bali, Indonesia</p>
                    <p className="text-white/70 text-sm">Ubud / Uluwatu / Canggu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                    <Phone className="w-5 h-5 text-yoga-cream" />
                  </div>
                  <div>
                    <a href="tel:+917217206223" className="text-white hover:text-yoga-cream transition-colors font-medium block">
                      Call +917217206223
                    </a>
                    <a href="https://wa.me/918279705844" className="text-white/70 hover:text-yoga-cream transition-colors text-sm">
                      WhatsApp +918279705844
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                    <Mail className="w-5 h-5 text-yoga-cream" />
                  </div>
                  <div>
                    <a href="mailto:info@baliyogaschool.com" className="text-white hover:text-yoga-cream transition-colors font-medium">
                      info@baliyogaschool.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative mt-16 pt-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 font-inter">
                Bali Yoga School - Yoga School in Bali | Yoga Retreat in Bali © 2019 - 2025. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-yoga-cream transition-colors">Privacy Policy</a>
                <span className="text-white/40">|</span>
                <a href="#" className="text-white/70 hover:text-yoga-cream transition-colors">Terms of Service</a>
                <span className="text-white/40">|</span>
                <a href="#" className="text-white/70 hover:text-yoga-cream transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
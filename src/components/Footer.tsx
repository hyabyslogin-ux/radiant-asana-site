import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle, Globe, Award, Users, Star, Flower, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-yoga-earth via-yoga-plum to-yoga-sage text-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-48 h-48 bg-yoga-cream/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-yoga-peach/12 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-yoga-rose/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-yoga-mauve/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="relative py-24">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-16 mb-16">
            
            {/* Enhanced Brand Section */}
            <div className="lg:col-span-2 md:col-span-3">
              <div className="mb-10 flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-yoga-cream/20 blur-xl rounded-full"></div>
                  <img 
                    src="/lovable-uploads/ecc51699-b2a2-48db-b13f-653aca4b3e91.png" 
                    alt="Bali Yoga Retreat Logo" 
                    className="relative w-20 h-20 rounded-full shadow-2xl"
                  />
                </div>
                <div>
                  <h3 className="font-playfair text-5xl font-bold mb-6 bg-gradient-to-r from-yoga-cream via-yoga-peach to-white bg-clip-text text-transparent">
                    Bali Yoga Retreats
                  </h3>
                  <p className="text-white/90 text-xl leading-relaxed max-w-xl font-inter">
                    Transform your mind, body, and soul through authentic Balinese healing practices, mindful yoga, and spiritual awakening in paradise. Experience the magic of Ubud, Uluwatu, and Canggu.
                  </p>
                </div>
              </div>
              
              {/* Keywords Section */}
              <div className="mb-10">
                <h4 className="font-playfair text-2xl font-semibold mb-6 text-yoga-cream">Popular Keywords</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Bali Yoga Retreat', 'Ubud Meditation', 'Uluwatu Cliff Yoga', 'Canggu Beach Wellness',
                    'Spiritual Awakening', 'Balinese Healing', 'Yoga Teacher Training', 'Mindfulness Retreat',
                    'Sacred Valley Ubud', 'Ocean View Yoga', 'Surf & Yoga', 'Authentic Bali Experience'
                  ].map((keyword, index) => (
                    <span 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-inter text-white/90 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Awards & Recognition */}
              <div className="mb-10">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-yoga-cream" />
                    </div>
                    <div>
                      <p className="font-semibold text-white font-inter">Certified School</p>
                      <p className="text-white/70 text-sm">Yoga Alliance Approved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-yoga-cream" />
                    </div>
                    <div>
                      <p className="font-semibold text-white font-inter">2500+ Students</p>
                      <p className="text-white/70 text-sm">Transformed Lives</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-white/80 mb-10">
                <span className="font-inter flex items-center gap-3 text-lg">
                  <Flower className="w-6 h-6 text-yoga-peach" />
                  Made with <Heart className="w-5 h-5 text-yoga-peach" fill="currentColor" /> 
                  for your spiritual journey
                </span>
              </div>
              
              {/* Enhanced Social Media */}
              <div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-yoga-cream">Connect With Us</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/yogaschoolinbali/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group border border-white/20">
                    <Facebook className="w-6 h-6 text-white/80 group-hover:text-white" />
                  </a>
                  <a href="https://www.instagram.com/baliyogaschool/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group border border-white/20">
                    <Instagram className="w-6 h-6 text-white/80 group-hover:text-white" />
                  </a>
                  <a href="https://twitter.com/BaliYogaSchool1" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group border border-white/20">
                    <Twitter className="w-6 h-6 text-white/80 group-hover:text-white" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCCuk6dzNT49OSJf0mK0bYSg" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group border border-white/20">
                    <MessageCircle className="w-6 h-6 text-white/80 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Retreat Programs */}
            <div>
              <h4 className="font-playfair text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <Flower className="w-6 h-6 text-yoga-cream" />
                Retreat Programs
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="/#ubud-retreats" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    Ubud Sacred Valley
                  </a>
                </li>
                <li>
                  <a href="/#uluwatu-retreats" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    Uluwatu Cliff-top
                  </a>
                </li>
                <li>
                  <a href="/#canggu-retreats" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    Canggu Beach Vibes
                  </a>
                </li>
                <li>
                  <a href="/3-days-retreat" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    3-Day Escapes
                  </a>
                </li>
                <li>
                  <a href="/7-days-retreat" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    7-Day Transformations
                  </a>
                </li>
                <li>
                  <a href="/11-days-retreat" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    11-Day Immersions
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <Globe className="w-6 h-6 text-yoga-cream" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/founder" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    Meet the Founder
                  </a>
                </li>
                <li>
                  <a href="/ubud-campus-gallery" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    Campus Photos
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    Blog & Stories
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="text-white/80 hover:text-yoga-cream transition-colors duration-200 font-inter flex items-center gap-3 group text-lg">
                    <span className="w-2 h-2 bg-yoga-cream rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-200"></span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Enhanced Contact Info */}
            <div>
              <h4 className="font-playfair text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <Star className="w-6 h-6 text-yoga-cream" />
                Get in Touch
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <MapPin className="w-6 h-6 text-yoga-cream" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg font-inter">Bali, Indonesia</p>
                    <p className="text-white/70 font-inter">Ubud Sacred Valley</p>
                    <p className="text-white/70 font-inter">Uluwatu Cliff-tops</p>
                    <p className="text-white/70 font-inter">Canggu Beach Area</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <Phone className="w-6 h-6 text-yoga-cream" />
                  </div>
                  <div>
                    <a href="tel:+917217206223" className="text-white hover:text-yoga-cream transition-colors font-semibold block text-lg font-inter">
                      Call +917217206223
                    </a>
                    <a href="https://wa.me/918279705844" className="text-white/70 hover:text-yoga-cream transition-colors font-inter">
                      WhatsApp +918279705844
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <Mail className="w-6 h-6 text-yoga-cream" />
                  </div>
                  <div>
                    <a href="mailto:info@baliyogaschool.com" className="text-white hover:text-yoga-cream transition-colors font-semibold text-lg font-inter">
                      info@baliyogaschool.com
                    </a>
                    <p className="text-white/70 text-sm font-inter">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <Calendar className="w-6 h-6 text-yoga-cream" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg font-inter">Book Your Retreat</p>
                    <p className="text-white/70 font-inter">Year-round Programs</p>
                    <p className="text-white/70 text-sm font-inter">Starting from $675</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Section */}
          <div className="relative mt-20 pt-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-center lg:text-left">
                <p className="text-white/90 font-inter text-lg mb-2">
                  <strong>Bali Yoga School</strong> - Authentic Yoga Retreats in Bali | Sacred Valley Ubud | Cliff-top Uluwatu | Beach Canggu
                </p>
                <p className="text-white/70 font-inter">
                  © 2019 - 2025 Bali Yoga Retreats. All Rights Reserved. | Yoga Alliance Certified | Authentic Balinese Wisdom
                </p>
              </div>
              <div className="flex flex-wrap gap-6 text-lg">
                <a href="#" className="text-white/70 hover:text-yoga-cream transition-colors font-inter">Privacy Policy</a>
                <span className="text-white/40">|</span>
                <a href="#" className="text-white/70 hover:text-yoga-cream transition-colors font-inter">Terms of Service</a>
                <span className="text-white/40">|</span>
                <a href="#" className="text-white/70 hover:text-yoga-cream transition-colors font-inter">Refund Policy</a>
                <span className="text-white/40">|</span>
                <a href="#" className="text-white/70 hover:text-yoga-cream transition-colors font-inter">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
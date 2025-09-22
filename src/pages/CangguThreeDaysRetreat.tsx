import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, MapPin, Wifi, Waves, Utensils, Gift, Phone, Mail, User } from 'lucide-react';

const CangguThreeDaysRetreat = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const galleryImages = [
    '/lovable-uploads/2c8cc260-25f3-4ae5-a498-e425800e509d.png',
    '/lovable-uploads/3b45fe7e-1832-4fee-92d1-320376e40af5.png', 
    '/lovable-uploads/45b5e644-5e4c-49e2-8d00-745b07651022.png',
    '/lovable-uploads/5117ac0b-9cea-4be9-83af-8536b5cd98d6.png',
    '/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png',
    '/lovable-uploads/84b47165-30fa-48cd-8655-1fdd40968712.png',
    '/lovable-uploads/8a948cb6-13f9-44c9-8fef-bce571ae9145.png',
    '/lovable-uploads/9e3fcc3b-076b-4912-b3b1-67a84baae207.png',
    '/lovable-uploads/b36093bd-c1e4-40a7-8601-24e53d082b0c.png',
    '/lovable-uploads/dd467e40-f434-4893-bfae-077adbaa9185.png',
    '/lovable-uploads/fa196a61-65f0-4c5b-945d-df28079ea3f3.png'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        
        {/* Minimal Background Layers */}
        <div className="absolute inset-0">
          {/* Static Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: `url(/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png)` }}
          />
          
          {/* Clean Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/90 via-yoga-sage/75 to-yoga-earth/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Subtle Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/10 rounded-full blur-3xl animate-float opacity-40"></div>
          <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gradient-to-tl from-yoga-rose/15 to-yoga-mauve/8 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full px-8 py-4 mb-12 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yoga-sage rounded-full animate-pulse"></div>
                <Badge className="bg-yoga-sage/90 text-white text-sm font-semibold px-3 py-1">Limited Time</Badge>
              </div>
              <span className="text-white/95 font-inter font-medium text-lg">15% Early Bird Discount Available</span>
            </div>
            
            {/* Main Heading with Clean Typography */}
            <div className="mb-8 space-y-4">
              <h1 className="font-playfair text-7xl sm:text-8xl lg:text-9xl font-bold leading-none">
                <span className="block text-white drop-shadow-xl tracking-tight">3 Days</span>
                <span className="block bg-gradient-to-r from-yoga-cream via-yoga-peach to-yoga-rose bg-clip-text text-transparent font-playfair">
                  Yoga Retreat
                </span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
                <p className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-light text-white/90 italic tracking-wide">
                  in Canggu Bali
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="mb-16 space-y-6">
              <p className="font-inter text-2xl sm:text-3xl lg:text-4xl font-light text-white/95 leading-relaxed max-w-4xl mx-auto">
                Transform Your Mind, Body & Soul by the Ocean
              </p>
              <p className="font-inter text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
                Experience authentic Balinese healing and surf culture in Canggu's vibrant beachside community
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-white/95 text-yoga-earth hover:bg-white font-inter font-semibold text-xl px-12 py-8 h-auto border-2 border-transparent hover:border-yoga-rose/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                <Calendar className="w-6 h-6 mr-3" />
                <span>Book Your Retreat - From $265</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white/15 font-inter font-semibold text-xl px-12 py-8 h-auto backdrop-blur-md transition-all duration-300 hover:border-white hover:scale-105 transform shadow-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                <span>Contact Our Team</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 z-30">
          <div className="animate-bounce">
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-inter font-medium tracking-wider opacity-80">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center shadow-lg">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Clean Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-1 bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-rose opacity-80"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Enhanced About/Details Section */}
        <section className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-cream/5 via-transparent to-yoga-sage/5 rounded-3xl"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-yoga-peach/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-yoga-rose/8 rounded-full blur-2xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-yoga-sage/10 via-yoga-earth/5 to-yoga-plum/10 px-12 py-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <div className="w-2 h-2 bg-yoga-sage rounded-full animate-pulse"></div>
                  <span className="font-inter text-yoga-earth font-medium">Authentic Canggu Beach Experience</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Experience Deep 
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Immerse yourself in Canggu's vibrant surf culture while combining ancient wisdom with modern beachside wellness practices
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="px-12 py-16 space-y-16">
              
              {/* Journey Overview */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-12H3" />
                      </svg>
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-yoga-earth">Your Beachside Journey</h3>
                  </div>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Embark on a transformative journey through our carefully crafted 3-day yoga retreat in vibrant Canggu Bali. This immersive beachside experience combines traditional <strong className="text-yoga-earth">Hatha Vinyasa yoga practices</strong> with surf culture and creative community vibes, creating the perfect environment for physical rejuvenation and spiritual awakening by the ocean.
                  </p>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Located in Canggu's trendy beachside area, our retreat center offers <strong className="text-yoga-sage">stunning ocean views and creative energy</strong> designed to harmonize with the rhythm of the waves. Each morning begins with beach yoga sessions and meditation that ground you in mindfulness while connecting with Canggu's vibrant surf and wellness community.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/20 rounded-2xl p-8 backdrop-blur-sm border border-yoga-cream/30">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-8 h-8 text-yoga-sage" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">3 Days</h4>
                        <p className="font-inter text-sm text-gray-600">Beachside Program</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Waves className="w-8 h-8 text-yoga-earth" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Ocean Views</h4>
                        <p className="font-inter text-sm text-gray-600">Beach Locations</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-8 h-8 text-yoga-rose" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Small Groups</h4>
                        <p className="font-inter text-sm text-gray-600">Personal Attention</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-peach/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Gift className="w-8 h-8 text-yoga-plum" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">All Levels</h4>
                        <p className="font-inter text-sm text-gray-600">Beginner to Advanced</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healing Practices */}
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Holistic Beach Wellness Practices</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
                    Our retreat extends beyond yoga mat practice to encompass complete beachside wellness and creative growth
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  
                  {/* Ocean Sound Healing */}
                  <div className="group bg-gradient-to-br from-white to-yoga-cream/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Waves className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Ocean Sound Healing</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Natural ocean waves combined with Tibetan singing bowls create powerful vibrational therapy that releases tension while connecting with Canggu's surf energy.
                    </p>
                  </div>
                  
                  {/* Balinese Beach Massage */}
                  <div className="group bg-gradient-to-br from-white to-yoga-peach/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-peach/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Beachside Massage</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Traditional Balinese massage techniques enhanced by the healing ocean breeze, using natural oils and pressure points to restore energy flow.
                    </p>
                  </div>
                  
                  {/* Organic Beach Bowl Nutrition */}
                  <div className="group bg-gradient-to-br from-white to-yoga-rose/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-rose/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Utensils className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Beach Bowl Nutrition</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Fresh acai bowls and organic smoothies from Canggu's famous healthy cafés, supporting natural detoxification and beach lifestyle wellness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accommodation */}
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Beachfront Accommodation</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
                    Relax in our eco-friendly beachside bungalows, designed to harmonize with Canggu's natural beauty and creative energy
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Bungalow Image */}
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/b36093bd-c1e4-40a7-8601-24e53d082b0c.png" 
                      alt="Beachfront bungalow in Canggu" 
                      className="rounded-2xl shadow-xl" 
                    />
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-yoga-sage/20 rounded-xl flex items-center justify-center">
                        <Wifi className="w-5 h-5 text-yoga-sage" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-xl font-semibold text-yoga-earth">Eco-Friendly Design</h4>
                        <p className="font-inter text-gray-700 leading-relaxed">
                          Our bungalows are built with sustainable materials to minimize environmental impact and maximize comfort.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-yoga-earth/20 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-yoga-earth" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-xl font-semibold text-yoga-earth">Prime Beach Location</h4>
                        <p className="font-inter text-gray-700 leading-relaxed">
                          Located steps from Canggu's famous surf breaks and vibrant beach clubs, our bungalows offer unparalleled access to the best of Canggu.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-yoga-rose/20 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-yoga-rose" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-xl font-semibold text-yoga-earth">24/7 Support</h4>
                        <p className="font-inter text-gray-700 leading-relaxed">
                          Our friendly staff is available around the clock to ensure your stay is comfortable and stress-free.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Included in Your Retreat */}
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Included in Your Retreat</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
                    Everything you need for a transformative 3-day yoga experience by the ocean
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Private Accommodation */}
                  <div className="group bg-gradient-to-br from-white to-yoga-cream/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/20 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                      </svg>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Private Accommodation</h4>
                    <p className="font-inter text-sm text-gray-600">Comfortable beachfront bungalow with ocean views</p>
                  </div>

                  {/* 3 Daily Vegetarian Meals */}
                  <div className="group bg-gradient-to-br from-white to-yoga-peach/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-peach/20 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Utensils className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">3 Daily Vegetarian Meals</h4>
                    <p className="font-inter text-sm text-gray-600">Nutritious organic meals to support your practice</p>
                  </div>

                  {/* Mentioned Yoga Classes */}
                  <div className="group bg-gradient-to-br from-white to-yoga-rose/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-rose/20 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">All Yoga Classes</h4>
                    <p className="font-inter text-sm text-gray-600">Hatha, Vinyasa, and beachside yoga sessions</p>
                  </div>

                  {/* Mentioned Healing Sessions */}
                  <div className="group bg-gradient-to-br from-white to-yoga-sage/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-sage/20 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Healing Sessions</h4>
                    <p className="font-inter text-sm text-gray-600">Sound healing, massage therapy, and meditation</p>
                  </div>

                  {/* Swimming Pool Access */}
                  <div className="group bg-gradient-to-br from-white to-yoga-cream/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/20 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Swimming Pool Access</h4>
                    <p className="font-inter text-sm text-gray-600">Refreshing pool with ocean views for relaxation</p>
                  </div>

                  {/* Gym Access */}
                  <div className="group bg-gradient-to-br from-white to-yoga-peach/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-peach/20 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Gym Access</h4>
                    <p className="font-inter text-sm text-gray-600">Fully equipped fitness center for cross-training</p>
                  </div>

                  {/* Free High-Speed Wi-Fi */}
                  <div className="group bg-gradient-to-br from-white to-yoga-sage/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-sage/20 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Wifi className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Free High-Speed Wi-Fi</h4>
                    <p className="font-inter text-sm text-gray-600">Stay connected with reliable internet access</p>
                  </div>

                  {/* All Necessary Items */}
                  <div className="group bg-gradient-to-br from-white to-yoga-rose/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-rose/20 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">All Session Items</h4>
                    <p className="font-inter text-sm text-gray-600">Yoga mats, props, and equipment provided</p>
                  </div>

                  {/* Retreat Materials */}
                  <div className="group bg-gradient-to-br from-white to-yoga-cream/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/20 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Retreat Materials</h4>
                    <p className="font-inter text-sm text-gray-600">School bag, t-shirt, notebook, and pen included</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Retreat Pricing</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
                    Invest in your well-being with our affordable 3-day Canggu retreat packages
                  </p>
                  <div className="mt-8">
                    <button 
                      onClick={() => window.location.href = '/ubud-campus-gallery'}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-yoga-plum to-yoga-rose text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
                      </svg>
                      View Campus Images
                    </button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  
                  {/* Early Bird */}
                  <div className="group bg-gradient-to-br from-white to-yoga-cream/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Early Bird</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Book now and save 15% on your retreat package.
                    </p>
                    <Button className="mt-6 w-full bg-yoga-sage text-white hover:bg-yoga-earth">From $265</Button>
                  </div>
                  
                  {/* Standard */}
                  <div className="group bg-gradient-to-br from-white to-yoga-peach/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-peach/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Standard</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Enjoy our standard retreat package with all the essential amenities.
                    </p>
                    <Button className="mt-6 w-full bg-yoga-earth text-white hover:bg-yoga-plum">From $310</Button>
                  </div>
                  
                  {/* Premium */}
                  <div className="group bg-gradient-to-br from-white to-yoga-rose/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-rose/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Utensils className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Premium</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Indulge in our premium package with extra perks and personalized attention.
                    </p>
                    <Button className="mt-6 w-full bg-yoga-rose text-white hover:bg-yoga-mauve">From $375</Button>
                  </div>
                </div>
              </div>

              {/* Memories */}
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Canggu Retreat Memories</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
                    Relive the magic of our past retreats through these cherished moments
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={image} 
                        alt={`Canggu retreat memory ${index + 1}`} 
                        className="rounded-2xl shadow-xl" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Contact Us</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
                    Ready to embark on your Canggu yoga journey? Contact us today to book your retreat
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-yoga-sage/20 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-yoga-sage" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-xl font-semibold text-yoga-earth">Call Us</h4>
                        <p className="font-inter text-gray-700 leading-relaxed">
                          +62 123 456 789
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-yoga-earth/20 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-yoga-earth" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-xl font-semibold text-yoga-earth">Email Us</h4>
                        <p className="font-inter text-gray-700 leading-relaxed">
                          info@baliyogaschool.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-yoga-rose/20 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-yoga-rose" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-xl font-semibold text-yoga-earth">Visit Us</h4>
                        <p className="font-inter text-gray-700 leading-relaxed">
                          Canggu Beach, Bali, Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Form */}
                  <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-center font-playfair text-2xl font-semibold text-yoga-earth">Send us a message</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input 
                          type="text" 
                          name="name"
                          placeholder="Your Name" 
                          className="border-gray-300 rounded-md shadow-sm focus:border-yoga-sage focus:ring focus:ring-yoga-sage/50"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <Input 
                          type="email" 
                          name="email"
                          placeholder="Your Email" 
                          className="border-gray-300 rounded-md shadow-sm focus:border-yoga-sage focus:ring focus:ring-yoga-sage/50"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <Input 
                          type="tel" 
                          name="phone"
                          placeholder="Your Phone" 
                          className="border-gray-300 rounded-md shadow-sm focus:border-yoga-sage focus:ring focus:ring-yoga-sage/50"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <Textarea 
                          name="message"
                          placeholder="Your Message" 
                          className="border-gray-300 rounded-md shadow-sm focus:border-yoga-sage focus:ring focus:ring-yoga-sage/50"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                        <Button type="submit" className="w-full bg-yoga-earth text-white hover:bg-yoga-sage">Send Message</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing, Terms, Memories, and Contact sections would follow the same pattern */}
        {/* ... continue with existing structure but update content for Canggu ... */}
      </div>

      <Footer />
    </div>
  );
};

export default CangguThreeDaysRetreat;

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

const UluwatuThreeDaysRetreat = () => {
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
                <Badge className="bg-yoga-sage/90 text-white text-sm font-semibold px-3 py-1">3 Days Uluwatu Experience</Badge>
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
                  in Uluwatu Bali
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="mb-16 space-y-6">
              <p className="font-inter text-2xl sm:text-3xl lg:text-4xl font-light text-white/95 leading-relaxed max-w-4xl mx-auto">
                Transform Your Mind, Body & Soul
              </p>
              <p className="font-inter text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
                Experience authentic Balinese healing, mindfulness practices, and spiritual awakening in Uluwatu Bali's most sacred clifftop locations
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
                  <span className="font-inter text-yoga-earth font-medium">Authentic Uluwatu Bali Experience</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Experience Deep 
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Immerse yourself in a carefully crafted journey that combines ancient wisdom with modern wellness practices in Uluwatu Bali's stunning clifftop setting
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
                    <h3 className="font-playfair text-2xl font-semibold text-yoga-earth">Your Transformative Journey</h3>
                  </div>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Embark on a transformative journey through our carefully crafted 3-day yoga retreat in the dramatic clifftop setting of Uluwatu Bali. This immersive experience combines traditional <strong className="text-yoga-earth">Hatha Vinyasa yoga practices</strong> with authentic Balinese healing traditions, creating the perfect environment for physical rejuvenation and spiritual awakening.
                  </p>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Located in Uluwatu Bali's most sacred clifftop locations, our retreat center offers <strong className="text-yoga-sage">breathtaking ocean views and two beautiful campuses</strong> designed to harmonize with nature's rhythm. Each morning begins with pranayama breathing exercises and meditation sessions that ground you in mindfulness.
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
                        <p className="font-inter text-sm text-gray-600">Intensive Program</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-8 h-8 text-yoga-earth" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Clifftop Location</h4>
                        <p className="font-inter text-sm text-gray-600">Ocean Views</p>
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
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/20 rounded-2xl p-8 backdrop-blur-sm border border-yoga-cream/30">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Waves className="w-8 h-8 text-yoga-sage" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Oceanfront Yoga</h4>
                        <p className="font-inter text-sm text-gray-600">Invigorating Sessions</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Utensils className="w-8 h-8 text-yoga-earth" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Nourishing Meals</h4>
                        <p className="font-inter text-sm text-gray-600">Organic & Local</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Wifi className="w-8 h-8 text-yoga-rose" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Digital Detox</h4>
                        <p className="font-inter text-sm text-gray-600">Mindful Disconnection</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-peach/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Clock className="w-8 h-8 text-yoga-plum" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Flexible Schedule</h4>
                        <p className="font-inter text-sm text-gray-600">Personalized Attention</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-yoga-earth">Balinese Healing Practices</h3>
                  </div>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Experience the profound healing traditions of Bali with our carefully curated sessions. Our expert healers will guide you through ancient practices designed to release emotional blockages, reduce stress, and promote overall well-being.
                  </p>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    These healing practices include traditional Balinese massage, chakra balancing, and energy cleansing rituals, all performed in a serene and supportive environment.
                  </p>
                </div>
              </div>

              {/* Personal Growth */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-yoga-earth">Personal Growth & Mindfulness</h3>
                  </div>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Our retreat is designed to foster personal growth and deepen your understanding of mindfulness. Through guided meditation, interactive workshops, and mindful movement practices, you'll cultivate a greater sense of self-awareness and inner peace.
                  </p>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Learn practical techniques to manage stress, enhance focus, and cultivate a more positive outlook on life. Our experienced instructors will provide personalized guidance and support to help you integrate these practices into your daily routine.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/20 rounded-2xl p-8 backdrop-blur-sm border border-yoga-cream/30">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-8 h-8 text-yoga-sage" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Daily Workshops</h4>
                        <p className="font-inter text-sm text-gray-600">Interactive Sessions</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-8 h-8 text-yoga-earth" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Nature Walks</h4>
                        <p className="font-inter text-sm text-gray-600">Mindful Exploration</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-8 h-8 text-yoga-rose" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Group Sharing</h4>
                        <p className="font-inter text-sm text-gray-600">Supportive Community</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-peach/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Gift className="w-8 h-8 text-yoga-plum" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Personalized Gifts</h4>
                        <p className="font-inter text-sm text-gray-600">Mindful Reminders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gradient-to-br from-yoga-earth/5 via-yoga-sage/5 to-yoga-plum/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-yoga-earth mb-4">
              Investment in Your
              <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
              Complete 3-day retreat experience in Uluwatu Bali
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-yoga-earth mb-4">$265</div>
                  <p className="text-xl text-gray-600">Complete 3-Day Experience</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Included:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        Daily yoga sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        Meditation & pranayama
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        Balinese massage treatments
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        All meals & accommodation
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Bonus Features:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Sound healing sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Yoga philosophy workshops
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Temple visits & cultural experiences
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Digital detox support
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <Button size="lg" className="bg-gradient-to-r from-yoga-sage to-yoga-earth text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Reserve Your Spot
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Memories Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-yoga-earth mb-4">
              Retreat
              <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                Memories
              </span>
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Glimpses from our transformative journeys in Uluwatu Bali
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl aspect-square">
                <img 
                  src={image} 
                  alt={`Retreat memory ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-yoga-cream/10 via-white to-yoga-sage/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-yoga-earth mb-4">
              Ready to Begin Your
              <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                Journey?
              </span>
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Contact us to reserve your spot or ask any questions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-yoga-sage" />
                <div>
                  <p className="font-semibold text-yoga-earth">Phone</p>
                  <p className="text-gray-600">+62 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-yoga-sage" />
                <div>
                  <p className="font-semibold text-yoga-earth">Email</p>
                  <p className="text-gray-600">info@baliyogaschool.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-yoga-sage" />
                <div>
                  <p className="font-semibold text-yoga-earth">Location</p>
                  <p className="text-gray-600">Uluwatu, Bali, Indonesia</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/70 border-yoga-sage/30"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/70 border-yoga-sage/30"
                />
              </div>
              
              <Input
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white/70 border-yoga-sage/30"
              />
              
              <Textarea
                name="message"
                placeholder="Tell us about your yoga experience and what you hope to gain from this retreat..."
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="bg-white/70 border-yoga-sage/30"
              />
              
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-yoga-sage to-yoga-earth text-white">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default UluwatuThreeDaysRetreat;

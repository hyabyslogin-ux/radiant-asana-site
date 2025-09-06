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

const ThreeDaysRetreat = () => {
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
    '/lovable-uploads/yoga-retreat-1.jpg',
    '/lovable-uploads/yoga-retreat-2.jpg',
    '/lovable-uploads/yoga-retreat-3.jpg',
    '/lovable-uploads/2c8cc260-25f3-4ae5-a498-e425800e509d.png',
    '/lovable-uploads/3b45fe7e-1832-4fee-92d1-320376e40af5.png',
    '/lovable-uploads/45b5e644-5e4c-49e2-8d00-745b07651022.png'
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
                  in Paradise
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
                Experience authentic Balinese healing, mindfulness practices, and spiritual awakening in Bali's most sacred locations
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
                  <span className="font-inter text-yoga-earth font-medium">Authentic Bali Experience</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Experience Deep 
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Immerse yourself in a carefully crafted journey that combines ancient wisdom with modern wellness practices
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
                    Embark on a transformative journey through our carefully crafted 3-day yoga retreat in the heart of Bali. This immersive experience combines traditional <strong className="text-yoga-earth">Hatha Vinyasa yoga practices</strong> with authentic Balinese healing traditions, creating the perfect environment for physical rejuvenation and spiritual awakening.
                  </p>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Located in Bali's serene countryside, our retreat center offers <strong className="text-yoga-sage">two beautiful campuses</strong> designed to harmonize with nature's rhythm. Each morning begins with pranayama breathing exercises and meditation sessions that ground you in mindfulness.
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
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">2 Campuses</h4>
                        <p className="font-inter text-sm text-gray-600">Beautiful Locations</p>
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
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Holistic Healing Practices</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
                    Our retreat extends beyond yoga mat practice to encompass complete wellness and spiritual growth
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  
                  {/* Sound Healing */}
                  <div className="group bg-gradient-to-br from-white to-yoga-cream/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Waves className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Sound Healing</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Traditional Tibetan singing bowls and crystal instruments create vibrational therapy that releases deep-seated tension and promotes cellular healing.
                    </p>
                  </div>
                  
                  {/* Balinese Massage */}
                  <div className="group bg-gradient-to-br from-white to-yoga-peach/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-peach/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Balinese Massage</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Authentic techniques passed down through generations, using natural oils and pressure points to restore energy flow and deep relaxation.
                    </p>
                  </div>
                  
                  {/* Organic Nutrition */}
                  <div className="group bg-gradient-to-br from-white to-yoga-rose/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-rose/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Utensils className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Organic Nutrition</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Fresh, organic ingredients from local farmers combined with authentic Indonesian flavors to support natural detoxification.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Growth */}
              <div className="bg-gradient-to-r from-yoga-sage/5 via-yoga-earth/5 to-yoga-plum/5 rounded-2xl p-12 border border-yoga-sage/10">
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Personalized Growth Journey</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
                    Whether you're a beginner or experienced practitioner, our intimate group settings ensure personalized attention
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-sage rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Beginner-Friendly Approach</h4>
                        <p className="font-inter text-gray-700">Introduction to yoga principles and foundational practices in a supportive environment.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-earth rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Advanced Practice Development</h4>
                        <p className="font-inter text-gray-700">Deepen your existing practice with advanced techniques and spiritual insights.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-plum rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Lasting Transformation</h4>
                        <p className="font-inter text-gray-700">Integration techniques that ensure your learning continues long after returning home.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                      <blockquote className="font-playfair text-xl italic text-yoga-earth mb-6 leading-relaxed">
                        "The combination of structured activities and free time allows natural integration of learning, ensuring lasting transformation."
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-full flex items-center justify-center">
                          <span className="font-playfair text-white font-bold text-lg">YH</span>
                        </div>
                        <div>
                          <p className="font-inter font-semibold text-yoga-earth">Yogi Himanshu</p>
                          <p className="font-inter text-sm text-gray-600">Founder & Lead Instructor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Schedule */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth flex items-center gap-2">
                <Clock className="h-8 w-8" />
                Daily Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Day 1 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yoga-sage flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Day 1
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Check in</span>
                      <Badge variant="outline">12:00 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Lunch</span>
                      <Badge variant="outline">12:30 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Balinese Massage</span>
                      <Badge variant="outline">4:00 - 5:00 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Dinner</span>
                      <Badge variant="outline">7:00 pm</Badge>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yoga-sage flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Day 2
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Pranayama & Meditation</span>
                      <Badge variant="outline">7:00 - 8:00 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Hatha Vinyasa Yoga</span>
                      <Badge variant="outline">8:00 - 9:00 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Breakfast</span>
                      <Badge variant="outline">9:30 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Sound Healing</span>
                      <Badge variant="outline">11:00 am - 12:00 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Lunch</span>
                      <Badge variant="outline">12:30 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Balinese Massage</span>
                      <Badge variant="outline">4:00 - 5:00 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Dinner</span>
                      <Badge variant="outline">7:00 pm</Badge>
                    </div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yoga-sage flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Day 3
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Pranayama & Meditation</span>
                      <Badge variant="outline">7:00 - 8:00 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Hatha Vinyasa Yoga</span>
                      <Badge variant="outline">8:00 - 9:00 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Breakfast</span>
                      <Badge variant="outline">9:30 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Check out</span>
                      <Badge variant="outline">12:00 pm</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Retreat Dates & Pricing */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth">Retreat Dates & Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Dates */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yoga-sage">Yoga Retreat Dates</h3>
                <div className="bg-yoga-mist/10 p-6 rounded-lg space-y-2">
                  <p className="font-medium">Retreat Dates – We offer Yoga Retreats throughout the year of 2025. Please contact us to check availabilities of your desired dates.</p>
                  <p><strong>Check In –</strong> On the Day 1st after 12:00 pm</p>
                  <p><strong>Check Out –</strong> On the last day before 12:00 pm</p>
                </div>
              </div>

              <Separator />

              {/* Pricing */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yoga-sage">Retreat Fees / Inclusions</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card className="border-2 border-yoga-sage/20">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-lg mb-2">Private Room Campus-I</h4>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-yoga-earth">$425 USD</p>
                        <p className="text-sm text-gray-500 line-through">$500 USD</p>
                        <Badge className="bg-yoga-sage text-white">15% off</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-yoga-sage/20">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-lg mb-2">Twin Shared Campus-I</h4>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-yoga-earth">$265 USD</p>
                        <p className="text-sm text-gray-500 line-through">$312.5 USD</p>
                        <Badge className="bg-yoga-sage text-white">15% off</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-yoga-sage/20">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-lg mb-2">Private Room Campus-II</h4>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-yoga-earth">$323 USD</p>
                        <p className="text-sm text-gray-500 line-through">$375 USD</p>
                        <Badge className="bg-yoga-sage text-white">15% off</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Inclusions */}
                <div className="bg-gradient-to-r from-yoga-mist/10 to-yoga-sage/5 p-6 rounded-lg">
                  <p className="font-semibold mb-3 text-yoga-earth">Retreat Duration - 3 Days & 2 Nights</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-yoga-sage" />
                        <span>Private Accommodation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="h-4 w-4 text-yoga-sage" />
                        <span>Nutritious vegan/vegetarian meals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-yoga-sage" />
                        <span>All mentioned Yoga Classes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-yoga-sage" />
                        <span>Complimentary High-Speed Wi-Fi</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Waves className="h-4 w-4 text-yoga-sage" />
                        <span>Swimming pool Access (10:00 AM - 8:00 PM)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-yoga-sage" />
                        <span>All necessary class items provided</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-yoga-sage" />
                        <span>2 Complimentary Balinese Massages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-yoga-sage" />
                        <span>Course Materials (Bag, T-shirt, Notebook, Pen, Mala)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Terms & Conditions */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth">Yoga Retreat Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Booking Process */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yoga-sage">Booking Process</h3>
                <div className="bg-yoga-mist/10 p-6 rounded-lg">
                  <p className="leading-relaxed">
                    In order to book for retreat kindly deposit the Advance booking amount of <strong>150 USD</strong>. Balance should be paid on arrival either by card, cash or Online transfer. An official confirmation letter concerning your program will be send to you shortly after successful advance booking fee.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Refund Policy */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yoga-sage">Refund Policy</h3>
                <div className="bg-yoga-mist/10 p-6 rounded-lg">
                  <p className="leading-relaxed">
                    Advance Booking deposit is <strong>non-refundable</strong>, we accept date rescheduling. If you cancel the course after joining, we accept the cancellation but the course fees will not be refunded with the cancellation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gallery Section */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth text-center">Retreat Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
                    <img 
                      src={image} 
                      alt={`Yoga retreat gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section>
          <Card className="shadow-zen max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth text-center">Book Your Retreat</CardTitle>
              <p className="text-center text-gray-600">Ready to transform? Get in touch with us today.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your yoga experience and any special requirements..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-yoga-sage hover:bg-yoga-sage/90 text-white">
                  Send Inquiry & Book Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

      </div>
      
      <Footer />
    </div>
  );
};

export default ThreeDaysRetreat;
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
        
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          {/* Primary Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-110 animate-drift"
            style={{ backgroundImage: `url(/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png)` }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/95 via-yoga-sage/80 to-yoga-earth/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yoga-rose/20 to-transparent"></div>
        </div>
        
        {/* Organic Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large organic shapes */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-yoga-cream/30 to-yoga-peach/20 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gradient-to-tl from-yoga-rose/25 to-yoga-mauve/15 rounded-full blur-3xl animate-drift opacity-50"></div>
          
          {/* Medium flowing shapes */}
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-br from-white/20 to-yoga-cream/10 rounded-full blur-2xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-tr from-yoga-sage/30 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Small particles */}
          <div className="absolute top-32 left-16 w-6 h-6 bg-yoga-cream/60 rounded-full animate-float blur-sm" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 right-20 w-4 h-4 bg-yoga-peach/50 rounded-full animate-drift blur-sm" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-8 h-8 bg-yoga-rose/40 rounded-full animate-pulse-glow blur-sm" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-40 right-1/3 w-5 h-5 bg-white/40 rounded-full animate-float blur-sm" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full px-8 py-4 mb-12 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yoga-sage rounded-full animate-pulse-glow"></div>
                <Badge className="bg-yoga-sage/90 text-white text-sm font-semibold px-3 py-1">Limited Time</Badge>
              </div>
              <span className="text-white/95 font-inter font-medium text-lg">15% Early Bird Discount Available</span>
            </div>
            
            {/* Main Heading with Custom Typography */}
            <div className="mb-8 space-y-4">
              <h1 className="font-playfair text-7xl sm:text-8xl lg:text-9xl font-bold leading-none">
                <span className="block text-white drop-shadow-2xl tracking-tight">3 Days</span>
                <span className="block bg-gradient-to-r from-yoga-cream via-yoga-peach to-yoga-rose bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto] font-playfair">
                  Yoga Retreat
                </span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent w-24"></div>
                <p className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-light text-white/90 italic tracking-wide">
                  in Paradise
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent w-24"></div>
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
                className="group relative overflow-hidden bg-white/95 text-yoga-earth hover:bg-white font-inter font-semibold text-xl px-12 py-8 h-auto border-2 border-transparent hover:border-yoga-rose/50 transition-all duration-500 shadow-2xl hover:shadow-yoga-rose/25 hover:scale-105 transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yoga-cream/20 to-yoga-peach/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Calendar className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Book Your Retreat - From $265</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group relative overflow-hidden border-2 border-white/80 text-white hover:bg-white/15 font-inter font-semibold text-xl px-12 py-8 h-auto backdrop-blur-md transition-all duration-500 hover:border-white hover:scale-105 transform shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Phone className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Contact Our Team</span>
              </Button>
            </div>
            
            {/* Enhanced Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 transform shadow-2xl hover:shadow-yoga-sage/25">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-yoga-sage/40 transition-shadow duration-500">
                    <Waves className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yoga-cream/80 rounded-full animate-pulse-glow"></div>
                </div>
                <h3 className="font-playfair font-semibold text-white text-xl mb-3">Sound Healing</h3>
                <p className="text-white/80 text-base font-inter leading-relaxed">Tibetan singing bowls & crystal therapy sessions</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 transform shadow-2xl hover:shadow-yoga-earth/25">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-yoga-earth/40 transition-shadow duration-500">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yoga-rose/80 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h3 className="font-playfair font-semibold text-white text-xl mb-3">Balinese Massage</h3>
                <p className="text-white/80 text-base font-inter leading-relaxed">2 complimentary traditional healing massages</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 transform shadow-2xl hover:shadow-yoga-rose/25">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-yoga-rose/40 transition-shadow duration-500">
                    <Utensils className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yoga-peach/80 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                </div>
                <h3 className="font-playfair font-semibold text-white text-xl mb-3">Organic Meals</h3>
                <p className="text-white/80 text-base font-inter leading-relaxed">Fresh vegetarian & vegan Balinese cuisine</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/90 z-30">
          <div className="animate-bounce">
            <div className="flex flex-col items-center gap-3">
              <span className="text-base font-inter font-medium tracking-wider">Scroll to explore</span>
              <div className="relative">
                <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center shadow-lg">
                  <div className="w-2 h-4 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
                <div className="absolute -inset-2 border border-white/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-2 bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-rose"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        </div>
        
        {/* Corner Decorative Elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/30 rounded-tl-xl"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/30 rounded-tr-xl"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/30 rounded-bl-xl"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/30 rounded-br-xl"></div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Details Section */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth mb-4">Experience Deep Transformation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Embark on a transformative journey through our carefully crafted 3-day yoga retreat in the heart of Bali. This immersive experience combines traditional Hatha Vinyasa yoga practices with authentic Balinese healing traditions, creating the perfect environment for physical rejuvenation and spiritual awakening.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Located in Bali's serene countryside, our retreat center offers two beautiful campuses designed to harmonize with nature's rhythm. Each morning begins with pranayama breathing exercises and meditation sessions that ground you in mindfulness, followed by dynamic Hatha Vinyasa yoga classes that strengthen your body while calming your mind.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                The retreat experience extends beyond yoga mat practice. Sound healing sessions using traditional Tibetan singing bowls and crystal instruments create vibrational therapy that releases deep-seated tension and promotes cellular healing. Complementary Balinese massages incorporate ancient techniques passed down through generations, using natural oils and pressure points to restore energy flow.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Nourishment forms a cornerstone of your retreat journey. Our vegetarian and vegan meal offerings feature fresh, organic ingredients sourced from local Balinese farmers. Each dish combines nutritional balance with authentic Indonesian flavors, supporting your body's natural detoxification process while satisfying your palate.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Whether you're a beginner seeking introduction to yoga principles or an experienced practitioner deepening your practice, this retreat provides personalized attention in intimate group settings. The combination of structured activities and free time allows natural integration of learning, ensuring lasting transformation that continues long after you return home.
              </p>
            </CardContent>
          </Card>
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
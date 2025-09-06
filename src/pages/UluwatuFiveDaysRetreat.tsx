import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, User, Mail, Phone, MessageSquare, Utensils, Waves, Gift, Wifi } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UluwatuFiveDaysRetreat = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        
        {/* Content */}
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm">
              <Calendar className="w-4 h-4" />
              <span>5 Days Uluwatu Experience</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              5 Days Yoga Retreat
              <span className="block text-4xl md:text-5xl text-yoga-cream/90 mt-2">
                in Uluwatu Bali
              </span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Comprehensive transformation journey through mindful practice, spiritual awakening, and profound inner healing in Uluwatu Bali's most spectacular clifftop setting
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-3">
              Book Your Journey
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* About Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-cream/20 via-transparent to-yoga-sage/10 rounded-3xl"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-yoga-peach/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-yoga-rose/15 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <User className="w-5 h-5 text-yoga-earth" />
                <span className="font-inter text-yoga-earth font-medium">Deep Transformation</span>
              </div>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-6">
                About This
                <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                  5-Day Retreat
                </span>
              </h2>
              <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Immerse yourself in the comprehensive power of yoga with our 5-day retreat program in Uluwatu Bali, 
                designed for those seeking profound spiritual growth and comprehensive life transformation amidst dramatic clifftop views and ocean waves.
              </p>
            </div>

            {/* Content Sections */}
            <div className="px-8 py-12 space-y-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              
              {/* Daily Schedule */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-yoga-earth">Daily Schedule</h3>
                  </div>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Each day of our 5-day retreat is thoughtfully structured to deepen your practice and enhance your overall well-being.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-sage/20 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-yoga-sage" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth">Morning Yoga & Meditation</h4>
                        <p className="font-inter text-gray-600">Begin your day with energizing yoga and mindfulness practices.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-earth/20 rounded-full flex items-center justify-center">
                        <Utensils className="w-4 h-4 text-yoga-earth" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth">Nourishing Meals</h4>
                        <p className="font-inter text-gray-600">Enjoy healthy, delicious meals prepared with local ingredients.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-rose/20 rounded-full flex items-center justify-center">
                        <Waves className="w-4 h-4 text-yoga-rose" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth">Afternoon Healing Sessions</h4>
                        <p className="font-inter text-gray-600">Participate in traditional Balinese healing and restorative practices.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/20 rounded-2xl p-8 backdrop-blur-sm border border-yoga-cream/30">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-8 h-8 text-yoga-sage" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">5 Days</h4>
                        <p className="font-inter text-sm text-gray-600">Intensive Program</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-8 h-8 text-yoga-earth" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Clifftop</h4>
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
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yoga-rose to-yoga-plum rounded-xl flex items-center justify-center">
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-yoga-earth">Balinese Healing Practices</h3>
                </div>
                
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  Our retreat incorporates authentic Balinese healing traditions to promote holistic well-being.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yoga-rose/20 rounded-full flex items-center justify-center">
                      <Waves className="w-4 h-4 text-yoga-rose" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-yoga-earth">Balinese Massage</h4>
                      <p className="font-inter text-gray-600">Release tension and promote relaxation with traditional massage techniques.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yoga-plum/20 rounded-full flex items-center justify-center">
                      <Gift className="w-4 h-4 text-yoga-plum" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-yoga-earth">Herbal Remedies</h4>
                      <p className="font-inter text-gray-600">Discover the healing power of local herbs and natural remedies.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Personal Growth */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yoga-peach to-yoga-cream rounded-xl flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-yoga-earth">Personal Growth & Mindfulness</h3>
                </div>
                
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  Our retreat provides a supportive environment for personal growth and self-discovery.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yoga-peach/20 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-yoga-peach" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-yoga-earth">Mindfulness Sessions</h4>
                      <p className="font-inter text-gray-600">Cultivate present moment awareness through guided mindfulness practices.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yoga-cream/20 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-yoga-cream" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-yoga-earth">Group Sharing</h4>
                      <p className="font-inter text-gray-600">Connect with fellow participants and share your experiences in a safe space.</p>
                    </div>
                  </li>
                </ul>
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
              Complete 5-day retreat experience in Uluwatu Bali
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-yoga-earth mb-4">$525</div>
                  <p className="text-xl text-gray-600">Complete 5-Day Experience</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Included:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        Daily clifftop yoga sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        Advanced meditation practices
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        Traditional Balinese healing
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
                        Uluwatu Temple ceremonies
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Ocean cliff meditation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Balinese cultural immersion
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Personal transformation coaching
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

export default UluwatuFiveDaysRetreat;

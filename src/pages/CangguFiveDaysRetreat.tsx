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

const CangguFiveDaysRetreat = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: `url(/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/90 via-yoga-sage/75 to-yoga-earth/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm">
              <Calendar className="w-4 h-4" />
              <span>5 Days Canggu Beach Experience</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              5 Days Yoga Retreat
              <span className="block text-4xl md:text-5xl text-yoga-cream/90 mt-2">
                in Canggu Bali
              </span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in Canggu's vibrant surf culture and creative wellness community. Experience 5 transformative days of beach yoga, ocean meditation, and bohemian lifestyle integration.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-3">
              Book Your Beach Journey - From $325
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* About Section */}
        <section className="relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Waves className="w-5 h-5 text-yoga-earth" />
              <span className="font-inter text-yoga-earth font-medium">5-Day Beach Transformation</span>
            </div>
            <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-6">
              Discover Your
              <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                Beach Yoga Journey
              </span>
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional yoga wisdom and Canggu's contemporary beach culture. Our 5-day retreat combines ocean-side practice with creative wellness experiences in Bali's most vibrant surf community.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage/20 to-yoga-earth/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Waves className="w-8 h-8 text-yoga-sage" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Ocean Yoga Sessions</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Daily sunrise and sunset yoga practice on Canggu's black sand beaches with the sound of waves as your soundtrack.
              </p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth/20 to-yoga-plum/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-8 h-8 text-yoga-earth" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Creative Wellness</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Explore Canggu's artistic community with surf-inspired workshops, street art tours, and creative meditation practices.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose/20 to-yoga-mauve/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Utensils className="w-8 h-8 text-yoga-rose" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Beach Bowl Nutrition</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Nourish your body with Canggu's famous healthy café culture - acai bowls, smoothies, and organic plant-based meals.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Investment in Your Beach Transformation
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Experience 5 transformative days of beach yoga and creative wellness in Canggu
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">$1,625</div>
              <p className="text-xl text-muted-foreground mb-8">Complete 5-day Canggu beach retreat experience</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>5 days of beach yoga sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Beachfront accommodation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Healthy café meals & beach bowls</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Surf culture workshops</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Creative meditation sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Beach massage therapy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Canggu community experiences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Digital detox support</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg">
                Reserve Your Beach Retreat
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Book Your Canggu Experience
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to combine yoga with surf culture? Contact us to secure your place in our next Canggu beach retreat
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">+62 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@baliyogaschool.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
                    <p className="text-muted-foreground">Canggu Beach, Bali, Indonesia</p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      name="name" 
                      placeholder="First Name" 
                      className="bg-background/50"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="Email" 
                      className="bg-background/50"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Input 
                    name="phone" 
                    placeholder="Phone" 
                    className="bg-background/50"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your yoga experience and interest in Canggu's surf culture..." 
                    className="bg-background/50 min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CangguFiveDaysRetreat;
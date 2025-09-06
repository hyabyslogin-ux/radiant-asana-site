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

const CangguFourDaysRetreat = () => {
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
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
        </div>
        
        {/* Content */}
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm">
              <Calendar className="w-4 h-4" />
              <span>4 Days Beach Retreat Experience</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              4 Days Yoga Retreat
              <span className="block text-4xl md:text-5xl text-yoga-cream/90 mt-2">
                in Canggu Bali
              </span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Take your holiday plans this season to a brand new level altogether by adding a dash of yoga and surf culture to it. Black sand beaches, creative vibes, and ocean energy invite you to come to Canggu and be a part of the best 4 Days Yoga Retreat organized exclusively by the top yoga center – Bali Yoga School.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-3">
              Book Your Beachside Journey
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
                <Waves className="w-5 h-5 text-yoga-earth" />
                <span className="font-inter text-yoga-earth font-medium">Extended Beach Journey</span>
              </div>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-6">
                About This
                <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                  4-Day Beach Retreat
                </span>
              </h2>
              <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our yoga retreat center is located in the vibrant heart of Canggu Bali, featuring a creative beachside environment with ocean views, contemporary wellness facilities, and access to Canggu's famous surf breaks. Yoga instructors at Bali Yoga School teach authentic and personalised yoga lessons along with surf-inspired wellness and creative community therapies irrespective of your age and experience. The retreat enables you to integrate the benefits of yoga with meditation, asanas, pranayama, yogic kriyas, and beach mindfulness into your daily life.
              </p>
              <p className="font-inter text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
                Our teachers possess ancient knowledge and modern yoga teaching methods enhanced by Canggu's creative surf culture to offer classes for beginner, intermediate and advanced levels. We offer yoga/detoxification & meditation sessions with ocean energy and contemporary wellness practices. We also offer customised beach yoga retreats for those who want to delve deeper into the ancient spiritual yoga tradition while embracing Canggu's bohemian lifestyle. Canggu offers a great yoga experience with its vibrant beach clubs, street art, organic cafés, surf shops, and creative community. We guarantee you a completely refreshing experience combining traditional yoga with modern beach culture.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage/20 to-yoga-earth/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Waves className="w-6 h-6 text-yoga-sage" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Beach Yoga Mastery</h3>
                <p className="font-inter text-sm text-gray-600">
                  Daily sunrise and sunset yoga practice on Canggu's black sand beaches with the sound of waves as your soundtrack.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yoga-earth/20 to-yoga-plum/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-6 h-6 text-yoga-earth" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Surf Culture Integration</h3>
                <p className="font-inter text-sm text-gray-600">
                  Learn from Canggu's legendary surf community with workshops, beach cleanups, and surf-inspired meditation.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yoga-rose/20 to-yoga-mauve/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="w-6 h-6 text-yoga-rose" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Wellness Café Culture</h3>
                <p className="font-inter text-sm text-gray-600">
                  Explore Canggu's organic café scene with acai bowls, smoothies, and plant-based meals designed for beach wellness.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-yoga-peach/20 to-yoga-rose/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-6 h-6 text-yoga-plum" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Creative Community</h3>
                <p className="font-inter text-sm text-gray-600">
                  Connect with Canggu's digital nomad community, street artists, and wellness influencers for inspiration and collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Schedule Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Your 4-Day Beach Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A progressive experience from grounding beach practice to surf culture integration
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { days: "Days 1-2", title: "Beach Foundation", desc: "Establish your practice with ocean energy and Canggu vibes" },
                { days: "Days 3-4", title: "Surf Culture Immersion", desc: "Dive deep into the creative wellness community" }
              ].map((phase, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-center text-primary text-lg">{phase.days}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-semibold mb-2 text-foreground">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  </CardContent>
                </Card>
              ))}
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
              Experience 4 transformative days of beach yoga and creative wellness in Canggu
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">$1,350</div>
              <p className="text-xl text-muted-foreground mb-8">Complete 4-day Canggu beach retreat experience</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>4 days of beach yoga sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Beachfront accommodation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Healthy café meals & beach bowls</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Surf culture workshops</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Creative meditation sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Canggu community experiences</span>
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

export default CangguFourDaysRetreat;

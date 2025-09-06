import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users, Star } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CangguNineDaysRetreat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/b36093bd-c1e4-40a7-8601-24e53d082b0c.png')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            9 Days
            <span className="block text-4xl md:text-6xl mt-2 text-accent">Canggu Beach Retreat</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Embrace profound spiritual transformation with extended beach practice and creative community immersion
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
            Book Your Deep Transformation Journey
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nine Days of Deep Beach Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our 9-day Canggu retreat provides the perfect balance of intensive beach practice and creative spiritual exploration. 
              Experience a profound journey that allows time for deep healing, advanced surf-yoga mastery, and lasting lifestyle transformation in Bali's most vibrant beach community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Extended Beach Immersion</h3>
                  <p className="text-muted-foreground">9 full days of comprehensive beach yoga practice and creative community development</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sacred Beach Community</h3>
                  <p className="text-muted-foreground">Form meaningful bonds with fellow seekers and Canggu's creative wellness community on this extended journey</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Mastery Development</h3>
                  <p className="text-muted-foreground">Achieve deeper mastery in advanced beach poses, surf-inspired meditation, and creative wellness philosophy</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/dd467e40-f434-4893-bfae-077adbaa9185.png" 
                alt="Canggu beach yoga retreat participants" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your 9-Day Canggu Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A carefully crafted progression that honors the sacred number nine in yogic tradition with Canggu's creative beach energy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: "Days 1-3", title: "Beach Grounding & Foundation", desc: "Establish roots in Canggu's surf culture and build a strong beach practice foundation" },
              { phase: "Days 4-6", title: "Creative Expansion & Exploration", desc: "Explore advanced techniques and deepen understanding through art, surf, and wellness" },
              { phase: "Days 7-9", title: "Beach Mastery & Integration", desc: "Achieve mastery in beach yoga and integrate creative wisdom for lasting transformation" }
            ].map((item, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center text-primary text-lg">{item.phase}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
            Investment in Your Creative Beach Mastery
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience 9 days of profound growth and creative spiritual development in Canggu's vibrant beach community
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-6xl md:text-7xl font-bold text-primary mb-4">$2,925</div>
            <p className="text-xl text-muted-foreground mb-8">Complete 9-day Canggu creative beach retreat experience</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>9 days of guided beach yoga sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Beachfront accommodation & meals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Advanced surf-yoga workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Creative community experiences</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Street art & cultural immersion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Beach wellness healing therapies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Mastery completion certificate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Canggu alumni support network</span>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg">
              Reserve Your Sacred Beach Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Canggu Beach Retreat Memories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Glimpses of transformation, creative connection, and surf culture mastery from our Canggu beach retreats
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/lovable-uploads/2c8cc260-25f3-4ae5-a498-e425800e509d.png',
              '/lovable-uploads/3b45fe7e-1832-4fee-92d1-320376e40af5.png',
              '/lovable-uploads/45b5e644-5e4c-49e2-8d00-745b07651022.png',
              '/lovable-uploads/5117ac0b-9cea-4be9-83af-8536b5cd98d6.png',
              '/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png',
              '/lovable-uploads/84b47165-30fa-48cd-8655-1fdd40968712.png',
              '/lovable-uploads/8a948cb6-13f9-44c9-8fef-bce571ae9145.png',
              '/lovable-uploads/9e3fcc3b-076b-4912-b3b1-67a84baae207.png'
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl group cursor-pointer">
                <img 
                  src={image}
                  alt={`Canggu retreat memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Begin Your Canggu Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your life through Canggu's unique blend of surf culture and yoga mastery? Get in touch to secure your place in our next 9-day beach retreat
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
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-background/50" />
                  <Input placeholder="Last Name" className="bg-background/50" />
                </div>
                <Input type="email" placeholder="Email" className="bg-background/50" />
                <Input placeholder="Phone" className="bg-background/50" />
                <Textarea 
                  placeholder="Tell us about your yoga experience and what you hope to gain from this extended Canggu beach retreat..." 
                  className="bg-background/50 min-h-[120px]"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CangguNineDaysRetreat;
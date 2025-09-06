import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users, Star } from 'lucide-react';

const TenDaysRetreat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/fa196a61-65f0-4c5b-945d-df28079ea3f3.png')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            10 Days
            <span className="block text-4xl md:text-6xl mt-2 text-accent">Yoga Retreat</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the ultimate yoga retreat - a complete journey of transformation and enlightenment
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
            Book Your Journey
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Ultimate 10-Day Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our signature 10-day yoga retreat represents the pinnacle of yogic transformation. 
              This comprehensive journey offers the perfect duration to achieve profound and lasting change in body, mind, and spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete Immersion</h3>
                  <p className="text-muted-foreground">10 full days of total yoga immersion and spiritual awakening</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lifelong Bonds</h3>
                  <p className="text-muted-foreground">Create deep, meaningful connections that last well beyond the retreat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Mastery</h3>
                  <p className="text-muted-foreground">Achieve advanced levels in all aspects of yoga practice and philosophy</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png" 
                alt="Yoga retreat participants" 
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
              Your 10-Day Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A meticulously designed program that guides you through complete transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { phase: "Days 1-2", title: "Arrival & Grounding", desc: "Settle in and establish your practice foundation" },
              { phase: "Days 3-4", title: "Building Momentum", desc: "Deepen practice and build physical strength" },
              { phase: "Days 5-6", title: "Inner Exploration", desc: "Dive deep into meditation and self-inquiry" },
              { phase: "Days 7-8", title: "Advanced Practice", desc: "Master challenging poses and breathing techniques" },
              { phase: "Days 9-10", title: "Integration & Celebration", desc: "Integrate wisdom and celebrate transformation" }
            ].map((item, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center text-primary text-sm">{item.phase}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-semibold mb-2 text-foreground text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
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
            Investment in Your Ultimate Transformation
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the complete 10-day journey of profound transformation
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-6xl md:text-7xl font-bold text-primary mb-4">$3,000</div>
            <p className="text-xl text-muted-foreground mb-8">Complete 10-day retreat experience</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>10 days of guided yoga sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>All meals and accommodation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Master-level workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Personal transformation coaching</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Cultural immersion experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Comprehensive wellness program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Certification opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Lifetime mentorship access</span>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg">
              Reserve Your Spot
            </Button>
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Retreat Memories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Glimpses of transformation, connection, and joy from our previous retreats
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
                  alt={`Retreat memory ${index + 1}`}
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
              Begin Your Ultimate Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready for the ultimate transformation? Get in touch to secure your place in our next 10-day retreat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@yogaretreat.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
                  <p className="text-muted-foreground">Bali, Indonesia</p>
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
                  placeholder="Tell us about your yoga experience and what you hope to gain from this retreat..." 
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
    </div>
  );
};

export default TenDaysRetreat;
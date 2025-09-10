import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Locations",
      details: ["Ubud", "Uluwatu", "Canggu"]
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["+91 7217206223"]
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["info@baliyogaschool.com"]
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Studio Hours",
      details: ["Mon-Sun: 6:00 AM - 8:00 PM", "Open 7 days a week"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yoga-rose"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Get in Touch
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yoga-rose"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to begin your transformative yoga journey in beautiful Bali? We'd love to connect with you. 
            Whether you have questions about our retreats, want to book your experience, or simply need guidance 
            on which program is perfect for you - we're here to help make your dreams a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Discover Our Beautiful Retreat Centers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Ubud, surrounded by lush rice paddies and tropical gardens. 
                Come experience the magic of Bali while deepening your yoga practice.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="text-yoga-mauve mt-1 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3 text-lg">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-gradient-card border border-yoga-rose/20 shadow-glow hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yoga-peach/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-yoga-mauve/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-3">Send us a Message</h3>
                  <p className="text-muted-foreground">We typically respond within 24 hours</p>
                </div>
              
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-3">
                        First Name *
                      </label>
                      <Input 
                        placeholder="Enter your first name" 
                        className="border-yoga-rose/30 focus:border-yoga-mauve focus:ring-yoga-mauve/20 h-12 bg-white/50" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-3">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Enter your last name" 
                        className="border-yoga-rose/30 focus:border-yoga-mauve focus:ring-yoga-mauve/20 h-12 bg-white/50" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="border-yoga-rose/30 focus:border-yoga-mauve focus:ring-yoga-mauve/20 h-12 bg-white/50" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      className="border-yoga-rose/30 focus:border-yoga-mauve focus:ring-yoga-mauve/20 h-12 bg-white/50" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">
                      Your Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your yoga experience, which retreat interests you, any special requirements, or questions you have. We'd love to help you find the perfect program for your journey..."
                      className="border-yoga-rose/30 focus:border-yoga-mauve focus:ring-yoga-mauve/20 min-h-[140px] bg-white/50 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-yoga-mauve hover:from-yoga-mauve hover:to-primary text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    Send Message ✨
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
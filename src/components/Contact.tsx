import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Studio Location",
      details: ["123 Serenity Lane", "Wellness District", "Peaceful City, PC 12345"]
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["(555) 123-YOGA", "(555) 123-9642"]
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["info@serenityyoga.com", "classes@serenityyoga.com"]
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Studio Hours",
      details: ["Mon-Fri: 6:00 AM - 9:00 PM", "Sat-Sun: 7:00 AM - 7:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to begin your yoga journey? We'd love to hear from you. 
            Reach out with any questions or to book your first class.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Visit Our Studio</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-gradient-card border border-yoga-rose/20 shadow-soft">
                  <div className="flex items-start gap-3">
                    <div className="text-yoga-mauve mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-card border border-yoga-rose/20 shadow-soft">
              <h4 className="text-lg font-semibold text-primary mb-4">First-Time Visitors</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Arrive 15 minutes early for your first class</li>
                <li>• Bring a water bottle and towel</li>
                <li>• Yoga mats and props are provided</li>
                <li>• Wear comfortable, breathable clothing</li>
                <li>• Let us know about any injuries or concerns</li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-gradient-card border border-yoga-rose/20 shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-yoga-rose/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-yoga-rose/30" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-yoga-rose/30" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone (Optional)
                  </label>
                  <Input type="tel" placeholder="(555) 123-4567" className="border-yoga-rose/30" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your yoga experience, questions, or what you're hoping to achieve..."
                    className="border-yoga-rose/30 min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-yoga-mauve transition-colors">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-border rounded-2xl p-1 max-w-2xl mx-auto">
            <div className="bg-yoga-cream rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our welcoming community and discover the transformative power of yoga.
              </p>
              <Button size="lg" className="bg-primary hover:bg-yoga-mauve transition-colors">
                Book Your First Class
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
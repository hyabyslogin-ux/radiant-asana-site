import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Globe,
  Send,
  Calendar,
  User,
  Users,
  Heart,
  CheckCircle,
  Download
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    retreatInterest: '',
    location: '',
    experienceLevel: '',
    arrivalDate: '',
    specialRequirements: '',
    hearAbout: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yoga-cream via-yoga-rose/20 to-yoga-mauve/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,113,108,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.05),transparent_50%)]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-yoga-mauve/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yoga-plum rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-yoga-rose rounded-full animate-bounce delay-300"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main heading with gradient */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-yoga-plum via-yoga-mauve to-yoga-plum bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-yoga-mauve mb-8 max-w-3xl mx-auto leading-relaxed">
              Begin your transformative yoga journey in the mystical landscapes of Bali. 
              Our experienced team is ready to guide you toward inner peace and wellness.
            </p>
            
            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </Button>
              <Button variant="outline" className="border-yoga-plum text-yoga-plum hover:bg-yoga-plum hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </div>
            
            {/* Quick contact info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-yoga-plum" />
                </div>
                <p className="text-yoga-mauve font-medium">+62 812 3456 7890</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-yoga-plum" />
                </div>
                <p className="text-yoga-mauve font-medium">info@himalayanyoga.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-yoga-plum" />
                </div>
                <p className="text-yoga-mauve font-medium">Ubud, Uluwatu, Canggu</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yoga-mauve/50 rounded-full p-1">
            <div className="w-1 h-3 bg-yoga-mauve/70 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yoga-plum mb-4">Get in Touch</h2>
            <p className="text-yoga-mauve text-lg">Multiple ways to connect with our yoga community</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Contact */}
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-yoga-plum mb-2">Call Us</h3>
                <p className="text-yoga-mauve text-sm mb-2">+62 812 3456 7890</p>
                <p className="text-xs text-yoga-mauve">Available 9 AM - 6 PM (GMT+8)</p>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-yoga-plum mb-2">Email Us</h3>
                <p className="text-yoga-mauve text-sm mb-2">info@himalayanyoga.com</p>
                <p className="text-xs text-yoga-mauve">Response within 24 hours</p>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-yoga-plum mb-2">WhatsApp</h3>
                <p className="text-yoga-mauve text-sm mb-2">+62 812 3456 7890</p>
                <p className="text-xs text-yoga-mauve">Instant messaging support</p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-yoga-plum mb-2">Follow Us</h3>
                <div className="flex justify-center gap-2 mb-2">
                  <Instagram className="w-4 h-4 text-yoga-mauve" />
                  <Facebook className="w-4 h-4 text-yoga-mauve" />
                </div>
                <p className="text-xs text-yoga-mauve">Daily inspiration & updates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Studio Locations */}
      <section className="py-16 px-6 bg-yoga-cream/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yoga-plum mb-4">Our Sacred Spaces</h2>
            <p className="text-yoga-mauve text-lg">Three beautiful locations across Bali</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ubud Studio */}
            <Card className="bg-white border-0 shadow-soft hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-yoga-plum">Ubud Sacred Center</CardTitle>
                <CardDescription className="text-center">Cultural Heart of Bali</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-yoga-mauve">
                    <MapPin className="w-4 h-4" />
                    <span>Jl. Monkey Forest Road, Ubud</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-yoga-mauve">
                    <Phone className="w-4 h-4" />
                    <span>+62 361 123 4567</span>
                  </div>
                </div>
                <p className="text-xs text-yoga-mauve mb-4">
                  Nestled among rice terraces and ancient temples, our Ubud center offers 
                  the most authentic Balinese yoga experience.
                </p>
                <div className="text-xs text-yoga-mauve">
                  <strong>Specialties:</strong> Hatha Yoga, Meditation, Cultural Immersion
                </div>
              </CardContent>
            </Card>

            {/* Uluwatu Studio */}
            <Card className="bg-white border-0 shadow-soft hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-yoga-plum">Uluwatu Cliffside Retreat</CardTitle>
                <CardDescription className="text-center">Ocean Views & Sunsets</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-yoga-mauve">
                    <MapPin className="w-4 h-4" />
                    <span>Jl. Uluwatu, Pecatu</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-yoga-mauve">
                    <Phone className="w-4 h-4" />
                    <span>+62 361 234 5678</span>
                  </div>
                </div>
                <p className="text-xs text-yoga-mauve mb-4">
                  Perched on dramatic cliffs overlooking the Indian Ocean, perfect for 
                  sunset yoga and spiritual reflection.
                </p>
                <div className="text-xs text-yoga-mauve">
                  <strong>Specialties:</strong> Vinyasa Flow, Sunset Yoga, Ocean Meditation
                </div>
              </CardContent>
            </Card>

            {/* Canggu Studio */}
            <Card className="bg-white border-0 shadow-soft hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-yoga-plum">Canggu Beach Hub</CardTitle>
                <CardDescription className="text-center">Modern Beach Lifestyle</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-yoga-mauve">
                    <MapPin className="w-4 h-4" />
                    <span>Jl. Pantai Berawa, Canggu</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-yoga-mauve">
                    <Phone className="w-4 h-4" />
                    <span>+62 361 345 6789</span>
                  </div>
                </div>
                <p className="text-xs text-yoga-mauve mb-4">
                  Contemporary beach-side studio with modern amenities, perfect for 
                  combining yoga with surf and beach activities.
                </p>
                <div className="text-xs text-yoga-mauve">
                  <strong>Specialties:</strong> Power Yoga, Beach Yoga, Surf & Yoga
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Contact Form */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yoga-plum mb-4">Plan Your Retreat</h2>
            <p className="text-yoga-mauve text-lg">Tell us about your yoga journey and we'll create the perfect experience for you</p>
          </div>
          
          <Card className="bg-white border-0 shadow-soft">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-yoga-plum">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-yoga-plum">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-yoga-plum">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-yoga-plum">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Retreat Preferences */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-yoga-plum">Retreat Duration</Label>
                    <Select onValueChange={(value) => handleInputChange('retreatInterest', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select retreat duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-days">3 Days Retreat</SelectItem>
                        <SelectItem value="4-days">4 Days Retreat</SelectItem>
                        <SelectItem value="5-days">5 Days Retreat</SelectItem>
                        <SelectItem value="6-days">6 Days Retreat</SelectItem>
                        <SelectItem value="7-days">7 Days Retreat</SelectItem>
                        <SelectItem value="8-days">8 Days Retreat</SelectItem>
                        <SelectItem value="9-days">9 Days Retreat</SelectItem>
                        <SelectItem value="10-days">10 Days Retreat</SelectItem>
                        <SelectItem value="11-days">11 Days Retreat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-yoga-plum">Preferred Location</Label>
                    <Select onValueChange={(value) => handleInputChange('location', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose your location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ubud">Ubud - Cultural Center</SelectItem>
                        <SelectItem value="uluwatu">Uluwatu - Cliffside Ocean Views</SelectItem>
                        <SelectItem value="canggu">Canggu - Beach Lifestyle</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-yoga-plum">Experience Level</Label>
                    <Select onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="mixed">Mixed Experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="arrivalDate" className="text-yoga-plum">Preferred Arrival Date</Label>
                    <Input
                      id="arrivalDate"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-yoga-plum">How did you hear about us?</Label>
                  <Select onValueChange={(value) => handleInputChange('hearAbout', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="friend">Friend Recommendation</SelectItem>
                      <SelectItem value="blog">Blog/Article</SelectItem>
                      <SelectItem value="yoga-community">Yoga Community</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specialRequirements" className="text-yoga-plum">Special Requirements or Dietary Restrictions</Label>
                  <Textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    className="mt-2"
                    placeholder="Please let us know about any dietary restrictions, medical conditions, or special accommodations you may need..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-yoga-plum">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2"
                    placeholder="Tell us about your yoga goals, what you hope to achieve during your retreat, or any specific questions you have..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-white py-3 rounded-lg hover:shadow-glow transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send My Retreat Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-yoga-cream/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yoga-plum mb-4">Frequently Asked Questions</h2>
            <p className="text-yoga-mauve text-lg">Everything you need to know about your yoga retreat</p>
          </div>
          
          <Card className="bg-white border-0 shadow-soft">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="booking">
                  <AccordionTrigger className="text-yoga-plum hover:text-yoga-mauve">
                    How do I book a retreat and what's the payment process?
                  </AccordionTrigger>
                  <AccordionContent className="text-yoga-mauve">
                    You can book through our contact form, phone, or WhatsApp. We require a 30% deposit to secure your spot, 
                    with the balance due 30 days before your retreat. We accept bank transfers, credit cards, and PayPal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="included">
                  <AccordionTrigger className="text-yoga-plum hover:text-yoga-mauve">
                    What's included in the retreat packages?
                  </AccordionTrigger>
                  <AccordionContent className="text-yoga-mauve">
                    All retreats include accommodation, daily yoga classes, meditation sessions, healthy meals, 
                    airport transfers, and cultural activities. Specific inclusions vary by package - please check 
                    individual retreat pages for detailed information.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="experience">
                  <AccordionTrigger className="text-yoga-plum hover:text-yoga-mauve">
                    Do I need yoga experience to join a retreat?
                  </AccordionTrigger>
                  <AccordionContent className="text-yoga-mauve">
                    Not at all! Our retreats welcome all levels, from complete beginners to advanced practitioners. 
                    Our experienced instructors provide modifications and variations to suit every participant's needs and abilities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="visa">
                  <AccordionTrigger className="text-yoga-plum hover:text-yoga-mauve">
                    Do I need a visa to visit Bali?
                  </AccordionTrigger>
                  <AccordionContent className="text-yoga-mauve">
                    Most nationalities can enter Indonesia visa-free for up to 30 days, or obtain a Visa on Arrival for longer stays. 
                    Please check with your local Indonesian consulate for specific requirements based on your nationality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cancellation">
                  <AccordionTrigger className="text-yoga-plum hover:text-yoga-mauve">
                    What's your cancellation policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-yoga-mauve">
                    Cancellations more than 60 days before: full refund minus processing fee. 30-60 days: 50% refund. 
                    Less than 30 days: no refund, but you can transfer to a future retreat. We strongly recommend travel insurance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="bring">
                  <AccordionTrigger className="text-yoga-plum hover:text-yoga-mauve">
                    What should I bring to the retreat?
                  </AccordionTrigger>
                  <AccordionContent className="text-yoga-mauve">
                    Bring comfortable yoga clothes, a personal water bottle, sunscreen, insect repellent, and any personal 
                    meditation items. Yoga mats and props are provided. We'll send a detailed packing list upon booking.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Response Time & Support */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yoga-plum mb-4">Our Commitment to You</h2>
            <p className="text-yoga-mauve text-lg">Dedicated support for your transformative journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-0 text-center hover-lift">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-yoga-mauve mx-auto mb-4" />
                <h3 className="font-semibold text-yoga-plum mb-2">Quick Response</h3>
                <p className="text-yoga-mauve text-sm">
                  Email inquiries answered within 24 hours. WhatsApp messages responded to during business hours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 text-center hover-lift">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-yoga-mauve mx-auto mb-4" />
                <h3 className="font-semibold text-yoga-plum mb-2">Expert Guidance</h3>
                <p className="text-yoga-mauve text-sm">
                  Our experienced team helps you choose the perfect retreat based on your goals and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 text-center hover-lift">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-yoga-mauve mx-auto mb-4" />
                <h3 className="font-semibold text-yoga-plum mb-2">Ongoing Support</h3>
                <p className="text-yoga-mauve text-sm">
                  From booking to departure, we're here to ensure your retreat experience exceeds expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who have discovered inner peace and wellness through our authentic Balinese yoga retreats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-white text-yoga-plum hover:bg-yoga-cream px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us Now
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-yoga-plum px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-yoga-plum px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-80">
            <p>🌟 Free consultation • Flexible payment plans • 30-day satisfaction guarantee</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
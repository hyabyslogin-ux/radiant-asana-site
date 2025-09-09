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
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import contactHeroBg from '@/assets/contact-hero-bg.jpg';

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
      <SEO pageKey="contact-us" />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/lovable-uploads/71f70b0a-7265-4b1e-b0b1-c5a91f8e39fe.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Animated background overlay with faded effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40 animate-fade-in"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-yoga-plum/20 via-transparent to-yoga-cream/10 animate-pulse"></div>
        
        {/* Floating animation elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yoga-cream/5 rounded-full blur-3xl animate-[fade-in_3s_ease-in-out_infinite_alternate]"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yoga-peach/5 rounded-full blur-3xl animate-[fade-in_4s_ease-in-out_infinite_alternate-reverse]"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-yoga-mauve/5 rounded-full blur-2xl animate-[scale-in_2s_ease-in-out_infinite_alternate]"></div>
        </div>
        
        {/* Decorative animated elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-[fade-in_2s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yoga-cream rounded-full animate-[bounce_2s_infinite]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-yoga-peach rounded-full animate-bounce delay-300"></div>
        
        <div className="relative container mx-auto px-6 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            {/* Main heading with gradient and animation */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-scale-in">
              <span className="bg-gradient-to-r from-white via-yoga-cream to-white bg-clip-text text-transparent drop-shadow-lg">
                Let's Connect
              </span>
            </h1>
            
            {/* Subtitle with smooth animation */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fade-in delay-150">
              Begin your transformative yoga journey in the mystical landscapes of Bali. 
              Our experienced team is ready to guide you toward inner peace and wellness.
            </p>
            
            
            {/* Quick contact info with animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in delay-300">
              <div className="text-center group hover-scale">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300 animate-scale-in">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium drop-shadow-sm">+917217206223</p>
              </div>
              <div className="text-center group hover-scale">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300 animate-scale-in delay-100">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium drop-shadow-sm">info@baliyogaschool.com</p>
              </div>
              <div className="text-center group hover-scale">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300 animate-scale-in delay-200">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium drop-shadow-sm">Ubud, Uluwatu, Canggu</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator with animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
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
                <p className="text-yoga-mauve text-sm mb-2">+917217206223</p>
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
                <p className="text-yoga-mauve text-sm mb-2">info@baliyogaschool.com</p>
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
                <p className="text-yoga-mauve text-sm mb-2">+918279705844</p>
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
                  <a href="https://www.instagram.com/baliyogaschool/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 text-yoga-mauve hover:text-yoga-plum transition-colors" />
                  </a>
                  <a href="https://www.facebook.com/yogaschoolinbali/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-4 h-4 text-yoga-mauve hover:text-yoga-plum transition-colors" />
                  </a>
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
                <CardTitle className="text-center text-yoga-plum">Bali Yoga School Ubud</CardTitle>
                <CardDescription className="text-center">Cultural Heart of Bali</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-yoga-mauve">
                    <MapPin className="w-4 h-4" />
                    <span>Jl. Campuhan III, Singakerta, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia</span>
                  </div>
                </div>
                <div className="text-xs text-yoga-mauve">
                  <strong>Special:</strong> YTT, Yoga Retreat, Sound Healing, Reiki Healing, Ayurveda
                </div>
              </CardContent>
            </Card>

            {/* Uluwatu Studio */}
            <Card className="bg-white border-0 shadow-soft hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-yoga-plum">Bali Yoga School Uluwatu</CardTitle>
                <CardDescription className="text-center">Ocean Views & Sunsets</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-yoga-mauve">
                    <MapPin className="w-4 h-4" />
                    <span>54XX+9G Jimbaran, Badung Regency, Bali, Indonesia</span>
                  </div>
                </div>
                <div className="text-xs text-yoga-mauve">
                  <strong>Special:</strong> YTT, Yoga Retreat, Sound Healing, Reiki Healing, Ayurveda
                </div>
              </CardContent>
            </Card>

            {/* Canggu Studio */}
            <Card className="bg-white border-0 shadow-soft hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-yoga-plum">Bali Yoga School Canggu</CardTitle>
                <CardDescription className="text-center">Modern Beach Lifestyle</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-yoga-mauve">
                    <MapPin className="w-4 h-4" />
                    <span>Canggu, Bali, Indonesia</span>
                  </div>
                </div>
                <div className="text-xs text-yoga-mauve">
                  <strong>Special:</strong> YTT, Yoga Retreat, Sound Healing, Reiki Healing, Ayurveda
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
                    You can book through our contact form, phone, or WhatsApp. We require a 150USD deposit to secure your spot. Balance should be paid on arrival either by card, cash, or online transfer.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="included">
                  <AccordionTrigger className="text-yoga-plum hover:text-yoga-mauve">
                    What's included in the retreat packages?
                  </AccordionTrigger>
                  <AccordionContent className="text-yoga-mauve">
                    All retreats include accommodation, daily yoga classes, healing sessions, healthy meals, and special events when the retreat days fall on the event days at the retreat center. Specific inclusions vary by package - please check individual retreat pages for detailed information.
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
                    Advance booking deposit is not refundable. We accept date rescheduling if you cancel the retreat after the enrolment. We accept the cancellation, but the deposit / retreat fee will not be refunded with the cancellation.
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
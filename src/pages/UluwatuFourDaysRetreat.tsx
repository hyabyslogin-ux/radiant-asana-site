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

const UluwatuFourDaysRetreat = () => {
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
              <span>4 Days Uluwatu Experience</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              4 Days Yoga Retreat
              <span className="block text-4xl md:text-5xl text-yoga-cream/90 mt-2">
                in Uluwatu Bali
              </span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Take your holiday plans this season to a brand new level altogether by adding a dash of yoga to it. Sunny skies, lively seas, and soothing clifftop views invite you to come to Uluwatu Bali and be a part of the best 4 Days Yoga Retreat organized exclusively by the top yoga center – Bali Yoga School.
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
                <span className="font-inter text-yoga-earth font-medium">Extended Journey</span>
              </div>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-6">
                About This
                <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                  4-Day Retreat
                </span>
              </h2>
              <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our yoga retreat center is located in the spectacular clifftop setting of Uluwatu Bali that has a calm environment with breathtaking ocean views, including private rooms, an outdoor swimming pool, and beautiful clifftop garden areas. Yoga instructors at Bali Yoga School teach authentic and personalised yoga lessons along with detox and de-stress therapies irrespective of your age and experience. The yoga retreat enables you to integrate the benefits of yoga with meditation, asanas, pranayama, yogic kriyas, deep relaxation, etc into your daily life.
              </p>
              <p className="font-inter text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
                Our teachers possess the ancient knowledge and modern yoga teaching methods to offer classes for beginner, intermediate and advanced levels for yoga. We offer yoga/ detoxification & meditation sessions. We also offer customised yoga retreats for those who want to delve deeper into the ancient spiritual yoga tradition and allow you to experience the physical & subtle aspects of yoga. Uluwatu Bali offers a great yoga experience with dramatic clifftop temples, world-class surf breaks, stunning sunsets, and much more. We guarantee you a completely refreshing experience in our yoga school in Uluwatu Bali. A yoga retreat is a perfect way to take a break and divert your mind from negative thoughts to get settle into a blissful conscious state.
              </p>
            </div>

            {/* Content Sections */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="font-playfair text-3xl font-semibold text-yoga-earth mb-6">
                  What You'll Experience
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-yoga-sage mt-1" />
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-1">
                        Daily Yoga & Meditation
                      </h4>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        Start your day with energizing yoga sessions and calming meditation practices overlooking the ocean.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Waves className="w-6 h-6 text-yoga-sage mt-1" />
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-1">
                        Balinese Healing Therapies
                      </h4>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        Experience traditional Balinese massage and healing treatments to rejuvenate your body and mind.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Utensils className="w-6 h-6 text-yoga-sage mt-1" />
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-1">
                        Healthy Organic Cuisine
                      </h4>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        Enjoy delicious and nutritious meals made with fresh, locally sourced ingredients.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-playfair text-3xl font-semibold text-yoga-earth mb-6">
                  Retreat Features
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Wifi className="w-6 h-6 text-yoga-sage mt-1" />
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-1">
                        Clifftop Accommodation
                      </h4>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        Stay in comfortable and stylish rooms with breathtaking ocean views.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yoga-sage mt-1" />
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-1">
                        Infinity Pool & Garden
                      </h4>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        Relax by our infinity pool or explore our lush tropical gardens.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Gift className="w-6 h-6 text-yoga-sage mt-1" />
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-1">
                        Cultural Excursions
                      </h4>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        Visit local temples and experience the rich culture of Bali.
                      </p>
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
              Complete 4-day retreat experience in Uluwatu Bali
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-yoga-earth mb-4">$350</div>
                  <p className="text-xl text-gray-600">Complete 4-Day Experience</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Included:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        Daily yoga sessions with ocean views
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        Meditation & pranayama
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        Balinese massage treatments
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
                        Uluwatu Temple visits
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Sunset cliff meditation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Cultural experiences
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full"></div>
                        Digital detox support
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

export default UluwatuFourDaysRetreat;

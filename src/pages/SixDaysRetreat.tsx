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

const SixDaysRetreat = () => {
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
              <span>6 Days Retreat Experience</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              6 Days Yoga Retreat
              <span className="block text-4xl md:text-5xl text-yoga-cream/90 mt-2">
                in Bali
              </span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Advanced transformation journey through comprehensive practice, cultural immersion, and profound spiritual awakening
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-3"
              onClick={() => window.location.href = '/contact-us'}
            >
              Book Your Journey
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* Enhanced About/Details Section */}
        <section className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-cream/5 via-transparent to-yoga-sage/5 rounded-3xl"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-yoga-peach/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-yoga-rose/8 rounded-full blur-2xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-yoga-sage/10 via-yoga-earth/5 to-yoga-plum/10 px-12 py-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <div className="w-2 h-2 bg-yoga-sage rounded-full animate-pulse"></div>
                  <span className="font-inter text-yoga-earth font-medium">Authentic Bali Experience</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Experience Deep 
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Immerse yourself in a carefully crafted journey that combines ancient wisdom with modern wellness practices
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="px-12 py-16 space-y-16">
              
              {/* Journey Overview */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-12H3" />
                      </svg>
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-yoga-earth">Your Transformative Journey</h3>
                  </div>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Embark on a transformative journey through our carefully crafted 6-day yoga retreat in the heart of Bali. This advanced experience combines traditional <strong className="text-yoga-earth">Hatha Vinyasa yoga practices</strong> with authentic Balinese healing traditions, creating the perfect environment for physical rejuvenation and spiritual awakening.
                  </p>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Located in Bali's serene ubud, our retreat center offers <strong className="text-yoga-sage">two beautiful campuses</strong> designed to harmonize with nature's rhythm. Each morning begins with pranayama breathing exercises and meditation sessions that ground you in mindfulness.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/20 rounded-2xl p-8 backdrop-blur-sm border border-yoga-cream/30">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-8 h-8 text-yoga-sage" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">6 Days</h4>
                        <p className="font-inter text-sm text-gray-600">Advanced Program</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-8 h-8 text-yoga-earth" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">2 Campuses</h4>
                        <p className="font-inter text-sm text-gray-600">Beautiful Locations</p>
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
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Holistic Healing Practices</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
                    Our retreat extends beyond yoga mat practice to encompass complete wellness and spiritual growth
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  
                  {/* Sound Healing */}
                  <div className="group bg-gradient-to-br from-white to-yoga-cream/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Waves className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Sound Healing</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Traditional Tibetan singing bowls and crystal instruments create vibrational therapy that releases deep-seated tension and promotes cellular healing.
                    </p>
                  </div>
                  
                  {/* Balinese Massage */}
                  <div className="group bg-gradient-to-br from-white to-yoga-peach/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-peach/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Balinese Massage</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Authentic techniques passed down through generations, using natural oils and pressure points to restore energy flow and deep relaxation.
                    </p>
                  </div>
                  
                  {/* Vegan Food */}
                  <div className="group bg-gradient-to-br from-white to-yoga-rose/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-rose/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Utensils className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Vegan Food</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Fresh, nutritious vegan food is served 3 times a day to support natural detoxification and healing of the body, mind, and soul.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Growth */}
              <div className="bg-gradient-to-r from-yoga-sage/5 via-yoga-earth/5 to-yoga-plum/5 rounded-2xl p-12 border border-yoga-sage/10">
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Personalized Growth Journey</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
                    Whether you're a beginner or experienced practitioner, our intimate group settings ensure personalized attention
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-sage rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Beginner-Friendly Approach</h4>
                        <p className="font-inter text-gray-600">No previous yoga experience required. Our expert instructors guide you step-by-step through each practice.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-earth rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Advanced Practitioners</h4>
                        <p className="font-inter text-gray-600">Deepen your existing practice with advanced techniques, philosophy, and personalized guidance.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-plum rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Individual Attention</h4>
                        <p className="font-inter text-gray-600">Small group sizes ensure each participant receives personal guidance and support throughout their journey.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-yoga-sage via-yoga-earth to-yoga-plum rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="font-playfair text-xl font-semibold text-yoga-earth">Yogi Himanshu</h4>
                        <p className="font-inter text-sm text-gray-600 mb-4">Founder & Lead Instructor</p>
                      </div>
                      <blockquote className="font-playfair text-lg text-yoga-earth italic text-center">
                        "The combination of structured activities and free time allows natural integration of learning, ensuring lasting transformation."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Daily Schedule */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-sage/5 via-transparent to-yoga-earth/5 rounded-3xl"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-yoga-cream/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-yoga-peach/8 rounded-full blur-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-earth/10 via-yoga-sage/5 to-yoga-plum/10 px-12 py-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <Clock className="w-5 h-5 text-yoga-earth" />
                  <span className="font-inter text-yoga-earth font-medium">6 Days & 5 Nights</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Daily 
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Schedule
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Check-in: 12pm / Check-out: 12pm<br/>
                  <span className="text-sm italic">The Management team holds the right to change the timings of the classes if it is needed.</span>
                </p>
              </div>
            </div>

            <div className="px-12 py-16">
              <div className="space-y-8">
                
                {/* Day 1 Schedule */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yoga-plum/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-plum to-yoga-rose rounded-2xl flex items-center justify-center">
                      <span className="font-playfair text-white text-2xl font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth">Day 1 Schedule</h3>
                      <p className="font-inter text-yoga-plum">Arrival & Welcome</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div className="bg-yoga-cream/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth">12:00 PM</p>
                      <p className="font-inter text-sm text-gray-600">Check in</p>
                    </div>
                    <div className="bg-yoga-sage/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth">12:30 PM</p>
                      <p className="font-inter text-sm text-gray-600">Lunch</p>
                    </div>
                    <div className="bg-yoga-rose/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth">4:00 - 5:00 PM</p>
                      <p className="font-inter text-sm text-gray-600">Balinese Massage Treatment</p>
                    </div>
                    <div className="bg-yoga-peach/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth">7:00 PM</p>
                      <p className="font-inter text-sm text-gray-600">Dinner</p>
                    </div>
                  </div>
                </div>

                {/* Day 2 Schedule */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yoga-sage/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-2xl flex items-center justify-center">
                      <span className="font-playfair text-white text-2xl font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth">Day 2 Schedule</h3>
                      <p className="font-inter text-yoga-sage">Sound Healing & Practice</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 text-center">
                    <div className="bg-yoga-cream/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">7:00 - 8:00 AM</p>
                      <p className="font-inter text-xs text-gray-600">Pranayama & Meditation</p>
                    </div>
                    <div className="bg-yoga-sage/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">8:00 - 9:00 AM</p>
                      <p className="font-inter text-xs text-gray-600">Hatha Vinyasa Yoga</p>
                    </div>
                    <div className="bg-yoga-peach/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">9:30 AM</p>
                      <p className="font-inter text-xs text-gray-600">Breakfast</p>
                    </div>
                    <div className="bg-yoga-rose/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">11:00 - 12:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Sound Healing Session</p>
                    </div>
                    <div className="bg-yoga-earth/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">12:30 PM & 4:00 - 5:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Lunch & Massage</p>
                    </div>
                    <div className="bg-yoga-plum/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">7:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Dinner</p>
                    </div>
                  </div>
                </div>

                {/* Day 3 Schedule */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yoga-earth/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-2xl flex items-center justify-center">
                      <span className="font-playfair text-white text-2xl font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth">Day 3 Schedule</h3>
                      <p className="font-inter text-yoga-earth">Reiki Healing & Renewal</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 text-center">
                    <div className="bg-yoga-cream/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">7:00 - 8:00 AM</p>
                      <p className="font-inter text-xs text-gray-600">Pranayama & Meditation</p>
                    </div>
                    <div className="bg-yoga-sage/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">8:00 - 9:00 AM</p>
                      <p className="font-inter text-xs text-gray-600">Hatha Vinyasa Yoga</p>
                    </div>
                    <div className="bg-yoga-peach/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">9:30 AM</p>
                      <p className="font-inter text-xs text-gray-600">Breakfast</p>
                    </div>
                    <div className="bg-yoga-rose/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">11:00 - 12:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Reiki Healing Session</p>
                    </div>
                    <div className="bg-yoga-earth/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">12:30 PM & 4:00 - 5:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Lunch & Massage</p>
                    </div>
                    <div className="bg-yoga-plum/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">7:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Dinner</p>
                    </div>
                  </div>
                </div>

                {/* Day 4 Schedule */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yoga-rose/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose to-yoga-peach rounded-2xl flex items-center justify-center">
                      <span className="font-playfair text-white text-2xl font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth">Day 4 Schedule</h3>
                      <p className="font-inter text-yoga-rose">Sound Healing Session</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 text-center">
                    <div className="bg-yoga-cream/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">7:00 - 8:00 AM</p>
                      <p className="font-inter text-xs text-gray-600">Pranayama & Meditation</p>
                    </div>
                    <div className="bg-yoga-sage/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">8:00 - 9:00 AM</p>
                      <p className="font-inter text-xs text-gray-600">Hatha Vinyasa Yoga</p>
                    </div>
                    <div className="bg-yoga-peach/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">9:30 AM</p>
                      <p className="font-inter text-xs text-gray-600">Breakfast</p>
                    </div>
                    <div className="bg-yoga-rose/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">11:00 - 12:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Sound Healing Session</p>
                    </div>
                    <div className="bg-yoga-earth/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">12:30 PM & 4:00 - 5:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Lunch & Massage</p>
                    </div>
                    <div className="bg-yoga-plum/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">7:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Dinner</p>
                    </div>
                  </div>
                </div>

                {/* Day 5 Schedule */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yoga-peach/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-peach to-yoga-cream rounded-2xl flex items-center justify-center">
                      <span className="font-playfair text-white text-2xl font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth">Day 5 Schedule</h3>
                      <p className="font-inter text-yoga-peach">Reiki Healing & Inner Peace</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 text-center">
                    <div className="bg-yoga-cream/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">7:00 - 8:00 AM</p>
                      <p className="font-inter text-xs text-gray-600">Pranayama & Meditation</p>
                    </div>
                    <div className="bg-yoga-sage/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">8:00 - 9:00 AM</p>
                      <p className="font-inter text-xs text-gray-600">Hatha Vinyasa Yoga</p>
                    </div>
                    <div className="bg-yoga-peach/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">9:30 AM</p>
                      <p className="font-inter text-xs text-gray-600">Breakfast</p>
                    </div>
                    <div className="bg-yoga-rose/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">11:00 - 12:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Reiki Healing Session</p>
                    </div>
                    <div className="bg-yoga-earth/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">12:30 PM & 4:00 - 5:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Lunch & Massage</p>
                    </div>
                    <div className="bg-yoga-plum/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth text-sm">7:00 PM</p>
                      <p className="font-inter text-xs text-gray-600">Dinner</p>
                    </div>
                  </div>
                </div>

                {/* Day 6 Schedule */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yoga-sage/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-plum rounded-2xl flex items-center justify-center">
                      <span className="font-playfair text-white text-2xl font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth">Day 6 Schedule</h3>
                      <p className="font-inter text-yoga-sage">Farewell & Departure</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div className="bg-yoga-cream/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth">7:00 - 8:00 AM</p>
                      <p className="font-inter text-sm text-gray-600">Pranayama & Meditation</p>
                    </div>
                    <div className="bg-yoga-sage/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth">8:00 - 9:00 AM</p>
                      <p className="font-inter text-sm text-gray-600">Hatha Vinyasa Yoga</p>
                    </div>
                    <div className="bg-yoga-peach/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth">9:30 AM</p>
                      <p className="font-inter text-sm text-gray-600">Breakfast</p>
                    </div>
                    <div className="bg-yoga-rose/20 rounded-xl p-4">
                      <p className="font-inter font-semibold text-yoga-earth">12:00 PM</p>
                      <p className="font-inter text-sm text-gray-600">Check out</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Dates & Pricing */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-cream/20 via-transparent to-yoga-peach/20 rounded-3xl"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-yoga-sage/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-yoga-rose/8 rounded-full blur-3xl"></div>
          
          <div className="relative space-y-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Calendar className="w-5 h-5 text-yoga-earth" />
                <span className="font-inter text-yoga-earth font-medium">Investment in Your Wellbeing</span>
              </div>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-6">
                Dates & 
                <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
              <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We offer 6 Days & 5 Nights Yoga Retreat throughout the year of 2024 & 2025. Please email us to check the availability.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group relative bg-gradient-to-br from-white via-white to-yoga-cream/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-yoga-earth/20 hover:scale-105 transition-all duration-300 overflow-visible">
                <div className="absolute -top-4 left-4 bg-yoga-earth text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-lg border border-white/10">
                  Most Popular
                </div>
                <div className="text-center">
                  <h4 className="font-playfair text-2xl font-semibold text-yoga-earth mb-2">Private Room Campus-I</h4>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-4xl font-bold text-yoga-earth">$743</p>
                    <div className="text-left">
                      <p className="text-sm text-gray-500 line-through">$875</p>
                      <div className="bg-gradient-to-r from-yoga-sage to-yoga-earth text-white text-xs px-2 py-1 rounded-full">
                        15% OFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="text-center">
                  <h4 className="font-playfair text-2xl font-semibold text-yoga-earth mb-2">Twin Shared Room Campus-I</h4>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-4xl font-bold text-yoga-earth">$584</p>
                    <div className="text-left">
                      <p className="text-sm text-gray-500 line-through">$687.5</p>
                      <div className="bg-gradient-to-r from-yoga-earth to-yoga-plum text-white text-xs px-2 py-1 rounded-full">
                        15% OFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="text-center">
                  <h4 className="font-playfair text-2xl font-semibold text-yoga-earth mb-2">Private Room Campus-II</h4>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-4xl font-bold text-yoga-earth">$637</p>
                    <div className="text-left">
                      <p className="text-sm text-gray-500 line-through">$750</p>
                      <div className="bg-gradient-to-r from-yoga-plum to-yoga-rose text-white text-xs px-2 py-1 rounded-full">
                        15% OFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-white/90 via-white/80 to-yoga-cream/20 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
                <div className="text-center mb-12">
                  <h3 className="font-playfair text-4xl font-semibold text-yoga-earth mb-4">What is Included</h3>
                  <p className="font-inter text-lg text-gray-600">Your complete 6 Days & 5 Nights transformation package</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage/20 to-yoga-earth/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-yoga-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Accommodation</h4>
                    <p className="font-inter text-sm text-gray-600">5 Nights Accommodation with a Bathroom</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth/20 to-yoga-plum/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Utensils className="w-8 h-8 text-yoga-earth" />
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Meals</h4>
                    <p className="font-inter text-sm text-gray-600">3 Times a Day Nutritious and Delicious vegan/Vegetarian Meals</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-plum/20 to-yoga-rose/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <User className="w-8 h-8 text-yoga-plum" />
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Yoga Classes</h4>
                    <p className="font-inter text-sm text-gray-600">Mentioned Yoga Classes</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose/20 to-yoga-peach/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-8 h-8 text-yoga-rose" />
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Spa Treatments</h4>
                    <p className="font-inter text-sm text-gray-600">5 Full-Body Balinese Massages</p>
                  </div>
                </div>

                {/* Additional Inclusions */}
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage/20 to-yoga-peach/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Waves className="w-8 h-8 text-yoga-sage" />
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Pool Access</h4>
                    <p className="font-inter text-sm text-gray-600">10:00 AM to 8:00 PM Swimming Pool Access</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth/20 to-yoga-rose/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Wifi className="w-8 h-8 text-yoga-earth" />
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">WiFi</h4>
                    <p className="font-inter text-sm text-gray-600">Complementary High-Speed Wi-Fi Anywhere in the Campus</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-plum/20 to-yoga-sage/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-yoga-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Equipment</h4>
                    <p className="font-inter text-sm text-gray-600">All necessary items for classes available in yoga shala</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose/20 to-yoga-cream/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-8 h-8 text-yoga-rose" />
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Course Materials</h4>
                    <p className="font-inter text-sm text-gray-600">BYS bag / BYS t-shirt / Notebook / Pen / Mala</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Memories Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-earth/5 via-transparent to-yoga-sage/10"></div>
          
          <div className="relative space-y-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <svg className="w-5 h-5 text-yoga-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-inter text-yoga-earth font-medium">Visual Journey</span>
              </div>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-6">
                Memories
              </h2>
              <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
                Every moment captured tells a story of transformation
              </p>
            </div>
            
            <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
              {galleryImages.slice().reverse().slice(0, 8).map((image, index) => (
                <div 
                  key={`alt-${index}`}
                  className="group relative break-inside-avoid cursor-pointer mb-2"
                >
                  <img 
                    src={image} 
                    alt={`Alternative view ${index + 1}`}
                    className="w-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105 rounded-lg shadow-lg"
                    style={{ 
                      height: `${200 + (index % 3) * 50}px`
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <p className="text-xs font-medium text-yoga-earth">6-Day Retreat Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <Card className="shadow-zen max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth text-center">Book Your 6-Day Retreat</CardTitle>
              <p className="text-center text-gray-600">Ready to transform? Get in touch with us today.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your retreat goals and any questions you have..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-yoga-sage hover:bg-yoga-earth">
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default SixDaysRetreat;
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

const SevenDaysRetreat = () => {
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
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: `url(/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/90 via-yoga-sage/75 to-yoga-earth/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm">
              <Calendar className="w-4 h-4" />
              <span>7 Days Retreat Experience</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              7 Days Yoga Retreat
              <span className="block text-4xl md:text-5xl text-yoga-cream/90 mt-2">
                in Bali
              </span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Complete transformation journey through intensive practice, spiritual mastery, and profound life transformation
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
                <span className="font-inter text-yoga-earth font-medium">Complete Transformation</span>
              </div>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-6">
                About This
                <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                  7-Day Retreat
                </span>
              </h2>
              <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Experience the ultimate transformation with our comprehensive 7-day retreat program, 
                designed for complete spiritual awakening, mastery of practice, and life-changing transformation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white/90 to-yoga-cream/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                  <blockquote className="font-playfair text-2xl lg:text-3xl text-yoga-earth italic leading-relaxed mb-6">
                    "True transformation happens when we surrender completely to the journey and embrace every moment as a teacher."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-full"></div>
                    <div>
                      <p className="font-inter font-semibold text-yoga-earth">Master Kadek</p>
                      <p className="font-inter text-sm text-gray-600">Retreat Founder & Guide</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage/20 to-yoga-earth/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Waves className="w-6 h-6 text-yoga-sage" />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Complete System</h3>
                    <p className="font-inter text-sm text-gray-600">Full spectrum yoga training and spiritual development</p>
                  </div>
                  
                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-earth/20 to-yoga-plum/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-6 h-6 text-yoga-earth" />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-yoga-earth mb-2">Cultural Mastery</h3>
                    <p className="font-inter text-sm text-gray-600">Complete Balinese cultural integration and wisdom sharing</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/20 rounded-2xl p-8 backdrop-blur-sm border border-yoga-cream/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yoga-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-yoga-sage" />
                      </div>
                      <h4 className="font-playfair font-semibold text-yoga-earth mb-2">7 Days</h4>
                      <p className="font-inter text-sm text-gray-600">Complete Program</p>
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
                  <span className="font-inter text-yoga-earth font-medium">7-Day Journey</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Your Daily 
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Schedule
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  A complete seven-day flow designed for ultimate transformation of mind, body, and spirit
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
                      <p className="font-inter text-yoga-rose">Sound Healing & Deep Practice</p>
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
                      <p className="font-inter text-yoga-peach">Reiki Healing & Inner Journey</p>
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
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yoga-cream/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-cream to-yoga-sage rounded-2xl flex items-center justify-center">
                      <span className="font-playfair text-white text-2xl font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth">Day 6 Schedule</h3>
                      <p className="font-inter text-yoga-sage">Sound Healing & Integration</p>
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

                {/* Day 7 Schedule */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yoga-plum/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-plum to-yoga-earth rounded-2xl flex items-center justify-center">
                      <span className="font-playfair text-white text-2xl font-bold">7</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth">Day 7 Schedule</h3>
                      <p className="font-inter text-yoga-plum">Completion & Departure</p>
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
                    <div className="bg-yoga-plum/20 rounded-xl p-4">
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
                We do offer 7 Days & 6 Nights retreat throughout the month pls email us check the availability, we are always ready to welcome you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="text-center">
                  <h4 className="font-playfair text-2xl font-semibold text-yoga-earth mb-2">Private Campus I</h4>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-4xl font-bold text-yoga-earth">$850</p>
                    <div className="text-left">
                      <p className="text-sm text-gray-500 line-through">$1000</p>
                      <div className="bg-gradient-to-r from-yoga-sage to-yoga-earth text-white text-xs px-2 py-1 rounded-full">
                        15% OFF
                      </div>
                    </div>
                  </div>
                  <p className="font-inter text-sm text-gray-600 mt-4">7 Days & 6 Nights</p>
                  <p className="font-inter text-xs text-gray-500 mt-2">Check-in: 12pm / Check-out: 12pm</p>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-white via-white to-yoga-cream/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-yoga-earth/20 hover:scale-105 transition-all duration-300 overflow-visible">
                <div className="absolute -top-4 left-4 bg-yoga-earth text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-lg border border-white/10">
                  Most Popular
                </div>
                <div className="text-center">
                  <h4 className="font-playfair text-2xl font-semibold text-yoga-earth mb-2">Twin Shared</h4>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-4xl font-bold text-yoga-earth">$690</p>
                    <div className="text-left">
                      <p className="text-sm text-gray-500 line-through">$812.5</p>
                      <div className="bg-gradient-to-r from-yoga-earth to-yoga-plum text-white text-xs px-2 py-1 rounded-full">
                        15% OFF
                      </div>
                    </div>
                  </div>
                  <p className="font-inter text-sm text-gray-600 mt-4">7 Days & 6 Nights</p>
                  <p className="font-inter text-xs text-gray-500 mt-2">Check-in: 12pm / Check-out: 12pm</p>
                </div>
              </div>
              
              <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="text-center">
                  <h4 className="font-playfair text-2xl font-semibold text-yoga-earth mb-2">Private Campus II</h4>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-4xl font-bold text-yoga-earth">$743</p>
                    <div className="text-left">
                      <p className="text-sm text-gray-500 line-through">$875</p>
                      <div className="bg-gradient-to-r from-yoga-plum to-yoga-rose text-white text-xs px-2 py-1 rounded-full">
                        15% OFF
                      </div>
                    </div>
                  </div>
                  <p className="font-inter text-sm text-gray-600 mt-4">7 Days & 6 Nights</p>
                  <p className="font-inter text-xs text-gray-500 mt-2">New Campus - Check-in: 12pm / Check-out: 12pm</p>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-white/90 via-white/80 to-yoga-cream/20 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
                <div className="text-center mb-12">
                  <h3 className="font-playfair text-4xl font-semibold text-yoga-earth mb-4">Everything Included</h3>
                  <p className="font-inter text-lg text-gray-600">Your complete 7-day transformation package</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage/20 to-yoga-earth/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-yoga-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Accommodation</h4>
                    <p className="font-inter text-sm text-gray-600">6 Nights Private Accommodation with Private Bathroom</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth/20 to-yoga-plum/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Utensils className="w-8 h-8 text-yoga-earth" />
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Nourishing Meals</h4>
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
                    <p className="font-inter text-sm text-gray-600">6 Full-Body Complimentary Balinese Massage</p>
                  </div>
                  
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
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">High-Speed Wi-Fi</h4>
                    <p className="font-inter text-sm text-gray-600">Complementary High-Speed Wi-Fi Anywhere in the Campus</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-plum/20 to-yoga-cream/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-yoga-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Class Equipment</h4>
                    <p className="font-inter text-sm text-gray-600">All necessary items for classes available in yoga shala</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose/20 to-yoga-sage/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-8 h-8 text-yoga-rose" />
                    </div>
                    <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Course Materials</h4>
                    <p className="font-inter text-sm text-gray-600">BYS bag / BYS t-shirt / Notebook / Pen / Mala</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-yoga-cream/20 rounded-2xl border border-yoga-earth/10">
                  <p className="font-inter text-center text-yoga-earth text-sm">
                    <strong>Important Note:</strong> The Management team holds the right to change the timings of the classes if it is needed.
                  </p>
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
                        <p className="text-xs font-medium text-yoga-earth">7-Day Retreat Experience</p>
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
              <CardTitle className="text-3xl text-yoga-earth text-center">Book Your 7-Day Retreat</CardTitle>
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

export default SevenDaysRetreat;
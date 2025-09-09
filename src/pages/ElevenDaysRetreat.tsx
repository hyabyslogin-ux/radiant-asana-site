import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users, Star, Calendar, User, Gift, Waves, Utensils, MessageSquare, Wifi } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ElevenDaysRetreat = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        
        {/* Minimal Background Layers */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: `url(/lovable-uploads/84b47165-30fa-48cd-8655-1fdd40968712.png)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/90 via-yoga-sage/75 to-yoga-earth/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm">
              <Calendar className="w-4 h-4" />
              <span>11 Days Sacred Journey</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              11 Days Yoga Retreat
              <span className="block text-4xl md:text-5xl text-yoga-cream/90 mt-2">
                in Bali
              </span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              The most comprehensive spiritual transformation through master-level practice, complete immersion, and transcendent awakening
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
                  <span className="font-inter text-yoga-earth font-medium">Sacred Transcendence</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Sacred Journey to
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Highest Self
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Our exclusive 11-day retreat represents the pinnacle of spiritual transformation - the ultimate journey through complete yogic mastery and transcendent awakening
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
                    <h3 className="font-playfair text-2xl font-semibold text-yoga-earth">The Sacred Experience</h3>
                  </div>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Embark on the most profound transformation journey through our sacred 11-day yoga retreat in Bali's mystical heart. This ultimate experience combines master-level <strong className="text-yoga-earth">Hatha Vinyasa practices</strong> with ancient wisdom teachings, creating the deepest possible opportunities for complete spiritual awakening and life transformation.
                  </p>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Nestled across <strong className="text-yoga-sage">two sacred campuses</strong> in divine Ubud, this extended retreat offers complete immersion into yogic philosophy, transcendent meditation practices, and advanced spiritual techniques that awaken your highest potential.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/20 rounded-2xl p-8 backdrop-blur-sm border border-yoga-cream/30">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-8 h-8 text-yoga-sage" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">11 Days</h4>
                        <p className="font-inter text-sm text-gray-600">Sacred Journey</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-8 h-8 text-yoga-earth" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">2 Campuses</h4>
                        <p className="font-inter text-sm text-gray-600">Sacred Locations</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-8 h-8 text-yoga-rose" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Master Level</h4>
                        <p className="font-inter text-sm text-gray-600">Spiritual Mastery</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yoga-peach/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Gift className="w-8 h-8 text-yoga-plum" />
                        </div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">All Levels</h4>
                        <p className="font-inter text-sm text-gray-600">Sacred Immersion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healing Practices */}
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Sacred Healing Practices</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
                    This sacred journey includes the most profound healing and transformation practices for complete spiritual awakening
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  
                  {/* Sound Healing */}
                  <div className="group bg-gradient-to-br from-white to-yoga-cream/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Waves className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Sacred Sound Healing</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Deep vibrational healing through ancient Tibetan singing bowls, crystal instruments, and sacred mantras for profound cellular transformation and spiritual awakening.
                    </p>
                  </div>
                  
                  {/* Balinese Massage */}
                  <div className="group bg-gradient-to-br from-white to-yoga-peach/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-peach/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Sacred Healing Touch</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Multiple traditional Balinese healing sessions using sacred techniques, blessed oils, and energy work for complete physical and spiritual restoration.
                    </p>
                  </div>
                  
                  {/* Vegan Food */}
                  <div className="group bg-gradient-to-br from-white to-yoga-rose/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-rose/20 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Utensils className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-yoga-earth mb-4">Sacred Nourishment</h4>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Divinely prepared organic, vegan meals served three times daily, blessed and designed to support deep purification and spiritual awakening.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Growth */}
              <div className="bg-gradient-to-r from-yoga-sage/5 via-yoga-earth/5 to-yoga-plum/5 rounded-2xl p-12 border border-yoga-sage/10">
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">Sacred Transformation Journey</h3>
                  <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
                    Whether beginning or advanced, this sacred experience provides the deepest level of spiritual guidance and mastery
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
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Sacred Immersion</h4>
                        <p className="font-inter text-gray-600">Complete 11-day immersion allows for the deepest possible spiritual transformation and awakening of consciousness.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-earth rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Master Teaching</h4>
                        <p className="font-inter text-gray-600">The highest level instruction in yoga philosophy, sacred anatomy, and the most profound spiritual practices.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yoga-plum rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Eternal Transformation</h4>
                        <p className="font-inter text-gray-600">This sacred experience creates profound, lasting spiritual awakening that continues to deepen throughout your lifetime.</p>
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
                        <p className="font-inter text-sm text-gray-600 mb-4">Founder & Master Teacher</p>
                      </div>
                      <blockquote className="font-playfair text-lg text-yoga-earth italic text-center">
                        "The 11-day sacred journey allows complete surrender to the divine, where every cell awakens to its highest potential."
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
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-sage/5 via-transparent to-yoga-earth/5 rounded-3xl"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-yoga-cream/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-yoga-peach/8 rounded-full blur-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-earth/10 via-yoga-sage/5 to-yoga-plum/10 px-12 py-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <div className="w-2 h-2 bg-yoga-earth rounded-full animate-pulse"></div>
                  <span className="font-inter text-yoga-earth font-medium">Sacred Schedule</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Your 11-Day
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Sacred Journey
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  A divinely crafted journey through complete spiritual mastery and transcendent awakening
                </p>
              </div>
            </div>

            <div className="px-12 py-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { phase: "Days 1-3", title: "Sacred Foundation", desc: "Arrival, grounding, and establishing your sacred practice foundation" },
                  { phase: "Days 4-6", title: "Deepening Practice", desc: "Building strength, exploring inner wisdom, and breaking through barriers" },
                  { phase: "Days 7-9", title: "Spiritual Mastery", desc: "Advanced techniques, awakening consciousness, and transcendent experiences" },
                  { phase: "Days 10-11", title: "Divine Integration", desc: "Wisdom consolidation and sacred completion of your transformation" }
                ].map((item, index) => (
                  <Card key={index} className="group bg-gradient-to-br from-white to-yoga-cream/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/20 hover:scale-105">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage via-yoga-earth to-yoga-plum rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-yoga-earth text-lg font-playfair">{item.phase}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <h3 className="font-playfair font-bold mb-3 text-yoga-earth text-xl">{item.title}</h3>
                      <p className="font-inter text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dates & Pricing Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/5 via-transparent to-yoga-rose/5 rounded-3xl"></div>
          <div className="absolute top-10 left-10 w-48 h-48 bg-yoga-sage/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yoga-earth/8 rounded-full blur-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-plum/10 via-yoga-sage/5 to-yoga-earth/10 px-12 py-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <Calendar className="w-4 h-4 text-yoga-earth" />
                  <span className="font-inter text-yoga-earth font-medium">Sacred Investment</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Dates & 
                  <span className="block bg-gradient-to-r from-yoga-plum via-yoga-sage to-yoga-earth bg-clip-text text-transparent">
                    Pricing
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Secure your place in this sacred transformation with our divine accommodation options
                </p>
              </div>
            </div>

            <div className="px-12 py-16">
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                
                {/* Campus I - Most Popular */}
                <div className="relative group">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-yoga-earth to-yoga-sage text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-yoga-cream/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-cream/30 group-hover:scale-105">
                    <div className="text-center mb-6">
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth mb-2">Campus I</h3>
                      <p className="font-inter text-gray-600 mb-4">Premium Room</p>
                      <div className="text-4xl font-bold text-yoga-sage mb-2">$3,300</div>
                      <p className="text-sm text-gray-500 line-through mb-2">$3,600</p>
                      <p className="text-yoga-earth font-medium">Save $300</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yoga-sage/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        </div>
                        <span className="font-inter text-sm text-gray-700">Premium room with sacred garden view</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yoga-sage/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        </div>
                        <span className="font-inter text-sm text-gray-700">All sacred meals included</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yoga-sage/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-yoga-sage rounded-full"></div>
                        </div>
                        <span className="font-inter text-sm text-gray-700">Daily yoga & sacred meditation</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-yoga-sage hover:bg-yoga-sage/90 text-white">
                      Select Premium
                    </Button>
                  </div>
                </div>

                {/* Campus II */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-yoga-earth/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-earth/30 group-hover:scale-105">
                    <div className="text-center mb-6">
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth mb-2">Campus II</h3>
                      <p className="font-inter text-gray-600 mb-4">Standard Room</p>
                      <div className="text-4xl font-bold text-yoga-earth mb-2">$3,000</div>
                      <p className="text-sm text-gray-500 line-through mb-2">$3,300</p>
                      <p className="text-yoga-earth font-medium">Save $300</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yoga-earth/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-yoga-earth rounded-full"></div>
                        </div>
                        <span className="font-inter text-sm text-gray-700">Comfortable standard room</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yoga-earth/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-yoga-earth rounded-full"></div>
                        </div>
                        <span className="font-inter text-sm text-gray-700">All sacred meals included</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yoga-earth/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-yoga-earth rounded-full"></div>
                        </div>
                        <span className="font-inter text-sm text-gray-700">Daily yoga & sacred meditation</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full border-yoga-earth text-yoga-earth hover:bg-yoga-earth hover:text-white">
                      Select Standard
                    </Button>
                  </div>
                </div>

                {/* Shared Accommodation */}
                <div className="group">
                  <div className="bg-gradient-to-br from-white to-yoga-plum/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-plum/30 group-hover:scale-105">
                    <div className="text-center mb-6">
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth mb-2">Shared</h3>
                      <p className="font-inter text-gray-600 mb-4">Shared Room</p>
                      <div className="text-4xl font-bold text-yoga-plum mb-2">$2,700</div>
                      <p className="text-sm text-gray-500 line-through mb-2">$3,000</p>
                      <p className="text-yoga-earth font-medium">Save $300</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yoga-plum/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-yoga-plum rounded-full"></div>
                        </div>
                        <span className="font-inter text-sm text-gray-700">Shared twin bed accommodation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yoga-plum/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-yoga-plum rounded-full"></div>
                        </div>
                        <span className="font-inter text-sm text-gray-700">All sacred meals included</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yoga-plum/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-yoga-plum rounded-full"></div>
                        </div>
                        <span className="font-inter text-sm text-gray-700">Daily yoga & sacred meditation</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full border-yoga-plum text-yoga-plum hover:bg-yoga-plum hover:text-white">
                      Select Shared
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum hover:opacity-90 text-white px-12 py-4 text-lg">
                  Reserve Your Sacred Journey
                </Button>
                <p className="font-inter text-sm text-gray-500 mt-4">
                  Secure your sacred spot with a deposit • Divine payment plans available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Included Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-cream/5 via-transparent to-yoga-peach/5 rounded-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-cream/20 via-yoga-peach/10 to-yoga-rose/20 px-12 py-16">
              <div className="text-center">
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  What is
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Included
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Your sacred transformation package includes everything needed for complete spiritual immersion
                </p>
              </div>
            </div>

            <div className="px-12 py-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Practice & Learning */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-yoga-earth">Sacred Practice & Learning</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-sage rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">22+ guided yoga sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-sage rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Daily meditation & sacred pranayama</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-sage rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Sacred philosophy workshops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-sage rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Anatomy & sacred alignment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-sage rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Personal spiritual guidance</span>
                    </li>
                  </ul>
                </div>

                {/* Healing & Wellness */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-xl flex items-center justify-center">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-yoga-earth">Sacred Healing & Wellness</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-earth rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Multiple sacred sound healing sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-earth rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Traditional Balinese healing massage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-earth rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Sacred energy healing sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-earth rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Deep detox & cleansing practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-earth rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Sacred therapeutic bodywork</span>
                    </li>
                  </ul>
                </div>

                {/* Accommodation & Meals */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-plum to-yoga-rose rounded-xl flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-yoga-earth">Sacred Accommodation & Meals</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-plum rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">11 nights sacred accommodation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-plum rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">All organic sacred vegan meals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-plum rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Fresh sacred juices & herbal teas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-plum rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Sacred water ceremonies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yoga-plum rounded-full mt-2"></div>
                      <span className="font-inter text-gray-700">Cultural & spiritual immersion</span>
                    </li>
                  </ul>
                </div>

                {/* Bonus Features */}
                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-r from-yoga-sage/5 via-yoga-earth/5 to-yoga-plum/5 rounded-2xl p-8 border border-yoga-sage/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-xl flex items-center justify-center">
                        <Gift className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-yoga-earth">Sacred Bonus Features</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full mt-2"></div>
                        <span className="font-inter text-gray-700">Sacred graduation ceremony & certification</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full mt-2"></div>
                        <span className="font-inter text-gray-700">Lifetime sacred community access</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full mt-2"></div>
                        <span className="font-inter text-gray-700">Post-retreat spiritual support</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yoga-rose rounded-full mt-2"></div>
                        <span className="font-inter text-gray-700">Digital sacred practice library</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Memories Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-sage/5 via-transparent to-yoga-earth/5 rounded-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-sage/10 via-yoga-earth/5 to-yoga-plum/10 px-12 py-16">
              <div className="text-center">
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Sacred
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Memories
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Experience the divine through moments captured from our sacred 11-day transformational journeys
                </p>
              </div>
            </div>

            <div className="px-12 py-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  <div key={index} className="group aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={image}
                      alt={`Sacred retreat memory ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/5 via-transparent to-yoga-rose/5 rounded-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-plum/10 via-yoga-sage/5 to-yoga-earth/10 px-12 py-16">
              <div className="text-center">
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Begin Your Sacred
                  <span className="block bg-gradient-to-r from-yoga-plum via-yoga-sage to-yoga-earth bg-clip-text text-transparent">
                    Journey
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Ready for the most sacred transformation of your lifetime? Connect with us to secure your divine place
                </p>
              </div>
            </div>

            <div className="px-12 py-16">
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-2">Call Us</h3>
                      <p className="font-inter text-gray-600">+1 (555) 123-4567</p>
                      <p className="font-inter text-sm text-gray-500 mt-1">Available 9 AM - 8 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-2">Email</h3>
                      <p className="font-inter text-gray-600">info@yogaretreat.com</p>
                      <p className="font-inter text-sm text-gray-500 mt-1">Sacred response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yoga-plum to-yoga-rose rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-2">Location</h3>
                      <p className="font-inter text-gray-600">Sacred Ubud, Bali, Indonesia</p>
                      <p className="font-inter text-sm text-gray-500 mt-1">Two divine campus locations</p>
                    </div>
                  </div>
                </div>

                <Card className="p-8 bg-white/80 backdrop-blur-sm border border-yoga-cream/30 shadow-lg">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="font-playfair text-2xl font-bold text-yoga-earth mb-2">Start Your Sacred Journey</h3>
                      <p className="font-inter text-gray-600">Share your spiritual aspirations with us</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Input 
                        name="firstName"
                        placeholder="First Name" 
                        className="bg-white/70 border-yoga-cream/50 focus:border-yoga-sage"
                        onChange={handleInputChange}
                      />
                      <Input 
                        name="lastName"
                        placeholder="Last Name" 
                        className="bg-white/70 border-yoga-cream/50 focus:border-yoga-sage"
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-white/70 border-yoga-cream/50 focus:border-yoga-sage"
                      onChange={handleInputChange}
                    />
                    
                    <Input 
                      name="phone"
                      placeholder="Phone Number" 
                      className="bg-white/70 border-yoga-cream/50 focus:border-yoga-sage"
                      onChange={handleInputChange}
                    />
                    
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your spiritual journey and what you hope to gain from this sacred 11-day transformation experience..." 
                      className="bg-white/70 border-yoga-cream/50 focus:border-yoga-sage min-h-[120px]"
                      onChange={handleInputChange}
                    />
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum hover:opacity-90 text-white py-3 text-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ElevenDaysRetreat;
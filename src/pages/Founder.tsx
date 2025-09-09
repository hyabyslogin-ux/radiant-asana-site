import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Compass, Star, Award, Users, TreePine, Dumbbell } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Founder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/90 via-yoga-sage/75 to-yoga-earth/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Meet Our
            <span className="block text-4xl md:text-5xl text-yoga-cream/90 mt-2">
              Founder
            </span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            A journey from athlete to spiritual guide - the inspiring story of Yogi Himanshu
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* Main Founder Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-cream/5 via-transparent to-yoga-sage/5 rounded-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Image Section */}
              <div className="relative h-[500px] lg:h-auto">
                <img 
                  src="/lovable-uploads/3853444f-cf97-46b3-a8a2-62032660f070.png" 
                  alt="Yogi Himanshu - Founder of Bali Yoga Retreats"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 bg-yoga-sage/10 rounded-full px-4 py-2 mb-4">
                    <Star className="w-4 h-4 text-yoga-sage" />
                    <span className="font-inter text-yoga-earth font-medium text-sm">Spiritual Guide & Founder</span>
                  </div>
                  <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-yoga-earth mb-4">
                    Yogi Himanshu
                  </h2>
                  <p className="font-inter text-xl text-yoga-sage font-medium mb-6">
                    From Champion Athlete to Spiritual Teacher
                  </p>
                </div>
                
                <div className="space-y-6">
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Born with a courageous spirit and an unwavering dedication to truth, Yogi Himanshu has lived a life that seamlessly blends strength, compassion, and service. A native of India, he began his journey early as a multi-talented athlete, representing his state and nation in various sports disciplines.
                  </p>
                  
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    His physical strength, sharp focus, and fearless determination led to him being headhunted by the Indian Army during his college years — a recognition of his exceptional physical and mental stamina.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="bg-yoga-sage hover:bg-yoga-sage/90 text-white px-8 py-3"
                    onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Read His Journey
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Transformation Journey */}
        <section id="journey" className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-sage/5 via-transparent to-yoga-earth/5 rounded-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-sage/10 via-yoga-earth/5 to-yoga-plum/10 px-12 py-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <Compass className="w-4 h-4 text-yoga-earth" />
                  <span className="font-inter text-yoga-earth font-medium">The Transformation</span>
                </div>
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  From Crisis to
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Awakening
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  How a physical setback became the gateway to profound spiritual transformation
                </p>
              </div>
            </div>

            <div className="px-12 py-16 space-y-12">
              <div className="max-w-4xl mx-auto">
                <p className="font-inter text-lg text-gray-700 leading-relaxed mb-8">
                  However, life had a deeper purpose in store for him. During his time in rigorous military-style training, Himanshu suffered an internal injury—one that no medical treatment could cure. What seemed like a physical setback eventually became the gateway to a profound spiritual awakening.
                </p>
                
                <div className="bg-gradient-to-r from-yoga-sage/5 via-yoga-earth/5 to-yoga-plum/5 rounded-2xl p-8 border border-yoga-sage/10 mb-8">
                  <p className="font-inter text-lg text-gray-700 leading-relaxed italic text-center">
                    "Turning to meditation as his last hope, he devoted himself fully to the practice for over a year. Through unwavering discipline and inner exploration, he not only healed his body but also awakened a new dimension of life rooted in silence, awareness, and self-realization."
                  </p>
                </div>
                
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  From a young age, honesty and a deep sense of justice have been the foundation of Himanshu's character. Whether in sport, leadership, or spiritual practice, he has always stood for what is true and right. These values continue to reflect in his teachings and everyday life, earning him deep respect among his students and peers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values & Beliefs */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/5 via-transparent to-yoga-rose/5 rounded-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-plum/10 via-yoga-sage/5 to-yoga-earth/10 px-12 py-16">
              <div className="text-center">
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Core Values &
                  <span className="block bg-gradient-to-r from-yoga-plum via-yoga-sage to-yoga-earth bg-clip-text text-transparent">
                    Beliefs
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  The principles that guide Yogi Himanshu's life and teachings
                </p>
              </div>
            </div>

            <div className="px-12 py-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Truth & Justice */}
                <Card className="group bg-gradient-to-br from-white to-yoga-sage/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-sage/20 hover:scale-105">
                  <CardContent className="text-center p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-sage to-yoga-earth rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-3">Truth & Justice</h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">
                      Standing for what is true and right in all aspects of life, teaching, and spiritual practice
                    </p>
                  </CardContent>
                </Card>

                {/* Conscious Living */}
                <Card className="group bg-gradient-to-br from-white to-yoga-earth/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-earth/20 hover:scale-105">
                  <CardContent className="text-center p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-earth to-yoga-plum rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Compass className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-3">Conscious Living</h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">
                      Believing in mindful existence and creating positive change in the world around us
                    </p>
                  </CardContent>
                </Card>

                {/* Karma Yoga */}
                <Card className="group bg-gradient-to-br from-white to-yoga-plum/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-plum/20 hover:scale-105">
                  <CardContent className="text-center p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-plum to-yoga-rose rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-3">Karma Yoga</h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">
                      Dedicated to selfless service, generating employment, and uplifting those in need
                    </p>
                  </CardContent>
                </Card>

                {/* Balance */}
                <Card className="group bg-gradient-to-br from-white to-yoga-rose/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yoga-rose/20 hover:scale-105">
                  <CardContent className="text-center p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-yoga-rose to-yoga-mauve rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-yoga-earth mb-3">Balance</h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">
                      Embodying harmony between strength and softness, effort and surrender
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Current Mission */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-cream/5 via-transparent to-yoga-peach/5 rounded-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-cream/20 via-yoga-peach/10 to-yoga-rose/20 px-12 py-16">
              <div className="text-center">
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  His Mission
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Today
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Creating meaningful impact through conscious action and selfless service
                </p>
              </div>
            </div>

            <div className="px-12 py-16 space-y-12">
              <div className="max-w-4xl mx-auto">
                <p className="font-inter text-lg text-gray-700 leading-relaxed mb-8">
                  Today, Yogi Himanshu is known not only for his personal transformation but also for the impact he creates in the lives of others. He believes in conscious living and strives to bring positive change to the world around him.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yoga-sage/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="w-5 h-5 text-yoga-sage" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Employment Generation</h4>
                        <p className="font-inter text-gray-600">Creating meaningful job opportunities and supporting livelihoods in local communities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yoga-earth/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-5 h-5 text-yoga-earth" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Animal Welfare</h4>
                        <p className="font-inter text-gray-600">Supporting and caring for animals with compassion and dedicated service</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yoga-plum/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <TreePine className="w-5 h-5 text-yoga-plum" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Environmental Care</h4>
                        <p className="font-inter text-gray-600">Nurturing plants and protecting the environment for future generations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yoga-rose/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Dumbbell className="w-5 h-5 text-yoga-rose" />
                      </div>
                      <div>
                        <h4 className="font-playfair font-semibold text-yoga-earth mb-2">Healthy Living</h4>
                        <p className="font-inter text-gray-600">Promoting travel, running, and maintaining a balanced, healthy lifestyle</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yoga-sage/5 via-yoga-earth/5 to-yoga-plum/5 rounded-2xl p-8 border border-yoga-sage/10">
                  <p className="font-inter text-lg text-gray-700 leading-relaxed text-center italic">
                    "His love for travel, running, and maintaining a healthy lifestyle are natural extensions of his yogic path. Yogi Himanshu embodies the spirit of balance—between strength and softness, effort and surrender."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Legacy */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-sage/5 via-transparent to-yoga-earth/5 rounded-3xl"></div>
          
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="relative bg-gradient-to-r from-yoga-sage/10 via-yoga-earth/5 to-yoga-plum/10 px-12 py-16">
              <div className="text-center">
                <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-4">
                  Living
                  <span className="block bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum bg-clip-text text-transparent">
                    Philosophy
                  </span>
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Yoga as a way of life, not just a profession
                </p>
              </div>
            </div>

            <div className="px-12 py-16">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <p className="font-inter text-xl text-gray-700 leading-relaxed">
                  Today, he continues to inspire countless people through his existence and grounded leadership. For Yogi Himanshu, yoga is not a profession—it is a way of life.
                </p>
                
                <div className="bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/20 rounded-2xl p-12 backdrop-blur-sm border border-yoga-cream/30">
                  <blockquote className="font-playfair text-2xl lg:text-3xl text-yoga-earth italic font-medium leading-relaxed">
                    "Through that life, he serves as a living example of how challenges can become catalysts, and how truth, when lived with sincerity, becomes the most powerful form of healing."
                  </blockquote>
                </div>
                
                <div className="pt-8">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-yoga-sage via-yoga-earth to-yoga-plum hover:opacity-90 text-white px-12 py-4 text-lg"
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    Connect with Yogi Himanshu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Founder;
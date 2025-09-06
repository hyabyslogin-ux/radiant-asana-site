import React from 'react';

const Founder = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/60 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Meet Our Founder
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The visionary behind Bali Yoga School's transformative journey
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  Yogi Himanshu
                </h3>
                <p className="text-xl font-medium text-primary/80">
                  Founder & Lead Instructor
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-primary rounded-full opacity-30"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                    Everything you experience at Bali Yoga School community has come from our great leader, 
                    Yogi Himanshu Joshi. He is the most honest, hard-working, authentic person we can ever meet. 
                    His yoga journey started from a severe injury after playing sports for a long time at the 
                    state / national level. Yoga brought him up into the light from the darkness.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-primary rounded-full opacity-30"></div>
                  <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                    He contributed to the success of other yoga schools in Rishikesh, and then built his own — 
                    Himalayan Yoga Association and Bali Yoga School. He continues to expand the community, 
                    uplifting lives for the better. Feel his essence in every detail of the school and learning.
                  </p>
                </div>
              </div>
              
              {/* Achievement badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-sm font-medium text-primary">Certified Yoga Master</span>
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-sm font-medium text-primary">Meditation Expert</span>
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-sm font-medium text-primary">Spiritual Guide</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -inset-4">
                  <div className="w-full h-full bg-gradient-primary rounded-3xl opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                </div>
                <div className="absolute -inset-2">
                  <div className="w-full h-full bg-gradient-primary rounded-3xl opacity-30 transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
                </div>
                
                {/* Main image container */}
                <div className="relative bg-background rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group-hover:shadow-3xl group-hover:shadow-primary/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/lovable-uploads/b36093bd-c1e4-40a7-8601-24e53d082b0c.png"
                    alt="Yogi Himanshu - Founder of Bali Yoga School"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating quote */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                    <p className="text-sm italic text-gray-700 font-medium">
                      "Yoga brought me from darkness into light"
                    </p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-full opacity-60 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
import React from 'react';

const Founder = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Founder of Bali Yoga School
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                Yogi Himanshu
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Everything you experience at Bali Yoga School community has come from our great leader, 
                  Yogi Himanshu Joshi. He is the most honest, hard-working, authentic person we can ever meet. 
                  His yoga journey started from a severe injury after playing sports for a long time at the 
                  state / national level. Yoga brought him up into the light from the darkness.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  He contributed to the success of other yoga schools in Rishikesh, and then built his own — 
                  Himalayan Yoga Association and Bali Yoga School. He continues to expand the community, 
                  uplifting lives for the better. Feel his essence in every detail of the school and learning.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3"></div>
                <div className="relative bg-background rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src="/lovable-uploads/5117ac0b-9cea-4be9-83af-8536b5cd98d6.png"
                    alt="Yogi Himanshu - Founder of Bali Yoga School"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
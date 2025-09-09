import { Card } from '@/components/ui/card';
import { Heart, Leaf, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-yoga-mauve" />,
      title: "Mindful Practice",
      description: "Connect your breath with movement in a peaceful, supportive environment."
    },
    {
      icon: <Leaf className="w-8 h-8 text-yoga-mauve" />,
      title: "Natural Healing",
      description: "Embrace holistic wellness through ancient yoga traditions and modern techniques."
    },
    {
      icon: <Star className="w-8 h-8 text-yoga-mauve" />,
      title: "Personal Growth",
      description: "Discover your inner strength and achieve balance in body, mind, and spirit."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Bali Yoga Retreat
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-6">
            <p>
              Welcome to Bali Yoga Retreats, your gateway to transformative yoga experiences in the mystical island of Bali. 
              We specialize in authentic yoga retreats that combine ancient Balinese wisdom with traditional yoga practices, 
              offering life-changing journeys for practitioners of all levels across Ubud, Uluwatu, and Canggu.
            </p>
            <p>
              Our carefully curated yoga retreats in Bali provide the perfect sanctuary for deepening your practice while 
              experiencing the island's rich spiritual heritage. From the lush rice terraces of Ubud to the dramatic cliffs 
              of Uluwatu and the vibrant surf culture of Canggu, each location offers unique energy and transformative experiences 
              that will reconnect you with your inner self.
            </p>
            <p>
              At Bali Yoga Retreats, we believe in holistic wellness that encompasses mind, body, and spirit. Our experienced 
              instructors guide you through traditional Hatha, Vinyasa, and Yin yoga practices, complemented by meditation sessions, 
              pranayama breathing techniques, and authentic Balinese healing ceremonies. Each retreat includes organic vegetarian 
              meals, spa treatments, cultural excursions, and time for personal reflection in nature's embrace.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-white/50 rounded-2xl p-8 md:p-12 border border-yoga-rose/20 shadow-soft">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Our Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Bali Yoga Retreats, we honor the sacred traditions of Balinese spirituality while creating authentic 
                yoga experiences that transform lives. Our philosophy centers on the concept of "Tri Hita Karana" - the 
                Balinese principle of harmony between humans, nature, and the divine. We integrate this ancient wisdom 
                with comprehensive yoga practices to create retreats that heal, inspire, and awaken.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're seeking stress relief, spiritual awakening, or deeper yoga practice, our expertly designed 
                retreats in Ubud, Uluwatu, and Canggu offer the perfect environment for transformation. We believe that 
                yoga retreats in Bali should be more than just asana practice - they should be journeys of self-discovery 
                that connect you with Bali's powerful healing energy and ancient wisdom traditions.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-border rounded-2xl p-1">
                <div className="bg-yoga-cream rounded-xl p-8 text-center">
                  <h4 className="text-2xl font-bold text-primary mb-4">Join Our Community</h4>
                  <p className="text-muted-foreground mb-6">
                    Experience the benefits of regular practice with our supportive yoga family.
                  </p>
                  <div className="text-3xl font-bold text-yoga-mauve">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
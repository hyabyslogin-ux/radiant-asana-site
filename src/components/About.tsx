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
            Welcome to Serenity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our studio is a sanctuary where ancient wisdom meets modern wellness. 
            We believe yoga is more than physical exercise—it's a transformative 
            journey that nurtures your complete well-being.
          </p>
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
                At Serenity Yoga, we honor the traditional roots of yoga while embracing 
                its evolution. Our approach integrates physical postures, breathwork, 
                meditation, and mindfulness to create a holistic practice that serves 
                modern lifestyles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're beginning your yoga journey or deepening an existing practice, 
                our welcoming community supports you every step of the way. We believe 
                everyone deserves to experience the transformative power of yoga.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-border rounded-2xl p-1">
                <div className="bg-yoga-cream rounded-xl p-8 text-center">
                  <h4 className="text-2xl font-bold text-primary mb-4">Join Our Community</h4>
                  <p className="text-muted-foreground mb-6">
                    Experience the benefits of regular practice with our supportive yoga family.
                  </p>
                  <div className="text-3xl font-bold text-yoga-mauve">500+</div>
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
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Coffee, Palmtree } from 'lucide-react';

const CangguRetreats = () => {
  const retreats = [
    { days: '3 Days', price: '$320', level: 'Beginner' },
    { days: '4 Days', price: '$420', level: 'Beginner' },
    { days: '5 Days', price: '$520', level: 'Intermediate' },
    { days: '6 Days', price: '$620', level: 'Intermediate' },
    { days: '7 Days', price: '$720', level: 'All Levels' },
    { days: '8 Days', price: '$820', level: 'Advanced' },
    { days: '9 Days', price: '$920', level: 'Advanced' },
    { days: '10 Days', price: '$1020', level: 'All Levels' },
    { days: '11 Days', price: '$1120', level: 'Advanced' }
  ];

  return (
    <section id="canggu-retreats" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Yoga Retreats in Canggu Bali
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Embrace the vibrant, creative energy of Canggu, Bali's bohemian coastal paradise where surf culture meets spiritual practice. 
              Our Canggu yoga retreats offer the perfect blend of beachside relaxation, dynamic yoga sessions, and the contemporary Balinese 
              lifestyle. Located along volcanic black sand beaches with world-renowned surf breaks, Canggu provides an energetic yet peaceful 
              setting for yoga practice, surrounded by lush rice fields, trendy cafés, and a thriving international community.
            </p>
            <p>
              Enjoy morning yoga flows on the beach as surfers catch their first waves, explore colorful street art and local markets, 
              savor organic smoothie bowls and plant-based cuisine at hip beachfront cafés, and unwind with sunset sessions overlooking 
              the Indian Ocean. Our Canggu retreats include accommodation in boutique eco-resorts, wellness workshops, surfing lessons, 
              visits to local art galleries and markets, and plenty of free time to explore this creative coastal town. Perfect for those 
              seeking a more contemporary approach to spiritual practice while still honoring traditional yoga wisdom in a modern, inspiring environment.
            </p>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Palmtree className="w-12 h-12 text-yoga-mauve" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Beach Yoga</h3>
            <p className="text-muted-foreground">Practice yoga on pristine black sand beaches with the sound of waves as your soundtrack</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Coffee className="w-12 h-12 text-yoga-mauve" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Wellness Culture</h3>
            <p className="text-muted-foreground">Immerse yourself in Canggu's vibrant wellness scene with organic cafés and health-focused lifestyle</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Calendar className="w-12 h-12 text-yoga-mauve" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Creative Energy</h3>
            <p className="text-muted-foreground">Connect with like-minded individuals in this artistic coastal community</p>
          </div>
        </div>

        {/* Retreat Packages */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {retreats.map((retreat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <Calendar className="w-8 h-8 text-yoga-mauve" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {retreat.days}
              </h3>
              <p className="text-2xl font-bold text-yoga-mauve mb-2">
                {retreat.price}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {retreat.level}
              </p>
              <Button 
                variant="outline" 
                className="border-yoga-rose hover:bg-yoga-rose hover:text-background transition-all duration-300"
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CangguRetreats;
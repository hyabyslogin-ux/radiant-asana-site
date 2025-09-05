import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Heart } from 'lucide-react';
import yogaRetreat1 from '@/assets/yoga-retreat-1.jpg';
import yogaRetreat2 from '@/assets/yoga-retreat-2.jpg';
import yogaRetreat3 from '@/assets/yoga-retreat-3.jpg';

const UbudRetreats = () => {
  const retreats = [
    { days: '3 Days', price: '$350', level: 'Beginner' },
    { days: '4 Days', price: '$450', level: 'Beginner' },
    { days: '5 Days', price: '$550', level: 'Intermediate' },
    { days: '6 Days', price: '$650', level: 'Intermediate' },
    { days: '7 Days', price: '$750', level: 'All Levels' },
    { days: '8 Days', price: '$850', level: 'Advanced' },
    { days: '9 Days', price: '$950', level: 'Advanced' },
    { days: '10 Days', price: '$1050', level: 'All Levels' },
    { days: '11 Days', price: '$1150', level: 'Advanced' }
  ];

  return (
    <section id="ubud-retreats" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Yoga Retreats in Ubud Bali
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Discover the spiritual heart of Bali in Ubud, where ancient temples meet lush rice terraces and sacred monkey forests. 
              Our Ubud yoga retreats offer an authentic immersion into Balinese culture and spirituality, combining traditional yoga practices 
              with meditation, healing ceremonies, and cultural experiences. Nestled in the cultural center of Bali, Ubud provides the perfect 
              backdrop for deepening your practice while connecting with the island's mystical energy.
            </p>
            <p>
              Experience daily yoga sessions overlooking emerald rice paddies, participate in traditional Balinese blessing ceremonies, 
              visit ancient temples, and enjoy organic farm-to-table meals. Our Ubud retreats include accommodation in eco-friendly resorts, 
              spa treatments using local herbs and oils, cooking classes featuring Balinese cuisine, and guided walks through sacred sites. 
              Whether you're seeking spiritual awakening, stress relief, or simply a deeper connection with nature, our Ubud yoga retreats 
              provide transformative experiences that will stay with you long after you return home.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300">
            <img 
              src={yogaRetreat1} 
              alt="Yoga retreat meditation in Ubud Bali" 
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300">
            <img 
              src={yogaRetreat2} 
              alt="Sound healing session in Ubud yoga retreat" 
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300">
            <img 
              src={yogaRetreat3} 
              alt="Group meditation class in Ubud Bali" 
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
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

export default UbudRetreats;
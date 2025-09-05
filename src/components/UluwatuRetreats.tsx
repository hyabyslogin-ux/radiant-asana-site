import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Waves, Sun } from 'lucide-react';

const UluwatuRetreats = () => {
  const retreats = [
    { days: '3 Days', price: '$380', level: 'Beginner' },
    { days: '4 Days', price: '$480', level: 'Beginner' },
    { days: '5 Days', price: '$580', level: 'Intermediate' },
    { days: '6 Days', price: '$680', level: 'Intermediate' },
    { days: '7 Days', price: '$780', level: 'All Levels' },
    { days: '8 Days', price: '$880', level: 'Advanced' },
    { days: '9 Days', price: '$980', level: 'Advanced' },
    { days: '10 Days', price: '$1080', level: 'All Levels' },
    { days: '11 Days', price: '$1180', level: 'Advanced' }
  ];

  return (
    <section id="uluwatu-retreats" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Yoga Retreats in Uluwatu Bali
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Experience the raw power and beauty of Bali's southern peninsula in Uluwatu, where dramatic limestone cliffs meet pristine 
              white sand beaches and world-class surf breaks. Our Uluwatu yoga retreats combine the serenity of yoga practice with the 
              dynamic energy of the ocean, offering cliff-top sessions at sunrise and sunset, beach meditations, and the opportunity to 
              witness some of the most spectacular sunsets in the world from the famous Uluwatu Temple.
            </p>
            <p>
              Immerse yourself in daily yoga flows with panoramic ocean views, explore hidden beaches accessible only by foot, participate 
              in traditional Kecak fire dance ceremonies, and enjoy fresh seafood at cliff-top warungs. Our Uluwatu retreats feature 
              accommodation in luxury cliff-side resorts, spa treatments overlooking the Indian Ocean, surfing lessons for those seeking 
              adventure, and guided visits to sacred temples perched on dramatic clifftops. This unique location combines spiritual practice 
              with natural beauty, creating an unforgettable retreat experience that balances inner peace with the exhilarating energy of the sea.
            </p>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Waves className="w-12 h-12 text-yoga-mauve" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Ocean Energy</h3>
            <p className="text-muted-foreground">Connect with the powerful energy of the Indian Ocean through cliff-top yoga sessions</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sun className="w-12 h-12 text-yoga-mauve" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Sunset Meditation</h3>
            <p className="text-muted-foreground">Experience transformative sunset meditations at the iconic Uluwatu Temple</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Calendar className="w-12 h-12 text-yoga-mauve" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Sacred Ceremonies</h3>
            <p className="text-muted-foreground">Participate in traditional Balinese ceremonies and cultural experiences</p>
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

export default UluwatuRetreats;
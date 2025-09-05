import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Waves, Sun, Heart } from 'lucide-react';
import yogaRetreat1 from '@/assets/yoga-retreat-1.jpg';
import yogaRetreat2 from '@/assets/yoga-retreat-2.jpg';

const UluwatuRetreats = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const detailedRetreats = [
    {
      days: '3 Days',
      price: '$380',
      level: 'Beginner',
      image: yogaRetreat1,
      title: 'Clifftop Serenity Retreat',
      shortDesc: 'Experience dramatic ocean views and sunset yoga sessions.',
      fullDesc: 'Discover the breathtaking beauty of Uluwatu\'s dramatic cliffs while deepening your yoga practice. This 3-day retreat combines spectacular ocean views with transformative yoga sessions and sacred temple visits.',
      highlights: [
        'Sunrise yoga on cliff-top platforms',
        'Sunset meditation at Uluwatu Temple',
        'Traditional Kecak fire dance ceremony',
        'Beach yoga sessions on pristine sands',
        'Ocean-view spa treatments',
        'Fresh seafood dining experiences'
      ],
      includes: ['Cliff-side accommodation', 'All meals', 'Temple visits', 'Cultural shows', 'Spa treatment']
    },
    {
      days: '4 Days',
      price: '$480',
      level: 'Beginner',
      image: yogaRetreat2,
      title: 'Ocean Energy & Sacred Temples',
      shortDesc: 'Harness the powerful energy of the ocean with temple ceremonies.',
      fullDesc: 'Immerse yourself in the mystical energy of Uluwatu\'s sacred temples and dramatic coastline. This 4-day retreat combines ocean-inspired yoga practices with traditional Balinese ceremonies and cultural experiences.',
      highlights: [
        'Daily clifftop yoga with ocean panoramas',
        'Sacred water blessing ceremonies',
        'Traditional Balinese temple rituals',
        'Surfing lessons (optional)',
        'Hidden beach exploration',
        'Sunset dinner at cliff restaurants',
        'Ocean meditation sessions'
      ],
      includes: ['Luxury cliff accommodation', 'Gourmet seafood meals', 'Temple ceremonies', 'Cultural activities', 'Airport transfers']
    }
  ];

  const simpleRetreats = [
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

        {/* Detailed Retreat Cards (3-4 days) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {detailedRetreats.map((retreat, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="relative">
                <img 
                  src={retreat.image} 
                  alt={`${retreat.title} in Uluwatu Bali`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-yoga-mauve text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {retreat.days}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-yoga-mauve px-3 py-1 rounded-full text-lg font-bold">
                  {retreat.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">{retreat.title}</h3>
                  <span className="text-sm text-muted-foreground bg-yoga-peach px-2 py-1 rounded">
                    {retreat.level}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {expandedCard === retreat.days ? retreat.fullDesc : retreat.shortDesc}
                </p>
                
                {expandedCard === retreat.days && (
                  <div className="space-y-4 animate-smooth-slide-up">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {retreat.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <Waves className="w-3 h-3 text-yoga-rose mt-1 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {retreat.includes.map((item, idx) => (
                          <span key={idx} className="text-xs bg-yoga-rose/20 text-yoga-mauve px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-3 mt-6">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setExpandedCard(expandedCard === retreat.days ? null : retreat.days)}
                    className="border-yoga-rose hover:bg-yoga-rose/10 transition-all duration-300"
                  >
                    {expandedCard === retreat.days ? 'Read Less' : 'Read More'}
                  </Button>
                  <Button 
                    className="flex-1 bg-yoga-mauve hover:bg-yoga-plum text-white transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Simple Retreat Cards (5-11 days) */}
        <div className="border-t border-yoga-rose/20 pt-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Extended Retreats</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {simpleRetreats.map((retreat, index) => (
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
      </div>
    </section>
  );
};

export default UluwatuRetreats;
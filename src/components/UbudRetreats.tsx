import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Heart } from 'lucide-react';
import yogaRetreat1 from '@/assets/yoga-retreat-1.jpg';
import yogaRetreat2 from '@/assets/yoga-retreat-2.jpg';
import yogaRetreat3 from '@/assets/yoga-retreat-3.jpg';

const UbudRetreats = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const detailedRetreats = [
    {
      days: '3 Days',
      price: '$350',
      level: 'Beginner',
      image: yogaRetreat1,
      title: 'Spiritual Awakening Retreat',
      shortDesc: 'Perfect introduction to Balinese yoga and spirituality.',
      fullDesc: 'Immerse yourself in the sacred energy of Ubud with this transformative 3-day retreat designed for beginners and those seeking spiritual renewal. Experience the perfect blend of traditional yoga practices and Balinese healing wisdom.',
      highlights: [
        'Daily sunrise yoga sessions overlooking rice terraces',
        'Traditional Balinese blessing ceremony',
        'Guided meditation in sacred temples',
        'Organic vegetarian meals',
        'Spa treatment with local herbs',
        'Cultural village walk'
      ],
      includes: ['Accommodation', 'All meals', 'Yoga classes', 'Temple visits', 'Spa treatment']
    },
    {
      days: '4 Days',
      price: '$450',
      level: 'Beginner',
      image: yogaRetreat2,
      title: 'Sound Healing & Yoga Immersion',
      shortDesc: 'Combine yoga practice with powerful sound healing sessions.',
      fullDesc: 'Deepen your practice with this 4-day retreat featuring daily yoga classes combined with transformative sound healing using traditional Tibetan singing bowls and Balinese gamelan instruments.',
      highlights: [
        'Morning and evening yoga sessions',
        'Daily sound healing with singing bowls',
        'Pranayama and meditation workshops',
        'Waterfall meditation excursion',
        'Balinese cooking class',
        'Sacred water temple visit',
        'Jungle trekking and nature connection'
      ],
      includes: ['Boutique accommodation', 'All organic meals', 'Sound healing sessions', 'Cultural experiences', 'Transportation']
    }
  ];

  const simpleRetreats = [
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

        {/* Detailed Retreat Cards (3-4 days) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {detailedRetreats.map((retreat, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="relative">
                <img 
                  src={retreat.image} 
                  alt={`${retreat.title} in Ubud Bali`}
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
                            <Heart className="w-3 h-3 text-yoga-rose mt-1 mr-2 flex-shrink-0" />
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

export default UbudRetreats;
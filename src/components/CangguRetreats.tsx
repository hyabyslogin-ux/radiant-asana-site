import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Coffee, Palmtree, Heart } from 'lucide-react';
import yogaRetreat2 from '@/assets/yoga-retreat-2.jpg';
import yogaRetreat3 from '@/assets/yoga-retreat-3.jpg';

const CangguRetreats = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const detailedRetreats = [
    {
      days: '3 Days',
      price: '$320',
      level: 'Beginner',
      image: yogaRetreat2,
      title: 'Beach Vibes Wellness Retreat',
      shortDesc: 'Perfect blend of beach yoga and modern wellness culture.',
      fullDesc: 'Experience Canggu\'s vibrant wellness scene with this energizing 3-day retreat that combines beachside yoga with the area\'s famous health-conscious lifestyle. Perfect for modern yogis seeking community and creativity.',
      highlights: [
        'Morning beach yoga sessions',
        'Healthy smoothie bowl workshops',
        'Sunset yoga on black sand beaches',
        'Visit to local wellness cafés',
        'Art gallery and market tours',
        'Community beach cleanup activity'
      ],
      includes: ['Boutique accommodation', 'Healthy meals & smoothies', 'Beach activities', 'Cultural tours', 'Wellness workshops']
    },
    {
      days: '4 Days',
      price: '$420',
      level: 'Beginner',
      image: yogaRetreat3,
      title: 'Surf & Yoga Lifestyle Immersion',
      shortDesc: 'Combine yoga practice with surf culture and creative energy.',
      fullDesc: 'Dive into Canggu\'s unique blend of surf culture and spiritual practice. This 4-day retreat offers yoga sessions, surf lessons, and immersion into the creative coastal lifestyle that makes Canggu special.',
      highlights: [
        'Beach yoga at sunrise and sunset',
        'Beginner-friendly surf lessons',
        'Meditation sessions by the ocean',
        'Plant-based cooking classes',
        'Visit to local art studios',
        'Rice field yoga sessions',
        'Community wellness events'
      ],
      includes: ['Eco-friendly accommodation', 'Organic plant-based meals', 'Surf lessons & board rental', 'Art workshops', 'Transportation']
    }
  ];

  const simpleRetreats = [
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

        {/* Detailed Retreat Cards (3-4 days) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {detailedRetreats.map((retreat, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="relative">
                <img 
                  src={retreat.image} 
                  alt={`${retreat.title} in Canggu Bali`}
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
                            <Palmtree className="w-3 h-3 text-yoga-rose mt-1 mr-2 flex-shrink-0" />
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

export default CangguRetreats;
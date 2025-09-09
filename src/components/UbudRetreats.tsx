import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Heart } from 'lucide-react';

const UbudRetreats = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleBookNow = (days: string) => {
    const dayNumber = days.split(' ')[0].toLowerCase();
    navigate(`/${dayNumber}-days-retreat`);
  };

  const allRetreats = [
    {
      days: '3 Days',
      price: '$265',
      level: 'All Levels',
      image: '/lovable-uploads/f58e04e1-fda5-48c9-b3ab-41f6f7235e94.png',
      title: '3 Days Yoga Retreat in Ubud Bali',
      description: 'Immerse yourself in the sacred energy of Ubud with this transformative 3-day retreat. Experience daily hatha vinyasa yoga, meditation, and pranayama sessions in the spiritual heart of Bali. This perfect introduction retreat includes vegan meals, swimming pool access, Balinese massages, and sound healing sessions.',
      highlights: [
        'Daily hatha vinyasa yoga, meditation, pranayama sessions',
        '3 daily vegan meals',
        'Swimming pool access',
        'Accommodation of your choice',
        '2 Balinese massages',
        '1 sound healing session'
      ],
      includes: [
        'All meals',
        'Mentioned yoga classes',
        'Mentioned healing session',
        'Spa treatments',
        'Complementary high-speed Wi-Fi',
        'All the necessary items for the sessions',
        'Retreat materials (BYS bag / BYS t-shirt / notebook / pen / mala)'
      ]
    },
    {
      days: '4 Days',
      price: '$372',
      level: 'All Levels',
      image: '/lovable-uploads/1d7f913b-8b12-4d76-a477-0c6d244780e6.png',
      title: '4 Days Yoga Retreat in Ubud Bali',
      description: 'Deepen your practice with this 4-day retreat featuring daily hatha vinyasa yoga combined with transformative healing sessions. Experience the perfect balance of yoga, meditation, pranayama, and traditional Balinese healing modalities including massages, sound healing, and reiki sessions.',
      highlights: [
        'Daily hatha vinyasa yoga, meditation, pranayama sessions',
        '3 daily vegan meals',
        'Swimming pool access',
        'Accommodation of your choice',
        '3 Balinese massages',
        '1 sound healing session',
        '1 reiki healing session'
      ],
      includes: [
        'All meals',
        'Mentioned yoga classes',
        'Mentioned healing sessions',
        'Spa treatments',
        'Complementary high-speed Wi-Fi',
        'All the necessary items for the sessions',
        'Retreat materials (BYS bag / BYS t-shirt / notebook / pen / mala)'
      ]
    },
    {
      days: '5 Days',
      price: '$478',
      level: 'All Levels',
      image: '/lovable-uploads/f2151035-c120-4b70-b58d-3ba55d30bf7f.png',
      title: '5 Days Yoga Retreat in Ubud Bali',
      description: 'Dive deeper into traditional practices with this comprehensive 5-day retreat. Focus on daily hatha vinyasa yoga, meditation, and pranayama while enjoying enhanced healing experiences with multiple Balinese massages, sound healing, and reiki sessions in Ubud\'s serene environment.',
      highlights: [
        'Daily hatha vinyasa yoga, meditation, pranayama sessions',
        '3 daily vegan meals',
        'Swimming pool access',
        'Accommodation of your choice',
        '4 Balinese massages',
        '2 sound healing sessions',
        '1 reiki healing session'
      ],
      includes: [
        'All meals',
        'Mentioned yoga classes',
        'Mentioned healing sessions',
        'Spa treatments',
        'Complementary high-speed Wi-Fi',
        'All the necessary items for the sessions',
        'Retreat materials (BYS bag / BYS t-shirt / notebook / pen / mala)'
      ]
    },
    {
      days: '6 Days',
      price: '$584',
      level: 'All Levels',
      image: '/lovable-uploads/76153bc7-9de3-4b24-b604-6f11f047c77a.png',
      title: '6 Days Yoga Retreat in Ubud Bali',
      description: 'Embark on a transformative 6-day journey focusing on deeper healing and spiritual practices. Experience daily yoga sessions combined with an abundance of healing treatments including multiple Balinese massages, sound healing, and reiki sessions for complete rejuvenation.',
      highlights: [
        'Daily hatha vinyasa yoga, meditation, pranayama sessions',
        '3 daily vegan meals',
        'Swimming pool access',
        'Accommodation of your choice',
        '5 Balinese massages',
        '2 sound healing sessions',
        '2 reiki healing sessions'
      ],
      includes: [
        'All meals',
        'Mentioned yoga classes',
        'Mentioned healing sessions',
        'Spa treatments',
        'Complementary high-speed Wi-Fi',
        'All the necessary items for the sessions',
        'Retreat materials (BYS bag / BYS t-shirt / notebook / pen / mala)'
      ]
    },
    {
      days: '7 Days',
      price: '$690',
      level: 'All Levels',
      image: '/lovable-uploads/eb7f3511-36b4-4061-b6ee-7bc64b93bd1e.png',
      title: '7 Days Yoga Retreat in Ubud Bali',
      description: 'Experience a comprehensive 7-day wellness transformation that addresses body, mind, and spirit. This all-levels retreat combines daily hatha vinyasa yoga with extensive healing modalities including multiple massages, sound healing, and reiki sessions for deep renewal.',
      highlights: [
        'Daily hatha vinyasa yoga, meditation, pranayama sessions',
        '3 daily vegan meals',
        'Swimming pool access',
        'Accommodation of your choice',
        '6 Balinese massages',
        '3 sound healing sessions',
        '2 reiki healing sessions'
      ],
      includes: [
        'All meals',
        'Mentioned yoga classes',
        'Mentioned healing sessions',
        'Spa treatments',
        'Complementary high-speed Wi-Fi',
        'All the necessary items for the sessions',
        'Retreat materials (BYS bag / BYS t-shirt / notebook / pen / mala)'
      ]
    },
    {
      days: '8 Days',
      price: '$796',
      level: 'All Levels',
      image: '/lovable-uploads/6e9de023-381f-457c-9bae-69019d80a410.png',
      title: '8 Days Yoga Retreat in Ubud Bali',
      description: 'Designed for deep transformation, this 8-day retreat focuses on intensive daily practices and comprehensive healing experiences. Master daily hatha vinyasa yoga, meditation, and pranayama while enjoying extensive spa treatments and healing sessions.',
      highlights: [
        'Daily hatha vinyasa yoga, meditation, pranayama sessions',
        '3 daily vegan meals',
        'Swimming pool access',
        'Accommodation of your choice',
        '7 Balinese massages',
        '3 sound healing sessions',
        '3 reiki healing sessions'
      ],
      includes: [
        'All meals',
        'Mentioned yoga classes',
        'Mentioned healing sessions',
        'Spa treatments',
        'Complementary high-speed Wi-Fi',
        'All the necessary items for the sessions',
        'Retreat materials (BYS bag / BYS t-shirt / notebook / pen / mala)'
      ]
    },
    {
      days: '9 Days',
      price: '$930',
      level: 'All Levels',
      image: '/lovable-uploads/c07619d4-f8aa-4444-88c4-fa19f00c2b19.png',
      title: '9 Days Yoga Retreat in Ubud Bali',
      description: 'An intensive 9-day program for comprehensive wellness transformation. This retreat combines daily hatha vinyasa yoga with extensive healing treatments and introduces Ayurveda consultation for personalized lifestyle guidance and holistic well-being.',
      highlights: [
        'Daily hatha vinyasa yoga, meditation, pranayama sessions',
        '3 daily vegan meals',
        'Swimming pool access',
        'Accommodation of your choice',
        '8 Balinese massages',
        '3 sound healing sessions',
        '3 reiki healing sessions',
        'Ayurveda consultation on lifestyle'
      ],
      includes: [
        'All meals',
        'Mentioned yoga classes',
        'Mentioned healing sessions',
        'Spa treatments',
        'Complementary high-speed Wi-Fi',
        'All the necessary items for the sessions',
        'Retreat materials (BYS bag / BYS t-shirt / notebook / pen / mala)'
      ]
    },
    {
      days: '10 Days',
      price: '$1009',
      level: 'All Levels',
      image: '/lovable-uploads/cfcd0947-4b35-453b-8db6-aef9ac9db996.png',
      title: '10 Days Yoga Retreat in Ubud Bali',
      description: 'Embark on a profound 10-day spiritual and wellness journey. This comprehensive retreat includes daily practices, extensive healing treatments, Ayurveda consultation, and sacred aura cleansing ceremonies for complete transformation.',
      highlights: [
        'Daily hatha vinyasa yoga, meditation, pranayama sessions',
        '3 daily vegan meals',
        'Swimming pool access',
        'Accommodation of your choice',
        '9 Balinese massages',
        '3 sound healing sessions',
        '3 reiki healing sessions',
        'Ayurveda consultation on lifestyle',
        'Aura cleansing through chantings & hawan ceremony'
      ],
      includes: [
        'All meals',
        'Mentioned yoga classes',
        'Mentioned healing sessions',
        'Spa treatments',
        'Complementary high-speed Wi-Fi',
        'All the necessary items for the sessions',
        'Retreat materials (BYS bag / BYS t-shirt / notebook / pen / mala)'
      ]
    },
    {
      days: '11 Days',
      price: '$1115',
      level: 'All Levels',
      image: '/lovable-uploads/2666d43f-e0a5-4bba-a044-58ad4248a4cf.png',
      title: '11 Days Yoga Retreat in Ubud Bali',
      description: 'The ultimate 11-day retreat for complete transformation and spiritual awakening. This comprehensive program includes all healing modalities, Ayurveda consultation, aura cleansing ceremonies, and sacred Shiva mantra meditation for the deepest spiritual experience.',
      highlights: [
        'Daily hatha vinyasa yoga, meditation, pranayama sessions',
        '3 daily vegan meals',
        'Swimming pool access',
        'Accommodation of your choice',
        '10 Balinese massages',
        '3 sound healing sessions',
        '3 reiki healing sessions',
        'Ayurveda consultation on lifestyle',
        'Aura cleansing through chantings & hawan ceremony',
        'Shiva mantra meditation'
      ],
      includes: [
        'All meals',
        'Mentioned yoga classes',
        'Mentioned healing sessions',
        'Spa treatments',
        'Complementary high-speed Wi-Fi',
        'All the necessary items for the sessions',
        'Retreat materials (BYS bag / BYS t-shirt / notebook / pen / mala)'
      ]
    }
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


        {/* All Retreat Cards - Uniform Design */}
        <div className="grid md:grid-cols-3 gap-6">
          {allRetreats.map((retreat, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="relative">
                <img 
                  src={retreat.image} 
                  alt={`${retreat.title} in Ubud Bali`}
                  className="w-full h-56 object-cover"
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
                  <h3 className="text-lg font-bold text-primary">{retreat.title}</h3>
                  <span className="text-xs text-muted-foreground bg-yoga-peach px-2 py-1 rounded">
                    {retreat.level}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4">
                  {expandedCard === retreat.days ? retreat.description : retreat.description.substring(0, 100) + '...'}
                </p>
                
                {expandedCard === retreat.days && (
                  <div className="space-y-4 animate-smooth-slide-up">
                    <div>
                      <h4 className="font-semibold text-primary mb-2 text-sm">Highlights:</h4>
                      <ul className="space-y-1">
                        {retreat.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start">
                            <Heart className="w-3 h-3 text-yoga-rose mt-0.5 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2 text-sm">Includes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {retreat.includes.map((item, idx) => (
                          <span key={idx} className="text-xs bg-yoga-rose/20 text-yoga-mauve px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 mt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setExpandedCard(expandedCard === retreat.days ? null : retreat.days)}
                    className="text-xs border-yoga-rose hover:bg-yoga-rose/10 transition-all duration-300"
                  >
                    {expandedCard === retreat.days ? 'Less' : 'More'}
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => handleBookNow(retreat.days)}
                    className="flex-1 bg-yoga-mauve hover:bg-yoga-plum text-white transition-all duration-300 text-xs"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UbudRetreats;
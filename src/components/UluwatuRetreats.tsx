import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Waves, Sun, Heart } from 'lucide-react';
import retreatTeaching from '/lovable-uploads/45b5e644-5e4c-49e2-8d00-745b07651022.png';
import retreatPractice from '/lovable-uploads/84b47165-30fa-48cd-8655-1fdd40968712.png';

const UluwatuRetreats = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const allRetreats = [
    {
      days: '3 Days',
      price: '$380',
      level: 'Beginner',
      image: retreatTeaching,
      title: '3 Days Yoga Retreat in Bali',
      description: 'Experience the dramatic beauty of Uluwatu\'s limestone cliffs while discovering inner peace through yoga and meditation. This 3-day retreat combines spectacular ocean views with transformative practices, featuring sunrise yoga sessions on cliff-top platforms and sunset meditations at the sacred Uluwatu Temple. Participants enjoy traditional Kecak fire dance ceremonies, pristine beach yoga, and ocean-view spa treatments. The retreat includes fresh seafood dining experiences and exploration of hidden beaches accessible only by foot. Perfect for beginners seeking inspiration from nature\'s raw power while developing their yoga practice in one of Bali\'s most dramatic and sacred locations.',
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
      image: retreatPractice,
      title: '4 Days Yoga Retreat in Bali',
      description: 'Harness the powerful energy of the Indian Ocean while exploring ancient temples perched on dramatic clifftops. This 4-day retreat offers daily yoga sessions with panoramic ocean views, sacred water blessing ceremonies, and traditional Balinese temple rituals. Experience the unique combination of ocean meditation, surfing lessons for adventurous spirits, and exploration of hidden beaches. The program includes visits to cliff-top restaurants, traditional healing ceremonies, and opportunities to witness breathtaking sunsets from multiple temple locations. This retreat perfectly balances spiritual practice with the exhilarating energy of the sea, creating lasting memories and deep personal transformation.',
      highlights: [
        'Daily clifftop yoga with ocean panoramas',
        'Sacred water blessing ceremonies',
        'Traditional Balinese temple rituals',
        'Surfing lessons (optional)',
        'Hidden beach exploration',
        'Sunset dinner at cliff restaurants'
      ],
      includes: ['Luxury cliff accommodation', 'Gourmet seafood meals', 'Temple ceremonies', 'Cultural activities', 'Airport transfers']
    },
    {
      days: '5 Days',
      price: '$580',
      level: 'Intermediate',
      image: retreatTeaching,
      title: '5 Days Yoga Retreat in Bali',
      description: 'Develop advanced yoga skills while drawing inspiration from the ocean\'s rhythm and power. This 5-day intermediate retreat focuses on dynamic flow sequences that mirror the waves\' movement, advanced balance poses practiced on cliff edges, and deep meditation sessions synchronized with tidal patterns. Participants explore challenging arm balances, inversions with ocean backdrops, and pranayama techniques that harness sea breezes. The retreat includes specialized workshops on ocean-inspired sequencing, traditional water blessing ceremonies, and night meditation under the stars. Perfect for practitioners ready to take their practice to new heights while surrounded by the raw beauty and power of Uluwatu\'s dramatic coastline.',
      highlights: [
        'Advanced flow sequences mirroring waves',
        'Balance poses on cliff edges',
        'Meditation synchronized with tides',
        'Challenging arm balances and inversions',
        'Ocean-inspired sequencing workshops',
        'Night meditation under stars'
      ],
      includes: ['Premium cliff accommodation', 'Energy-boosting meals', 'Advanced workshops', 'Ocean experiences', 'Professional guidance']
    },
    {
      days: '6 Days',
      price: '$680',
      level: 'Intermediate',
      image: retreatPractice,
      title: '6 Days Yoga Retreat in Bali',
      description: 'Combine the art of surfing with advanced yoga practice in this unique 6-day retreat designed for water lovers and yoga enthusiasts. Experience early morning surf sessions followed by yoga practice that enhances balance, flexibility, and core strength essential for surfing. Learn breath control techniques that translate directly to wave riding, and develop the mental focus required for both surfing and advanced yoga poses. The retreat includes professional surf instruction, board selection guidance, ocean safety training, and specialized yoga sequences for surfers. Evening sessions feature restorative practices to aid recovery and deepen flexibility. This retreat creates the perfect synergy between two ancient practices of flow and balance.',
      highlights: [
        'Professional surf instruction',
        'Yoga sequences designed for surfers',
        'Breath control for wave riding',
        'Balance and core strengthening',
        'Ocean safety training',
        'Restorative recovery sessions'
      ],
      includes: ['Beachfront accommodation', 'Surf equipment rental', 'Professional instruction', 'Recovery treatments', 'Nutritional guidance']
    },
    {
      days: '7 Days',
      price: '$780',
      level: 'All Levels',
      image: retreatTeaching,
      title: '7 Days Yoga Retreat in Bali',
      description: 'Embark on a comprehensive 7-day wellness journey that combines yoga, meditation, ocean therapy, and cultural immersion. This all-levels retreat offers multiple yoga styles practiced in various cliff-top and beach locations, thalassotherapy sessions using ocean minerals, and traditional Balinese healing treatments enhanced by sea elements. Participants experience dawn meditation on pristine beaches, sunset yoga at sacred temples, and healing saltwater rituals. The program includes visits to traditional fishing villages, cooking classes featuring fresh seafood, and boat trips to hidden coves. This transformative week helps participants reconnect with nature\'s healing power while developing a sustainable wellness practice that integrates ocean energy.',
      highlights: [
        'Multiple yoga styles in various locations',
        'Thalassotherapy and ocean mineral treatments',
        'Dawn beach meditation sessions',
        'Traditional fishing village visits',
        'Seafood cooking classes',
        'Boat trips to hidden coves'
      ],
      includes: ['Ocean-view wellness resort', 'Spa treatments', 'Cultural excursions', 'Boat trips', 'Cooking classes']
    },
    {
      days: '8 Days',
      price: '$880',
      level: 'Advanced',
      image: retreatPractice,
      title: '8 Days Yoga Retreat in Bali',
      description: 'Push your yoga practice to new heights with this challenging 8-day intensive designed for advanced practitioners. Experience yoga poses at the edge of dramatic cliffs, advanced inversions with ocean backdrops, and meditation practices that require deep focus and courage. This retreat challenges both physical and mental boundaries through specialized cliff-edge sequences, advanced arm balances performed with stunning views, and fearlessness-building exercises. Participants develop extraordinary balance, strength, and mental clarity while practicing in one of the world\'s most dramatic settings. The program includes rock climbing elements, advanced breathing techniques, and workshops on overcoming fear. This transformative experience builds confidence that extends far beyond the yoga mat.',
      highlights: [
        'Cliff-edge yoga sequences',
        'Advanced inversions with ocean views',
        'Fearlessness-building exercises',
        'Rock climbing elements',
        'Advanced breathing techniques',
        'Confidence-building workshops'
      ],
      includes: ['Adventure accommodation', 'Safety equipment', 'Professional guides', 'Courage workshops', 'Mental training']
    },
    {
      days: '9 Days',
      price: '$980',
      level: 'Advanced',
      image: retreatTeaching,
      title: '9 Days Yoga Retreat in Bali',
      description: 'Develop mastery in meditation practices enhanced by ocean energy in this intensive 9-day program for advanced practitioners. Learn specialized techniques that harness the sea\'s natural rhythm for deeper meditative states, practice extended sitting meditation sessions with wave sounds as guidance, and develop the ability to maintain awareness in challenging outdoor environments. The retreat includes teachings on ocean-based mindfulness, advanced concentration practices, and methods for accessing altered states of consciousness. Participants experience multi-hour meditation sessions, silent periods synchronized with tidal cycles, and night practices under the star-filled sky. This advanced training develops meditation skills that can be applied in any environment while building extraordinary mental resilience.',
      highlights: [
        'Ocean-enhanced meditation techniques',
        'Extended sitting meditation sessions',
        'Advanced concentration practices',
        'Multi-hour meditation intensives',
        'Silent tidal cycle synchronization',
        'Night sky meditation practices'
      ],
      includes: ['Meditation retreat accommodation', 'Specialized cushions', 'Silence support', 'Advanced teachings', 'Personal guidance']
    },
    {
      days: '10 Days',
      price: '$1080',
      level: 'All Levels',
      image: retreatPractice,
      title: '10 Days Yoga Retreat in Bali',
      description: 'Journey along Bali\'s sacred southern coastline visiting multiple cliff-top temples and power spots in this comprehensive 10-day pilgrimage retreat. Each day features yoga practice at different temple locations, participation in traditional ceremonies, and teachings on the spiritual significance of ocean worship in Balinese culture. Experience sunrise ceremonies at Tanah Lot, cliff-top meditations at Uluwatu, and powerful healing rituals at lesser-known coastal temples. The retreat includes meetings with traditional priests, lessons in Balinese Hindu philosophy, and opportunities to participate in authentic ceremonial practices. This transformative pilgrimage creates deep spiritual connections while honoring the ancient traditions that recognize the ocean as a source of purification and blessing.',
      highlights: [
        'Multiple cliff-top temple visits',
        'Traditional ceremony participation',
        'Sunrise ceremonies at sacred sites',
        'Meetings with traditional priests',
        'Balinese Hindu philosophy lessons',
        'Authentic ceremonial practices'
      ],
      includes: ['Pilgrimage accommodation', 'Temple offerings', 'Ceremonial guidance', 'Cultural teachings', 'Sacred site access']
    },
    {
      days: '11 Days',
      price: '$1180',
      level: 'Advanced',
      image: retreatTeaching,
      title: '11 Days Yoga Retreat in Bali',
      description: 'Achieve mastery in ocean-inspired yoga practice through this comprehensive 11-day retreat that integrates advanced physical practice with deep spiritual teachings. Develop extraordinary balance through cliff-edge poses, master complex sequences inspired by wave movements, and learn to teach ocean-based yoga methodology. The program includes intensive daily practice sessions, individual mentoring with master teachers, and specialized training in working with natural elements. Participants receive certification in ocean yoga instruction, learn advanced safety protocols for outdoor practice, and develop the skills to lead retreats in natural settings. This ultimate experience combines physical mastery, spiritual development, and teaching preparation, creating well-rounded practitioners ready to share ocean yoga\'s transformative power.',
      highlights: [
        'Cliff-edge pose mastery',
        'Wave-inspired sequence development',
        'Ocean yoga instructor certification',
        'Individual master teacher mentoring',
        'Natural element integration training',
        'Retreat leadership preparation'
      ],
      includes: ['Master-level accommodation', 'Certification materials', 'Personal mentoring', 'Teaching preparation', 'Leadership training']
    }
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

        {/* All Retreat Cards - Uniform Design */}
        <div className="grid md:grid-cols-3 gap-6">
          {allRetreats.map((retreat, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="relative">
                <img 
                  src={retreat.image} 
                  alt={`${retreat.title} in Uluwatu Bali`}
                  className="w-full h-48 object-cover"
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
                            <Waves className="w-3 h-3 text-yoga-rose mt-0.5 mr-2 flex-shrink-0" />
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

export default UluwatuRetreats;
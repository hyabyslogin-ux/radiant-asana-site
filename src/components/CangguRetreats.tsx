import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Coffee, Palmtree, Heart } from 'lucide-react';
import yogaRetreat2 from '@/assets/yoga-retreat-2.jpg';
import yogaRetreat3 from '@/assets/yoga-retreat-3.jpg';

const CangguRetreats = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const allRetreats = [
    {
      days: '3 Days',
      price: '$320',
      level: 'Beginner',
      image: yogaRetreat2,
      title: 'Beach Vibes Wellness Retreat',
      description: 'Experience Canggu\'s vibrant wellness scene with this energizing 3-day retreat that combines beachside yoga with the area\'s famous health-conscious lifestyle. Perfect for modern yogis seeking community and creativity. Morning beach yoga sessions are complemented by healthy smoothie bowl workshops and sunset practices on volcanic black sand beaches. Explore local wellness cafés, art galleries, and bustling markets while participating in community beach cleanup activities. This retreat offers the perfect introduction to Canggu\'s unique blend of surf culture, artistic expression, and conscious living, creating connections with like-minded individuals from around the world.',
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
      description: 'Dive into Canggu\'s unique blend of surf culture and spiritual practice with this comprehensive 4-day lifestyle immersion. Combine beach yoga sessions at sunrise and sunset with beginner-friendly surf lessons and ocean meditation practices. Experience plant-based cooking classes, visit local art studios, and participate in rice field yoga sessions. The retreat includes community wellness events and opportunities to connect with Canggu\'s creative international community. This program perfectly balances physical activity, spiritual growth, and cultural exploration, offering participants a taste of the modern nomadic lifestyle that makes Canggu a global wellness destination.',
      highlights: [
        'Beach yoga at sunrise and sunset',
        'Beginner-friendly surf lessons',
        'Meditation sessions by the ocean',
        'Plant-based cooking classes',
        'Visit to local art studios',
        'Rice field yoga sessions'
      ],
      includes: ['Eco-friendly accommodation', 'Organic plant-based meals', 'Surf lessons & board rental', 'Art workshops', 'Transportation']
    },
    {
      days: '5 Days',
      price: '$520',
      level: 'Intermediate',
      image: yogaRetreat2,
      title: 'Creative Flow & Expression Retreat',
      description: 'Unleash your creativity through this dynamic 5-day retreat that combines intermediate yoga practice with artistic expression and creative workshops. Experience flowing yoga sequences inspired by ocean waves, participate in creative writing sessions, and explore various art forms including painting, photography, and music. The retreat takes place in multiple inspiring locations throughout Canggu, from beachfront studios to rice field platforms and artist collectives. Participants develop their unique creative voice while deepening their yoga practice through innovative sequencing and mindful movement. This transformative experience attracts artists, writers, and creative professionals seeking inspiration and community in Bali\'s most artistic coastal town.',
      highlights: [
        'Ocean-inspired flowing yoga sequences',
        'Creative writing and art workshops',
        'Photography and music sessions',
        'Multiple inspiring practice locations',
        'Innovative sequencing techniques',
        'Artist collective visits'
      ],
      includes: ['Creative accommodation', 'Inspiring meals', 'Art supplies', 'Workshop materials', 'Creative guidance']
    },
    {
      days: '6 Days',
      price: '$620',
      level: 'Intermediate',
      image: yogaRetreat3,
      title: 'Sustainable Living & Wellness',
      description: 'Learn sustainable living practices while deepening your yoga practice in this eco-conscious 6-day retreat. Explore permaculture gardens, participate in organic farming activities, and learn about sustainable tourism and conscious consumption. The retreat combines intermediate yoga practice with workshops on zero-waste living, renewable energy, and environmental stewardship. Participants visit local eco-projects, learn traditional Balinese sustainable practices, and engage with environmental conservation efforts. Daily yoga sessions take place in natural settings including bamboo studios, organic gardens, and beachfront locations. This retreat attracts environmentally conscious travelers seeking to align their lifestyle with their values while maintaining a strong yoga practice.',
      highlights: [
        'Permaculture garden exploration',
        'Organic farming participation',
        'Zero-waste living workshops',
        'Traditional sustainable practices',
        'Environmental conservation projects',
        'Natural setting yoga sessions'
      ],
      includes: ['Eco-accommodation', 'Organic farm meals', 'Sustainability workshops', 'Conservation activities', 'Environmental education']
    },
    {
      days: '7 Days',
      price: '$720',
      level: 'All Levels',
      image: yogaRetreat2,
      title: 'Digital Detox & Mindful Living',
      description: 'Reconnect with yourself and nature through this comprehensive 7-day digital detox retreat designed for all levels. Experience life without constant connectivity while developing mindful living practices that can be sustained long-term. The retreat combines various yoga styles with meditation techniques, mindful eating practices, and nature immersion activities. Participants learn to cultivate presence, develop healthy boundaries with technology, and create sustainable daily routines. Daily activities include beach walks, jungle meditations, traditional craft workshops, and community cooking sessions. This transformative week helps modern individuals rediscover the joy of simple living while building a strong yoga practice rooted in mindfulness and authentic connection.',
      highlights: [
        'Complete digital disconnection',
        'Mindful eating and living practices',
        'Nature immersion activities',
        'Traditional craft workshops',
        'Community cooking sessions',
        'Sustainable daily routine development'
      ],
      includes: ['Disconnected accommodation', 'Mindful meals', 'Craft materials', 'Nature activities', 'Mindfulness guidance']
    },
    {
      days: '8 Days',
      price: '$820',
      level: 'Advanced',
      image: yogaRetreat3,
      title: 'Advanced Vinyasa Flow Training',
      description: 'Master advanced Vinyasa flow techniques in this intensive 8-day training designed for experienced practitioners and aspiring teachers. Develop sophisticated sequencing skills, explore complex transitions, and learn advanced poses including challenging arm balances and deep backbends. The training covers anatomy, alignment principles, energetic sequencing, and creative flow development. Participants practice teaching with peer feedback, learn adjustment techniques, and explore the philosophical foundations of Vinyasa yoga. Daily sessions include personal practice development, group classes, and individual mentoring. This intensive training attracts serious practitioners ready to elevate their practice and potentially begin teaching. The program combines technical excellence with creative expression in Canggu\'s inspiring beachside environment.',
      highlights: [
        'Advanced Vinyasa sequencing techniques',
        'Complex transitions and arm balances',
        'Anatomy and alignment principles',
        'Teaching practice with feedback',
        'Adjustment techniques training',
        'Personal practice development'
      ],
      includes: ['Training accommodation', 'Educational meals', 'Training materials', 'Teaching certification', 'Personal mentoring']
    },
    {
      days: '9 Days',
      price: '$920',
      level: 'Advanced',
      image: yogaRetreat2,
      title: 'Entrepreneurial Yogi Business Retreat',
      description: 'Combine advanced yoga practice with entrepreneurial skill development in this unique 9-day retreat for yogis building wellness businesses. Learn to create sustainable income streams through yoga teaching, retreat leading, online course creation, and wellness coaching. The program includes advanced practice sessions, business development workshops, marketing strategy sessions, and financial planning guidance. Participants develop their unique brand, create professional content, and build networks with other wellness entrepreneurs. Daily activities balance intensive yoga practice with practical business skills, social media training, and legal considerations for wellness professionals. This retreat attracts ambitious yogis ready to turn their passion into a thriving business while maintaining authentic practice.',
      highlights: [
        'Business development workshops',
        'Marketing and branding strategy',
        'Online course creation training',
        'Financial planning guidance',
        'Professional content development',
        'Wellness entrepreneur networking'
      ],
      includes: ['Business accommodation', 'Networking meals', 'Business materials', 'Marketing tools', 'Professional guidance']
    },
    {
      days: '10 Days',
      price: '$1020',
      level: 'All Levels',
      image: yogaRetreat3,
      title: 'Complete Lifestyle Transformation',
      description: 'Undergo a complete lifestyle transformation through this comprehensive 10-day retreat that addresses all aspects of wellbeing. The program combines yoga practice with nutrition education, fitness training, mental health support, and life coaching. Participants work with specialists in various fields to create personalized wellness plans, develop healthy habits, and overcome limiting beliefs. Daily activities include diverse exercise modalities, cooking classes, goal-setting workshops, and one-on-one coaching sessions. The retreat includes detox protocols, stress management techniques, and sustainable lifestyle design. This transformative experience attracts individuals ready for significant life changes, providing tools and support for lasting transformation. The program creates lasting change through holistic approach to mind, body, and lifestyle optimization.',
      highlights: [
        'Comprehensive wellness planning',
        'Nutrition and fitness education',
        'Mental health and life coaching',
        'Detox and stress management',
        'Goal-setting and habit formation',
        'Personalized transformation plans'
      ],
      includes: ['Transformation accommodation', 'Specialized meals', 'Coaching sessions', 'Wellness assessments', 'Lifestyle planning']
    },
    {
      days: '11 Days',
      price: '$1120',
      level: 'Advanced',
      image: yogaRetreat2,
      title: 'Ultimate Wellness Leadership Program',
      description: 'Develop into a wellness leader through this comprehensive 11-day program combining advanced yoga practice with leadership development and community building skills. Learn to create transformative experiences for others, develop retreat planning abilities, and build authentic wellness communities. The program includes advanced teaching techniques, group facilitation skills, conflict resolution training, and spiritual mentorship development. Participants practice leading groups, organizing events, and creating inclusive environments for diverse populations. Daily activities balance intensive personal practice with leadership challenges, community service projects, and mentorship opportunities. This ultimate program attracts experienced practitioners ready to serve others and create positive change in the wellness industry through authentic leadership and service.',
      highlights: [
        'Wellness leadership development',
        'Retreat planning and facilitation',
        'Community building skills',
        'Group leadership practice',
        'Conflict resolution training',
        'Spiritual mentorship development'
      ],
      includes: ['Leader accommodation', 'Community meals', 'Leadership materials', 'Mentorship opportunities', 'Service projects']
    }
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

        {/* All Retreat Cards - Uniform Design */}
        <div className="grid md:grid-cols-3 gap-6">
          {allRetreats.map((retreat, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="relative">
                <img 
                  src={retreat.image} 
                  alt={`${retreat.title} in Canggu Bali`}
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
                            <Palmtree className="w-3 h-3 text-yoga-rose mt-0.5 mr-2 flex-shrink-0" />
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

export default CangguRetreats;
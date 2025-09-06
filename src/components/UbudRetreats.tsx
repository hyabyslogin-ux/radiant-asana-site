import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Heart } from 'lucide-react';

const UbudRetreats = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const allRetreats = [
    {
      days: '3 Days',
      price: '$350',
      level: 'Beginner',
      image: '/lovable-uploads/8a948cb6-13f9-44c9-8fef-bce571ae9145.png',
      title: '3 Days Yoga Retreat in Bali',
      description: 'Immerse yourself in the sacred energy of Ubud with this transformative 3-day retreat designed for beginners and those seeking spiritual renewal. Experience the perfect blend of traditional yoga practices and Balinese healing wisdom. Daily sunrise yoga sessions overlooking emerald rice terraces, traditional blessing ceremonies, and guided meditation in ancient temples. This introductory retreat includes organic vegetarian meals, spa treatments with local herbs, and cultural village walks. Perfect for first-time visitors to discover Ubud\'s mystical atmosphere and begin their yoga journey in Bali\'s spiritual heartland.',
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
      image: '/lovable-uploads/9e3fcc3b-076b-4912-b3b1-67a84baae207.png',
      title: '4 Days Yoga Retreat in Bali',
      description: 'Deepen your practice with this 4-day retreat featuring daily yoga classes combined with transformative sound healing using traditional Tibetan singing bowls and Balinese gamelan instruments. Experience the healing vibrations that have been used for centuries to promote deep relaxation and spiritual awakening. Morning and evening yoga sessions complement pranayama breathing workshops and waterfall meditation excursions. Includes authentic Balinese cooking classes, sacred water temple visits, and jungle trekking experiences. This retreat perfectly balances physical practice with sound therapy, creating a comprehensive wellness experience that nurtures both body and soul.',
      highlights: [
        'Morning and evening yoga sessions',
        'Daily sound healing with singing bowls',
        'Pranayama and meditation workshops',
        'Waterfall meditation excursion',
        'Balinese cooking class',
        'Sacred water temple visit'
      ],
      includes: ['Boutique accommodation', 'All organic meals', 'Sound healing sessions', 'Cultural experiences', 'Transportation']
    },
    {
      days: '5 Days',
      price: '$550',
      level: 'Intermediate',
      image: '/lovable-uploads/3b45fe7e-1832-4fee-92d1-320376e40af5.png',
      title: '5 Days Yoga Retreat in Bali',
      description: 'Dive deeper into traditional Hatha yoga with this comprehensive 5-day intensive designed for intermediate practitioners. Focus on proper alignment, breathing techniques, and the philosophical foundations of yoga. Daily sessions include asana practice, pranayama, meditation, and yoga philosophy discussions. Experience authentic Balinese healing massages, participate in traditional ceremonies, and explore Ubud\'s sacred sites. This retreat emphasizes the classical approach to yoga, helping practitioners develop a strong foundation for their lifelong practice. Includes visits to traditional healers, organic farming experiences, and opportunities to connect with local yoga masters who carry forward ancient wisdom.',
      highlights: [
        'Traditional Hatha yoga intensive sessions',
        'Yoga philosophy and meditation classes',
        'Authentic Balinese healing massages',
        'Visits to traditional healers',
        'Organic farming experiences',
        'Sacred site explorations'
      ],
      includes: ['Traditional accommodation', 'Vegetarian meals', 'Healing treatments', 'Cultural immersion', 'Philosophy classes']
    },
    {
      days: '6 Days',
      price: '$650',
      level: 'Intermediate',
      image: '/lovable-uploads/8a948cb6-13f9-44c9-8fef-bce571ae9145.png',
      title: '6 Days Yoga Retreat in Bali',
      description: 'Embark on a transformative 6-day journey focusing on chakra balancing and energy healing practices. Learn to identify and clear energy blockages while strengthening your subtle body awareness. Daily chakra-focused yoga sequences are combined with crystal healing sessions, energy meditation practices, and traditional Balinese energy clearing ceremonies. Experience the power of mantras, mudras, and visualization techniques. This retreat includes specialized workshops on aura reading, Reiki healing sessions, and sacred geometry meditation. Perfect for those seeking to deepen their understanding of energy work and develop intuitive healing abilities while surrounded by Ubud\'s naturally high-vibrational environment.',
      highlights: [
        'Chakra-focused yoga sequences',
        'Crystal healing and energy work',
        'Traditional energy clearing ceremonies',
        'Mantra and mudra workshops',
        'Reiki healing sessions',
        'Sacred geometry meditation'
      ],
      includes: ['Energy healing accommodation', 'Chakra-aligned meals', 'Crystal therapy', 'Energy workshops', 'Healing ceremonies']
    },
    {
      days: '7 Days',
      price: '$750',
      level: 'All Levels',
      image: '/lovable-uploads/9e3fcc3b-076b-4912-b3b1-67a84baae207.png',
      title: '7 Days Yoga Retreat in Bali',
      description: 'Experience a comprehensive 7-day wellness transformation that addresses body, mind, and spirit. This all-levels retreat combines various yoga styles, meditation practices, detox programs, and holistic healing modalities. Daily schedules include dynamic Vinyasa flows, restorative Yin yoga, guided meditation, breathwork sessions, and nutritional workshops. Participate in traditional Balinese purification ceremonies, herbal medicine consultations, and personalized wellness assessments. The program includes jungle hiking, rice field meditation walks, and visits to sacred springs. This transformative week helps reset your entire system while providing tools and practices for maintaining wellness long after your return home.',
      highlights: [
        'Multiple yoga styles and meditation practices',
        'Detox programs and nutritional guidance',
        'Traditional purification ceremonies',
        'Herbal medicine consultations',
        'Jungle hiking and nature immersion',
        'Sacred spring visits'
      ],
      includes: ['Wellness resort accommodation', 'Detox meals & juices', 'Holistic treatments', 'Nature excursions', 'Wellness consultations']
    },
    {
      days: '8 Days',
      price: '$850',
      level: 'Advanced',
      image: '/lovable-uploads/3b45fe7e-1832-4fee-92d1-320376e40af5.png',
      title: '8 Days Yoga Retreat in Bali',
      description: 'Designed for experienced practitioners, this 8-day retreat focuses on advanced breathing techniques and deep meditation practices. Master complex pranayama sequences, explore esoteric yoga teachings, and develop sustained meditation abilities. Daily practices include advanced asana sequences, intensive breathwork sessions, silent meditation periods, and yogic philosophy studies. Experience advanced purification techniques, energy cultivation practices, and consciousness expansion methods. This retreat provides rare access to traditional Balinese spiritual teachers and includes participation in advanced ceremonial practices. Participants will receive initiation into deeper spiritual practices and personalized guidance for their continued advancement on the yogic path.',
      highlights: [
        'Advanced pranayama techniques',
        'Intensive meditation and silence periods',
        'Esoteric yoga teachings',
        'Traditional spiritual teacher guidance',
        'Advanced purification techniques',
        'Consciousness expansion practices'
      ],
      includes: ['Advanced practitioner accommodation', 'Sattvic meals', 'Private teachings', 'Advanced ceremonies', 'Spiritual mentorship']
    },
    {
      days: '9 Days',
      price: '$950',
      level: 'Advanced',
      image: '/lovable-uploads/9e3fcc3b-076b-4912-b3b1-67a84baae207.png',
      title: '9 Days Yoga Retreat in Bali',
      description: 'An intensive 9-day program for yoga teachers and serious practitioners seeking to deepen their teaching skills and personal practice. This advanced retreat covers anatomy, alignment principles, sequencing methodology, and teaching techniques. Includes practical teaching sessions, philosophy studies, Sanskrit learning, and business aspects of yoga instruction. Experience traditional Balinese teaching methods, learn to integrate cultural wisdom into modern yoga practice, and develop your unique teaching voice. The program features guest teachers, peer teaching opportunities, and personalized feedback sessions. Participants receive certification credits and comprehensive teaching materials. This retreat transforms dedicated practitioners into confident, knowledgeable teachers ready to share yoga\'s transformative power.',
      highlights: [
        'Teaching methodology and alignment training',
        'Philosophy studies and Sanskrit learning',
        'Traditional Balinese teaching methods',
        'Practical teaching sessions with feedback',
        'Business aspects of yoga instruction',
        'Certification credits and materials'
      ],
      includes: ['Teacher accommodation', 'Educational meals', 'Teaching materials', 'Certification credits', 'Business guidance']
    },
    {
      days: '10 Days',
      price: '$1050',
      level: 'All Levels',
      image: '/lovable-uploads/3b45fe7e-1832-4fee-92d1-320376e40af5.png',
      title: '10 Days Yoga Retreat in Bali',
      description: 'Embark on a profound 10-day spiritual pilgrimage combining yoga practice with visits to Bali\'s most sacred temples and power spots. This transformative journey includes daily yoga sessions at different sacred locations, temple ceremonies, holy water blessings, and meetings with traditional spiritual teachers. Experience the island\'s spiritual geography through guided pilgrimages to ancient temples, sacred mountains, and holy springs. The retreat incorporates various meditation techniques, chanting practices, and traditional offerings ceremonies. Participants receive teachings on Balinese Hindu philosophy, sacred geometry, and the spiritual significance of temple architecture. This once-in-a-lifetime experience creates deep spiritual connections and lasting transformation through the power of sacred spaces.',
      highlights: [
        'Sacred temple visits and ceremonies',
        'Yoga practice at power spots',
        'Holy water blessings and rituals',
        'Traditional spiritual teacher meetings',
        'Sacred mountain and spring pilgrimages',
        'Balinese Hindu philosophy teachings'
      ],
      includes: ['Pilgrimage accommodation', 'Ceremonial meals', 'Temple offerings', 'Spiritual guidance', 'Sacred site access']
    },
    {
      days: '11 Days',
      price: '$1150',
      level: 'Advanced',
      image: '/lovable-uploads/8a948cb6-13f9-44c9-8fef-bce571ae9145.png',
      title: '11 Days Yoga Retreat in Bali',
      description: 'The ultimate 11-day retreat for dedicated practitioners seeking mastery in all aspects of yoga. This comprehensive program covers advanced asana practice, complex pranayama techniques, meditation mastery, philosophical study, and energy work. Experience intensive daily practice sessions, one-on-one mentoring, advanced healing modalities, and traditional initiations. The retreat includes specialized workshops on yoga therapy, subtle energy work, consciousness studies, and spiritual counseling. Participants engage with master teachers, participate in advanced ceremonies, and receive personalized spiritual guidance. This transformative experience culminates in a graduation ceremony and ongoing mentorship opportunities. Perfect for those ready to embark on the path of yoga mastery and spiritual leadership.',
      highlights: [
        'Advanced asana and pranayama mastery',
        'One-on-one mentoring with masters',
        'Yoga therapy and healing training',
        'Consciousness studies and counseling',
        'Traditional initiations and ceremonies',
        'Ongoing mentorship opportunities'
      ],
      includes: ['Master-level accommodation', 'Gourmet sattvic cuisine', 'Personal mentoring', 'Advanced certifications', 'Lifetime guidance']
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

        {/* Yoga Practice Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Experience Authentic Yoga Practices</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the transformative power of traditional yoga, meditation, and healing practices in the sacred heart of Bali
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-2xl group shadow-soft hover:shadow-glow transition-all duration-500">
              <img 
                src="/lovable-uploads/e3d6b5ea-63cc-4290-adb0-6ba33a38acfd.png" 
                alt="Traditional wood therapy healing treatment"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold text-lg mb-1">Traditional Healing</h4>
                <p className="text-white/80 text-sm">Wood therapy and authentic Balinese treatments</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group shadow-soft hover:shadow-glow transition-all duration-500">
              <img 
                src="/lovable-uploads/f6403da2-1660-453f-b374-e5c60721d662.png" 
                alt="Sound healing with Tibetan singing bowls"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold text-lg mb-1">Sound Healing</h4>
                <p className="text-white/80 text-sm">Tibetan singing bowls and vibrational therapy</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group shadow-soft hover:shadow-glow transition-all duration-500">
              <img 
                src="/lovable-uploads/eee86151-0a9a-4f24-951f-a0c980b2955c.png" 
                alt="Yoga philosophy and theory classes"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold text-lg mb-1">Yoga Philosophy</h4>
                <p className="text-white/80 text-sm">Deep theoretical understanding and wisdom</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-2xl group shadow-soft hover:shadow-glow transition-all duration-500">
              <img 
                src="/lovable-uploads/3a5a6a3a-f2c8-45ad-9db2-c6e920fd1a07.png" 
                alt="Pranayama breathing practices"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold text-lg mb-1">Pranayama</h4>
                <p className="text-white/80 text-sm">Bridge between body and soul through breath</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group shadow-soft hover:shadow-glow transition-all duration-500">
              <img 
                src="/lovable-uploads/e117aae2-f01b-48ce-acfc-48827f392a58.png" 
                alt="Group yoga practice fostering independence"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold text-lg mb-1">True Independence</h4>
                <p className="text-white/80 text-sm">Freeing the mind from its own chains</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group shadow-soft hover:shadow-glow transition-all duration-500">
              <img 
                src="/lovable-uploads/d4236abb-6f90-4ce4-b1ad-562a9b295817.png" 
                alt="Meditation class with multiple students"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold text-lg mb-1">Group Meditation</h4>
                <p className="text-white/80 text-sm">Collective consciousness and shared peace</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-card rounded-2xl border border-yoga-rose/20 shadow-soft">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yoga-peach flex items-center justify-center">
                <Heart className="w-8 h-8 text-yoga-mauve" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Activates Parasympathetic Response</h4>
              <p className="text-sm text-muted-foreground">Deep relaxation and healing through restorative practices</p>
            </div>

            <div className="text-center p-6 bg-gradient-card rounded-2xl border border-yoga-rose/20 shadow-soft">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yoga-peach flex items-center justify-center">
                <Users className="w-8 h-8 text-yoga-mauve" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Restores Physical & Mental Vitality</h4>
              <p className="text-sm text-muted-foreground">Rejuvenate your entire being through holistic practices</p>
            </div>

            <div className="text-center p-6 bg-gradient-card rounded-2xl border border-yoga-rose/20 shadow-soft">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yoga-peach flex items-center justify-center">
                <Calendar className="w-8 h-8 text-yoga-mauve" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Improves Concentration</h4>
              <p className="text-sm text-muted-foreground">Quieting the mind for enhanced focus and clarity</p>
            </div>
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
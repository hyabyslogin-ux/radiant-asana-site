import { Users, Award, Globe, Heart, MapPin, Target, Leaf, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import groupHeroBg from '@/assets/group-hero-bg.jpg';
import yogiHimanshu from '@/assets/yogi-himanshu.jpg';

const AboutUs = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "10K+", label: "Happy Students", icon: Users },
    { number: "50+", label: "Countries Reached", icon: Globe },
    { number: "3", label: "Sacred Locations", icon: MapPin }
  ];

  const values = [
    {
      title: "Authentic Balinese Wisdom",
      description: "We integrate ancient Balinese spiritual practices with modern wellness techniques.",
      icon: Heart
    },
    {
      title: "Holistic Transformation",
      description: "Our approach addresses mind, body, and spirit for complete personal growth.",
      icon: Target
    },
    {
      title: "Sustainable Practice",
      description: "We're committed to environmental sustainability and supporting local communities.",
      icon: Leaf
    },
    {
      title: "Personalized Journey",
      description: "Each retreat is tailored to your individual needs and spiritual goals.",
      icon: BookOpen
    }
  ];


  const locations = [
    {
      name: "Ubud",
      description: "Spiritual heart of Bali surrounded by lush rice terraces and ancient temples. Experience authentic Balinese culture and deep spiritual connection.",
      highlights: ["Sacred temples", "Rice terrace views", "Traditional healing", "Cultural immersion"],
      atmosphere: "Sacred & Traditional"
    },
    {
      name: "Uluwatu", 
      description: "Dramatic clifftop location with breathtaking ocean views. Perfect for those seeking transformation through nature's raw power.",
      highlights: ["Clifftop meditation", "Ocean energy", "Sunset ceremonies", "Surf culture"],
      atmosphere: "Powerful & Transformative"
    },
    {
      name: "Canggu",
      description: "Vibrant beach community blending modern amenities with Balinese charm. Ideal for those wanting beach vibes with spiritual growth.",
      highlights: ["Beach yoga", "Vibrant community", "Modern facilities", "Surf & wellness"],
      atmosphere: "Modern & Energetic"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO pageKey="about-us" />
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${groupHeroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Bali Yoga Retreats
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transforming Lives Through Authentic Balinese Wisdom & Modern Wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/founder">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
                >
                  Our Founder
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-yoga-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Founder Section */}
      <section id="story" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Founder</h2>
            <p className="text-xl text-muted-foreground">
              The journey of transformation from athlete to spiritual guide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                The story of Bali Yoga Retreats started in 2017 in the birthplace of yoga - Rishikesh, India - by Yogi Himanshu with a simple yet profound mission: to share the authentic spiritual wisdom of Yoga with seekers from around the world. Yogi Himanshu visited Bali with no planning as a holiday, and the powerful energy of Ubud grabbed his heart to create the second yoga school on his own in this beautiful island. What started as the first yoga teacher training school in Ubud has grown into a community that transform many lives through various yoga / healing retreats and courses.
              </p>
              <p className="text-lg leading-relaxed">
                Our founder, Yogi Himanshu was born in the world capital of yoga Rishikesh. He began his journey early as a multi-talented athlete, representing his state and nation in various sports disciplines. During his time in rigorous military-style training, Himanshu suffered an internal injury—one that no medical treatment could cure. What seemed like a physical setback eventually became the gateway to a profound spiritual awakening. Turning to meditation as his last hope, he devoted himself fully to the practice for over a year. That suffering has brought the light to his life, the story of Bali Yoga Retreat has begun.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to honor this vision by offering retreats that blend traditional Balinese spiritual practices with yoga, creating a unique experience that nurtures both personal growth and cultural understanding.
              </p>
              <div className="pt-4">
                <Link to="/founder">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-3">
                    About Yogi Himanshu
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-3xl overflow-hidden">
                <img 
                  src={yogiHimanshu} 
                  alt="Yogi Himanshu - Founder of Bali Yoga Retreats" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-yoga-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-xl text-muted-foreground">
              Rooted in the authentic yoga teaching from Rishikesh, India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/3a5a6a3a-f2c8-45ad-9db2-c6e920fd1a07.png" 
                    alt="Holistic Retreat Experiences" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Holistic Retreat Experiences</h3>
                <p className="text-muted-foreground">
                  Our yoga retreats are designed to provide yoga and wellness experiences holistically from many directions. We are not limited to provided yoga sessions, but a whole experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/82f12a81-9889-4829-a670-f5c77558bc74.png" 
                    alt="Yoga As It Is" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Yoga As It Is</h3>
                <p className="text-muted-foreground">
                  Unlike many other retreats, we provide yoga in its purest form thorough traditional practices. Unaffected by constantly changing trends, we always provide what is real.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/b91ee822-4e33-4513-a5ec-abce556ce83a.png" 
                    alt="Practice, Not Performance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Practice, Not Performance</h3>
                <p className="text-muted-foreground">
                  We protect the purity of yoga through our existence. Our yoga retreats in Bali are for practice, not for performance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed">
              These core principles guide everything we do, from our teaching methods to our retreat experiences. We believe that authentic yoga practice creates lasting transformation in all aspects of life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Memories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Memories</h2>
            <p className="text-xl text-muted-foreground">
              We have been creating a space for each individual's transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/3a5a6a3a-f2c8-45ad-9db2-c6e920fd1a07.png" 
                alt="Yoga retreat memory 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/82f12a81-9889-4829-a670-f5c77558bc74.png" 
                alt="Yoga retreat memory 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/b91ee822-4e33-4513-a5ec-abce556ce83a.png" 
                alt="Yoga retreat memory 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3">
              View More
            </Button>
          </div>
        </div>
      </section>


      {/* Our Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Sacred Locations</h2>
            <p className="text-xl text-muted-foreground">
              Three unique destinations, each offering its own spiritual energy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-primary">
                  <img 
                    src={`/lovable-uploads/${index === 0 ? '3a5a6a3a-f2c8-45ad-9db2-c6e920fd1a07.png' : 
                          index === 1 ? '82f12a81-9889-4829-a670-f5c77558bc74.png' : 
                          'b91ee822-4e33-4513-a5ec-abce556ce83a.png'}`}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{location.name}</h3>
                  <Badge className="mb-3">{location.atmosphere}</Badge>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{location.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {location.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Star className="w-3 h-3 text-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Memories Section */}

      <Footer />
    </div>
  );
};

export default AboutUs;
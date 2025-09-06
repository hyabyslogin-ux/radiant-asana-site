import { Users, Award, Globe, Heart, MapPin, Target, Leaf, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "5000+", label: "Happy Students", icon: Users },
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
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Bali Yoga Retreats
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transforming Lives Through Authentic Balinese Wisdom & Modern Wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/3-days-retreat">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg">
                  Start Your Journey
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Story
              </Button>
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

      {/* Our Story Section */}
      <section id="story" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              Born from a deep love for Balinese culture and ancient wisdom
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Bali Yoga Retreats was founded in 2014 with a simple yet profound mission: to share the authentic spiritual wisdom of Bali with seekers from around the world. What started as a small gathering in Ubud has grown into a transformative experience that has touched thousands of lives.
              </p>
              <p className="text-lg leading-relaxed">
                Our founder, Kadek Sari, grew up in a traditional Balinese family where yoga and meditation were not just practices but a way of life. After studying with masters in India and experiencing the transformative power of these ancient teachings, she felt called to create a space where authentic Balinese wisdom could be shared with the modern world.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to honor this vision by offering retreats that blend traditional Balinese spiritual practices with contemporary wellness approaches, creating a unique experience that nurtures both personal growth and cultural understanding.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-3xl overflow-hidden">
                <img 
                  src="/lovable-uploads/31da4317-88ad-4519-8397-4428779fefc4.png" 
                  alt="Balinese temple ceremony" 
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
              Rooted in the sacred Balinese principle of Tri Hita Karana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Parahyangan</h3>
                <p className="text-muted-foreground">
                  Harmonious relationship with the divine through meditation, prayer, and spiritual practice
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pawongan</h3>
                <p className="text-muted-foreground">
                  Balanced relationships with fellow humans through community, compassion, and understanding
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Palemahan</h3>
                <p className="text-muted-foreground">
                  Respectful relationship with nature through sustainable practices and environmental consciousness
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed">
              This ancient Balinese philosophy guides everything we do, from our teaching methods to our environmental practices. We believe that true wellness comes from achieving balance in all three aspects of life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our practice and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      {/* Our Approach Section */}
      <section className="py-20 bg-yoga-light">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A unique blend of traditional wisdom and modern wellness practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Holistic Transformation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in addressing the whole person - mind, body, and spirit. Our retreats integrate physical asana practice with meditation, breathwork, and spiritual teachings to create lasting transformation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Personalized Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every participant receives individual attention and guidance. We tailor practices to your experience level and personal goals, ensuring you feel supported throughout your journey.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Cultural Immersion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience authentic Balinese culture through temple visits, traditional ceremonies, and interactions with local communities. This cultural depth adds meaning to your practice.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="p-4 text-center">
                    <CardContent className="pt-4">
                      <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Traditional Teachings</h4>
                    </CardContent>
                  </Card>
                  <Card className="p-4 text-center">
                    <CardContent className="pt-4">
                      <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Healing Practices</h4>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="p-4 text-center">
                    <CardContent className="pt-4">
                      <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Personal Growth</h4>
                    </CardContent>
                  </Card>
                  <Card className="p-4 text-center">
                    <CardContent className="pt-4">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Community Building</h4>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Community Impact</h2>
              <p className="text-xl text-muted-foreground">
                Giving back to the communities that welcome us
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="pt-6">
                  <Leaf className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Environmental Sustainability</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Zero-waste retreat practices</li>
                    <li>• Local organic food sourcing</li>
                    <li>• Plastic-free initiatives</li>
                    <li>• Reforestation projects</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Local Community Support</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Employment for local families</li>
                    <li>• Supporting local artisans</li>
                    <li>• Educational scholarships</li>
                    <li>• Healthcare initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                We believe that responsible tourism creates positive change. A portion of every retreat goes directly to supporting local communities and environmental conservation efforts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/3-days-retreat">
                  <Button className="bg-gradient-primary text-white px-8 py-3">
                    Join Our Mission
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
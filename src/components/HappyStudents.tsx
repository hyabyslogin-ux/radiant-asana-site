import { Card } from '@/components/ui/card';
import { Star, Quote, Heart } from 'lucide-react';

const HappyStudents = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Australia",
      image: "/lovable-uploads/3a5a6a3a-f2c8-45ad-9db2-c6e920fd1a07.png",
      rating: 5,
      text: "The retreat in Ubud was absolutely life-changing! The instructors were incredibly knowledgeable and caring. I left feeling rejuvenated and connected to my inner self. The beautiful setting made every practice session magical.",
      program: "7-Day Ubud Retreat"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      image: "/lovable-uploads/45b5e644-5e4c-49e2-8d00-745b07651022.png",
      rating: 5,
      text: "I've never experienced such a perfect blend of adventure and spirituality. The surf lessons combined with yoga practice in Uluwatu created the most balanced vacation I've ever had. Highly recommend!",
      program: "5-Day Uluwatu Adventure"
    },
    {
      name: "Emma Rodriguez",
      location: "Spain", 
      image: "/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png",
      rating: 5,
      text: "Canggu's vibrant energy was exactly what I needed. The community feeling, the beach yoga sessions, and the healthy lifestyle workshops gave me tools I still use daily. Thank you for this amazing experience!",
      program: "6-Day Canggu Experience"
    },
    {
      name: "David Kumar",
      location: "India",
      image: "/lovable-uploads/8a948cb6-13f9-44c9-8fef-bce571ae9145.png",
      rating: 5,
      text: "Coming from India, I thought I knew yoga well, but this retreat opened my eyes to new dimensions of practice. The fusion of traditional techniques with modern approaches was enlightening.",
      program: "10-Day Transformation"
    },
    {
      name: "Lisa Thompson", 
      location: "Canada",
      image: "/lovable-uploads/9e3fcc3b-076b-4912-b3b1-67a84baae207.png",
      rating: 5,
      text: "The instructors created such a safe and nurturing environment. I overcame my fear of inversions and found confidence both on and off the mat. This retreat gave me so much more than I expected.",
      program: "8-Day Advanced Training"
    },
    {
      name: "James Wilson",
      location: "UK",
      image: "/lovable-uploads/b36093bd-c1e4-40a7-8601-24e53d082b0c.png",
      rating: 5,
      text: "The digital detox aspect was exactly what my soul needed. Disconnecting from technology and reconnecting with nature and myself was transformative. I returned home with clarity and peace.",
      program: "7-Day Digital Detox"
    }
  ];

  return (
    <section id="happy-students" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-yoga-rose animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Happy Students
            </h2>
            <Heart className="w-8 h-8 text-yoga-rose animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover what makes our students fall in love with yoga and keep coming back. 
            Their transformative journeys inspire us every day to create magical experiences that touch hearts and change lives.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yoga-mauve mb-2">500+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yoga-rose mb-2">50+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yoga-plum mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yoga-peach mb-2">5⭐</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-yoga-mauve" />
              </div>
              
              {/* Student Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - Happy student`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yoga-rose/30"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yoga-mauve text-yoga-mauve" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Program */}
              <div className="inline-block bg-yoga-peach/50 text-yoga-plum text-xs px-3 py-1 rounded-full mb-4 font-medium">
                {testimonial.program}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-border rounded-2xl p-1 max-w-2xl mx-auto">
            <div className="bg-yoga-cream rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Join Our Happy Community
              </h3>
              <p className="text-muted-foreground mb-6">
                Start your own transformative journey and become part of our global yoga family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-yoga-mauve text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Book Your Retreat
                </button>
                <button className="border border-yoga-rose text-yoga-plum hover:bg-yoga-rose hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Read More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyStudents;
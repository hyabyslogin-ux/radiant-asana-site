import { Card } from '@/components/ui/card';
import { Star, Quote, Heart } from 'lucide-react';
import testimonialSarah from '@/assets/testimonial-sarah.jpg';
import testimonialMichael from '@/assets/testimonial-michael.jpg';
import testimonialEmma from '@/assets/testimonial-emma.jpg';
import testimonialDavid from '@/assets/testimonial-david.jpg';
import testimonialLisa from '@/assets/testimonial-lisa.jpg';
import testimonialJames from '@/assets/testimonial-james.jpg';

const HappyStudents = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Australia",
      image: testimonialSarah,
      rating: 5,
      text: "The 3-day retreat in Ubud was perfect for my first yoga experience! In just three days, I learned foundational poses, discovered inner peace through meditation, and felt completely rejuvenated. The sacred valley setting made every moment magical.",
      program: "3-Day Ubud Sacred Valley Retreat"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      image: testimonialMichael,
      rating: 5,
      text: "The 5-day Uluwatu retreat exceeded all expectations! The cliff-top yoga sessions at sunrise, combined with surf lessons and meditation, created the perfect balance. I left feeling stronger both physically and mentally.",
      program: "5-Day Uluwatu Clifftop Retreat"
    },
    {
      name: "Emma Rodriguez",
      location: "Spain", 
      image: testimonialEmma,
      rating: 5,
      text: "Seven days in Ubud transformed my entire approach to wellness. The daily yoga practice, temple visits, and healing ceremonies in the sacred valley created a profound spiritual awakening I'll treasure forever.",
      program: "7-Day Ubud Spiritual Journey"
    },
    {
      name: "David Kumar",
      location: "India",
      image: testimonialDavid,
      rating: 5,
      text: "The 4-day Canggu retreat was exactly what I needed! The beach yoga sessions, surf culture immersion, and creative workshops gave me new perspectives on traditional practice. Short but incredibly impactful.",
      program: "4-Day Canggu Beach Experience"
    },
    {
      name: "Lisa Thompson", 
      location: "Canada",
      image: testimonialLisa,
      rating: 5,
      text: "Six days in Uluwatu's dramatic clifftop setting was life-changing. The combination of advanced yoga practice, ocean meditation, and Balinese healing traditions helped me overcome years of stress and anxiety.",
      program: "6-Day Uluwatu Advanced Retreat"
    },
    {
      name: "James Wilson",
      location: "UK",
      image: testimonialJames,
      rating: 5,
      text: "The 8-day Ubud deep immersion retreat was transformational beyond words. From sunrise yoga in rice terraces to evening meditation in ancient temples, every moment was perfectly crafted for spiritual growth.",
      program: "8-Day Ubud Deep Immersion"
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
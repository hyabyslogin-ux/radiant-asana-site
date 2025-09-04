import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Clock, Heart } from 'lucide-react';
import instructorImage from '@/assets/instructor.jpg';

const Instructor = () => {
  const certifications = [
    "500-Hour Registered Yoga Teacher (RYT-500)",
    "Meditation & Mindfulness Certified",
    "Prenatal Yoga Specialist",
    "Trauma-Informed Yoga Training"
  ];

  const achievements = [
    { icon: <Clock className="w-6 h-6" />, text: "8+ Years Teaching", color: "text-yoga-mauve" },
    { icon: <Heart className="w-6 h-6" />, text: "500+ Students Guided", color: "text-yoga-rose" },
    { icon: <Award className="w-6 h-6" />, text: "Multiple Certifications", color: "text-yoga-mauve" }
  ];

  return (
    <section id="instructor" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Your Instructor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from an experienced teacher dedicated to guiding you on your yoga journey 
            with wisdom, compassion, and authenticity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-border rounded-3xl p-1">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={instructorImage} 
                  alt="Sarah Chen - Yoga Instructor" 
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-soft border border-yoga-rose/20">
              <div className="text-2xl font-bold text-yoga-mauve">500+</div>
              <div className="text-xs text-muted-foreground">Happy Students</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-soft border border-yoga-rose/20">
              <div className="text-2xl font-bold text-yoga-mauve">8+</div>
              <div className="text-xs text-muted-foreground">Years Teaching</div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Sarah Chen</h3>
            <p className="text-lg text-yoga-mauve mb-6 font-medium">
              Certified Yoga Teacher & Wellness Guide
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Sarah discovered yoga during a challenging period in her corporate career and 
                experienced firsthand its transformative power. This personal journey led her 
                to pursue extensive training and dedicate her life to sharing yoga's gifts.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With over 8 years of teaching experience, Sarah creates a safe, inclusive space 
                where students feel supported to explore their practice. Her teaching style 
                blends traditional wisdom with modern accessibility, making yoga approachable 
                for everyone.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className={`${achievement.color} mb-2 flex justify-center`}>
                    {achievement.icon}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {achievement.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <Card className="p-6 bg-gradient-card border border-yoga-rose/20 mb-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Certifications & Training</h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yoga-rose rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-yoga-mauve transition-colors">
                Book a Session
              </Button>
              <Button variant="outline" className="border-yoga-rose hover:bg-yoga-rose hover:text-background">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
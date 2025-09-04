import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Zap } from 'lucide-react';
import classImage from '@/assets/yoga-class.jpg';

const Classes = () => {
  const classes = [
    {
      name: "Beginner Hatha",
      duration: "60 min",
      level: "Beginner",
      participants: "8-12",
      description: "Gentle introduction to yoga with basic postures and breathing techniques.",
      schedule: ["Mon 9:00 AM", "Wed 6:00 PM", "Fri 9:00 AM"]
    },
    {
      name: "Vinyasa Flow",
      duration: "75 min",
      level: "Intermediate",
      participants: "6-10",
      description: "Dynamic flowing sequences that link breath with movement.",
      schedule: ["Tue 7:00 AM", "Thu 6:30 PM", "Sat 10:00 AM"]
    },
    {
      name: "Restorative Yoga",
      duration: "90 min",
      level: "All Levels",
      participants: "4-8",
      description: "Deep relaxation using props to support passive poses and meditation.",
      schedule: ["Wed 7:30 PM", "Sun 4:00 PM"]
    },
    {
      name: "Power Yoga",
      duration: "60 min",
      level: "Advanced",
      participants: "6-10",
      description: "Vigorous, fitness-based approach to vinyasa-style yoga.",
      schedule: ["Mon 6:30 PM", "Thu 7:00 AM", "Sat 8:00 AM"]
    }
  ];

  return (
    <section id="classes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Classes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of yoga classes designed to meet you wherever 
            you are in your practice journey.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 relative">
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <img 
              src={classImage} 
              alt="Yoga class in session" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yoga-plum/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Experience the Flow</h3>
                <p className="text-white/90">Join our welcoming community in beautiful, serene surroundings.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {classes.map((yogaClass, index) => (
            <Card key={index} className="p-6 bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-2">{yogaClass.name}</h3>
                <p className="text-muted-foreground mb-4">{yogaClass.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-yoga-mauve" />
                  <span className="text-sm text-muted-foreground">{yogaClass.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-yoga-mauve" />
                  <span className="text-sm text-muted-foreground">{yogaClass.level}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-yoga-mauve" />
                  <span className="text-sm text-muted-foreground">{yogaClass.participants} students</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-2">Schedule:</h4>
                <div className="space-y-1">
                  {yogaClass.schedule.map((time, i) => (
                    <div key={i} className="text-sm text-muted-foreground bg-yoga-peach-light px-3 py-1 rounded-full inline-block mr-2 mb-1">
                      {time}
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-yoga-mauve transition-colors">
                Book This Class
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Not sure which class is right for you? We're here to help!
          </p>
          <Button variant="outline" className="border-yoga-rose hover:bg-yoga-rose hover:text-background">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
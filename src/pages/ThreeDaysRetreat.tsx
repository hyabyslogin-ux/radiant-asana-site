import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, MapPin, Wifi, Waves, Utensils, Gift, Phone, Mail, User } from 'lucide-react';

const ThreeDaysRetreat = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const galleryImages = [
    '/lovable-uploads/yoga-retreat-1.jpg',
    '/lovable-uploads/yoga-retreat-2.jpg',
    '/lovable-uploads/yoga-retreat-3.jpg',
    '/lovable-uploads/2c8cc260-25f3-4ae5-a498-e425800e509d.png',
    '/lovable-uploads/3b45fe7e-1832-4fee-92d1-320376e40af5.png',
    '/lovable-uploads/45b5e644-5e4c-49e2-8d00-745b07651022.png'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-yoga-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">3 Days Yoga Retreat in Bali</h1>
            <p className="text-xl mb-8 opacity-90">Transform Your Mind, Body & Soul in Paradise</p>
            <Button size="lg" className="bg-white text-yoga-earth hover:bg-gray-100">
              Book Now - 15% Off
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Details Section */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth mb-4">Experience Deep Transformation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Embark on a transformative journey through our carefully crafted 3-day yoga retreat in the heart of Bali. This immersive experience combines traditional Hatha Vinyasa yoga practices with authentic Balinese healing traditions, creating the perfect environment for physical rejuvenation and spiritual awakening.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Located in Bali's serene countryside, our retreat center offers two beautiful campuses designed to harmonize with nature's rhythm. Each morning begins with pranayama breathing exercises and meditation sessions that ground you in mindfulness, followed by dynamic Hatha Vinyasa yoga classes that strengthen your body while calming your mind.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                The retreat experience extends beyond yoga mat practice. Sound healing sessions using traditional Tibetan singing bowls and crystal instruments create vibrational therapy that releases deep-seated tension and promotes cellular healing. Complementary Balinese massages incorporate ancient techniques passed down through generations, using natural oils and pressure points to restore energy flow.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Nourishment forms a cornerstone of your retreat journey. Our vegetarian and vegan meal offerings feature fresh, organic ingredients sourced from local Balinese farmers. Each dish combines nutritional balance with authentic Indonesian flavors, supporting your body's natural detoxification process while satisfying your palate.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Whether you're a beginner seeking introduction to yoga principles or an experienced practitioner deepening your practice, this retreat provides personalized attention in intimate group settings. The combination of structured activities and free time allows natural integration of learning, ensuring lasting transformation that continues long after you return home.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Daily Schedule */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth flex items-center gap-2">
                <Clock className="h-8 w-8" />
                Daily Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Day 1 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yoga-sage flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Day 1
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Check in</span>
                      <Badge variant="outline">12:00 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Lunch</span>
                      <Badge variant="outline">12:30 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Balinese Massage</span>
                      <Badge variant="outline">4:00 - 5:00 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Dinner</span>
                      <Badge variant="outline">7:00 pm</Badge>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yoga-sage flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Day 2
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Pranayama & Meditation</span>
                      <Badge variant="outline">7:00 - 8:00 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Hatha Vinyasa Yoga</span>
                      <Badge variant="outline">8:00 - 9:00 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Breakfast</span>
                      <Badge variant="outline">9:30 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Sound Healing</span>
                      <Badge variant="outline">11:00 am - 12:00 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Lunch</span>
                      <Badge variant="outline">12:30 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Balinese Massage</span>
                      <Badge variant="outline">4:00 - 5:00 pm</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Dinner</span>
                      <Badge variant="outline">7:00 pm</Badge>
                    </div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yoga-sage flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Day 3
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Pranayama & Meditation</span>
                      <Badge variant="outline">7:00 - 8:00 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Hatha Vinyasa Yoga</span>
                      <Badge variant="outline">8:00 - 9:00 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Breakfast</span>
                      <Badge variant="outline">9:30 am</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yoga-mist/20 rounded-lg">
                      <span className="font-medium">Check out</span>
                      <Badge variant="outline">12:00 pm</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Retreat Dates & Pricing */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth">Retreat Dates & Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Dates */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yoga-sage">Yoga Retreat Dates</h3>
                <div className="bg-yoga-mist/10 p-6 rounded-lg space-y-2">
                  <p className="font-medium">Retreat Dates – We offer Yoga Retreats throughout the year of 2025. Please contact us to check availabilities of your desired dates.</p>
                  <p><strong>Check In –</strong> On the Day 1st after 12:00 pm</p>
                  <p><strong>Check Out –</strong> On the last day before 12:00 pm</p>
                </div>
              </div>

              <Separator />

              {/* Pricing */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yoga-sage">Retreat Fees / Inclusions</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card className="border-2 border-yoga-sage/20">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-lg mb-2">Private Room Campus-I</h4>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-yoga-earth">$425 USD</p>
                        <p className="text-sm text-gray-500 line-through">$500 USD</p>
                        <Badge className="bg-yoga-sage text-white">15% off</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-yoga-sage/20">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-lg mb-2">Twin Shared Campus-I</h4>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-yoga-earth">$265 USD</p>
                        <p className="text-sm text-gray-500 line-through">$312.5 USD</p>
                        <Badge className="bg-yoga-sage text-white">15% off</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-yoga-sage/20">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-lg mb-2">Private Room Campus-II</h4>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-yoga-earth">$323 USD</p>
                        <p className="text-sm text-gray-500 line-through">$375 USD</p>
                        <Badge className="bg-yoga-sage text-white">15% off</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Inclusions */}
                <div className="bg-gradient-to-r from-yoga-mist/10 to-yoga-sage/5 p-6 rounded-lg">
                  <p className="font-semibold mb-3 text-yoga-earth">Retreat Duration - 3 Days & 2 Nights</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-yoga-sage" />
                        <span>Private Accommodation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="h-4 w-4 text-yoga-sage" />
                        <span>Nutritious vegan/vegetarian meals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-yoga-sage" />
                        <span>All mentioned Yoga Classes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-yoga-sage" />
                        <span>Complimentary High-Speed Wi-Fi</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Waves className="h-4 w-4 text-yoga-sage" />
                        <span>Swimming pool Access (10:00 AM - 8:00 PM)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-yoga-sage" />
                        <span>All necessary class items provided</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-yoga-sage" />
                        <span>2 Complimentary Balinese Massages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-yoga-sage" />
                        <span>Course Materials (Bag, T-shirt, Notebook, Pen, Mala)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Terms & Conditions */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth">Yoga Retreat Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Booking Process */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yoga-sage">Booking Process</h3>
                <div className="bg-yoga-mist/10 p-6 rounded-lg">
                  <p className="leading-relaxed">
                    In order to book for retreat kindly deposit the Advance booking amount of <strong>150 USD</strong>. Balance should be paid on arrival either by card, cash or Online transfer. An official confirmation letter concerning your program will be send to you shortly after successful advance booking fee.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Refund Policy */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yoga-sage">Refund Policy</h3>
                <div className="bg-yoga-mist/10 p-6 rounded-lg">
                  <p className="leading-relaxed">
                    Advance Booking deposit is <strong>non-refundable</strong>, we accept date rescheduling. If you cancel the course after joining, we accept the cancellation but the course fees will not be refunded with the cancellation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gallery Section */}
        <section>
          <Card className="shadow-zen">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth text-center">Retreat Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
                    <img 
                      src={image} 
                      alt={`Yoga retreat gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section>
          <Card className="shadow-zen max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-yoga-earth text-center">Book Your Retreat</CardTitle>
              <p className="text-center text-gray-600">Ready to transform? Get in touch with us today.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your yoga experience and any special requirements..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-yoga-sage hover:bg-yoga-sage/90 text-white">
                  Send Inquiry & Book Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

      </div>
      
      <Footer />
    </div>
  );
};

export default ThreeDaysRetreat;
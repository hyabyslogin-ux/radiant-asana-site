import { Card } from '@/components/ui/card';
import { Instagram, Facebook, Youtube, Twitter, MessageCircle } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@baliyogaschool",
      followers: "15.2K",
      icon: <Instagram className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500",
      hoverColor: "hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600",
      description: "Daily inspiration, pose tutorials, and behind-the-scenes moments",
      image: "/lovable-uploads/d4236abb-6f90-4ce4-b1ad-562a9b295817.png",
      url: "https://www.instagram.com/baliyogaschool/"
    },
    {
      platform: "Facebook",
      handle: "Yoga School in Bali",
      followers: "8.5K",
      icon: <Facebook className="w-6 h-6" />,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      description: "Community discussions, event updates, and student spotlights",
      image: "/lovable-uploads/dd467e40-f434-4893-bfae-077adbaa9185.png",
      url: "https://www.facebook.com/yogaschoolinbali/"
    },
    {
      platform: "YouTube",
      handle: "Bali Yoga School",
      followers: "12.8K",
      icon: <Youtube className="w-6 h-6" />,
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      description: "Free yoga classes, meditation guides, and retreat highlights",
      image: "/lovable-uploads/e117aae2-f01b-48ce-acfc-48827f392a58.png",
      url: "https://www.youtube.com/channel/UCCuk6dzNT49OSJf0mK0bYSg"
    },
    {
      platform: "Twitter",
      handle: "@BaliYogaSchool1",
      followers: "5.2K",
      icon: <Twitter className="w-6 h-6" />,
      color: "bg-gray-900",
      hoverColor: "hover:bg-gray-800",
      description: "Latest updates, yoga wisdom, and community highlights",
      image: "/lovable-uploads/e3d6b5ea-63cc-4290-adb0-6ba33a38acfd.png",
      url: "https://twitter.com/BaliYogaSchool1"
    }
  ];

  const latestPosts = [
    {
      platform: "Instagram",
      image: "/lovable-uploads/84b47165-30fa-48cd-8655-1fdd40968712.png",
      caption: "Morning flow session overlooking the rice paddies 🌅 #baliyoga #mindfulmovement"
    },
    {
      platform: "Instagram", 
      image: "/lovable-uploads/eee86151-0a9a-4f24-951f-a0c980b2955c.png",
      caption: "Partner poses workshop - building connection and trust 🤝 #partneryoga #community"
    },
    {
      platform: "Instagram",
      image: "/lovable-uploads/f6403da2-1660-453f-b374-e5c60721d662.png", 
      caption: "Advanced arm balance masterclass in action 💪 #yogastrength #armbalances"
    }
  ];

  return (
    <section id="social-media" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay connected with our vibrant yoga community! Follow us for daily inspiration, 
            exclusive content, and behind-the-scenes moments from our beautiful Bali studios. 
            Share your own journey with us and inspire others on their path.
          </p>
        </div>

        {/* Social Media Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <Card className="p-6 bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${social.color} ${social.hoverColor} text-white mb-4 transition-all duration-300 group-hover:scale-110`}>
                    {social.icon}
                  </div>
                  
                  <h3 className="font-bold text-primary text-lg mb-1">{social.platform}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{social.handle}</p>
                  <div className="text-2xl font-bold text-yoga-mauve mb-3">{social.followers}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{social.description}</p>
                  
                  <button className={`mt-4 w-full ${social.color} ${social.hoverColor} text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm`}>
                    Follow Us
                  </button>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Latest Posts Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">Latest from Instagram</h3>
            <p className="text-muted-foreground">Check out our recent posts and see what's happening at the studio</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <Card className="overflow-hidden bg-gradient-card border border-yoga-rose/20 shadow-soft hover:shadow-glow transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={`Instagram post ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.caption}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media CTA */}
        <div className="text-center">
          <div className="bg-gradient-border rounded-2xl p-1 max-w-3xl mx-auto">
            <div className="bg-yoga-cream rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Share Your Journey With Us
              </h3>
              <p className="text-muted-foreground mb-6">
                Tag us in your yoga photos and use these # to be featured on our social media! We love seeing your practice and celebrating your progress.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-yoga-peach/50 text-yoga-plum px-4 py-2 rounded-full text-sm font-medium">
                  #BaliYogaRetreat
                </span>
                <span className="bg-yoga-mauve/20 text-yoga-plum px-4 py-2 rounded-full text-sm font-medium">
                  #BaliYogaRetreatUbud
                </span>
                <span className="bg-yoga-rose/20 text-yoga-plum px-4 py-2 rounded-full text-sm font-medium">
                  #BaliYogaRetreatUluwatu
                </span>
                <span className="bg-yoga-plum/20 text-yoga-plum px-4 py-2 rounded-full text-sm font-medium">
                  #BaliYogaRetreatCanggu
                </span>
                <span className="bg-yoga-sage/20 text-yoga-plum px-4 py-2 rounded-full text-sm font-medium">
                  #BaliYogaSchool
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
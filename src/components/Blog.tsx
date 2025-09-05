import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Transformative Power of Yoga in Bali",
      excerpt: "Discover how the sacred energy of Bali enhances your yoga practice and creates profound personal transformation.",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      image: "/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png",
      category: "Wellness"
    },
    {
      id: 2,
      title: "Finding Inner Peace Through Meditation Retreats",
      excerpt: "Explore the ancient meditation techniques taught in our Ubud retreats and their impact on modern wellness.",
      date: "March 10, 2024",
      author: "Maya Sari",
      image: "/lovable-uploads/5117ac0b-9cea-4be9-83af-8536b5cd98d6.png",
      category: "Meditation"
    },
    {
      id: 3,
      title: "Beach Yoga: Connecting with Nature's Rhythm",
      excerpt: "Learn how practicing yoga on Bali's pristine beaches creates a unique connection with nature's energy.",
      date: "March 5, 2024",
      author: "David Chen",
      image: "/lovable-uploads/dd467e40-f434-4893-bfae-077adbaa9185.png",
      category: "Nature"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover wisdom from our yoga masters, wellness tips, and stories of transformation 
            from fellow practitioners on their journey to inner peace.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:shadow-glow hover:scale-105 transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
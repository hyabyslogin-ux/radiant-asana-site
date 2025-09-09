import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Transformative Power of Daily Yoga Practice",
      excerpt: "Discover how a consistent daily yoga practice can revolutionize your physical health, mental clarity, and spiritual well-being. Learn practical tips to establish and maintain your routine.",
      author: "Yogi Himanshu",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/lovable-uploads/yoga-class.jpg",
      category: "Practice",
      featured: true
    },
    {
      id: 2,
      title: "Finding Inner Peace Through Meditation in Bali",
      excerpt: "Explore the ancient meditation techniques practiced in Bali's sacred temples and how they can bring profound peace to your modern life. A guide to mindful living.",
      author: "Maya Dewi",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "/lovable-uploads/2c8cc260-25f3-4ae5-a498-e425800e509d.png",
      category: "Meditation"
    },
    {
      id: 3,
      title: "Ayurvedic Nutrition: Healing Through Food",
      excerpt: "Learn how ancient Ayurvedic principles can guide your nutrition choices, supporting your yoga practice and overall health with the right foods for your constitution.",
      author: "Dr. Priya Sharma",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/lovable-uploads/3b45fe7e-1832-4fee-92d1-320376e40af5.png",
      category: "Nutrition"
    },
    {
      id: 4,
      title: "The Sacred Geometry of Yoga Poses",
      excerpt: "Understand the deeper meaning behind yoga asanas and how their geometric alignment creates harmony between body, mind, and spirit in your practice.",
      author: "Yogi Himanshu",
      date: "March 8, 2024",
      readTime: "4 min read",
      image: "/lovable-uploads/45b5e644-5e4c-49e2-8d00-745b07651022.png",
      category: "Philosophy"
    },
    {
      id: 5,
      title: "Breathwork Techniques for Stress Relief",
      excerpt: "Master powerful pranayama techniques that can instantly calm your nervous system and reduce stress. Perfect practices for busy modern life.",
      author: "Ketut Liyer",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "/lovable-uploads/5117ac0b-9cea-4be9-83af-8536b5cd98d6.png",
      category: "Breathwork"
    },
    {
      id: 6,
      title: "Preparing for Your First Yoga Retreat",
      excerpt: "Everything you need to know before embarking on your transformative yoga retreat journey. Tips for preparation, what to expect, and how to make the most of your experience.",
      author: "Sarah Johnson",
      date: "March 3, 2024",
      readTime: "10 min read",
      image: "/lovable-uploads/5bc20f00-75c6-4f94-83f8-be72e5c72b78.png",
      category: "Retreats"
    }
  ];

  const categories = ["All", "Practice", "Meditation", "Nutrition", "Philosophy", "Breathwork", "Retreats"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(/lovable-uploads/yoga-class.jpg)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-plum/90 via-yoga-sage/75 to-yoga-earth/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Yoga & Wellness
            <span className="block text-4xl md:text-5xl text-yoga-cream/90 mt-2">
              Blog
            </span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover wisdom, practices, and insights to deepen your yoga journey and enhance your well-being
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        
        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <section key={post.id} className="mb-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] lg:h-auto">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yoga-sage text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-yoga-earth/10 text-yoga-earth px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-yoga-earth mb-4">
                    {post.title}
                  </h2>
                  <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <User className="w-4 h-4" />
                        <span className="font-inter text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="font-inter text-sm">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="font-inter text-sm">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-yoga-sage hover:bg-yoga-sage/90 text-white w-fit">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-yoga-sage hover:bg-yoga-sage/90 text-white" 
                  : "border-yoga-sage text-yoga-sage hover:bg-yoga-sage hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => (
              <Card key={post.id} className="group bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yoga-earth/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="font-playfair text-xl font-bold text-yoga-earth line-clamp-2 group-hover:text-yoga-sage transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-500">
                      <User className="w-3 h-3" />
                      <span className="font-inter text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span className="font-inter text-xs">{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-xs text-gray-500">{post.date}</span>
                    <Button size="sm" variant="ghost" className="text-yoga-sage hover:text-yoga-earth hover:bg-yoga-sage/10 p-0 h-auto">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-yoga-sage/10 via-yoga-earth/5 to-yoga-plum/10 rounded-3xl p-12 text-center border border-yoga-sage/20">
            <h3 className="font-playfair text-3xl font-bold text-yoga-earth mb-4">
              Stay Connected with Our Journey
            </h3>
            <p className="font-inter text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, practices, and retreat updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-yoga-sage/30 focus:border-yoga-sage focus:outline-none bg-white/80"
              />
              <Button className="bg-yoga-sage hover:bg-yoga-sage/90 text-white px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
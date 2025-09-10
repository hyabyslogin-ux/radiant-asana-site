import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

const CangguCampusGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Canggu-specific gallery images with SEO-optimized alt texts
  const cangguImages = [
    {
      src: '/lovable-uploads/1d7f913b-8b12-4d76-a477-0c6d244780e6.png',
      alt: 'Vibrant beachside yoga retreat accommodation in Canggu Bali'
    },
    {
      src: '/lovable-uploads/981ca3dd-5d39-44da-b4c8-3499c01be289.png',
      alt: 'Modern surf-inspired bedroom design Canggu yoga retreat center'
    },
    {
      src: '/lovable-uploads/a264314e-ebb8-4cf2-9d4c-ed3d0ead35be.png',
      alt: 'Tropical beach retreat bathroom with natural materials Canggu'
    },
    {
      src: '/lovable-uploads/a35d681b-4c7f-4c37-a46a-0819aefe2841.png',
      alt: 'Comfortable twin beds with surf culture vibes Canggu retreat'
    },
    {
      src: '/lovable-uploads/a484ca51-8206-4f6e-b28f-d23f0c4117f1.png',
      alt: 'Spacious bedroom with beach views Canggu yoga sanctuary'
    },
    {
      src: '/lovable-uploads/a6cba14b-4185-4bb9-a735-b0849031e1fe.png',
      alt: 'Creative wellness space bedroom Canggu beach yoga retreat'
    },
    {
      src: '/lovable-uploads/ab158cc1-e50f-4cec-9d1c-fa7552956f77.png',
      alt: 'Premium bathroom facilities with tropical design Canggu retreat'
    },
    {
      src: '/lovable-uploads/c07619d4-f8aa-4444-88c4-fa19f00c2b19.png',
      alt: 'Peaceful single bedroom sanctuary near Canggu beach'
    },
    {
      src: '/lovable-uploads/c0ffb891-44b4-4ba9-be24-c4ab9c5696ac.png',
      alt: 'Modern minimalist bathroom with ocean breeze Canggu yoga center'
    },
    {
      src: '/lovable-uploads/cfcd0947-4b35-453b-8db6-aef9ac9db996.png',
      alt: 'Cozy twin bedroom with surf-inspired decor Canggu retreat'
    },
    {
      src: '/lovable-uploads/e06db653-c279-4b2c-9b83-85ca57581582.png',
      alt: 'Luxury accommodation steps from Canggu beach yoga facilities'
    },
    {
      src: '/lovable-uploads/f119daec-93cb-4d9d-880c-085db403ebee.png',
      alt: 'Beach town retreat bedroom with creative wellness atmosphere Canggu'
    }
  ];

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentIndex === 0 ? cangguImages.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(cangguImages[newIndex].src);
    } else {
      const newIndex = currentIndex === cangguImages.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(cangguImages[newIndex].src);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        data={{
          title: "Canggu Beach Retreat Campus Photos - Surf Culture Yoga Sanctuary",
          description: "Discover our vibrant Canggu beach yoga retreat campus. Creative wellness spaces, surf culture vibes, and beachside accommodation near the best waves in Bali.",
          keywords: ["Canggu retreat campus", "beach yoga retreat", "surf culture wellness", "Canggu yoga photos", "beachside accommodation", "creative wellness retreat"],
          canonical: "/canggu-campus-gallery",
          openGraph: {
            title: "Canggu Beach Retreat Campus Photos - Surf Culture & Wellness",
            description: "Explore our vibrant Canggu retreat campus where surf culture meets creative wellness in the heart of Bali's beach town.",
            image: "/lovable-uploads/1d7f913b-8b12-4d76-a477-0c6d244780e6.png",
            imageAlt: "Vibrant beachside yoga retreat accommodation in Canggu Bali",
            type: "website",
            locale: "en_US"
          },
          twitter: {
            card: "summary_large_image",
            title: "Canggu Beach Retreat Campus Photos",
            description: "Surf culture meets creative wellness at our Canggu beach retreat",
            image: "/lovable-uploads/1d7f913b-8b12-4d76-a477-0c6d244780e6.png"
          },
          schema: [{
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Canggu Beach Yoga Retreat Campus Photo Gallery",
            "description": "Photo gallery showcasing our beachside yoga retreat campus in Canggu, Bali",
            "image": cangguImages.map(img => ({
              "@type": "ImageObject",
              "url": `https://baliyogaretreat.org${img.src}`,
              "description": img.alt
            }))
          }]
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${cangguImages[0].src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-sage/90 via-yoga-earth/80 to-yoga-plum/90"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-yoga-cream/20 to-yoga-peach/10 rounded-full blur-3xl animate-float opacity-40"></div>
          <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gradient-to-tl from-yoga-rose/15 to-yoga-mauve/8 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full px-8 py-4 mb-12 shadow-xl">
              <div className="w-2 h-2 bg-yoga-sage rounded-full animate-pulse"></div>
              <span className="text-white/95 font-inter font-medium text-lg">Beach Vibes</span>
            </div>
            
            {/* Main Heading */}
            <div className="mb-8 space-y-4">
              <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
                <span className="block text-white drop-shadow-xl tracking-tight">Canggu Retreat</span>
                <span className="block bg-gradient-to-r from-yoga-cream via-yoga-peach to-yoga-rose bg-clip-text text-transparent font-playfair">
                  Campus Photos
                </span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
                <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 italic tracking-wide">
                  Surf Culture Wellness
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="mb-16 space-y-6">
              <p className="font-inter text-xl sm:text-2xl lg:text-3xl font-light text-white/95 leading-relaxed max-w-4xl mx-auto">
                Where Beach Life Meets Wellness
              </p>
              <p className="font-inter text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
                Experience the vibrant energy of Canggu's surf culture combined with transformative yoga practices
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 z-30">
          <div className="animate-bounce">
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-inter font-medium tracking-wider opacity-80">Explore Gallery</span>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center shadow-lg">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Gallery Stats */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-white/90 to-yoga-cream/20 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yoga-earth mb-2">{cangguImages.length}+</div>
                <p className="font-inter text-gray-600">Beach Vibes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yoga-sage mb-2">365</div>
                <p className="font-inter text-gray-600">Days of Surf</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yoga-plum mb-2">∞</div>
                <p className="font-inter text-gray-600">Creative Energy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Gallery */}
        <section className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-yoga-cream/5 via-transparent to-yoga-sage/5 rounded-3xl"></div>
          
          <div className="relative space-y-12">
            {/* Section Header */}
            <div className="text-center">
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-yoga-earth mb-6">
                Campus Gallery
              </h2>
              <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Immerse yourself in Canggu's vibrant beach culture where surf meets wellness and creativity flows as freely as the ocean waves
              </p>
            </div>
            
            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {cangguImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative break-inside-avoid cursor-pointer mb-4"
                  onClick={() => openLightbox(image.src, index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105 rounded-xl shadow-lg"
                    style={{ 
                      height: `${250 + (index % 4) * 50}px`
                    }}
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <div className="transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-yoga-earth" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm font-medium text-yoga-earth">Canggu View #{index + 1}</p>
                      <p className="text-xs text-gray-600">Click to view full size</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-yoga-sage/10 to-yoga-earth/10 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-yoga-sage/20">
            <h3 className="font-playfair text-4xl font-bold text-yoga-earth mb-6">
              Ready to Ride the Wave of Wellness?
            </h3>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join us at our vibrant Canggu campus where surf culture meets transformative yoga practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yoga-sage hover:bg-yoga-sage/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/canggu-3-days-retreat'}
              >
                Book Canggu Retreat
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-yoga-earth text-yoga-earth hover:bg-yoga-earth hover:text-white font-semibold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/contact-us'}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => navigateImage('prev')}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => navigateImage('next')}
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
            
            {/* Image */}
            <img 
              src={selectedImage} 
              alt={cangguImages[currentIndex]?.alt || `Canggu retreat campus view ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} of {cangguImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default CangguCampusGallery;
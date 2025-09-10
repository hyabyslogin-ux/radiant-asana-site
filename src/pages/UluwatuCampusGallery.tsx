import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

const UluwatuCampusGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Uluwatu-specific gallery images with SEO-optimized alt texts
  const uluwatuImages = [
    // Keeping the best original images (removing positions #1,2,3,4,6,7,8,9,10,11,12)
    {
      src: '/lovable-uploads/3853444f-cf97-46b3-a8a2-62032660f070.png',
      alt: 'Spacious bedroom with traditional Balinese touches Uluwatu retreat'
    },
    // Previously added facility images
    {
      src: '/lovable-uploads/523532c2-67af-4331-aa18-fa4b5b8ea5ca.png',
      alt: 'Twilight infinity pool surrounded by tropical gardens Uluwatu yoga retreat Bali'
    },
    {
      src: '/lovable-uploads/bb8bd107-35c1-45e2-9c2f-5b03debc7247.png',
      alt: 'Modern guest room with TV entertainment center Uluwatu cliff-top yoga sanctuary'
    },
    {
      src: '/lovable-uploads/4e094a58-353b-4a0e-97e2-1f3ca09aca04.png',
      alt: 'Elegant dining hall with garden views Uluwatu yoga retreat accommodation'
    },
    {
      src: '/lovable-uploads/9e795bc7-6f70-4078-a708-4fe58fb4d7e5.png',
      alt: 'Artistic dining room with Balinese cultural artwork Uluwatu yoga center'
    },
    {
      src: '/lovable-uploads/83745c90-8bda-4e67-97c2-ba309016288b.png',
      alt: 'Spacious yoga studio with wooden ceiling beams Uluwatu meditation hall Bali'
    },
    {
      src: '/lovable-uploads/22ff8ffe-c4a1-40c4-ad3a-06b929134d99.png',
      alt: 'Fully equipped kitchen facilities for healthy meals Uluwatu yoga retreat'
    },
    {
      src: '/lovable-uploads/58833e66-1e43-412a-aa48-5ce164453851.png',
      alt: 'Daytime swimming pool with sun loungers Uluwatu cliff-top wellness center'
    },
    {
      src: '/lovable-uploads/713bd85a-f655-415b-9f6a-ddc9dffe4652.png',
      alt: 'Outdoor dining terrace with tropical ambiance Uluwatu yoga retreat Bali'
    },
    {
      src: '/lovable-uploads/022d795e-7c61-45d6-944d-7eca6a128cab.png',
      alt: 'Evening exterior view traditional Balinese architecture Uluwatu yoga school'
    },
    {
      src: '/lovable-uploads/5177cc6c-4aa4-49fd-b496-12334ef94ed5.png',
      alt: 'Outdoor yoga class session cliff-top location Uluwatu yoga practice Bali'
    },
    // New uploaded images with SEO-optimized alt text
    {
      src: '/lovable-uploads/c07619d4-f8aa-4444-88c4-fa19f00c2b19.png',
      alt: 'Luxury oceanview bedroom suite with private balcony Uluwatu cliff-top retreat Bali'
    },
    {
      src: '/lovable-uploads/ec0fb716-0da0-4fa2-b4eb-bbadd0226932.png',
      alt: 'Serene meditation space with traditional Indonesian decor Uluwatu yoga sanctuary'
    },
    {
      src: '/lovable-uploads/84b47165-30fa-48cd-8655-1fdd40968712.png',
      alt: 'Wellness treatment room with ocean breeze Uluwatu holistic spa facility'
    },
    {
      src: '/lovable-uploads/f6403da2-1660-453f-b374-e5c60721d662.png',
      alt: 'Tropical garden pathway leading to yoga pavilion Uluwatu retreat grounds'
    },
    {
      src: '/lovable-uploads/8a948cb6-13f9-44c9-8fef-bce571ae9145.png',
      alt: 'Open-air yoga shala with panoramic ocean views Uluwatu cliff-top studio'
    },
    {
      src: '/lovable-uploads/b91ee822-4e33-4513-a5ec-abce556ce83a.png',
      alt: 'Communal living area with natural bamboo architecture Uluwatu eco retreat'
    },
    {
      src: '/lovable-uploads/a35d681b-4c7f-4c37-a46a-0819aefe2841.png',
      alt: 'Infinity pool edge blending with Indian Ocean horizon Uluwatu luxury retreat'
    },
    {
      src: '/lovable-uploads/eb7f3511-36b4-4061-b6ee-7bc64b93bd1e.png',
      alt: 'Sunset yoga session on cliff-top deck Uluwatu transformational retreat Bali'
    },
    {
      src: '/lovable-uploads/cfcd0947-4b35-453b-8db6-aef9ac9db996.png',
      alt: 'Premium accommodation with traditional Javanese art Uluwatu cultural retreat center'
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
      const newIndex = currentIndex === 0 ? uluwatuImages.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(uluwatuImages[newIndex].src);
    } else {
      const newIndex = currentIndex === uluwatuImages.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(uluwatuImages[newIndex].src);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        data={{
          title: "Uluwatu Retreat Campus Photos - Cliff-top Yoga Sanctuary Bali",
          description: "Explore our stunning Uluwatu yoga retreat campus perched on dramatic cliffs. Luxury accommodation, ocean views, and serene yoga spaces overlooking the Indian Ocean.",
          keywords: ["Uluwatu retreat campus", "cliff-top yoga retreat", "ocean view accommodation", "Uluwatu yoga photos", "Bali retreat facilities", "luxury yoga accommodation"],
          canonical: "/uluwatu-campus-gallery",
          openGraph: {
            title: "Uluwatu Retreat Campus Photos - Cliff-top Yoga Sanctuary",
            description: "Discover our breathtaking Uluwatu retreat campus with stunning cliff-top views and luxury accommodation.",
            image: "/lovable-uploads/3853444f-cf97-46b3-a8a2-62032660f070.png",
            imageAlt: "Spacious bedroom with traditional Balinese touches Uluwatu retreat",
            type: "website",
            locale: "en_US"
          },
          twitter: {
            card: "summary_large_image",
            title: "Uluwatu Retreat Campus Photos",
            description: "Cliff-top yoga sanctuary with breathtaking ocean views in Bali",
            image: "/lovable-uploads/3853444f-cf97-46b3-a8a2-62032660f070.png"
          },
          schema: [{
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Uluwatu Yoga Retreat Campus Photo Gallery",
            "description": "Photo gallery showcasing our cliff-top yoga retreat campus in Uluwatu, Bali",
            "image": uluwatuImages.map(img => ({
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
            style={{ backgroundImage: `url(${uluwatuImages[0].src})` }}
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
              <span className="text-white/95 font-inter font-medium text-lg">Cliff-top Sanctuary</span>
            </div>
            
            {/* Main Heading */}
            <div className="mb-8 space-y-4">
              <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
                <span className="block text-white drop-shadow-xl tracking-tight">Uluwatu Retreat</span>
                <span className="block bg-gradient-to-r from-yoga-cream via-yoga-peach to-yoga-rose bg-clip-text text-transparent font-playfair">
                  Campus Photos
                </span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
                <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 italic tracking-wide">
                  Ocean Cliff Serenity
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="mb-16 space-y-6">
              <p className="font-inter text-xl sm:text-2xl lg:text-3xl font-light text-white/95 leading-relaxed max-w-4xl mx-auto">
                Perched on Dramatic Clifftops
              </p>
              <p className="font-inter text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
                Experience breathtaking ocean views and sunset magic at our Uluwatu retreat campus
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
                <div className="text-4xl font-bold text-yoga-earth mb-2">{uluwatuImages.length}+</div>
                <p className="font-inter text-gray-600">Stunning Views</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yoga-sage mb-2">180°</div>
                <p className="font-inter text-gray-600">Ocean Panorama</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yoga-plum mb-2">∞</div>
                <p className="font-inter text-gray-600">Sunset Magic</p>
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
                Discover our cliff-top sanctuary where dramatic ocean views meet luxury accommodation, serene yoga spaces, and complete wellness facilities
              </p>
            </div>
            
            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {uluwatuImages.map((image, index) => (
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
                      <p className="text-sm font-medium text-yoga-earth">Uluwatu View #{index + 1}</p>
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
              Ready to Experience Cliff-top Serenity?
            </h3>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join us at our breathtaking Uluwatu campus for dramatic ocean views and transformative yoga experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yoga-sage hover:bg-yoga-sage/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/uluwatu-3-days-retreat'}
              >
                Book Uluwatu Retreat
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
              alt={uluwatuImages[currentIndex]?.alt || `Uluwatu retreat campus view ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} of {uluwatuImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default UluwatuCampusGallery;
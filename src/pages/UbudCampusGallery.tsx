import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

const UbudCampusGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Curated Ubud-specific gallery images (removing duplicates and specified images)
  const allImages = [
    '/lovable-uploads/006e4b87-f686-4703-bc52-d499a78f67df.png',
    '/lovable-uploads/09dfc4f5-0f6e-4884-a662-96aa7dcd9ee6.png',
    '/lovable-uploads/09fdfbc9-ac2c-4ddc-acfb-efddfc6bf6e9.png',
    '/lovable-uploads/1f912899-2fba-4e5e-900d-da42b1a0d026.png',
    '/lovable-uploads/31da4317-88ad-4519-8397-4428779fefc4.png',
    '/lovable-uploads/5117ac0b-9cea-4be9-83af-8536b5cd98d6.png',
    '/lovable-uploads/56b08f35-18f2-4235-8c72-80caf5e99d21.png',
    '/lovable-uploads/62650205-96dd-45fd-a68e-6eb105184280.png',
    '/lovable-uploads/67c5fc29-d538-4741-a4aa-4e5affaebef3.png',
    '/lovable-uploads/71f70b0a-7265-4b1e-b0b1-c5a91f8e39fe.png',
    '/lovable-uploads/7c0b8b0b-f25a-4ff7-8bb3-000c713d4480.png',
    '/lovable-uploads/82f12a81-9889-4829-a670-f5c77558bc74.png',
    '/lovable-uploads/84b47165-30fa-48cd-8655-1fdd40968712.png',
    '/lovable-uploads/8a948cb6-13f9-44c9-8fef-bce571ae9145.png',
    '/lovable-uploads/9d85e84b-2b54-463f-a296-cb8633fc085c.png',
    '/lovable-uploads/b91ee822-4e33-4513-a5ec-abce556ce83a.png',
    '/lovable-uploads/cb9d17a6-619d-4a6f-ad15-e3dd95953b54.png',
    '/lovable-uploads/dd467e40-f434-4893-bfae-077adbaa9185.png',
    '/lovable-uploads/e117aae2-f01b-48ce-acfc-48827f392a58.png',
    '/lovable-uploads/e3852749-ebcf-4e5a-8dae-7f9663b20acf.png',
    '/lovable-uploads/e3d6b5ea-63cc-4290-adb0-6ba33a38acfd.png',
    '/lovable-uploads/ea560468-ddc8-4d3b-98eb-2db6aac7b16b.png',
    '/lovable-uploads/eb7f3511-36b4-4061-b6ee-7bc64b93bd1e.png',
    '/lovable-uploads/ec0fb716-0da0-4fa2-b4eb-bbadd0226932.png',
    '/lovable-uploads/eee86151-0a9a-4f24-951f-a0c980b2955c.png',
    '/lovable-uploads/f2151035-c120-4b70-b58d-3ba55d30bf7f.png',
    '/lovable-uploads/f2253b66-2282-4700-bebb-969092de041d.png',
    '/lovable-uploads/f58e04e1-fda5-48c9-b3ab-41f6f7235e94.png',
    '/lovable-uploads/f6403da2-1660-453f-b374-e5c60721d662.png',
    '/lovable-uploads/fa196a61-65f0-4c5b-945d-df28079ea3f3.png',
    '/lovable-uploads/fdb98fee-a394-4daa-85fa-ac6f82ae729b.png',
    '/lovable-uploads/ff031fbd-ee3b-4abb-988a-dc9bf0fd93cc.png'
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
      const newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(allImages[newIndex]);
    } else {
      const newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(allImages[newIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        data={{
          title: "Ubud Retreat Campus Photos - Bali Yoga Retreats",
          description: "Explore our beautiful Ubud yoga retreat campus through our photo gallery. See accommodation, yoga spaces, dining areas and peaceful surroundings.",
          keywords: ["Ubud retreat campus", "yoga retreat photos", "Bali yoga accommodation", "retreat facilities", "yoga spaces"],
          canonical: "/ubud-campus-gallery"
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${allImages[0]})` }}
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
              <span className="text-white/95 font-inter font-medium text-lg">Visual Journey</span>
            </div>
            
            {/* Main Heading */}
            <div className="mb-8 space-y-4">
              <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
                <span className="block text-white drop-shadow-xl tracking-tight">Ubud Retreat</span>
                <span className="block bg-gradient-to-r from-yoga-cream via-yoga-peach to-yoga-rose bg-clip-text text-transparent font-playfair">
                  Photos
                </span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
                <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 italic tracking-wide">
                  A Visual Story
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="mb-16 space-y-6">
              <p className="font-inter text-xl sm:text-2xl lg:text-3xl font-light text-white/95 leading-relaxed max-w-4xl mx-auto">
                Discover Our Sacred Sanctuary
              </p>
              <p className="font-inter text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
                Immerse yourself in the beauty of our Ubud retreat campus through this curated collection of moments
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
                <div className="text-4xl font-bold text-yoga-earth mb-2">{allImages.length}+</div>
                <p className="font-inter text-gray-600">Beautiful Photos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yoga-sage mb-2">2</div>
                <p className="font-inter text-gray-600">Campus Locations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yoga-plum mb-2">∞</div>
                <p className="font-inter text-gray-600">Peaceful Moments</p>
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
                Every corner of our retreat center tells a story of peace, transformation, and natural beauty
              </p>
            </div>
            
            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {allImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative break-inside-avoid cursor-pointer mb-4"
                  onClick={() => openLightbox(image, index)}
                >
                  <img 
                    src={image} 
                    alt={`Authentic Ubud yoga retreat campus accommodation and facilities view ${index + 1} - sacred valley sanctuary Bali`}
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
                      <p className="text-sm font-medium text-yoga-earth">Campus View #{index + 1}</p>
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
              Ready to Experience It Yourself?
            </h3>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join us at our beautiful Ubud campus for a transformative yoga retreat experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yoga-sage hover:bg-yoga-sage/90 text-white font-semibold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/3-days-retreat'}
              >
                Book Your Retreat
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
              alt={`Ubud retreat campus view ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} of {allImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default UbudCampusGallery;
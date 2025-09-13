import React, { useState } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

// Import gallery images
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';
import gallery10 from '@/assets/gallery-10.jpg';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gallery1,
      alt: 'Partner Yoga Session in Bali',
      title: 'Partner Yoga Practice'
    },
    {
      src: gallery2,
      alt: 'Cultural Experience and Tea Ceremony',
      title: 'Balinese Cultural Immersion'
    },
    {
      src: gallery3,
      alt: 'Yoga Teacher Training in Bali',
      title: 'Authentic Yoga Teaching'
    },
    {
      src: gallery4,
      alt: 'Partner Yoga Poses',
      title: 'Union with Your True Self'
    },
    {
      src: gallery5,
      alt: 'Happy Students Embracing',
      title: 'Community Connection'
    },
    {
      src: gallery6,
      alt: 'Reiki Healing Session',
      title: 'Healing Practices'
    },
    {
      src: gallery7,
      alt: 'Pranayama Breathing Practice',
      title: 'Bridge Between Body and Soul'
    },
    {
      src: gallery8,
      alt: 'Acro Yoga Practice',
      title: 'Partner Stretching & Acro Yoga'
    },
    {
      src: gallery9,
      alt: 'Beach Yoga Session',
      title: 'Sunrise Beach Yoga'
    },
    {
      src: gallery10,
      alt: 'Advanced Yoga Poses on Beach',
      title: 'Advanced Practice by the Ocean'
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <SEO pageKey="gallery" />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Photo Gallery
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Capturing the essence of transformation, connection, and spiritual growth at our Bali yoga retreats
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
                onClick={() => openLightbox(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable yoga retreat experience in the heart of Bali
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Book Your Retreat
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhotoGallery;
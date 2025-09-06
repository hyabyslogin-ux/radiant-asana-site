import { useEffect } from 'react';

interface PreloadCriticalResourcesProps {
  images?: string[];
  fonts?: string[];
}

export const PreloadCriticalResources: React.FC<PreloadCriticalResourcesProps> = ({
  images = [],
  fonts = []
}) => {
  useEffect(() => {
    // Preload critical images
    images.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    fonts.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      if (domain.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

  }, [images, fonts]);

  return null;
};

export default PreloadCriticalResources;
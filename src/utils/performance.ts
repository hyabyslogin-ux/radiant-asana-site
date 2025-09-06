// Performance optimization utilities

export const prefetchRoute = (route: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

export const optimizeImages = (images: string[]) => {
  images.forEach(preloadImage);
};

export const measureCoreWebVitals = () => {
  // Core Web Vitals measurement using basic performance API
  if (typeof window !== 'undefined' && 'performance' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance metric:', entry.name, entry.duration);
      }
    });
    
    try {
      observer.observe({ entryTypes: ['navigation', 'paint'] });
    } catch (e) {
      console.log('Performance observer not supported');
    }
  }
};

export const deferNonCriticalResources = () => {
  // Defer loading of non-critical resources
  const deferredScripts = document.querySelectorAll('script[data-defer]');
  deferredScripts.forEach((script) => {
    if (script instanceof HTMLScriptElement) {
      script.defer = true;
    }
  });
};
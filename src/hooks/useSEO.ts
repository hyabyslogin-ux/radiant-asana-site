import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoPages } from '@/data/seoData';
import type { SEOData } from '@/types/seo';

export const useSEO = (pageKey?: string): SEOData | null => {
  const location = useLocation();
  
  // Determine the page key from the current route
  const currentPageKey = pageKey || getPageKeyFromPath(location.pathname);
  
  // Get SEO data for the current page
  const seoData = seoPages[currentPageKey] || seoPages.home;
  
  useEffect(() => {
    // Update document title
    if (seoData?.title) {
      document.title = seoData.title;
    }
    
    // Update meta description
    updateMetaTag('description', seoData?.description);
    
    // Update meta keywords
    if (seoData?.keywords?.length) {
      updateMetaTag('keywords', seoData.keywords.join(', '));
    }
    
    // Update canonical URL
    if (seoData?.canonical) {
      updateCanonicalUrl(seoData.canonical);
    }
    
    // Update Open Graph tags
    if (seoData?.openGraph) {
      updateMetaTag('og:title', seoData.openGraph.title);
      updateMetaTag('og:description', seoData.openGraph.description);
      updateMetaTag('og:image', seoData.openGraph.image);
      updateMetaTag('og:image:alt', seoData.openGraph.imageAlt);
      updateMetaTag('og:type', seoData.openGraph.type);
      updateMetaTag('og:locale', seoData.openGraph.locale);
      updateMetaTag('og:url', seoData.canonical || window.location.href);
    }
    
    // Update Twitter Card tags
    if (seoData?.twitter) {
      updateMetaTag('twitter:card', seoData.twitter.card);
      updateMetaTag('twitter:title', seoData.twitter.title);
      updateMetaTag('twitter:description', seoData.twitter.description);
      updateMetaTag('twitter:image', seoData.twitter.image);
    }
    
  }, [currentPageKey, seoData]);
  
  return seoData;
};

const getPageKeyFromPath = (pathname: string): string => {
  // Remove leading slash and convert to page key
  const path = pathname.slice(1) || 'home';
  
  // Map specific routes to SEO keys
  const routeMapping: Record<string, string> = {
    '': 'home',
    'about-us': 'about-us',
    'contact-us': 'contact-us',
    '3-days-retreat': 'ubud-3-days',
    '4-days-retreat': 'ubud-4-days',
    '5-days-retreat': 'ubud-5-days',
    '6-days-retreat': 'ubud-6-days',
    '7-days-retreat': 'ubud-7-days',
    '8-days-retreat': 'ubud-8-days',
    '9-days-retreat': 'ubud-9-days',
    '10-days-retreat': 'ubud-10-days',
    '11-days-retreat': 'ubud-11-days',
    'canggu-7-days-retreat': 'canggu-7-days',
    // Add more mappings as needed
  };
  
  return routeMapping[path] || path;
};

const updateMetaTag = (name: string, content?: string) => {
  if (!content) return;
  
  let selector = `meta[name="${name}"]`;
  if (name.startsWith('og:') || name.startsWith('twitter:')) {
    selector = `meta[property="${name}"]`;
  }
  
  let element = document.querySelector(selector) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    element.content = content;
    document.head.appendChild(element);
  }
};

const updateCanonicalUrl = (url: string) => {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (element) {
    element.href = url;
  } else {
    element = document.createElement('link');
    element.rel = 'canonical';
    element.href = url;
    document.head.appendChild(element);
  }
};
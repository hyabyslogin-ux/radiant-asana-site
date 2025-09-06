export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    type: 'website' | 'article';
    locale: string;
  };
  twitter: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    image: string;
  };
  schema?: any[];
}

export interface LocationData {
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  description: string;
}

export interface RetreatData {
  name: string;
  location: string;
  duration: number;
  price: number;
  description: string;
  includes: string[];
  startDate?: string;
  endDate?: string;
  availability: number;
}
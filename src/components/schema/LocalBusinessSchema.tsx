import { locations } from '@/data/seoData';

interface LocalBusinessSchemaProps {
  location: 'ubud' | 'uluwatu' | 'canggu';
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ location }) => {
  const locationData = locations[location];
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://baliyogaretreat.org/#local-business-${location}`,
    "name": `Bali Nature Yoga Retreats - ${locationData.name}`,
    "description": locationData.description,
    "url": "https://baliyogaretreat.org",
    "telephone": locationData.phone,
    "priceRange": "$675-$3575",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": locationData.address.split(',')[0],
      "addressLocality": locationData.name.split(',')[0],
      "addressRegion": "Bali",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": locationData.lat,
      "longitude": locationData.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "image": [
      "https://baliyogaretreat.org/lovable-uploads/yoga-hero.jpg",
      "https://baliyogaretreat.org/lovable-uploads/yoga-class.jpg"
    ],
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "USD, IDR"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
};

export default LocalBusinessSchema;
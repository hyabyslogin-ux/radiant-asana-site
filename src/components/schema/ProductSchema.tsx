import { retreats, locations } from '@/data/seoData';

interface ProductSchemaProps {
  retreatKey: string;
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({ retreatKey }) => {
  const retreat = retreats[retreatKey];
  if (!retreat) return null;
  
  const location = locations[retreat.location];
  if (!location) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": retreat.name,
    "description": retreat.description,
    "brand": {
      "@type": "Brand",
      "name": "Bali Nature Yoga Retreats"
    },
    "category": "Yoga Retreat",
    "image": [
      "https://balinatureyogaretreats.com/lovable-uploads/yoga-hero.jpg",
      "https://balinatureyogaretreats.com/lovable-uploads/yoga-retreat-1.jpg",
      "https://balinatureyogaretreats.com/lovable-uploads/yoga-retreat-2.jpg"
    ],
    "offers": {
      "@type": "Offer",
      "url": `https://balinatureyogaretreats.com/${retreatKey.replace('_', '-')}-retreat`,
      "priceCurrency": "USD",
      "price": retreat.price,
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Bali Nature Yoga Retreats"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "Worldwide",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Life-changing experience! The authentic Balinese approach to yoga combined with the stunning location created the perfect retreat atmosphere."
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": `${retreat.duration} days`
      },
      {
        "@type": "PropertyValue", 
        "name": "Location",
        "value": location.name
      },
      {
        "@type": "PropertyValue",
        "name": "Group Size",
        "value": `Maximum ${retreat.availability} participants`
      }
    ]
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

export default ProductSchema;
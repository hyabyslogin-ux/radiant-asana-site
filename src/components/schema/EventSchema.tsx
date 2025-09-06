import { retreats, locations } from '@/data/seoData';
import type { RetreatData } from '@/types/seo';

interface EventSchemaProps {
  retreatKey: string;
  startDate?: string;
  endDate?: string;
}

export const EventSchema: React.FC<EventSchemaProps> = ({ 
  retreatKey, 
  startDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  endDate
}) => {
  const retreat = retreats[retreatKey];
  if (!retreat) return null;
  
  const location = locations[retreat.location];
  if (!location) return null;

  // Calculate end date if not provided
  const calculatedEndDate = endDate || new Date(
    new Date(startDate).getTime() + (retreat.duration * 24 * 60 * 60 * 1000)
  ).toISOString().split('T')[0];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": retreat.name,
    "description": retreat.description,
    "startDate": startDate,
    "endDate": calculatedEndDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": location.address.split(',')[0],
        "addressLocality": location.name.split(',')[0],
        "addressRegion": "Bali",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location.lat,
        "longitude": location.lng
      }
    },
    "image": [
      "https://balinatureyogaretreats.com/lovable-uploads/yoga-hero.jpg",
      "https://balinatureyogaretreats.com/lovable-uploads/yoga-retreat-1.jpg"
    ],
    "organizer": {
      "@type": "Organization",
      "name": "Bali Nature Yoga Retreats",
      "url": "https://balinatureyogaretreats.com"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://balinatureyogaretreats.com/${retreatKey.replace('_', '-')}-retreat`,
      "price": retreat.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "performer": {
      "@type": "Person",
      "name": "Made Surya",
      "jobTitle": "Certified Yoga Instructor"
    },
    "maximumAttendeeCapacity": retreat.availability,
    "remainingAttendeeCapacity": retreat.availability
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

export default EventSchema;
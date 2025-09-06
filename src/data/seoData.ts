import { SEOData, LocationData, RetreatData } from '@/types/seo';

const baseUrl = 'https://baliyogaretreat.org';
const defaultImage = `${baseUrl}/lovable-uploads/yoga-hero.jpg`;

export const locations: Record<string, LocationData> = {
  ubud: {
    name: 'Ubud, Bali',
    address: 'Sacred Valley, Ubud, Gianyar Regency, Bali 80571, Indonesia',
    lat: -8.5069,
    lng: 115.2625,
    phone: '+62 361 123 456',
    description: 'Spiritual heart of Bali with ancient temples and healing energy'
  },
  uluwatu: {
    name: 'Uluwatu, Bali',
    address: 'Uluwatu Temple Area, South Kuta, Badung Regency, Bali 80361, Indonesia',
    lat: -8.8290,
    lng: 115.0854,
    phone: '+62 361 789 012',
    description: 'Clifftop sanctuary with ocean views and dramatic sunsets'
  },
  canggu: {
    name: 'Canggu, Bali',
    address: 'Canggu Beach Area, North Kuta, Badung Regency, Bali 80351, Indonesia',
    lat: -8.6456,
    lng: 115.1376,
    phone: '+62 361 345 678',
    description: 'Vibrant beach town with surf culture and creative wellness'
  }
};

export const retreats: Record<string, RetreatData> = {
  'ubud-3-days': {
    name: '3 Days Sacred Valley Retreat',
    location: 'ubud',
    duration: 3,
    price: 675,
    description: 'Immerse yourself in Ubud\'s spiritual energy with authentic Balinese yoga practices',
    includes: ['Daily yoga sessions', 'Meditation practices', 'Vegetarian meals', 'Temple visits'],
    availability: 12
  },
  'canggu-7-days': {
    name: '7 Days Beach Yoga Retreat',
    location: 'canggu',
    duration: 7,
    price: 1575,
    description: 'Beach transformation retreat combining yoga, surf culture, and creative wellness',
    includes: ['Beach yoga sessions', 'Surf lessons', 'Accommodation', 'All meals', 'Workshop access'],
    availability: 8
  },
  // Add more retreats as needed
};

export const seoPages: Record<string, SEOData> = {
  home: {
    title: 'Bali Yoga Retreats - Authentic Yoga Experiences in Ubud, Uluwatu & Canggu',
    description: 'Transform your life with authentic yoga retreats in Bali\'s most sacred locations. Experience Ubud\'s spiritual energy, Uluwatu\'s clifftop serenity, and Canggu\'s vibrant wellness culture. 3-11 day programs available.',
    keywords: ['bali yoga retreat', 'ubud yoga', 'uluwatu yoga', 'canggu yoga', 'authentic yoga bali', 'spiritual retreat', 'yoga vacation', 'meditation retreat bali'],
    canonical: baseUrl,
    openGraph: {
      title: 'Bali Yoga Retreats - Authentic Experiences in Sacred Locations',
      description: 'Transform your life with authentic yoga retreats in Bali\'s most sacred locations. Experience spiritual awakening and healing.',
      image: defaultImage,
      imageAlt: 'Serene yoga practice at sunrise in Bali with traditional architecture',
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bali Yoga Retreats - Authentic Sacred Experiences',
      description: 'Transform your life with authentic yoga retreats in Bali\'s most sacred locations.',
      image: defaultImage
    }
  },
  
  'about-us': {
    title: 'About Us - Bali Nature Yoga Retreats | Authentic Balinese Wisdom & Transformation',
    description: 'Learn about our mission to provide authentic yoga experiences rooted in Balinese culture. Discover our philosophy of Tri Hita Karana and holistic transformation approach.',
    keywords: ['about bali yoga retreats', 'balinese yoga philosophy', 'tri hita karana', 'yoga retreat founders', 'authentic balinese wisdom'],
    canonical: `${baseUrl}/about-us`,
    openGraph: {
      title: 'About Bali Nature Yoga Retreats - Authentic Balinese Wisdom',
      description: 'Discover our mission to provide transformative yoga experiences rooted in authentic Balinese culture and ancient wisdom.',
      image: defaultImage,
      imageAlt: 'Founders of Bali Nature Yoga Retreats in traditional Balinese setting',
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Bali Nature Yoga Retreats',
      description: 'Authentic Balinese wisdom meets transformative yoga experiences.',
      image: defaultImage
    }
  },

  'contact-us': {
    title: 'Contact Us - Book Your Bali Yoga Retreat | Get in Touch Today',
    description: 'Ready to transform your life? Contact us to book your authentic Bali yoga retreat. Get personalized recommendations and start your spiritual journey today.',
    keywords: ['book bali yoga retreat', 'contact yoga retreat', 'bali yoga booking', 'retreat inquiry', 'yoga retreat contact'],
    canonical: `${baseUrl}/contact-us`,
    openGraph: {
      title: 'Contact Bali Nature Yoga Retreats - Book Your Transformation',
      description: 'Ready to transform your life? Contact us to book your authentic Bali yoga retreat and start your spiritual journey.',
      image: defaultImage,
      imageAlt: 'Contact form for booking Bali yoga retreats',
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Bali Nature Yoga Retreats',
      description: 'Book your authentic Bali yoga retreat and transform your life.',
      image: defaultImage
    }
  },

  // Dynamic retreat pages
  'ubud-3-days': {
    title: '3 Days Ubud Yoga Retreat - Sacred Valley Spiritual Immersion | From $675',
    description: 'Experience 3 days of spiritual awakening in Ubud\'s sacred valley. Ancient temples, authentic yoga practices, and Balinese healing traditions. Book your transformation.',
    keywords: ['3 day ubud yoga retreat', 'ubud spiritual retreat', 'short yoga retreat bali', 'ubud meditation retreat', 'sacred valley yoga'],
    canonical: `${baseUrl}/3-days-retreat`,
    openGraph: {
      title: '3 Days Ubud Sacred Valley Yoga Retreat - Spiritual Transformation',
      description: 'Experience spiritual awakening in Ubud\'s sacred valley with authentic yoga practices and Balinese healing traditions.',
      image: defaultImage,
      imageAlt: '3 day yoga retreat in Ubud sacred valley with temple backdrop',
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: '3 Days Ubud Sacred Valley Retreat',
      description: 'Spiritual transformation in Bali\'s sacred valley. From $675.',
      image: defaultImage
    }
  },

  'canggu-7-days': {
    title: '7 Days Canggu Beach Yoga Retreat - Surf Culture & Creative Wellness | From $1575',
    description: 'Experience 7 days of beach transformation in Canggu. Combine yoga, surf culture, and creative wellness in Bali\'s most vibrant beach town.',
    keywords: ['7 day canggu yoga retreat', 'beach yoga retreat bali', 'canggu surf yoga', 'creative wellness retreat', 'beach transformation'],
    canonical: `${baseUrl}/canggu-7-days-retreat`,
    openGraph: {
      title: '7 Days Canggu Beach Yoga Retreat - Surf & Wellness Transformation',
      description: 'Experience beach transformation combining yoga, surf culture, and creative wellness in Canggu\'s vibrant atmosphere.',
      image: defaultImage,
      imageAlt: '7 day beach yoga retreat in Canggu with surfboards and yoga mats',
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: '7 Days Canggu Beach Yoga Retreat',
      description: 'Beach transformation with surf culture and wellness. From $1575.',
      image: defaultImage
    }
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bali Nature Yoga Retreats",
  "alternateName": "Serenity Yoga Studio",
  "url": baseUrl,
  "logo": `${baseUrl}/lovable-uploads/yoga-hero.jpg`,
  "description": "Authentic yoga retreats in Bali's sacred locations - Ubud, Uluwatu, and Canggu. Transform your life through traditional Balinese wisdom and modern wellness practices.",
  "foundingDate": "2018",
  "founders": [
    {
      "@type": "Person",
      "name": "Made Surya",
      "jobTitle": "Founder & Lead Instructor"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sacred Valley",
    "addressLocality": "Ubud",
    "addressRegion": "Bali",
    "postalCode": "80571",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-361-123-456",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Indonesian"]
  },
  "sameAs": [
    "https://instagram.com/balinatureyoga",
    "https://facebook.com/balinatureyoga"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "675",
    "highPrice": "3575",
    "offerCount": "27"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bali Nature Yoga Retreats",
  "url": baseUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};
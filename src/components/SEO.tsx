import { Helmet } from 'react-helmet-async';
import { useSEO } from '@/hooks/useSEO';
import type { SEOData } from '@/types/seo';

interface SEOProps {
  data?: Partial<SEOData>;
  pageKey?: string;
}

export const SEO: React.FC<SEOProps> = ({ data, pageKey }) => {
  const defaultSEO = useSEO(pageKey);
  
  // Merge default SEO with provided data
  const seoData = data ? { ...defaultSEO, ...data } : defaultSEO;
  
  if (!seoData) return null;

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      {seoData.keywords && (
        <meta name="keywords" content={seoData.keywords.join(', ')} />
      )}
      {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={seoData.openGraph.title} />
      <meta property="og:description" content={seoData.openGraph.description} />
      <meta property="og:image" content={seoData.openGraph.image} />
      <meta property="og:image:alt" content={seoData.openGraph.imageAlt} />
      <meta property="og:type" content={seoData.openGraph.type} />
      <meta property="og:locale" content={seoData.openGraph.locale} />
      <meta property="og:url" content={seoData.canonical || window.location.href} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={seoData.twitter.card} />
      <meta name="twitter:title" content={seoData.twitter.title} />
      <meta name="twitter:description" content={seoData.twitter.description} />
      <meta name="twitter:image" content={seoData.twitter.image} />
      
      {/* Schema.org structured data */}
      {seoData.schema && seoData.schema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      {/* Performance and technical meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};

export default SEO;
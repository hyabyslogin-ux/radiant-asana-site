import { websiteSchema } from '@/data/seoData';

export const WebSiteSchema: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema)
      }}
    />
  );
};

export default WebSiteSchema;
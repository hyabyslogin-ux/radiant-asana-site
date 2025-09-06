import { organizationSchema } from '@/data/seoData';

export const OrganizationSchema: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema)
      }}
    />
  );
};

export default OrganizationSchema;
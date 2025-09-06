import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';

interface BreadcrumbItem {
  name: string;
  path: string;
}

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  
  const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', path: '/' }
    ];
    
    // Route name mappings
    const routeNames: Record<string, string> = {
      'about-us': 'About Us',
      'contact-us': 'Contact Us',
      '3-days-retreat': '3 Days Retreat',
      '4-days-retreat': '4 Days Retreat',
      '5-days-retreat': '5 Days Retreat',
      '6-days-retreat': '6 Days Retreat',
      '7-days-retreat': '7 Days Retreat',
      '8-days-retreat': '8 Days Retreat',
      '9-days-retreat': '9 Days Retreat',
      '10-days-retreat': '10 Days Retreat',
      '11-days-retreat': '11 Days Retreat',
      'ubud-3-days-retreat': 'Ubud 3 Days Retreat',
      'uluwatu-3-days-retreat': 'Uluwatu 3 Days Retreat',
      'canggu-3-days-retreat': 'Canggu 3 Days Retreat',
      'canggu-7-days-retreat': 'Canggu 7 Days Retreat'
    };
    
    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const name = routeNames[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      breadcrumbs.push({ name, path: currentPath });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = getBreadcrumbs(location.pathname);
  
  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) return null;
  
  const schemaItems = breadcrumbs.map(item => ({
    name: item.name,
    url: `https://balinatureyogaretreats.com${item.path}`
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="py-4 px-6 bg-background/80 backdrop-blur-sm">
        <ol className="flex items-center space-x-2 text-sm max-w-7xl mx-auto">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium flex items-center">
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors flex items-center",
                    "hover:underline underline-offset-2"
                  )}
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
import { useEffect } from 'react';

export const CriticalCSS: React.FC = () => {
  useEffect(() => {
    // Load non-critical CSS asynchronously
    const loadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    };

    // Load any additional CSS files that aren't critical
    // This would be used for loading fonts or other non-critical styles
    
  }, []);

  return null;
};

export default CriticalCSS;
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect } from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [{ label: 'Úvod', href: '/' }, ...items];

  useEffect(() => {
    // Generate Schema.org BreadcrumbList
    const scriptId = 'breadcrumbs-schema-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const breadcrumbListSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": fullItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        ...(item.href ? { "item": `https://zfpjagos.cz${item.href === '/' ? '' : item.href}` } : {})
      }))
    };

    scriptElement.textContent = JSON.stringify(breadcrumbListSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [items]);

  return (
    <nav aria-label="Drobečková navigace" className={`py-4 ${className}`}>
      <ol className="flex flex-wrap items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-slate-500">
        {fullItems.map((item, idx) => {
          const isLast = idx === fullItems.length - 1;
          const isFirst = idx === 0;

          return (
            <li key={idx} className="flex items-center space-x-1.5 sm:space-x-2">
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />}
              {isLast || !item.href ? (
                <span className="font-semibold text-slate-900 line-clamp-1 max-w-[200px] sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-brand-600 transition-colors flex items-center gap-1 font-medium"
                >
                  {isFirst && <Home className="w-3.5 h-3.5 text-slate-400 mr-0.5" aria-hidden="true" />}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

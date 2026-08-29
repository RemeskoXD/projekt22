import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const DEFAULT_TITLE = 'ZFP Jagoš & Cábovi | Komplexní finanční plánování, hypotéky a investice';
const DEFAULT_DESCRIPTION = 'Profesionální finanční poradenství, hypotéky, správa investic a ochrana příjmů pod vedením Bc. Jaroslava Jagoše. ZFP Jagoš & Cábovi – člen ZFP Group.';
const DEFAULT_IMAGE = '/spolecna-2-scaled.webp';
const BASE_URL = 'https://zfpjagos.cz';

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
  noindex = false,
}: SEOProps) {
  const location = useLocation();
  const currentUrl = canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}${location.pathname}`;
  const fullTitle = title ? `${title} | ZFP Jagoš & Cábovi` : DEFAULT_TITLE;
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  useEffect(() => {
    // 1. Document Title
    document.title = fullTitle;

    // Helper to set or create meta tags
    const setMetaTag = (nameAttr: string, nameValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper for link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // 3. Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:site_name', 'ZFP Jagoš & Cábovi');
    setMetaTag('property', 'og:locale', 'cs_CZ');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 5. Canonical Link
    setLinkTag('canonical', currentUrl);

    // 6. JSON-LD Structured Data
    const scriptId = 'json-ld-structured-data';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      // Cleanup custom JSON-LD on unmount
      const el = document.getElementById(scriptId);
      if (el) {
        el.remove();
      }
    };
  }, [fullTitle, description, currentUrl, fullImageUrl, type, schema, noindex]);

  return null;
}

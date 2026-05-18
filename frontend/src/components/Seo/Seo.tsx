import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
};

const SITE_NAME = 'OLATU';
const DEFAULT_IMAGE = '/images/social-media.jpg?v=20260518';
const DEFAULT_IMAGE_WIDTH = '1200';
const DEFAULT_IMAGE_HEIGHT = '630';

const ensureMetaTag = (selector: string, attrName: 'name' | 'property', attrValue: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const ensureCanonicalLink = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
};

const toAbsoluteUrl = (value: string, baseUrl: string) => {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  if (value.startsWith('/')) {
    return `${baseUrl}${value}`;
  }

  return `${baseUrl}/${value}`;
};

const Seo = ({ title, description, image = DEFAULT_IMAGE, type = 'website' }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const envBaseUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '');
    const baseUrl = envBaseUrl || window.location.origin;
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${baseUrl}${location.pathname}`;
    const ogImage = toAbsoluteUrl(image, baseUrl);

    document.title = fullTitle;

    ensureMetaTag('meta[name="description"]', 'name', 'description', description);

    ensureMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    ensureMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    ensureMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    ensureMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    ensureMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    ensureMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);

    if (image === DEFAULT_IMAGE || !image) {
      ensureMetaTag('meta[property="og:image:width"]', 'property', 'og:image:width', DEFAULT_IMAGE_WIDTH);
      ensureMetaTag('meta[property="og:image:height"]', 'property', 'og:image:height', DEFAULT_IMAGE_HEIGHT);
    }

    ensureMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    ensureMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    ensureMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    ensureMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    ensureCanonicalLink(canonicalUrl);
  }, [description, image, location.pathname, title, type]);

  return null;
};

export default Seo;
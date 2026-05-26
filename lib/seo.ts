import type { Metadata } from 'next';
import { siteConfig } from './site.config';

interface SeoInput {
  title: string;
  description: string;
  /** Path relative to site root, e.g. `/services` or `/blog/some-slug`. */
  path?: string;
  /** Absolute or root-relative path to the share image (1200x630 recommended). */
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * Build a consistent Metadata object for any page.
 *
 * - Canonical URL is always set (prevents duplicate-content issues with query strings).
 * - Open Graph, Twitter Card, robots and metadataBase are filled in.
 * - Pass `noIndex: true` for thank-you/redirect-style pages.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  image = '/og-default.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords,
  noIndex = false
}: SeoInput): Metadata {
  // Honour NEXT_PUBLIC_SITE_URL for preview deploys; fall back to canonical site URL.
  const rootUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || siteConfig.url;
  const url = path === '/' ? rootUrl : `${rootUrl}${path}`;
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  const ogImages = [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: title
    }
  ];

  const metadata: Metadata = {
    title: fullTitle,
    description,
    metadataBase: new URL(rootUrl),
    alternates: { canonical: url },
    keywords,
    authors: author ? [{ name: author }] : undefined,
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1
          }
        },
    openGraph:
      type === 'article'
        ? {
            type: 'article',
            title: fullTitle,
            description,
            url,
            siteName: siteConfig.name,
            locale: 'en_AU',
            images: ogImages,
            ...(publishedTime ? { publishedTime } : {}),
            ...(modifiedTime ? { modifiedTime } : {}),
            ...(author ? { authors: [author] } : {})
          }
        : {
            type: 'website',
            title: fullTitle,
            description,
            url,
            siteName: siteConfig.name,
            locale: 'en_AU',
            images: ogImages
          },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image]
    }
  };

  return metadata;
}

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site.config';
import { posts } from '@/content/posts';
import { faqs } from '@/content/faqs';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteConfig.url}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteConfig.url}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 }
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  // FAQ page anchors don't need their own sitemap entries; the page itself ranks.
  // Reference faqs to confirm they're built into the site (avoid unused import).
  void faqs;

  return [...staticRoutes, ...blogRoutes];
}

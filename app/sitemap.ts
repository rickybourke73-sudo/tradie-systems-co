import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site.config';
import { client, ALL_SLUGS_QUERY } from '@/lib/sanity';

type SitemapSlug = {
  slug: string;
  publishedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteConfig.url}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteConfig.url}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 }
  ];

  const slugs: SitemapSlug[] = await client.fetch(ALL_SLUGS_QUERY).catch(() => []);

  const blogRoutes: MetadataRoute.Sitemap = slugs.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...staticRoutes, ...blogRoutes];
}
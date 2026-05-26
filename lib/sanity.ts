import { createClient, type SanityClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'replace-me';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-09-01';

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published'
});

const builder = imageUrlBuilder(client);
export const urlForImage = (source: SanityImageSource) => builder.image(source);

/* ---------- GROQ queries ---------- */

export const POSTS_QUERY = /* groq */ `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "category": category->{ title, "slug": slug.current },
    publishedAt,
    "coverImage": coverImage,
    "author": author->{ name, "image": image }
  }
`;

export const POST_BY_SLUG_QUERY = /* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    seo,
    publishedAt,
    "category": category->{ title, "slug": slug.current },
    "coverImage": coverImage,
    "author": author->{ name, role, "image": image, bio },
    "related": *[_type == "post" && slug.current != $slug && category._ref == ^.category._ref][0...3] {
      title, "slug": slug.current, excerpt, publishedAt
    }
  }
`;

export const FAQS_QUERY = /* groq */ `
  *[_type == "faq"] | order(order asc) {
    _id, question, answer, "category": category
  }
`;

export const SERVICES_QUERY = /* groq */ `
  *[_type == "service"] | order(order asc) {
    _id, title, "slug": slug.current, summary, body, icon, outcomes, seo
  }
`;

export const SETTINGS_QUERY = /* groq */ `
  *[_type == "siteSettings"][0] {
    headline, subheadline, ctaPrimary, ctaSecondary, bookingUrl
  }
`;

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
  useCdn: false,
  perspective: 'published'
});

const builder = imageUrlBuilder(client);
export const urlForImage = (source: SanityImageSource) => builder.image(source);

export const POSTS_QUERY = /* groq */ `
  *[
    _type == "post"
    && defined(slug.current)
    && defined(publishedAt)
    && slug.current != "test-sanity-blog-post"
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "category": coalesce(category->title, category),
    publishedAt,
    "coverImage": coverImage,
    "author": coalesce(author->name, author)
  }
`;

export const POST_BY_SLUG_QUERY = /* groq */ `
  *[
    _type == "post"
    && slug.current == $slug
    && defined(publishedAt)
    && slug.current != "test-sanity-blog-post"
  ][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    seo,
    publishedAt,
    "category": coalesce(category->title, category),
    "coverImage": coverImage,
    "author": coalesce(author->name, author),
    "authorDetails": author->{ name, role, "image": image, bio },
    "related": *[
      _type == "post"
      && slug.current != $slug
      && defined(slug.current)
      && defined(publishedAt)
      && slug.current != "test-sanity-blog-post"
      && (
        category._ref == ^.category._ref
        || coalesce(category->title, category) == coalesce(^.category->title, ^.category)
      )
    ][0...3] {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "category": coalesce(category->title, category)
    }
  }
`;

export const ALL_SLUGS_QUERY = /* groq */ `
  *[
    _type == "post"
    && defined(slug.current)
    && defined(publishedAt)
    && slug.current != "test-sanity-blog-post"
  ] {
    "slug": slug.current,
    publishedAt
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
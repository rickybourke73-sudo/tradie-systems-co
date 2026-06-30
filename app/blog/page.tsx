import Link from 'next/link';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { formatDate, cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site.config';
import { client, POSTS_QUERY } from '@/lib/sanity';

export const revalidate = 60;

export const metadata = buildMetadata({
  title: 'Quote Follow-Up Guides for Australian Tradies',
  description:
    'Practical quote follow-up guides for Australian tradies. Learn when to follow up, what to say, whether to call, text or email, and how to recover cold quotes.',
  path: '/blog'
});

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  publishedAt: string;
  coverImage?: unknown;
  author?: string;
};

function estimateReadingMinutes(post: SanityPost): number {
  const words = (post.excerpt ?? '').split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200) + 3);
}

function deriveCategories(posts: SanityPost[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const p of posts) {
    if (p.category && !seen.has(p.category)) {
      seen.add(p.category);
      result.push(p.category);
    }
  }

  return result;
}

type PageProps = {
  searchParams?: { category?: string };
};

export default async function BlogIndexPage({ searchParams }: PageProps) {
  const sanityPosts: SanityPost[] = await client.fetch(POSTS_QUERY).catch(() => []);

  const posts = sanityPosts.filter((p) => p.title && p.slug && p.publishedAt);

  const categories = deriveCategories(posts);

  const activeCategory = (searchParams?.category ?? '').trim();
  const isFiltered = activeCategory.length > 0 && categories.includes(activeCategory);

  const filteredPosts = isFiltered
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  const featured = filteredPosts.slice(0, 3);
  const rest = filteredPosts.slice(3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Blog', url: `${siteConfig.url}/blog` }
        ])}
      />

      <Section size="lg" className="pt-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Quote follow-up guides</p>
          <h1 className="text-balance font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Practical quote follow-up advice for Australian tradies.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
            Learn when to follow up, what to say, whether to call, text or email, and how to stop
            quoted jobs from quietly going cold after the quote is sent.
          </p>
        </div>

        <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
          <Link
            href="/services"
            className="rounded-xl border border-white/5 bg-ink-900/40 p-4 text-sm text-bone-200 transition-colors hover:border-signal-500/30 hover:bg-ink-900/70 hover:text-bone-50"
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
              Start here
            </span>
            <span className="mt-2 block">Book a free quote follow-up audit</span>
          </Link>
          <Link
            href="/faqs"
            className="rounded-xl border border-white/5 bg-ink-900/40 p-4 text-sm text-bone-200 transition-colors hover:border-signal-500/30 hover:bg-ink-900/70 hover:text-bone-50"
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
              Questions
            </span>
            <span className="mt-2 block">Read common quote follow-up FAQs</span>
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-white/5 bg-ink-900/40 p-4 text-sm text-bone-200 transition-colors hover:border-signal-500/30 hover:bg-ink-900/70 hover:text-bone-50"
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
              Need help?
            </span>
            <span className="mt-2 block">Talk through your current process</span>
          </Link>
        </div>

        {categories.length > 0 && (
          <nav aria-label="Filter by category" className="mt-10 sm:mt-12">
            <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <li className="shrink-0">
                <Link
                  href="/blog"
                  className={cn(
                    'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60',
                    !isFiltered
                      ? 'bg-signal-500 text-ink-950 hover:bg-signal-400'
                      : 'border border-white/10 bg-ink-900/60 text-bone-200 hover:border-signal-500/40 hover:text-signal-400'
                  )}
                  aria-current={!isFiltered ? 'page' : undefined}
                >
                  All posts
                </Link>
              </li>
              {categories.map((c) => {
                const active = activeCategory === c;

                return (
                  <li key={c} className="shrink-0">
                    <Link
                      href={`/blog?category=${encodeURIComponent(c)}`}
                      className={cn(
                        'inline-flex items-center rounded-full px-4 py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60',
                        active
                          ? 'bg-signal-500 font-medium text-ink-950 hover:bg-signal-400'
                          : 'border border-white/10 bg-ink-900/60 text-bone-200 hover:border-signal-500/40 hover:text-signal-400'
                      )}
                      aria-current={active ? 'page' : undefined}
                    >
                      {c}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </Section>

      {featured.length > 0 && (
        <Section size="sm">
          <SectionHeader
            eyebrow={isFiltered ? activeCategory : 'Featured'}
            title={
              isFiltered
                ? `${filteredPosts.length} ${filteredPosts.length === 1 ? 'post' : 'posts'} in ${activeCategory}`
                : 'Start with these quote follow-up guides.'
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((post) => (
              <FeaturedCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      )}

      {rest.length > 0 ? (
        <Section>
          <SectionHeader eyebrow="All posts" title="More quote follow-up articles." />
          <ul className="mt-8 divide-y divide-white/5 border-y border-white/5">
            {rest.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="-mx-2 grid items-baseline gap-3 rounded-lg px-2 py-6 transition-colors duration-200 hover:bg-ink-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 sm:gap-6 md:grid-cols-[auto,1fr,auto] md:gap-8 md:py-7"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500 md:w-32">
                    {formatDate(post.publishedAt)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-balance font-display text-xl font-semibold leading-snug text-bone-50 transition-colors duration-200 group-hover:text-signal-400 md:text-2xl">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-2 line-clamp-2 text-sm text-bone-300 sm:text-base">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-bone-400">
                      {post.category && (
                        <>
                          <span className="text-signal-400">{post.category}</span>
                          <span aria-hidden="true">·</span>
                        </>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3 w-3" aria-hidden="true" />
                        {estimateReadingMinutes(post)} min read
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="hidden text-bone-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-400 md:block"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : isFiltered && featured.length === 0 ? (
        <Section size="sm">
          <div className="card p-8 text-center md:p-12">
            <h2 className="font-display text-2xl text-bone-50">No posts here yet.</h2>
            <p className="mx-auto mt-3 max-w-md text-bone-300">
              We have not published anything in <strong>{activeCategory}</strong> yet. Check back
              soon or browse all our writing.
            </p>
            <div className="mt-6">
              <Link href="/blog" className="btn btn-primary">
                Browse all posts
              </Link>
            </div>
          </div>
        </Section>
      ) : null}

      {posts.length === 0 && (
        <Section size="sm">
          <div className="card p-8 text-center md:p-12">
            <h2 className="font-display text-2xl text-bone-50">No posts published yet.</h2>
            <p className="mx-auto mt-3 max-w-md text-bone-300">
              Check back soon — we are working on it.
            </p>
          </div>
        </Section>
      )}
    </>
  );
}

function FeaturedCard({ post }: { post: SanityPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-xl border border-white/5 bg-ink-900/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-signal-500/30 hover:bg-ink-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 sm:p-7"
    >
      {post.category && (
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
          {post.category}
        </div>
      )}
      <h3 className="text-balance font-display text-xl font-semibold leading-snug text-bone-50 transition-colors duration-200 group-hover:text-signal-300 md:text-2xl">
        {post.title}
      </h3>
      {post.excerpt && (
        <p className="mt-4 line-clamp-3 flex-grow text-sm leading-relaxed text-bone-300">
          {post.excerpt}
        </p>
      )}
      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-bone-400">
        <span>{formatDate(post.publishedAt)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock3 className="h-3 w-3" aria-hidden="true" />
          {estimateReadingMinutes(post)} min
        </span>
      </div>
    </Link>
  );
}
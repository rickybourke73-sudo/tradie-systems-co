import Link from 'next/link';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { posts, categories, featuredSlugs } from '@/content/posts';
import { formatDate, cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site.config';

export const metadata = buildMetadata({
  title: 'Quote Follow-Up & Lead Recovery — Insights for Australian Tradies',
  description:
    'Practical guides on quote follow-up, customer communication, lead recovery, and quote conversion — written for Australian tradies, no jargon.',
  path: '/blog'
});

type PageProps = {
  searchParams?: { category?: string };
};

export default function BlogIndexPage({ searchParams }: PageProps) {
  const activeCategory = (searchParams?.category ?? '').trim();
  const isFiltered =
  activeCategory.length > 0 &&
  categories.includes(activeCategory as (typeof categories)[number]);

  // Apply filter
  const filteredPosts = isFiltered
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  const featured = isFiltered
    ? filteredPosts.slice(0, 3)
    : featuredSlugs.map((s) => posts.find((p) => p.slug === s)).filter((p): p is (typeof posts)[number] => Boolean(p));

  const rest = isFiltered
    ? filteredPosts.slice(featured.length)
    : posts.filter((p) => !featuredSlugs.includes(p.slug));

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
          <p className="eyebrow mb-5">The Field Notes</p>
          <h1 className="text-balance font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Practical writing on follow-up, lead recovery, and quote conversion.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
            Built for Australian tradies who want to win more jobs without spending more on
            advertising. Honest, specific, no jargon.
          </p>
        </div>

        {/* Category filter chips */}
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
      </Section>

      {/* Featured row — only on the unfiltered index, or as the lead row when filtering */}
      {featured.length > 0 && (
        <Section size="sm">
          <SectionHeader
            eyebrow={isFiltered ? activeCategory : 'Featured'}
            title={isFiltered ? `${filteredPosts.length} ${filteredPosts.length === 1 ? 'post' : 'posts'} in ${activeCategory}` : 'Start here.'}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((post) => (
              <FeaturedCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      )}

      {/* Archive */}
      {rest.length > 0 ? (
        <Section>
          <SectionHeader eyebrow="All posts" title="The archive." />
          <ul className="mt-8 divide-y divide-white/5 border-y border-white/5">
            {rest.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid items-baseline gap-3 py-6 transition-colors duration-200 hover:bg-ink-900/40 sm:gap-6 md:grid-cols-[auto,1fr,auto] md:gap-8 md:py-7 -mx-2 px-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500 md:w-32">
                    {formatDate(post.publishedAt)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-balance font-display text-xl font-semibold leading-snug text-bone-50 transition-colors duration-200 group-hover:text-signal-400 md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-bone-300 sm:text-base">{post.excerpt}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-bone-400">
                      <span className="text-signal-400">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3 w-3" aria-hidden="true" />
                        {post.readingMinutes} min read
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
              We haven’t published anything in <strong>{activeCategory}</strong> yet. Check back soon —
              or browse all our writing.
            </p>
            <div className="mt-6">
              <Link href="/blog" className="btn btn-primary">
                Browse all posts
              </Link>
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}

function FeaturedCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-xl border border-white/5 bg-ink-900/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-signal-500/30 hover:bg-ink-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 sm:p-7"
    >
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
        {post.category}
      </div>
      <h3 className="text-balance font-display text-xl font-semibold leading-snug text-bone-50 transition-colors duration-200 group-hover:text-signal-300 md:text-2xl">
        {post.title}
      </h3>
      <p className="mt-4 line-clamp-3 flex-grow text-sm leading-relaxed text-bone-300">
        {post.excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-bone-400">
        <span>{formatDate(post.publishedAt)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock3 className="h-3 w-3" aria-hidden="true" />
          {post.readingMinutes} min
        </span>
      </div>
    </Link>
  );
}

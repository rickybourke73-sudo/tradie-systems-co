import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, articleSchema, breadcrumbSchema } from '@/lib/schema';
import { posts } from '@/content/posts';
import { formatDate } from '@/lib/utils';
import { siteConfig } from '@/lib/site.config';
import { FinalCta } from '@/components/sections/FinalCta';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // Prefer same-category posts. Top up with recent posts if fewer than 3.
  const sameCategory = posts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const otherRecent = posts
    .filter((p) => p.slug !== post.slug && p.category !== post.category)
    .slice(0, 3);
  const related = [...sameCategory, ...otherRecent].slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription ?? post.excerpt,
          slug: post.slug,
          publishedAt: post.publishedAt,
          author: post.author
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Blog', url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` }
        ])}
      />

      <Section size="lg" className="pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-bone-400 transition-colors duration-200 hover:text-signal-400 focus-visible:outline-none focus-visible:text-signal-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All posts
          </Link>

          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
            {post.category}
          </div>

          <h1 className="text-balance font-display text-[2rem] leading-[1.1] tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/5 pb-8 text-sm text-bone-400">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingMinutes} min read
            </span>
          </div>

          <article className="prose-tradie mt-10">
            {post.body ? (
              <RenderMarkdown body={post.body} />
            ) : (
              <p className="text-lg italic text-bone-300">
                Full article coming soon. In the meantime,{' '}
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-signal-400 underline-offset-4 hover:underline"
                >
                  book a strategy call
                </a>{' '}
                to talk through how this applies to your business.
              </p>
            )}
          </article>

          <aside
            aria-label="Call to action"
            className="mt-14 rounded-2xl border border-signal-500/30 bg-gradient-to-br from-signal-500/[0.08] to-transparent p-6 sm:p-7"
          >
            <h2 className="font-display text-xl font-semibold text-bone-50 sm:text-2xl">
              Want this set up for your business?
            </h2>
            <p className="mt-2 text-bone-300">
              We build done-for-you quote follow-up systems for Australian tradies. Free 30-minute
              audit, no pitch.
            </p>
            <div className="mt-5">
              <Button href={siteConfig.bookingUrl} external variant="primary" arrow>
                Book a free strategy call
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="border-y border-white/5 bg-ink-900/30">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 font-display text-2xl tracking-tight text-bone-50 sm:mb-10 md:text-3xl">
              Keep reading
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-white/5 bg-ink-900/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-signal-500/30 hover:bg-ink-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60"
                >
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
                    {p.category}
                  </div>
                  <h3 className="text-balance font-display text-lg font-semibold leading-snug text-bone-50 transition-colors duration-200 group-hover:text-signal-300">
                    {p.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm text-bone-400 transition-colors duration-200 group-hover:text-signal-400">
                    Read post
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      <FinalCta />
    </>
  );
}

/**
 * Lightweight markdown renderer for static posts in /content/posts.ts.
 * Production posts will go through Sanity's PortableText — see lib/sanity.ts.
 *
 * Escapes HTML on the way in, then re-applies a narrow allowlist of inline
 * formatting (bold, italic, inline code) — so post bodies can never inject HTML.
 */
function RenderMarkdown({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/);
  return (
    <div className="space-y-6 text-[1.05rem] leading-relaxed text-bone-200 sm:text-lg">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={i}
              className="pt-4 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={i}
              className="pt-2 font-display text-xl font-semibold tracking-tight text-bone-50 md:text-2xl"
            >
              {trimmed.slice(4)}
            </h3>
          );
        }
        if (trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').map((l) => l.replace(/^-\s*/, ''));
          return (
            <ul key={i} className="list-outside list-disc space-y-2 pl-6 marker:text-signal-500">
              {items.map((item, j) => (
                <li
                  key={j}
                  dangerouslySetInnerHTML={{ __html: parseInline(item) }}
                />
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed
            .split('\n')
            .map((l) => l.replace(/^\d+\.\s*/, ''))
            .filter(Boolean);
          return (
            <ol key={i} className="list-outside list-decimal space-y-2 pl-6 marker:text-signal-500">
              {items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
              ))}
            </ol>
          );
        }
        if (trimmed.startsWith('> ')) {
          const lines = trimmed.split('\n').map((l) => l.replace(/^>\s?/, ''));
          return (
            <blockquote
              key={i}
              className="border-l-2 border-signal-500 pl-5 py-1 font-display text-lg italic text-bone-100"
            >
              {lines.map((l, j) => (
                <p key={j} className="my-1" dangerouslySetInnerHTML={{ __html: parseInline(l) }} />
              ))}
            </blockquote>
          );
        }
        return <p key={i} dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }} />;
      })}
    </div>
  );
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseInline(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-bone-50 font-semibold">$1</strong>')
    .replace(/(^|\s)\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code class="rounded bg-ink-800 px-1.5 py-0.5 font-mono text-[0.9em] text-signal-300">$1</code>');
}

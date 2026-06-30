import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, articleSchema, breadcrumbSchema } from '@/lib/schema';
import { client, POST_BY_SLUG_QUERY, ALL_SLUGS_QUERY } from '@/lib/sanity';
import { formatDate } from '@/lib/utils';
import { siteConfig } from '@/lib/site.config';
import { FinalCta } from '@/components/sections/FinalCta';

export const revalidate = 60;

type PortableTextBlock = {
  _type: string;
  _key?: string;
  style?: string;
  children?: Array<{ _type: string; text?: string; marks?: string[] }>;
  markDefs?: Array<{ _key: string; _type: string; href?: string }>;
  listItem?: string;
  level?: number;
};

type SanityFullPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  body?: PortableTextBlock[] | string;
  seo?: { metaTitle?: string; metaDescription?: string };
  publishedAt: string;
  category?: string;
  coverImage?: unknown;
  author?: string;
  authorDetails?: { name?: string; role?: string; bio?: string };
  related?: Array<{
    title: string;
    slug: string;
    excerpt?: string;
    publishedAt: string;
    category?: string;
  }>;
};

export async function generateStaticParams() {
  const slugs: Array<{ slug: string }> = await client.fetch(ALL_SLUGS_QUERY).catch(() => []);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post: SanityFullPost | null = await client
    .fetch(POST_BY_SLUG_QUERY, { slug: params.slug })
    .catch(() => null);

  if (!post) return {};

  return buildMetadata({
    title: post.seo?.metaTitle ?? post.title,
    description: post.seo?.metaDescription ?? post.excerpt ?? '',
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: SanityFullPost | null = await client
    .fetch(POST_BY_SLUG_QUERY, { slug: params.slug })
    .catch(() => null);

  if (!post) {
    notFound();
    return null;
  }

  let authorName = 'Ricky Bourke';

  if (post.authorDetails?.name) {
    authorName = post.authorDetails.name;
  } else if (typeof post.author === 'string' && post.author) {
    authorName = post.author;
  }

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.seo?.metaDescription ?? post.excerpt ?? '',
          slug: post.slug,
          publishedAt: post.publishedAt,
          author: authorName
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

          {post.category && (
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
              {post.category}
            </div>
          )}

          <h1 className="text-balance font-display text-[2rem] leading-[1.1] tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/5 pb-8 text-sm text-bone-400">
            <span>{authorName}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              {estimateReadingMinutes(post.body)} min read
            </span>
          </div>

          <article className="prose-tradie mt-10">
            {post.body ? (
              <RenderBody body={post.body} />
            ) : (
              <p className="text-lg italic text-bone-300">
                Full article coming soon. In the meantime,{' '}
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-signal-400 underline-offset-4 hover:underline"
                >
                  book a free quote follow-up audit
                </a>{' '}
                to talk through how this applies to your business.
              </p>
            )}
          </article>

          <aside
            aria-label="Useful next steps"
            className="mt-14 rounded-2xl border border-white/10 bg-ink-900/50 p-6 sm:p-7"
          >
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
              Useful next steps
            </div>
            <h2 className="font-display text-xl font-semibold text-bone-50 sm:text-2xl">
              Want to improve how your quotes are followed up?
            </h2>
            <p className="mt-2 text-bone-300">
              Learn what we set up, read the common questions, or send us a message about your
              current follow-up process.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { href: '/services', title: 'View services', sub: 'See the audit and next steps' },
                { href: '/faqs', title: 'Read FAQs', sub: 'Setup, cost, tools, timing' },
                { href: '/contact', title: 'Contact us', sub: 'Ask about your business' }
              ].map(({ href, title, sub }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-xl border border-white/10 bg-ink-950/40 p-4 transition-all duration-200 hover:border-signal-500/40 hover:bg-ink-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60"
                >
                  <span className="block font-display text-base font-semibold text-bone-50">
                    {title}
                  </span>
                  <span className="mt-1 block text-sm text-bone-400 group-hover:text-bone-300">
                    {sub}
                  </span>
                </Link>
              ))}
            </div>
          </aside>

          <aside
            aria-label="Call to action"
            className="mt-8 rounded-2xl border border-signal-500/30 bg-gradient-to-br from-signal-500/[0.08] to-transparent p-6 sm:p-7"
          >
            <h2 className="font-display text-xl font-semibold text-bone-50 sm:text-2xl">
              Want to find the gaps in your follow-up?
            </h2>
            <p className="mt-2 text-bone-300">
              Book a free quote follow-up audit for your trade business. We will review what happens after you send a quote and show where jobs may be slipping through the cracks.
            </p>
            <div className="mt-5">
              <Button href={siteConfig.bookingUrl} external variant="primary" arrow>
                Book a Free Audit
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {post.related && post.related.length > 0 && (
        <Section className="border-y border-white/5 bg-ink-900/30">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 font-display text-2xl tracking-tight text-bone-50 sm:mb-10 md:text-3xl">
              Keep reading
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {post.related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-white/5 bg-ink-900/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-signal-500/30 hover:bg-ink-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60"
                >
                  {p.category && (
                    <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
                      {p.category}
                    </div>
                  )}
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

function estimateReadingMinutes(body: PortableTextBlock[] | string | undefined): number {
  if (!body) return 4;

  if (typeof body === 'string') {
    return Math.max(1, Math.ceil(body.split(/\s+/).length / 200));
  }

  const wordCount = body.reduce((acc, block) => {
    return (
      acc +
      (block.children ?? []).reduce((a, span) => {
        return a + (span.text ?? '').split(/\s+/).filter(Boolean).length;
      }, 0)
    );
  }, 0);

  return Math.max(1, Math.ceil(wordCount / 200));
}

function RenderBody({ body }: { body: PortableTextBlock[] | string }) {
  if (typeof body === 'string') {
    return <RenderMarkdown body={body} />;
  }

  return (
    <div className="space-y-6 text-[1.05rem] leading-relaxed text-bone-200 sm:text-lg">
      {body.map((block, i) => {
        if (block._type !== 'block') return null;

        const text = renderSpans(block);

        if (block.listItem === 'bullet') {
          return (
            <ul
              key={block._key ?? i}
              className="list-outside list-disc space-y-2 pl-6 marker:text-signal-500"
            >
              <li dangerouslySetInnerHTML={{ __html: text }} />
            </ul>
          );
        }

        if (block.listItem === 'number') {
          return (
            <ol
              key={block._key ?? i}
              className="list-outside list-decimal space-y-2 pl-6 marker:text-signal-500"
            >
              <li dangerouslySetInnerHTML={{ __html: text }} />
            </ol>
          );
        }

        switch (block.style) {
          case 'h2':
            return (
              <h2
                key={block._key ?? i}
                className="pt-4 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            );

          case 'h3':
            return (
              <h3
                key={block._key ?? i}
                className="pt-2 font-display text-xl font-semibold tracking-tight text-bone-50 md:text-2xl"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            );

          case 'h4':
            return (
              <h4
                key={block._key ?? i}
                className="pt-2 font-display text-lg font-semibold tracking-tight text-bone-50"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            );

          case 'blockquote':
            return (
              <blockquote
                key={block._key ?? i}
                className="border-l-2 border-signal-500 py-1 pl-5 font-display text-lg italic text-bone-100"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            );

          default:
            if (!text.trim()) return null;

            return <p key={block._key ?? i} dangerouslySetInnerHTML={{ __html: text }} />;
        }
      })}
    </div>
  );
}

function renderSpans(block: PortableTextBlock): string {
  const markDefs = block.markDefs ?? [];

  return (block.children ?? [])
    .map((span) => {
      let html = escapeHtml(span.text ?? '');

      for (const mark of span.marks ?? []) {
        if (mark === 'strong') {
          html = `<strong class="text-bone-50 font-semibold">${html}</strong>`;
        } else if (mark === 'em') {
          html = `<em>${html}</em>`;
        } else if (mark === 'code') {
          html = `<code class="rounded bg-ink-800 px-1.5 py-0.5 font-mono text-[0.9em] text-signal-300">${html}</code>`;
        } else {
          const def = markDefs.find((d) => d._key === mark);

          if (def?._type === 'link' && def.href) {
            const isExternal = def.href.startsWith('http');
            html = `<a href="${escapeHtml(def.href)}"${
              isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
            } class="text-signal-400 underline underline-offset-4 hover:text-signal-300">${html}</a>`;
          }
        }
      }

      return html;
    })
    .join('');
}

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
                <li key={j} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
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
            <ol
              key={i}
              className="list-outside list-decimal space-y-2 pl-6 marker:text-signal-500"
            >
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
              className="border-l-2 border-signal-500 py-1 pl-5 font-display text-lg italic text-bone-100"
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
    .replace(
      /`([^`]+)`/g,
      '<code class="rounded bg-ink-800 px-1.5 py-0.5 font-mono text-[0.9em] text-signal-300">$1</code>'
    );
}


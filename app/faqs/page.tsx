import { Section } from '@/components/ui/Section';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { faqs } from '@/content/faqs';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { FinalCta } from '@/components/sections/FinalCta';
import { siteConfig } from '@/lib/site.config';

export const metadata = buildMetadata({
  title: 'FAQs — Free Quote Follow-Up Audit for Tradies',
  description:
    'Plain answers about free quote follow-up audits, quote follow-up systems, lead recovery, setup options, automation, AI, and what Australian tradies should expect.',
  path: '/faqs'
});

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function FaqsPage() {
  const groups = faqs.reduce<Record<string, typeof faqs>>((acc, f) => {
    (acc[f.category] ??= []).push(f);
    return acc;
  }, {});

  const cleanFaqs = faqs.map((f) => ({
    question: f.question.replace(/[‘’]/g, "'").replace(/[“”]/g, '"'),
    answer: f.answer.replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
  }));

  const categories = Object.keys(groups);

  return (
    <>
      <JsonLd data={faqSchema(cleanFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'FAQs', url: `${siteConfig.url}/faqs` }
        ])}
      />

      <Section size="lg" className="pt-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">FAQs</p>
          <h1 className="text-balance font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Questions tradies ask before booking a quote follow-up audit.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
            Plain answers about free quote follow-up audits, quote follow-up systems, lead recovery,
            setup options, automation, AI, and what to expect if you want help tightening up what
            happens after a quote is sent.
          </p>
        </div>
      </Section>

      <div className="sticky top-16 z-20 -mt-2 border-y border-white/5 bg-ink-950/85 backdrop-blur lg:hidden">
        <nav aria-label="FAQ categories" className="container-tight">
          <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <li key={cat} className="shrink-0">
                <a
                  href={`#${slugify(cat)}`}
                  className="inline-flex items-center rounded-full border border-white/10 bg-ink-900/60 px-3.5 py-1.5 text-sm text-bone-200 transition-colors duration-200 hover:border-signal-500/40 hover:text-signal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Section size="md">
        <div className="grid gap-10 lg:grid-cols-[240px,1fr] lg:gap-14">
          <aside className="hidden self-start lg:sticky lg:top-28 lg:block">
            <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-500">
              Categories
            </p>
            <ul className="space-y-1 border-l border-white/10">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href={`#${slugify(cat)}`}
                    className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-bone-300 transition-colors duration-200 hover:border-signal-500 hover:text-signal-400 focus-visible:border-signal-500 focus-visible:text-signal-400 focus-visible:outline-none"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-14 md:space-y-16">
            {Object.entries(groups).map(([cat, items]) => (
              <section key={cat} id={slugify(cat)} className="scroll-mt-32 lg:scroll-mt-28">
                <div className="mb-6 flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-2xl tracking-tight text-bone-50 md:text-3xl">
                    {cat}
                  </h2>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
                    {items.length} {items.length === 1 ? 'question' : 'questions'}
                  </p>
                </div>
                <FaqAccordion items={items} />
              </section>
            ))}
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
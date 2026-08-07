import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  Mail,
  MapPin,
  SearchCheck,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/ui/ContactForm';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Tradie Systems Co',
  description:
    'Request a free systems review for your trade business. Tell us where leads, quotes, bookings, invoices or admin tasks are slipping through the cracks.',
  path: '/contact'
});

const trustItems = [
  {
    icon: SearchCheck,
    title: 'A practical review',
    body:
      'We look at the problem you are trying to fix, what you are using now and where work is being missed or delayed.'
  },
  {
    icon: ShieldCheck,
    title: 'No pressure',
    body:
      'You will get a straightforward recommendation on what to fix first, whether that means a simple process change, better tools or automation.'
  },
  {
    icon: Wrench,
    title: 'Built for trade businesses',
    body:
      'The review is designed around the day-to-day realities of Australian tradies, not generic corporate systems.'
  }
];

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`
  },
  {
    icon: MapPin,
    label: 'Service area',
    value: siteConfig.business.serviceArea
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within 1 business day'
  }
];

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <Section size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" aria-hidden="true">
          <div className="absolute right-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-signal-500/10 blur-3xl" />
        </div>

        <div className="max-w-3xl">
          <p className="eyebrow mb-5">
            <span
              className="inline-flex h-1.5 w-1.5 rounded-full bg-signal-500"
              aria-hidden="true"
            />
            Free Systems Review
          </p>

          <h1 className="font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Find out where work is{' '}
            <span className="italic text-signal-500">
              slipping through the cracks
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-bone-300 md:text-xl">
            Tell us what is not working in your business. We will review your
            current process and show you what should be fixed first.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#systems-review" variant="primary" arrow>
              Request My Free Systems Review
            </Button>

            <Button href="/how-it-works" variant="ghost">
              See How It Works
            </Button>
          </div>
        </div>
      </Section>

      <Section size="lg" className="border-t border-white/5">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <h2 className="font-display text-2xl text-bone-50 md:text-3xl">
              Tell us what needs fixing
            </h2>

            <p className="mt-4 max-w-xl text-bone-300">
              You do not need to know what system or software you need. Just
              explain what is being forgotten, delayed, missed or handled
              manually.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                const content = (
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white/5 text-signal-500"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
                        {detail.label}
                      </p>

                      <p className="mt-1 break-words text-sm text-bone-200">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );

                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="block rounded-xl border border-white/5 bg-ink-900/40 p-4 transition-colors duration-200 hover:border-signal-500/30 hover:bg-ink-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="rounded-xl border border-white/5 bg-ink-900/40 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div id="systems-review" className="scroll-mt-28">
            <div className="card p-6 sm:p-8 md:p-9">
              <div className="mb-6">
                <h2 className="font-display text-2xl text-bone-50 md:text-3xl">
                  Request your free systems review
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-bone-400">
                  Share a few details about your business and the main problem
                  you want to solve. We will reply within one business day.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section size="md" className="border-t border-white/5">
        <SectionHeader
          eyebrow="What to expect"
          title="A clear recommendation on what should be fixed first."
        />

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="card p-6 transition-colors duration-200 hover:border-white/10"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-signal-500/10 text-signal-500"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mt-4 font-display text-xl text-bone-50">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-bone-400">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-signal-500/20 bg-gradient-to-br from-signal-500/[0.08] to-transparent p-7 sm:p-9 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl text-bone-50 md:text-3xl">
                Still working out what you need?
              </h3>

              <p className="mt-2 text-bone-300">
                Read how Tradie Systems Co approaches common lead, quote,
                booking, invoice and admin problems.
              </p>
            </div>

            <div className="flex w-full flex-wrap gap-3 md:w-auto">
              <Button
                href="/services"
                variant="primary"
                arrow
                className="w-full sm:w-auto"
              >
                View Services
              </Button>

              <Link href="/faqs" className="btn btn-ghost w-full sm:w-auto">
                See FAQs
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

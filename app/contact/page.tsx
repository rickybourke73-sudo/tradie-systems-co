import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Clock, ShieldCheck, CalendarClock, Wrench } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/ui/ContactForm';
import { BookingEmbed } from '@/components/ui/BookingEmbed';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Book a Free Quote Follow-Up Audit',
  description:
    'Talk to Tradie Systems Co about your quote follow-up. Book a free quote follow-up audit or send a message — we reply within one business day.',
  path: '/contact'
});

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'No pitch, no pressure',
    body: 'We’ll look at how your quotes get followed up today and tell you straight where jobs may be going cold.'
  },
  {
    icon: CalendarClock,
    title: '30-minute quote follow-up audit',
    body: 'Pick a time that suits — early mornings and after-hours slots for tradies on the tools.'
  },
  {
    icon: Wrench,
    title: 'Built for Australian tradies',
    body: 'Fencing, electrical, plumbing, landscaping, building, concreting, HVAC and more. We understand how quote-based trade work runs.'
  }
];

const contactDetails = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: 'Service area', value: siteConfig.business.serviceArea },
  { icon: Clock, label: 'Response time', value: 'Within 1 business day' }
];

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` }
  ]);

  const bookingUrl = siteConfig.bookingUrl;

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <Section size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" aria-hidden="true">
          <div className="absolute right-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-signal-500/10 blur-3xl" />
        </div>

        <div className="max-w-3xl">
          <p className="eyebrow mb-5">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-signal-500" aria-hidden="true" />
            Contact
          </p>
          <h1 className="font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Let’s look at where your quotes are{' '}
            <span className="italic text-signal-500">leaking jobs</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-bone-300 md:text-xl">
            Book a free 30-minute quote follow-up audit, or send a quick message. We’ll look at
            your current process, show you where follow-up may be breaking down, and explain what
            to do next.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={bookingUrl} variant="primary" arrow external>
              {siteConfig.bookingLabel}
            </Button>
            <Button href="#message" variant="ghost">
              Send a message instead
            </Button>
          </div>
        </div>
      </Section>

      {/* Booking + form, visually joined */}
      <Section size="lg" className="border-t border-white/5">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Booking column */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-signal-500/10 text-signal-500"
                aria-hidden="true"
              >
                <CalendarClock className="h-5 w-5" />
              </span>
              <h2 className="font-display text-2xl text-bone-50 md:text-3xl">
                Book a free quote follow-up audit
              </h2>
            </div>
            <p className="mb-6 max-w-xl text-bone-300">
              Pick a time that suits your day. We’ll review how your quotes are being followed up
              today, where jobs may be going cold, and whether the simplest fix is better templates,
              reminders, automation, or done-for-you implementation.
            </p>

            <BookingEmbed url={bookingUrl} providerLabel="our booking page" />

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contactDetails.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-white/5 text-signal-500"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
                        {c.label}
                      </p>
                      <p className="mt-1 break-words text-sm text-bone-200">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="rounded-xl border border-white/5 bg-ink-900/40 p-4 transition-colors duration-200 hover:border-signal-500/30 hover:bg-ink-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="rounded-xl border border-white/5 bg-ink-900/40 p-4">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form column */}
          <div id="message" className="lg:sticky lg:top-28 lg:self-start scroll-mt-28">
            <div className="card p-6 sm:p-8 md:p-9">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-signal-500/10 text-signal-500"
                  aria-hidden="true"
                >
                  <Mail className="h-5 w-5" />
                </span>
                <h2 className="font-display text-2xl text-bone-50">Prefer to send a message?</h2>
              </div>
              <p className="mb-6 text-sm text-bone-400">
                Tell us about your business and your follow-up situation. We’ll reply within one
                business day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Trust strip */}
      <Section size="md" className="border-t border-white/5">
        <SectionHeader
          eyebrow="Why an audit is worth your time"
          title="No fluff. No long pitch. Just a straight answer on your follow-up."
        />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card p-6 transition-colors duration-200 hover:border-white/10">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-signal-500/10 text-signal-500"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl text-bone-50">{item.title}</h3>
                <p className="mt-2 text-sm text-bone-400">{item.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-signal-500/20 bg-gradient-to-br from-signal-500/[0.08] to-transparent p-7 sm:p-9 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl text-bone-50 md:text-3xl">Not ready to book?</h3>
              <p className="mt-2 text-bone-300">
                Read the field guide on quote follow-up — written for tradies, not marketers.
              </p>
            </div>
            <div className="flex w-full flex-wrap gap-3 md:w-auto">
              <Button href="/blog" variant="primary" arrow className="w-full sm:w-auto">
                Read the blog
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
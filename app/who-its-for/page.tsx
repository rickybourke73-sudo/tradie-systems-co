import type { Metadata } from 'next';
import {
  AirVent,
  Bug,
  Building2,
  Droplets,
  Fence,
  Hammer,
  HardHat,
  Leaf,
  Paintbrush,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Waves,
  Wrench
} from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Section, SectionHeader } from '@/components/ui/Section';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = buildMetadata({
  title: "Who It's For â€” Systems for Australian Tradies",
  description:
    'Practical lead response, quote follow-up, booking, invoice and admin systems for Australian tradies, owner-operators and small trade teams.',
  path: '/who-its-for'
});

const trades = [
  {
    icon: Fence,
    name: 'Fencing contractors',
    description:
      'Keep enquiries, site visits, quotes, material details, follow-up and customer updates organised.'
  },
  {
    icon: Leaf,
    name: 'Landscapers',
    description:
      'Manage incoming job requests, quote follow-up, scheduling, supplier details and project communication.'
  },
  {
    icon: Building2,
    name: 'Builders',
    description:
      'Create clearer workflows for enquiries, client communication, documents, job stages and admin follow-up.'
  },
  {
    icon: PlugZap,
    name: 'Electricians',
    description:
      'Respond to enquiries faster, keep job requests organised and reduce booking and follow-up gaps.'
  },
  {
    icon: Droplets,
    name: 'Plumbers',
    description:
      'Capture missed enquiries, organise urgent and non-urgent work, confirm bookings and follow up customers.'
  },
  {
    icon: HardHat,
    name: 'Roofers',
    description:
      'Track inspections, quotes, customer replies, scheduling and follow-up across longer sales cycles.'
  },
  {
    icon: Sparkles,
    name: 'Cleaning businesses',
    description:
      'Simplify enquiries, recurring bookings, reminders, customer details and payment follow-up.'
  },
  {
    icon: Bug,
    name: 'Pest control',
    description:
      'Improve booking flows, reminders, repeat-service follow-up and customer communication.'
  },
  {
    icon: Waves,
    name: 'Pool services',
    description:
      'Keep recurring jobs, customer notes, service reminders, materials and unpaid invoices visible.'
  },
  {
    icon: AirVent,
    name: 'Air conditioning and HVAC',
    description:
      'Organise enquiries, quotes, installs, servicing, reminders and customer follow-up.'
  },
  {
    icon: Hammer,
    name: 'Carpenters and concreters',
    description:
      'Track leads, site visits, quotes, job timing, materials and customer updates without relying on memory.'
  },
  {
    icon: Paintbrush,
    name: 'Painters and other trade services',
    description:
      'Build a clearer process from first enquiry through quoting, booking, job completion and invoicing.'
  }
];

const commonProblems = [
  'Missed calls and enquiries are not followed up quickly.',
  'Quotes are sent but there is no consistent follow-up process.',
  'Bookings involve too much back-and-forth.',
  'Customer details are spread across phones, emails, paper and notes.',
  'Important job or admin tasks depend on someone remembering them.',
  'Invoices are not chased consistently.',
  'There is no clear view of what is waiting, overdue or falling behind.',
  'The owner spends too much time doing repetitive admin.'
];

const businessTypes = [
  {
    icon: Wrench,
    title: 'Owner-operators',
    body:
      'For tradies handling the work, quoting, customer communication and admin themselves.'
  },
  {
    icon: HardHat,
    title: 'Small trade teams',
    body:
      'For businesses that need clearer handovers, reminders and shared visibility across jobs and customers.'
  },
  {
    icon: ShieldCheck,
    title: 'Growing trade businesses',
    body:
      'For businesses that have outgrown paper, memory and disconnected tools but do not need an overcomplicated system.'
  }
];

export default function WhoItsForPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: "Who It's For", url: `${siteConfig.url}/who-its-for` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <Section size="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" aria-hidden="true">
          <div className="absolute right-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-signal-500/10 blur-3xl" />
        </div>

        <div className="max-w-4xl">
          <p className="eyebrow mb-5">
            <span
              className="inline-flex h-1.5 w-1.5 rounded-full bg-signal-500"
              aria-hidden="true"
            />
            Who It&apos;s For
          </p>

          <h1 className="font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Practical systems for tradies who are tired of things{' '}
            <span className="italic text-signal-500">slipping through the cracks</span>.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-bone-300 md:text-xl">
            Tradie Systems Co works with Australian owner-operators and small trade teams that
            need a clearer way to handle leads, quotes, bookings, customers, invoices and daily
            admin.
          </p>

          <div className="mt-8">
            <Button href="/contact" variant="primary" arrow>
              Request a Free Systems Review
            </Button>
          </div>
        </div>
      </Section>

      <Section size="lg" className="border-t border-white/5">
        <SectionHeader
          eyebrow="Trade businesses"
          title="Different trades. Similar problems behind the scenes."
          description="The exact workflow changes from one trade to another, but the same gaps often cause lost time, slow replies and missed opportunities."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trades.map((trade) => {
            const Icon = trade.icon;

            return (
              <article
                key={trade.name}
                className="card p-6 transition-colors duration-200 hover:border-white/10"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-signal-500/10 text-signal-500"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>

                <h2 className="mt-4 font-display text-xl text-bone-50">{trade.name}</h2>
                <p className="mt-2 text-sm leading-6 text-bone-400">{trade.description}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section size="lg" className="border-t border-white/5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">Common warning signs</p>
            <h2 className="font-display text-3xl tracking-tight text-bone-50 md:text-4xl">
              The problem is usually not effort. It is the lack of a clear system.
            </h2>
            <p className="mt-5 text-bone-300">
              Most trade businesses are already working hard. The gaps appear because important
              follow-up and admin tasks are spread across too many places or rely on memory.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {commonProblems.map((problem) => (
              <li
                key={problem}
                className="rounded-xl border border-white/5 bg-ink-900/40 p-4 text-sm leading-6 text-bone-300"
              >
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section size="lg" className="border-t border-white/5">
        <SectionHeader
          eyebrow="Business size"
          title="Built for practical trade businesses, not enterprise complexity."
          description="The goal is not to add more software. It is to build a simpler and more reliable way of working."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {businessTypes.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="card p-6">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-signal-500/10 text-signal-500"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>

                <h2 className="mt-4 font-display text-xl text-bone-50">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-bone-400">{item.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section size="md" className="border-t border-white/5">
        <div className="rounded-2xl border border-signal-500/20 bg-gradient-to-br from-signal-500/[0.08] to-transparent p-7 sm:p-9 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl text-bone-50 md:text-3xl">
                Not sure where your biggest gaps are?
              </h2>
              <p className="mt-3 text-bone-300">
                We can review how your business currently handles leads, quotes, bookings,
                invoices and admin, then show you what should be fixed first.
              </p>
            </div>

            <Button href="/contact" variant="primary" arrow className="w-full md:w-auto">
              Request a Free Systems Review
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

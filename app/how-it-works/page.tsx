import type { Metadata } from 'next';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Headphones,
  Map,
  Search,
  Settings,
  TestTube2
} from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Section, SectionHeader } from '@/components/ui/Section';
import { JsonLd, breadcrumbSchema, howToSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = buildMetadata({
  title: 'How It Works - Practical Systems for Australian Tradies',
  description:
    'See how Tradie Systems Co reviews, maps, builds and tests practical lead, quote, booking, invoice and admin systems for Australian tradies.',
  path: '/how-it-works'
});

const steps = [
  {
    icon: Search,
    number: '01',
    name: 'Free Systems Call',
    text:
      'We look at how your business currently handles leads, quotes, bookings, customer details, invoices and daily admin.',
    details: [
      'Where enquiries come from',
      'How quickly leads receive a reply',
      'What happens after a quote is sent',
      'How bookings and customer details are managed',
      'Which tasks are being forgotten or repeated manually'
    ]
  },
  {
    icon: Map,
    number: '02',
    name: 'System Map',
    text:
      'We map what should happen from the first enquiry through follow-up, booking, job completion, invoicing and repeat work.',
    details: [
      'Clear stages and responsibilities',
      'Required customer information',
      'Follow-up points and reminders',
      'Manual steps that should stay manual',
      'Tasks that can be simplified or automated'
    ]
  },
  {
    icon: Settings,
    number: '03',
    name: 'Build',
    text:
      'We build the practical workflow using tools that fit the business rather than forcing everything into one complicated platform.',
    details: [
      'Forms and enquiry capture',
      'CRM and customer tracking',
      'SMS and email follow-up',
      'Calendars and booking flows',
      'Spreadsheets, dashboards and task reminders'
    ]
  },
  {
    icon: TestTube2,
    number: '04',
    name: 'Test',
    text:
      'We test the workflow using realistic examples before it is relied on for genuine customers and jobs.',
    details: [
      'Check messages and reminders',
      'Confirm customer details move correctly',
      'Test booking and follow-up paths',
      'Find gaps, duplicates and confusing steps',
      'Make adjustments before launch'
    ]
  },
  {
    icon: Headphones,
    number: '05',
    name: 'Handover and Support',
    text:
      'We explain how the system works, what still needs human judgement and what to do when something changes.',
    details: [
      'Practical handover',
      'Simple operating instructions',
      'Clear ownership of manual tasks',
      'Support options where needed',
      'Adjustments as the business evolves'
    ]
  }
];

const principles = [
  {
    icon: ClipboardCheck,
    title: 'Start with the problem',
    body:
      'We do not begin by selling software. We begin by finding where work, customers or money are being lost.'
  },
  {
    icon: CheckCircle2,
    title: 'Keep human judgement',
    body:
      'Not every task should be automated. Important decisions, unusual jobs and sensitive customer conversations still need people.'
  },
  {
    icon: Settings,
    title: 'Use the simplest workable setup',
    body:
      'The right system may use your existing tools, a small number of new tools or a clearer process before any automation is added.'
  }
];

export default function HowItWorksPage() {
  const breadcrumbData = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'How It Works', url: `${siteConfig.url}/how-it-works` }
  ]);

  const processData = howToSchema(
    steps.map((step) => ({
      name: step.name,
      text: step.text
    }))
  );

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <JsonLd data={processData} />

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
            How It Works
          </p>

          <h1 className="font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Find the gaps, map the process and build a system that{' '}
            <span className="italic text-signal-500">actually gets used</span>.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-bone-300 md:text-xl">
            We review how your trade business works now, identify what is slipping through and
            build a practical system around the way your team actually operates.
          </p>

          <div className="mt-8">
            <Button href="/contact" variant="primary" arrow>
              Request a Free Systems Call
            </Button>
          </div>
        </div>
      </Section>

      <Section size="lg" className="border-t border-white/5">
        <SectionHeader
          eyebrow="The process"
          title="From scattered tasks to a clear working system."
          description="Each step is designed to reduce confusion before tools or automation are added."
        />

        <div className="space-y-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="grid gap-6 rounded-2xl border border-white/5 bg-ink-900/40 p-6 md:grid-cols-[140px_1fr] md:p-8"
              >
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-signal-500">
                    STEP {step.number}
                  </p>

                  <span
                    className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-signal-500/10 text-signal-500"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-bone-50 md:text-3xl">
                    {step.name}
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-bone-300">{step.text}</p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-ink-950/40 p-4 text-sm text-bone-300"
                      >
                        <ArrowRight
                          className="mt-0.5 h-4 w-4 flex-none text-signal-500"
                          aria-hidden="true"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section size="lg" className="border-t border-white/5">
        <SectionHeader
          eyebrow="How we approach it"
          title="Practical before technical."
          description="The goal is not to add more software. The goal is to make the business easier to run."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article key={principle.title} className="card p-6">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-signal-500/10 text-signal-500"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>

                <h2 className="mt-4 font-display text-xl text-bone-50">
                  {principle.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-bone-400">
                  {principle.body}
                </p>
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
                Start by finding what is slipping through.
              </h2>

              <p className="mt-3 text-bone-300">
                The Free Systems Call starts with a conversation about your current process, so you are not paying
                for tools or complexity the business does not need.
              </p>
            </div>

            <Button href="/contact" variant="primary" arrow className="w-full md:w-auto">
              Request a Free Systems Call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

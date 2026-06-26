import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { WhatsIncluded } from '@/components/sections/WhatsIncluded';
import { Problem } from '@/components/sections/Problem';
import { WorkflowSection } from '@/components/sections/WorkflowSection';
import { Benefits } from '@/components/sections/Benefits';
import { WhatGetsSetUp } from '@/components/sections/WhatGetsSetUp';
import { WhoThisIsFor } from '@/components/sections/WhoThisIsFor';
import { WhyLosing } from '@/components/sections/WhyLosing';
import { Founder } from '@/components/sections/Founder';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { Section } from '@/components/ui/Section';
import { JsonLd, faqSchema, howToSchema, speakableSchema } from '@/lib/schema';
import { homepageFaqs } from '@/content/faqs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Free Quote Follow-Up Audit for Australian Tradies',
  description:
    'Book a free quote follow-up audit for your trade business. We review what happens after you send a quote, find where quoted jobs may be slipping through the cracks, and give you a clear plan to fix it.',
  path: '/',
  keywords: [
    'quote follow-up audit',
    'free quote follow-up audit',
    'quote follow-up',
    'quote follow-up system',
    'tradie quote follow-up',
    'follow up after quote',
    'customer follow-up tradies',
    'quote conversion',
    'lead follow-up Australia',
    'lead recovery for tradies',
    'cold quote reactivation',
    'missed quote follow-up',
    'speed to lead',
    'SMS quote follow-up',
    'email quote follow-up',
    'quote reminder emails',
    'Australian tradies',
    'Australian trade businesses',
    'trade business workflow',
    'ServiceM8 follow-up',
    'Tradify follow-up',
    'simPRO follow-up',
    'AroFlo follow-up',
    'Jobber follow-up'
  ]
});

function stripSmartQuotes(s: string) {
  return s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
}

const workflowSteps = [
  {
    name: 'Review the current quote follow-up process',
    text: 'The audit starts by mapping what happens after a quote is sent, including who follows up, when they follow up, what messages are used, and where the process relies on memory.'
  },
  {
    name: 'Find where quoted jobs are slipping through',
    text: 'The audit looks for gaps such as slow follow-up, inconsistent reminders, missed replies, cold quotes, unclear ownership, and trade software that is not being used properly.'
  },
  {
    name: 'Separate manual tasks from automation opportunities',
    text: 'The audit identifies which parts of the follow-up process should stay manual and which parts could be improved with reminders, SMS, email, CRM tasks, or automation.'
  },
  {
    name: 'Build a practical improvement plan',
    text: 'The audit produces a clear plan showing what to fix first, what messages to use, what timing to follow, and how to reduce the chance of quoted jobs going cold.'
  },
  {
    name: 'Decide whether to implement it yourself or get help',
    text: 'After the audit, the tradie can implement the recommendations themselves or choose to have Tradie Systems Co build the follow-up system for them.'
  }
];

const definitionFaqs = [
  {
    question: 'What is a quote follow-up audit for tradies?',
    answer:
      'A quote follow-up audit is a review of what happens after a tradie sends a quote. It looks at follow-up timing, messages, reminders, customer replies, old quotes, and whether the current process depends too much on memory or spare time. The goal is to find where quoted jobs may be slipping through the cracks and give the business a clear plan to fix it.'
  },
  {
    question: 'What does a quote follow-up audit check?',
    answer:
      'A quote follow-up audit checks whether every quote is followed up, how quickly customers hear back, what SMS or email messages are used, whether replies are missed, whether old quotes can be reactivated, and whether tools like ServiceM8, Tradify, simPRO, AroFlo, Jobber, Gmail or Outlook could support a more consistent process.'
  }
];

export default function HomePage() {
  const cleanFaqs = homepageFaqs.map((f) => ({
    question: stripSmartQuotes(f.question),
    answer: stripSmartQuotes(f.answer)
  }));

  const allFaqs = [...definitionFaqs, ...cleanFaqs];

  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <JsonLd data={howToSchema(workflowSteps)} />
      <JsonLd data={speakableSchema(['#hero-heading', '#hero-lede'])} />

      <Hero />
      <Problem />
      <WhatsIncluded />
      <WorkflowSection />
      <Benefits />
      <WhatGetsSetUp />
      <WhoThisIsFor />
      <WhyLosing />
      <Founder />
      <HomepageInternalLinks />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function HomepageInternalLinks() {
  return (
    <Section className="border-y border-white/5 bg-ink-900/30">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
          Explore the audit
        </div>

        <h2 className="max-w-3xl font-display text-2xl tracking-tight text-bone-50 sm:text-3xl md:text-4xl">
          Learn how a better quote follow-up process starts.
        </h2>

        <p className="mt-4 max-w-3xl text-bone-300">
          See what the free audit checks, read common questions, or get in touch if you want help
          tightening up what happens after you send a quote.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/services"
            className="rounded-xl border border-white/10 bg-ink-950/40 p-5 transition-all duration-200 hover:border-signal-500/40 hover:bg-ink-900/70"
          >
            <h3 className="font-display text-lg font-semibold text-bone-50">Free Audit</h3>
            <p className="mt-2 text-sm text-bone-400">
              See what we check during the quote follow-up audit and what happens after the review.
            </p>
          </Link>

          <Link
            href="/faqs"
            className="rounded-xl border border-white/10 bg-ink-950/40 p-5 transition-all duration-200 hover:border-signal-500/40 hover:bg-ink-900/70"
          >
            <h3 className="font-display text-lg font-semibold text-bone-50">FAQs</h3>
            <p className="mt-2 text-sm text-bone-400">
              Answers about quote follow-up, audit timing, tools, automation and implementation.
            </p>
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/10 bg-ink-950/40 p-5 transition-all duration-200 hover:border-signal-500/40 hover:bg-ink-900/70"
          >
            <h3 className="font-display text-lg font-semibold text-bone-50">Contact</h3>
            <p className="mt-2 text-sm text-bone-400">
              Send a message or book a free quote follow-up audit for your trade business.
            </p>
          </Link>
        </div>
      </div>
    </Section>
  );
}
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { X, Check } from 'lucide-react';

const losing = [
  'Quote sent. No clear next step. Lead forgets you exist.',
  'Customer rings back while you’re on the tools. You miss it, then forget to return the call.',
  '“I’ll call them back tomorrow” turns into “I’ll call them back next week.”',
  'Email sits in their inbox. They don’t reply. You assume they went elsewhere.',
  'Your quoting software sends one auto-email, but nothing else happens after that.',
  'You can’t remember which quotes are still open, which need chasing, and which are dead.'
];

const improving = [
  'Every quote has a clear follow-up plan attached to it.',
  'Customers know what happens next after the quote is sent.',
  'Follow-up timing is planned instead of left to memory.',
  'Replies are easier to spot, route, and handle before they go stale.',
  'Older quotes can be reviewed instead of forgotten completely.',
  'You know which follow-up gaps need a DIY fix, reminder, template, automation, or done-for-you help.'
];

const traits = [
  {
    title: 'Focused only on quote follow-up',
    body: 'The audit is not a broad business automation review. It looks specifically at what happens after quotes are sent and where jobs may be going cold.'
  },
  {
    title: 'Built around how tradies actually work',
    body: 'Quoting at night, on site, between jobs, and from different tools. The aim is to improve follow-up without making you babysit dashboards or learn unnecessary software.'
  },
  {
    title: 'Audit before implementation',
    body: 'Some businesses only need better wording, reminders, or a clearer process. Others may need automation or done-for-you setup. The audit helps decide what actually makes sense.'
  }
];

export function WhyLosing() {
  return (
    <Section id="why-tradies">
      <SectionHeader
        eyebrow="Why it works for tradies"
        title="Designed around the way trade businesses actually quote."
        description="We focus on one thing — quote follow-up for Australian tradies. The goal is to find where quoted jobs are going cold before recommending any fix, system, or implementation."
      />

      {/* With/without comparison */}
      <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">
        {/* Without a clear process */}
        <div className="card border-danger/20 p-6 sm:p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-danger">
              Without clear quote follow-up
            </span>
            <span className="h-px flex-1 bg-danger/20" aria-hidden="true" />
          </div>
          <ul className="space-y-4">
            {losing.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-danger/15"
                  aria-hidden="true"
                >
                  <X className="h-3 w-3 text-danger" strokeWidth={3} />
                </span>
                <span className="text-bone-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* With a clearer follow-up process */}
        <div className="card border-success/20 bg-gradient-to-br from-ink-900 to-ink-900/40 p-6 sm:p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
              With a clearer follow-up process
            </span>
            <span className="h-px flex-1 bg-success/20" aria-hidden="true" />
          </div>
          <ul className="space-y-4">
            {improving.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-success/15"
                  aria-hidden="true"
                >
                  <Check className="h-3 w-3 text-success" strokeWidth={3} />
                </span>
                <span className="text-bone-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Three credibility cards */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:mt-14 md:grid-cols-3">
        {traits.map((t) => (
          <div key={t.title} className="border-l-2 border-signal-500/40 py-1 pl-5">
            <h3 className="font-display text-lg font-semibold text-bone-50">{t.title}</h3>
            <p className="mt-2 text-sm text-bone-300">{t.body}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-bone-400">
        Curious what your current process is missing? See{' '}
        <Link
          href="/services"
          className="text-signal-400 underline-offset-4 hover:underline"
        >
          what the free audit checks
        </Link>
        , or read the{' '}
        <Link
          href="/faqs"
          className="text-signal-400 underline-offset-4 hover:underline"
        >
          full list of tradie follow-up FAQs
        </Link>
        .
      </p>
    </Section>
  );
}
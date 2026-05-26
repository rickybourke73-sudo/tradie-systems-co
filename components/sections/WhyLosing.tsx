import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { X, Check } from 'lucide-react';

const losing = [
  'Quote sent. No follow-up. Lead forgets you exist.',
  'Customer rings on Friday at 4pm. You’re on a roof. Voicemail. Lost.',
  '“I’ll call them back tomorrow” turns into “I’ll call them back next week.”',
  'Email sits in their inbox. They don’t reply. You assume they went elsewhere.',
  'Your quoting software sends one auto-email. That’s the entire follow-up plan.',
  'You can’t remember which quotes are still open and which are dead.'
];

const winning = [
  'Every quote gets an instant confirmation reply, even outside hours.',
  'A polite SMS sequence runs over the next two weeks — no manual effort.',
  'When the customer replies, follow-up pauses and you’re notified instantly.',
  'Cold quotes get a final reactivation message — some come back, some politely close out.',
  'You see exactly which quotes are open, won, and lost.',
  'Your follow-up looks the same whether you quoted Monday or Saturday night.'
];

const traits = [
  {
    title: 'No new software to learn',
    body: 'The system runs behind the tools you already use — ServiceM8, Tradify, simPRO, AroFlo, Jobber, Gmail. You stay on the tools; nothing changes about how you quote.'
  },
  {
    title: 'Built around how tradies actually work',
    body: 'Quoting at night, on site, between jobs. The system handles the chasing while you handle the work. No dashboards to babysit, no daily check-ins required.'
  },
  {
    title: 'Set up in about three weeks',
    body: 'Week 1 we learn your business. Week 2 we build it. Week 3 we switch it on. You approve every message before it goes live.'
  }
];

export function WhyLosing() {
  return (
    <Section id="why-tradies">
      <SectionHeader
        eyebrow="Why it works for tradies"
        title="Designed around the way trade businesses actually run."
        description="We focus on one thing — quote follow-up for Australian tradies — and nothing else. That focus is why the system fits the way you work, instead of asking you to fit it."
      />

      {/* With/without comparison */}
      <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">
        {/* Without a system */}
        <div className="card border-danger/20 p-6 sm:p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-danger">
              Without a follow-up system
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

        {/* With a follow-up system */}
        <div className="card border-success/20 bg-gradient-to-br from-ink-900 to-ink-900/40 p-6 sm:p-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
              With a proper follow-up system
            </span>
            <span className="h-px flex-1 bg-success/20" aria-hidden="true" />
          </div>
          <ul className="space-y-4">
            {winning.map((item) => (
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
        Curious how the system actually runs? See{' '}
        <Link
          href="/services"
          className="text-signal-400 underline-offset-4 hover:underline"
        >
          every service we set up
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

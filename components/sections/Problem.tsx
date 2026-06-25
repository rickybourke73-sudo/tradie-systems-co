import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { TrendingDown, Phone, Clock, MessageCircleX } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Quotes go out — then silence.',
    body: 'You send a quote, the customer says “I’ll have a look,” and weeks pass. You’re too busy on the tools to chase every quote properly. They go cold, and the job quietly disappears.'
  },
  {
    icon: MessageCircleX,
    title: 'Customers ghost — and you never find out why.',
    body: 'Was it the price? A competitor? Bad timing? Did they just forget? Without proper follow-up, you never get the chance to handle the objection — or simply remind them you exist.'
  },
  {
    icon: Phone,
    title: 'Follow-up is inconsistent at best.',
    body: 'Some quotes get a phone call. Some get an email. Some get followed up late. Some get nothing at all. Every gap in the process is a chance for the customer to drift away.'
  },
  {
    icon: TrendingDown,
    title: 'You’re paying for leads you never close.',
    body: 'Google Ads, Facebook leads, referrals and website enquiries all cost something. When quoted jobs disappear without a reply, your real cost per booked job ends up much higher than it looks.'
  }
];

export function Problem() {
  return (
    <Section id="problem">
      <SectionHeader
        eyebrow="The real problem"
        title="Most quote follow-up problems are process problems."
        description="A customer going quiet does not always mean they chose someone else. They may have forgotten, got distracted, needed a reminder, had a question, or spoken to a competitor who followed up faster. The first step is finding where your current follow-up process is leaking jobs."
      />

      {/* Definition block — extractable Q+A for AI search and snippets */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/5 bg-ink-900/40 p-6 sm:mt-12 sm:p-8">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-signal-400">
          Quick definition
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-bone-50 sm:text-2xl">
          What is a tradie quote follow-up audit?
        </h3>
        <p className="mt-3 text-base leading-relaxed text-bone-200 sm:text-lg">
          A tradie quote follow-up audit is a review of what happens after you send a quote. It
          looks at how quickly you follow up, what messages you send, whether customers are reminded
          at the right time, how replies are handled, and where quoted jobs are going cold. The goal
          is to find the gaps first, then recommend the simplest fix — whether that is a DIY
          follow-up plan, better reminders, automation, or a done-for-you quote follow-up system.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2">
        {problems.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="group card p-6 transition-colors duration-200 hover:border-signal-500/30 sm:p-7 md:p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-signal-500/20 bg-signal-500/10 text-signal-400 transition-colors duration-200 group-hover:bg-signal-500/20"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-bone-50 sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-bone-300">{p.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-12 max-w-3xl text-center">
        <p className="text-balance font-display text-2xl text-bone-100 md:text-3xl">
          The leads may not be the problem.{' '}
          <span className="text-signal-400">The follow-up process might be.</span>
        </p>
        <p className="mt-4 text-sm text-bone-400">
          Start with a{' '}
          <Link
            href="/services"
            className="text-signal-400 underline-offset-4 hover:underline"
          >
            free quote follow-up audit
          </Link>{' '}
          to see where quoted jobs are going cold — or browse the{' '}
          <Link
            href="/blog"
            className="text-signal-400 underline-offset-4 hover:underline"
          >
            field notes on lead recovery
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
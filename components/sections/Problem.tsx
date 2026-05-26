import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { TrendingDown, Phone, Clock, MessageCircleX } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Quotes go out — then silence.',
    body: 'You send a quote, the customer says “I’ll have a look,” and weeks pass. You’re too busy on the tools to chase them. They go cold. The job’s gone.'
  },
  {
    icon: MessageCircleX,
    title: 'Customers ghost — and you never find out why.',
    body: 'Was it the price? A competitor? Did they just forget? Without follow-up, you never get the chance to handle the objection — or simply remind them you exist.'
  },
  {
    icon: Phone,
    title: 'Follow-up is inconsistent at best.',
    body: 'Some quotes get a phone call. Some get an email. Most get nothing. Every gap in your process is money walking out the door — to a competitor with a better system.'
  },
  {
    icon: TrendingDown,
    title: 'You’re paying for leads you never close.',
    body: 'Google Ads, Facebook leads, referrals — they all cost something. When a sizeable share of your quoted jobs disappear without a reply, your real cost-per-job ends up much higher than it looks.'
  }
];

export function Problem() {
  return (
    <Section id="problem">
      <SectionHeader
        eyebrow="The real problem"
        title="It’s not your prices. It’s your follow-up."
        description="Tradies don’t lose jobs because they’re too expensive. They lose jobs because the customer forgets, gets distracted, or talks to a competitor who actually got back to them. Here’s where it’s costing you right now."
      />

      {/* Definition block — extractable Q+A for AI search and snippets */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/5 bg-ink-900/40 p-6 sm:mt-12 sm:p-8">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-signal-400">
          Quick definition
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-bone-50 sm:text-2xl">
          What is a tradie quote follow-up system?
        </h3>
        <p className="mt-3 text-base leading-relaxed text-bone-200 sm:text-lg">
          A tradie quote follow-up system is an automated sequence of SMS and email messages sent
          on a schedule after a tradie sends a quote. Its purpose is to keep the customer engaged,
          answer common questions, and bring the conversation back to a booking before the lead
          goes cold. For most Australian trade businesses, it replaces ad-hoc &ldquo;I&rsquo;ll
          call them tomorrow&rdquo; chasing with a consistent, structured process that runs whether
          you&rsquo;re on site, on the road, or off the tools.
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
          The leads aren’t the problem.{' '}
          <span className="text-signal-400">The follow-up is.</span>
        </p>
        <p className="mt-4 text-sm text-bone-400">
          See how a structured{' '}
          <Link
            href="/services"
            className="text-signal-400 underline-offset-4 hover:underline"
          >
            tradie quote follow-up system
          </Link>{' '}
          changes what happens after the quote goes out — or browse the{' '}
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

import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { WorkflowVisual } from './WorkflowVisual';

interface Step {
  when: string;
  title: string;
  body: string;
  channel: string;
}

const steps: Step[] = [
  {
    when: 'Day 0',
    title: 'Quote sent, confirmation fires',
    body: 'You send the quote the way you always have. The system picks it up and sends a short confirmation SMS within minutes.',
    channel: 'SMS'
  },
  {
    when: 'Day 1–3',
    title: 'First follow-up',
    body: 'A polite check-in goes out the next morning. If no reply, a second message with the quote reattached lands on day 3.',
    channel: 'SMS + Email'
  },
  {
    when: 'Day 7–14',
    title: 'Soft re-engagement',
    body: 'Two further touchpoints over the next fortnight. This is where most replies actually come back — customers who genuinely meant to respond and got busy.',
    channel: 'SMS + Email'
  },
  {
    when: 'Day 30+',
    title: 'Cold-quote reactivation',
    body: 'Quotes that stayed silent move to a longer-term reactivation list. A thoughtful final message recovers jobs that would have been written off.',
    channel: 'SMS + Email'
  },
  {
    when: 'Any moment',
    title: 'Reply lands → you take over',
    body: 'The second a customer replies, the sequence pauses and you’re notified. No accidental chasing, no conversations falling through the cracks.',
    channel: 'You'
  }
];

export function WorkflowSection() {
  return (
    <Section
      id="how-it-works"
      className="bg-gradient-to-b from-transparent via-ink-900/40 to-transparent"
    >
      <SectionHeader
        eyebrow="How it works"
        title="How an automated quote follow-up system runs in the background."
        description="You quote the job. The system handles every touchpoint after that — by SMS, email, or both — until the customer replies or the quote politely closes itself out."
        align="center"
      />

      <div className="mx-auto mt-12 max-w-5xl sm:mt-14">
        <WorkflowVisual />
      </div>

      {/* Condensed timeline */}
      <div className="mx-auto mt-14 max-w-3xl sm:mt-16">
        <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
          What runs between Day 0 and Day 30
        </p>
        <ol>
          {steps.map((s, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li
                key={s.title}
                className="relative grid grid-cols-[auto,1fr] gap-x-5 pb-7 sm:gap-x-7 sm:pb-8 last:pb-0"
              >
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[15px] top-7 h-full w-px bg-gradient-to-b from-white/15 via-white/5 to-transparent sm:left-[19px]"
                  />
                )}
                <span
                  aria-hidden="true"
                  className={`relative z-10 mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[11px] font-bold sm:h-10 sm:w-10 sm:text-xs ${
                    s.channel === 'You'
                      ? 'border-signal-500/40 bg-signal-500/15 text-signal-300'
                      : 'border-white/10 bg-ink-900 text-bone-300'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 pt-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
                      {s.when}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${
                        s.channel === 'You'
                          ? 'border-signal-500/30 bg-signal-500/10 text-signal-300'
                          : 'border-white/10 bg-ink-900 text-bone-400'
                      }`}
                    >
                      {s.channel}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-base font-semibold text-bone-50 sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-bone-300 sm:text-[15px]">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-center text-sm text-bone-400">
          Want the full breakdown?{' '}
          <Link
            href="/services"
            className="text-signal-400 underline-offset-4 hover:underline"
          >
            See every service we set up
          </Link>{' '}
          or{' '}
          <Link
            href="/faqs"
            className="text-signal-400 underline-offset-4 hover:underline"
          >
            read the FAQs
          </Link>
          .
        </p>
      </div>

      {/* Definition Q+A — extractable for AI search */}
      <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/5 bg-ink-900/40 p-6 sm:mt-16 sm:p-8">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-signal-400">
          In plain English
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-bone-50 sm:text-2xl">
          How does an automated quote follow-up system work?
        </h3>
        <p className="mt-3 text-base leading-relaxed text-bone-200 sm:text-lg">
          When a tradie sends a quote, the follow-up system triggers a sequence of polite,
          pre-approved messages over the next 14–30 days — typically a confirmation SMS within
          minutes, a check-in the next day, an email with the quote reattached a few days later,
          and a final re-engagement message before the quote is parked as cold. The sequence pauses
          the moment the customer replies, and any reply is routed straight to the tradie. The
          result is consistent, structured follow-up automation instead of ad-hoc chasing.
        </p>
      </div>
    </Section>
  );
}

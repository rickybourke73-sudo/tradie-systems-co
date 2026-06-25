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
    title: 'Quote sent, confirmation message goes out',
    body: 'After the quote is sent, the customer receives a short confirmation message so they know it has arrived and what to expect next.',
    channel: 'SMS'
  },
  {
    when: 'Day 1–3',
    title: 'First check-in',
    body: 'A polite follow-up checks whether they had a chance to review the quote. If there is no reply, a second touchpoint can remind them and make it easy to respond.',
    channel: 'SMS + Email'
  },
  {
    when: 'Day 7–14',
    title: 'Soft re-engagement',
    body: 'A few days later, another message can bring the quote back to the top of their mind without sounding pushy. This often catches customers who were interested but got busy.',
    channel: 'SMS + Email'
  },
  {
    when: 'Day 30+',
    title: 'Cold quote reactivation',
    body: 'Older quotes can be moved into a longer-term reactivation list so good opportunities are not forgotten just because the first few follow-ups went quiet.',
    channel: 'SMS + Email'
  },
  {
    when: 'Any moment',
    title: 'Customer replies → human takes over',
    body: 'When the customer replies, the follow-up should stop and the conversation should be routed back to the right person so nothing awkward or automated keeps going.',
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
        eyebrow="Example workflow"
        title="What your quote follow-up process could look like after the audit."
        description="Every trade business follows up differently. The audit looks at what you already do, where quotes are going cold, and whether a simple follow-up sequence like this would help."
        align="center"
      />

      <div className="mx-auto mt-12 max-w-5xl sm:mt-14">
        <WorkflowVisual />
      </div>

      {/* Condensed timeline */}
      <div className="mx-auto mt-14 max-w-3xl sm:mt-16">
        <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
          Example quote follow-up timeline
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
          This is only one possible structure. Start with a{' '}
          <Link
            href="/services"
            className="text-signal-400 underline-offset-4 hover:underline"
          >
            free quote follow-up audit
          </Link>{' '}
          to see what your current process actually needs — or{' '}
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
          How does quote follow-up automation work?
        </h3>
        <p className="mt-3 text-base leading-relaxed text-bone-200 sm:text-lg">
          Quote follow-up automation sends pre-approved SMS or email reminders after a quote is
          sent, usually across the first few days and weeks. A typical sequence might include a
          confirmation message, a polite check-in, a reminder with the quote attached, and a later
          reactivation message for older quotes. The best setup depends on the trade, quote value,
          sales process, CRM, and how the business already handles replies. That is why the audit
          comes first: it finds the follow-up gaps before recommending a DIY fix, simple reminders,
          automation, or done-for-you implementation.
        </p>
      </div>
    </Section>
  );
}
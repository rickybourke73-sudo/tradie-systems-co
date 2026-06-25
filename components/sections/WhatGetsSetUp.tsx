import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { MessageSquareText, Mail, Bell, Inbox } from 'lucide-react';

interface Touchpoint {
  icon: typeof MessageSquareText;
  label: string;
  title: string;
  body: string;
  example?: {
    heading: string;
    lines: string[];
    meta: string;
  };
}

const touchpoints: Touchpoint[] = [
  {
    icon: MessageSquareText,
    label: 'Touchpoint 01',
    title: 'Quote follow-up SMS',
    body:
      'If SMS follow-up makes sense for your business, this could be a short message sent after a quote lands — and again later if the customer has not replied. The wording should sound like your business, not a marketing bot.',
    example: {
      heading: 'Example Day 3 SMS',
      lines: [
        'Hi Dave, it’s Mick from Coastal Fencing.',
        'Just checking in on the quote we sent Tuesday for the back fence — any questions on it?',
        'Happy to walk you through the pricing if it’s easier on a call.'
      ],
      meta: 'Reply would pause the follow-up'
    }
  },
  {
    icon: Mail,
    label: 'Touchpoint 02',
    title: 'Quote follow-up emails',
    body:
      'For some businesses, email follow-up works better alongside SMS. This can help customers find the quote again, understand the scope, and reply when they are ready to move forward.',
    example: {
      heading: 'Example Day 7 email',
      lines: [
        'Subject: Still keen on the fence install, Dave?',
        '',
        'Hey Dave, just bumping this one up your inbox.',
        'I’ve attached the quote again in case it got buried.',
        'If timing is the issue, we could lock you in for early next month.'
      ],
      meta: 'Reply lands in your inbox'
    }
  },
  {
    icon: Bell,
    label: 'Touchpoint 03',
    title: 'Reminders and next steps',
    body:
      'The audit can also identify where reminders are needed after a customer shows interest — site visits, call-backs, deposit reminders, approvals, or next-step prompts.',
    example: {
      heading: 'Example pre-visit reminder',
      lines: [
        'Hi Dave, confirming our site visit tomorrow at 8am for the fence quote.',
        'I’ll need access to the side gate — let me know if any issues.',
        'Reply YES to confirm or call/text to reschedule.'
      ],
      meta: 'Useful when bookings or site visits are being missed'
    }
  },
  {
    icon: Inbox,
    label: 'Touchpoint 04',
    title: 'Customer reply handling',
    body:
      'One of the most important parts of any follow-up process is what happens when a customer replies. The follow-up should stop, the right person should be notified, and the opportunity should not get lost in the inbox.',
    example: {
      heading: 'Example customer reply',
      lines: [
        'Hey Mick, sorry for the delay.',
        'Yes keen to go ahead — when can you start?'
      ],
      meta: 'The follow-up should stop and the business should take over'
    }
  }
];

export function WhatGetsSetUp() {
  return (
    <Section id="what-gets-set-up">
      <SectionHeader
        eyebrow="What it could look like"
        title="A closer look at the quote follow-up messages your audit may recommend."
        description="The audit comes first. Once we understand your current process, we can recommend whether you need SMS follow-up, email follow-up, reminders, reply handling, cold quote reactivation, or a more advanced automation and AI setup."
      />

      <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2">
        {touchpoints.map((t) => {
          const Icon = t.icon;
          return (
            <article
              key={t.title}
              className="card flex h-full flex-col p-6 transition-colors duration-200 hover:border-signal-500/30 sm:p-7 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div
                  className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-signal-500/20 bg-signal-500/10 text-signal-400"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
                    {t.label}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-bone-50 sm:text-xl">
                    {t.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-bone-300">{t.body}</p>

              {t.example && (
                <div className="mt-5 rounded-xl border border-white/5 bg-ink-950/60 p-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-signal-400">
                    {t.example.heading}
                  </p>
                  <div className="space-y-1.5 font-mono text-[13px] leading-relaxed text-bone-200">
                    {t.example.lines.map((line, i) => (
                      <p key={i} className={line === '' ? 'h-2' : ''}>
                        {line || ' '}
                      </p>
                    ))}
                  </div>
                  <p className="mt-4 border-t border-white/5 pt-3 text-[11px] text-bone-500">
                    {t.example.meta}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-bone-400">
        These are examples, not a fixed package. The free audit shows which follow-up gaps matter
        most in your business, then you can decide whether to implement the fix yourself or have us
        build it for you. See{' '}
        <Link
          href="/services"
          className="text-signal-400 underline-offset-4 hover:underline"
        >
          how the quote follow-up audit works
        </Link>{' '}
        for the full breakdown.
      </p>
    </Section>
  );
}
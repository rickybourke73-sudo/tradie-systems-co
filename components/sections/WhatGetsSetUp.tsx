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
    title: 'Automated quote follow-up SMS',
    body: 'A short, branded text message goes out the day after your quote lands — and again on day 3 and day 7 if the customer hasn’t replied. Written to sound like you, not a marketing bot.',
    example: {
      heading: 'Day 3 SMS — sent automatically',
      lines: [
        'Hi Dave, it’s Mick from Coastal Fencing.',
        'Just checking in on the quote we sent Tuesday for the back fence — any questions on it?',
        'Happy to walk you through the pricing if it’s easier on a call.'
      ],
      meta: 'Sent 9:14am · Reply pauses follow-up'
    }
  },
  {
    icon: Mail,
    label: 'Touchpoint 02',
    title: 'Automated quote follow-up emails',
    body: 'A two- or three-step email sequence sits alongside the SMS. Longer-form, with the quote attached, addressing common objections (price, timing, scope). Branded with your business name and signature.',
    example: {
      heading: 'Day 7 email — sent automatically',
      lines: [
        'Subject: Still keen on the fence install, Dave?',
        '',
        'Hey Dave, just bumping this one up your inbox.',
        'I’ve attached the quote again in case it got buried.',
        'If timing is the issue, we could lock you in for early next month.'
      ],
      meta: 'Reply lands in your inbox · Sequence pauses'
    }
  },
  {
    icon: Bell,
    label: 'Touchpoint 03',
    title: 'Reminder sequences for live jobs',
    body: 'Once a customer says yes, the system handles confirmations and pre-job reminders. Site-visit confirmations the night before, deposit reminders if unpaid, invoice reminders post-job. No more no-shows.',
    example: {
      heading: 'Pre-visit reminder — 6pm the day before',
      lines: [
        'Hi Dave, confirming our site visit tomorrow at 8am for the fence quote.',
        'I’ll need access to the side gate — let me know if any issues.',
        'Reply YES to confirm or call/text to reschedule.'
      ],
      meta: 'YES/NO replies tracked · Reschedules captured automatically'
    }
  },
  {
    icon: Inbox,
    label: 'Touchpoint 04',
    title: 'Customer reply handling',
    body: 'The moment a customer replies — SMS, email, anywhere — follow-up pauses automatically and you get notified. No accidentally chasing someone who already said yes. No conversations falling through the cracks.',
    example: {
      heading: 'Customer reply — routed to you instantly',
      lines: [
        'Hey Mick, sorry for the delay.',
        'Yes keen to go ahead — when can you start?'
      ],
      meta: 'Pushed to your phone · Sequence stops'
    }
  }
];

export function WhatGetsSetUp() {
  return (
    <Section id="what-gets-set-up">
      <SectionHeader
        eyebrow="What it actually looks like"
        title="A closer look at the messages the system sends."
        description="Here’s what a real quote follow-up sequence looks like for an Australian tradie — written in your voice, scheduled around your trade, and stopped the moment a customer replies. Four examples from a typical sequence."
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
        Every message is written for you, in your tone, with your trade in mind. You approve the
        wording before anything goes live. See{' '}
        <Link
          href="/services"
          className="text-signal-400 underline-offset-4 hover:underline"
        >
          every service we set up
        </Link>{' '}
        for the full breakdown.
      </p>
    </Section>
  );
}

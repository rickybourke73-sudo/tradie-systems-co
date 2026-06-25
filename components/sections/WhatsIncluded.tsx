import Link from 'next/link';
import {
  MessageSquareText,
  Mail,
  RotateCcw,
  Bell,
  Inbox,
  Flame
} from 'lucide-react';
import { siteConfig } from '@/lib/site.config';

const includes = [
  {
    icon: MessageSquareText,
    title: 'SMS follow-up gaps',
    body: 'We check whether customers are getting a clear, timely SMS after a quote — or whether follow-up depends on memory.'
  },
  {
    icon: Mail,
    title: 'Quote reminder emails',
    body: 'We look at whether email follow-ups are being sent, whether the quote is easy to find again, and whether the wording is helping or hurting.'
  },
  {
    icon: RotateCcw,
    title: 'Missed lead recovery',
    body: 'We look for enquiries and quoted jobs that went quiet before they were properly followed up.'
  },
  {
    icon: Bell,
    title: 'Reminders and next steps',
    body: 'We check whether your team has clear reminders for calls, site visits, deposits, approvals and next-step conversations.'
  },
  {
    icon: Inbox,
    title: 'Customer reply handling',
    body: 'We check what happens when a customer replies, so interested leads are not missed, double-messaged, or left sitting in an inbox.'
  },
  {
    icon: Flame,
    title: 'Cold quote reactivation',
    body: 'We look at whether old quotes from the past few months could be re-engaged with a careful follow-up message.'
  }
];

export function WhatsIncluded() {
  return (
    <section
      id="whats-included"
      aria-labelledby="whats-included-heading"
      className="border-y border-white/5 bg-ink-900/30 py-section"
    >
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">What we look for</p>
            <h2
              id="whats-included-heading"
              className="text-balance font-display text-2xl tracking-tight text-bone-50 sm:text-3xl md:text-4xl"
            >
              The quote follow-up gaps we check during your free audit.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bone-300">
            The audit shows what is working, what is being missed, and what should be fixed first.
            Some businesses only need a better manual process. Others may benefit from automation
            or AI-assisted follow-up. See{' '}
            <Link
              href="/services"
              className="text-signal-400 underline-offset-4 hover:underline"
            >
              how the quote follow-up audit works
            </Link>{' '}
            for detail.
          </p>
        </div>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="bg-ink-950/95 p-6 transition-colors duration-200 hover:bg-ink-900/80 sm:p-7"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-signal-500/20 bg-signal-500/10 text-signal-400"
                  aria-hidden="true"
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-bone-50 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-300">{item.body}</p>
              </li>
            );
          })}
        </ul>

        {/* Software ecosystem strip — entity association for tradie software */}
        <div className="mt-10 grid gap-4 rounded-2xl border border-white/5 bg-ink-900/40 p-6 sm:mt-12 sm:grid-cols-[auto,1fr] sm:items-center sm:gap-6 sm:p-7">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-500">
            Works around the tradie software you already use
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Supported tradie software">
            {siteConfig.integrations.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-white/10 bg-ink-950/70 px-3 py-1.5 text-xs text-bone-200"
              >
                {tool}
              </li>
            ))}
            <li className="rounded-full border border-white/10 bg-ink-950/70 px-3 py-1.5 text-xs text-bone-400">
              + standard CRM, email and SMS providers
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
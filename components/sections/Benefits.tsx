import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import {
  TrendingUp,
  Zap,
  ClipboardCheck,
  Smile,
  Repeat,
  Banknote
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    metric: 'More quoted jobs recovered',
    title: 'Win more work from leads you already have',
    body: 'The audit helps find where quoted jobs are slipping away so you can improve conversion without relying only on more ads, more leads, or more chasing.'
  },
  {
    icon: Zap,
    metric: 'Faster first response',
    title: 'Reduce the delay after a quote is sent',
    body: 'Many customers go quiet because the next step is unclear or the follow-up comes too late. A better process can make your business feel faster and easier to deal with.'
  },
  {
    icon: Repeat,
    metric: 'Consistent follow-up',
    title: 'Stop relying on memory to chase quotes',
    body: 'Instead of hoping every quote gets followed up, the audit looks at how reminders, templates, tasks, SMS, email, or automation could make the process more reliable.'
  },
  {
    icon: ClipboardCheck,
    metric: 'Less admin confusion',
    title: 'Know which quotes still need attention',
    body: 'A clearer follow-up process helps reduce inbox hunting, forgotten callbacks, missed replies, and the feeling that open quotes are scattered across too many places.'
  },
  {
    icon: Smile,
    metric: 'Better customer experience',
    title: 'Make customers feel looked after',
    body: 'Clear, timely follow-up can make your trade business look more organised and professional, especially when the customer is comparing you against other quotes.'
  },
  {
    icon: Banknote,
    metric: 'Clearer next steps',
    title: 'Fix the leak before spending more on leads',
    body: 'Before paying for more enquiries, it makes sense to check what is happening to the quotes you already send. Sometimes the simplest fix is better follow-up, not more marketing.'
  }
];

export function Benefits() {
  return (
    <Section id="benefits">
      <SectionHeader
        eyebrow="The outcomes"
        title="What can change when quote follow-up stops being random."
        description="A free quote follow-up audit helps identify where quoted jobs are going cold, where customers are being left waiting, and what would make your follow-up process more consistent."
      />

      <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/30 sm:p-7"
            >
              <Icon className="h-6 w-6 text-signal-400" aria-hidden="true" />
              <p className="mt-5 font-display text-xl font-semibold tracking-tight text-bone-50 sm:text-2xl">
                {b.metric}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-bone-50">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-300">{b.body}</p>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-bone-400">
        Looking for the detail?{' '}
        <Link
          href="/services"
          className="text-signal-400 underline-offset-4 hover:underline"
        >
          See what the free audit checks
        </Link>{' '}
        or read the{' '}
        <Link
          href="/faqs"
          className="text-signal-400 underline-offset-4 hover:underline"
        >
          common questions about quote follow-up
        </Link>
        .
      </p>
    </Section>
  );
}
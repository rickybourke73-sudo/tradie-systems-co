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
    metric: 'Higher conversion',
    title: 'More jobs won from leads you already have',
    body: 'Better quote conversion without spending another dollar on ads. The leads are already coming in — the system makes sure more of them turn into booked work.'
  },
  {
    icon: Zap,
    metric: 'Under 5 min',
    title: 'Speed to lead — even after hours',
    body: 'Quote enquiries get an automated confirmation in minutes, not days. Speed of first response is one of the strongest signals in winning trade work.'
  },
  {
    icon: Repeat,
    metric: '7 touchpoints',
    title: 'Persistence without the admin',
    body: 'Most tradies stop after the first follow-up. The system runs the next six — politely, on a schedule, until the customer replies or the quote closes out.'
  },
  {
    icon: ClipboardCheck,
    metric: 'Less chasing',
    title: 'Hours of admin off your plate each week',
    body: 'No more copy-pasting follow-up emails, hunting through the inbox, or wondering which quotes are still open. The system tracks every one.'
  },
  {
    icon: Smile,
    metric: 'Better experience',
    title: 'Customers who feel looked after',
    body: 'Clear, on-time communication makes you look like the most organised trade business they’ve dealt with — which is exactly what wins repeat work and referrals.'
  },
  {
    icon: Banknote,
    metric: 'Pays for itself',
    title: 'One recovered quote covers the cost',
    body: 'For most trade businesses, recovering one job a month that would otherwise have gone cold covers the system — usually many times over.'
  }
];

export function Benefits() {
  return (
    <Section id="benefits">
      <SectionHeader
        eyebrow="The outcomes"
        title="What changes when every quote actually gets followed up."
        description="A proper quote follow-up system doesn’t add software to your business — it plugs the leak that’s quietly costing you the most money every week. Better quote conversion, faster speed to lead, less admin off your plate."
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
          See every service we set up
        </Link>{' '}
        or read the{' '}
        <Link
          href="/faqs"
          className="text-signal-400 underline-offset-4 hover:underline"
        >
          common questions about quote conversion
        </Link>
        .
      </p>
    </Section>
  );
}

import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site.config';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { FinalCta } from '@/components/sections/FinalCta';
import { WorkflowVisual } from '@/components/sections/WorkflowVisual';
import { AfterYouSayYes } from '@/components/sections/AfterYouSayYes';
import {
  MessageSquareText,
  RotateCcw,
  Bell,
  CalendarCheck,
  Bot,
  Workflow,
  Check
} from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Quote Follow-Up & Lead Recovery Systems for Australian Tradies',
  description:
    'Done-for-you systems that follow up every quote, recover cold leads, and convert more enquiries into booked jobs. Built for Australian tradies.',
  path: '/services'
});

interface ServiceBlock {
  id: string;
  icon: typeof MessageSquareText;
  title: string;
  shortName: string;
  tagline: string;
  body: string;
  outcomes: string[];
  setup: string[];
  ctaLabel: string;
}

const services: ServiceBlock[] = [
  {
    id: 'quote-follow-up',
    icon: MessageSquareText,
    title: 'Automated Quote Follow-Up Systems',
    shortName: 'Quote follow-up',
    tagline: 'The flagship service. Every quote, chased automatically.',
    body: 'When a quote leaves your business, it enters a structured, multi-touch follow-up sequence — SMS, email, or both — designed to keep you top of mind, handle common objections, and bring the conversation back to a booking. The system pauses the moment a customer replies and notifies you instantly.',
    outcomes: [
      '20–40% lift in quote conversion within 90 days',
      'Sub-5-minute first response on every enquiry',
      'Multi-step sequences tailored to your trade',
      'No more “I forgot to chase that one”'
    ],
    setup: [
      'A 3–5 step SMS sequence triggered the moment a quote goes out',
      'A 2–3 step email sequence with the quote reattached',
      'Smart pause logic — sequence stops the second a customer replies',
      'Live dashboard showing every open quote and where it is in the sequence'
    ],
    ctaLabel: 'Book a call about quote follow-up'
  },
  {
    id: 'customer-follow-up',
    icon: Workflow,
    title: 'Customer Follow-Up Systems',
    shortName: 'Customer follow-up',
    tagline: 'Stay in touch with past customers — without the admin.',
    body: 'Past customers are the easiest jobs you’ll ever win. We build follow-up systems that check in 30 days post-job, request reviews, ask for referrals, and re-engage at the right time of year (think gutter cleans, fence inspections, AC servicing).',
    outcomes: [
      'More 5-star reviews on Google',
      'A reliable stream of repeat work',
      'Seasonal re-engagement on autopilot',
      'A customer base that actively refers'
    ],
    setup: [
      'A "thanks for the job" message 1–2 days after completion',
      'A review request 5–7 days post-job, linking straight to Google',
      'Seasonal re-engagement messages (winter heating, summer AC, end-of-financial-year)',
      'A referral ask 30 days in — short, polite, no pressure'
    ],
    ctaLabel: 'Book a call about customer follow-up'
  },
  {
    id: 'lead-recovery',
    icon: RotateCcw,
    title: 'Lead Recovery & Cold Quote Reactivation',
    shortName: 'Lead recovery',
    tagline: 'Wake up the months of dead quotes sitting in your CRM.',
    body: 'Every tradie has a graveyard of “open” quotes from 3, 6, 12 months ago. We build a one-time reactivation campaign that contacts every cold lead with a thoughtful, non-pushy message — and recovers jobs you’d already written off.',
    outcomes: [
      'Recover quotes from the past 6–12 months',
      'Often pays for the entire system in week one',
      'Branded, professional, on-tone messaging',
      'Re-engaged leads enter your live follow-up sequence'
    ],
    setup: [
      'A one-time audit of every open quote in your CRM or inbox',
      'A reactivation message tailored to job type (kept short, never pushy)',
      'Replies routed straight to you for instant follow-up',
      'A clear report of who came back, who didn’t, and what won'
    ],
    ctaLabel: 'Book a call about lead recovery'
  },
  {
    id: 'reminders',
    icon: Bell,
    title: 'Automated Reminder Systems',
    shortName: 'Reminders',
    tagline: 'No more no-shows, no more chasing payments.',
    body: 'Appointment reminders, deposit reminders, invoice reminders, site-visit confirmations — all automated, all branded, all timed exactly right. Reduces no-shows, late payments, and the admin time you spend chasing them.',
    outcomes: [
      'Up to 80% fewer site-visit no-shows',
      'Faster invoice payment cycles',
      'Less time on the phone chasing',
      'Customers who feel looked after'
    ],
    setup: [
      'Site-visit confirmation the evening before, with a YES/NO reply prompt',
      'Day-of reminder 1–2 hours before arrival',
      'Deposit reminders if a quote is accepted but unpaid 48 hours later',
      'Invoice reminders 7, 14, and 21 days after the job completes'
    ],
    ctaLabel: 'Book a call about reminders'
  },
  {
    id: 'bookings',
    icon: CalendarCheck,
    title: 'Booking & Calendar Systems',
    shortName: 'Bookings',
    tagline: 'Customers book themselves in. You stop playing phone tag.',
    body: 'When a customer’s ready to move forward, they click a link, pick a time, and the job is in your calendar. Synced with Google or Outlook. Buffered around your work hours. Site-visit forms collect the details you need before you even arrive.',
    outcomes: [
      'No more “what time suits you” back-and-forth',
      'Buffered, smart scheduling that respects job sites',
      'Pre-visit forms collect job details upfront',
      'Calendar synced across the team'
    ],
    setup: [
      'A branded booking link added to your quote and follow-up messages',
      'Time slots configured around your work hours, travel buffers, and days off',
      'A short pre-visit form (job type, address, access notes, photos) sent on booking',
      'Direct sync with Google Calendar or Outlook — and your job management software'
    ],
    ctaLabel: 'Book a call about bookings'
  },
  {
    id: 'ai-comms',
    icon: Bot,
    title: 'AI-Assisted Customer Communication',
    shortName: 'AI-assisted comms',
    tagline: 'Optional. Used carefully. Always under your control.',
    body: 'For trade businesses that want it, we offer AI-assisted reply suggestions — used to draft responses to common customer questions, never to take over conversations. You stay in the driver’s seat. Customers stay talking to a human.',
    outcomes: [
      'Faster replies to common questions',
      'Drafts you approve before sending',
      'Optional — never the default',
      'Built for trust, not novelty'
    ],
    setup: [
      'A "suggested reply" panel that drafts a response when a customer messages',
      'Drafts grounded in your past quotes, pricing, and FAQs — never made up',
      'A clear approve/edit/discard flow before anything sends',
      'Off by default — turned on only for the customer touchpoints you choose'
    ],
    ctaLabel: 'Book a call about AI comms'
  }
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` }
        ])}
      />
      {services.map((s) => (
        <JsonLd
          key={s.id}
          data={serviceSchema({ name: s.title, description: s.tagline, slug: s.id })}
        />
      ))}

      {/* Hero */}
      <Section size="lg" className="pt-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Services</p>
          <h1 className="text-balance font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Systems that <span className="italic text-signal-400">win you more jobs</span> from the
            leads you’ve already got.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
            Every service we build sits inside one bigger goal: stop letting quoted jobs slip through
            the cracks. Whether it’s automated SMS follow-up, dead lead recovery, or a customer
            re-engagement system — we focus on the work that actually moves your numbers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteConfig.bookingUrl}
              external
              variant="primary"
              className="w-full justify-center sm:w-auto"
            >
              {siteConfig.bookingLabel}
            </Button>
            <Button
              href="#quote-follow-up"
              variant="ghost"
              arrow={false}
              className="w-full justify-center sm:w-auto"
            >
              Browse services
            </Button>
          </div>
        </div>
      </Section>

      {/* Service blocks */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const banded = i % 2 === 1;
        return (
          <Section
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 ${banded ? 'border-y border-white/5 bg-ink-900/30' : ''}`}
          >
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <div className="lg:sticky lg:top-28">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-signal-500/30 bg-signal-500/5 px-3 py-1.5 font-mono text-xs text-signal-300">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-bone-500" aria-hidden="true">
                    /
                  </span>
                  <span>{String(services.length).padStart(2, '0')}</span>
                </div>
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-signal-500/20 bg-signal-500/10 text-signal-400"
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="text-balance font-display text-3xl tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-4 font-display text-lg italic text-signal-300 sm:text-xl">
                  {service.tagline}
                </p>
                <p className="mt-6 text-base leading-relaxed text-bone-300 sm:text-lg">
                  {service.body}
                </p>
              </div>

              <div className="card p-7 sm:p-8 md:p-10">
                <p className="eyebrow mb-6">Outcomes</p>
                <ul className="space-y-4">
                  {service.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-4">
                      <span
                        className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-signal-500/30 bg-signal-500/15 text-signal-400"
                        aria-hidden="true"
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-bone-100">{o}</span>
                    </li>
                  ))}
                </ul>

                <hr className="my-7 border-white/5" />

                <p className="eyebrow mb-5">What gets set up</p>
                <ul className="space-y-3">
                  {service.setup.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm leading-relaxed text-bone-300 sm:text-base">
                      <span
                        className="mt-2 inline-block h-1 w-3 flex-none rounded-full bg-signal-500/60"
                        aria-hidden="true"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <hr className="my-7 border-white/5" />
                <Button
                  href={siteConfig.bookingUrl}
                  external
                  variant="primary"
                  className="w-full justify-center"
                >
                  {service.ctaLabel}
                </Button>
              </div>
            </div>
          </Section>
        );
      })}

      {/* Mid-page workflow recap. Kept unbanded so it doesn't stack visually
          with the banded AfterYouSayYes section that follows. */}
      <Section id="how" className="scroll-mt-24">
        <SectionHeader
          eyebrow="The system in motion"
          title="Here’s what runs in the background — every time you send a quote."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-5xl">
          <WorkflowVisual />
        </div>
      </Section>

      <AfterYouSayYes />

      <FinalCta />
    </>
  );
}

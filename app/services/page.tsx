import Link from 'next/link';
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

      {/* Long-form SEO authority section — sits between the workflow recap and
          AfterYouSayYes. Establishes topical depth on quote follow-up systems
          for Australian tradies without disrupting the conversion flow. */}
      <Section
        id="authority"
        aria-labelledby="authority-heading"
        className="scroll-mt-24 border-y border-white/5 bg-ink-900/30"
      >
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-5">The detail</p>
          <h2
            id="authority-heading"
            className="text-balance font-display text-3xl tracking-tight text-bone-50 sm:text-4xl md:text-5xl"
          >
            A practical guide to{' '}
            <span className="italic text-signal-400">quote follow-up systems</span> for Australian
            tradies.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
            If you’re considering an automated quote follow-up system for your trade business, this
            section is the long version. It covers what one actually is, why so many jobs go cold
            after quoting, how the automation runs in the background, and how it integrates with
            the tools you already use — ServiceM8, Tradify, simPRO, AroFlo, and Jobber.
          </p>

          <div className="prose-tradie mt-12 space-y-10 text-[1.05rem] leading-relaxed text-bone-200 sm:text-lg">
            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                What is a quote follow-up system?
              </h3>
              <p className="mt-4">
                A quote follow-up system is a structured, automated sequence of SMS and email
                messages that goes out after a tradie sends a quote. Its job is to keep the
                customer engaged across the days and weeks following the quote, answer common
                questions before they become reasons to stall, and bring the conversation back
                toward a booking. The system pauses the moment the customer replies. From that
                point, the conversation is yours.
              </p>
              <p className="mt-4">
                For most trade businesses, a proper system replaces the ad-hoc &ldquo;I&rsquo;ll
                call them tomorrow&rdquo; cycle with a consistent process that runs whether
                you&rsquo;re on site, on the road, or finishing a job after dark. It is not a
                chatbot, not a CRM, and not a generic marketing tool. It is a focused
                follow-up layer that plugs into the tools you already use and quietly does the
                chasing for you.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Why tradies lose jobs after quoting
              </h3>
              <p className="mt-4">
                Most lost jobs aren&rsquo;t lost on price. They&rsquo;re lost in the gap between
                sending the quote and the customer&rsquo;s next decision moment. The customer was
                busy. They had three other things going on. They meant to reply. They got another
                quote and forgot which was which. By the time anyone follows up — if anyone
                follows up at all — the moment has passed.
              </p>
              <p className="mt-4">
                On top of that, most tradies are quoting in the evening, on the road, or between
                jobs. Following up properly means remembering who you quoted, when, what for, and
                what you said. It means doing it at the right time, in the right tone, without
                sounding desperate. It&rsquo;s not that tradies don&rsquo;t want to follow up — it&rsquo;s
                that the working day doesn&rsquo;t leave room for it. A quote follow-up system
                takes that work off your plate without changing the way you quote.
              </p>
              <p className="mt-4">
                Our{' '}
                <Link
                  href="/blog/quote-follow-up-system-for-tradies"
                  className="text-signal-400 underline-offset-4 hover:underline"
                >
                  full guide to quote follow-up systems for tradies
                </Link>{' '}
                breaks down the specific patterns we see across trade businesses — and what to do
                about each one.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                How automated quote follow-up actually works
              </h3>
              <p className="mt-4">
                When a quote leaves your business — through ServiceM8, Tradify, simPRO, AroFlo,
                Jobber, or just a normal email — the follow-up system picks it up and triggers a
                pre-built sequence. A short confirmation SMS goes out within minutes, so the
                customer knows the quote landed. The next morning, a polite check-in. A few days
                later, an email with the quote reattached and a couple of common questions
                answered up front. A short SMS around day seven. A no-pressure email around day
                fourteen. Then, for quotes that have gone quiet, a longer-tail reactivation track.
              </p>
              <p className="mt-4">
                Every message is written in your voice, approved by you before it goes live, and
                tuned to the kind of work you do. Wording for a fencing quote isn&rsquo;t the same
                as wording for a bathroom renovation. The cadence for a $400 job isn&rsquo;t the
                same as the cadence for a $40,000 one. The system is built around your trade and
                your typical jobs — not a generic template.
              </p>
              <p className="mt-4">
                The moment a customer replies anywhere in the sequence, everything stops and
                you&rsquo;re notified. No accidental chasing, no awkward overlap with conversations
                that have already moved forward. From there, you take over.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Why speed-to-lead matters
              </h3>
              <p className="mt-4">
                Speed-to-lead is the time between a customer expressing interest and the trade
                business responding. The longer that gap, the more competition you give the lead
                time to find — and the colder the customer becomes. For most trade enquiries, the
                first business to reply in a thoughtful, professional way has a significant
                advantage. Not because they&rsquo;re cheaper. Because they&rsquo;re the one the
                customer is actively talking to.
              </p>
              <p className="mt-4">
                An automated quote follow-up system closes that gap by default. The confirmation
                SMS goes out within minutes, even on a Saturday evening. The first proper
                follow-up lands the next morning. By the time competitors are still working out
                whether to chase the lead, you&rsquo;ve already had three thoughtful touchpoints.
                That&rsquo;s not aggressive — it&rsquo;s consistent. And consistent beats sporadic
                every time.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Lead recovery systems — turning cold quotes back into jobs
              </h3>
              <p className="mt-4">
                Every trade business has a stack of cold quotes. Quotes that went out six months
                ago, a year ago, longer. The customer never said no. They just stopped replying.
                Those quotes sit in your CRM or inbox and feel like dead weight — but for most
                tradies, that pile is the fastest revenue you&rsquo;ll ever recover.
              </p>
              <p className="mt-4">
                A lead recovery system reaches out to those cold quotes in a one-off, carefully
                worded reactivation. The message acknowledges the time that&rsquo;s passed, gives
                the customer a low-friction way back into the conversation, and offers a clear
                next step. It&rsquo;s polite, short, and never pushy. Customers who are still
                interested come back. Customers who&rsquo;ve moved on close the loop. Either way,
                you know where you stand.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Cold quote reactivation — the long-tail track
              </h3>
              <p className="mt-4">
                Beyond the initial reactivation campaign, the system keeps cold quotes alive on a
                slow drip. Every couple of months, a short check-in goes out — seasonal where it
                makes sense (think gutter cleans before winter, AC checks before summer), or
                straightforward where it doesn&rsquo;t. The volume is small. The cumulative effect
                isn&rsquo;t. Cold quote reactivation is one of the quietest ways to add jobs to
                the calendar from leads you&rsquo;d already written off.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                How the system integrates with your existing tools
              </h3>
              <p className="mt-4">
                The system is built to sit alongside the software you already use — not to replace
                it. You keep quoting in the tool you know. The follow-up layer triggers off the
                quote going out, runs in the background, and reports back into your existing
                workflow. Here&rsquo;s how that looks across the platforms we work with most.
              </p>

              <h4 className="mt-8 pt-2 font-display text-xl font-semibold tracking-tight text-bone-50 md:text-2xl">
                ServiceM8 follow-up
              </h4>
              <p className="mt-3">
                ServiceM8 is one of the most common platforms for Australian trade businesses, and
                the follow-up system plugs in cleanly. When you send a quote out of ServiceM8, the
                system picks it up and triggers the sequence automatically. Replies, bookings, and
                status changes flow back into your ServiceM8 jobs so you have a single source of
                truth. You don&rsquo;t need to change the way you quote, schedule, or invoice.
              </p>

              <h4 className="mt-8 pt-2 font-display text-xl font-semibold tracking-tight text-bone-50 md:text-2xl">
                Tradify follow-up
              </h4>
              <p className="mt-3">
                Tradify users keep quoting and tracking jobs the same way they always have. The
                follow-up sequence triggers off quote events, and customer replies route directly
                to your existing communication threads. The system layers a structured follow-up
                process on top of Tradify without asking you to migrate or learn anything new.
              </p>

              <h4 className="mt-8 pt-2 font-display text-xl font-semibold tracking-tight text-bone-50 md:text-2xl">
                simPRO follow-up
              </h4>
              <p className="mt-3">
                simPRO is built for larger trade operations with more moving parts. The follow-up
                system respects that — sequences can be configured per job type, per branch, or per
                estimator, so a $2,000 service call and a $200,000 commercial install don&rsquo;t
                get the same cadence. Reporting feeds back into your simPRO data so the team can
                see what&rsquo;s converting and where the bottlenecks are.
              </p>

              <h4 className="mt-8 pt-2 font-display text-xl font-semibold tracking-tight text-bone-50 md:text-2xl">
                AroFlo follow-up
              </h4>
              <p className="mt-3">
                AroFlo tradies get the same model: keep quoting the way you already do, and let
                the follow-up layer run quietly underneath. Sequences are built around the trades
                AroFlo is strongest in — electrical, plumbing, HVAC, mechanical — with wording
                that fits how those jobs actually get quoted and won.
              </p>

              <h4 className="mt-8 pt-2 font-display text-xl font-semibold tracking-tight text-bone-50 md:text-2xl">
                Jobber follow-up
              </h4>
              <p className="mt-3">
                Jobber is popular with sole operators and small crews. The follow-up system is
                tuned for that scale: lean sequences, less admin, and a clear single inbox for
                replies. No new dashboards to babysit between jobs.
              </p>

              <p className="mt-6">
                Not on this list? Most other systems we work with too — Fergus, NextMinute,
                Buildxact, HousecallPro, plus general CRMs like HubSpot and Pipedrive, and plain
                email setups via Gmail or Outlook. If you&rsquo;ve got a tool we haven&rsquo;t
                named,{' '}
                <Link
                  href="/contact"
                  className="text-signal-400 underline-offset-4 hover:underline"
                >
                  send us a message
                </Link>{' '}
                and we&rsquo;ll tell you straight whether it&rsquo;s a fit.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Which trades benefit most
              </h3>
              <p className="mt-4">
                Any trade business that sends quotes and wants more of them to turn into booked
                work benefits from a follow-up system. In practice, we work most often with
                fencing contractors, landscapers, electricians, plumbers, concreters, builders,
                carpenters, painters, HVAC installers, and solar installers. The common thread is
                volume: businesses sending enough quotes a month that manual follow-up has stopped
                being realistic, but not so much volume that they&rsquo;ve already hired a
                full-time admin person to chase quotes.
              </p>
              <p className="mt-4">
                Sole operators benefit because the system is doing the work they don&rsquo;t have
                time to do themselves. Small crews benefit because everyone follows up the same
                way, in the same tone, on the same cadence. Larger trade businesses benefit
                because the inconsistency between estimators and reps disappears.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Common objections — answered straight
              </h3>
              <p className="mt-4">
                <strong className="font-semibold text-bone-50">
                  &ldquo;My customers will know it&rsquo;s automated.&rdquo;
                </strong>{' '}
                If the wording reads like a marketing email, yes. Ours doesn&rsquo;t. Every message
                is written to sound like something you&rsquo;d actually send — short, plain, no
                exclamation marks, no &ldquo;Dear valued customer.&rdquo; You read and approve
                every message before it goes live.
              </p>
              <p className="mt-4">
                <strong className="font-semibold text-bone-50">
                  &ldquo;I don&rsquo;t want to annoy people.&rdquo;
                </strong>{' '}
                A polite SMS three days after a quote isn&rsquo;t annoying. Six emails in a week
                is. The cadence is deliberately spaced, the wording is deliberately calm, and the
                whole sequence stops the second the customer replies — including a clear opt-out
                if they want one.
              </p>
              <p className="mt-4">
                <strong className="font-semibold text-bone-50">
                  &ldquo;I already follow up.&rdquo;
                </strong>{' '}
                Most tradies who say this mean &ldquo;I follow up on the big quotes I remember.&rdquo;
                The system follows up on every quote, every time, on schedule. That&rsquo;s a
                different thing.
              </p>
              <p className="mt-4">
                <strong className="font-semibold text-bone-50">
                  &ldquo;I&rsquo;ll have to learn new software.&rdquo;
                </strong>{' '}
                You won&rsquo;t. The system runs behind the tools you already use. Your job is to
                keep quoting the way you always have. The follow-up happens whether you log into
                anything or not.
              </p>
              <p className="mt-4">
                More questions? Have a look at the{' '}
                <Link
                  href="/faqs"
                  className="text-signal-400 underline-offset-4 hover:underline"
                >
                  full FAQ
                </Link>{' '}
                — it covers setup, integrations, pricing, and what happens in the first 30 days.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Realistic expectations
              </h3>
              <p className="mt-4">
                A follow-up system isn&rsquo;t a magic switch. It doesn&rsquo;t turn a $500 lead
                into a $50,000 job, and it doesn&rsquo;t convince customers who genuinely
                weren&rsquo;t going to buy. What it does is consistently capture the jobs that
                were already winnable — the ones that would have been lost to silence, distraction,
                or someone else getting back to the customer first.
              </p>
              <p className="mt-4">
                Most trade businesses start seeing recovered jobs within the first few weeks of
                going live, particularly if a cold-quote reactivation campaign is running
                alongside the new-quote sequence. The compounding effect builds over the first
                three months as the system tunes to your trade and your typical customers. From
                month three onwards, it just runs.
              </p>
              <p className="mt-4">
                We don&rsquo;t publish blanket conversion-lift percentages. Trade businesses are
                too different, and any number we put on a website would be either wrong or
                misleading. On a free strategy call we&rsquo;ll look at your specific quote volume,
                average job value, and current process, and give you a grounded estimate based on
                your actual numbers.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Why consistent follow-up beats manual follow-up
              </h3>
              <p className="mt-4">
                The case for automation isn&rsquo;t that the machine is better than the human. The
                case is that the human is on a roof at 2pm, on the road at 4pm, and quoting at
                7pm — and the customer who wanted to be followed up on Tuesday morning is gone by
                Friday. Consistency is the moat. A polite, on-time, on-brand message every time,
                without depending on whether anyone remembered, is the difference between a
                business that wins the quotes it should and one that loses them quietly.
              </p>
              <p className="mt-4">
                That&rsquo;s the entire bet. Not flashier marketing. Not more leads. Just the
                follow-up that should already be happening, happening every time. If that sounds
                like the gap in your business, the next step is a short conversation — see{' '}
                <Link
                  href="/services"
                  className="text-signal-400 underline-offset-4 hover:underline"
                >
                  the full service range
                </Link>
                , read the{' '}
                <Link
                  href="/faqs"
                  className="text-signal-400 underline-offset-4 hover:underline"
                >
                  FAQs
                </Link>
                , or{' '}
                <Link
                  href="/contact"
                  className="text-signal-400 underline-offset-4 hover:underline"
                >
                  book a free strategy call
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>

      <AfterYouSayYes />

      <FinalCta />
    </>
  );
}
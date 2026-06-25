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
  Workflow,
  Bot,
  RotateCcw,
  Bell,
  CalendarCheck,
  Check
} from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Quote Follow-Up Systems for Australian Tradies',
  description:
    'Done-for-you quote follow-up systems for Australian tradies. Choose from automation-only, automation with AI assistance, or AI-led follow-up systems.',
  path: '/services'
});

interface TierBlock {
  id: string;
  icon: typeof MessageSquareText;
  name: string;
  model: string;
  tagline: string;
  bestFor: string;
  body: string;
  includes: string[];
  humanRole: string[];
  ctaLabel: string;
}

const tiers: TierBlock[] = [
  {
    id: 'follow-up-starter',
    icon: MessageSquareText,
    name: 'Follow-Up Starter',
    model: 'Human + Automation',
    tagline: 'The simple quote follow-up system that never forgets.',
    bestFor:
      'Best for sole traders and small crews who want every quote followed up properly, while still handling replies and decisions themselves.',
    body:
      'Follow-Up Starter gives your trade business a clean, consistent quote follow-up process. When a quote is sent, the system triggers polite SMS and/or email follow-ups, creates reminders, tracks open quotes, and stops the sequence when a customer replies. Your team still handles the conversation, but the system makes sure nobody forgets to follow up.',
    includes: [
      'Automated SMS and/or email follow-up after a quote is sent',
      'A simple follow-up sequence written in your tone',
      'Task reminders for quotes that need a manual call',
      'Pause logic so follow-ups stop when a customer replies',
      'A clear view of which quotes are still open',
      'Setup around your existing quoting process'
    ],
    humanRole: [
      'You or your team reply to customers',
      'You decide which quotes deserve a phone call',
      'You approve the wording before anything goes live',
      'You stay fully in control of the customer relationship'
    ],
    ctaLabel: 'Book a call about Follow-Up Starter'
  },
  {
    id: 'follow-up-assist',
    icon: Workflow,
    name: 'Follow-Up Assist',
    model: 'Human/AI + Automation',
    tagline: 'Automation runs the process. AI helps with the thinking.',
    bestFor:
      'Best for growing trade businesses that want faster admin support, better quote tracking, and AI assistance without handing the whole conversation to AI.',
    body:
      'Follow-Up Assist adds AI support on top of your automated quote follow-up system. The automation keeps the sequence moving, while AI can help draft replies, summarise customer intent, suggest next steps, and flag quotes that look ready to move forward. The human still approves sensitive actions and steps in where judgement matters.',
    includes: [
      'Everything in Follow-Up Starter',
      'AI-assisted reply drafts for common quote follow-up responses',
      'Quote status summaries so you can quickly see where each lead sits',
      'Suggested next steps based on customer replies',
      'Lead intent tagging such as interested, unsure, price-sensitive, or not ready',
      'Alerts when a quote looks ready for a call or booking'
    ],
    humanRole: [
      'You approve, edit, or ignore AI reply suggestions',
      'You still handle important customer conversations',
      'You choose when the AI is allowed to help',
      'You keep control while reducing admin load'
    ],
    ctaLabel: 'Book a call about Follow-Up Assist'
  },
  {
    id: 'follow-up-engine',
    icon: Bot,
    name: 'Follow-Up Engine',
    model: 'AI + Automation',
    tagline: 'The most hands-off quote follow-up system.',
    bestFor:
      'Best for trade businesses that want the system to do more of the chasing, sorting, responding and booking — with humans stepping in when needed.',
    body:
      'Follow-Up Engine is the highest level quote follow-up system. Automation runs the sequence, while AI can handle more of the customer conversation, qualify customer intent, answer common questions, update the pipeline, and push serious opportunities toward the next step. It is built with guardrails so the system knows when to stop and alert a human.',
    includes: [
      'Everything in Follow-Up Assist',
      'AI-led follow-up conversations for approved customer touchpoints',
      'Automatic quote status updates based on customer replies',
      'Customer qualification and intent detection',
      'Booking links or next-step prompts when a customer is ready',
      'Human handoff rules for pricing, complaints, complex questions, and edge cases'
    ],
    humanRole: [
      'You define the rules and guardrails',
      'You decide what AI is allowed to send',
      'You step in when the system flags a customer for human attention',
      'You review performance and adjust the process over time'
    ],
    ctaLabel: 'Book a call about Follow-Up Engine'
  }
];

const systemIncludes = [
  {
    icon: Bell,
    title: 'Follow-up timing',
    body:
      'A clear sequence that follows up quotes at the right moments without relying on memory.'
  },
  {
    icon: MessageSquareText,
    title: 'SMS and email wording',
    body:
      'Plain-English messages written to sound like your business, not a generic marketing campaign.'
  },
  {
    icon: RotateCcw,
    title: 'Cold quote recovery',
    body:
      'A way to re-engage old quotes that never formally said yes or no.'
  },
  {
    icon: CalendarCheck,
    title: 'Next-step prompts',
    body:
      'Booking links, call reminders, or task prompts so interested customers do not get left hanging.'
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

      {tiers.map((tier) => (
        <JsonLd
          key={tier.id}
          data={serviceSchema({
            name: tier.name,
            description: `${tier.model}: ${tier.tagline}`,
            slug: tier.id
          })}
        />
      ))}

      {/* Hero */}
      <Section size="lg" className="pt-20 md:pt-28">
        <div className="max-w-4xl">
          <p className="eyebrow mb-5">Quote follow-up systems for tradies</p>
          <h1 className="text-balance font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Follow up every quote.{' '}
            <span className="italic text-signal-400">Win more of the jobs</span> you’ve already
            quoted.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
            Tradie Systems Co builds done-for-you quote follow-up systems for Australian trade
            businesses. Start with simple automation, add AI assistance when you’re ready, or build
            a more hands-off AI follow-up engine that keeps your pipeline moving.
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
              href="#tiers"
              variant="ghost"
              arrow={false}
              className="w-full justify-center sm:w-auto"
            >
              Compare the tiers
            </Button>
          </div>
        </div>
      </Section>

      {/* Positioning */}
      <Section className="border-y border-white/5 bg-ink-900/30">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow mb-5">The core problem</p>
            <h2 className="text-balance font-display text-3xl tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
              Most trade businesses don’t need more leads first. They need to stop losing the
              quotes they already sent.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-bone-300 sm:text-lg">
            <p>
              A customer asks for a quote. You inspect the job, price it, send it out — then the
              follow-up depends on memory, spare time, or whoever happens to check the pipeline
              that week.
            </p>
            <p>
              That is where good jobs go cold. Not because the customer hated the quote, and not
              always because someone else was cheaper. Often, the business that follows up clearly
              and consistently is the one that gets the next conversation.
            </p>
            <p>
              Our service is focused on that gap: what happens after the quote is sent.
            </p>
          </div>
        </div>
      </Section>

      {/* Tier overview */}
      <Section id="tiers" className="scroll-mt-24">
        <SectionHeader
          eyebrow="Three levels"
          title="Choose the level of follow-up support that fits your business."
          description="Every tier is built around quote follow-up. The difference is how much work is handled by humans, automation and AI."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon;

            return (
              <article key={tier.id} className="card flex h-full flex-col p-7 sm:p-8">
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-signal-500/20 bg-signal-500/10 text-signal-400"
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" />
                </div>

                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-signal-300">
                  {tier.model}
                </p>

                <h3 className="font-display text-2xl tracking-tight text-bone-50 sm:text-3xl">
                  {tier.name}
                </h3>

                <p className="mt-3 font-display text-lg italic text-signal-300">
                  {tier.tagline}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-bone-300 sm:text-base">
                  {tier.bestFor}
                </p>

                <div className="mt-7 flex-1">
                  <p className="eyebrow mb-4">Includes</p>
                  <ul className="space-y-3">
                    {tier.includes.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-bone-200">
                        <span
                          className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-signal-500/30 bg-signal-500/15 text-signal-400"
                          aria-hidden="true"
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href={`#${tier.id}`}
                  variant="ghost"
                  arrow={false}
                  className="mt-8 w-full justify-center"
                >
                  View details
                </Button>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Tier details */}
      {tiers.map((tier, i) => {
        const Icon = tier.icon;
        const banded = i % 2 === 1;

        return (
          <Section
            key={tier.id}
            id={tier.id}
            className={`scroll-mt-24 ${banded ? 'border-y border-white/5 bg-ink-900/30' : ''}`}
          >
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <div className="lg:sticky lg:top-28">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-signal-500/30 bg-signal-500/5 px-3 py-1.5 font-mono text-xs text-signal-300">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-bone-500" aria-hidden="true">
                    /
                  </span>
                  <span>{String(tiers.length).padStart(2, '0')}</span>
                </div>

                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-signal-500/20 bg-signal-500/10 text-signal-400"
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" />
                </div>

                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-signal-300">
                  {tier.model}
                </p>

                <h2 className="text-balance font-display text-3xl tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
                  {tier.name}
                </h2>

                <p className="mt-4 font-display text-lg italic text-signal-300 sm:text-xl">
                  {tier.tagline}
                </p>

                <p className="mt-6 text-base leading-relaxed text-bone-300 sm:text-lg">
                  {tier.body}
                </p>
              </div>

              <div className="card p-7 sm:p-8 md:p-10">
                <p className="eyebrow mb-6">What gets set up</p>
                <ul className="space-y-4">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span
                        className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-signal-500/30 bg-signal-500/15 text-signal-400"
                        aria-hidden="true"
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-bone-100">{item}</span>
                    </li>
                  ))}
                </ul>

                <hr className="my-7 border-white/5" />

                <p className="eyebrow mb-5">The human role</p>
                <ul className="space-y-3">
                  {tier.humanRole.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-bone-300 sm:text-base"
                    >
                      <span
                        className="mt-2 inline-block h-1 w-3 flex-none rounded-full bg-signal-500/60"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
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
                  {tier.ctaLabel}
                </Button>
              </div>
            </div>
          </Section>
        );
      })}

      {/* What every system includes */}
      <Section id="included" className="scroll-mt-24">
        <SectionHeader
          eyebrow="What every system is built around"
          title="The same core goal in every tier: follow up quotes consistently."
          description="The technology changes by tier, but the job stays the same — make sure quoted customers are followed up properly until they reply, book, decline, or go cold."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {systemIncludes.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="card p-6">
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-signal-500/20 bg-signal-500/10 text-signal-400"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl tracking-tight text-bone-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-300">{item.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Mid-page workflow recap */}
      <Section id="how" className="scroll-mt-24 border-y border-white/5 bg-ink-900/30">
        <SectionHeader
          eyebrow="The system in motion"
          title="Here’s what runs in the background every time you send a quote."
          description="A quote is sent, the follow-up sequence starts, replies pause the sequence, and your business is alerted when a customer needs attention."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-5xl">
          <WorkflowVisual />
        </div>
      </Section>

      {/* Long-form SEO/AEO authority section */}
      <Section id="authority" aria-labelledby="authority-heading" className="scroll-mt-24">
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
            A quote follow-up system is not a chatbot, not a replacement for your trade software,
            and not a generic marketing campaign. It is a focused layer that sits after the quote
            is sent and makes sure every customer is followed up consistently.
          </p>

          <div className="prose-tradie mt-12 space-y-10 text-[1.05rem] leading-relaxed text-bone-200 sm:text-lg">
            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                What is a quote follow-up system?
              </h3>
              <p className="mt-4">
                A quote follow-up system is a structured process that follows up customers after a
                trade business sends a quote. Depending on the tier, it can use SMS, email, task
                reminders, AI-assisted drafts, or AI-led replies to keep the conversation moving
                until the customer replies, books, declines, or goes cold.
              </p>
              <p className="mt-4">
                For most trade businesses, the first version does not need to be complicated. The
                biggest win is consistency. Every quote gets followed up. The wording is clear. The
                timing is set. The system pauses when a customer replies. The business is notified
                when a human needs to step in.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Why this site is focused on quote follow-up
              </h3>
              <p className="mt-4">
                Tradie Systems Co is focused on the part of the sales process that happens after a
                quote is sent. Many trade businesses spend time and money getting enquiries, but
                then rely on memory, sticky notes, inbox searches, or manual calls to follow up the
                quotes they have already prepared.
              </p>
              <p className="mt-4">
                That is the niche we are building around: quote follow-up for Australian tradies.
                Other automation problems can be solved later, but this website is designed to be
                clear about one thing — helping trade businesses win more of the quoted jobs that
                are already sitting in their pipeline.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                How the three tiers work
              </h3>
              <p className="mt-4">
                Follow-Up Starter is the simplest version. The client and their team remain fully
                responsible for replies and decisions, while automation handles the timing,
                reminders, and basic follow-up messages.
              </p>
              <p className="mt-4">
                Follow-Up Assist adds AI support. The automation still runs the process, but AI can
                help draft replies, summarise quote status, detect customer intent, and suggest the
                next step. A human still approves sensitive actions.
              </p>
              <p className="mt-4">
                Follow-Up Engine is the most advanced version. AI can take on more of the
                follow-up conversation, update quote status, qualify intent, and move serious leads
                toward a booking or human handoff. This tier is for businesses that want the system
                to do more of the chasing and sorting.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Why tradies lose jobs after quoting
              </h3>
              <p className="mt-4">
                Most lost quotes do not disappear in one dramatic moment. They go quiet. The
                customer gets busy. They compare three quotes. They forget who sent what. The
                tradie means to follow up but gets pulled onto another job. By the time someone
                remembers, the customer has either chosen someone else or lost interest.
              </p>
              <p className="mt-4">
                A quote follow-up system gives the business a consistent process instead of hoping
                someone remembers. It does not replace good quoting, good service, or fair pricing.
                It simply makes sure the follow-up that should already be happening actually
                happens.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                How automated quote follow-up works
              </h3>
              <p className="mt-4">
                When a quote is sent, the system triggers a follow-up sequence. That might include
                a short SMS confirming the quote was sent, a polite check-in a few days later, an
                email with the quote reattached, a task reminder to call higher-value quotes, and a
                longer-tail message for quotes that have gone quiet.
              </p>
              <p className="mt-4">
                The sequence is written around the business, the trade, the job type, and the tone
                the client wants to use. A fencing quote, an electrical quote, a landscaping quote,
                and a renovation quote should not all sound exactly the same.
              </p>
              <p className="mt-4">
                The key rule is simple: when the customer replies, the system stops chasing and the
                business is notified.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Cold quote recovery
              </h3>
              <p className="mt-4">
                Many trade businesses have old quotes sitting in their CRM, inbox, spreadsheet, or
                job management software. The customer never said yes, but they may never have said
                no either. Cold quote recovery is the process of carefully re-engaging those old
                quotes with a short, professional message.
              </p>
              <p className="mt-4">
                The aim is not to pressure people. It is to reopen the conversation, clean up the
                pipeline, and find out which old opportunities are still alive.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                How it fits with your existing tools
              </h3>
              <p className="mt-4">
                The follow-up system is designed to sit alongside the tools a trade business
                already uses. That might include ServiceM8, Tradify, simPRO, AroFlo, Jobber,
                Fergus, NextMinute, Buildxact, HubSpot, Pipedrive, Gmail, Outlook, or a simpler
                quoting process.
              </p>
              <p className="mt-4">
                The goal is not to force a business into new software. The goal is to add a
                follow-up layer around the quoting process they already have.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Which trade businesses are a good fit?
              </h3>
              <p className="mt-4">
                Quote follow-up systems are useful for trade businesses that send quotes and have
                enough quote volume that manual follow-up is becoming inconsistent. That can
                include fencing contractors, landscapers, electricians, plumbers, concreters,
                builders, carpenters, painters, HVAC businesses, roofers, pool builders, and solar
                installers.
              </p>
              <p className="mt-4">
                The best fit is usually a business that already gets enquiries and sends quotes,
                but suspects too many quoted jobs are going cold without a clear reason.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Common questions
              </h3>
              <p className="mt-4">
                <strong className="font-semibold text-bone-50">Is this just a chatbot?</strong>{' '}
                No. The core service is quote follow-up. AI can be added in the higher tiers, but
                the system is built around following up quotes, not replacing your business with a
                chatbot.
              </p>
              <p className="mt-4">
                <strong className="font-semibold text-bone-50">
                  Do I have to use AI straight away?
                </strong>{' '}
                No. Follow-Up Starter is automation-only. It is designed for businesses that want a
                reliable process without AI handling customer conversations.
              </p>
              <p className="mt-4">
                <strong className="font-semibold text-bone-50">
                  Can I approve messages before they go live?
                </strong>{' '}
                Yes. The wording, timing, and rules are agreed before the system goes live.
              </p>
              <p className="mt-4">
                <strong className="font-semibold text-bone-50">
                  What happens when a customer replies?
                </strong>{' '}
                The follow-up sequence pauses or stops, and the business is notified so the
                conversation can continue properly.
              </p>
              <p className="mt-4">
                More questions are covered on the{' '}
                <Link
                  href="/faqs"
                  className="text-signal-400 underline-offset-4 hover:underline"
                >
                  FAQ page
                </Link>
                .
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                The first step is a quote follow-up audit
              </h3>
              <p className="mt-4">
                The free audit looks at what happens after a quote is sent. We look at how many
                quotes you send, how you follow them up now, where the process breaks, what tools
                you already use, and which tier makes the most sense.
              </p>
              <p className="mt-4">
                From there, you get a clear recommendation: keep it simple with automation, add AI
                assistance, or build a more advanced AI follow-up engine.
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
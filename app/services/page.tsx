import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site.config';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { FinalCta } from '@/components/sections/FinalCta';
import { WorkflowVisual } from '@/components/sections/WorkflowVisual';
import {
  MessageSquareText,
  Workflow,
  Bot,
  RotateCcw,
  Bell,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Search,
  Wrench
} from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Free Quote Follow-Up Audit for Australian Tradies',
  description:
    'Book a free quote follow-up audit for your trade business. We review what happens after you send a quote, find where jobs are slipping through the cracks, and show you what to fix.',
  path: '/services'
});

const auditSteps = [
  {
    icon: Search,
    title: 'We map your current quote follow-up process',
    body:
      'We look at what happens after a quote is sent: who follows up, when they follow up, what messages are used, and where the process relies on memory.'
  },
  {
    icon: ClipboardCheck,
    title: 'We find the gaps',
    body:
      'We identify where quoted jobs are going cold, where customers are not being chased, where replies are missed, and where your current tools are not being used properly.'
  },
  {
    icon: Wrench,
    title: 'You get a practical fix plan',
    body:
      'You leave with clear recommendations you can either implement yourself or hire us to build for you.'
  }
];

const auditChecks = [
  'How quickly customers hear from you after a quote is sent',
  'Whether every quote gets a follow-up or only the ones you remember',
  'Where SMS, email, calls, reminders and tasks should fit',
  'Whether old quotes can be reactivated',
  'What should stay manual and what can be automated',
  'Whether AI would actually help, or whether simple automation is enough'
];

const implementationOptions = [
  {
    id: 'diy-plan',
    icon: ClipboardCheck,
    name: 'DIY Follow-Up Plan',
    model: 'You implement it yourself',
    tagline: 'For tradies who want the audit findings and want to fix the process themselves.',
    body:
      'After the audit, you can take the recommendations and implement them yourself. This might mean changing your follow-up timing, writing better SMS templates, setting reminders in your existing software, or creating a simple manual process for your team.',
    includes: [
      'A clear diagnosis of where the follow-up process is breaking',
      'Recommended follow-up timing',
      'Suggested SMS and email wording',
      'A simple quote follow-up structure',
      'Advice on what to fix first'
    ]
  },
  {
    id: 'follow-up-starter',
    icon: MessageSquareText,
    name: 'Follow-Up Starter',
    model: 'Human + Automation',
    tagline: 'Simple automation that makes sure every quote gets followed up.',
    body:
      'This is the entry-level done-for-you system. Your team still handles replies, calls and judgement, but automation handles the reminders, follow-up messages and quote tracking so nothing gets forgotten.',
    includes: [
      'Automated SMS and/or email follow-up after a quote is sent',
      'A simple follow-up sequence written in your tone',
      'Task reminders for quotes that need a manual call',
      'Pause logic when customers reply',
      'A clear view of which quotes are still open'
    ]
  },
  {
    id: 'follow-up-assist',
    icon: Workflow,
    name: 'Follow-Up Assist',
    model: 'Human/AI + Automation',
    tagline: 'Automation runs the process. AI helps with the admin and next steps.',
    body:
      'This adds AI support to the follow-up process. Automation keeps things moving, while AI can help draft replies, summarise quote status, detect customer intent and suggest the next action. A human still approves sensitive actions.',
    includes: [
      'Everything in Follow-Up Starter',
      'AI-assisted reply drafts',
      'Quote status summaries',
      'Suggested next steps from customer replies',
      'Lead intent tagging',
      'Alerts when a quote looks ready for a call or booking'
    ]
  },
  {
    id: 'follow-up-engine',
    icon: Bot,
    name: 'Follow-Up Engine',
    model: 'AI + Automation',
    tagline: 'The most hands-off quote follow-up system.',
    body:
      'This is the most advanced implementation. AI can handle more of the follow-up conversation, qualify customer intent, update quote status, push customers toward the next step and alert your team when human attention is needed.',
    includes: [
      'Everything in Follow-Up Assist',
      'AI-led follow-up conversations for approved touchpoints',
      'Automatic quote status updates',
      'Customer qualification and intent detection',
      'Booking links or next-step prompts',
      'Human handoff rules for complex situations'
    ]
  }
];

const systemAreas = [
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

      <JsonLd
        data={serviceSchema({
          name: 'Free Quote Follow-Up Audit',
          description:
            'A free audit for Australian tradies that reviews what happens after a quote is sent and identifies where follow-up can be improved.',
          slug: 'free-quote-follow-up-audit'
        })}
      />

      {implementationOptions.slice(1).map((option) => (
        <JsonLd
          key={option.id}
          data={serviceSchema({
            name: option.name,
            description: `${option.model}: ${option.tagline}`,
            slug: option.id
          })}
        />
      ))}

      {/* Hero */}
      <Section size="lg" className="pt-20 md:pt-28">
        <div className="max-w-4xl">
          <p className="eyebrow mb-5">Free quote follow-up audit</p>
          <h1 className="text-balance font-display text-[2.25rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl">
            Find out where your quoted jobs are{' '}
            <span className="italic text-signal-400">slipping through the cracks.</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
            We audit what happens after you send a quote, show you where the follow-up is breaking
            down, and give you a practical plan to fix it. You can implement the changes yourself
            or hire us to build the system for you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteConfig.bookingUrl}
              external
              variant="primary"
              className="w-full justify-center sm:w-auto"
            >
              Book a Free Quote Follow-Up Audit
            </Button>
            <Button
              href="#how-the-audit-works"
              variant="ghost"
              arrow={false}
              className="w-full justify-center sm:w-auto"
            >
              See how the audit works
            </Button>
          </div>
        </div>
      </Section>

      {/* Positioning */}
      <Section className="border-y border-white/5 bg-ink-900/30">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow mb-5">The goal</p>
            <h2 className="text-balance font-display text-3xl tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
              This is not about selling you software before we understand the problem.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-bone-300 sm:text-lg">
            <p>
              The first step is not choosing a package. The first step is understanding what is
              actually happening after your quotes are sent.
            </p>
            <p>
              Some trade businesses only need a better manual process. Some need simple automation.
              Some are ready for AI-assisted follow-up. Others need a more advanced system that can
              chase, sort and update quotes with less human involvement.
            </p>
            <p>
              The audit gives us the information needed to recommend the right fix instead of
              guessing.
            </p>
          </div>
        </div>
      </Section>

      {/* Audit steps */}
      <Section id="how-the-audit-works" className="scroll-mt-24">
        <SectionHeader
          eyebrow="How the audit works"
          title="We diagnose the follow-up process before recommending a system."
          description="The audit is designed to give you a clear view of what is happening after quotes are sent, where jobs may be going cold, and what should be fixed first."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {auditSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="card p-7 sm:p-8">
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-signal-500/20 bg-signal-500/10 text-signal-400"
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl tracking-tight text-bone-50">
                  {step.title}
                </h3>
                <p className="mt-4 leading-relaxed text-bone-300">{step.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Audit checks */}
      <Section className="border-y border-white/5 bg-ink-900/30">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5">What we look at</p>
            <h2 className="text-balance font-display text-3xl tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
              The audit focuses on one question: what happens after the quote is sent?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-bone-300">
              We are not trying to overhaul your whole business on the first call. We are looking
              for the highest-value follow-up gaps that are causing quoted jobs to go cold.
            </p>
          </div>

          <div className="card p-7 sm:p-8">
            <ul className="space-y-4">
              {auditChecks.map((item) => (
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
          </div>
        </div>
      </Section>

      {/* System areas */}
      <Section id="system-areas" className="scroll-mt-24">
        <SectionHeader
          eyebrow="What the fix may involve"
          title="Most quote follow-up fixes are built from a few practical building blocks."
          description="The right solution depends on the audit. Some businesses need a simple process. Others need automation. Others may benefit from AI."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {systemAreas.map((item) => {
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

      {/* Workflow visual */}
      <Section id="workflow" className="scroll-mt-24 border-y border-white/5 bg-ink-900/30">
        <SectionHeader
          eyebrow="Example workflow"
          title="A simple quote follow-up system keeps the conversation moving."
          description="The exact sequence depends on your business, but the principle is the same: quote sent, follow-up triggered, reply detected, and the right next step created."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-5xl">
          <WorkflowVisual />
        </div>
      </Section>

      {/* Implementation options */}
      <Section id="implementation-options" className="scroll-mt-24">
        <SectionHeader
          eyebrow="After the audit"
          title="You can implement the recommendations yourself or have us build the system."
          description="The audit gives you clarity first. If you want help after that, these are the common implementation paths."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {implementationOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article key={option.id} className="card flex h-full flex-col p-7 sm:p-8">
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-signal-500/20 bg-signal-500/10 text-signal-400"
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7" />
                </div>

                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-signal-300">
                  {option.model}
                </p>

                <h3 className="font-display text-2xl tracking-tight text-bone-50 sm:text-3xl">
                  {option.name}
                </h3>

                <p className="mt-3 font-display text-lg italic text-signal-300">
                  {option.tagline}
                </p>

                <p className="mt-5 leading-relaxed text-bone-300">{option.body}</p>

                <div className="mt-7 flex-1">
                  <p className="eyebrow mb-4">May include</p>
                  <ul className="space-y-3">
                    {option.includes.map((item) => (
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
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href={siteConfig.bookingUrl} external variant="primary">
            Book a Free Quote Follow-Up Audit
          </Button>
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
            What is a{' '}
            <span className="italic text-signal-400">quote follow-up audit</span> for tradies?
          </h2>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
            A quote follow-up audit reviews what happens after a trade business sends a quote. The
            goal is to find where quoted jobs are being forgotten, delayed, poorly followed up, or
            left sitting cold without a clear next step.
          </p>

          <div className="prose-tradie mt-12 space-y-10 text-[1.05rem] leading-relaxed text-bone-200 sm:text-lg">
            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Why audit before building?
              </h3>
              <p className="mt-4">
                Not every trade business needs the same follow-up system. A sole trader sending a
                few quotes each week may need a simple process and a handful of reminders. A larger
                business with multiple estimators, admin staff and salespeople may need automation,
                pipeline tracking and AI-assisted response handling.
              </p>
              <p className="mt-4">
                The audit prevents the wrong solution from being built. It helps identify whether
                the problem is speed, consistency, wording, ownership, software setup, reply
                handling, or a lack of clear follow-up rules.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                What gets reviewed?
              </h3>
              <p className="mt-4">
                The audit looks at the current quote follow-up process: when quotes are sent, how
                customers are followed up, who is responsible, what tools are used, what happens
                when a customer replies, and whether old quotes are ever reactivated.
              </p>
              <p className="mt-4">
                It also looks at what should remain human. Some conversations should always be
                handled by the business owner, estimator or admin team. Automation and AI should
                support that process, not create messy customer experiences.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                What happens after the audit?
              </h3>
              <p className="mt-4">
                After the audit, you get a practical recommendation. You may decide to implement
                the changes yourself. You may choose a simple automation-first setup. Or, if the
                business has enough quote volume, AI-assisted or AI-led follow-up may make sense.
              </p>
              <p className="mt-4">
                The point is that the recommendation comes after the diagnosis, not before it.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                Is this just a sales call?
              </h3>
              <p className="mt-4">
                No. The audit is designed to give you useful information about your quote follow-up
                process. If you want to take the recommendations and implement them yourself, you
                can. If you want help building the system, Tradie Systems Co can do that too.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                What kind of tradies is this for?
              </h3>
              <p className="mt-4">
                This is for trade businesses that send quotes and suspect too many jobs are going
                cold after the quote is sent. That can include fencing contractors, landscapers,
                electricians, plumbers, concreters, builders, carpenters, painters, HVAC
                businesses, roofers, pool builders and solar installers.
              </p>
              <p className="mt-4">
                The best fit is usually a business that already gets enquiries and sends quotes,
                but does not have a reliable system for following those quotes up.
              </p>
            </div>

            <div>
              <h3 className="pt-2 font-display text-2xl font-semibold tracking-tight text-bone-50 md:text-3xl">
                The first step is the audit
              </h3>
              <p className="mt-4">
                The first step is simple: book the free quote follow-up audit. We look at your
                current process, identify the gaps, and show you what should be fixed first.
              </p>
              <p className="mt-4">
                From there, you can decide whether to fix it yourself or have us build the
                follow-up system for you.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
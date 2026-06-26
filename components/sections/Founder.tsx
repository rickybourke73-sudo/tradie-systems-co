import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import {
  Quote,
  Hammer,
  ClipboardList,
  MessageSquare,
  ShieldCheck,
  Wrench
} from 'lucide-react';

const livedExperience = [
  { icon: Hammer, text: 'On the tools, six days a week' },
  { icon: ClipboardList, text: 'Quoting at 7pm at the kitchen table' },
  { icon: MessageSquare, text: 'Missed callbacks, ghosted quotes' },
  { icon: Wrench, text: 'Chasing admin between jobs' }
];

const howWeWork = [
  'Built around your existing workflow — no new software for you to learn during the audit',
  'Checks tools like ServiceM8, Tradify, simPRO, AroFlo, Jobber and standard email',
  'Shows where SMS, email, calls, reminders and tasks should fit',
  'Keeps customer communication practical, human and approved by you',
  'Designed for sole operators and small-to-medium trade businesses'
];

export function Founder() {
  return (
    <Section id="founder">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr,1.3fr] lg:gap-16">
        <aside className="lg:sticky lg:top-28">
          <div className="card relative overflow-hidden p-6 sm:p-7 md:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-signal-500/10 blur-3xl"
            />

            <div className="relative flex items-center gap-4">
              <div
                aria-hidden="true"
                className="inline-flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-signal-500/30 bg-signal-500/10 font-display text-xl font-bold tracking-tight text-signal-400"
              >
                TSC
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-500">
                  Built by
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-bone-50">
                  A trade business owner
                </p>
                <p className="mt-0.5 text-sm text-bone-400">
                  Australian-based · independent
                </p>
              </div>
            </div>

            <div className="relative mt-7 border-t border-white/5 pt-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-500">
                The lived experience
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5">
                {livedExperience.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <span
                      className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-lg border border-white/10 bg-ink-900 text-signal-400"
                      aria-hidden="true"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-bone-200">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-7 border-t border-white/5 pt-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-500">
                How we work
              </p>
              <ul className="mt-4 space-y-3">
                {howWeWork.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-bone-200">
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 flex-none text-signal-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="relative mt-7 border-t border-white/5 pt-6 text-xs leading-relaxed text-bone-500">
              Not a marketing agency. Not a chatbot company. Not a CRM. We focus on one problem —
              what happens after a quote is sent — and help Australian tradies tighten it up.
            </p>
          </div>
        </aside>

        <div>
          <p className="eyebrow mb-5">Why we started this</p>
          <h2 className="text-balance font-display text-3xl tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
            Built by someone who&rsquo;s{' '}
            <span className="italic text-signal-400">lost the same jobs you have.</span>
          </h2>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-bone-200 sm:text-lg">
            <p>
              Tradie Systems Co was started after years of running and working alongside trade
              businesses — and watching the same pattern repeat. A quote goes out. The customer says
              they&rsquo;ll have a think. A week passes. Then a month. The job is quietly lost — not
              always because the price was wrong, but because the follow-up process was not clear.
            </p>
            <p>
              We&rsquo;ve been the person quoting at 7pm after a long day, juggling admin on the way
              home from site, and trying to remember which customer was still waiting for a call
              back. We&rsquo;ve had the stack of open quotes that probably needed chasing — and
              never quite got to them. That experience shapes how we audit quote follow-up.
            </p>
            <p>
              We don&rsquo;t start with generic automation or flashy AI. We start by looking at the
              real process: what happens after the quote is sent, where customers go cold, where
              replies get missed, and what should be fixed first. If a system needs to be built
              after that, it should fit the tools and workflow you already use.
            </p>
          </div>

          <blockquote className="mt-8 rounded-2xl border-l-2 border-signal-500 bg-ink-900/50 p-6">
            <Quote className="mb-3 h-5 w-5 text-signal-400" aria-hidden="true" />
            <p className="font-display text-lg italic text-bone-100">
              &ldquo;The leads are already coming in. The quotes are already being sent. Most of the
              opportunity is in what happens next.&rdquo;
            </p>
          </blockquote>

          <p className="mt-7 text-sm text-bone-400">
            We write regularly about quote follow-up, lead recovery, and quote conversion for
            tradies. Read the{' '}
            <Link
              href="/blog"
              className="text-signal-400 underline-offset-4 hover:underline"
            >
              field notes on the blog
            </Link>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
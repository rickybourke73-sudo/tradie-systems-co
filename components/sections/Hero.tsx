import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';
import { Button } from '@/components/ui/Button';
import { WorkflowVisual } from './WorkflowVisual';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Faint background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="container pb-section pt-10 md:pt-16 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,1fr] lg:gap-16">
          {/* Copy column */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/60 px-3 py-1.5 text-xs text-bone-200">
              <span className="relative inline-flex h-2 w-2" aria-hidden="true">
                <span className="absolute inset-0 animate-pulse-soft rounded-full bg-success" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Quote follow-up systems for Australian tradies
            </div>

            <h1
              id="hero-heading"
              className="text-balance font-display text-[2.5rem] leading-[1.05] tracking-tight text-bone-50 sm:text-5xl md:text-6xl lg:text-[clamp(3rem,6vw,5.5rem)]"
            >
              Stop losing jobs to{' '}
              <span className="italic text-signal-400">slow follow-up.</span>
            </h1>

            <p
              id="hero-lede"
              className="mt-5 max-w-xl text-sm font-medium text-bone-300 sm:text-base"
            >
              Automated quote follow-up, built around the way Australian tradies actually quote.
            </p>

            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
              We build done-for-you{' '}
              <Link
                href="/services"
                className="text-bone-100 underline-offset-4 hover:text-signal-400 hover:underline"
              >
                <strong className="font-semibold">automated quote follow-up systems</strong>
              </Link>{' '}
              for trade businesses — designed to chase every quote, recover cold leads, and turn
              more of the customer enquiries you already pay for into booked work. The system runs
              quietly in the background while you stay on the tools.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href={siteConfig.bookingUrl}
                external
                variant="primary"
                className="w-full justify-center sm:w-auto"
              >
                {siteConfig.bookingLabel}
              </Button>
              <Button
                href="/services"
                variant="ghost"
                arrow={false}
                className="w-full justify-center sm:w-auto"
              >
                See how it works
              </Button>
            </div>

            <p className="mt-10 text-sm text-bone-400">
              Servicing tradies in every state and territory · Set up in around three weeks · No
              long contracts
            </p>

            {/* Industries strip */}
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Industries we serve">
              {siteConfig.industries.slice(0, 8).map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-white/10 bg-ink-900/60 px-3 py-1.5 text-xs text-bone-200"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual column */}
          <div>
            <WorkflowVisual />
            <p className="mt-4 text-center font-mono text-xs text-bone-500">
              Quote sent → automated follow-up → reply captured → job booked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

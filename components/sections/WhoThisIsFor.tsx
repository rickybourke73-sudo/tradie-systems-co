import Link from 'next/link';
import {
  Fence,
  Trees,
  Zap,
  Droplets,
  HardHat,
  Hammer,
  PaintBucket,
  Wind,
  Sun,
  Construction
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Trade {
  name: string;
  icon: LucideIcon;
  /** Short SEO-friendly descriptor surfaced under the trade name on larger screens. */
  blurb: string;
}

const trades: Trade[] = [
  {
    name: 'Fencing',
    icon: Fence,
    blurb: 'Quote follow-up for fencing contractors — colorbond, timber, pool, rural.'
  },
  {
    name: 'Landscaping',
    icon: Trees,
    blurb: 'Lead recovery and quote follow-up for landscapers and garden designers.'
  },
  {
    name: 'Electrical',
    icon: Zap,
    blurb: 'Automated follow-up for sparkies, switchboard upgrades, and lighting installs.'
  },
  {
    name: 'Plumbing',
    icon: Droplets,
    blurb: 'Quote follow-up for plumbers, hot water, gas fitting, and bathroom renovations.'
  },
  {
    name: 'Concreting',
    icon: Construction,
    blurb: 'Lead follow-up for concreters — driveways, slabs, footings, decorative work.'
  },
  {
    name: 'Building',
    icon: HardHat,
    blurb: 'Quote conversion systems for builders, renovators, and extension specialists.'
  },
  {
    name: 'Carpentry',
    icon: Hammer,
    blurb: 'Follow-up automation for chippies, custom joinery, decking and pergolas.'
  },
  {
    name: 'Painting',
    icon: PaintBucket,
    blurb: 'Quote follow-up for painters — interior, exterior, and commercial work.'
  },
  {
    name: 'HVAC',
    icon: Wind,
    blurb: 'Lead recovery for HVAC, split system, and ducted air conditioning installers.'
  },
  {
    name: 'Solar',
    icon: Sun,
    blurb: 'Quote follow-up for solar installers, battery storage, and EV charging.'
  }
];

export function WhoThisIsFor() {
  return (
    <section
      id="who-this-is-for"
      aria-labelledby="who-this-is-for-heading"
      className="py-section"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Who this is for</p>
          <h2
            id="who-this-is-for-heading"
            className="text-balance font-display text-3xl tracking-tight text-bone-50 sm:text-4xl md:text-5xl"
          >
            Built for{' '}
            <span className="italic text-signal-400">Australian trade businesses</span>{' '}
            across every trade that quotes for work.
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-bone-300 sm:text-lg">
            Tradie Systems Co builds{' '}
            <Link
              href="/services"
              className="text-bone-100 underline-offset-4 hover:text-signal-400 hover:underline"
            >
              automated quote follow-up systems
            </Link>{' '}
            for sole operators and small-to-medium trade businesses across Australia. If you send
            quotes and lose jobs because the chasing never quite happens, this is built for the way
            you work.
          </p>
        </div>

        <ul
          className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
          aria-label="Trades we work with"
        >
          {trades.map(({ name, icon: Icon, blurb }) => (
            <li
              key={name}
              className="group flex h-full flex-col rounded-xl border border-white/5 bg-ink-900/50 p-4 transition-colors duration-200 hover:border-signal-500/30 hover:bg-ink-900/80 sm:p-5"
            >
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-signal-500/20 bg-signal-500/10 text-signal-400 transition-colors duration-200 group-hover:bg-signal-500/20"
                aria-hidden="true"
              >
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-bone-50 sm:text-lg">
                {name}
              </h3>
              <p className="mt-1.5 hidden text-xs leading-relaxed text-bone-400 sm:block">
                {blurb}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-bone-400">
          Not on the list? If you run an Australian trade business that sends quotes, the same
          quote follow-up principles apply.{' '}
          <Link
            href="/contact"
            className="text-signal-400 underline-offset-4 hover:underline"
          >
            Send us a message
          </Link>{' '}
          and we&rsquo;ll let you know if it&rsquo;s a fit.
        </p>
      </div>
    </section>
  );
}

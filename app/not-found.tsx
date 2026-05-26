import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-signal-500/10 blur-3xl" />
      </div>

      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-signal-500">404</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-bone-50 md:text-7xl">
            That page <span className="italic text-signal-500">went cold</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone-300">
            The page you’re after either moved or never existed. A bit like an unfollowed-up
            quote — let’s get you back to something useful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/" variant="primary" arrow>
              Back to home
            </Button>
            <Link href="/blog" className="btn btn-ghost">
              Browse the blog
            </Link>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Book a strategy call
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            <Link
              href="/services"
              className="group rounded-xl border border-white/5 bg-ink-900/40 p-5 transition-colors hover:border-signal-500/30 hover:bg-ink-900/70"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
                Services
              </p>
              <p className="mt-2 text-bone-100 group-hover:text-bone-50">
                Quote follow-up, lead recovery, reminders →
              </p>
            </Link>
            <Link
              href="/faqs"
              className="group rounded-xl border border-white/5 bg-ink-900/40 p-5 transition-colors hover:border-signal-500/30 hover:bg-ink-900/70"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">FAQs</p>
              <p className="mt-2 text-bone-100 group-hover:text-bone-50">
                Setup, integrations, results →
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

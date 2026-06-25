'use client';

import { useEffect, useRef, useState } from 'react';
import { CalendarClock, ExternalLink, ArrowUpRight } from 'lucide-react';

interface BookingEmbedProps {
  url: string;
  /** Friendly label for the calendar provider, shown in the fallback. */
  providerLabel?: string;
  /** Milliseconds before we assume the embed failed and show fallback. */
  timeoutMs?: number;
}

/**
 * BookingEmbed
 *
 * Renders a calendar booking iframe with three safeguards:
 *   1. A skeleton/loading state until the iframe fires `onLoad`.
 *   2. A timeout — if the embed doesn't load (offline, blocked, 404,
 *      provider down), we swap to a clean fallback card.
 *   3. A persistent "open in new tab" link so users always have a path through.
 *
 * No iframe errors are visible to users — we never let the raw provider 404 leak.
 */
export function BookingEmbed({ url, providerLabel = 'our calendar', timeoutMs = 6000 }: BookingEmbedProps) {
  const [state, setState] = useState<'loading' | 'ready' | 'failed'>('loading');
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Validate URL — if it's clearly a placeholder, skip the embed entirely.
  const isPlaceholder =
    !url ||
    url.includes('your-') ||
    url.includes('example.com') ||
    url === '#';

  useEffect(() => {
    if (isPlaceholder) {
      setState('failed');
      return;
    }
    const timer = setTimeout(() => {
      // If we're still loading after the timeout, assume failure.
      setState((s) => (s === 'loading' ? 'failed' : s));
    }, timeoutMs);
    return () => clearTimeout(timer);
  }, [url, timeoutMs, isPlaceholder]);

  if (state === 'failed') {
    return <Fallback url={url} providerLabel={providerLabel} isPlaceholder={isPlaceholder} />;
  }

  return (
    <div className="card overflow-hidden p-0">
      <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]">
        {state === 'loading' && <LoadingSkeleton />}
        {!isPlaceholder && (
          <iframe
            ref={iframeRef}
            src={url}
            title="Book a free quote follow-up audit with Tradie Systems Co"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="origin"
            onLoad={() => setState('ready')}
            onError={() => setState('failed')}
            allow="camera; microphone; autoplay; encrypted-media; fullscreen; payment"
          />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 bg-ink-900/60 px-5 py-4 text-sm">
        <span className="text-bone-400">Calendar not loading?</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-signal-400 underline-offset-4 hover:underline"
        >
          Open in a new tab
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="absolute inset-0 flex flex-col gap-4 bg-ink-900/40 p-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 animate-pulse rounded-lg bg-white/5" />
        <div className="space-y-2">
          <div className="h-3 w-32 animate-pulse rounded bg-white/5" />
          <div className="h-2.5 w-24 animate-pulse rounded bg-white/5" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square animate-pulse rounded bg-white/[0.04]"
            style={{ animationDelay: `${i * 30}ms` }}
          />
        ))}
      </div>
      <div className="mt-auto grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-9 animate-pulse rounded bg-white/[0.04]" />
        ))}
      </div>
      <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-bone-500">
        Loading calendar…
      </p>
    </div>
  );
}

function Fallback({
  url,
  providerLabel,
  isPlaceholder
}: {
  url: string;
  providerLabel: string;
  isPlaceholder: boolean;
}) {
  return (
    <div className="card flex flex-col p-7 md:p-9">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-signal-500/10 text-signal-500 ring-1 ring-signal-500/20">
        <CalendarClock className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="font-display text-2xl text-bone-50">
        Book your free quote follow-up audit
      </h3>
      <p className="mt-3 max-w-md text-bone-300">
        {isPlaceholder
          ? 'Our online booking is being finalised. In the meantime, send a quick message and we’ll get a time locked in within one business day.'
          : `Our calendar didn’t load just now. Open ${providerLabel} in a new tab — or send a message and we’ll come back to you within one business day.`}
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        {!isPlaceholder && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open booking in a new tab
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
        <a href="#message" className="btn btn-ghost">
          Send a message instead
        </a>
      </div>
      <ul className="mt-7 space-y-2 border-t border-white/5 pt-5 text-sm text-bone-400">
        <li className="flex items-start gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-signal-500/70" />
          30-minute, no-pitch quote follow-up audit
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-signal-500/70" />
          Early mornings and after-hours slots for tradies on the tools
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-signal-500/70" />
          Clear next steps based on your current follow-up process
        </li>
      </ul>
    </div>
  );
}
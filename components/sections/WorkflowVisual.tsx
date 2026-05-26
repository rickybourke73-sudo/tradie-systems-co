'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Inbox,
  FileText,
  MessageSquareText,
  CheckCircle2,
  CalendarClock,
  Trophy
} from 'lucide-react';

const steps = [
  { icon: Inbox, title: 'Lead Comes In', sub: 'Website, Google, referral' },
  { icon: FileText, title: 'Quote Sent', sub: 'Logged automatically' },
  { icon: MessageSquareText, title: 'Auto Follow-Up', sub: 'SMS + email sequence' },
  { icon: CheckCircle2, title: 'Customer Responds', sub: 'Reply captured' },
  { icon: CalendarClock, title: 'Call Booked', sub: 'Calendar synced' },
  { icon: Trophy, title: 'Job Won', sub: 'No leads dropped' }
];

export function WorkflowVisual({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative" aria-label="How the quote follow-up system works in six steps">
      {/* glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 50%, rgba(243,146,0,0.18), transparent 70%)'
        }}
      />

      <div className="card overflow-hidden p-5 sm:p-6 md:p-10">
        <div className="mb-7 flex items-center justify-between sm:mb-8">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inset-0 animate-pulse-soft rounded-full bg-success" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400">
              live workflow
            </span>
          </div>
          <span className="hidden font-mono text-xs text-bone-500 sm:inline">
            tradiesystemsco.com.au
          </span>
        </div>

        <div
          className={`relative grid gap-4 sm:gap-4 ${
            compact ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6'
          }`}
        >
          {/* Connecting flow line — desktop only */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-9 -z-0 hidden h-2 w-full md:block"
            viewBox="0 0 600 8"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F39200" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#F39200" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F39200" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <line
              x1="40"
              y1="4"
              x2="560"
              y2="4"
              stroke="url(#flowGrad)"
              strokeWidth="2"
              className="flow-line"
            />
          </svg>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div
                  className="group relative flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-white/10 bg-ink-800 transition-all duration-200 hover:border-signal-500/50 hover:bg-ink-700 sm:h-[72px] sm:w-[72px]"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6 text-signal-400 transition-transform duration-200 group-hover:scale-110 sm:h-7 sm:w-7" />
                  <span className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-signal-500 font-mono text-xs font-bold text-ink-950 ring-4 ring-ink-900">
                    {i + 1}
                  </span>
                </div>
                <p className="mt-3 font-display text-sm font-semibold leading-tight text-bone-50 sm:mt-4 sm:text-base">
                  {step.title}
                </p>
                <p className="mt-1 text-xs leading-snug text-bone-400">{step.sub}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/5 pt-6 text-center sm:mt-10 sm:gap-4">
          <Stat label="Faster response" value="< 5 min" />
          <Stat label="Touchpoints" value="7+" />
          <Stat label="Hours saved / week" value="6–10" />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-xl font-semibold tracking-tight text-bone-50 sm:text-2xl md:text-3xl">
        {value}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-500 sm:text-[11px]">
        {label}
      </div>
    </div>
  );
}

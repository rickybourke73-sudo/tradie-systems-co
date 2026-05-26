'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  /** Open the first item by default. */
  openFirst?: boolean;
  /** Allow multiple items open at once. Defaults to single-open. */
  allowMultiple?: boolean;
}

export function FaqAccordion({ items, openFirst = false, allowMultiple = false }: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() =>
    openFirst && items.length ? new Set([0]) : new Set()
  );

  const baseId = useId();
  const isOpen = (i: number) => openIndexes.has(i);

  const toggle = (i: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <div className="divide-y divide-white/5 border-y border-white/5">
      {items.map((item, i) => {
        const open = isOpen(i);
        const headerId = `${baseId}-h-${i}`;
        const panelId = `${baseId}-p-${i}`;
        return (
          <div key={item.question} className="group/row">
            <h3 className="m-0">
              <button
                id={headerId}
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={open}
                aria-controls={panelId}
                className={cn(
                  'flex w-full items-start gap-4 py-5 text-left transition-colors duration-200 sm:gap-6 sm:py-6',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'
                )}
              >
                <span
                  className={cn(
                    'flex-1 font-display text-base font-semibold leading-snug tracking-tight transition-colors duration-200 sm:text-lg md:text-xl',
                    open ? 'text-signal-400' : 'text-bone-50 group-hover/row:text-signal-400'
                  )}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-all duration-200',
                    open
                      ? 'border-signal-500/40 bg-signal-500/10 text-signal-400'
                      : 'border-white/10 text-bone-200 group-hover/row:border-signal-500/40 group-hover/row:text-signal-400'
                  )}
                >
                  {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={cn(
                'grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none',
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="min-h-0">
                <div className="max-w-3xl pb-6 pr-2 text-[0.95rem] leading-relaxed text-bone-300 sm:pb-7 sm:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

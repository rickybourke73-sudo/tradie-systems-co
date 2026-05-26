import type { LucideIcon } from 'lucide-react';
import { Phone, Mail, Calendar } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site.config';

export function FinalCta() {
  return (
    <Section id="book" size="lg" bleed>
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-signal-500 to-signal-700 p-1">
          <div className="relative overflow-hidden rounded-[calc(2rem-4px)] bg-ink-950 p-8 sm:p-12 md:p-16 lg:p-20">
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #F39200 0%, transparent 60%)'
              }}
            />

            <div className="relative max-w-3xl">
              <p className="eyebrow mb-6">Stop losing jobs</p>
              <h2 className="text-balance font-display text-3xl leading-[1.05] tracking-tight text-bone-50 sm:text-4xl md:text-5xl lg:text-6xl">
                Book a free{' '}
                <span className="italic text-signal-400">quote follow-up audit.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone-300 sm:text-lg md:text-xl">
                30 minutes. No pitch deck. We’ll review how your quotes are being followed up,
                show you exactly where revenue is leaking, and give you a clear plan to fix it —
                whether you work with us or not.
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
                  href="/contact"
                  variant="ghost"
                  arrow={false}
                  className="w-full justify-center sm:w-auto"
                >
                  Send a message instead
                </Button>
              </div>

              <div className="mt-10 grid gap-5 border-t border-white/5 pt-8 sm:mt-12 sm:grid-cols-3 sm:pt-10">
                <Item icon={Calendar} label="30 min, no obligation" />
                <Item icon={Phone} label="Australian-based team" />
                <Item icon={Mail} label="Plain-English answers" />
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-bone-400">
                Tradie Systems Co builds automated quote follow-up systems for Australian trade
                businesses across fencing, landscaping, electrical, plumbing, concreting, building,
                carpentry, painting, HVAC and solar. Setup is remote and we work with tradies in
                every state and territory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Item({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-3 text-bone-200">
      <Icon className="h-4 w-4 flex-none text-signal-400" aria-hidden="true" />
      <span className="text-sm">{label}</span>
    </div>
  );
}

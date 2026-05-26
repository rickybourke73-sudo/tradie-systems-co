import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { homepageFaqs } from '@/content/faqs';

export function FaqSection() {
  return (
    <Section id="faqs" className="border-y border-white/5 bg-ink-900/30">
      <div className="grid gap-10 lg:grid-cols-[1fr,1.6fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-5">FAQs</p>
          <h2 className="text-balance font-display text-3xl tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
            Quote follow-up, answered straight.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bone-300 sm:text-lg">
            The questions tradies actually ask before booking a strategy call — about setup,
            integrations, customer experience, and what really changes in the first 30 days.
          </p>
          <Link
            href="/faqs"
            className="group mt-7 inline-flex items-center gap-2 font-medium text-signal-400 transition-colors duration-200 hover:text-signal-300 focus-visible:outline-none focus-visible:text-signal-300"
          >
            See all FAQs
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div>
          <FaqAccordion items={homepageFaqs} openFirst />
        </div>
      </div>
    </Section>
  );
}

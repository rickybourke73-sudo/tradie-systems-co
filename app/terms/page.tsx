import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: `Terms of service for ${siteConfig.name}.`,
  path: '/terms'
});

const updated = 'November 2024';

export default function TermsPage() {
  return (
    <Section size="lg" className="pt-20 md:pt-28">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="font-display text-[2rem] leading-tight tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
          Last updated: {updated}
        </p>

        <div className="prose-tradie mt-10 space-y-6 text-bone-300">
          <p>
            These terms govern your use of the {siteConfig.name} website and any services you engage
            us to provide. By using the site or engaging our services you agree to these terms.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Services</h2>
          <p>
            We provide done-for-you quote follow-up systems and related advisory services to
            Australian trade businesses. The specific scope, deliverables, and timeline for any
            engagement will be set out in a separate written proposal or engagement letter.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Website content</h2>
          <p>
            Content on this site is provided for general information. We try to keep it accurate and
            current, but we don’t guarantee that it is. Nothing on the site is professional
            advice for your specific situation — for that, book a call.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Intellectual property</h2>
          <p>
            All copy, branding, and original content on this site is owned by {siteConfig.name}. You
            can share or quote short excerpts with attribution. Don’t copy the site wholesale or
            pass it off as your own.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for any indirect, incidental,
            or consequential loss arising from your use of this site or the information on it. Our
            liability for services rendered is governed by the engagement agreement for those
            services.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Governing law</h2>
          <p>
            These terms are governed by the laws of Australia.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Contact</h2>
          <p>
            Questions? Email{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-signal-400 underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}

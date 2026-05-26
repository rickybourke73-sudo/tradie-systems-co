import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  path: '/privacy'
});

const updated = 'November 2024';

export default function PrivacyPage() {
  return (
    <Section size="lg" className="pt-20 md:pt-28">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="font-display text-[2rem] leading-tight tracking-tight text-bone-50 sm:text-4xl md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
          Last updated: {updated}
        </p>

        <div className="prose-tradie mt-10 space-y-6 text-bone-300">
          <p>
            {siteConfig.name} (“we”, “us”, “our”) respects your privacy and is
            committed to protecting your personal information in accordance with the Australian Privacy
            Principles under the Privacy Act 1988 (Cth).
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Information we collect</h2>
          <p>
            When you submit a form on this site or book a call, we collect the contact details you
            provide (name, email, phone, business name, trade) and any message you send us. When you
            browse the site, we collect standard analytics data such as pages visited and approximate
            location via Google Analytics 4 and Microsoft Clarity. Clarity may record anonymised
            session data for usability research.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">How we use it</h2>
          <p>
            We use the information you provide to respond to your enquiry, book and run strategy
            calls, send follow-up communications about quote follow-up systems, and improve how the
            site works. We never sell or rent your information.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Sharing</h2>
          <p>
            We may share your data with service providers that help us run the business — for example
            email delivery (Resend), calendar booking (Cal.com), analytics (Google, Microsoft), and
            CMS hosting (Sanity, Vercel). Each provider has its own privacy policy and we only share
            what’s necessary.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Cookies</h2>
          <p>
            We use cookies for analytics and session continuity. You can disable cookies in your
            browser settings; the site will still work but some features may be limited.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Your rights</h2>
          <p>
            You can request access to, correction of, or deletion of your personal information at any
            time. Email{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-signal-400 underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            . If you’re not satisfied with our handling of your personal information you can
            contact the Office of the Australian Information Commissioner at{' '}
            <a
              href="https://www.oaic.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal-400 underline-offset-4 hover:underline"
            >
              oaic.gov.au
            </a>
            .
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Changes</h2>
          <p>
            We may update this policy from time to time. The “last updated” date above
            will change accordingly.
          </p>

          <h2 className="pt-4 font-display text-2xl text-bone-50">Contact</h2>
          <p>
            Questions about this policy? Email{' '}
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

import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

import { Logo } from '@/components/ui/Logo';
import { siteConfig } from '@/lib/site.config';

const footerNav = {
  resources: [
    { label: 'Free Systems Review', href: '/contact' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: "Who It's For", href: '/who-its-for' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' }
  ],
  services: [
    { label: 'Lead Response Systems', href: '/services#lead-response' },
    { label: 'Quote Follow-Up Systems', href: '/services#quote-follow-up' },
    { label: 'Booking & Scheduling Systems', href: '/services#booking-scheduling' },
    { label: 'Customer & Job Organisation', href: '/services#customer-job-organisation' },
    { label: 'Invoice Follow-Up Systems', href: '/services#invoice-follow-up' },
    { label: 'Admin Workflow Systems', href: '/services#admin-workflows' }
  ]
};

const socials = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: Instagram },
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: Facebook }
].filter((social) => Boolean(social.href));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-6 text-bone-300">
              Practical systems that help Australian tradies respond faster, follow up better,
              stay organised, and stop leads, jobs and money slipping through the cracks.
            </p>

            <p className="mt-4 text-xs font-medium uppercase tracking-wider text-bone-500">
              Servicing tradies Australia-wide
            </p>

            {socials.length > 0 && (
              <ul className="mt-6 flex items-center gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.shortName} on ${label}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-bone-300 transition-colors duration-200 hover:border-signal-500/40 hover:text-signal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <FooterCol
            title="Resources"
            items={footerNav.resources}
            className="lg:col-span-4"
          />

          <FooterCol
            title="Services"
            items={footerNav.services}
            className="lg:col-span-4"
          />
        </div>

        <hr className="my-10 border-white/5" />

        <div className="flex flex-col gap-4 text-xs text-bone-500 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {siteConfig.business.legalName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors duration-200 hover:text-bone-100 focus-visible:outline-none focus-visible:text-bone-100"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-200 hover:text-bone-100 focus-visible:outline-none focus-visible:text-bone-100"
            >
              Terms
            </Link>

            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors duration-200 hover:text-bone-100 focus-visible:outline-none focus-visible:text-bone-100"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  className
}: {
  title: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-sm font-semibold text-bone-50">{title}</h2>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={`${title}-${item.href}-${item.label}`}>
            <Link
              href={item.href}
              className="text-sm text-bone-400 transition-colors duration-200 hover:text-bone-100 focus-visible:outline-none focus-visible:text-bone-100"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

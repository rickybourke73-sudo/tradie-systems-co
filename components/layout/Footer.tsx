import Link from 'next/link';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/lib/site.config';
import { Logo } from '@/components/ui/Logo';

const footerNav = {
  resources: [
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' }
  ],
  services: [
    { label: 'Quote follow-up', href: '/services#quote-follow-up' },
    { label: 'Customer follow-up', href: '/services#customer-follow-up' },
    { label: 'Lead recovery', href: '/services#lead-recovery' },
    { label: 'Automated reminders', href: '/services#reminders' },
    { label: 'Booking systems', href: '/services#bookings' }
  ]
};

const socials = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: Instagram },
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: Facebook }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container pt-16 pb-12 md:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-12">
          {/* Brand + blurb */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone-300">
              Done-for-you quote follow-up systems for Australian tradies. Built to win more jobs
              from the leads you’ve already paid for.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-500">
              Servicing tradies Australia-wide
            </p>

            {/* Socials */}
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
          </div>

          {/* Nav columns */}
          <FooterCol title="Resources" items={footerNav.resources} className="lg:col-span-4" />
          <FooterCol title="Services" items={footerNav.services} className="lg:col-span-4" />
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
      <h2 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-500">
        {title}
      </h2>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={`${title}-${item.href}-${item.label}`}>
            <Link
              href={item.href}
              className="text-sm text-bone-300 transition-colors duration-200 hover:text-signal-400 focus-visible:outline-none focus-visible:text-signal-400"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

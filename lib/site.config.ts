export const siteConfig = {
  name: 'Tradie Systems Co',
  shortName: 'Tradie Systems',
  domain: 'tradiesystemsco.com.au',
  url: 'https://www.tradiesystemsco.com.au',
  tagline: 'Free quote follow-up audits for Australian tradies.',
  description:
    'Stop losing jobs to slow, inconsistent quote follow-up. We audit what happens after you send a quote, show where quoted jobs are slipping through the cracks, and give you a clear plan to fix it — whether you implement it yourself or hire us to build the system.',
  email: 'ricky@tradiesystemsco.com.au',
  phone: '+61 0 0000 0000',
  bookingUrl: 'https://cal.com/ricky-bourke-oinvii/free-strategy-call',
  bookingLabel: 'Book a Free Audit',
  ctaSecondary: 'Get a Free Quote Follow-Up Audit',

  social: {
    linkedin: 'https://www.linkedin.com/company/tradiesystemsco',
    instagram: 'https://www.instagram.com/tradiesystemsco',
    facebook: 'https://www.facebook.com/tradiesystemsco'
  },

  business: {
    legalName: 'Tradie Systems Co',
    country: 'Australia',
    region: 'AU',
    serviceArea: 'Australia-wide (remote setup, all states & territories)',
    foundingYear: 2024
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' }
  ],

  industries: [
    'Fencing',
    'Landscaping',
    'Electrical',
    'Plumbing',
    'Building',
    'Concreting',
    'HVAC',
    'Painting',
    'Carpentry',
    'Solar'
  ],

  integrations: [
    'ServiceM8',
    'Tradify',
    'simPRO',
    'AroFlo',
    'Jobber',
    'Fergus',
    'Gmail',
    'Outlook'
  ]
} as const;

export type SiteConfig = typeof siteConfig;
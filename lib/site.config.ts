export const siteConfig = {
  name: 'Tradie Systems Co',
  shortName: 'Tradie Systems',
  domain: 'tradiesystemsco.com.au',
  url: 'https://tradiesystemsco.com.au',
  tagline: 'Done-for-you quote follow-up systems for Australian tradies.',
  description:
    'Stop losing jobs to slow, inconsistent quote follow-up. We build automated quote follow-up systems for Australian tradies — so every quote gets chased, every lead gets recovered, and more jobs get won without adding admin to your day.',
  email: 'ricky@tradiesystemsco.com.au',
  phone: '+61 0 0000 0000',
  // Booking URL — swap for your real Cal.com / Calendly link.
  bookingUrl: 'https://cal.com/ricky-bourke-oinvii/free-strategy-call',
  bookingLabel: 'Book a Free Strategy Call',
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

  // Industry chips on hero / services page
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

  // Trade software the systems plug into. Used for entity-association and chips.
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

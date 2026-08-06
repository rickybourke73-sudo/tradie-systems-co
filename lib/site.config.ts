export const siteConfig = {
  name: 'Tradie Systems Co',
  shortName: 'Tradie Systems',
  domain: 'tradiesystemsco.com.au',
  url: 'https://www.tradiesystemsco.com.au',
  tagline: 'Practical systems for Australian tradies.',
  description:
    "Tradie Systems Co builds practical systems that help Australian tradies respond faster, follow up better, stay organised, and stop money slipping through the cracks — across leads, quotes, bookings, invoices and admin.",
  email: 'ricky@tradiesystemsco.com.au',
  phone: '',
  bookingUrl: '/contact',
  bookingLabel: 'Request a Free Systems Review',
  ctaSecondary: 'Request a Free Systems Review',

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
    { label: "Who It's For", href: '/who-its-for' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Blog', href: '/blog' },
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
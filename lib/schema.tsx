import { siteConfig } from './site.config';

/** Resolves a config path (relative or absolute) to a full URL for structured data. */
function absoluteUrl(path: string) {
  return path.startsWith('http') ? path : `${siteConfig.url}${path}`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.business.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed: {
      '@type': 'Country',
      name: 'Australia'
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.facebook
    ].filter(Boolean),
    logo: `${siteConfig.url}/logo.png`
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-default.png`,
    areaServed: {
      '@type': 'Country',
      name: 'Australia'
    },
    serviceType: siteConfig.tagline,
    slogan: siteConfig.tagline,
    knowsAbout: [
      'Lead response for tradies',
      'Quote follow-up systems',
      'Booking and scheduling systems',
      'Customer and job organisation',
      'Invoice follow-up',
      'Trade business admin systems',
      'Workflow systems for tradies',
      ...siteConfig.integrations
    ],
    makesOffer: {
      '@type': 'Offer',
      name: siteConfig.bookingLabel,
      description:
        'A free, no-obligation review of how leads, quotes, bookings, invoices and admin are currently being handled, with practical recommendations on what to fix first.',
      price: '0',
      priceCurrency: 'AUD',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl(siteConfig.bookingUrl),
      areaServed: {
        '@type': 'Country',
        name: 'Australia'
      }
    }
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`
    },
    inLanguage: 'en-AU'
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url)
    }))
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt ?? article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    },
    image: article.image ?? `${siteConfig.url}/og-default.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}`
    }
  };
}

export function serviceSchema(s: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia'
    },
    serviceType: 'Trade business systems',
    url: `${siteConfig.url}/services#${s.slug}`
  };
}

export function howToSchema(steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How Tradie Systems Co builds practical systems for tradies',
    description:
      "Step-by-step overview of how Tradie Systems Co reviews a trade business's current process and builds a practical system to improve lead response, quote follow-up, bookings, invoicing and admin.",
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      url: `${siteConfig.url}/how-it-works`
    }))
  };
}

export function speakableSchema(cssSelectors: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/#webpage`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors
    }
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c')
      }}
    />
  );
}

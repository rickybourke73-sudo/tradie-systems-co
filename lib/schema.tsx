import { siteConfig } from './site.config';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.business.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    foundingDate: `${siteConfig.business.foundingYear}-01-01`,
    description: siteConfig.description,
    areaServed: {
      '@type': 'Country',
      name: 'Australia'
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram, siteConfig.social.facebook],
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
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Australia'
    },
    serviceType: 'Free quote follow-up audits for Australian tradies',
    slogan: siteConfig.tagline,
    knowsAbout: [
      'Quote follow-up audits',
      'Quote follow-up systems',
      'Tradie quote follow-up',
      'Follow-up after sending a quote',
      'Customer follow-up for tradies',
      'Quote conversion for tradies',
      'Lead follow-up',
      'Lead recovery',
      'Missed quote follow-up',
      'Cold quote reactivation',
      'Speed to lead',
      'SMS quote follow-up',
      'Email quote follow-up',
      'Quote reminder sequences',
      'Customer reply handling',
      'Trade business workflow improvement',
      'ServiceM8',
      'Tradify',
      'simPRO',
      'AroFlo',
      'Jobber',
      'Fergus'
    ],
    makesOffer: {
      '@type': 'Offer',
      name: 'Free Quote Follow-Up Audit',
      description:
        'A free audit for Australian tradies that reviews what happens after a quote is sent, identifies where quoted jobs may be slipping through, and provides a clear follow-up improvement plan.',
      price: '0',
      priceCurrency: 'AUD',
      availability: 'https://schema.org/InStock',
      url: siteConfig.bookingUrl,
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
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`
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
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.png` }
    },
    image: article.image ?? `${siteConfig.url}/og-default.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/blog/${article.slug}` }
  };
}

export function serviceSchema(s: { name: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    areaServed: { '@type': 'Country', name: 'Australia' },
    serviceType: 'Quote follow-up audit',
    url: `${siteConfig.url}/services#${s.slug}`
  };
}

export function howToSchema(steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How a quote follow-up audit works for tradies',
    description:
      'Step-by-step overview of how a quote follow-up audit reviews what happens after a tradie sends a quote, identifies gaps, and produces a clear follow-up improvement plan.',
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      url: `${siteConfig.url}/#how-it-works`
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
import { siteConfig } from './site.config';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
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
    serviceType: 'Quote follow-up systems for tradies',
    knowsAbout: [
      'Quote follow-up systems',
      'Automated quote follow-up',
      'Tradie follow-up systems',
      'Lead follow-up automation',
      'Lead recovery for tradies',
      'Customer follow-up systems',
      'Customer follow-up automation',
      'Quote conversion',
      'Speed to lead',
      'Cold quote reactivation',
      'Automated SMS follow-up',
      'Quote reminder emails',
      'Missed lead recovery',
      'Booking and site-visit reminders',
      'Customer reply handling',
      'Trade business workflow automation',
      'ServiceM8',
      'Tradify',
      'simPRO',
      'AroFlo',
      'Jobber'
    ]
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
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
    url: `${siteConfig.url}/services#${s.slug}`
  };
}

/**
 * HowTo schema for the homepage quote follow-up workflow.
 * Lets Google render rich step-by-step results and gives LLMs a clean,
 * extractable representation of what the system actually does.
 */
export function howToSchema(steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How an automated quote follow-up system works for tradies',
    description:
      'Step-by-step overview of what happens after a tradie sends a quote, when the follow-up sequence runs, and when the system hands the conversation back to the tradie.',
    totalTime: 'P30D',
    supply: [
      { '@type': 'HowToSupply', name: 'An existing quoting process or job-management tool' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'SMS and email follow-up sequences' }
    ],
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      url: `${siteConfig.url}/#how-it-works`
    }))
  };
}

/**
 * Speakable schema for voice search and AI voice assistants (Google Assistant,
 * AI Overviews, ChatGPT voice mode, and similar). Declares which CSS selectors
 * point to text that is well-suited to being read aloud as a concise answer.
 *
 * Pass an array of CSS selectors (e.g. '#hero-heading', '#hero-lede') that
 * resolve to short, self-contained snippets summarising the page.
 */
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

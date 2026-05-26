import { Hero } from '@/components/sections/Hero';
import { WhatsIncluded } from '@/components/sections/WhatsIncluded';
import { Problem } from '@/components/sections/Problem';
import { WorkflowSection } from '@/components/sections/WorkflowSection';
import { Benefits } from '@/components/sections/Benefits';
import { WhatGetsSetUp } from '@/components/sections/WhatGetsSetUp';
import { WhoThisIsFor } from '@/components/sections/WhoThisIsFor';
import { WhyLosing } from '@/components/sections/WhyLosing';
import { Founder } from '@/components/sections/Founder';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { JsonLd, faqSchema, howToSchema, speakableSchema } from '@/lib/schema';
import { homepageFaqs } from '@/content/faqs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Quote Follow-Up Systems for Australian Tradies',
  description:
    'Done-for-you automated quote follow-up systems for Australian tradies. We chase every quote, recover cold leads, and improve quote conversion — built around ServiceM8, Tradify, simPRO, AroFlo, Jobber and the tools you already use.',
  path: '/',
  keywords: [
    'quote follow-up',
    'quote follow-up system',
    'quote follow-up systems',
    'automated quote follow-up',
    'automated quote follow-up systems',
    'tradie follow-up',
    'tradie follow-up system',
    'follow-up automation',
    'quote conversion',
    'lead follow-up',
    'lead follow-up systems',
    'customer follow-up',
    'customer follow-up automation',
    'lead recovery for tradies',
    'cold quote reactivation',
    'recovering lost quotes',
    'speed to lead',
    'automated SMS follow-up',
    'quote reminder emails',
    'missed lead recovery',
    'booking reminders',
    'customer reply handling',
    'Australian tradies',
    'Australian trade businesses',
    'tradie quote conversion',
    'trade business workflow',
    'ServiceM8 follow-up',
    'Tradify follow-up',
    'simPRO follow-up',
    'AroFlo follow-up',
    'Jobber follow-up'
  ]
});

function stripSmartQuotes(s: string) {
  return s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
}

// Workflow steps mirrored in the on-page WorkflowSection. Kept here so the
// HowTo schema and the visible content stay in sync.
const workflowSteps = [
  {
    name: 'Quote sent, confirmation fires',
    text: 'The tradie sends the quote the way they always have. The system picks it up and sends a short confirmation SMS to the customer within minutes.'
  },
  {
    name: 'First follow-up on Day 1–3',
    text: 'A polite check-in goes out the next morning. If there is no reply, a second message with the quote reattached lands on day three.'
  },
  {
    name: 'Soft re-engagement on Day 7–14',
    text: 'Two further touchpoints over the next fortnight. This is where most replies come back — customers who genuinely meant to respond and got busy.'
  },
  {
    name: 'Cold quote reactivation on Day 30+',
    text: 'Quotes that stayed silent move to a longer-term reactivation list. A thoughtful final message recovers jobs that would have been written off.'
  },
  {
    name: 'Reply lands and the tradie takes over',
    text: 'The second a customer replies, the sequence pauses and the tradie is notified. No accidental chasing, no conversations falling through the cracks.'
  }
];

// Two definition Q&As visible on the page (Problem + WorkflowSection) — included in
// FAQ schema so AI search engines can extract them alongside the homepage FAQs.
const definitionFaqs = [
  {
    question: 'What is a tradie quote follow-up system?',
    answer:
      'A tradie quote follow-up system is an automated sequence of SMS and email messages sent on a schedule after a tradie sends a quote. Its purpose is to keep the customer engaged, answer common questions, and bring the conversation back to a booking before the lead goes cold. For most Australian trade businesses, it replaces ad-hoc "I\'ll call them tomorrow" chasing with a consistent, structured process that runs whether you\'re on site, on the road, or off the tools.'
  },
  {
    question: 'How does an automated quote follow-up system work?',
    answer:
      'When a tradie sends a quote, the follow-up system triggers a sequence of polite, pre-approved messages over the next 14-30 days — typically a confirmation SMS within minutes, a check-in the next day, an email with the quote reattached a few days later, and a final re-engagement message before the quote is parked as cold. The sequence pauses the moment the customer replies, and any reply is routed straight to the tradie. The result is consistent, structured follow-up automation instead of ad-hoc chasing.'
  }
];

export default function HomePage() {
  const cleanFaqs = homepageFaqs.map((f) => ({
    question: stripSmartQuotes(f.question),
    answer: stripSmartQuotes(f.answer)
  }));

  // Definition Q&As first (highest semantic value), then the homepage FAQ subset.
  const allFaqs = [...definitionFaqs, ...cleanFaqs];

  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <JsonLd data={howToSchema(workflowSteps)} />
      <JsonLd data={speakableSchema(['#hero-heading', '#hero-lede'])} />
      <Hero />
      <Problem />
      <WhatsIncluded />
      <WorkflowSection />
      <Benefits />
      <WhatGetsSetUp />
      <WhoThisIsFor />
      <WhyLosing />
      <Founder />
      <FaqSection />
      <FinalCta />
    </>
  );
}

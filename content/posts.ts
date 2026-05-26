// Blog post registry. Real content is managed in Sanity in production —
// this static fallback ensures the site is fully functional out of the box,
// and acts as the seed content for your initial Sanity import.

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  author: string;
  readingMinutes: number;
  tags: string[];
  // Body in lightweight markdown — replaced by Portable Text from Sanity in production
  body?: string;
}

export type BlogCategory =
  | 'Quote Follow-Up'
  | 'Lead Recovery'
  | 'Customer Communication'
  | 'Tradie Business Systems'
  | 'Quote Conversion';

export const categories: BlogCategory[] = [
  'Quote Follow-Up',
  'Lead Recovery',
  'Customer Communication',
  'Quote Conversion',
  'Tradie Business Systems'
];

export const posts: BlogPost[] = [
  // ====== PILLAR POSTS (fully written) ======
  {
    slug: 'quote-follow-up-system-for-tradies',
    title: 'Quote Follow-Up Systems for Tradies: The Complete Guide',
    metaTitle: 'Quote Follow-Up Systems for Tradies | Complete 2025 Guide',
    metaDescription:
      'A complete guide to quote follow-up for Australian tradies. What it is, why it matters, what a good follow-up sequence looks like, and how to set one up.',
    excerpt:
      'Most tradies lose 30–50% of jobs after the quote — not because of price, but because of follow-up. Here’s the full playbook on quote follow-up systems for tradies.',
    category: 'Quote Follow-Up',
    publishedAt: '2025-09-15',
    author: 'Tradie Systems Co',
    readingMinutes: 9,
    tags: ['quote follow up', 'quote follow up system', 'tradie systems', 'quote conversion'],
    body: `
## What is a quote follow-up system?

A quote follow-up system is a structured, repeatable process that contacts a customer after you've sent them a quote — at preset intervals, through preset channels — until they respond, book, or formally decline.

For Australian tradies, that usually means a sequence of SMS messages and emails sent over the two to three weeks following a quote. The system runs whether you're on the tools, on a roof, or asleep.

## Why most tradies have no real follow-up system

Walk into any trade business and you'll hear the same story:

- "I sent the quote on Tuesday. They said they'd get back to me. Haven't heard since."
- "I keep meaning to follow up on those open quotes from last month."
- "My software sends one auto-email when the quote goes out. That's it."

This isn't a follow-up system. It's a hope-and-pray system.

## What a real follow-up system looks like

A proper quote follow-up system has four parts:

1. **A trigger** — every quote sent automatically enters the sequence
2. **A sequence** — multiple touches over 2–3 weeks, varied in tone and channel
3. **A pause logic** — when a customer replies, follow-up stops immediately
4. **A reactivation arm** — quotes that go fully cold get re-engaged later

## A typical sequence for a trade business

- **Day 0** — Quote sent confirmation (SMS): "Hi {name}, just confirming we sent your quote for {job}. Let us know if anything's unclear."
- **Day 2** — Soft check-in (email): polite, no pressure, asks if they have questions
- **Day 5** — Reassurance message (SMS): mentions warranty, cleanliness, or whatever your trade values
- **Day 10** — Personal-feeling check-in (email): "Just wanted to circle back…"
- **Day 21** — Final reactivation: "We'll close this one off unless we hear back — happy to keep the door open if timing isn't right."

## How long does it take to set up?

For a single tradie or small team, a quote follow-up system can be built and live in 7–14 days. For larger trade businesses with custom requirements, allow 2–4 weeks.

## What kind of results should you expect?

Most tradies see a 20–40% lift in quote conversion within 90 days, plus immediate wins from reactivating cold quotes. The first recovered job typically lands within the first 2–4 weeks.

## Ready to plug the leak?

Book a free 30-minute audit. We'll walk through your current quote process, identify exactly where leads are leaking, and map out what a follow-up system would look like for your business.
    `.trim()
  },
  {
    slug: 'why-customers-ghost-quotes',
    title: 'Why Customers Ghost Your Quotes (And How to Stop It)',
    metaTitle: 'Why Customers Ghost Quotes — And How Tradies Can Stop It',
    metaDescription:
      'Customers don’t usually ghost because of price. Here are the four real reasons quotes go cold, and what to do about each one.',
    excerpt:
      'Tradies almost always blame price when quotes go cold. The data says price is only one of four reasons — and it’s usually not the biggest one.',
    category: 'Customer Communication',
    publishedAt: '2025-09-22',
    author: 'Tradie Systems Co',
    readingMinutes: 6,
    tags: ['customer ghosting', 'quote follow up', 'why customers go cold'],
    body: `
## The four real reasons customers ghost quotes

When a customer doesn't reply to your quote, it's almost always one of these:

### 1. They got busy and forgot

This is the biggest one — and it has nothing to do with you. Your quote sat in their inbox alongside school emails, work emails, and Bunnings receipts. By Wednesday, it's buried.

**Fix:** A polite SMS three days later puts you back at the top of their attention. Most "ghost" quotes were never really ghosting you.

### 2. They're still comparing

Customers often get 2–3 quotes. While they're waiting on the third one, the first two go quiet — until one of them follows up.

**Fix:** Be the one that follows up. The tradie who replies first usually wins.

### 3. The price was outside their range

Sometimes it really is the price — but even here, follow-up gives you a chance to handle the objection. A simple "happy to discuss the scope if it helps" message has rescued thousands of jobs.

### 4. A competitor got back first

This is the silent killer. Your quote was great. The other guy's quote was great. But the other guy followed up on Tuesday morning while you were on a job, and the customer signed.

**Fix:** Automated follow-up so you never lose to "they got back first" again.

## What good follow-up sounds like

It doesn't sound like sales. It sounds like a tradie checking in. Plain language, short messages, no pressure. The system just makes sure those messages actually get sent — every time.
    `.trim()
  },
  {
    slug: 'follow-up-after-quote-template',
    title: 'How to Follow Up After Sending a Quote (With Templates)',
    metaTitle: 'How to Follow Up After Sending a Quote — Templates for Tradies',
    metaDescription:
      'Word-for-word follow-up templates for Australian tradies. SMS and email scripts you can use after sending a quote.',
    excerpt:
      'You sent the quote. Now what? Here are the exact SMS and email templates we use for tradies — copy, customise, send.',
    category: 'Quote Follow-Up',
    publishedAt: '2025-10-03',
    author: 'Tradie Systems Co',
    readingMinutes: 7,
    tags: ['quote follow up email', 'follow up after quote', 'sms templates'],
    body: `
## When to follow up after sending a quote

For most trade work, the right cadence is:

- **Day 0** — Confirmation
- **Day 2–3** — First soft check-in
- **Day 5–7** — Value reminder
- **Day 10–14** — Personal check-in
- **Day 21** — Final reactivation

## SMS templates

### Day 0 — Confirmation
> Hi {name}, just confirming we've sent through your quote for {job description}. Any questions, give us a yell. Cheers — {your name}, {business}.

### Day 3 — Soft check-in
> Hey {name}, {your name} from {business} here. Just checking the quote came through OK and you've had a chance to look over it. Happy to chat through anything.

### Day 7 — Reassurance
> Hi {name}, just wanted to flag — we’re booking jobs for {month}. If you'd like to lock in your spot, let us know. Otherwise no stress, here when you're ready.

## Email templates

### Day 5 — Value reminder
> Subject: Quick check-in on your {job} quote
>
> Hi {name},
>
> Just circling back on the quote we sent for {job} on {date}. A few things worth knowing:
>
> – {Trade-specific reassurance — e.g. "We carry full public liability insurance"}
> – {Trade-specific reassurance — e.g. "All our work comes with a 12-month workmanship warranty"}
>
> If anything's unclear or you'd like to walk through the scope, happy to jump on a quick call.
>
> Cheers,
> {Name}

### Day 21 — Final reactivation
> Subject: Should I close this one off?
>
> Hi {name},
>
> Haven’t heard back on your {job} quote — totally fine if the timing's not right. I'll close this one off in the system unless I hear from you. Door's always open if you decide to revisit.
>
> All the best,
> {Name}

## Why these work

They're short. They're polite. They give the customer an easy out. And they sound like a real tradie wrote them — not a marketer.
    `.trim()
  },

  // ====== STUB POSTS (titles + meta — write later or via Sanity) ======
  {
    slug: 'quote-conversion-rate-tradies',
    title: 'What’s a Good Quote Conversion Rate for Tradies?',
    metaTitle: 'Average Quote Conversion Rates for Tradies (Australia, 2025)',
    metaDescription:
      'What’s a healthy quote conversion rate for an Australian tradie? Benchmarks by trade, plus what separates the top 20% from everyone else.',
    excerpt: 'How do your numbers stack up? Real benchmarks for quote-to-job conversion across Australian trades.',
    category: 'Quote Conversion',
    publishedAt: '2025-10-10',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['quote conversion', 'tradie benchmarks']
  },
  {
    slug: 'lost-leads-tradies-revenue',
    title: 'How Much Revenue Are You Losing to Forgotten Quotes?',
    metaTitle: 'How Much Money Are Tradies Losing to Forgotten Quotes?',
    metaDescription:
      'A simple calculator and walkthrough showing the real dollar cost of poor quote follow-up for trade businesses.',
    excerpt: 'Most tradies underestimate this by 3–5x. Run the numbers honestly and the answer is uncomfortable.',
    category: 'Lead Recovery',
    publishedAt: '2025-10-17',
    author: 'Tradie Systems Co',
    readingMinutes: 6,
    tags: ['lost leads', 'lead recovery', 'tradie revenue']
  },
  {
    slug: 'sms-vs-email-follow-up',
    title: 'SMS or Email for Quote Follow-Up: Which Wins?',
    metaTitle: 'SMS vs Email Quote Follow-Up — What Works Best for Tradies?',
    metaDescription:
      'SMS gets opened. Email holds detail. We break down which channel wins at each stage of a tradie’s follow-up sequence.',
    excerpt: 'It’s not either/or. Here’s when SMS wins, when email wins, and how to use both.',
    category: 'Customer Communication',
    publishedAt: '2025-10-24',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['sms follow up', 'email follow up', 'quote follow up']
  },
  {
    slug: 'speed-to-lead-tradies',
    title: 'Speed to Lead: Why the First 5 Minutes Decides the Job',
    metaTitle: 'Speed to Lead for Tradies — The First 5 Minutes Rule',
    metaDescription:
      'Why the tradie who replies first almost always wins, and how to make sure that’s you — even when you’re on the tools.',
    excerpt: 'The data is brutal. Reply in 5 minutes, you win. Reply in an hour, you’ve already lost.',
    category: 'Quote Conversion',
    publishedAt: '2025-10-31',
    author: 'Tradie Systems Co',
    readingMinutes: 4,
    tags: ['speed to lead', 'lead response', 'quote conversion']
  },
  {
    slug: 'tradie-crm-vs-follow-up-system',
    title: 'CRM vs Follow-Up System: What’s the Difference?',
    metaTitle: 'CRM vs Follow-Up System — What Tradies Actually Need',
    metaDescription:
      'A CRM stores leads. A follow-up system contacts them. Here’s why most tradies need both — and which to set up first.',
    excerpt: 'Spoiler: a CRM on its own won’t win you more jobs. Follow-up is the missing layer.',
    category: 'Tradie Business Systems',
    publishedAt: '2025-11-07',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['crm', 'tradie systems', 'lead management']
  },
  {
    slug: 'reactivating-cold-quotes',
    title: 'Reactivating Cold Quotes: A Step-by-Step Playbook',
    metaTitle: 'How to Reactivate Cold Quotes — Lead Recovery for Tradies',
    metaDescription:
      'A step-by-step playbook for re-engaging quotes from the past 6–12 months. The fastest revenue win for most trade businesses.',
    excerpt: 'Sitting on 6 months of cold quotes? There’s 5–10 jobs in there. Here’s how to wake them up.',
    category: 'Lead Recovery',
    publishedAt: '2025-11-14',
    author: 'Tradie Systems Co',
    readingMinutes: 6,
    tags: ['cold quotes', 'lead recovery', 'reactivation']
  },
  {
    slug: 'follow-up-too-pushy',
    title: 'Is Automated Follow-Up Annoying? Here’s the Honest Answer',
    metaTitle: 'Is Automated Quote Follow-Up Annoying for Customers?',
    metaDescription:
      'Customers don’t hate follow-up. They hate bad follow-up. Here’s the line between professional and pushy.',
    excerpt: 'The fear of "being annoying" costs tradies more jobs than any actual annoyance does.',
    category: 'Customer Communication',
    publishedAt: '2025-11-21',
    author: 'Tradie Systems Co',
    readingMinutes: 4,
    tags: ['customer experience', 'follow up etiquette']
  },
  {
    slug: 'quote-follow-up-frequency',
    title: 'How Many Times Should You Follow Up on a Quote?',
    metaTitle: 'How Many Follow-Ups Does It Take to Win a Trade Job?',
    metaDescription:
      'Most jobs are won between contact 4 and 7. Here’s the data, the cadence, and why one follow-up isn’t enough.',
    excerpt: 'One email and a phone call isn’t a follow-up sequence. Here’s what actually works.',
    category: 'Quote Follow-Up',
    publishedAt: '2025-11-28',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['follow up frequency', 'follow up cadence']
  },
  {
    slug: 'tradie-lead-management',
    title: 'Lead Management for Tradies: A No-Nonsense Guide',
    metaTitle: 'Lead Management for Australian Tradies — Practical Guide',
    metaDescription:
      'A simple, practical guide to managing leads as a tradie. From enquiry to job won — without spreadsheets or chaos.',
    excerpt: 'Forget enterprise CRM theory. Here’s how lead management actually works in a real trade business.',
    category: 'Tradie Business Systems',
    publishedAt: '2025-12-05',
    author: 'Tradie Systems Co',
    readingMinutes: 7,
    tags: ['lead management', 'tradie systems']
  },
  {
    slug: 'best-time-to-follow-up',
    title: 'The Best Time of Day to Follow Up on a Quote',
    metaTitle: 'When’s the Best Time to Follow Up on a Tradie Quote?',
    metaDescription:
      'Tuesday morning vs Thursday afternoon vs Saturday — when do customers actually reply? Real data from trade businesses.',
    excerpt: 'There are good times to follow up, and there are great times. Most tradies use neither.',
    category: 'Customer Communication',
    publishedAt: '2025-12-12',
    author: 'Tradie Systems Co',
    readingMinutes: 4,
    tags: ['follow up timing']
  },
  {
    slug: 'quoting-software-not-enough',
    title: 'Why ServiceM8 / Tradify Alone Won’t Win You More Jobs',
    metaTitle: 'ServiceM8 & Tradify Alone Won’t Fix Quote Follow-Up',
    metaDescription:
      'Quoting software is great at sending quotes. Terrible at chasing them. Here’s why follow-up has to be a separate layer.',
    excerpt: 'Your quoting software is doing its job. It just isn’t doing the follow-up job.',
    category: 'Tradie Business Systems',
    publishedAt: '2025-12-19',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['servicem8', 'tradify', 'tradie software']
  },
  {
    slug: 'fencing-business-follow-up',
    title: 'Quote Follow-Up for Fencing Businesses: What Actually Works',
    metaTitle: 'Quote Follow-Up for Fencing Contractors (Australia)',
    metaDescription:
      'Fencing has unique quote follow-up dynamics — long lead times, weather delays, big-ticket jobs. Here’s the playbook.',
    excerpt: 'Fencing quotes are slow burn. Your follow-up needs to match.',
    category: 'Quote Follow-Up',
    publishedAt: '2026-01-09',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['fencing', 'industry guide']
  },
  {
    slug: 'electrician-lead-follow-up',
    title: 'Lead Follow-Up for Electricians: Service Calls vs Big Jobs',
    metaTitle: 'Lead Follow-Up for Electricians — Service vs Project Work',
    metaDescription:
      'Service calls and big projects need different follow-up. Here’s how electricians should handle both.',
    excerpt: 'A blown switchboard and a full rewire are not the same lead. Don’t treat them like they are.',
    category: 'Quote Follow-Up',
    publishedAt: '2026-01-16',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['electricians', 'industry guide']
  },
  {
    slug: 'plumber-quote-conversion',
    title: 'Plumber Quote Conversion: From Enquiry to Booked Job',
    metaTitle: 'Plumber Quote Conversion — Australian Industry Playbook',
    metaDescription:
      'A practical conversion playbook for Australian plumbers — from first call to job won, with follow-up at every stage.',
    excerpt: 'Plumbing leads are hot. They cool fast. Win the race with the right follow-up.',
    category: 'Quote Conversion',
    publishedAt: '2026-01-23',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['plumbers', 'industry guide']
  },
  {
    slug: 'landscaper-customer-follow-up',
    title: 'Customer Follow-Up for Landscapers: Seasonal Plays That Win',
    metaTitle: 'Customer Follow-Up for Landscapers — Seasonal Re-engagement',
    metaDescription:
      'Landscaping is seasonal. Past customers are gold. Here’s how to follow up so they come back every spring.',
    excerpt: 'Past customers are the cheapest jobs you’ll ever win. Most landscapers never contact them again.',
    category: 'Customer Communication',
    publishedAt: '2026-01-30',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['landscaping', 'customer retention']
  },
  {
    slug: 'tradie-no-show-reduction',
    title: 'How to Reduce Tradie Site Visit No-Shows by 80%',
    metaTitle: 'Reduce No-Shows for Tradie Site Visits — Reminder Systems',
    metaDescription:
      'Site visit no-shows kill productivity. Smart reminder systems cut them by 80%. Here’s exactly how.',
    excerpt: 'Driving 40 minutes for a no-show is the worst part of running a trade business. Fix it.',
    category: 'Tradie Business Systems',
    publishedAt: '2026-02-06',
    author: 'Tradie Systems Co',
    readingMinutes: 4,
    tags: ['no shows', 'reminders']
  },
  {
    slug: 'quote-response-rate',
    title: 'How to Increase Your Quote Response Rate (Without Lowering Prices)',
    metaTitle: 'Increase Quote Response Rate — Without Discounting',
    metaDescription:
      'You don’t need to drop prices to get more quote replies. Here’s what actually moves the response rate.',
    excerpt: 'Cutting your prices to get more replies is the worst trade you can make. Here’s the alternative.',
    category: 'Quote Conversion',
    publishedAt: '2026-02-13',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['quote response rate']
  },
  {
    slug: 'first-30-days-follow-up',
    title: 'The First 30 Days After You Set Up Quote Follow-Up',
    metaTitle: 'What to Expect — First 30 Days of Quote Follow-Up Automation',
    metaDescription:
      'A real timeline of what changes in your trade business in the first 30 days after launching a follow-up system.',
    excerpt: 'Here’s what week 1, week 2, week 3, and week 4 actually look like.',
    category: 'Tradie Business Systems',
    publishedAt: '2026-02-20',
    author: 'Tradie Systems Co',
    readingMinutes: 6,
    tags: ['onboarding', 'expected results']
  },
  {
    slug: 'tradie-objection-handling',
    title: 'Handling Common Quote Objections (Without Sounding Salesy)',
    metaTitle: 'How to Handle Tradie Quote Objections — Honest Scripts',
    metaDescription:
      '“Too expensive,” “need to think,” “getting other quotes” — straightforward responses for tradies.',
    excerpt: 'Customers always say the same three things. Here’s how to answer all three.',
    category: 'Customer Communication',
    publishedAt: '2026-02-27',
    author: 'Tradie Systems Co',
    readingMinutes: 5,
    tags: ['objection handling', 'sales scripts']
  }
];

export const featuredSlugs = [
  'quote-follow-up-system-for-tradies',
  'why-customers-ghost-quotes',
  'follow-up-after-quote-template'
];

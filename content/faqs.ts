import type { FaqItem } from '@/components/ui/FaqAccordion';

export const faqs: (FaqItem & { category: string })[] = [
  // QUOTE FOLLOW-UP CORE
  {
    category: 'Quote follow-up',
    question: 'What is a quote follow-up system?',
    answer:
      'A quote follow-up system is an automated process that contacts a customer after a tradie sends them a quote — by SMS, email, or both — at structured intervals over the following days and weeks. The goal is simple: keep the trade business top of mind, answer the questions the customer never quite got around to asking, and bring the conversation back to a booking before the lead goes cold. For most Australian tradies, a proper quote follow-up system replaces ad-hoc "I’ll call them tomorrow" chasing with a consistent process that runs whether you’re on site, on the road, or off the tools. The system pauses the moment the customer replies, so you never accidentally chase someone who has already said yes. Done well, it sounds like a real tradie checking in — not a marketing platform.'
  },
  {
    category: 'Quote follow-up',
    question: 'How many times should I follow up after sending a quote?',
    answer:
      'Most trade jobs are won between the fourth and seventh touchpoint, yet most tradies stop after one. A solid follow-up sequence usually includes a confirmation message on day 0, a short check-in on day 1 or 2, an email with the quote reattached around day 5, a brief SMS on day 7 to 10, and a final re-engagement message at day 14 to 21. The exact cadence depends on your job size — a $400 fence repair needs faster, lighter follow-up than a $40,000 bathroom renovation. The key is consistency: a polite, structured rhythm beats one big push every time. After about three weeks, the lead moves to a longer-term reactivation list and gets touched once every few months. That way no quote is ever truly "dead" — it’s just resting.'
  },
  {
    category: 'Quote follow-up',
    question: 'What should you say in a follow-up message after a quote?',
    answer:
      'Keep it short, polite, and specific. Mention the customer by name, reference the job you quoted, and ask one clear question — like whether they had any questions about the price or scope. Avoid marketing language, exclamation marks, and "we hope this finds you well." A good day-3 SMS reads more like this: "Hi Dave, just checking in on the quote we sent Tuesday for the back fence — any questions on it? Happy to walk through the pricing on a call." It sounds like a real tradie following up because it is. We write every follow-up message as part of the system we build, tailored to your trade, your voice, and the kind of jobs you quote. You read and approve every message before anything goes live to a customer.'
  },
  {
    category: 'Quote follow-up',
    question: 'Why are customers ghosting my quotes?',
    answer:
      'Customers usually go quiet on a quote for one of four reasons. They got busy and forgot. They’re still comparing other quotes. The price felt outside their range and they didn’t want to say so. Or a competitor followed up first and locked in the conversation. Only one of those four is genuinely about price — the other three are entirely solved by consistent, automated follow-up. The biggest mistake most tradies make is assuming silence means "no." It usually means "not yet" or "I forgot." A short, well-timed message a few days after the quote often brings the customer straight back into the conversation. The follow-up doesn’t need to be pushy — it just needs to happen. Most lost jobs aren’t lost on price; they’re lost in the gap between sending the quote and the customer’s second decision moment.'
  },
  {
    category: 'Quote follow-up',
    question: 'How long should I keep following up on a quote?',
    answer:
      'For most trade jobs, three to four weeks is the sweet spot for the active follow-up window. That gives the customer enough time to think, compare, and come back without feeling chased. After that, the lead doesn’t disappear — it moves into a longer-term reactivation list and gets a thoughtful check-in every couple of months. We typically build both flows for tradies: an active follow-up sequence for new quotes, and a lead recovery campaign for older cold quotes. That way every quote you’ve ever sent has a path back to becoming a job. Some of the biggest wins we see come from quotes that were six or twelve months old — customers who genuinely meant to get back to the tradie and never did. A polite message at the right time is often all it takes.'
  },

  // RESULTS
  {
    category: 'Results',
    question: 'How many extra jobs can I expect to win?',
    answer:
      'The honest answer is: it depends on where you’re starting from. A tradie sending 30 quotes a month with no follow-up at all will see different numbers from one already doing some manual chasing. The category research on quote follow-up generally points to meaningful uplift in conversion when structured multi-touch follow-up replaces single-touch or no follow-up — but we don’t publish a single guaranteed percentage because trade businesses vary too much. On a free strategy call we’ll look at your current quote volume, average job value, current conversion rate, and follow-up process, and give you a realistic estimate based on your actual numbers. We’d rather give you a grounded number than an inflated one. Most tradies recover the cost of the system from one or two recovered jobs in the first month.'
  },
  {
    category: 'Results',
    question: 'How quickly will I see results?',
    answer:
      'The first recovered job usually lands within two to four weeks of going live. The follow-up system starts working from the moment a new quote enters it, so the speed depends partly on how many quotes you send. Tradies who go live alongside a cold-quote reactivation campaign often see jobs come back in the first week — those are quotes from the past six or twelve months that the system reaches out to as a one-off. Beyond the immediate wins, the patterns become clear over the first 90 days: you can see exactly how many jobs were recovered that would have gone cold without the system, how long the average customer takes to respond, and which touchpoints are doing the work. From there we tune the sequence to your trade and your customers.'
  },
  {
    category: 'Results',
    question: 'Will customers find automated follow-up annoying?',
    answer:
      'Not when it’s done well. The system uses spaced timing — usually one short message every few days, not multiple touches per day — and stops the moment the customer replies, books, or asks not to be contacted. The wording sounds like a real tradie checking in, not a marketing email. In practice, most customers actually appreciate the follow-up. They were busy, they forgot, and a polite message gives them an easy way back into the conversation. Tradies often hear "I’m glad you got back to me — I had been meaning to reply" rather than complaints. The pattern is consistent: bad follow-up feels pushy and impersonal, good follow-up feels organised and professional. Every message includes a clear opt-out, so anyone who genuinely doesn’t want more contact can stop it instantly.'
  },

  // SETUP & ONBOARDING
  {
    category: 'Setup & onboarding',
    question: 'How long does it take to set up?',
    answer:
      'Most quote follow-up systems are live within seven to fourteen days of the kickoff call. Setup runs in three rough phases. Week one: a 30 to 60 minute discovery call where we learn your trade, your typical jobs, the tools you already use, and how you currently follow up. We also audit any cold quotes sitting in your inbox or CRM. Week two: we draft the SMS and email sequences in your voice and connect them to the tools you already use (ServiceM8, Tradify, simPRO, AroFlo, Jobber, Gmail, Outlook, and similar). Week three: you read and approve every message, we test on dummy quotes, and then we switch the system on for new quotes and run the cold-quote reactivation. You don’t need to learn new software, sit through training, or do any of the technical build — we handle the lot end-to-end.'
  },
  {
    category: 'Setup & onboarding',
    question: 'Do I need to change my quoting software?',
    answer:
      'No — and you shouldn’t need to. The follow-up system is designed to sit alongside whatever quoting tool you already use. We integrate directly with the common Australian platforms: ServiceM8, Tradify, simPRO, AroFlo, Jobber, Fergus, NextMinute, Buildxact, and HousecallPro. We also connect to general CRMs like HubSpot, Pipedrive, and Zoho, and to email providers like Gmail and Outlook. If you’re still using a spreadsheet, a notebook, or just sending quotes straight from your inbox, we can work with that too. The system reads when a quote goes out, triggers the follow-up sequence, and pauses the moment the customer replies. You keep quoting the way you always have — the layer that chases the quotes is the new piece, and you don’t have to touch it.'
  },
  {
    category: 'Setup & onboarding',
    question: 'What do I need to provide?',
    answer:
      'Three things: access to your quoting tool (or wherever your quotes currently go out from), a clear picture of your typical job types and price ranges, and about 30 to 60 minutes for a discovery call. That’s essentially it. You don’t need a marketing background, a content brief, a brand guide, or any technical knowledge. We handle the strategy, write every SMS and email in your voice, build the sequences, connect the tools, and run the testing. The only ongoing input we ask from you is approval of the messaging before anything goes live, and a quick chat each month to look at the numbers together. The whole point is to take the follow-up work off your plate — not to add yet another tool you have to learn or babysit between jobs.'
  },

  // INTEGRATIONS
  {
    category: 'Integrations',
    question: 'Which tradie software does this work with?',
    answer:
      'We integrate with all the major Australian trade business platforms, including ServiceM8, Tradify, simPRO, AroFlo, Jobber, Fergus, NextMinute, Buildxact, and HousecallPro. We also connect to general CRMs that some tradies use — HubSpot, Pipedrive, Zoho — and to standard email providers like Gmail and Outlook. For SMS we work with the major Australian gateways. If you use a calendar like Google Calendar or Outlook for site visits, follow-up messages can include a direct booking link that drops the customer straight into your availability. If you’re using something less common, ask us — the system is designed to plug into the tools you already use, not to replace them. The principle is the same across every integration: the tradie keeps quoting the way they always have, and the follow-up sequence triggers automatically off the quote going out.'
  },
  {
    category: 'Integrations',
    question: 'Can the system book customers straight into my calendar?',
    answer:
      'Yes. When a customer is ready to move forward, the follow-up message can include a direct booking link that drops them straight into your available time slots. The link syncs with Google Calendar, Outlook, or whatever scheduling tool you already use. No more "what time suits you?" back-and-forth over SMS, no more phone tag, no more guessing whether a site-visit slot is still open. We can also build pre-visit forms into the booking flow — short questionnaires that capture the basics (job type, address, access notes, photos) before you arrive, so the visit is more productive when you get there. For tradies juggling a packed week, the booking integration alone often saves several hours and prevents the back-and-forth that loses momentum on a quote.'
  },

  // CUSTOMER COMMUNICATION
  {
    category: 'Customer communication',
    question: 'Will the messages sound like me, or generic?',
    answer:
      'Like you. Every sequence is written specifically for your trade, your job types, and your voice. We do a short voice-and-tone session during onboarding so the messaging sounds like something you would actually say to a customer over the phone — not corporate, not over-polished, not American. Australian English, plain language, no exclamation marks, no "Dear valued customer." A fencer’s messages won’t sound the same as an electrician’s, and a sole operator’s won’t sound the same as a 12-person crew’s. You read and approve every message before it goes live, and you can request edits any time after that. If a phrase doesn’t feel right, we change it. The goal is messaging that a customer reads and thinks "yep, that’s the same bloke who quoted me" — not "this is clearly some automated thing."'
  },
  {
    category: 'Customer communication',
    question: 'What happens when a customer replies?',
    answer:
      'The system pauses the follow-up sequence instantly and notifies you in real time — by SMS, email, or however you prefer to be contacted. You take the conversation from there. The system doesn’t try to reply on your behalf, and it doesn’t keep chasing someone who has just said yes. That’s the whole point of the design: automation does the predictable, scheduled work, and you handle the actual relationship. If the customer replies "STOP" or asks not to be messaged, they’re removed instantly and flagged so you know. If they reply with a question, you see it in your normal inbox or SMS thread the way you always would. Some tradies set up a daily summary of replies; others prefer real-time notifications. Either way, no reply ever falls through the cracks.'
  },
  {
    category: 'Customer communication',
    question: 'Is this just AI replying to my customers?',
    answer:
      'No. The system handles automated follow-up messages — short, pre-approved SMS and emails sent on a schedule — but real customer conversations stay with you. We use automation for the part it’s genuinely good at (consistent, on-time, polite outreach that doesn’t depend on whether you remembered) and we leave the relationship-building, pricing conversations, and scope negotiations entirely to you. Optional AI-assisted reply suggestions are available if you want them — they draft a response based on your past quotes and FAQs, which you can approve, edit, or discard before sending — but they’re off by default. We deliberately don’t put autonomous AI in front of your customers. The risk to your reputation, your brand, and your relationships is too high, and the upside isn’t worth it.'
  },

  // LEAD MANAGEMENT
  {
    category: 'Lead management',
    question: 'Can this recover old quotes that went cold months ago?',
    answer:
      'Yes — and lead recovery from old quotes is often the biggest quick win. We can build a one-time reactivation campaign that contacts every cold quote sitting in your CRM, inbox, or quoting tool from the past six to twelve months. The message is polite, branded, and thoughtful — never pushy or generic. It acknowledges that some time has passed, gives the customer an easy way back into the conversation, and offers a clear next step. Most tradies recover at least a handful of jobs from this alone, and for many it covers the cost of the entire system in the first month or two. Anyone who comes back gets folded into the live follow-up sequence so the momentum carries forward. Quotes that don’t come back politely close themselves out, which is also useful — it tells you which leads are genuinely dead.'
  },
  {
    category: 'Lead management',
    question: 'How is this different from a CRM?',
    answer:
      'A CRM stores customer contacts. A quote follow-up system actually contacts them. Most Australian tradies already have a CRM, a quoting tool, or job management software — ServiceM8, Tradify, simPRO, AroFlo, Jobber — that holds every lead and quote. The problem isn’t storage. The problem is that nothing in those tools is actively reaching out, on a schedule, in your voice, until the customer responds. A follow-up system is the layer that turns stored leads into booked jobs. We don’t replace your CRM; we plug into it. When a new quote enters the CRM, the follow-up sequence fires automatically. When a customer replies, the CRM gets updated and the sequence stops. Think of it less as "another tool" and more as the missing piece between "quote sent" and "job won."'
  },

  // SETUP & ONBOARDING — operational clarity
  {
    category: 'Setup & onboarding',
    question: 'What does a follow-up message actually look like?',
    answer:
      'Short, plain, and written the way a real Australian tradie would write it. A typical day-3 SMS reads: "Hi Dave, just checking in on the quote we sent Tuesday for the back fence — any questions on it? Happy to walk through the pricing on a call." No exclamation marks, no marketing language, no "we hope this finds you well." A day-7 email might be a touch longer — it reattaches the quote, gently addresses a common objection like timing or scope, and ends with a clear question rather than a hard pitch. Every message in the sequence is written specifically for your trade, your job sizes, and your voice. You read and approve everything before it goes live to a customer, and you can request changes any time. The whole point is that the customer can’t tell whether you typed it or the system did.'
  },
  {
    category: 'Setup & onboarding',
    question: 'What does the workflow look like end-to-end?',
    answer:
      'Day 0: you send the quote the way you always have. Within minutes, the system fires a short confirmation SMS so the customer knows it’s landed. Day 1: a polite first follow-up by SMS. Day 3: an email with the quote reattached and one or two common questions answered. Day 7: a short SMS check-in. Day 14: a final email with a clear, no-pressure close. Day 30 and beyond: cold-quote reactivation, where quietly silent quotes get a thoughtful re-engagement message every couple of months. The moment a customer replies anywhere in the sequence, everything pauses and you take over the conversation. Most jobs land between day 3 and day 14 — those are customers who genuinely meant to reply and got busy. The cadence and wording are tuned to your trade so the customer never feels chased; they just feel like they’re dealing with a tradie who’s on top of it.'
  },
  {
    category: 'Setup & onboarding',
    question: 'What happens in the first 30 days after I sign up?',
    answer:
      'Week one is the kickoff. We run a 30 to 60 minute call to learn your business — your trade, your typical jobs, the tools you use, how you currently follow up, and where leads are leaking. We audit any cold quotes sitting in your CRM or inbox. Week two, we draft every SMS and email sequence in your voice, build the integrations with the tools you already use (ServiceM8, Tradify, simPRO, AroFlo, Jobber, Gmail, etc.), and run internal tests on dummy quotes. Week three, you read and approve everything. Once approved, we switch the system on for new quotes and run the cold-quote reactivation campaign in parallel. By day 30 most tradies are already seeing recovered jobs come back, the sequence is running on autopilot, and we’re tuning the wording or timing based on early data. From month two onwards, the system just runs in the background.'
  },
  {
    category: 'Customer communication',
    question: 'Do I see what’s being sent and to whom?',
    answer:
      'Yes — total transparency is built into how the system runs. You get a simple dashboard showing every open quote, where it is in the follow-up sequence, when the next message is scheduled to go out, what the message says, and any customer replies in one thread. You can pause, edit, or skip any quote at any time. You can also pull a single customer out of the sequence if a specific conversation needs hands-on attention. Most tradies don’t check the dashboard daily — they just glance at it once a day or get a short summary email of new replies. The point is to take the follow-up work off your plate, not to add another thing you have to babysit. But the visibility is there if and when you want it, and nothing happens in the background that you can’t see.'
  },
  {
    category: 'Customer communication',
    question: 'What happens if someone asks to stop messages?',
    answer:
      'They’re removed immediately. Every SMS we send includes a simple opt-out — usually "Reply STOP to unsubscribe" — and every email has a clear unsubscribe link. The system honours both instantly, no human intervention required, and flags the contact so you can see exactly who has opted out and when. No customer ever receives a message after they’ve asked you to stop, which protects your reputation, your relationship with that customer, and your compliance with Australian spam law (the Spam Act 2003). We take this seriously because the whole system depends on customers feeling that the tradie is professional and respectful. One bad opt-out experience can do real damage to a small trade business. The opt-out path is short, clear, and irreversible by accident.'
  },

  // GENERAL
  {
    category: 'General',
    question: 'Do you only work with tradies?',
    answer:
      'Yes. Tradie Systems Co specialises in Australian trade and home service businesses, and we don’t take on clients outside that scope. The systems are designed around how tradies actually work and quote — including on-site quoting, after-hours enquiries, photo-heavy jobs, variable scope, and trade-specific software like ServiceM8 and Tradify. The trades we work with most often are fencing, landscaping, electrical, plumbing, building, concreting, carpentry, painting, HVAC, and solar — but the same quote follow-up principles apply to most trades that send quotes and lose jobs because the chasing never quite happens. If you run a trade business that doesn’t fit one of those categories, send us a message and we’ll let you know if it’s a fit. We’d rather tell you "we’re not the right people for this" than try to make a system fit a business it wasn’t built for.'
  },
  {
    category: 'General',
    question: 'Where are you based?',
    answer:
      'Tradie Systems Co is an Australian business, working with tradies in every state and territory. Setup and ongoing work is fully remote — you don’t need to be in a particular city, and we don’t need to visit your site or your office to build the system. We use SMS, email, and short video calls for everything. That makes us just as accessible to a fencer in regional Queensland or a plumber on the WA mid-coast as we are to a builder in Sydney or Melbourne. We work in Australian business hours and Australian English, with Australian phone numbers for any SMS that goes out, and the messaging is written in plain Australian voice — no "y’all," no "awesome," no American spelling. Tradies anywhere in the country can work with us.'
  },
  {
    category: 'General',
    question: 'What does it cost?',
    answer:
      'Pricing depends on the size and complexity of the system you need. We don’t publish a standard price because every trade business is different — a sole-operator sparkie sending 20 quotes a month needs something very different from a 12-person fencing crew sending 150. Generally, the build cost is a one-off project fee covering discovery, copywriting, integrations, testing, and the cold-quote reactivation campaign, with a modest ongoing fee for hosting, message delivery, monthly tuning, and support. Both are designed so a single recovered job covers the cost many times over. On a free strategy call we’ll look at your quote volume, average job value, and current process, and give you a clear number based on your specific situation. There are no long contracts, and we don’t bundle in features you don’t need.'
  },
  {
    category: 'General',
    question: 'What’s the first step?',
    answer:
      'Book a free 30-minute strategy call. There’s no pitch deck, no obligation, and no follow-up sales pressure if the timing isn’t right. On the call we’ll review your current quote process, look at where leads are leaking, and tell you exactly what a follow-up system would look like for your business — whether or not you decide to work with us. You walk away with a clear picture of what to fix and how, even if you do it yourself. If we are a fit, we’ll talk you through the three-week setup timeline and pricing. If we’re not, we’ll happily point you at the right next step. The call is genuinely useful either way — most tradies leave it with a couple of changes they can implement themselves that day.'
  }
];

// Curated subset for the homepage
export const homepageFaqs: FaqItem[] = [
  faqs.find((f) => f.question === 'What is a quote follow-up system?')!,
  faqs.find((f) => f.question === 'What does a follow-up message actually look like?')!,
  faqs.find((f) => f.question === 'How many extra jobs can I expect to win?')!,
  faqs.find((f) => f.question === 'How long does it take to set up?')!,
  faqs.find((f) => f.question === 'Will customers find automated follow-up annoying?')!,
  faqs.find((f) => f.question === 'Which tradie software does this work with?')!,
  faqs.find((f) => f.question === 'Can this recover old quotes that went cold months ago?')!,
  faqs.find((f) => f.question === 'What does it cost?')!,
  faqs.find((f) => f.question === 'What’s the first step?')!
];

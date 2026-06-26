import type { FaqItem } from '@/components/ui/FaqAccordion';

export const faqs: (FaqItem & { category: string })[] = [
  // QUOTE FOLLOW-UP CORE
  {
    category: 'Quote follow-up',
    question: 'What is a quote follow-up system?',
    answer:
      'A quote follow-up system is a structured process for what happens after a quote is sent. It can include reminders, SMS, emails, tasks, CRM updates, reply handling, and cold quote reactivation. The goal is to stop quoted jobs from going quiet just because the customer got busy, forgot to reply, or needed a clear next step. For some trade businesses, the best fix is a simple manual checklist. For others, it may be automation or done-for-you implementation. The free quote follow-up audit comes first so we can see what your business actually needs before recommending anything.'
  },
  {
    category: 'Quote follow-up',
    question: 'How many times should I follow up after sending a quote?',
    answer:
      'Most tradies should follow up more than once, but the right number depends on the job size, trade, quote value, and how urgent the work is. A small repair quote usually needs a lighter, faster follow-up process than a large renovation, fencing job, solar install, or landscaping project. A common structure is a confirmation message, a polite check-in, a reminder a few days later, and a final no-pressure follow-up before the quote is treated as cold. During the audit, we look at your current timing and recommend a follow-up rhythm that suits how your customers actually buy.'
  },
  {
    category: 'Quote follow-up',
    question: 'What should you say in a follow-up message after a quote?',
    answer:
      'A good follow-up message should be short, clear, and specific to the job. Mention the quote, make it easy for the customer to reply, and avoid sounding pushy or corporate. For example: “Hi Dave, just checking in on the quote for the back fence — did you have any questions on it?” The wording should sound like your business, not a generic marketing platform. As part of the audit, we look at the type of messages you currently send and where clearer wording could help customers respond.'
  },
  {
    category: 'Quote follow-up',
    question: 'Why are customers ghosting my quotes?',
    answer:
      'Customers go quiet for many reasons. They may be comparing quotes, waiting on a partner, unsure about price, confused about scope, distracted by work or family, or simply forgetting to reply. Silence does not always mean they chose someone else. The problem is that many tradies have no reliable way to find out why the customer went quiet. A quote follow-up audit helps identify whether the issue is timing, wording, unclear next steps, missed replies, weak reminders, or old quotes being forgotten too early.'
  },
  {
    category: 'Quote follow-up',
    question: 'How long should I keep following up on a quote?',
    answer:
      'For many trade businesses, the active follow-up window is around two to four weeks, but it depends on the job. A small urgent job may need faster follow-up. A larger project may need a longer decision period. After the active follow-up window, older quotes can sometimes be moved into a cold quote reactivation process instead of being forgotten. During the audit, we look at your quote value, sales cycle, and current follow-up habits before recommending how long you should keep following up.'
  },

  // RESULTS
  {
    category: 'Results',
    question: 'How many extra jobs can I expect to win?',
    answer:
      'There is no honest fixed number without looking at your business first. A tradie sending 50 quotes a month with almost no follow-up has a very different opportunity from a business that already follows up consistently. During the free audit, we look at your quote volume, average job value, current follow-up process, and where jobs are going cold. From there, we can give you a realistic view of what might improve and whether the fix is worth doing.'
  },
  {
    category: 'Results',
    question: 'How quickly will I see results?',
    answer:
      'That depends on how many quotes you send, how many old quotes are sitting cold, and what follow-up process you already have. Some businesses may see replies quickly once old quotes are reviewed or reminders are improved. Others need a more structured process over several weeks before patterns become clear. The audit is designed to identify the fastest practical improvement first, whether that is better wording, clearer reminders, a manual process, automation, or done-for-you help.'
  },
  {
    category: 'Results',
    question: 'Will customers find automated follow-up annoying?',
    answer:
      'Customers usually dislike bad follow-up, not follow-up itself. Pushy, repetitive, generic messages can damage trust. Clear, polite, well-timed follow-up often helps because the customer knows what to do next. The safest approach is to use plain language, sensible timing, and stop once the customer replies or opts out. During the audit, we look at whether automation is even appropriate for your business and how to keep the customer experience respectful.'
  },

  // SETUP & ONBOARDING
  {
    category: 'Setup & onboarding',
    question: 'How long does it take to set up?',
    answer:
      'The audit itself is usually a 30-minute conversation. What happens after that depends on what we find. Some businesses only need a DIY follow-up plan, message templates, or better reminders. Others may need automation or done-for-you implementation. If implementation is recommended, timing depends on the tools you use, the complexity of your process, and how many follow-up paths need to be built. We explain the likely timeline after the audit, not before.'
  },
  {
    category: 'Setup & onboarding',
    question: 'Do I need to change my quoting software?',
    answer:
      'Usually, no. The first step is to look at what you already use. That might be ServiceM8, Tradify, simPRO, AroFlo, Jobber, Fergus, NextMinute, Buildxact, Gmail, Outlook, a spreadsheet, or a manual process. The audit checks whether your existing setup can support better follow-up before recommending any new software. The goal is to improve what happens after a quote is sent, not force you into tools you do not need.'
  },
  {
    category: 'Setup & onboarding',
    question: 'What do I need to provide?',
    answer:
      'For the free audit, you only need to explain how quotes are currently handled. Useful details include how many quotes you send, where quotes are stored, how you follow up now, what tools you use, and where customers tend to go quiet. If you have examples of recent quotes or old leads, that can help, but you do not need to prepare a full report. The audit is meant to be simple and practical.'
  },

  // INTEGRATIONS
  {
    category: 'Integrations',
    question: 'Which tradie software does this work with?',
    answer:
      'A quote follow-up process can often work with common trade tools such as ServiceM8, Tradify, simPRO, AroFlo, Jobber, Fergus, NextMinute, Buildxact, HousecallPro, Gmail, Outlook, Google Calendar, and general CRMs. The exact setup depends on what you use and what access is available. During the audit, we check your current tools and explain whether better reminders, templates, manual tasks, automation, or integration work makes the most sense.'
  },
  {
    category: 'Integrations',
    question: 'Can the system book customers straight into my calendar?',
    answer:
      'It can, if that suits your sales process. Some tradies benefit from giving customers a direct booking link for a call, site visit, or follow-up appointment. Others prefer to keep replies coming back by SMS or phone. The audit looks at how your customers usually move from quote to booking and whether calendar booking would make the process easier or create unnecessary friction.'
  },

  // CUSTOMER COMMUNICATION
  {
    category: 'Customer communication',
    question: 'Will the messages sound like me, or generic?',
    answer:
      'They should sound like your business. Good quote follow-up uses plain Australian English, clear timing, and wording that suits your trade and customer type. A fencer, plumber, builder, electrician, landscaper, and painter should not all sound the same. During the audit, we look at your current tone and recommend message wording that feels natural, not over-polished or robotic.'
  },
  {
    category: 'Customer communication',
    question: 'What happens when a customer replies?',
    answer:
      'The right process should make replies easy to see and handle. If automation is used, follow-up should pause when the customer replies so they are not accidentally chased again. If the process is manual, there should still be a clear way to flag replies and stop further reminders. The audit checks whether customer replies are currently being missed, delayed, or scattered across too many places.'
  },
  {
    category: 'Customer communication',
    question: 'Is this just AI replying to my customers?',
    answer:
      'No. The focus is quote follow-up, not replacing you in customer conversations. AI may be useful in some cases for drafting replies, sorting leads, summarising conversations, or helping with admin, but it should not be forced into the process where it creates risk. The audit looks at what actually needs fixing first. For many tradies, simple reminders and better follow-up structure are more useful than AI.'
  },

  // LEAD MANAGEMENT
  {
    category: 'Lead management',
    question: 'Can this recover old quotes that went cold months ago?',
    answer:
      'Possibly. Many trade businesses have old quotes sitting in their inbox, CRM, quoting software, or spreadsheet that were never properly followed up. Some of those customers may no longer be interested, but others may have delayed the job or simply forgotten to respond. The audit checks whether cold quote reactivation makes sense and how to approach it without sounding desperate or pushy.'
  },
  {
    category: 'Lead management',
    question: 'How is this different from a CRM?',
    answer:
      'A CRM stores leads and customer information. Quote follow-up is the process that makes sure those leads are actually followed up after a quote is sent. Many tradies already have a CRM or job management tool, but the follow-up still depends on memory, manual tasks, or inconsistent reminders. The audit looks at whether your existing CRM is being used properly, whether it needs better tasks or templates, or whether automation should be added.'
  },

  // SETUP & ONBOARDING — operational clarity
  {
    category: 'Setup & onboarding',
    question: 'What does a follow-up message actually look like?',
    answer:
      'A good follow-up message is short, polite, and easy to reply to. For example: “Hi Dave, just checking in on the quote for the back fence — did you have any questions?” A longer email might reattach the quote, clarify the next step, and invite the customer to ask questions. The message should not sound like a newsletter or a sales script. During the audit, we look at what you currently send and where the wording could be clearer.'
  },
  {
    category: 'Setup & onboarding',
    question: 'What does the workflow look like end-to-end?',
    answer:
      'A simple workflow might look like this: quote sent, confirmation message, first check-in, reminder, later follow-up, then cold quote review if there is still no reply. If the customer replies, the process should stop and the conversation should be handled by the right person. That is only one example. The right workflow depends on your trade, job size, quoting process, customer type, and tools.'
  },
  {
    category: 'Setup & onboarding',
    question: 'What happens in the first 30 days after I sign up?',
    answer:
      'The better question is what happens after the audit. First, we review your current follow-up process. Then we identify the gaps. After that, we recommend the simplest fix. That might be a DIY plan, better templates, reminder tasks, CRM cleanup, automation, or done-for-you implementation. If you choose to work with us after the audit, the next steps and timeline depend on what your business actually needs.'
  },
  {
    category: 'Customer communication',
    question: 'Do I see what’s being sent and to whom?',
    answer:
      'You should. Whether the process is manual, semi-automated, or fully automated, you need visibility over what is being sent, when it is being sent, and who has replied. One of the things we check in the audit is whether your current process gives you enough visibility over open quotes, missed replies, follow-up timing, and old leads.'
  },
  {
    category: 'Customer communication',
    question: 'What happens if someone asks to stop messages?',
    answer:
      'They should stop receiving follow-up. Any follow-up process needs a clear way to respect opt-outs, unsubscribe requests, and customers who say they are no longer interested. If SMS or email automation is used, this becomes even more important. The audit looks at customer experience and follow-up safety, not just conversion.'
  },

  // GENERAL
  {
    category: 'General',
    question: 'Do you only work with tradies?',
    answer:
      'Yes. Tradie Systems Co focuses on Australian trade and home service businesses that quote for work. That includes trades such as fencing, landscaping, electrical, plumbing, building, concreting, carpentry, painting, HVAC, and solar. The website is focused specifically on quote follow-up, not general business automation.'
  },
  {
    category: 'General',
    question: 'Where are you based?',
    answer:
      'Tradie Systems Co is an Australian business working with tradies across Australia. The audit and any follow-up work can be done remotely using phone, video, SMS, and email. The focus is Australian trade businesses, Australian customer expectations, and plain Australian English.'
  },
  {
    category: 'General',
    question: 'What does it cost?',
    answer:
      'The quote follow-up audit is free. If the audit finds that you only need simple DIY improvements, we will tell you that. If you need help implementing changes, the cost depends on what is required. That could be templates, reminder setup, CRM cleanup, automation, or done-for-you implementation. We do not need to force a fixed package before understanding your current process.'
  },
  {
    category: 'General',
    question: 'What’s the first step?',
    answer:
      'The first step is to book a free quote follow-up audit. We review how your quotes are currently followed up, where jobs may be going cold, and what the simplest fix would be. You can use the recommendations yourself or ask us to help implement them. There is no obligation to move ahead after the audit.'
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
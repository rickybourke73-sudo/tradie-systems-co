import { Section, SectionHeader } from '@/components/ui/Section';

interface Phase {
  week: string;
  title: string;
  body: string;
  actions: string[];
}

const phases: Phase[] = [
  {
    week: 'Week 1',
    title: 'We learn your business',
    body: 'A short kickoff call covers your trade, your typical jobs, the tools you already use, and how you currently follow up. We audit any open quotes sitting in your CRM or inbox.',
    actions: [
      'Kickoff call (30–45 minutes)',
      'Review of your existing quote flow',
      'Audit of cold quotes from the last 6–12 months',
      'Agreement on tone, channels, and timing'
    ]
  },
  {
    week: 'Week 2',
    title: 'We build the system',
    body: 'We draft every message in your voice, build the sequences, hook into the tools you already use, and run it through internal testing. Nothing goes live until you’ve read every message and approved it.',
    actions: [
      'Sequences drafted in plain English',
      'Integrations with ServiceM8 / Tradify / simPRO / AroFlo / Jobber / Gmail',
      'Internal test run on dummy quotes',
      'Approval round with you — edits welcome'
    ]
  },
  {
    week: 'Week 3',
    title: 'We go live',
    body: 'The system switches on for new quotes. We also fire the cold-quote reactivation campaign — this is where most clients see jobs come back in week one.',
    actions: [
      'Live on new quotes from day one',
      'Cold-quote reactivation campaign sent',
      'You receive a daily summary of replies',
      'Dashboard access so you can see what’s running'
    ]
  },
  {
    week: 'Ongoing',
    title: 'We tune it',
    body: 'Every month we look at what’s working — open rates, reply rates, jobs won — and tweak. Wording, timing, sequence length. The system gets sharper the longer it runs.',
    actions: [
      'Monthly performance review',
      'Wording and timing adjustments',
      'New sequences added as you grow (reviews, referrals, seasonal)',
      'Support inbox for anything that needs changing fast'
    ]
  }
];

export function AfterYouSayYes() {
  return (
    <Section id="after-you-say-yes" className="border-y border-white/5 bg-ink-900/30">
      <SectionHeader
        eyebrow="What happens after you say yes"
        title="From signed-off to switched-on in about three weeks."
        description="Setup is structured, simple, and doesn’t need you to learn new software. Most of the work happens on our side — yours is mostly approving wording and answering a few questions about how you work."
      />

      <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
        {phases.map((p, i) => (
          <article
            key={p.week}
            className="card flex h-full flex-col p-6 transition-colors duration-200 hover:border-signal-500/30 sm:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
                {p.week}
              </span>
              <span
                aria-hidden="true"
                className="font-mono text-[11px] text-bone-500"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-bone-50 sm:text-xl">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bone-300">{p.body}</p>
            <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
              {p.actions.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2.5 text-sm text-bone-300"
                >
                  <span
                    className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-signal-500"
                    aria-hidden="true"
                  />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-bone-400">
        You stay on the tools the entire time. We don’t need you in front of a laptop. Approvals
        happen by SMS or email — short and to the point.
      </p>
    </Section>
  );
}

import { Section, SectionHeader } from '@/components/ui/Section';

interface Phase {
  step: string;
  title: string;
  body: string;
  actions: string[];
}

const phases: Phase[] = [
  {
    step: 'Step 1',
    title: 'We look at your current follow-up',
    body: 'The audit starts with how quotes are handled now — what happens after they are sent, who follows up, what gets missed, and where customers tend to go quiet.',
    actions: [
      'Review your current quote follow-up process',
      'Look at how open quotes are tracked',
      'Check where reminders or callbacks are missing',
      'Identify quotes that may have gone cold too early'
    ]
  },
  {
    step: 'Step 2',
    title: 'We find the follow-up gaps',
    body: 'We look for the weak points in the process. That might be slow first follow-up, no second touchpoint, missed replies, unclear next steps, or old quotes that were never reactivated.',
    actions: [
      'Check follow-up timing',
      'Review SMS and email wording',
      'Look for missed reply handling issues',
      'Find gaps between quote sent and customer decision'
    ]
  },
  {
    step: 'Step 3',
    title: 'We recommend the simplest fix',
    body: 'Not every business needs automation straight away. Some need better templates, reminders, tasks, or a clearer quote pipeline. Others may benefit from a done-for-you follow-up system.',
    actions: [
      'DIY follow-up improvements if that is enough',
      'Template and reminder recommendations',
      'Automation options if they make sense',
      'Done-for-you implementation only if it fits'
    ]
  },
  {
    step: 'Step 4',
    title: 'You choose what happens next',
    body: 'After the audit, you can take the recommendations and fix things yourself, ask for help with part of the process, or get us to build the quote follow-up system for you.',
    actions: [
      'No obligation after the audit',
      'Plain-English summary of what we found',
      'Clear next steps based on your business',
      'Option to work with us only if it makes sense'
    ]
  }
];

export function AfterYouSayYes() {
  return (
    <Section id="after-you-say-yes" className="border-y border-white/5 bg-ink-900/30">
      <SectionHeader
        eyebrow="After you book"
        title="What happens during your free quote follow-up audit."
        description="The audit is designed to diagnose the problem before recommending a solution. We look at how your quotes are followed up now, where jobs may be going cold, and what the simplest fix would be."
      />

      <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
        {phases.map((p, i) => (
          <article
            key={p.step}
            className="card flex h-full flex-col p-6 transition-colors duration-200 hover:border-signal-500/30 sm:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-400">
                {p.step}
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
        The goal is not to force you into software. The goal is to show you where quote follow-up is
        breaking down and what would realistically improve it.
      </p>
    </Section>
  );
}
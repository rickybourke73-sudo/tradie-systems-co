'use client';

import { useId, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site.config';

interface FormState {
  name: string;
  business: string;
  trade: string;
  location: string;
  email: string;
  phone: string;
  mainProblem: string;
  currentTools: string[];
  message: string;
  website: string;
}

const initialState: FormState = {
  name: '',
  business: '',
  trade: '',
  location: '',
  email: '',
  phone: '',
  mainProblem: '',
  currentTools: [],
  message: '',
  website: ''
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TRADES = [
  'Fencing',
  'Landscaping',
  'Electrical',
  'Plumbing',
  'Building',
  'Concreting',
  'HVAC',
  'Painting',
  'Carpentry',
  'Roofing',
  'Solar',
  'Pest control',
  'Cleaning',
  'Other'
] as const;

const TOOL_OPTIONS = [
  'Paper or notebook',
  'Phone notes',
  'Google Sheets',
  'Xero',
  'ServiceM8',
  'Tradify',
  'Simpro',
  'Other software',
  'Nothing consistent'
] as const;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    trade: false,
    location: false,
    mainProblem: false
  });

  const baseId = useId();
  const id = (key: string) => `${baseId}-${key}`;

  const update =
    (
      key: Exclude<keyof FormState, 'currentTools'>
    ) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((current) => ({
        ...current,
        [key]: event.target.value
      }));
    };

  const blur =
    (key: keyof typeof touched) =>
    () => {
      setTouched((current) => ({
        ...current,
        [key]: true
      }));
    };

  const toggleTool = (tool: string) => {
    setForm((current) => ({
      ...current,
      currentTools: current.currentTools.includes(tool)
        ? current.currentTools.filter((item) => item !== tool)
        : [...current.currentTools, tool]
    }));
  };

  const errors = {
    name: form.name.trim().length === 0,
    email: !EMAIL_REGEX.test(form.email.trim()),
    trade: form.trade.trim().length === 0,
    location: form.location.trim().length === 0,
    mainProblem: form.mainProblem.trim().length < 10
  };

  const showError = (key: keyof typeof errors) =>
    touched[key] && errors[key];

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setTouched({
      name: true,
      email: true,
      trade: true,
      location: true,
      mainProblem: true
    });

    if (
      errors.name ||
      errors.email ||
      errors.trade ||
      errors.location ||
      errors.mainProblem
    ) {
      setStatus('error');
      setErrorMsg('Please complete the required fields above.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));

        throw new Error(
          data.error ||
            'We could not send your enquiry just now. Please try again.'
        );
      }

      if (typeof window !== 'undefined') {
        const browserWindow = window as Window & {
          gtag?: (...args: unknown[]) => void;
        };

        browserWindow.gtag?.('event', 'generate_lead', {
          method: 'systems_review_form'
        });
      }

      setStatus('success');
      setForm(initialState);
    } catch (error) {
      setErrorMsg(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="card p-8 text-center md:p-10"
      >
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success ring-1 ring-success/30">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>

        <h3 className="font-display text-2xl text-bone-50">
          Your review request has been received.
        </h3>

        <p className="mx-auto mt-3 max-w-md text-bone-300">
          We will review what you have shared and reply within one business
          day.
        </p>

        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-ghost mt-7"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor={id('website')}>Leave this empty</label>
        <input
          id={id('website')}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update('website')}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          htmlFor={id('name')}
          required
          error={showError('name') ? 'Please add your name.' : undefined}
        >
          <input
            id={id('name')}
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            onBlur={blur('name')}
            autoComplete="name"
            aria-invalid={showError('name') || undefined}
            className={fieldClass(showError('name'))}
          />
        </Field>

        <Field
          label="Business name"
          htmlFor={id('business')}
          hint="Optional"
        >
          <input
            id={id('business')}
            type="text"
            value={form.business}
            onChange={update('business')}
            autoComplete="organization"
            className={fieldClass(false)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your trade"
          htmlFor={id('trade')}
          required
          error={
            showError('trade') ? 'Please select your trade.' : undefined
          }
        >
          <select
            id={id('trade')}
            required
            value={form.trade}
            onChange={update('trade')}
            onBlur={blur('trade')}
            aria-invalid={showError('trade') || undefined}
            className={fieldClass(showError('trade'))}
          >
            <option value="">Select your trade...</option>
            {TRADES.map((trade) => (
              <option key={trade} value={trade}>
                {trade}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Location"
          htmlFor={id('location')}
          required
          error={
            showError('location')
              ? 'Please add your suburb, town or service area.'
              : undefined
          }
        >
          <input
            id={id('location')}
            type="text"
            required
            value={form.location}
            onChange={update('location')}
            onBlur={blur('location')}
            placeholder="Example: Townsville, QLD"
            autoComplete="address-level2"
            aria-invalid={showError('location') || undefined}
            className={fieldClass(showError('location'))}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email"
          htmlFor={id('email')}
          required
          error={
            showError('email') ? 'Please add a valid email.' : undefined
          }
        >
          <input
            id={id('email')}
            type="email"
            required
            inputMode="email"
            value={form.email}
            onChange={update('email')}
            onBlur={blur('email')}
            autoComplete="email"
            aria-invalid={showError('email') || undefined}
            className={fieldClass(showError('email'))}
          />
        </Field>

        <Field label="Phone" htmlFor={id('phone')} hint="Optional">
          <input
            id={id('phone')}
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={update('phone')}
            autoComplete="tel"
            className={fieldClass(false)}
          />
        </Field>
      </div>

      <Field
        label="What is the main problem you want to fix?"
        htmlFor={id('mainProblem')}
        required
        error={
          showError('mainProblem')
            ? 'Please give us a short description of the problem.'
            : undefined
        }
      >
        <textarea
          id={id('mainProblem')}
          required
          rows={5}
          value={form.mainProblem}
          onChange={update('mainProblem')}
          onBlur={blur('mainProblem')}
          placeholder="For example: quotes are not being followed up, missed calls are being forgotten, invoices are overdue, or jobs are hard to keep organised."
          aria-invalid={showError('mainProblem') || undefined}
          className={`${fieldClass(
            showError('mainProblem')
          )} min-h-[130px] resize-y leading-relaxed`}
        />
      </Field>

      <fieldset>
        <legend className="text-sm font-medium text-bone-100">
          What are you currently using?
        </legend>
        <p className="mt-1 text-xs text-bone-400">
          Select all that apply. This is optional.
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {TOOL_OPTIONS.map((tool) => {
            const checked = form.currentTools.includes(tool);

            return (
              <label
                key={tool}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                  checked
                    ? 'border-signal-500 bg-signal-500/10 text-bone-50'
                    : 'border-white/10 bg-ink-900/40 text-bone-300 hover:border-white/20'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleTool(tool)}
                  className="h-4 w-4 rounded border-white/20 bg-ink-900 text-signal-500 focus:ring-signal-500"
                />
                <span>{tool}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <Field
        label="Anything else we should know?"
        htmlFor={id('message')}
        hint="Optional"
      >
        <textarea
          id={id('message')}
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder="Add any extra context, goals, deadlines or questions."
          className={`${fieldClass(
            false
          )} min-h-[110px] resize-y leading-relaxed`}
        />
      </Field>

      {status === 'error' && errorMsg && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger"
        >
          <AlertCircle
            className="mt-0.5 h-4 w-4 flex-none"
            aria-hidden="true"
          />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="pt-1">
        <Button
          type="submit"
          variant="primary"
          arrow={status !== 'submitting'}
          disabled={status === 'submitting'}
          className="w-full sm:w-auto"
        >
          {status === 'submitting'
            ? 'Sending...'
            : 'Request My Free Systems Review'}
        </Button>

        <p className="mt-4 text-xs leading-relaxed text-bone-400">
          Prefer email? Contact{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-signal-400 underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
          . We usually reply within one business day.
        </p>
      </div>
    </form>
  );
}

function fieldClass(invalid: boolean) {
  const base =
    'form-input w-full rounded-xl border bg-ink-900/60 px-4 py-3 text-base text-bone-50 placeholder:text-bone-400/50 transition-colors duration-200 focus:outline-none focus:ring-0';

  const stateClass = invalid
    ? 'border-danger/60 focus:border-danger'
    : 'border-white/10 hover:border-white/20 focus:border-signal-500';

  return `${base} ${stateClass}`;
}

function Field({
  label,
  htmlFor,
  required,
  hint,
  error,
  children
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <label
          htmlFor={htmlFor}
          className="text-sm font-medium text-bone-100"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-signal-400" aria-hidden="true">
              *
            </span>
          )}
        </label>

        {hint && !error && (
          <span className="text-xs text-bone-400">{hint}</span>
        )}
      </div>

      {children}

      {error && (
        <p className="mt-2 text-xs text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

'use client';

import { useId, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site.config';

interface FormState {
  name: string;
  email: string;
  business: string;
  phone: string;
  extraInformation: string;
  website: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  business: '',
  phone: '',
  extraInformation: '',
  website: ''
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    email: false
  });

  const baseId = useId();
  const id = (key: string) => `${baseId}-${key}`;

  const update =
    (key: keyof FormState) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm((current) => ({
        ...current,
        [key]: event.target.value
      }));
    };

  const errors = {
    name: form.name.trim().length === 0,
    email: !EMAIL_REGEX.test(form.email.trim())
  };

  const showError = (key: keyof typeof errors) =>
    touched[key] && errors[key];

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setTouched({
      name: true,
      email: true
    });

    if (errors.name || errors.email) {
      setStatus('error');
      setErrorMsg('Please add your name and a valid email.');
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
          method: 'contact_form'
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
          Your call request has been received.
        </h3>

        <p className="mx-auto mt-3 max-w-md text-bone-300">
          We will contact you within one business day to arrange a suitable time for your free systems call.
        </p>

        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-ghost mt-7"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
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
            onBlur={() =>
              setTouched((current) => ({ ...current, name: true }))
            }
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
            onBlur={() =>
              setTouched((current) => ({ ...current, email: true }))
            }
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
        label="Tell us a little more"
        htmlFor={id('extraInformation')}
        hint="Optional"
      >
        <textarea
          id={id('extraInformation')}
          rows={5}
          value={form.extraInformation}
          onChange={update('extraInformation')}
          placeholder="What would you like help with? A few details about what is happening in your business will help us understand where to start."
          className={`${fieldClass(
            false
          )} min-h-[130px] resize-y leading-relaxed`}
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
            : 'Request a Free Systems Call'}
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

'use client';

import { useId, useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site.config';

interface FormState {
  name: string;
  email: string;
  phone: string;
  business: string;
  trade: string;
  message: string;
  /** Honeypot — bots fill it, real users don't see it. */
  website: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  business: '',
  trade: '',
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
  'Solar',
  'Other'
] as const;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    phone: false,
    business: false,
    trade: false,
    message: false,
    website: false
  });

  const baseId = useId();
  const id = (k: string) => `${baseId}-${k}`;

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const blur = (k: keyof FormState) => () => setTouched((t) => ({ ...t, [k]: true }));

  const errors = {
    name: form.name.trim().length === 0,
    email: !EMAIL_REGEX.test(form.email.trim()),
    trade: form.trade.trim().length === 0,
    message: form.message.trim().length < 10
  };

  const showError = (k: 'name' | 'email' | 'trade' | 'message') => touched[k] && errors[k];

  const bookingUrl = siteConfig.bookingUrl;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      business: true,
      trade: true,
      message: true,
      website: true
    });
    if (errors.name || errors.email || errors.trade || errors.message) {
      setStatus('error');
      setErrorMsg('Please fill in the required fields above.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'We couldn’t send that just now. Please try again.');
      }
      if (typeof window !== 'undefined') {
        const w = window as Window & { gtag?: (...args: unknown[]) => void };
        if (typeof w.gtag === 'function') {
          w.gtag('event', 'generate_lead', { method: 'contact_form' });
        }
      }
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="card p-8 text-center md:p-10">
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success ring-1 ring-success/30">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl text-bone-50">Message received.</h3>
        <p className="mx-auto mt-3 max-w-md text-bone-300">
          We’ll get back to you within one business day. Want to lock in a time straight away?
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href={bookingUrl} external variant="primary" arrow>
            Book a call now
          </Button>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="btn btn-ghost"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
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
          label="Email"
          htmlFor={id('email')}
          required
          error={showError('email') ? 'Please add a valid email.' : undefined}
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
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor={id('phone')} hint="Optional">
          <input
            id={id('phone')}
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={update('phone')}
            onBlur={blur('phone')}
            autoComplete="tel"
            className={fieldClass(false)}
          />
        </Field>
        <Field label="Business name" htmlFor={id('business')} hint="Optional">
          <input
            id={id('business')}
            type="text"
            value={form.business}
            onChange={update('business')}
            onBlur={blur('business')}
            autoComplete="organization"
            className={fieldClass(false)}
          />
        </Field>
      </div>

      <Field
        label="Your trade"
        htmlFor={id('trade')}
        required
        error={showError('trade') ? 'Pick the trade that best fits.' : undefined}
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
          <option value="">Select your trade…</option>
          {TRADES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="What's going on with your quote follow-up?"
        htmlFor={id('message')}
        required
        error={
          showError('message') ? 'A short message helps us help you (10+ characters).' : undefined
        }
      >
        <textarea
          id={id('message')}
          required
          rows={6}
          value={form.message}
          onChange={update('message')}
          onBlur={blur('message')}
          placeholder="Roughly how many quotes you send a month, how you currently follow up, and what you'd like to fix."
          aria-invalid={showError('message') || undefined}
          className={`${fieldClass(showError('message'))} min-h-[140px] resize-y leading-relaxed`}
        />
      </Field>

      {status === 'error' && errorMsg && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
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
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        <p className="mt-4 text-xs text-bone-400">
          Or skip the form and{' '}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal-400 underline-offset-4 hover:underline"
          >
            book a call directly
          </a>
          . We reply within one business day.
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
    : 'border-white/10 focus:border-signal-500 hover:border-white/20';
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
        <label htmlFor={htmlFor} className="text-sm font-medium text-bone-100">
          {label}
          {required && (
            <span className="ml-0.5 text-signal-400" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {hint && !error && <span className="text-xs text-bone-400">{hint}</span>}
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

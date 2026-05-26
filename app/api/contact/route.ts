import { NextResponse } from 'next/server';

/**
 * POST /api/contact
 *
 * Receives lead form submissions from the contact page.
 *
 * INTEGRATION NOTES
 * - Drop in Resend / SendGrid / Postmark by uncommenting the relevant block below.
 * - Forward to a CRM (HubSpot / Pipedrive) by adding a second fetch call.
 * - Push the lead to Slack / Discord with an incoming webhook for instant notifications.
 *
 * Required env vars when wired up:
 *   CONTACT_EMAIL        — destination inbox (e.g. ricky@tradiesystemsco.com.au)
 *   RESEND_API_KEY       — if using Resend
 *   SLACK_WEBHOOK_URL    — optional, for live notifications
 */

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  trade?: string;
  message?: string;
  // honeypot — should always be empty
  website?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown, max = 2000): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 });
  }

  // Honeypot: bots will fill the hidden `website` field. Real users won't.
  if (body.website && body.website.trim().length > 0) {
    // Pretend success so bots don't retry.
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 200);
  const phone = sanitize(body.phone, 40);
  const business = sanitize(body.business, 200);
  const trade = sanitize(body.trade, 80);
  const message = sanitize(body.message, 4000);

  // Validation
  const errors: string[] = [];
  if (!name) errors.push('Name is required.');
  if (!email || !EMAIL_REGEX.test(email)) errors.push('A valid email is required.');
  if (!trade) errors.push('Trade is required.');
  if (!message || message.length < 10) errors.push('Please add a short message (10+ characters).');

  if (errors.length) {
    return NextResponse.json({ ok: false, error: errors.join(' ') }, { status: 422 });
  }

  // Build the email content
  const subject = `New lead: ${name}${business ? ` (${business})` : ''} — ${trade}`;
  const lines = [
    `New lead from tradiesystemsco.com.au`,
    ``,
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Phone:    ${phone || '—'}`,
    `Business: ${business || '—'}`,
    `Trade:    ${trade}`,
    ``,
    `Message:`,
    message,
    ``,
    `---`,
    `Submitted: ${new Date().toISOString()}`
  ];
  const text = lines.join('\n');

  // ────────────────────────────────────────────────────────────────────────
  // RESEND INTEGRATION (recommended). Uncomment after `pnpm add resend`.
  // ────────────────────────────────────────────────────────────────────────
  // try {
  //   const { Resend } = await import('resend');
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'Tradie Systems Co <leads@tradiesystemsco.com.au>',
  //     to: [process.env.CONTACT_EMAIL ?? 'ricky@tradiesystemsco.com.au'],
  //     replyTo: email,
  //     subject,
  //     text
  //   });
  // } catch (err) {
  //   console.error('[contact] Resend failed:', err);
  //   return NextResponse.json(
  //     { ok: false, error: 'Could not send right now. Please email us directly.' },
  //     { status: 500 }
  //   );
  // }

  // ────────────────────────────────────────────────────────────────────────
  // SLACK NOTIFICATION (optional). Uncomment to get instant pings.
  // ────────────────────────────────────────────────────────────────────────
  // if (process.env.SLACK_WEBHOOK_URL) {
  //   try {
  //     await fetch(process.env.SLACK_WEBHOOK_URL, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ text: `*${subject}*\n\n${text}` })
  //     });
  //   } catch (err) {
  //     console.error('[contact] Slack webhook failed:', err);
  //   }
  // }

  // For now, just log server-side so Vercel function logs capture it.
  // Remove this once a real provider is wired up.
  console.log('[contact] New lead received:', { subject, text });

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

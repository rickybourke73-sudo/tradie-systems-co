import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  trade?: string;
  location?: string;
  mainProblem?: string;
  currentTools?: string[];
  message?: string;
  website?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown, max = 2000): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

function sanitizeStringArray(value: unknown, maxItems = 12): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is string => typeof item === 'string')
    .map((item) => sanitize(item, 100))
    .filter(Boolean)
    .slice(0, maxItems);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }

  // Honeypot: silently accept bot submissions.
  if (sanitize(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 200);
  const phone = sanitize(body.phone, 40);
  const business = sanitize(body.business, 200);
  const trade = sanitize(body.trade, 100);
  const location = sanitize(body.location, 160);
  const mainProblem = sanitize(body.mainProblem, 500);
  const currentTools = sanitizeStringArray(body.currentTools);
  const message = sanitize(body.message, 4000);

  const errors: string[] = [];

  if (!name) errors.push('Name is required.');
  if (!email || !EMAIL_REGEX.test(email)) {
    errors.push('A valid email is required.');
  }
  if (!trade) errors.push('Trade is required.');

  // Supports the current form while we transition to the expanded form.
  if (!mainProblem && message.length < 10) {
    errors.push('Please tell us briefly what you need help with.');
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, error: errors.join(' ') },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !contactEmail || !fromEmail) {
    console.error('[contact] Missing email configuration.', {
      hasApiKey: Boolean(apiKey),
      hasContactEmail: Boolean(contactEmail),
      hasFromEmail: Boolean(fromEmail)
    });

    return NextResponse.json(
      {
        ok: false,
        error:
          'The contact form is temporarily unavailable. Please email us directly.'
      },
      { status: 503 }
    );
  }

  const subject = `New website enquiry: ${name}${
    business ? ` (${business})` : ''
  } — ${trade}`;

  const text = [
    'New enquiry from tradiesystemsco.com.au',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Business: ${business || 'Not provided'}`,
    `Trade: ${trade}`,
    `Location: ${location || 'Not provided'}`,
    '',
    'Main problem:',
    mainProblem || message,
    '',
    `Current tools: ${
      currentTools.length > 0 ? currentTools.join(', ') : 'Not provided'
    }`,
    '',
    'Additional message:',
    message || 'Not provided',
    '',
    '---',
    `Submitted: ${new Date().toISOString()}`
  ].join('\n');

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Tradie Systems Co <${fromEmail}>`,
      to: [contactEmail],
      replyTo: email,
      subject,
      text
    });

    if (error) {
      console.error('[contact] Resend rejected submission:', error);

      return NextResponse.json(
        {
          ok: false,
          error:
            'We could not send your message just now. Please email us directly.'
        },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('[contact] Email delivery failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error:
          'We could not send your message just now. Please email us directly.'
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
}

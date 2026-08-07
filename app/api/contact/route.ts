import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactPayload {
  name?: string;
  email?: string;
  business?: string;
  phone?: string;
  extraInformation?: string;
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
    return NextResponse.json(
      { ok: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }

  if (sanitize(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 200);
  const business = sanitize(body.business, 200);
  const phone = sanitize(body.phone, 40);
  const extraInformation = sanitize(body.extraInformation, 4000);

  const errors: string[] = [];

  if (!name) errors.push('Name is required.');
  if (!email || !EMAIL_REGEX.test(email)) {
    errors.push('A valid email is required.');
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
  }`;

  const text = [
    'New enquiry from tradiesystemsco.com.au',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${business || 'Not provided'}`,
    `Phone: ${phone || 'Not provided'}`,
    '',
    'Tell us a little more:',
    extraInformation || 'Not provided',
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

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { fullName, email, phone, message } = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>',
      to: [process.env.EMAIL_RECEIVER],
      subject: `New Contact from ${fullName}`,
      text: `
New contact form submission:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

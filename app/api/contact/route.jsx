import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const fullName = (body.fullName || '').trim();
    const email    = (body.email || '').trim();
    const phone    = body.phone || '';
    const message  = body.message || '';
    const formSubj = (body.subject || '').trim();      

    if (!fullName || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }


    const subject = (formSubj || `New contact from ${fullName}`).slice(0, 200);

  
    const html = `
      <div>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(String(phone))}</p>` : ''}
        <hr />
        <p>${escapeHtml(String(message))}</p>
      </div>
    `;

    const text = `New contact form submission

Name: ${fullName}
Email: ${email}
Phone: ${phone || '(none)'}
Message:
${message}
`;

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Website Contact <onboarding@resend.dev>',
      to: process.env.EMAIL_RECEIVER || '',
      subject,                    
      html,
      text,                        
      reply_to: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ success: false, error: 'Email send failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id, usedSubject: subject }, { status: 200 });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ success: false, error: (err && err.message) || 'Server error' }, { status: 500 });
  }
}

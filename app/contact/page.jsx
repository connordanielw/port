'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail]       = useState('');
  const [phone, setPhone]       = useState('');
  const [subject, setSubject]   = useState('');
  const [message, setMessage]   = useState('');
  const [status, setStatus]     = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [firstName, setFirstName] = useState('');
  const nameRef = useRef(null);
  const router  = useRouter();

  useEffect(() => { nameRef.current?.focus(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          subject: subject?.trim() || '',
          message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || 'Failed to send');

      // prepare success view
      setFirstName((fullName || '').trim().split(' ')[0] || 'there');

      // clear fields
      setFullName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');

      setStatus('success');

      // Optional auto-redirect:
      // setTimeout(() => router.push('/'), 2500);
    } catch (err) {
      console.error(err);
      setErrorMsg(err?.message || 'Oops! Message failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="contact-main">
      <div className="contact">
        <section>
          <h3>Contact</h3>

          {status === 'success' ? (
            <div className="contact-success" role="status" aria-live="polite">
              <div className="success-icon" aria-hidden>✓</div>
              <h4 className="success-title">Message sent</h4>
              <p className="success-copy">
                Thank you, {firstName}! We will be in touch soon.
              </p>
              <div className="success-actions">
                <button className="success-btn" onClick={() => router.push('/')}>
                  Back to Home
                </button>
              </div>
            </div>
          ) : (
            <form
              className={`contact-form ${status === 'sending' ? 'is-sending' : ''}`}
              onSubmit={handleSubmit}
              aria-busy={status === 'sending'}
            >
              <input
                type="text"
                placeholder="Name"
                ref={nameRef}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type="text"
                placeholder="Subject (optional)"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

              <textarea
                placeholder="What would you like to know?"
                value={message}
                maxLength={255}
                onChange={(e) => setMessage(e.target.value.slice(0, 255))}
                required
              />

              <label>{message.length}/255</label>

              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </button>

              {status === 'error' && (
                <p className="form-error" role="alert">{errorMsg}</p>
              )}
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

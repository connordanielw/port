'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import anime from 'animejs';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail]       = useState('');
  const [phone, setPhone]       = useState('');
  const [subject, setSubject]   = useState('');
  const [message, setMessage]   = useState('');
  const [status, setStatus]     = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [firstName, setFirstName] = useState('');
  const nameRef    = useRef(null);
  const contactRef = useRef(null);
  const router     = useRouter();

  useEffect(() => { nameRef.current?.focus(); }, []);

  useEffect(() => {
    if (!contactRef.current) return;
    const items = contactRef.current.querySelectorAll('.contact-animate');
    if (!items.length) return;
    anime({
      targets: items,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(80),
      duration: 750,
      easing: 'easeOutExpo',
    });
  }, []);

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
    <div className="contact-main" ref={contactRef}>
      <div className="contact">
        <Link href="/" className="pp-back-link contact-animate">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to main
        </Link>
        <section className="contact-animate">
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

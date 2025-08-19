'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail]       = useState('');
  const [phone, setPhone]       = useState('');
  const [subject, setSubject]   = useState('');           // 👈 NEW
  const [message, setMessage]   = useState('');
  const nameRef = useRef(null);
  const router  = useRouter();

  useEffect(() => { nameRef.current?.focus(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          // send subject if provided; backend will still have a fallback
          subject: subject?.trim() || '',
          message,
        }),
      });

      if (!res.ok) throw new Error('Failed to send');

      toast.success('We have your message and will be in touch soon.', {
        position: 'top-center',
        autoClose: 2500,
        onClose: () => router.push('/'),
      });

      setFullName('');
      setEmail('');
      setPhone('');
      setSubject('');            // 👈 reset
      setMessage('');
    } catch (err) {
      console.error(err);
      toast.error('Oops! Message failed. Please try again.');
    }
  };

  return (
    <div className="contact-main">
      <div className="contact">
        <section>
          <h3>Contact</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
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

            <button type="submit">Submit</button>
          </form>
        </section>
      </div>

      <ToastContainer theme="colored" />
    </div>
  );
}

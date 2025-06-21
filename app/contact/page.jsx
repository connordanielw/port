'use client';

import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const [message, setMessage] = useState('');
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("We have your message and will be in touch soon.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="contact-main">
      <div className="contact">
        <section>
          <h3>Contact Us</h3>
          <div className="contact-instr">
            <h4>Ask us anything!</h4>
          </div>

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

            <textarea
              placeholder="What would you like to know?"
              value={message}
              maxLength={255}
              onChange={(e) => e.target.value.length <= 255 && setMessage(e.target.value)}
              required
            />

            <label>{message.length}/255</label>

            <button type="submit">Submit</button>
          </form>
        </section>
      </div>

      {/* <ToastContainer /> */}
    </div>
  );
}

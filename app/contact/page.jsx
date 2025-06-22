'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WaveBackground from '../../app/components/WaveBackground';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail]       = useState('');
  const [phone, setPhone]       = useState('');
  const [message, setMessage]   = useState('');
  const nameRef = useRef(null);
  const router  = useRouter();


useEffect(() => {
  import('animejs').then((mod) => {
    const anime = mod.default || mod;
    if (!anime?.timeline || !heroRef.current || !ctaRef.current || !featuresRef.current) return;

    const heroLines    = heroRef.current.querySelectorAll('.hero-line');
    const featureItems = featuresRef.current.querySelectorAll('.feature-item');

    const tl = anime.timeline({ easing: 'easeOutExpo', duration: 800 });

    tl.add({
      targets: heroLines,
      translateY: [50, 0],
      opacity:    [0, 1],
      delay:      anime.stagger(60),
    })
      .add({
        targets: ctaRef.current,
        scale:   [0.8, 1],
        opacity: [0, 1],
      }, '-=400')
      .add({
        targets: featureItems,
        translateY: [60, 0],
        opacity:    [0, 1],
        delay:      anime.stagger(120),
      }, '-=200');
  });
}, []);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone, message }),
      });

     
      toast.success('We have your message and will be in touch soon.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => router.push('/'),  
      });

      
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      toast.error('Oops! Message failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="contact-main">
        <WaveBackground /> 
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
              type ="text"
              placeholder="What would you like to know?"
              value={message}
              maxLength={255}
              onChange={(e) =>
                e.target.value.length <= 255 && setMessage(e.target.value)
              }
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

'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import anime from 'animejs';
import WaveBackground from '../../app/components/WaveBackground';

export default function AboutPage() {
  const heroRef  = useRef(null);
  const storyRef = useRef(null);
  const ctaRef   = useRef(null);

  useEffect(() => {
    if (!heroRef.current || !storyRef.current || !ctaRef.current) return;

    const heroLines  = heroRef.current.querySelectorAll('.hero-line');
    const storyLines = storyRef.current.querySelectorAll('.hero-line');

    anime
      .timeline({ easing: 'easeOutExpo', duration: 800 })
      .add({
        targets: heroLines,
        translateY: [40, 0],
        opacity:    [0, 1],
        delay:      anime.stagger(60),
      })
      .add({
        targets: storyLines,
        translateY: [40, 0],
        opacity:    [0, 1],
        delay:      anime.stagger(60),
      }, '-=400')
      .add({
        targets: ctaRef.current,
        scale:   [0.8, 1],
        opacity: [0, 1],
      }, '-=200');
  }, []);

  return (
    <main className="about-page">
             <WaveBackground /> 
      <section ref={heroRef} className="about-hero">
        <h1 className="hero-line">Connor D. Wotkowicz</h1>
        <p className="hero-line">Software Engineer with a background in music and design.</p>
      </section>

      <section ref={storyRef} className="about-story">
        <h2 className="hero-line">About Me</h2>
        <p className="hero-line">
          I build clean, scalable apps using React and Node.js, blending creativity and code.
        </p>
      </section>

      <section className="about-cta">
        <Link
          ref={ctaRef}
          href="/contact"
          className="back-modal-button"
          
        >
          Contact
        </Link>
      </section>
    </main>
  );
}

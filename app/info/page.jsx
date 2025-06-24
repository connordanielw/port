'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import anime from 'animejs';
import WaveBackground from '../../app/components/WaveBackground';

export default function AboutPage() {
  const heroRef  = useRef(null);
  const storyRef = useRef(null);
  const factsRef = useRef(null);
  const bioRef   = useRef(null);
  const ctaRef   = useRef(null);

  useEffect(() => {
    if (!heroRef.current || !storyRef.current || !factsRef.current || !bioRef.current || !ctaRef.current) return;

    const heroLines  = heroRef.current.querySelectorAll('.hero-line');
    const storyLines = storyRef.current.querySelectorAll('.hero-line');
    const factsLines = factsRef.current.querySelectorAll('.hero-line');
    const bioLines   = bioRef.current.querySelectorAll('.hero-line');

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
        targets: factsLines,
        translateY: [40, 0],
        opacity:    [0, 1],
        delay:      anime.stagger(60),
      }, '-=400')
      .add({
        targets: bioLines,
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

      {/* Hero */}
      <section ref={heroRef} className="about-hero">
        <h1 className="hero-line">Connor D. Wotkowicz</h1>
        <p className="hero-line">Software Engineer with a background in music and design.</p>
      </section>

      {/* Story */}
      <section ref={storyRef} className="about-story">
        <h2 className="hero-line">About Me</h2>
        <p className="hero-line">
          I build clean, scalable apps using React and Node.js, blending creativity and code.
        </p>
      </section>

      {/* Quick Facts */}
      <section ref={factsRef} className="about-facts">
        <div className="facts-container">
          <h2 className="facts-title hero-line">Quick Facts</h2>
          <ul className="facts-list">
            <li className="hero-line">
              <img
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="React"
              />
            </li>
            <li className="hero-line">
              <img
                src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
                alt="Next.js"
              />
            </li>
            <li className="hero-line">
              <img
                src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
                alt="Node.js"
              />
            </li>
            <li className="hero-line">
              <img
                src="https://img.shields.io/badge/Pro_Tools-6e2b96?style=for-the-badge&logo=protools&logoColor=white"
                alt="Pro Tools"
              />
            </li>
            <li className="hero-line">
              <img
                src="https://img.shields.io/badge/Ableton_Live-000000?style=for-the-badge&logo=abletonlive&logoColor=white"
                alt="Ableton Live"
              />
            </li>
            <li className="hero-line">
              <img
                src="https://img.shields.io/badge/Tone.js-FF4088?style=for-the-badge&logo=javascript&logoColor=white"
                alt="Tone.js"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* Bio + Photo */}
      <section ref={bioRef} className="about-extension">
        <div className="about-extension-inner">
          <div className="about-photo-wrapper hero-line">
            <img
              src="/profile-photo.jpg" // replace with your actual image path
              alt="Connor D. Wotkowicz"
              className="about-photo"
            />
          </div>
          <div className="about-extension-bio">
            <h2 className="extension-title hero-line">Where Tech Meets Intuition</h2>
            <p className="hero-line">
              I come from a nature-rooted, farm-raised background — the kind that teaches rhythm, discipline,
              and long-term thinking. Combined with my fluency in languages (code and otherwise) and a deep
              understanding of music theory, I bring a uniquely tuned eye to structure, flow, and user experience.
            </p>
            <p className="hero-line">
              I learn fast, listen closely, and build with care — bridging the creative and the technical
              to create work that feels intentional, polished, and alive.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <Link
          ref={ctaRef}
          href="/contact"
          className="contact-button"
        >
          Contact
        </Link>
      </section>
    </main>
  );
}

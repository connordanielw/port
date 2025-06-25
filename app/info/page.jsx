'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import WaveBackground from '../../app/components/WaveBackground';
import Link from 'next/link';
import Image from 'next/image';
import { badgeMap } from '../components/BadgeMap';
import BeveledIcon from '../components/BevelProfile.jsx';

const badgeLinks = {
  React: 'https://reactjs.org',
  'React Router': 'https://reactrouter.com',
  Vite: 'https://vitejs.dev',
  SCSS: 'https://sass-lang.com',
  'SCSS Modules': 'https://sass-lang.com',
  'Node.js': 'https://nodejs.org',
  Express: 'https://expressjs.com',
  'Express.js': 'https://expressjs.com',
  PostgreSQL: 'https://www.postgresql.org',
  JWT: 'https://jwt.io',
  Stripe: 'https://stripe.com',
  Jest: 'https://jestjs.io',
  'React Testing Library': 'https://testing-library.com',
  Supertest: 'https://github.com/visionmedia/supertest',
  'Next.js': 'https://nextjs.org',
  'Next.js 14': 'https://nextjs.org',
  'Context API': 'https://reactjs.org/docs/context.html',
  Prisma: 'https://www.prisma.io',
  Supabase: 'https://supabase.com',
  'Supabase Storage': 'https://supabase.com/storage',
  bcrypt: 'https://github.com/kelektiv/node.bcrypt.js',
  Axios: 'https://axios-http.com',
  Vercel: 'https://vercel.com',
  'AWS EC2': 'https://aws.amazon.com/ec2',
  'Tone.js': 'https://tonejs.github.io',
  Ableton: 'https://www.ableton.com/en/live/',
  'Pro Tools': 'https://www.avid.com/pro-tools',
  Avid: 'https://www.avid.com',
  Blender: 'https://www.blender.org',
};

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const bioRef = useRef(null);
  const factsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const herolines = heroRef.current?.querySelectorAll('.hero-line') || [];
    const storylines = storyRef.current?.querySelectorAll('.hero-line') || [];
    const biolines = bioRef.current?.querySelectorAll('.hero-line') || [];
    const factslines =
      factsRef.current?.querySelectorAll(
        '.facts-header.hero-line, .facts-container.hero-line, .facts-list.hero-line'
      ) || [];
    const badgeIcons =
      factsRef.current?.querySelectorAll('.facts-badges .badge-icon') || [];

    anime
      .timeline({ easing: 'easeOutExpo', duration: 800 })
      .add({
        targets: herolines,
        translateY: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(60),
      })
      .add(
        {
          targets: storylines,
          translateY: [40, 0],
          opacity: [0, 1],
          delay: anime.stagger(60),
        },
        '-=500'
      )
      .add(
        {
          targets: biolines,
          translateY: [40, 0],
          opacity: [0, 1],
          delay: anime.stagger(60),
        },
        '-=600'
      )
      .add(
        {
          targets: factslines,
          translateY: [40, 0],
          opacity: [0, 1],
          delay: anime.stagger(30),
        },
        '-=700'
      )
      .add(
        {
          targets: badgeIcons,
          opacity: [0, 1],
          scale: [0.9, 1],
          delay: anime.stagger(15),
          duration: 300,
        },
        '-=650'
      )
      .add(
        {
          targets: ctaRef.current,
          scale: [0.8, 1],
          opacity: [0, 1],
        },
        '-=200'
      );
  }, []);

  return (
    <main className="about-page">
      <WaveBackground />
<div className="about-container">
      <section ref={heroRef} className="about-hero">
        <h1 className="hero-line">Connor D. Wotkowicz</h1>
        <p className="hero-line">
          As a Software Engineer with a background in music and design, I build
          applications that blend creativity and code to deliver clean,
          enjoyable user experiences.
        </p>
      </section>

      <section ref={storyRef} className="about-story">
        {/* optional content */}
      </section>

      <section ref={bioRef} className="about-extension">
        <div className="about-extension-inner">
          <div className="about-extension-bio">
            <h2 className="extension-title hero-line"></h2>
            <p className="hero-line"></p>
          </div>
        </div>
      </section>

      <div className="i-section-divider" aria-hidden="true"></div>
      <BeveledIcon />

      <section ref={factsRef} className="about-facts">
        <div className="facts-header hero-line">
          {/* <h2 className="facts-title">Overview</h2> */}
        </div>

        <div className="facts-container hero-line">
          <div className="facts-list hero-line">
            <p>
              <strong>Location:</strong> <br />
              Brooklyn, NY
            </p>
            <p>
              <strong>Background:</strong> <br />
              Nature-oriented • Musically trained • Tech fluent
            </p>
            <p>
              <strong>Strengths:</strong> <br />
              Fast learner • Detail-driven • Cross-disciplinary thinker
            </p>
          </div>

          <div className="facts-badges hero-line">
            {Object.entries(badgeMap).map(([tech, imgUrl]) => (
              <a
                key={tech}
                href={badgeLinks[tech] || '#'}
                target="_blank"
                rel="noopener noreferrer"
                title={tech}
              >
                <img className="badge-icon" src={imgUrl} alt={tech} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Optional CTA */}
      <div ref={ctaRef} className="about-cta"></div>
      </div>
    </main>
    
  );
}

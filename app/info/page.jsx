'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import WaveBackground from '../../app/components/WaveBackground';
import Link from 'next/link';
import Image from 'next/image';
import { badgeMap } from '../components/BadgeMap';



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
  const heroRef  = useRef(null);
  const storyRef = useRef(null);
  const bioRef   = useRef(null);
  const factsRef = useRef(null);
  const ctaRef   = useRef(null);

  useEffect(() => {
    if (
      !heroRef.current ||
      !storyRef.current ||
      !bioRef.current  ||
      !factsRef.current ||
      !ctaRef.current
    ) return;

    const herolines  = heroRef.current.querySelectorAll('.hero-line');
    const storylines = storyRef.current.querySelectorAll('.hero-line');
    const biolines   = bioRef.current.querySelectorAll('.hero-line');
    const factslines = factsRef.current.querySelectorAll('.hero-line');

    anime
      .timeline({ easing: 'easeOutExpo', duration: 800 })
      .add({
        targets: herolines,
        translateY: [40, 0],
        opacity:    [0, 1],
        delay:      anime.stagger(60)
      })
      .add({
        targets: storylines,
        translateY: [40, 0],
        opacity:    [0, 1],
        delay:      anime.stagger(60)
      }, '-=400')

      .add({
        targets: biolines,
        translateY: [40, 0],
        opacity:    [0, 1],
        delay:      anime.stagger(60)
      }, '-=400')
 
      .add({
        targets: factslines,
        translateY: [40, 0],
        opacity:    [0, 1],
        delay:      anime.stagger(60)
      }, '-=400')
      .add({
        targets: ctaRef.current,
        scale:   [0.8, 1],
        opacity: [0, 1]
      }, '-=200');
  }, []);

  return (
    <main className="about-page">
      <WaveBackground />

      
      <section ref={heroRef} className="about-hero">
        <h1 className="hero-line">Connor D. Wotkowicz</h1>
        <p className="hero-line">
          Software Engineer with a background in music and design.
        </p>
  
          <div className="about-photo-wrapper hero-line">
    
                     <Image
  src="/images/prof.png"
  alt="Description"
  width={192}
  height={192}
      className="about-photo"
/>
    </div>
        </section>
     
      <section ref={storyRef} className="about-story">
        <h2 className="hero-line">About Me</h2>
        <p className="hero-line">
          I build clean, scalable apps using React and Node.js, blending creativity and code.
        </p>
      </section>

    
      <section ref={bioRef} className="about-extension">
        <div className="about-extension-inner">

          <div className="about-extension-bio">
            <h2 className="extension-title hero-line">Where Tech Meets Intuition</h2>
            <p className="hero-line">
              I come from a nature-rooted, farm-raised background — the kind that
              teaches rhythm, discippne, and long-term thinking. Paired with fluency
              in languages (code and otherwise) and deep musical knowledge, I bring a
              tuned eye for structure, flow, and user experience.
            </p>
            <p className="hero-line">
              I learn fast, psten closely, and build with care — bridging the
              creative and the technical to craft work that feels intentional,
              popshed, and apve.
            </p>
          </div>
        </div>
      </section>

<section ref={factsRef} className="about-facts">
<div className="facts-container hero-line">
        <h2 className="facts-title hero-line">Quick Facts</h2>
        <div className="facts-list hero-line">
          <p><strong>Location:</strong> Brooklyn, NY</p>
          <p><strong>Background:</strong> Farm-raised, musically trained, tech fluent</p>
          <p><strong>Strengths:</strong> Fast learner, detail-driven, cross-disciplinary thinker</p>
          <p><strong>Languages:</strong> Polyglot — fluent in English, French, German, and Spanish</p>
         <h3><strong>Tools & Frameworks:</strong></h3>

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


  
      <section className="about-cta">
        <Link ref={ctaRef} href="/contact" className="contact-button">
          Contact
        </Link>
      </section>
    </main>
  );
}

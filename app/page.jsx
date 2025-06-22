'use client';
import '../app/styles/App.scss';

import { useEffect, useRef } from 'react';
import HeroVisual from '../app/components/Hero';
import { badgeMap } from '../app/components/BadgeMap.jsx';
import { useRouter } from 'next/navigation';
import WaveBackground from '../app/components/WaveBackground';

const renderBadges = (techStr) =>
  techStr
    .split(/[•,]/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) =>
      badgeMap[t] ? (
        <img key={t} src={badgeMap[t]} alt={`${t} badge`} className="tech-badge" />
      ) : (
        <span key={t} className="tech-text">{t}</span>
      )
    );

export default function HomePage() {
  const router = useRouter();
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const featuresRef = useRef(null);

  const projects = [
    {
      title: 'DiscogMVP “Most Valuable Producer”',
      date: 'May 2025',
      tech: 'React • React Router • Vite • SCSS Modules • Node.js • Express.js • PostgreSQL • JWT • Stripe • Jest • React Testing Library • Supertest',
      site: 'https://discog-mv-producer.vercel.app',
      repo: 'https://github.com/connorwotkowicz/DiscogMVProducer'
    },
    {
      title: 'SoundPiece: Grand Line Edition',
      date: 'June 2025',
      tech: 'Next.js 14 • React • SCSS Modules • Context API • Express.js • Prisma • PostgreSQL • Supabase • JWT • bcrypt • Supabase Storage • Axios • Vercel • AWS EC2 • React Testing Library • Supertest • Jest • Tone.js',
      site: 'https://sound-piece-grand-line.vercel.app',
      repo: 'https://github.com/connorwotkowicz/SoundPiece_Grand-line'
    },
    {
      title: 'BeatSeq',
      date: 'May – June 2025',
      tech: 'React • Tone.js • Node.js • Express • PostgreSQL • JWT • Next.js • Vite • SCSS • Supabase • Vercel',
      site: 'https://beatseq.vercel.app',
      repo: 'https://github.com/connorwotkowicz/BeatSeq'
    }
  ];

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

  return (
    <div className="home-page">
       <WaveBackground /> 
      
      <main className="home-content">

        <section className="hero-section">
              <div className="hero-visual">
            <HeroVisual />
          </div>
          <div className="hero-text">
            <h1 className="hero-title animate-on-load">
              Connor D. Wotkowicz
            </h1>
            <p className="hero-description animate-slide-up">
              Full-Stack Developer | Brooklyn, NY
            </p>
          </div>
        </section>

        <section className="projects-section">
          <h2 className="section-title animate-on-load">
            Portfolio
          </h2>
          <div className="project-grid">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="project-card animate-slide-up"
                style={{ animationDelay: `${0.4 + i * 0.15}s` }}
              >
                <div className="project-header">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-date">{p.date}</span>
                </div>
                <div className="project-tech">
                  {renderBadges(p.tech)}
                </div>
                <div className="project-links">
                  <button
                    onClick={() => window.open(p.site, "_blank")}
                    className="back-modal-button"
                  >
                    Site
                  </button>
                  <button
                    onClick={() => window.open(p.repo, "_blank")}
                    className="back-modal-button"
                  >
                    Repo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
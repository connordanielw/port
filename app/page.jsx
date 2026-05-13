'use client';
import '../app/styles/App.scss';
import { useEffect, useRef } from 'react';
import HeroVisual from '../app/components/Hero';
import { badgeMap } from '../app/components/BadgeMap.jsx';
import { useRouter } from 'next/navigation';
import CodeTabs from "./components/CodeTabs.jsx";

import SkillsGrid from '../app/components/SkillsGrid';

import Link from 'next/link';

// const renderBadges = (techStr) =>
//   techStr
//     .split(/[•,]/)
//     .map((t) => t.trim())
//     .filter(Boolean)
//     .map((t) =>
//       badgeMap[t] ? (
//         <img key={t} src={badgeMap[t]} alt={`${t} badge`} className="tech-badge" />
//       ) : (
//         <span key={t} className="tech-text">{t}</span>
//       )
//     );

export default function HomePage() {
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const featuresRef = useRef(null);
  const rootRef = useRef(null);

  const projects = [
    {
      title: 'codaniel | studio',
      subtitle: 'Design & Development · 2026',
      slug: 'artportfolio',
      image: '/images/newstudio.png',
    },
    {
      title: 'Cadence | music library',
      subtitle: 'Full-Stack Development · 2025',
      slug: 'cadence',
      image: '/images/cadence.png',
    },
    {
      title: 'DiscogMVP | ecommerce',
      subtitle: 'Full-Stack Development · 2025',
      slug: 'discogmvp',
      image: '/images/vin.png',
    },
   
    //           {
    //   title: 'CueSketch',
    //       slug: 'ontheway',

    //   date: 'Autumn 2026',
    //   image: '/images/cue.png',
    // //   // tech: 'React • Tone.js • Node.js • Express • PostgreSQL • JWT • Next.js • Vite • SCSS • Supabase • Vercel',
    //   site: 'https://cuesketch.vercel.app/',
    // //   // description: 'Web-based sequencer',
    // //   repo: 'https://github.com/connorwotkowicz/BeatSeq'
    // },
     


  ];

   useEffect(() => {
    import('animejs').then((mod) => {
      const anime = mod.default || mod;
      if (!anime?.timeline || !heroRef.current || !ctaRef.current || !featuresRef.current) return;
      const heroLines = heroRef.current.querySelectorAll('.hero-line');
      const featureItems = featuresRef.current.querySelectorAll('.feature-item');
      anime.timeline({ easing: 'easeOutExpo', duration: 800 })
        .add({ targets: heroLines, translateY: [50, 0], opacity: [0, 1], delay: anime.stagger(60) })
        .add({ targets: ctaRef.current, scale: [0.8, 1], opacity: [0, 1] }, '-=400')
        .add({ targets: featureItems, translateY: [60, 0], opacity: [0, 1], delay: anime.stagger(120) }, '-=200');
    });
  }, []);

  return (
    <div className="home-page" ref={rootRef}>
      <main className="home-content">
        <section className="hero-section">
          <div className="hero-visual"><HeroVisual /></div>
          <div className="hero-text">
            <h1 className="hero-title animate-on-load">Connor D. Wotkowicz</h1>
            <p className="hero-description animate-slide-up"> Creative Developer | New York, NY</p>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true"></div>
        <SkillsGrid />

{/* <div className ="code-tabs">
  <CodeTabs />
</div>
 */}

        <section className="projects-section">
          <h2 className="section-title animate-on-load" style={{ textAlign: 'center' }}>Recent web design work</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            {/* Projects that combine creativity, technology and purpose.<br />Built with enthusiasm and precision. */}
          </p>
          <div className="i-section-divider" aria-hidden="true"></div>

          <div className="project-grid">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="project-card-link"
              >
                <div
                  className="project-card animate-slide-up"
                  style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                >
                  <div className="project-image-wrapper">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="project-card-label">
                    <h3 className="project-card-title">{p.title}</h3>
                    <span className="project-card-sub">{p.subtitle}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
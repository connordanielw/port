'use client';

import { useRef, useEffect } from 'react';
import anime from 'animejs';
import { useLanguage } from '../components/LanguageContext.jsx';

const projectMeta = [
  {
    key: 'cadence',
    title: 'Cadence',
    url: 'https://cadence-mauve-ten.vercel.app',
    repo: 'https://github.com/connordanielw/cadence',
  },
  {
    key: 'discogmvp',
    title: 'DiscogMVP',
    url: 'https://discog-mv-producer.vercel.app',
    repo: 'https://github.com/2410-Capstone/DiscogMVP',
  },
  {
    key: 'soundpiece',
    title: 'SoundPiece: Grand Line Edition',
    url: 'https://sound-piece-grand-line.vercel.app',
    repo: 'https://github.com/connorwotkowicz/SoundPiece_Grand-line',
  },
  {
    key: 'beatseq',
    title: 'BeatSeq',
    url: 'https://beatseq.vercel.app',
    repo: 'https://github.com/connorwotkowicz/BeatSeq',
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();
  const projects = projectMeta.map((p) => ({ ...p, ...t.projectsList[p.key] }));

  const stripeRefs = useRef([]);

  useEffect(() => {
    stripeRefs.current.forEach((stripe, i) => {
      if (!stripe) return;

      const pills   = stripe.querySelectorAll('.pill');
      const bullets = stripe.querySelectorAll('li');

      anime.timeline({ easing: 'easeOutExpo', delay: 150 + i * 180 })
        .add({
          targets: stripe,
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 650,
        })
        .add({
          targets: pills,
          opacity: [0, 1],
          translateY: [10, 0],
          delay: anime.stagger(120),
          duration: 400,
        }, '-=300')
        .add({
          targets: bullets,
          opacity: [0, 1],
          translateX: [-14, 0],
          delay: anime.stagger(60),
          duration: 320,
        }, '-=320');
    });
  }, []);

  return (
    <div className="project-page">
      <h1 className="section-title" style={{ padding: '3rem 2rem' }}>{t.projectsListTitle}</h1>

      {projects.map((p, i) => (
        <section
          key={p.title}
          className={`stripe ${i % 2 === 0 ? 'default' : 'grey'}`}
          ref={(el) => (stripeRefs.current[i] = el)}
        >
          <div className="stripe-inner">
            {/* header */}
            <header className="project-bar-header">
              <h2 className="project-title">{p.title}</h2>
              <span className="project-date">{p.date}</span>
            </header>

            {/* links */}
            <div className="project-links">
              <a href={p.url}  target="_blank" rel="noopener" className="pill">{t.siteLabel}</a>
              <a href={p.repo} target="_blank" rel="noopener" className="pill">{t.repoLabel}</a>
            </div>

            {/* bullets */}
            <ul className="project-bullets">
              {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}

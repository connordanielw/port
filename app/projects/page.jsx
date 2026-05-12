'use client';

import { useRef, useEffect } from 'react';
import anime from 'animejs';


export default function ProjectsPage() {
  const projects = [
    {
      title: 'Cadence',
      url: 'https://cadence-mauve-ten.vercel.app',
      date: 'June 2025',
      repo: 'https://github.com/connordanielw/cadence',
      bullets: [
        'AI-powered music library with semantic search — upload audio or sheet music, describe it, find it by feel',
        'Natural language search backed by VoyageAI vector embeddings and pgvector cosine similarity',
        'Claude (Anthropic) expands user descriptions into rich searchable paragraphs',
        'Stack: Next.js 15, FastAPI, PostgreSQL + pgvector, Clerk auth, VoyageAI, Anthropic Claude, Railway, Vercel',
      ],
    },
    {
      title: "DiscogMVP",
      url: "https://discog-mv-producer.vercel.app",
      date: 'May 2025',
      repo: 'https://github.com/2410-Capstone/DiscogMVP',
      bullets: [
        'Led a five-person team through UI/UX sprints and GitHub workflow setup for a full-stack vinyl-marketplace platform',
        'Built Apple-style responsive frontend with React + SCSS Modules and full ARIA / keyboard support',
        'Implemented Node/Express API, JWT auth, dynamic filters, Stripe checkout',
        'Stack: React, Node.js, Express, PostgreSQL, JWT, Stripe, SCSS Modules',
      ],
    },
    {
      title: 'SoundPiece: Grand Line Edition',
      url: 'https://sound-piece-grand-line.vercel.app',
      date: 'June 2025',
      repo: 'https://github.com/connorwotkowicz/SoundPiece_Grand-line',
      bullets: [
        'Prototype audio-skill trading platform (Next 14 + Express monorepo) with JWT/bcrypt auth & Supabase uploads',
        'Dashboard, trade-request flow, full API covered by Jest + Supertest',
        'Automated CI/CD: Vercel frontend, AWS EC2 backend, env-safe deploy',
        'Stack: Next 14, React, SCSS Modules, Context API, Express, Prisma, PostgreSQL, Supabase, AWS EC2',
      ],
    },
    {
      title: 'BeatSeq',
      url: 'https://beatseq.vercel.app',
      date: 'May – June 2025',
      repo: 'https://github.com/connorwotkowicz/BeatSeq',
      bullets: [
        '4×16 drum-machine sequencer in React + Tone.js with pattern persistence',
        'Express + PostgreSQL backend, JWT auth, deployed on Vercel',
        'Stack: React, Tone.js, Node.js, Express, PostgreSQL, JWT, Vite, SCSS',
      ],
    },
  ];

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
      <h1 className="section-title" style={{ padding: '3rem 2rem' }}>Portfolio</h1>

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
              <a href={p.url}  target="_blank" rel="noopener" className="pill">Site</a>
              <a href={p.repo} target="_blank" rel="noopener" className="pill">Repo</a>
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

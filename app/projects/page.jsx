'use client';
import '../styles/App.scss';

export default function ProjectsPage() {
  const projects = [
    {
      title: "DiscogMVP 'Most Valuable Producer' Model",
      url: "https://discog-mv-producer.vercel.app",
      date: 'May 2025',
      repo: 'https://github.com/2410-Capstone/DiscogMVP',
      bullets: [
        'Led a five-person team through UI/UX sprints and GitHub workflow setup for a full-stack vinyl-marketplace platform',
        'Structured and designed entire frontend, mirroring Apple-style layouts while optimizing accessibility (ARIA labels, keyboard nav)',
        'Developed responsive layout and reusable component system using React and SCSS Modules',
        'Implemented Node/Express API with JWT authentication, dynamic product filtering, and Stripe checkout integration',
        'Stack: React, Node.js, Express, PostgreSQL, JWT, Stripe, SCSS Modules'
      ]
    },
    {
      title: 'SoundPiece: Grand Line Edition',
      url: 'https://sound-piece-grand-line.vercel.app',
      date: 'June 2025',
      repo: 'https://github.com/connorwotkowicz/SoundPiece_Grand-line',
      bullets: [
        'Constructed a mock audio-based skill trading platform (WIP) with Next.js 14 & Express monorepo, JWT + bcrypt auth, Supabase uploads',
        'Built profile/dashboard workflows and a trade-request system with live API endpoints, backed by Jest & Supertest',
        'Configured CI/CD for Vercel (frontend) and AWS EC2 (backend), plus environment management via .env',
        'Open-sourced a lightweight useMediaUpload hook to standardize React flow',
        'Stack: Next.js 14, React, SCSS Modules, Context API, Express.js, Prisma, PostgreSQL (Supabase), JWT, bcrypt, Supabase Storage, Axios, Vercel, AWS EC2'
      ]
    },
    {
      title: 'BeatSeq',
      url: 'https://beatseq.vercel.app',
      date: 'May – June 2025',
      repo: 'https://github.com/connorwotkowicz/BeatSeq',
      bullets: [
        'Built a 4×16 drum-machine sequencer in React & Tone.js for audio testing and pattern persistence',
        'Engineered an Express.js + PostgreSQL backend with JWT auth to save/load user patterns',
        'Designed custom UI (supports both Vite and Next.js builds) with SCSS, deployed via Vercel',
        'Stack: React, Tone.js, Node.js, Express, PostgreSQL, JWT, Next.js, Vite, SCSS, Supabase, Vercel'
      ]
    }
  ];

  return (
    <div className="home-page">
      <main className="home-content">
        <h1 className="section-title">Portfolio</h1>
        {projects.map((p) => (
          <div key={p.title} className="project-bar">
            <div className="project-bar-header">
              <h3 className="project-bar-title">{p.title}</h3>
              <span className="project-bar-date">{p.date}</span>
            </div>
            <a href={p.url} target="_blank" rel="noopener" className="project-bar-url">
              {p.url}
            </a>
            <a href={p.repo} target="_blank" rel="noopener" className="project-bar-repo">
              {p.repo}
            </a>
            <ul className="project-bar-list">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
}

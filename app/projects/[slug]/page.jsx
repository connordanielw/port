'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

const projects = [
  {
    slug: 'artportfolio',
    title: 'codaniel | studio',
    site: 'https://codanielw.com',
    video: '/videos/PortExample.mp4',
    year: '2026',
    role: 'Design & Development',
    description: 'A simple visual portfolio built to let the work breathe.',
    stack: ['Next.js', 'React', 'SCSS', 'Anime.js', 'React Three Fiber', 'Resend', 'Vercel'],
  },
  {
    slug: 'cadence',
    title: 'Cadence',
    site: 'https://cadence-mauve-ten.vercel.app',
    video: '/videos/cadence.mp4',
    year: '2025',
    role: 'Full-Stack Development',
    description: 'An AI-powered music library. Upload audio or sheet music, describe what it sounds like, and search your collection by feel.',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'pgvector', 'Claude API', 'Voyage AI', 'Vercel'],
  },
  {
    slug: 'discogmvp',
    title: 'DiscogMVP',
    site: 'https://discog-mv-producer.vercel.app',
    video: '/videos/Discog.mp4',
    year: '2025',
    role: 'Full-Stack Development',
    description: 'A minimalist, music-focused e-commerce project',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Stripe', 'SCSS Modules'],
  },
];

const stackColors = {
  'React':             { bg: '#20232a', text: '#61dafb', dot: '#61dafb' },
  'Node.js':           { bg: '#1a2e1a', text: '#6cc24a', dot: '#6cc24a' },
  'Express':           { bg: '#1c1c1c', text: '#aaaaaa', dot: '#888888' },
  'PostgreSQL':        { bg: '#1a2535', text: '#699aca', dot: '#699aca' },
  'JWT':               { bg: '#1a1a2e', text: '#d63aff', dot: '#d63aff' },
  'Stripe':            { bg: '#1a1f3a', text: '#7b8cde', dot: '#635bff' },
  'SCSS Modules':      { bg: '#2a1a2a', text: '#cd6799', dot: '#cd6799' },
  'Next.js':           { bg: '#0a0a0a', text: '#ffffff', dot: '#ffffff' },
  'SCSS':              { bg: '#2a1a2a', text: '#cd6799', dot: '#cd6799' },
  'Anime.js':          { bg: '#1a1a2a', text: '#f9a8d4', dot: '#f9a8d4' },
  'React Three Fiber': { bg: '#1a1f2a', text: '#7dd3fc', dot: '#7dd3fc' },
  'Resend':            { bg: '#1a1a1a', text: '#a3a3a3', dot: '#a3a3a3' },
  'Vercel':            { bg: '#0a0a0a', text: '#e5e5e5', dot: '#e5e5e5' },
  'TypeScript':        { bg: '#1a2535', text: '#3b82f6', dot: '#3b82f6' },
  'FastAPI':           { bg: '#0d2318', text: '#00d084', dot: '#00d084' },
  'Python':            { bg: '#1a1f2a', text: '#f7cc42', dot: '#f7cc42' },
  'pgvector':          { bg: '#1a2535', text: '#699aca', dot: '#4f8fc0' },
  'Claude API':        { bg: '#1a1410', text: '#d4956a', dot: '#c47a3a' },
  'Voyage AI':         { bg: '#12101e', text: '#9b8fe8', dot: '#9b8fe8' },
  'Docker':            { bg: '#0d1f2d', text: '#2496ed', dot: '#2496ed' },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [launched, setLaunched] = useState(false);

  // Staggered entrance
  useEffect(() => {
    if (!heroRef.current) return;
    const els = heroRef.current.querySelectorAll('[data-reveal]');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 120 + i * 90);
    });
  }, []);

  // Autoplay video silently on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoReady]);

  if (!project) {
    return (
      <main className="pp-shell">
        <div className="pp-notfound">
          <span>404</span>
          <p>Project not found.</p>
          <Link href="/" className="pp-back">← Back to Base</Link>
        </div>
      </main>
    );
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(projectIndex + 1) % projects.length];
  const prev = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <main className="pp-shell" ref={heroRef}>

      {/* ── Background video (blurred, low-opacity ambience) ── */}
      {project.video && (
        <div className="pp-bg-video-wrap">
          <video
            className="pp-bg-video"
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoReady(true)}
          />
          <div className="pp-bg-overlay" />
        </div>
      )}

      {/* ── Nav row ── */}
      <nav className="pp-nav" data-reveal>
        <button onClick={() => router.push('/')} className="pp-back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to main
        </button>
        <span className="pp-nav-index">
          {String(projectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </nav>

      {/* ── Hero ── */}
      <section className="pp-hero">
        <div className="pp-meta-row" data-reveal>
          <span className="pp-year">{project.year}</span>
          <span className="pp-dot-sep">·</span>
          <span className="pp-role">{project.role}</span>
        </div>

        <h1 className="pp-title" data-reveal>{project.title}</h1>

        <p className="pp-description" data-reveal>{project.description}</p>

        {/* Stack */}
        {project.stack?.length > 0 && (
          <div className="pp-stack" data-reveal>
            {project.stack.map((tech) => {
              const c = stackColors[tech] || { bg: '#1e1e1e', text: '#ccc', dot: '#888' };
              return (
                <span
                  key={tech}
                  className="pp-badge"
                  style={{ backgroundColor: c.bg, color: c.text, borderColor: `${c.dot}33` }}
                >
                  <span className="pp-badge__dot" style={{ backgroundColor: c.dot }} />
                  {tech}
                </span>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="pp-cta-wrap" data-reveal>
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className={`pp-cta ${launched ? 'pp-cta--launched' : ''}`}
            onClick={() => setLaunched(true)}
          >
            <span className="pp-cta__label">
              {launched ? 'Opened ↗' : 'Visit Live Site'}
            </span>
            <span className="pp-cta__arrow">→</span>
          </a>
        </div>
      </section>

      {/* ── Preview strip (actual muted video, visible) ── */}
      {project.video && (
        <div className="pp-preview-wrap" data-reveal>
          <div className="pp-preview-frame">
            <video
              ref={videoRef}
              className="pp-preview-video"
              src={project.video}
              muted
              loop
              playsInline
            />
            <div className="pp-preview-shine" />
          </div>
          <p className="pp-preview-label">Live preview</p>
        </div>
      )}

      {/* ── Next / Prev ── */}
      <div className="pp-siblings" data-reveal>
        <Link href={`/projects/${prev.slug}`} className="pp-sibling pp-sibling--prev">
          <span className="pp-sibling__dir">← Prev</span>
          <span className="pp-sibling__title">{prev.title}</span>
        </Link>
        <Link href={`/projects/${next.slug}`} className="pp-sibling pp-sibling--next">
          <span className="pp-sibling__dir">Next →</span>
          <span className="pp-sibling__title">{next.title}</span>
        </Link>
      </div>

      <style>{`
        /* ── Shell ── */
        .pp-shell {
          min-height: 100vh;
          background: #0a0a0a;
          color: #e8e4dc;
          position: relative;
          overflow: hidden;
          padding: 0 0 80px;
        }

        /* ── Ambient bg video ── */
        .pp-bg-video-wrap {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .pp-bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(60px) saturate(0.4);
          opacity: 0.18;
          transform: scale(1.1);
        }
        .pp-bg-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, #0a0a0a00 0%, #0a0a0a 70%);
        }

        /* ── Everything above bg ── */
        .pp-nav,
        .pp-hero,
        .pp-preview-wrap,
        .pp-siblings {
          position: relative;
          z-index: 1;
        }

        /* ── Nav ── */
        .pp-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 860px;
          margin: 64px auto 0;
          padding: 28px 48px;
          border-bottom: 1px solid #ffffff0d;
        }
        .pp-back-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #888;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .pp-back-link:hover { color: #e8e4dc; }
        .pp-nav-index {
          font-size: 11px;
          color: #444;
          letter-spacing: 0.1em;
        }

        .pp-hero {
          max-width: 860px;
          margin: 0 auto;
          padding: 80px 48px 48px;
        }

        .pp-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .pp-year, .pp-role {
          font-size: 11px;
          color: #555;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .pp-dot-sep { color: #333; font-size: 14px; }

        .pp-title {
          font-size: clamp(48px, 8vw, 88px);
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin: 0 0 32px;
          color: #f0ece3;
        }

        .pp-description {
          font-size: 18px;
          line-height: 1.7;
          color: #8a8680;
          max-width: 560px;
          margin: 0 0 36px;
          font-weight: 400;
        }

        /* ── Stack badges ── */
        .pp-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 48px;
        }
        .pp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 5px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.04em;
          border: 1px solid transparent;
          transition: filter 0.2s, transform 0.2s;
          cursor: default;
        }
        .pp-badge:hover { filter: brightness(1.25); transform: translateY(-1px); }
        .pp-badge__dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          opacity: 0.85;
          flex-shrink: 0;
        }

        /* ── CTA ── */
        .pp-cta-wrap { margin-bottom: 0; }
        .pp-cta {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 16px 32px;
          background: #f0ece3;
          color: #0a0a0a;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: 4px;
          font-weight: 600;
          transition: background 0.2s, gap 0.3s, transform 0.2s;
          position: relative;
          overflow: hidden;
        }
        .pp-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #fff;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .pp-cta:hover::before { opacity: 0.12; }
        .pp-cta:hover { gap: 24px; transform: translateY(-1px); }
        .pp-cta--launched {
          background: #1a2e1a;
          color: #6cc24a;
        }
        .pp-cta__arrow {
          font-size: 16px;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .pp-cta:hover .pp-cta__arrow { transform: translateX(4px); }

        /* ── Preview strip ── */
        .pp-preview-wrap {
          max-width: 860px;
          margin: 64px auto 0;
          padding: 0 48px;
        }
        .pp-preview-label {
          font-size: 10px;
          color: #333;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin: 12px 0 0;
        }
        .pp-preview-frame {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #ffffff0f;
          box-shadow: 0 32px 80px #00000088, 0 0 0 1px #ffffff06;
          background: #111;
          aspect-ratio: 16/9;
        }
        .pp-preview-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pp-preview-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ffffff08 0%, transparent 50%);
          pointer-events: none;
        }

        /* ── Siblings ── */
        .pp-siblings {
          max-width: 860px;
          margin: 80px auto 0;
          padding: 0 48px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          border-top: 1px solid #ffffff0d;
          padding-top: 40px;
        }
        .pp-sibling {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: opacity 0.2s;
          max-width: 240px;
        }
        .pp-sibling--next { align-items: flex-end; }
        .pp-sibling:hover { opacity: 0.7; }
        .pp-sibling__dir {
          font-size: 10px;
          color: #444;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .pp-sibling__title {
          font-size: 18px;
          color: #e8e4dc;
          letter-spacing: -0.01em;
        }

        /* ── 404 ── */
        .pp-notfound {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          gap: 16px;
          text-align: center;
        }
        .pp-notfound span {
          font-size: 96px;
          font-style: italic;
          color: #222;
          line-height: 1;
        }
        .pp-notfound p { color: #555; font-size: 16px; }
        .pp-back { color: #888; font-size: 13px; text-decoration: none; }
        .pp-back:hover { color: #e8e4dc; }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .pp-nav { padding: 20px 24px; }
          .pp-hero { padding: 48px 24px 40px; }
          .pp-title { font-size: 44px; }
          .pp-preview-wrap { padding: 0 24px; }
          .pp-siblings { padding: 32px 24px 0; flex-direction: column; }
          .pp-sibling--next { align-items: flex-start; }
        }
      `}</style>
    </main>
  );
}

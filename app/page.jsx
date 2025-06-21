// src/pages/index.jsx
'use client';
import '../styles/App.scss';

export default function HomePage() {
  const projects = [
    {
      title: 'SoundPiece: Grand Line Edition',
      date: 'June 2025',
      tech: 'Next.js • Express • Supabase',
      site: 'https://sound-piece-grand-line.vercel.app',
      repo: 'https://github.com/connorwotkowicz/SoundPiece_Grand-line'
    },
    {
      title: 'BeatSeq',
      date: 'May – June 2025',
      tech: 'React • Tone.js • PostgreSQL',
      site: 'https://beatseq.vercel.app',
      repo: 'https://github.com/connorwotkowicz/BeatSeq'
    },
    {
      title: 'DiscogMVP “Most Valuable Producer”',
      date: 'May 2025',
      tech: 'React • Express • Stripe',
      site: 'https://discog-mv-producer.vercel.app',
      repo: 'https://github.com/2410-Capstone/DiscogMVP'
    }
  ];

  return (
    <div className="home-page">
      <main className="home-content">

        <section className="hero-section">
          <h1 className="hero-title animate-on-load">
            Connor D. Wotkowicz
          </h1>
          <p className="hero-description animate-slide-up">
            Full-Stack Developer | React • Node.js • PostgreSQL | Brooklyn, NY
          </p>
        </section>

        <section className="projects-section">
          <h2 className="section-title animate-on-load">
            Portfolio
          </h2>
          <div className="project-grid">
            {projects.map(p => (
              <a
                key={p.title}
                href={p.site}
                target="_blank"
                rel="noopener"
                className="project-card animate-slide-up"
              >
                <div className="project-header">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-date">{p.date}</span>
                </div>
                <div className="project-tech">{p.tech}</div>
                <div className="project-links">
                  <span className="project-link-label">Site</span>
                  <span>•</span>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener"
                    className="project-link"
                    onClick={e => e.stopPropagation()}
                  >
                    Repo
                  </a>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="resume-section animate-slide-up">
          <a href="/Connor D. Wotkowicz_Résuméq.pdf" download className="resume-link">
            Résumé/CV
          </a>
        </section>

      </main>
    </div>
  );
}

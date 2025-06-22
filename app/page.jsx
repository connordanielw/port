'use client';
import '../app/styles/App.scss';
import HeroVisual from '../app/components/Hero';

const badgeMap = {
  'React': 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
  'React Router': 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white',
  'Vite': 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white',
  'SCSS': 'https://img.shields.io/badge/SCSS-cc6699?style=for-the-badge&logo=sass&logoColor=white',
  'SCSS Modules': 'https://img.shields.io/badge/SCSS-cc6699?style=for-the-badge&logo=sass&logoColor=white',
  'Node.js': 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white',
  'Express': 'https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white',
  'Express.js': 'https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white',
  'PostgreSQL': 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
  'JWT': 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white',
  'Stripe': 'https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white',
  'Jest': 'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white',
  'React Testing Library': 'https://img.shields.io/badge/React_Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white',
  'Supertest': 'https://img.shields.io/badge/Supertest-000000?style=for-the-badge&logo=supertest&logoColor=white',
  'Next.js': 'https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white',
  'Next.js 14': 'https://img.shields.io/badge/Next.js_14-000?style=for-the-badge&logo=next.js&logoColor=white',
  'Context API': 'https://img.shields.io/badge/Context_API-61DAFB?style=for-the-badge',
  'Prisma': 'https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white',
  'Supabase': 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white',
  'Supabase Storage': 'https://img.shields.io/badge/Supabase_Storage-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white',
  'bcrypt': 'https://img.shields.io/badge/bcrypt-0d1117?style=for-the-badge',
  'Axios': 'https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white',
  'Vercel': 'https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white',
  'AWS EC2': 'https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white',
  'Tone.js': 'https://img.shields.io/badge/Tone.js-ff7373?style=for-the-badge'
};

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

  return (
    <div className="home-page">
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

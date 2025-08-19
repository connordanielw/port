'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import WaveBackground from '../../app/components/WaveBackground';
import { badgeMap } from '../components/BadgeMap';

const badgeLinks = {
    JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  TypeScript: 'https://www.typescriptlang.org',
  Python: 'https://www.python.org',
  SQL: 'https://en.wikipedia.org/wiki/SQL',
  HTML5: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  CSS3: 'https://developer.mozilla.org/en-US/docs/Web/CSS',


  React: 'https://reactjs.org',
  'React Router': 'https://reactrouter.com',
  Vite: 'https://vitejs.dev',
  SCSS: 'https://sass-lang.com',
  'SCSS Modules': 'https://sass-lang.com',
  'Node.js': 'https://nodejs.org',
  Express: 'https://expressjs.com',
  'Express.js': 'https://expressjs.com',
  PostgreSQL: 'https://www.postgresql.org',
  MongoDB: 'https://www.mongodb.com',
  JWT: 'https://jwt.io',
  Stripe: 'https://stripe.com',
  Jest: 'https://jestjs.io',
  'React Testing Library': 'https://testing-library.com',
  Supertest: 'https://github.com/visionmedia/supertest',
  'Next.js': 'https://nextjs.org',
  'Next.js 14': 'https://nextjs.org',
  'Context API': 'https://react.dev/reference/react/useContext',
  Prisma: 'https://www.prisma.io',
  Supabase: 'https://supabase.com',
  'Supabase Storage': 'https://supabase.com/storage',
  bcrypt: 'https://github.com/kelektiv/node.bcrypt.js',
  Axios: 'https://axios-http.com',
  Vercel: 'https://vercel.com',
  Toastify: 'https://github.com/fkhadra/react-toastify',
  'AWS EC2': 'https://aws.amazon.com/ec2',
  Railway: 'https://railway.app',
  cURL: 'https://curl.se',
  Postman: 'https://www.postman.com',
  'Tone.js': 'https://tonejs.github.io',
  Figma: 'https://www.figma.com',
  Ableton: 'https://www.ableton.com/en/live/',
  'Pro Tools': 'https://www.avid.com/pro-tools',
  Avid: 'https://www.avid.com',
  Blender: 'https://www.blender.org',
};

const badgeGroups = {
    "Languages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "HTML5",
    "CSS3"
  ],
  "Frontend": [
    "React",
    "React Router",
    "Next.js",
    "Vite",
    "SCSS",
    "Figma",
    "Context API",
    "Toastify"
  ],
  "Backend & Data": [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Supabase",
    "JWT",
    "bcrypt"
  ],
  "Testing": [
    "Jest",
    "React Testing Library",
    "Supertest"
  ],
  "Tools & Infrastructure": [
    "Vercel",
    "AWS EC2",
    "Railway",
    "cURL",
    "Postman",
    "Stripe",
    "Axios",

    "Helmet",

  ],
  "Audio & Creative": [
          "Blender",
    "Ableton",
    "Pro Tools",
    "Avid",

  ]
};


export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const bioRef = useRef(null);
  const factsRef = useRef(null);
  const ctaRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const herolines = heroRef.current?.querySelectorAll('.hero-line') || [];
    const storylines = storyRef.current?.querySelectorAll('.hero-line') || [];
    const biolines = bioRef.current?.querySelectorAll('.hero-line') || [];
    const factslines =
      factsRef.current?.querySelectorAll(
        '.facts-header.hero-line, .facts-container.hero-line, .facts-list.hero-line, .badge-group-heading.hero-line'
      ) || [];
    const badgeIcons =
      factsRef.current?.querySelectorAll('.badge-icon') || [];

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
          targets: resumeRef.current,
          translateY: [30, 0],
          opacity: [0, 1],
        },
        '-=400'
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
      <div className="about-container">
        <section ref={heroRef} className="about-hero">
          <h1 className="hero-line">Connor D. Wotkowicz</h1>
          <p className="hero-line">
            As a Software Engineer with a background in music and design, I build
            applications that blend creativity and code to deliver clean,
            enjoyable user experiences.
          </p>
        </section>

        <div className="i-section-divider" aria-hidden="true"></div>

        <section ref={factsRef} className="about-facts">
   

          <div className="facts-container hero-line">
            <div className="facts-list hero-line">
              <p>
                <strong>Background:</strong>
                <br />
                Full‑stack JS (React, Node, Postgres)
                <br />
                Classical musician → engineer
                <br />
                Remote or NYC hybrid
              </p>
              <p>
                <strong>Strengths:</strong>
                <br />
                Ships fast, tests thoroughly
                <br />
                UI craft + backend rigor
                <br />
                Collaborative, quality‑focused
              </p>
            </div>

            <div className="facts-badges hero-line">
              {Object.entries(badgeGroups).map(([category, techs]) => (
                <div key={category} className="badge-group">
                  <h3 className="badge-group-heading hero-line">{category}</h3>
                  <div className="badge-list">
                    {techs.map((tech) => (
                      <a
                        key={tech}
                        href={badgeLinks[tech] || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={tech}
                      >
                        <img className="badge-icon" src={badgeMap[tech]} alt={tech} />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <a
            ref={resumeRef}
            href="/Connor_Wotkowicz_Intern_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Résumé
          </a> */}
        </section>

        <div ref={ctaRef} className="about-cta">
          {/* Example CTA:
          <a className="primary-btn" href="mailto:you@email.com">Let's work together</a> */}
        </div>
      </div>
    </main>
  );
}
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import anime from 'animejs';

const skills = [
  { name: 'JavaScript',  icon: 'https://api.iconify.design/simple-icons:javascript.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript',  icon: 'https://api.iconify.design/simple-icons:typescript.svg', url: 'https://www.typescriptlang.org/' },
  { name: 'React',       icon: 'https://api.iconify.design/simple-icons:react.svg',       url: 'https://react.dev/' },
  { name: 'Next.js',     icon: 'https://api.iconify.design/simple-icons:nextdotjs.svg',   url: 'https://nextjs.org/' },
  { name: 'SCSS',        icon: 'https://api.iconify.design/simple-icons:sass.svg',        url: 'https://sass-lang.com/' },
  { name: 'Figma',       icon: 'https://api.iconify.design/simple-icons:figma.svg',       url: 'https://www.figma.com/' },
  { name: 'Node.js',     icon: 'https://api.iconify.design/simple-icons:nodedotjs.svg',   url: 'https://nodejs.org/' },
  { name: 'PostgreSQL',  icon: 'https://api.iconify.design/simple-icons:postgresql.svg',  url: 'https://www.postgresql.org/' },
  { name: 'Vercel',      icon: 'https://api.iconify.design/simple-icons:vercel.svg',      url: 'https://vercel.com/' },
  { name: 'Jest',        icon: 'https://api.iconify.design/simple-icons:jest.svg',        url: 'https://jestjs.io/' },
];

const capabilities = [
  {
    title: 'Frontend Architecture',
    text: 'I build structured, scalable interfaces with reusable components, clear page systems, and maintainable styling.',
  },
  {
    title: 'Site Management',
    text: 'I organize, update, and maintain live websites with attention to performance, consistency, content flow, and deployment.',
  },
  {
    title: 'Editing & Polish',
    text: 'I refine layouts, copy, motion, and visual hierarchy so pages feel intentional, clean, and easy to use.',
  },
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const items = pageRef.current.querySelectorAll('.about-animate');

    if (!items.length) return;

    anime({
      targets: items,
      opacity: [0, 1],
      translateY: [28, 0],
      delay: anime.stagger(90),
      duration: 850,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <main className="about-page" ref={pageRef}>
      <section className="about-shell">
        <Link href="/" className="pp-back-link about-back about-animate">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to main
        </Link>
        <div className="about-kicker about-animate">
          Web Developer / Frontend Systems / Site Editing
        </div>

        <section className="about-hero about-animate">
          <h1>
Connor D. Wotkowicz
          </h1>

          <p>
          Frontend developer focused on component architecture, responsive design, and UX-driven site management.
          </p>
        </section>

        <section className="about-capabilities">
          {capabilities.map((item) => (
            <article className="capability-card about-animate" key={item.title}>
              <span className="card-line" />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="about-split about-animate">
          <div>
            <h2>What I bring to a project</h2>
          </div>

          <div className="about-copy-stack">
            <p>
              I’m strongest where design, structure, and implementation meet:
              turning loose ideas into pages that are clear, usable, and easy to
              keep improving.
            </p>

            <p>
              I work comfortably across React and Next.js projects, with an
              emphasis on component organization, SCSS systems, responsive
              layouts, deployment, and practical edits that make a site feel
              finished.
            </p>
          </div>
        </section>

        <section className="tool-section about-animate">
          <h2>Tools & Technologies</h2>

          <div className="tool-grid">
            {skills.map((skill) => (
              <a
                className="tool-pill"
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={skill.icon} alt={`${skill.name} icon`} />
                <span>{skill.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="about-cta about-animate">
          <p>
            Available for frontend development, portfolio builds, site cleanup,
            and ongoing web management.
          </p>

          <a href="/contact" className="about-button">
            Contact
          </a>
        </section>
      </section>
    </main>
  );
}
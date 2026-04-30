'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { badgeMap } from '../components/BadgeMap';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'SCSS',
  'Figma',
  'Node.js',
  'PostgreSQL',
  'Vercel',
  'Jest',
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
        <div className="about-kicker about-animate">
          Web Developer / Frontend Systems / Site Editing
        </div>

        <section className="about-hero about-animate">
          <h1>
            I build and maintain clean, expressive web experiences.
          </h1>

          <p>
            I’m a web developer focused on frontend architecture, polished user
            interfaces, and practical site management. My work combines clean
            component structure, responsive styling, thoughtful editing, and a
            strong eye for how digital spaces should feel.
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
              <div className="tool-pill" key={skill}>
                {badgeMap[skill] && (
                  <img src={badgeMap[skill]} alt={`${skill} icon`} />
                )}
                <span>{skill}</span>
              </div>
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
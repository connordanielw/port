'use client';

import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import anime from 'animejs';
import Link from 'next/link';
import WaveBackground from '../../components/WaveBackground';
import { badgeMap } from '../../components/BadgeMap';


const projects = [
  {
    slug: 'discogmvp',
    title: 'DiscogMVP',
    site: 'https://discog-mv-producer.vercel.app',
    repo: 'https://github.com/connorwotkowicz/DiscogMVProducer',
    image: '/images/fallingrecord.png',
    description: 'A full-stack e-commerce platform built using React, Express, and PostgreSQL.',
  tech: 'React • React Router • Vite • SCSS • Node.js • Express • PostgreSQL • Railway • JWT • Stripe • Jest • React Testing Library • Supertest • Google OAuth • Toastify • Discogs API • Helmet • Rate Limiting'
  },
  {
    slug: 'artportfolio',
    title: 'Art Portfolio Example',
    site: 'https://connordanielco.vercel.app/',
    repo: 'https://github.com/connorwotkowicz/Practitrack',
    sub: 'Projected MVP Launch: Spring 2026',
    image: '/images/trak.png',
    description: 'A trainer–style app for music mentors to track and guide client progress. It complements in-person lessons and supports fully remote learning.',
    tech: 'React • Next.js • TypeScript • SCSS • PostgreSQL • Prisma • Google OAuth • JWT • Vercel • Jest',
  },
  {
    slug: 'beatseq',
    title: 'BeatSeq',
    site: 'https://beatseq.vercel.app',
    repo: 'https://github.com/connorwotkowicz/BeatSeq',
    image: '/images/beatmock.png',
    description: 'A browser-based beat sequencer app with real-time audio playback.',
tech: 'React • Tone.js • Node.js • Express • PostgreSQL • JWT • Next.js • Vite • SCSS • Supabase • Vercel',
  }
];

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

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const techRef = useRef(null); 
  const backRef = useRef(null);  



  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

useEffect(() => {
  if (!containerRef.current) return;

  anime.timeline({ easing: 'easeOutExpo', duration: 700 })
    .add({
      targets: titleRef.current,
      translateY: [-30, 0],
      opacity: [0, 1],
    })
    .add({
      targets: descRef.current,
      translateY: [-20, 0],
      opacity: [0, 1],
    }, '-=400')
    .add({
      targets: subRef.current,
      translateY: [-20, 0],
      opacity: [0, 1],
    }, '-=400')
    .add({
      targets: btnRef.current.children,                
      translateY: [-15, 0],
      opacity: [0, 1],
      delay: anime.stagger(120),
    }, '-=400')
    .add({
      targets: techRef.current?.children,              
      translateY: [10, 0],
      opacity: [0, 1],
      delay: anime.stagger(90),
    }, '-=300')
    .add({                                              
      targets: backRef.current,
      translateY: [10, 0],
      opacity: [0, 1],
    }, '-=250');
}, []);



  if (!project) return <div className="project-page">Project not found</div>;

  return (
    <main className="project-page" ref={containerRef}>
      {/* <WaveBackground /> */}



      <div className="project-details">
        <h1 ref={titleRef}>{project.title}</h1>
        <p className="project-description" ref={descRef}>{project.description}</p>
   <p className="project-subtitle" ref={subRef}>{project.sub}</p>
        <div className="project-links" ref={btnRef}>
          <a href={project.site} target="_blank" className="project-link-button">Site</a>
          <a href={project.repo} target="_blank" className="project-link-button">GitHub</a>
        </div>
     
        <div className="project-tech" ref={techRef}>{renderBadges(project.tech)}</div>

        <Link href="/"  ref={backRef}  className="back-link">← Back to Base</Link>
      </div>
    </main>
  );
}

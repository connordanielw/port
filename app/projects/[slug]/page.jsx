'use client';

import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const projects = [
  {
    slug: 'artportfolio',
    title: 'Art Portfolio',
    site: 'https://connordanielco.vercel.app/',
    video: '/videos/PortExample.mp4', 
    description: 'A simple visual portfolio...',
  },
  {
    slug: 'discogmvp',
    title: 'DiscogMVP',
    site: 'https://discog-mv-producer.vercel.app',
    video: '/videos/Discog.mp4',
    description: 'A minimalist, music-focused e-commerce project...',
  },
  {
    slug: 'careerportfolio',
    title: 'Career Portfolio',
    site: 'https://your-career-portfolio-url.vercel.app',
    video: '/videos/career.mp4',
    description: 'A second portfolio...',
  },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const pageRef = useRef(null);

useEffect(() => {
  let animation;

  import('animejs').then((mod) => {
    const anime = mod.default || mod;

    if (!pageRef.current) return;

    const targets = pageRef.current.querySelectorAll('.project-animate');
    if (!targets.length) return;

    animation = anime({
      targets,
      opacity: [0, 1],
      translateY: [24, 0],
      delay: anime.stagger(120),
      duration: 800,
      easing: 'easeOutExpo',
    });
  });

  return () => {
    if (animation?.pause) animation.pause();
  };
}, []);

  if (!project) {
    return (
      <main className="project-page">
        <div className="project-details">
          <h1>Project not found</h1>
          <Link href="/" className="back-link">
            ← Back to Base
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-page" ref={pageRef}>
      <section className="project-details simple-project-details">
        <a
          href={project.site}
          target="_blank"
          rel="noopener noreferrer"
          className="project-go-site project-animate"
        >
          Go to Site
        </a>

        {/* <h1 className="project-animate">{project.title}</h1> */}
          <p className="project-description project-animate">
          {project.description}
        </p>

       {project.video && (
  <div className="project-video-wrapper project-animate">
    <video
      className="project-video"
      src={project.video}
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
)}

      

        <Link href="/" className="back-link project-animate">
          ← Back to Base
        </Link>
      </section>
    </main>
  );
}
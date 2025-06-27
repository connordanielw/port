/* components/SkillsGrid.jsx */
'use client';

export default function SkillsGrid() {
  const skills = [
    
    { name: 'JavaScript',   src: 'https://api.iconify.design/simple-icons:javascript.svg' },
    { name: 'Python',       src: 'https://api.iconify.design/simple-icons:python.svg' },
    { name: 'Go',           src: 'https://api.iconify.design/simple-icons:go.svg' },
    { name: 'TypeScript',   src: 'https://api.iconify.design/simple-icons:typescript.svg' },

    
    { name: 'React',        src: 'https://api.iconify.design/simple-icons:react.svg' },
    { name: 'Next.js',      src: 'https://api.iconify.design/simple-icons:nextdotjs.svg' },

    
    { name: 'Node.js',      src: 'https://api.iconify.design/simple-icons:nodedotjs.svg' },
    { name: 'PostgreSQL',   src: 'https://api.iconify.design/simple-icons:postgresql.svg' },

    
    { name: 'Sass / SCSS',  src: 'https://api.iconify.design/simple-icons:sass.svg' },

    
    { name: 'GitHub',       src: 'https://api.iconify.design/simple-icons:github.svg' },
    { name: 'Vercel',       src: 'https://api.iconify.design/simple-icons:vercel.svg' },
    { name: 'Supabase',     src: './images/supabase.png' },
    { name: 'Railway',      src: 'https://api.iconify.design/simple-icons:railway.svg' },
    { name: 'AWS',          src: './images/aws.png' },

    
    { name: 'Figma',        src: 'https://api.iconify.design/simple-icons:figma.svg' },
    { name: 'Blender',      src: 'https://api.iconify.design/simple-icons:blender.svg' },
    { name: 'Pro Tools',    src: './images/pro.png' },
    { name: 'Ableton Live', src: './images/ableton.png' },

    // { name: 'Fl Studio',    src: './images/fl.png' }, // kept commented out
  ];


  return (
    <section className="skills-section">
          <p className="hero-description animate-slide-up">
     Full-stack web development with visual fluency 
    
      </p>
      <h2 className="skills-title animate-on-load">Core Tech</h2>

      <ul className="skills-grid">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <img src={skill.src} alt={skill.name} className="skill-icon" />
          </li>
        ))}
      </ul>
    </section>
  );
}
 
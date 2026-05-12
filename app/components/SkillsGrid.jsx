/* components/SkillsGrid.jsx */
'use client';

export default function SkillsGrid() {
  const skills = [
    { name: 'JavaScript',   src: 'https://api.iconify.design/simple-icons:javascript.svg',     url: 'https://www.javascript.com/' },
    { name: 'Python',       src: 'https://api.iconify.design/simple-icons:python.svg',         url: 'https://www.python.org/' },
    
    { name: 'TypeScript',   src: 'https://api.iconify.design/simple-icons:typescript.svg',     url: 'https://www.typescriptlang.org/' },

    { name: 'React',        src: 'https://api.iconify.design/simple-icons:react.svg',          url: 'https://reactjs.org/' },
   { 
  name: 'Vite',
  src: 'https://api.iconify.design/simple-icons:vite.svg',
  url: 'https://vitejs.dev/'
},
    { name: 'Next.js',      src: 'https://api.iconify.design/simple-icons:nextdotjs.svg',      url: 'https://nextjs.org/' },

    { name: 'Node.js',      src: 'https://api.iconify.design/simple-icons:nodedotjs.svg',      url: 'https://nodejs.org/' },
    { name: 'PostgreSQL',   src: 'https://api.iconify.design/simple-icons:postgresql.svg',      url: 'https://www.postgresql.org/' },

    { name: 'Sass / SCSS',  src: 'https://api.iconify.design/simple-icons:sass.svg',            url: 'https://sass-lang.com/' },

    { name: 'GitHub',       src: 'https://api.iconify.design/simple-icons:github.svg',          url: 'https://github.com/' },
    { name: 'Vercel',       src: 'https://api.iconify.design/simple-icons:vercel.svg',          url: 'https://vercel.com/' },
    { name: 'Supabase',     src: '/images/supabase.png',                                       url: 'https://supabase.com/' },
    // { name: 'Railway',      src: 'https://api.iconify.design/simple-icons:railway.svg',         url: 'https://railway.app/' },
    // { name: 'AWS',          src: './images/aws.png',                                             url: 'https://aws.amazon.com/' },
// { name: 'Go',           src: 'https://api.iconify.design/simple-icons:go.svg',             url: 'https://go.dev/' },
    { name: 'Figma',        src: 'https://api.iconify.design/simple-icons:figma.svg',           url: 'https://www.figma.com/' },
    { name: 'Blender',      src: 'https://api.iconify.design/simple-icons:blender.svg',         url: 'https://www.blender.org/' },
    // { name: 'Pro Tools',    src: './images/pro.png',                                           url: 'https://www.avid.com/pro-tools' },
    // { name: 'Ableton Live', src: './images/ableton.png',                                      url: 'https://www.ableton.com/live/' },

    // { name: 'Fl Studio',    src: './images/fl.png' }, // kept commented out
  ];


return (
  
  <section className="skills-section">
  
    <h2 className="skills-title animate-on-load">Core Tech</h2>

    <ul className="skills-grid">
      {skills.map((skill) => (
        <li key={skill.name} className="skill-item">
          <img
            src={skill.src}
            alt={skill.name}
            className="skill-icon"
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open(skill.url, '_blank', 'noopener,noreferrer')
            }
          />
        </li>
      ))}
    </ul>
  </section>
);
}


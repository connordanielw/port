'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext.jsx';
// import { useTheme} from './ThemeContext';


export default function Footer() {
  const { t } = useLanguage();

// const { theme, toggleTheme } = useTheme();

  return (
    <footer className="app-footer">
      <main>
      <div className="footer-inner">
        <div className="footer-links">
          {/* <Link href="/projects" className="footer-link">
            Works
          </Link>
          {' | '} */}
          <Link href="/contact" className="footer-link">
            {t.contact}
          </Link>
        </div>
        {/* <button
  className="theme-toggle-button"
  onClick={toggleTheme}           
  aria-label="Toggle theme"
>
  <span className="icon">
    {theme === 'dark'
      ? '\u2600\uFE0E'   
      : '\u263E\uFE0E'} 
  </span>
</button> */}
        <p className="footer-text"> © {new Date().getFullYear()} CDW</p>
      </div>
          </main>
    </footer>

  );
}

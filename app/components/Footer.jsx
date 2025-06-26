'use client';

import Link from 'next/link';
import { useTheme} from './ThemeContext';




export default function Footer() {

const { theme, toggleTheme } = useTheme();

  return (
    <footer className="app-footer">
      <main>
      <div className="footer-inner">
        <div className="footer-links">
          <Link href="/projects" className="footer-link">
            Works
          </Link>
          {' | '}
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <button
  className="theme-toggle-button"
  onClick={toggleTheme}           
  aria-label="Toggle theme"
>
  <span className="icon">
    {theme === 'dark'
      ? '\u2600\uFE0E'   
      : '\u263E\uFE0E'} 
  </span>
</button>
        <p className="footer-text">© {new Date().getFullYear()} Connor D Wotkowicz </p>
      </div>
          </main>
    </footer>

  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage, LANGUAGES } from './LanguageContext.jsx';
// import { useTheme} from './ThemeContext';



export default function Navigation() {
  const pathname  = usePathname();
  const { lang, t, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  // const { theme, toggleTheme } = useTheme();
  const menuRef   = useRef(null);
  const burgerRef = useRef(null);
  const timerRef  = useRef(null);
  const langRef   = useRef(null);



  useEffect(() => {
    const onClickOutside = (e) => {
      if (open) {
        const clickInMenu   = menuRef.current?.contains(e.target);
        const clickInBurger = burgerRef.current?.contains(e.target);
        if (!clickInMenu && !clickInBurger) setOpen(false);
      }
      if (langOpen && !langRef.current?.contains(e.target)) setLangOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setLangOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('touchstart', onClickOutside);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, langOpen]);

  const selectLang = (l) => {
    setLang(l);
    setLangOpen(false);
  };

  useEffect(() => {
    if (open) timerRef.current = setTimeout(() => setOpen(false), 2000);
    return () => clearTimeout(timerRef.current);
  }, [open]);

  const resetTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(false), 2000);
  };

  const links = [
    { href: '/contact', label: t.contact },
    { href: '/info', label: t.about }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo"><img src="/images/logo.png" alt="Site Logo" className="logo" />
</Link>

           
 <div className="nav-links">
          {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`nav-item${pathname === href ? ' active' : ''}`}
        >
          {label}
        </Link>
          ))}
        </div>
        <div className="lang-dropdown" ref={langRef}>
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLangOpen((o) => !o)}
            aria-label={t.toggleLanguage}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
          >
            {lang.toUpperCase()}
          </button>
          {langOpen && (
            <ul className="lang-menu" role="listbox">
              {LANGUAGES.map((l) => (
                <li key={l}>
                  <button
                    type="button"
                    className={`lang-option${l === lang ? ' active' : ''}`}
                    role="option"
                    aria-selected={l === lang}
                    onClick={() => selectLang(l)}
                  >
                    {l.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          ref={burgerRef}
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={t.toggleNav}
        >
          ☰
        </button>
      </div>

      <div
      
        ref={menuRef}
        className={`mobile-menu${open ? ' open' : ''}`}
        onMouseMove={resetTimer}
        onTouchStart={resetTimer}
        onClick={(e) => {
          if (e.target === menuRef.current) setOpen(false);
        }}
      >
        
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="mobile-menu-item"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

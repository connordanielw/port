'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useTheme} from './ThemeContext';



export default function Navigation() {
  const pathname  = usePathname();
  const [open, setOpen] = useState(false);
  // const { theme, toggleTheme } = useTheme();
  const menuRef   = useRef(null);   
  const burgerRef = useRef(null);  
  const timerRef  = useRef(null);   
  



  useEffect(() => {
    const onClickOutside = (e) => {
      if (!open) return;

      const clickInMenu   = menuRef.current?.contains(e.target);
      const clickInBurger = burgerRef.current?.contains(e.target);

      if (!clickInMenu && !clickInBurger) setOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('touchstart', onClickOutside);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) timerRef.current = setTimeout(() => setOpen(false), 2000);
    return () => clearTimeout(timerRef.current);
  }, [open]);

  const resetTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(false), 2000);
  };

  const links = [
    { href: '/contact', label: 'Contact' },
    { href: '/info', label: 'About' }
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
        <button
          ref={burgerRef}
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
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

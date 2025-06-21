'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const timerRef = useRef(null);

  // Close on outside click/tap
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open]);


  useEffect(() => {
    if (open) {
      timerRef.current = setTimeout(() => setOpen(false), 2000);
    }
    return () => clearTimeout(timerRef.current);
  }, [open]);


  const resetTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(false), 2000);
  };

  const links = [
    { href: '/',       label: 'Home' },
 
    { href: '/contact',   label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">Connor D. Wotkowicz</Link>

        <div className="nav-links desktop-only">
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
          className="hamburger mobile-only"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          className="mobile-menu"
          onMouseMove={resetTimer}
          onTouchStart={resetTimer}
          onClick={e => {
          
            if (e.target === menuRef.current) {
              setOpen(false);
            } else {
          
              resetTimer();
            }
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
      )}
    </nav>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname  = usePathname();
  const [open, setOpen] = useState(false);

  const menuRef   = useRef(null);   // the full-screen overlay
  const burgerRef = useRef(null);   // ☰ button
  const timerRef  = useRef(null);   // 2-second auto-close

  /* ---------- Close on outside click OR ⎋ key ---------- */
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

  /* ---------- Auto-close after 2 s of inactivity ---------- */
  useEffect(() => {
    if (open) timerRef.current = setTimeout(() => setOpen(false), 2000);
    return () => clearTimeout(timerRef.current);
  }, [open]);

  const resetTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(false), 2000);
  };

  const links = [
    { href: '/',        label: 'Home'    },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">Connor&nbsp;D.&nbsp;Wotkowicz</Link>

        {/* Desktop links */}
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

        {/* ☰ hamburger */}
        <button
          ref={burgerRef}
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu overlay (always rendered so opacity/transform can animate) */}
      <div
        ref={menuRef}
        className={`mobile-menu${open ? ' open' : ''}`}
        onMouseMove={resetTimer}
        onTouchStart={resetTimer}
        onClick={(e) => {
          // close when clicking the backdrop itself (not a link)
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

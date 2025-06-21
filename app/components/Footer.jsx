'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="app-footer">
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
        <p className="footer-text">© {new Date().getFullYear()} Connor D. Wotkowicz. All rights reserved.</p>
      </div>
    </footer>
  );
}
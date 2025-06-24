'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function WaveBackground() {
  const morphRef = useRef(null);
  const driftRef = useRef(null);
  const containerRef = useRef(null);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    import('animejs').then((mod) => {
      const anime = mod.default || mod;
      if (!morphRef.current || !driftRef.current) return;

      // ✨ Slide-up entrance animation only on main page
      if (pathname === '/') {
        anime({
          targets: containerRef.current,
          translateY: [80, 0],
          opacity: [0, 1],
          duration: 1200,
          easing: 'easeOutExpo',
        });
      }

      // Wave morphing animation
      const crestA = 'M0,100 C480,20 960,180 1440,100 L1440,160 L0,160 Z';
      const crestB = 'M0,100 C480,180 960,20 1440,100 L1440,160 L0,160 Z';
      const troughA = 'M0,120 C480,40 960,200 1440,120 L1440,160 L0,160 Z';
      const troughB = 'M0,120 C480,200 960,40 1440,120 L1440,160 L0,160 Z';

      const topWave = anime.timeline({ loop: true, easing: 'easeInOutSine' });
      topWave
        .add({ targets: morphRef.current, d: [{ value: crestA }], duration: 0 })
        .add({ targets: morphRef.current, d: [{ value: crestB }], duration: 1750 })
        .add({ targets: morphRef.current, d: [{ value: crestA }], duration: 1750 });

      const lowerWave = anime.timeline({ loop: true, easing: 'easeInOutSine', delay: 875 });
      lowerWave
        .add({ targets: driftRef.current.querySelectorAll('path'), d: [{ value: troughA }], duration: 0 })
        .add({ targets: driftRef.current.querySelectorAll('path'), d: [{ value: troughB }], duration: 1750 })
        .add({ targets: driftRef.current.querySelectorAll('path'), d: [{ value: troughA }], duration: 1750 });

      anime({
        targets: driftRef.current,
        keyframes: [
          { translateX: '0%' },
          { translateX: '-50%' },
          { translateX: '0%' },
        ],
        duration: 15000,
        easing: 'linear',
        loop: true,
      });
    });
  }, [pathname]);

  const makeBubbleStyle = () => {
    const size = 4 + Math.random() * 4;
    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 6;
    const delay = -Math.random() * duration;
    const drift = (Math.random() - 0.5) * 40;

    return {
      '--size': `${size}px`,
      '--left': `${left}%`,
      '--duration': `${duration}s`,
      '--delay': `${delay}s`,
      '--drift': `${drift}px`,
    };
  };

  return (
    <div ref={containerRef} className="wave-bg">
      <svg className="wave-svg" viewBox="0 0 2880 160" preserveAspectRatio="none">
        <path
          ref={morphRef}
          d="M0,100 C480,20 960,180 1440,100 L1440,160 L0,160 Z"
          fill="url(#gradA)"
          opacity="0.9"
        />
        <g ref={driftRef} opacity="0.55">
          <path
            d="M0,120 C480,40 960,200 1440,120 L1440,160 L0,160 Z"
            fill="url(#gradB)"
          />
          <path
            d="M0,120 C480,40 960,200 1440,120 L1440,160 L0,160 Z"
            fill="url(#gradB)"
            transform="translate(1440 0)"
          />
        </g>

        <defs>
          <linearGradient id="gradA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7ed9ff" />
            <stop offset="50%" stopColor="#9b86ff" />
            <stop offset="100%" stopColor="#7ed9ff" />
          </linearGradient>
          <linearGradient id="gradB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7ed9ff" />
            <stop offset="50%" stopColor="#9b86ff" />
            <stop offset="100%" stopColor="#7ed9ff" />
          </linearGradient>
        </defs>
      </svg>

      {mounted && (
        <div className="bubble-layer">
          {Array.from({ length: 60 }).map((_, i) => (
            <span key={i} className="pixel-bubble" style={makeBubbleStyle()} />
          ))}
        </div>
      )}
    </div>
  );
}

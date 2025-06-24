import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function BeveledIconAnime() {
  const shineRef = useRef(null);

  useEffect(() => {
    if (!shineRef.current) return;

anime({
  targets: shineRef.current,
  translateX: ['-150%', '250%'],  
  duration: 3500,
  easing: 'easeInOutSine',
  loop: true,
});


  }, []);

  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 100 100"
      style={{ display: 'block', margin: '40px auto' }}
    >
      {/* Base shape with gradient for bevel */}
      <defs>
        <linearGradient id="bevelGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a90e2" />
          <stop offset="50%" stopColor="#2f80ed" />
          <stop offset="100%" stopColor="#1c3fbd" />
        </linearGradient>

        {/* Shine gradient */}
        <linearGradient id="shineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main beveled rectangle */}
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="15"
        ry="15"
        fill="url(#bevelGradient)"
        stroke="#1a1a1a"
        strokeWidth="2"
        filter="drop-shadow(2px 2px 4px rgba(0,0,0,0.3))"
      />


    </svg>
  );
}

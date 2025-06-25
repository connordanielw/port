export default function BeveledCodeIcon() {
  return (
    <svg
      className="beveled-icon"
      width="120"
      height="120"
      viewBox="0 0 100 100"
      role="img"
      aria-label="Code icon"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
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

      ~
        <clipPath id="clipRect">
          <rect x="10" y="10" width="80" height="80" rx="15" ry="15" />
        </clipPath>

    
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#7e7eff" floodOpacity="0.3" />
        </filter>
      </defs>

   
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="15"
        ry="15"
        fill="url(#gradA)"
        filter="url(#shadow)"
      />

      {/* Shine effect inside clipped rect */}
      <rect
        x="-40"
        y="10"
        width="40"
        height="80"
        fill="url(#gradB)"
        clipPath="url(#clipRect)"
        style={{ mixBlendMode: 'screen' }}
        className="shine"
      />

      {/* Code arrows, properly sized and positioned */}
      <path
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M34 63 L44 53 L34 43"
      />
      <path
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M66 43 L56 53 L66 63"
      />
    </svg>
  );
}

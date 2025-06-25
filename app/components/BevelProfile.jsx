export default function BeveledProfileIcon() {
  return (
    <svg
      className="beveled-icon"
      width="120"
      height="120"
      viewBox="0 0 100 100"
      role="img"
      aria-label="Profile icon"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
   
        <linearGradient id="gradA" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#7ed9ff" />
          <stop offset="50%"  stopColor="#9b86ff" />
          <stop offset="100%" stopColor="#7ed9ff" />
        </linearGradient>
        <linearGradient id="gradB" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#7ed9ff" />
          <stop offset="50%"  stopColor="#9b86ff" />
          <stop offset="100%" stopColor="#7ed9ff" />
        </linearGradient>

      
        <clipPath id="clipRect">
          <rect x="10" y="10" width="80" height="80" rx="15" ry="15" />
        </clipPath>

    
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="4"
            floodColor="#7e7eff"
            floodOpacity="0.3"
          />
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

 
    
      <circle cx="50" cy="44" r="10" fill="white" />
     
      <path
        d="M35 70c0-8 7-15 15-15s15 7 15 15v5H35v-5z"
        fill="white"
      />
    </svg>
  );
}

export default function ADHDBrainIllustration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ display: 'block' }}
    >
      <defs>
        {/* Background */}
        <radialGradient id="bgGrad" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#1e4f96" />
          <stop offset="100%" stopColor="#0a1f3c" />
        </radialGradient>

        {/* Brain fill — lit from top-left */}
        <linearGradient id="brainFill" x1="15%" y1="10%" x2="90%" y2="95%">
          <stop offset="0%" stopColor="#34d9a0" />
          <stop offset="45%" stopColor="#0dab6b" />
          <stop offset="100%" stopColor="#075c3a" />
        </linearGradient>

        {/* Brain shadow */}
        <linearGradient id="brainShad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#043d28" />
          <stop offset="100%" stopColor="#021f14" />
        </linearGradient>

        {/* Specular highlight on brain */}
        <radialGradient id="brainHighlight" cx="32%" cy="28%" r="40%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Clipboard */}
        <linearGradient id="docGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dff0ea" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Drop shadow */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#000" floodOpacity="0.28" />
        </filter>

        {/* Subtle shadow for small elements */}
        <filter id="shadowSm" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* ── Dark navy background ── */}
      <circle cx="150" cy="150" r="149" fill="url(#bgGrad)" />

      {/* Subtle dot grid on background */}
      <g opacity="0.07">
        {[30,60,90,120,150,180,210,240,270].map(x =>
          [30,60,90,120,150,180,210,240,270].map(y => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill="white" />
          ))
        )}
      </g>

      {/* Dashed orbit rings */}
      <ellipse cx="150" cy="132" rx="84" ry="76"
        stroke="rgba(255,204,0,0.13)" strokeWidth="1" fill="none" strokeDasharray="4 7" />
      <ellipse cx="150" cy="132" rx="100" ry="92"
        stroke="rgba(13,110,79,0.18)" strokeWidth="1" fill="none" strokeDasharray="2 9" />

      {/* ── BRAIN — shadow layer (3D depth) ── */}
      <path
        transform="translate(7,9)"
        d="M150,183 C127,183 104,170 92,154 C79,136 80,115 89,100
           C94,91 97,82 107,75 C115,70 125,67 136,67
           C141,62 145,58 150,58
           C155,58 159,62 164,67
           C175,67 185,70 193,75
           C203,82 206,91 211,100
           C220,115 221,136 208,154
           C196,170 173,183 150,183Z"
        fill="url(#brainShad)" opacity="0.55"
      />

      {/* ── BRAIN — main body ── */}
      <path
        d="M150,183 C127,183 104,170 92,154 C79,136 80,115 89,100
           C94,91 97,82 107,75 C115,70 125,67 136,67
           C141,62 145,58 150,58
           C155,58 159,62 164,67
           C175,67 185,70 193,75
           C203,82 206,91 211,100
           C220,115 221,136 208,154
           C196,170 173,183 150,183Z"
        fill="url(#brainFill)"
        filter="url(#shadow)"
      />

      {/* ── BRAIN — specular highlight (3D cartoon) ── */}
      <path
        d="M150,183 C127,183 104,170 92,154 C79,136 80,115 89,100
           C94,91 97,82 107,75 C115,70 125,67 136,67
           C141,62 145,58 150,58
           C155,58 159,62 164,67
           C175,67 185,70 193,75
           C203,82 206,91 211,100
           C220,115 221,136 208,154
           C196,170 173,183 150,183Z"
        fill="url(#brainHighlight)"
      />

      {/* ── BRAIN — surface grooves (sulci) ── */}
      {/* Center groove */}
      <path d="M150,63 C149,79 148,104 150,124 C152,144 151,166 150,180"
        stroke="#059155" strokeWidth="2.8" strokeLinecap="round" fill="none" opacity="0.65" />

      {/* Left hemisphere */}
      <path d="M113,78 C107,90 105,104 110,116"
        stroke="#059155" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M96,116 C92,128 93,140 99,150"
        stroke="#059155" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M130,68 C124,78 122,90 126,100"
        stroke="#059155" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.38" />

      {/* Right hemisphere */}
      <path d="M187,78 C193,90 195,104 190,116"
        stroke="#059155" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M204,116 C208,128 207,140 201,150"
        stroke="#059155" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M170,68 C176,78 178,90 174,100"
        stroke="#059155" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.38" />

      {/* Shine dot — top-left specular (hard cartoon highlight) */}
      <ellipse cx="116" cy="86" rx="18" ry="10"
        fill="white" opacity="0.22" transform="rotate(-32,116,86)" />

      {/* ── CLIPBOARD / REPORT (bottom right) ── */}
      <g transform="translate(196,162)" filter="url(#shadowSm)">
        {/* Page */}
        <rect x="0" y="10" width="54" height="66" rx="7" fill="url(#docGrad)" />
        {/* Clip */}
        <rect x="15" y="3" width="24" height="14" rx="5" fill="#FFCC00" />
        <circle cx="27" cy="10" r="3.5" fill="#e6a800" />
        {/* Check on clip */}
        <path d="M20,9 L24,13 L34,5"
          stroke="#1a3c6e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Lines */}
        {[28,37,46,55,64].map((y, i) => (
          <line key={y} x1="8" y1={y} x2={i % 2 === 0 ? 46 : 38} y2={y}
            stroke="#0d6e4f" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        ))}
      </g>

      {/* ── MAGNIFYING GLASS (bottom left) ── */}
      <g transform="translate(40,178)" filter="url(#shadowSm)">
        {/* Glass ring */}
        <circle cx="23" cy="23" r="20" fill="rgba(13,110,79,0.3)" stroke="#FFCC00" strokeWidth="3.5" />
        {/* Interior reflection */}
        <path d="M14,16 C17,10 24,8 30,12"
          stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Handle */}
        <line x1="37" y1="37" x2="53" y2="53"
          stroke="#FFCC00" strokeWidth="5.5" strokeLinecap="round" />
      </g>

      {/* ── LIGHTBULB (top center, floating) ── */}
      <g transform="translate(150,28)" filter="url(#glow)">
        <circle cx="0" cy="0" r="13" fill="#FFCC00" opacity="0.95" />
        <ellipse cx="0" cy="-1" rx="7" ry="7" fill="#f0b800" opacity="0.5" />
        <line x1="-5" y1="9" x2="5" y2="9" stroke="#e6a800" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="-3.5" y1="12.5" x2="3.5" y2="12.5" stroke="#e6a800" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* ── SPARKLE STARS ── */}
      {/* Top-left — large yellow */}
      <g transform="translate(48,54)" filter="url(#glow)">
        <path d="M0,-11 L2.2,-2.2 L11,0 L2.2,2.2 L0,11 L-2.2,2.2 L-11,0 L-2.2,-2.2Z"
          fill="#FFCC00" opacity="0.92" />
      </g>
      {/* Top-right — orange */}
      <g transform="translate(244,68)">
        <path d="M0,-8 L1.6,-1.6 L8,0 L1.6,1.6 L0,8 L-1.6,1.6 L-8,0 L-1.6,-1.6Z"
          fill="#e66926" opacity="0.85" />
      </g>
      {/* Right — small yellow */}
      <g transform="translate(263,148)">
        <path d="M0,-6 L1.2,-1.2 L6,0 L1.2,1.2 L0,6 L-1.2,1.2 L-6,0 L-1.2,-1.2Z"
          fill="#FFCC00" opacity="0.72" />
      </g>
      {/* Bottom-left — green */}
      <g transform="translate(35,228)">
        <path d="M0,-7 L1.4,-1.4 L7,0 L1.4,1.4 L0,7 L-1.4,1.4 L-7,0 L-1.4,-1.4Z"
          fill="#34d9a0" opacity="0.78" />
      </g>

      {/* Decorative floating dots */}
      <circle cx="52" cy="148" r="3.5" fill="#FFCC00" opacity="0.42" />
      <circle cx="250" cy="106" r="2.8" fill="#e66926" opacity="0.5" />
      <circle cx="256" cy="214" r="4.2" fill="#0d6e4f" opacity="0.38" />
      <circle cx="42" cy="254" r="3" fill="#FFCC00" opacity="0.35" />
      <circle cx="68" cy="70" r="2" fill="white" opacity="0.28" />
      <circle cx="238" cy="196" r="2.5" fill="white" opacity="0.22" />
    </svg>
  );
}

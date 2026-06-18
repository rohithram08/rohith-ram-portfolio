export function AnimeDev() {
  return (
    <svg width="100%" viewBox="0 0 680 820" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated developer character">
      <defs>
        <style>{`
          .ad-float { animation: adFloat 3.5s ease-in-out infinite; transform-origin: 340px 400px; }
          @keyframes adFloat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
          .ad-blink { animation: adBlink 3.5s step-end infinite; transform-origin: 340px 285px; }
          @keyframes adBlink { 0%,90%,100% { transform: scaleY(1); } 95% { transform: scaleY(0.05); } }
          .ad-cursor { animation: adCursor 0.8s step-end infinite; }
          @keyframes adCursor { 0%,100% { opacity:1; } 50% { opacity:0; } }
          .ad-glow { animation: adGlow 2.5s ease-in-out infinite; }
          @keyframes adGlow { 0%,100% { opacity:0.25; } 50% { opacity:0.55; } }
          .ad-b1 { animation: adPop 0.5s 0.3s cubic-bezier(.34,1.56,.64,1) both; transform-origin: 140px 220px; }
          .ad-b2 { animation: adPop 0.5s 0.7s cubic-bezier(.34,1.56,.64,1) both; transform-origin: 540px 190px; }
          .ad-b3 { animation: adPop 0.5s 1.1s cubic-bezier(.34,1.56,.64,1) both; transform-origin: 120px 340px; }
          .ad-b4 { animation: adPop 0.5s 1.5s cubic-bezier(.34,1.56,.64,1) both; transform-origin: 564px 350px; }
          .ad-b5 { animation: adPop 0.5s 1.9s cubic-bezier(.34,1.56,.64,1) both; transform-origin: 128px 470px; }
          @keyframes adPop { from { opacity:0; transform:scale(0.4); } to { opacity:1; transform:scale(1); } }
          .ad-c1 { animation: adSlide 0.4s 0.1s ease both; }
          .ad-c2 { animation: adSlide 0.4s 0.35s ease both; }
          .ad-c3 { animation: adSlide 0.4s 0.6s ease both; }
          .ad-c4 { animation: adSlide 0.4s 0.85s ease both; }
          @keyframes adSlide { from { opacity:0; transform:translateX(-8px); } to { opacity:1; transform:translateX(0); } }
          .ad-screen { animation: adScreen 2s ease-in-out infinite alternate; }
          @keyframes adScreen { from { fill:#1e1b4b; } to { fill:#2d2a6e; } }
        `}</style>
      </defs>

      {/* Ambient glow ring */}
      <circle className="ad-glow" cx="340" cy="310" r="92" fill="none" stroke="#6366f1" strokeWidth="1.5"/>

      {/* ── Floating character group ── */}
      <g className="ad-float">

        {/* Shadow */}
        <ellipse cx="340" cy="582" rx="52" ry="8" fill="#6366f1" opacity="0.13"/>

        {/* Legs */}
        <path d="M275 570 L270 650 Q268 665 280 668 L308 668 Q316 665 316 650 L320 575 Z" fill="#111827" stroke="#374151" strokeWidth="0.8"/>
        <path d="M405 570 L410 650 Q412 665 400 668 L372 668 Q364 665 364 650 L360 575 Z" fill="#111827" stroke="#374151" strokeWidth="0.8"/>
        {/* Shoes */}
        <ellipse cx="294" cy="668" rx="28" ry="10" fill="#1f2937"/>
        <ellipse cx="386" cy="668" rx="28" ry="10" fill="#1f2937"/>
        <ellipse cx="286" cy="665" rx="10" ry="4" fill="#374151" opacity="0.7"/>
        <ellipse cx="378" cy="665" rx="10" ry="4" fill="#374151" opacity="0.7"/>

        {/* Hoodie */}
        <path d="M268 420 Q260 440 255 490 Q252 530 255 570 L425 570 Q428 530 425 490 Q420 440 412 420 Z" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1"/>
        <rect x="305" y="490" width="70" height="45" rx="4" fill="#16145c" stroke="#4338ca" strokeWidth="0.8"/>
        <line x1="340" y1="420" x2="340" y2="490" stroke="#4338ca" strokeWidth="1.2"/>
        {/* Sleeves */}
        <path d="M268 420 Q248 435 238 460 Q230 478 238 490 Q248 500 260 492 Q268 476 272 455 Z" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1"/>
        <path d="M412 420 Q432 435 442 460 Q450 478 442 490 Q432 500 420 492 Q412 476 408 455 Z" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1"/>
        {/* Hands */}
        <ellipse cx="238" cy="496" rx="14" ry="11" fill="#c8a882"/>
        <ellipse cx="442" cy="496" rx="14" ry="11" fill="#c8a882"/>

        {/* Collar */}
        <path d="M316 390 Q325 400 340 402 Q355 400 364 390 L370 378 Q355 385 340 386 Q325 385 310 378 Z" fill="#1e1b4b" stroke="#4338ca" strokeWidth="0.8"/>

        {/* Neck */}
        <rect x="325" y="378" width="30" height="28" rx="6" fill="#c8a882"/>

        {/* Head */}
        <path d="M290 270 Q288 220 310 200 Q325 190 340 189 Q355 190 370 200 Q392 220 390 270 Q390 320 375 345 Q360 365 340 368 Q320 365 305 345 Q290 320 290 270 Z" fill="#c8a882" stroke="#a0785a" strokeWidth="0.8"/>

        {/* Hair */}
        <path d="M288 265 Q282 210 305 193 Q320 183 340 181 Q360 183 375 193 Q398 210 392 265" fill="#1a0a02"/>
        <path d="M295 240 Q288 195 315 182 Q330 175 340 174 Q352 175 368 182 Q390 196 385 242" fill="#1a0a02"/>
        <path d="M290 250 Q282 228 294 215 Q302 205 295 198 Q284 208 280 225 Q277 242 284 258 Z" fill="#1a0a02"/>
        <path d="M390 250 Q398 228 386 215 Q378 205 385 198 Q396 208 400 225 Q403 242 396 258 Z" fill="#1a0a02"/>
        <path d="M308 182 Q304 170 314 165 Q322 162 320 172 Q316 178 312 182 Z" fill="#1a0a02"/>
        <path d="M340 178 Q337 166 345 163 Q352 162 350 172 Q346 178 342 178 Z" fill="#1a0a02"/>
        <path d="M368 183 Q372 170 362 166 Q355 163 357 173 Q360 179 365 183 Z" fill="#1a0a02"/>
        <path d="M330 200 Q335 188 340 192 Q345 188 350 200" fill="none" stroke="#1a0a02" strokeWidth="3"/>

        {/* Eyes */}
        <g className="ad-blink">
          <ellipse cx="316" cy="285" rx="16" ry="14" fill="white" stroke="#8b6914" strokeWidth="0.8"/>
          <ellipse cx="364" cy="285" rx="16" ry="14" fill="white" stroke="#8b6914" strokeWidth="0.8"/>
          <ellipse cx="316" cy="287" rx="10" ry="11" fill="#3730a3"/>
          <ellipse cx="364" cy="287" rx="10" ry="11" fill="#3730a3"/>
          <ellipse cx="317" cy="288" rx="5.5" ry="6.5" fill="#0f0a1e"/>
          <ellipse cx="365" cy="288" rx="5.5" ry="6.5" fill="#0f0a1e"/>
          <ellipse cx="320" cy="283" rx="3" ry="3.5" fill="white" opacity="0.95"/>
          <ellipse cx="313" cy="291" rx="1.5" ry="1.5" fill="white" opacity="0.6"/>
          <ellipse cx="368" cy="283" rx="3" ry="3.5" fill="white" opacity="0.95"/>
          <ellipse cx="361" cy="291" rx="1.5" ry="1.5" fill="white" opacity="0.6"/>
          <path d="M300 278 Q316 271 332 278" fill="none" stroke="#1a0a02" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M348 278 Q364 271 380 278" fill="none" stroke="#1a0a02" strokeWidth="2.5" strokeLinecap="round"/>
        </g>

        {/* Eyebrows */}
        <path d="M300 268 Q314 262 328 265" fill="none" stroke="#1a0a02" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M352 265 Q366 262 380 268" fill="none" stroke="#1a0a02" strokeWidth="2.5" strokeLinecap="round"/>

        {/* Nose */}
        <path d="M336 305 Q340 310 344 305" fill="none" stroke="#a0785a" strokeWidth="1.2" strokeLinecap="round"/>

        {/* Mouth */}
        <path d="M324 328 Q332 334 340 332 Q350 330 356 325" fill="none" stroke="#8b5c3a" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Ears */}
        <ellipse cx="289" cy="295" rx="7" ry="9" fill="#c8a882" stroke="#a0785a" strokeWidth="0.6"/>
        <ellipse cx="291" cy="295" rx="3.5" ry="5" fill="#b8916e" opacity="0.5"/>
        <ellipse cx="391" cy="295" rx="7" ry="9" fill="#c8a882" stroke="#a0785a" strokeWidth="0.6"/>
        <ellipse cx="389" cy="295" rx="3.5" ry="5" fill="#b8916e" opacity="0.5"/>

        {/* Laptop */}
        <g transform="translate(0,8)">
          <rect x="258" y="470" width="164" height="88" rx="5" fill="#111827" stroke="#374151" strokeWidth="0.8"/>
          <rect className="ad-screen" x="264" y="475" width="152" height="76" rx="3"/>
          <text x="272" y="492" fontFamily="monospace" fontSize="7" fill="#818cf8" className="ad-c1">const rohith = {'{'}</text>
          <text x="272" y="503" fontFamily="monospace" fontSize="7" fill="#34d399" className="ad-c2">{'  '}role: "Developer",</text>
          <text x="272" y="514" fontFamily="monospace" fontSize="7" fill="#34d399" className="ad-c3">{'  '}lang: "Python|React",</text>
          <text x="272" y="525" fontFamily="monospace" fontSize="7" fill="#818cf8" className="ad-c4">{'}'}</text>
          <rect className="ad-cursor" x="297" y="529" width="5" height="8" fill="#818cf8" rx="1"/>
          <rect x="250" y="555" width="180" height="22" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="0.8"/>
          <line x1="258" y1="556" x2="422" y2="556" stroke="#374151" strokeWidth="1"/>
          <rect x="318" y="563" width="44" height="10" rx="3" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
        </g>
      </g>

      {/* ── Skill badges ── */}
      <g className="ad-b1">
        <rect x="78" y="198" width="80" height="28" rx="14" fill="#3730a3" stroke="#6366f1" strokeWidth="1"/>
        <circle cx="96" cy="212" r="7" fill="#fbbf24"/>
        <text x="108" y="216" fontFamily="monospace" fontSize="10" fill="#e0e7ff" fontWeight="500">Python</text>
      </g>
      <g className="ad-b2">
        <rect x="496" y="168" width="78" height="28" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="1"/>
        <circle cx="514" cy="182" r="7" fill="#38bdf8"/>
        <text x="526" y="186" fontFamily="monospace" fontSize="10" fill="#bae6fd" fontWeight="500">React</text>
      </g>
      <g className="ad-b3">
        <rect x="55" y="322" width="86" height="28" rx="14" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
        <circle cx="73" cy="336" r="7" fill="#10b981"/>
        <text x="86" y="340" fontFamily="monospace" fontSize="10" fill="#a7f3d0" fontWeight="500">FastAPI</text>
      </g>
      <g className="ad-b4">
        <rect x="514" y="332" width="62" height="28" rx="14" fill="#451a03" stroke="#f97316" strokeWidth="1"/>
        <circle cx="531" cy="346" r="7" fill="#f97316"/>
        <text x="543" y="350" fontFamily="monospace" fontSize="10" fill="#fed7aa" fontWeight="500">AWS</text>
      </g>
      <g className="ad-b5">
        <rect x="52" y="452" width="92" height="28" rx="14" fill="#1e1a3c" stroke="#a78bfa" strokeWidth="1"/>
        <text x="70" y="464" fontFamily="serif" fontSize="11" fill="#c4b5fd">日</text>
        <text x="86" y="466" fontFamily="monospace" fontSize="10" fill="#c4b5fd" fontWeight="500">JLPT N4</text>
      </g>

      {/* Dashed connector lines */}
      <line x1="158" y1="212" x2="268" y2="310" stroke="#6366f1" strokeWidth="0.6" strokeDasharray="4,4" opacity="0.4"/>
      <line x1="496" y1="182" x2="390" y2="290" stroke="#38bdf8" strokeWidth="0.6" strokeDasharray="4,4" opacity="0.4"/>
      <line x1="141" y1="336" x2="268" y2="360" stroke="#10b981" strokeWidth="0.6" strokeDasharray="4,4" opacity="0.4"/>
      <line x1="514" y1="346" x2="412" y2="370" stroke="#f97316" strokeWidth="0.6" strokeDasharray="4,4" opacity="0.4"/>
      <line x1="144" y1="466" x2="270" y2="450" stroke="#a78bfa" strokeWidth="0.6" strokeDasharray="4,4" opacity="0.4"/>

      {/* Name tag */}
      <rect x="240" y="720" width="200" height="48" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1"/>
      <text x="340" y="741" fontFamily="'DM Serif Display', Georgia, serif" fontSize="15" fill="#e0e7ff" textAnchor="middle" fontWeight="500">Rohith Ram H</text>
      <text x="340" y="758" fontFamily="monospace" fontSize="9" fill="#818cf8" textAnchor="middle">Full-Stack Developer · JLPT N4</text>
    </svg>
  );
}
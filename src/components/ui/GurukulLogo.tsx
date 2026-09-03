import React from 'react';
import Link from 'next/link';

interface GurukulLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const GurukulLogo: React.FC<GurukulLogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
}) => {
  const isDark = variant === 'dark';

  const logoSizeMap = {
    sm: { icon: 28, text: 'text-lg', tagline: 'text-[9px]' },
    md: { icon: 38, text: 'text-2xl', tagline: 'text-[10px]' },
    lg: { icon: 48, text: 'text-3xl', tagline: 'text-xs' },
  };

  const currentSize = logoSizeMap[size];

  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group select-none">
      {/* Golden Wreath / Crest Icon */}
      <div className="relative flex items-center justify-center">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Outer Laurel Leaves */}
          <path
            d="M8 22C8 14.268 14.268 8 22 8M36 22C36 14.268 29.732 8 22 8"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M8 22C8 29.732 14.268 36 22 36M36 22C36 29.732 29.732 36 22 36"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Leaves Details */}
          <path
            d="M6 16C9 16 11 14 11 11M6 28C9 28 11 30 11 33M38 16C35 16 33 14 33 11M38 28C35 28 33 30 33 33"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Inner Flame / Wisdom Lamp / Torch */}
          <path
            d="M22 13C22 13 25 17 25 20C25 21.6569 23.6569 23 22 23C20.3431 23 19 21.6569 19 20C19 17 22 13 22 13Z"
            fill="url(#flameGradient)"
          />
          <path
            d="M22 23V29M17 29H27"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="6" y1="8" x2="38" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="0.5" stopColor="#D97706" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="flameGradient" x1="19" y1="13" x2="25" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-black tracking-wider uppercase font-heading ${currentSize.text} ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          GURUKUL
        </span>
        {showTagline && (
          <span
            className={`font-medium tracking-wide uppercase ${currentSize.tagline} ${
              isDark ? 'text-amber-400/90' : 'text-amber-600'
            }`}
          >
            Learn. Build. Get Hired.
          </span>
        )}
      </div>
    </Link>
  );
};

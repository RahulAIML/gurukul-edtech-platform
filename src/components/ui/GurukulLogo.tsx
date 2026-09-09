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
    sm: { icon: 30, text: 'text-lg', tagline: 'text-[9px]' },
    md: { icon: 40, text: 'text-2xl', tagline: 'text-[10px]' },
    lg: { icon: 50, text: 'text-3xl', tagline: 'text-xs' },
  };

  const currentSize = logoSizeMap[size];

  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group select-none">
      {/* Graduation Cap Mark */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Cap board (top diamond) */}
          <path
            d="M22 8L40 17L22 26L4 17L22 8Z"
            fill="url(#capGradient)"
          />
          {/* Cap band / head */}
          <path
            d="M13 20.5V28C13 28 16 32 22 32C28 32 31 28 31 28V20.5L22 25L13 20.5Z"
            fill="url(#capGradientDark)"
          />
          {/* Tassel string */}
          <path
            d="M37 18.5V26.5"
            stroke="url(#capGradient)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Tassel bead */}
          <circle cx="37" cy="28.5" r="2.2" fill="url(#capGradientDark)" />
          <defs>
            <linearGradient id="capGradient" x1="4" y1="8" x2="40" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EF4444" />
              <stop offset="1" stopColor="#B91C1C" />
            </linearGradient>
            <linearGradient id="capGradientDark" x1="13" y1="20.5" x2="31" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DC2626" />
              <stop offset="1" stopColor="#7F1D1D" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-wider uppercase font-heading ${currentSize.text} ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          GURUKUL
        </span>
        {showTagline && (
          <span
            className={`font-semibold tracking-[0.1em] uppercase mt-0.5 whitespace-nowrap ${currentSize.tagline} ${
              isDark ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Learn &middot; Build &middot; Grow
          </span>
        )}
      </div>
    </Link>
  );
};

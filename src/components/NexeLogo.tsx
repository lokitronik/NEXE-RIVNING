import React, { useState } from 'react';

interface NexeLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const NexeLogo: React.FC<NexeLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
}) => {
  const isLight = variant === 'light';
  const basePath = import.meta.env.BASE_URL || './';
  const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const [currentSrc, setCurrentSrc] = useState<string>(
    isLight ? `${cleanBase}logo-white.svg` : `${cleanBase}logo.png`
  );
  const [useFallbackSvg, setUseFallbackSvg] = useState(false);

  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  const handleImgError = () => {
    if (!isLight && currentSrc === `${cleanBase}logo.png`) {
      // If logo.png isn't available, fall back to vector logo.svg
      setCurrentSrc(`${cleanBase}logo.svg`);
    } else {
      // If SVG image also fails, render inline vector SVG
      setUseFallbackSvg(true);
    }
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      {!useFallbackSvg ? (
        <img
          src={currentSrc}
          alt="NEXE RIVNING"
          className={`${heights[size]} w-auto object-contain transition-transform duration-200`}
          onError={handleImgError}
        />
      ) : (
        <svg
          viewBox="0 0 350 120"
          className={`${heights[size]} w-auto`}
          aria-label="NEXE RIVNING"
        >
          <defs>
            <linearGradient id={`silverRing-${variant}`} x1="15%" y1="15%" x2="85%" y2="85%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="20%" stopColor={isLight ? '#E2E8F0' : '#D1D5DB'} />
              <stop offset="40%" stopColor={isLight ? '#94A3B8' : '#9CA3AF'} />
              <stop offset="55%" stopColor="#F8FAFC" />
              <stop offset="70%" stopColor={isLight ? '#94A3B8' : '#9CA3AF'} />
              <stop offset="85%" stopColor={isLight ? '#64748B' : '#6B7280'} />
              <stop offset="100%" stopColor={isLight ? '#CBD5E1' : '#E5E7EB'} />
            </linearGradient>
            <linearGradient id={`spearUpper-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9CA3AF" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
            <linearGradient id={`spearLower-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4B5563" />
              <stop offset="50%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#6B7280" />
            </linearGradient>
            <linearGradient id={`xFacet-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D1D5DB" />
              <stop offset="100%" stopColor="#6B7280" />
            </linearGradient>
          </defs>

          <g transform="translate(65, 60)">
            <circle cx="0" cy="0" r="37.5" fill={isLight ? '#0D3B66' : '#002B49'} />
            <circle
              cx="0"
              cy="0"
              r="43.5"
              fill="none"
              stroke={`url(#silverRing-${variant})`}
              strokeWidth="8"
            />
            <polygon points="-58,58 -2,-2 58,-58 -1,-3" fill={`url(#spearUpper-${variant})`} />
            <polygon points="-58,58 58,-58 2,2" fill={`url(#spearLower-${variant})`} />
            <line x1="-58" y1="58" x2="58" y2="-58" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Letter N */}
          <path d="M 136 63 L 136 24 L 148 24 L 163 47 L 163 24 L 173 24 L 173 63 L 161 63 L 146 40 L 146 63 Z" fill={isLight ? '#FFFFFF' : '#002B49'} />

          {/* Letter E */}
          <path d="M 183 24 L 213 24 L 213 32 L 193 32 L 193 39 L 209 39 L 209 47 L 193 47 L 193 55 L 213 55 L 213 63 L 183 63 Z" fill={isLight ? '#FFFFFF' : '#002B49'} />

          {/* Metallic X */}
          <g transform="translate(220, 24)">
            <polygon points="0,0 12,0 19,19.5 7,19.5" fill={`url(#xFacet-${variant})`} />
            <polygon points="26,0 38,0 31,19.5 19,19.5" fill={`url(#xFacet-${variant})`} />
            <polygon points="0,39 12,39 19,19.5 7,19.5" fill={`url(#xFacet-${variant})`} />
            <polygon points="26,39 38,39 31,19.5 19,19.5" fill={`url(#xFacet-${variant})`} />
            <circle cx="19" cy="19.5" r="9" fill="#FFFFFF" opacity="0.8" />
          </g>

          {/* Letter E */}
          <path d="M 268 24 L 298 24 L 298 32 L 278 32 L 278 39 L 294 39 L 294 47 L 278 47 L 278 55 L 298 55 L 298 63 L 268 63 Z" fill={isLight ? '#FFFFFF' : '#002B49'} />

          {/* RIVNING */}
          <g
            fontFamily="'Space Grotesk', 'Arial Black', -apple-system, sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="3.2"
          >
            <text x="136" y="97" fill={isLight ? '#FFFFFF' : '#002B49'}>RIVNING</text>
          </g>
        </svg>
      )}
    </div>
  );
};


import React from 'react';

interface ToothLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  light?: boolean;
}

export const ToothLogo: React.FC<ToothLogoProps> = ({
  className = '',
  size = 36,
  showText = false,
  light = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Minimalist Tooth Mark with Gold Accent & Gradient */}
      <div
        className="relative flex items-center justify-center shrink-0 rounded-xl p-2 transition-transform duration-300 hover:scale-105"
        style={{
          width: size + 8,
          height: size + 8,
          background: light
            ? 'linear-gradient(135deg, #0F2744 0%, #081628 100%)'
            : 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
          border: light ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(2,132,199,0.15)',
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Tooth Crown & Roots */}
          <path
            d="M8.5 7C5 11 5 16 6.5 21C7.5 24.5 9 27 11 27C12.5 27 13.5 24 14.5 20C15 18 17 18 17.5 20C18.5 24 19.5 27 21 27C23 27 24.5 24.5 25.5 21C27 16 27 11 23.5 7C20.5 3.5 17.5 4.5 16 5.5C14.5 4.5 11.5 3.5 8.5 7Z"
            fill={light ? '#38BDF8' : '#0B1B3D'}
            stroke={light ? '#E0F2FE' : '#0284C7'}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Subtle Heart / Smile Inner Contour */}
          <path
            d="M12 11C13.5 12.5 14.8 13.5 16 13.5C17.2 13.5 18.5 12.5 20 11"
            stroke={light ? '#FFFFFF' : '#0284C7'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Subtle Soft Gold Sparkle Accent */}
          <path
            d="M21.5 6L22.2 4.5L23.7 3.8L22.2 3.1L21.5 1.6L20.8 3.1L19.3 3.8L20.8 4.5L21.5 6Z"
            fill="#D4AF37"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-display text-lg font-bold tracking-tight leading-tight ${
              light ? 'text-white' : 'text-slate-900'
            }`}
          >
            Hina Khan Dental Care
          </span>
          <span
            className={`text-xs font-medium tracking-wide ${
              light ? 'text-slate-400' : 'text-sky-700'
            }`}
          >
            Healthy Smiles, Confident Lives
          </span>
        </div>
      )}
    </div>
  );
};

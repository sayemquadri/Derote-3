import React from 'react';

interface MotifProps {
  name: string;
  className?: string;
  accent?: 'forest' | 'citrus' | 'coral' | 'paper';
}

export const SituationMotif: React.FC<MotifProps> = ({ name, className = 'w-7 h-7 sm:w-8 sm:h-8', accent = 'forest' }) => {
  const getColors = () => {
    switch (accent) {
      case 'citrus':
        return { bg: '#F1FCC9', stroke: '#245847', highlight: '#D8F36A', secondary: '#7E941C' };
      case 'coral':
        return { bg: '#FCF1ED', stroke: '#245847', highlight: '#E78667', secondary: '#C45B3A' };
      case 'forest':
      default:
        return { bg: '#EAF2EE', stroke: '#245847', highlight: '#32735E', secondary: '#D8F36A' };
    }
  };

  const { bg, stroke, highlight, secondary } = getColors();

  switch (name) {
    case 'compass':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <circle cx="18" cy="18" r="16" fill={bg} />
          <circle cx="18" cy="18" r="11" stroke={stroke} strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M18 10L21 16L27 18L21 20L18 26L15 20L9 18L15 16L18 10Z" fill={highlight} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" />
          <circle cx="18" cy="18" r="2" fill={stroke} />
        </svg>
      );
    case 'balance':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="36" height="36" rx="10" fill={bg} />
          <path d="M18 7V29" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
          <path d="M9 13H27" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 13L6 20H12L9 13Z" fill={highlight} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M27 13L24 21H30L27 13Z" fill={secondary} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M13 29H23" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'spark':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="36" height="36" rx="10" fill={bg} />
          <path d="M18 6C18 12.6274 23.3726 18 30 18C23.3726 18 18 23.3726 18 30C18 23.3726 12.6274 18 6 18C12.6274 18 18 12.6274 18 6Z" fill={highlight} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="18" cy="18" r="3" fill="#FFFFFF" stroke={stroke} strokeWidth="1.2" />
        </svg>
      );
    case 'waves':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="36" height="36" rx="10" fill={bg} />
          <path d="M7 13C10.5 10 13.5 16 18 13C22.5 10 25.5 16 29 13" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
          <path d="M7 19C10.5 16 13.5 22 18 19C22.5 16 25.5 22 29 19" stroke={secondary} strokeWidth="1.75" strokeLinecap="round" />
          <path d="M7 25C10.5 22 13.5 28 18 25C22.5 22 25.5 28 29 25" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeDasharray="1.5 2" />
        </svg>
      );
    case 'hourglass':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="36" height="36" rx="10" fill={bg} />
          <path d="M10 9H26M10 27H26" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
          <path d="M11 9L18 18L11 27" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M25 9L18 18L25 27" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 25C14 23.5 16 21 18 21C20 21 22 23.5 22 25H14Z" fill={highlight} stroke={stroke} strokeWidth="1" />
          <circle cx="18" cy="14" r="1.5" fill={stroke} />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="36" height="36" rx="10" fill={bg} />
          <path d="M18 8L29 14L18 20L7 14L18 8Z" fill={highlight} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7 19L18 25L29 19" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 24L18 30L29 24" stroke={secondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'mirror':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="36" height="36" rx="10" fill={bg} />
          <circle cx="15" cy="18" r="8" stroke={stroke} strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="21" cy="18" r="8" fill={highlight} fillOpacity="0.6" stroke={stroke} strokeWidth="1.5" />
          <line x1="18" y1="10" x2="18" y2="26" stroke={secondary} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case 'seedling':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="36" height="36" rx="10" fill={bg} />
          <path d="M18 28V16" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" />
          <path d="M18 16C18 11.5817 21.5817 8 26 8C26 12.4183 22.4183 16 18 16Z" fill={highlight} stroke={stroke} strokeWidth="1.2" />
          <path d="M18 20C18 16.6863 15.3137 14 12 14C12 17.3137 14.6863 20 18 20Z" fill={secondary} stroke={stroke} strokeWidth="1.2" />
          <path d="M10 28H26" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'path':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="36" height="36" rx="10" fill={bg} />
          <path d="M10 27C12 21 24 23 25 17C26 11 17 11 17 7" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
          <circle cx="10" cy="27" r="2.5" fill={highlight} stroke={stroke} strokeWidth="1.2" />
          <circle cx="17" cy="7" r="3.5" fill={secondary} stroke={stroke} strokeWidth="1.2" />
        </svg>
      );
    case 'lens':
      return (
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="36" height="36" rx="10" fill={bg} />
          <circle cx="16" cy="16" r="9" stroke={stroke} strokeWidth="1.75" />
          <circle cx="16" cy="16" r="5" fill={highlight} stroke={stroke} strokeWidth="1" />
          <path d="M23 23L29 29" stroke={secondary} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <div className={`${className} rounded-lg flex items-center justify-center font-bold text-xs`} style={{ backgroundColor: bg, color: stroke }}>
          ●
        </div>
      );
  }
};

export const OfferingMotif: React.FC<{ type: 'leaf' | 'flow' | 'compass' | 'dialogue'; className?: string }> = ({
  type,
  className = 'w-10 h-10'
}) => {
  switch (type) {
    case 'leaf':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="48" height="48" rx="14" fill="#F1FCC9" />
          <path d="M24 38C24 26 36 12 36 12C36 12 24 16 16 24C10 30 14 38 24 38Z" fill="#D8F36A" stroke="#245847" strokeWidth="2" strokeLinejoin="round" />
          <path d="M24 38L27 24" stroke="#245847" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="33" cy="15" r="2" fill="#245847" />
        </svg>
      );
    case 'flow':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="48" height="48" rx="14" fill="#EAF2EE" />
          <path d="M10 18C15 14 20 22 26 18C32 14 36 22 40 18" stroke="#245847" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 26C14 22 19 30 25 26C31 22 36 30 42 26" stroke="#32735E" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M12 34C16 31 21 37 27 34C33 31 37 37 40 34" stroke="#245847" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
        </svg>
      );
    case 'compass':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="48" height="48" rx="14" fill="#FCF1ED" />
          <circle cx="24" cy="24" r="14" stroke="#245847" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="24,14 28,22 36,24 28,26 24,34 20,26 12,24 20,22" fill="#E78667" stroke="#245847" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="3" fill="#245847" />
        </svg>
      );
    case 'dialogue':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="48" height="48" rx="14" fill="#F1FCC9" />
          <path d="M12 16C12 13.7909 13.7909 12 16 12H28C30.2091 12 32 13.7909 32 16V24C32 26.2091 30.2091 28 28 28H20L14 32V28H16C13.7909 28 12 26.2091 12 24V16Z" fill="#FFFFFF" stroke="#245847" strokeWidth="2" strokeLinejoin="round" />
          <path d="M22 22H34C36.2091 22 38 23.7909 38 26V33C38 34.6569 36.6569 36 35 36H32V38L28 36H24C22.8954 36 22 35.1046 22 34V22Z" fill="#D8F36A" stroke="#245847" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="18" cy="20" r="1.5" fill="#245847" />
          <circle cx="24" cy="20" r="1.5" fill="#245847" />
        </svg>
      );
  }
};

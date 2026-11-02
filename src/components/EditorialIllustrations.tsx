import React from 'react';

interface IllustrationProps {
  name: string;
  className?: string;
}

export const EditorialIllustration: React.FC<IllustrationProps> = ({ name, className = 'w-full h-full' }) => {
  switch (name) {
    case 'family-expectations':
      // Teenager at desk looking at towering stacks of expectation blueprints/books while a warm light shines
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#FDF3EE" />
          {/* Subtle background arches */}
          <path d="M40 200V90C40 45 75 10 120 10C165 10 200 45 200 90V200" fill="#FCEDE4" />
          <path d="M220 200V120C220 85 245 60 280 60C315 60 340 85 340 120V200" fill="#F6E4DA" />
          
          {/* Desk line */}
          <line x1="20" y1="165" x2="340" y2="165" stroke="#245847" strokeWidth="3" strokeLinecap="round" />
          
          {/* Towering books of family expectations on right */}
          <rect x="235" y="145" width="70" height="18" rx="3" fill="#245847" />
          <rect x="240" y="125" width="60" height="18" rx="3" fill="#E78667" />
          <rect x="245" y="105" width="50" height="18" rx="3" fill="#D8F36A" />
          <rect x="250" y="85" width="40" height="18" rx="3" fill="#202923" />
          <path d="M270 85L270 45" stroke="#E78667" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="270,38 274,46 266,46" fill="#E78667" />

          {/* Student sitting at desk reflecting */}
          {/* Chair back */}
          <path d="M90 190V130C90 125 95 120 100 120" stroke="#202923" strokeWidth="3" strokeLinecap="round" />
          {/* Body */}
          <path d="M125 165C125 140 140 130 155 130C170 130 185 140 185 165" fill="#245847" />
          {/* Head & Thought */}
          <circle cx="155" cy="112" r="14" fill="#E78667" />
          {/* Hair */}
          <path d="M143 110C143 100 150 96 158 96C168 96 171 104 171 112C167 111 161 107 155 107C149 107 145 110 143 110Z" fill="#202923" />
          {/* Gentle sprout of own desire on left desk */}
          <path d="M85 165C85 150 95 142 105 142" stroke="#245847" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M105 142C105 135 112 130 118 135C118 142 110 145 105 142Z" fill="#D8F36A" stroke="#245847" strokeWidth="1.5" />
          {/* Warm lamp glow */}
          <circle cx="65" cy="85" r="28" fill="#D8F36A" fillOpacity="0.35" />
          <circle cx="65" cy="85" r="10" fill="#D8F36A" />
          <path d="M65 95V165" stroke="#245847" strokeWidth="2" />
        </svg>
      );

    case 'career-confusion':
      // Figure looking at branching crossroads with luminous constellation paths
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#F4F8DE" />
          {/* Rolling landscape curves */}
          <path d="M0 160C80 140 160 170 240 150C300 135 340 145 360 150V200H0V160Z" fill="#E5EFB5" />
          <path d="M0 180C100 165 200 185 360 170V200H0V180Z" fill="#245847" />

          {/* Branching trails */}
          <path d="M140 185C140 150 100 130 70 100" stroke="#245847" strokeWidth="2.5" strokeDasharray="4 4" />
          <path d="M140 185C160 140 180 120 180 75" stroke="#E78667" strokeWidth="2.5" strokeDasharray="4 4" />
          <path d="M140 185C180 160 240 140 280 90" stroke="#245847" strokeWidth="2.5" strokeDasharray="4 4" />

          {/* Destination stars/destinations */}
          <circle cx="70" cy="98" r="8" fill="#D8F36A" stroke="#245847" strokeWidth="2" />
          <circle cx="180" cy="72" r="10" fill="#E78667" stroke="#245847" strokeWidth="2" />
          <circle cx="280" cy="88" r="9" fill="#245847" />

          {/* Student standing thoughtfully */}
          <circle cx="130" cy="148" r="9" fill="#E78667" />
          <path d="M124 163C124 156 128 155 132 155C136 155 140 156 140 163V185H124V163Z" fill="#202923" />
          {/* Compass motif floating in sky */}
          <g transform="translate(265, 30)">
            <circle cx="25" cy="25" r="22" stroke="#245847" strokeWidth="1.5" strokeDasharray="2 3" fill="#FFFFFF" fillOpacity="0.8" />
            <polygon points="25,10 30,22 40,25 30,28 25,40 20,28 10,25 20,22" fill="#D8F36A" stroke="#245847" strokeWidth="1.2" />
            <circle cx="25" cy="25" r="2.5" fill="#245847" />
          </g>
        </svg>
      );

    case 'lost-motivation':
      // Figure resting chin in thought, watching an extinguished ember slowly rekindle into a green shoot
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#EAF3EE" />
          {/* Window / frame opening */}
          <rect x="200" y="25" width="125" height="145" rx="12" fill="#FFFFFF" stroke="#245847" strokeWidth="1.5" />
          <path d="M200 95H325" stroke="#245847" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M262 25V170" stroke="#245847" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="262" cy="70" r="16" fill="#D8F36A" fillOpacity="0.6" />

          {/* Quiet student figure */}
          <path d="M70 190C70 150 90 140 120 140C150 140 165 155 165 190" fill="#245847" />
          <circle cx="120" cy="115" r="16" fill="#E78667" />
          <path d="M106 112C106 100 115 95 125 95C136 95 140 104 138 114C132 112 125 110 120 110C113 110 108 112 106 112Z" fill="#202923" />
          {/* Arm propping chin */}
          <path d="M145 155L132 128" stroke="#245847" strokeWidth="4" strokeLinecap="round" />

          {/* Sprout breaking through routine */}
          <path d="M235 155C235 135 245 125 258 125C270 125 278 135 278 155" fill="#D8F36A" stroke="#245847" strokeWidth="1.5" />
          <line x1="256" y1="125" x2="256" y2="155" stroke="#245847" strokeWidth="1.5" />
        </svg>
      );

    case 'finding-strengths':
      // Figure looking through kaleidoscope/lens discovering geometric colorful talents
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#FCEDE7" />
          {/* Circular aperture discovery elements */}
          <circle cx="230" cy="100" r="65" fill="#FFFFFF" stroke="#245847" strokeWidth="2" />
          <circle cx="230" cy="100" r="48" fill="#FDF4DE" />
          
          {/* Prismatic shapes of latent strengths */}
          <polygon points="230,65 255,100 230,135 205,100" fill="#D8F36A" stroke="#245847" strokeWidth="1.5" />
          <circle cx="230" cy="100" r="14" fill="#E78667" />
          <circle cx="210" cy="85" r="5" fill="#245847" />
          <circle cx="250" cy="115" r="6" fill="#245847" />

          {/* Student observing with curiosity */}
          <circle cx="100" cy="105" r="16" fill="#E78667" />
          <path d="M85 100C85 88 95 84 106 84C118 84 122 92 120 104C115 102 108 100 102 100C94 100 88 102 85 100Z" fill="#202923" />
          <path d="M70 190C70 145 90 135 115 135C135 135 150 145 150 190" fill="#245847" />
          {/* Hand holding lens handle */}
          <path d="M125 142L180 118" stroke="#245847" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'feeling-left-behind':
      // Distant runners on horizon while student pauses under a peaceful sheltering tree at their own pace
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#F5F9E8" />
          {/* Distant hill with figures ahead */}
          <path d="M120 135C180 110 260 120 360 95V200H120V135Z" fill="#E4EFB9" />
          
          {/* Small distant silhouettes moving fast */}
          <circle cx="270" cy="100" r="4" fill="#245847" fillOpacity="0.5" />
          <line x1="270" y1="104" x2="270" y2="114" stroke="#245847" strokeWidth="2" strokeOpacity="0.5" />
          <circle cx="310" cy="88" r="4" fill="#245847" fillOpacity="0.5" />
          <line x1="310" y1="92" x2="310" y2="102" stroke="#245847" strokeWidth="2" strokeOpacity="0.5" />

          {/* Sheltering tree on left */}
          <path d="M50 200V110C50 100 55 90 65 85" stroke="#202923" strokeWidth="5" strokeLinecap="round" />
          <circle cx="65" cy="70" r="38" fill="#245847" />
          <circle cx="85" cy="60" r="26" fill="#D8F36A" fillOpacity="0.85" />

          {/* Student seated peacefully, noticing their own path */}
          <path d="M75 190C75 165 85 155 100 155C115 155 125 165 125 190" fill="#E78667" />
          <circle cx="100" cy="140" r="11" fill="#245847" />
          <circle cx="102" cy="138" r="2" fill="#D8F36A" />
        </svg>
      );

    case 'my-voice-choices':
      // Soundwaves & botanical fronds blooming outward, expressing autonomy
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#FAF6EC" />
          {/* Radiating voice blooms */}
          <path d="M150 120C170 80 230 60 290 70" stroke="#245847" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M150 120C190 100 240 105 285 120" stroke="#E78667" strokeWidth="2" />
          <path d="M150 120C180 135 220 155 270 160" stroke="#D8F36A" strokeWidth="3" strokeLinecap="round" />

          {/* Floral leaf tags on voice rays */}
          <path d="M290 70C295 60 305 60 310 68C310 76 300 78 290 70Z" fill="#D8F36A" stroke="#245847" strokeWidth="1.2" />
          <circle cx="285" cy="120" r="8" fill="#E78667" />
          <polygon points="270,160 280,154 285,164" fill="#245847" />

          {/* Student speaking/expressing confidently */}
          <circle cx="95" cy="100" r="16" fill="#E78667" />
          <path d="M82 96C82 85 91 80 102 80C114 80 118 88 116 100C110 98 103 96 98 96C90 96 85 98 82 96Z" fill="#202923" />
          <path d="M65 190C65 145 85 130 110 130C132 130 148 145 148 190" fill="#245847" />
        </svg>
      );

    case 'struggling-concentrate':
      // Floating concentration river with drifting distraction orbs gently settling
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#EEF7F2" />
          {/* Flowing river of attention */}
          <path d="M0 130C90 90 150 160 240 120C290 95 330 130 360 110V200H0V130Z" fill="#D6EBE0" />
          <path d="M20 70C80 40 140 100 220 60C280 30 320 80 360 50" stroke="#245847" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 4" />

          {/* Distraction orbs / floating thought bubbles */}
          <circle cx="80" cy="65" r="14" fill="#FCEDE7" stroke="#E78667" strokeWidth="1.5" />
          <circle cx="250" cy="50" r="18" fill="#F4F8DE" stroke="#D8F36A" strokeWidth="2" />
          <circle cx="290" cy="85" r="9" fill="#FFFFFF" stroke="#245847" strokeWidth="1.2" />

          {/* Student centering their breath and focus */}
          <circle cx="170" cy="108" r="15" fill="#E78667" />
          <path d="M156 104C156 94 164 90 173 90C183 90 188 97 186 108C180 106 174 104 169 104C163 104 158 106 156 104Z" fill="#202923" />
          <path d="M140 190C140 145 158 135 175 135C192 135 208 145 208 190" fill="#245847" />
          {/* Grounding anchor line */}
          <line x1="175" y1="135" x2="175" y2="190" stroke="#D8F36A" strokeWidth="2" />
        </svg>
      );

    case 'disappointing-others':
      // Figure holding delicate fragile glowing star in safe protective palms
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#FDF1ED" />
          {/* Supportive architectural sheltering frame */}
          <path d="M60 200V80C60 40 110 20 180 20C250 20 300 40 300 80V200" stroke="#245847" strokeWidth="1.5" strokeDasharray="3 3" fill="#FFFFFF" fillOpacity="0.4" />
          
          {/* Student silhouette */}
          <circle cx="180" cy="90" r="16" fill="#245847" />
          <path d="M148 190C148 140 162 125 180 125C198 125 212 140 212 190" fill="#245847" />

          {/* Caring hands holding fragile glowing sphere */}
          <ellipse cx="180" cy="145" r="22" fill="#D8F36A" fillOpacity="0.5" />
          <circle cx="180" cy="145" r="12" fill="#D8F36A" stroke="#245847" strokeWidth="1.5" />
          <path d="M172 145L180 138L188 145L180 152L172 145Z" fill="#E78667" />
          <circle cx="180" cy="145" r="3" fill="#202923" />
        </svg>
      );

    case 'studying-for-marks':
      // Exam paper test scores floating away and transforming into origami birds and living leaves
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#F4F9EC" />
          {/* Heavy test papers on desk */}
          <rect x="50" y="145" width="85" height="22" rx="4" fill="#FFFFFF" stroke="#245847" strokeWidth="1.5" />
          <rect x="45" y="155" width="90" height="18" rx="4" fill="#EDEAE0" />
          <line x1="60" y1="156" x2="115" y2="156" stroke="#E78667" strokeWidth="2" />

          {/* Sheets taking flight as birds/leaves towards sun */}
          <path d="M150 130L175 110L165 140Z" fill="#FFFFFF" stroke="#245847" strokeWidth="1.2" />
          <path d="M200 95L230 75L218 110Z" fill="#D8F36A" stroke="#245847" strokeWidth="1.5" />
          <path d="M255 60L295 40L280 80Z" fill="#E78667" stroke="#245847" strokeWidth="1.5" />

          {/* Sun of authentic curiosity */}
          <circle cx="310" cy="45" r="22" fill="#D8F36A" />
          <circle cx="310" cy="45" r="32" stroke="#D8F36A" strokeWidth="1.5" strokeDasharray="2 3" />

          {/* Student looking up with a spark */}
          <circle cx="105" cy="115" r="14" fill="#E78667" />
          <path d="M92 110C92 98 100 94 112 94C122 94 126 102 124 112C118 110 112 108 107 108C100 108 95 110 92 110Z" fill="#202923" />
          <path d="M78 190C78 150 95 138 120 138C140 138 155 150 155 190" fill="#245847" />
        </svg>
      );

    case 'unsure-whats-next':
      // Figure standing at the cusp of a panoramic horizon at dawn looking towards open possibilities
      return (
        <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <rect width="360" height="200" rx="16" fill="#EAF3EE" />
          {/* Dawn sun rising behind mountains */}
          <circle cx="180" cy="140" r="45" fill="#D8F36A" fillOpacity="0.75" />
          <path d="M0 160L80 120L180 155L270 115L360 160V200H0V160Z" fill="#245847" />
          <path d="M40 170L130 145L230 175L320 140L360 165V200H0V185Z" fill="#183e32" />

          {/* Golden winding path forward */}
          <path d="M180 200C180 185 190 175 195 160C200 150 190 145 185 140" stroke="#D8F36A" strokeWidth="3" strokeDasharray="3 3" />

          {/* Student silhouette facing future with quiet optimism */}
          <circle cx="140" cy="145" r="10" fill="#E78667" />
          <path d="M132 158C132 152 136 150 142 150C148 150 152 152 152 158V185H132V158Z" fill="#202923" />
          {/* Morning star */}
          <polygon points="180,60 183,70 193,73 183,76 180,86 177,76 167,73 177,70" fill="#E78667" />
        </svg>
      );

    default:
      return (
        <div className="w-full h-full rounded-xl bg-[#F7F5EE] flex items-center justify-center text-[#245847]">
          DeRote
        </div>
      );
  }
};

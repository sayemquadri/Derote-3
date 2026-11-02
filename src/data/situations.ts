export interface SituationItem {
  id: string;
  heading: string;
  firstPersonQuote: string;
  category: string;
  illustration: string;
  accent: 'forest' | 'citrus' | 'coral' | 'paper';
  reflectionDetail: string;
}

export const STUDENT_SITUATIONS: SituationItem[] = [
  {
    id: 'family-expectations',
    heading: 'Family expectations',
    firstPersonQuote: '"I don\'t want to disappoint my parents."',
    category: 'Expectations',
    illustration: 'family-expectations',
    accent: 'coral',
    reflectionDetail: 'Balancing love for your family with discovering what truly interests you is one of the most common challenges for teenagers. DeRote helps build constructive dialogue without conflict.'
  },
  {
    id: 'career-confusion',
    heading: 'Career confusion',
    firstPersonQuote: '"Everyone asks what I want to become. I\'m not sure yet."',
    category: 'Direction',
    illustration: 'career-confusion',
    accent: 'citrus',
    reflectionDetail: 'You don\'t need a lifelong career locked down right now. Exploring your genuine curiosities and skills creates flexible, exciting pathways.'
  },
  {
    id: 'lost-motivation',
    heading: 'Lost motivation',
    firstPersonQuote: '"I\'m studying because I have to, not because I know what I want."',
    category: 'Motivation',
    illustration: 'lost-motivation',
    accent: 'forest',
    reflectionDetail: 'Loss of energy happens when daily effort disconnects from personal meaning. We help you rediscover what naturally sparks your curiosity.'
  },
  {
    id: 'finding-strengths',
    heading: 'Finding my strengths',
    firstPersonQuote: '"I don\'t know what I\'m good at or where to begin."',
    category: 'Self-Discovery',
    illustration: 'finding-strengths',
    accent: 'coral',
    reflectionDetail: 'Strengths are broader than report cards. How you problem-solve, create, empathize, and organize are powerful strengths waiting to be cultivated.'
  },
  {
    id: 'feeling-left-behind',
    heading: 'Feeling left behind',
    firstPersonQuote: '"I feel like everyone else is moving ahead."',
    category: 'Belonging',
    illustration: 'feeling-left-behind',
    accent: 'citrus',
    reflectionDetail: 'Classmates often project confidence while hiding the same confusion. Your trajectory is your own—learning at your rhythm brings true mastery.'
  },
  {
    id: 'my-voice-choices',
    heading: 'My voice, my choices',
    firstPersonQuote: '"I have interests, but I don\'t know how to develop them."',
    category: 'Identity',
    illustration: 'my-voice-choices',
    accent: 'forest',
    reflectionDetail: 'Your personal interests in making, writing, analyzing, or connecting are real strengths. DeRote helps you articulate your perspective to adults.'
  },
  {
    id: 'struggling-concentrate',
    heading: 'Struggling to concentrate',
    firstPersonQuote: '"I can\'t focus, even when I try."',
    category: 'Focus',
    illustration: 'struggling-concentrate',
    accent: 'citrus',
    reflectionDetail: 'Attention is not a willpower test. Cognitive load, environment, and fatigue impact focus. Identifying your natural focus rhythm changes everything.'
  },
  {
    id: 'afraid-disappointing',
    heading: 'Afraid of disappointing others',
    firstPersonQuote: '"The fear of failing holds me back from starting."',
    category: 'Pressure',
    illustration: 'disappointing-others',
    accent: 'coral',
    reflectionDetail: 'Fear of mistakes often leads to paralysis or procrastination. Creating low-stakes exploration allows genuine confidence to grow.'
  },
  {
    id: 'studying-for-marks',
    heading: 'Studying just for marks',
    firstPersonQuote: '"I study for marks, but rarely feel excited about what I learn."',
    category: 'Learning',
    illustration: 'studying-for-marks',
    accent: 'forest',
    reflectionDetail: 'When education becomes purely transactional memorization, curiosity fades. Connecting concepts to real life makes learning feel rewarding again.'
  },
  {
    id: 'unsure-whats-next',
    heading: 'Unsure what comes next',
    firstPersonQuote: '"Class 10 or 12 is ending, and the road feels completely blank."',
    category: 'Transition',
    illustration: 'unsure-whats-next',
    accent: 'citrus',
    reflectionDetail: 'Transitions between school stages are pivotal moments. DeRote provides non-judgmental guidance to map options before committing.'
  }
];

export interface OfferingItem {
  id: string;
  step: string;
  title: string;
  tagline: string;
  motif: 'leaf' | 'flow' | 'compass' | 'dialogue';
}

export const WHAT_DEROTE_OFFERS: OfferingItem[] = [
  {
    id: 'understand-yourself',
    step: '01',
    title: 'Understand yourself',
    tagline: 'Explore your genuine interests, strengths, and experiences.',
    motif: 'leaf'
  },
  {
    id: 'understand-learning',
    step: '02',
    title: 'Understand your learning',
    tagline: 'Express what helps you focus and what gets in your way.',
    motif: 'flow'
  },
  {
    id: 'find-direction',
    step: '03',
    title: 'Find your direction',
    tagline: 'Reflect on possible paths without forced, predetermined careers.',
    motif: 'compass'
  },
  {
    id: 'be-heard',
    step: '04',
    title: 'Be heard',
    tagline: 'Give adults a clearer understanding of your perspective and needs.',
    motif: 'dialogue'
  }
];

export function toggleResonance(currentSelected: string[], id: string): string[] {
  if (currentSelected.includes(id)) {
    return currentSelected.filter(item => item !== id);
  }
  return [...currentSelected, id];
}

export function calculateResonanceSummary(selectedIds: string[]): {
  count: number;
  primaryCategory: string | null;
  message: string;
} {
  const count = selectedIds.length;
  if (count === 0) {
    return {
      count: 0,
      primaryCategory: null,
      message: "Tap any card that resonates with you."
    };
  }

  const categoryCounts: Record<string, number> = {};
  for (const id of selectedIds) {
    const sit = STUDENT_SITUATIONS.find(s => s.id === id);
    if (sit) {
      categoryCounts[sit.category] = (categoryCounts[sit.category] || 0) + 1;
    }
  }

  let topCategory = 'Direction';
  let maxCount = 0;
  for (const [cat, cnt] of Object.entries(categoryCounts)) {
    if (cnt > maxCount) {
      maxCount = cnt;
      topCategory = cat;
    }
  }

  return {
    count,
    primaryCategory: topCategory,
    message: `You're reflecting on ${topCategory.toLowerCase()} and taking the first step to understand yourself.`
  };
}

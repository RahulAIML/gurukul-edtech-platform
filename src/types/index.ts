export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  iconName: 'users' | 'trending-up' | 'trophy' | 'infinity' | 'star';
  color: string;
}

export interface JourneyStep {
  id: number;
  stage: string;
  title: string;
  description: string;
  iconName: 'book-open' | 'code' | 'box' | 'user-check' | 'trending-up' | 'message-square' | 'award';
  color?: string;
}

export interface ProgramCard {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  isPopular?: boolean;
  status: 'available' | 'coming-soon';
  iconType: 'data-science' | 'network' | 'oracle' | 'sql-server' | 'ai';
  categoryColor: string;
  accentColor: string;
}

export interface MentorData {
  name: string;
  role: string;
  company?: string;
  avatarUrl?: string;
  quote: string;
  stats: {
    overallProgress: number;
    weeklyActivity: {
      category: string;
      days: boolean[]; // Mon - Sun
    }[];
    skills: {
      name: string;
      score: number;
      maxScore: number;
    }[];
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  iconName: 'shopping-cart' | 'users' | 'bar-chart' | 'truck';
  iconBgColor: string;
  iconColor: string;
  category: string;
  difficulty?: string;
  technologies?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  packageOffered: string;
  rating: number;
  review: string;
  avatarUrl?: string;
}

export interface MarketInsight {
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface RoadmapWeek {
  week: string;
  phase: 'Orientation' | 'Core' | 'Track' | 'Capstone';
  topic: string;
  appliesTo: 'Everyone' | 'Foundations / Professional' | 'Foundations' | 'Professional';
  details?: string[];
}

export interface CurriculumModule {
  id: string;
  number: number;
  weeks: string;
  title: string;
  phase: string;
  description: string;
  learningHours: number;
  lessonsCount: number;
  topics: string[];
  tools: string[];
  project?: {
    name: string;
    description: string;
  };
}

export interface ProgramDetailData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  weeks: number;
  totalLearningHours: number;
  weeklyHours: number;
  weeklyTestHours: number;
  status: 'available' | 'coming-soon';
  overview: {
    description: string[];
    highlights: string[];
    whoShouldJoin: string[];
    prerequisites: string[];
  };
  marketInsights: MarketInsight[];
  phases: {
    phase: string;
    weeks: string;
    audience: string;
    focus: string;
    trackType?: 'core' | 'foundations' | 'professional' | 'capstone';
  }[];
  weeklyBreakdown: {
    activity: string;
    hours: number;
    icon: string;
  }[];
  roadmap: RoadmapWeek[];
  curriculum: CurriculumModule[];
  tools: {
    name: string;
    category: string;
    icon?: string;
  }[];
  projects: {
    title: string;
    type: 'Mini Project' | 'Checkpoint Project' | 'Capstone Project';
    description: string;
    techStack: string[];
    outcomes: string[];
  }[];
  instructors: {
    name: string;
    role: string;
    currentCompany: string;
    experience: string;
    bio: string;
    image?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
    category: string;
  }[];
  pricing: {
    originalPrice: string;
    discountedPrice: string;
    emiStartsAt: string;
    features: string[];
  };
}

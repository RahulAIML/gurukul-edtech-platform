import { NavLink, StatItem, JourneyStep, ProgramCard, MentorData, ProjectItem, TestimonialItem } from '@/types';

export const navigationLinks: NavLink[] = [
  { label: 'Programs', href: '/programs' },
  { label: 'Mentorship', href: '/#mentorship' },
  { label: 'Learning Journey', href: '/#learning-journey' },
  { label: 'Success Stories', href: '/#success-stories' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Career Roadmaps', href: '/programs/data-science/overview', description: 'Step-by-step career path guides' },
      { label: 'Free Cheat Sheets', href: '#', description: 'Python, SQL, & ML Quick Reference' },
      { label: 'Salary Calculator', href: '#', description: 'Compare salaries across roles and experience' },
      { label: 'Blog & Articles', href: '#', description: 'Industry insights and technology trends' },
    ],
  },
  { label: 'About Us', href: '/#about-us' },
];

export const heroStatsData: StatItem[] = [
  {
    id: 'students-trained',
    value: '11.5K+',
    label: 'Students Trained',
    sublabel: 'and Growing',
    iconName: 'users',
    color: '#9333EA', // purple
  },
  {
    id: 'salary-boost',
    value: '30% – 60%',
    label: 'Average Salary',
    sublabel: 'Boost',
    iconName: 'trending-up',
    color: '#0284C7', // blue
  },
  {
    id: 'highest-package',
    value: '₹80 LPA+',
    label: 'Highest Package',
    sublabel: 'Offered',
    iconName: 'trophy',
    color: '#F59E0B', // gold
  },
  {
    id: 'career-support',
    value: 'Unlimited',
    label: 'Career Support',
    sublabel: 'Forever',
    iconName: 'infinity',
    color: '#7E22CE', // deep purple
  },
  {
    id: 'student-rating',
    value: '4.8/5',
    label: 'Average Student',
    sublabel: 'Rating',
    iconName: 'star',
    color: '#9333EA', // purple
  },
];

export const learningJourneySteps: JourneyStep[] = [
  {
    id: 1,
    stage: 'LEARN',
    title: 'LEARN',
    description: 'Concepts that build strong foundations',
    iconName: 'book-open',
    color: '#9333EA',
  },
  {
    id: 2,
    stage: 'PRACTICE',
    title: 'PRACTICE',
    description: 'Hands-on exercises to strengthen your skills',
    iconName: 'code',
    color: '#3B82F6',
  },
  {
    id: 3,
    stage: 'BUILD',
    title: 'BUILD',
    description: 'Real-world projects to create your portfolio',
    iconName: 'box',
    color: '#8B5CF6',
  },
  {
    id: 4,
    stage: 'GET REVIEWED',
    title: 'GET REVIEWED',
    description: 'Mentor reviews and actionable feedback',
    iconName: 'user-check',
    color: '#6366F1',
  },
  {
    id: 5,
    stage: 'IMPROVE',
    title: 'IMPROVE',
    description: 'Fix gaps and level up with personalized help',
    iconName: 'trending-up',
    color: '#0EA5E9',
  },
  {
    id: 6,
    stage: 'INTERVIEW',
    title: 'INTERVIEW',
    description: 'Mock interviews and expert preparation',
    iconName: 'message-square',
    color: '#8B5CF6',
  },
  {
    id: 7,
    stage: 'GET HIRED',
    title: 'GET HIRED',
    description: 'Become the candidate companies hire',
    iconName: 'award',
    color: '#F59E0B',
  },
];

export const championshipProgramsList: ProgramCard[] = [
  {
    id: 'data-science',
    slug: 'data-science',
    title: 'DATA SCIENCE',
    tagline: 'CHAMPIONSHIP PROGRAM',
    description: 'Turn data into decisions. Build ML models. Solve real-world problems.',
    isPopular: true,
    status: 'available',
    iconType: 'data-science',
    categoryColor: '#0284C7',
    accentColor: '#38BDF8',
  },
  {
    id: 'network',
    slug: 'network',
    title: 'NETWORK',
    tagline: 'CHAMPIONSHIP PROGRAM',
    description: 'Design, secure & optimize networks. Become a network infrastructure expert.',
    isPopular: false,
    status: 'coming-soon',
    iconType: 'network',
    categoryColor: '#7C3AED',
    accentColor: '#A855F7',
  },
  {
    id: 'oracle',
    slug: 'oracle',
    title: 'ORACLE',
    tagline: 'CHAMPIONSHIP PROGRAM',
    description: 'Master Oracle technologies. Build enterprise solutions. Advance your career.',
    isPopular: false,
    status: 'coming-soon',
    iconType: 'oracle',
    categoryColor: '#DC2626',
    accentColor: '#EF4444',
  },
  {
    id: 'sql-server',
    slug: 'sql-server',
    title: 'SQL SERVER DATABASE',
    tagline: 'CHAMPIONSHIP PROGRAM',
    description: 'Master SQL Server. High availability, performance & administration.',
    isPopular: false,
    status: 'coming-soon',
    iconType: 'sql-server',
    categoryColor: '#0D9488',
    accentColor: '#14B8A6',
  },
  {
    id: 'ai',
    slug: 'ai',
    title: 'AI',
    tagline: 'CHAMPIONSHIP PROGRAM',
    description: 'Explore AI, Deep Learning & GenAI. Build intelligent solutions for tomorrow.',
    isPopular: false,
    status: 'coming-soon',
    iconType: 'ai',
    categoryColor: '#D97706',
    accentColor: '#F59E0B',
  },
];

export const mentorSectionData: MentorData = {
  name: 'Rahul Verma',
  role: 'Senior Data Scientist',
  company: 'Amazon',
  avatarUrl: '/assets/mentors/rahul.jpg',
  quote: "Keep going, Deepak! You're improving consistently.",
  stats: {
    overallProgress: 78,
    weeklyActivity: [
      { category: 'Learn', days: [true, true, true, false, true, true, false] },
      { category: 'Practice', days: [true, true, true, true, true, true, false] },
      { category: 'Projects', days: [true, true, true, true, true, true, true] },
      { category: 'Mock Tests', days: [true, false, true, true, true, true, false] },
    ],
    skills: [
      { name: 'Python', score: 8.5, maxScore: 10 },
      { name: 'SQL', score: 9.0, maxScore: 10 },
      { name: 'Analytics', score: 8.0, maxScore: 10 },
      { name: 'Machine Learning', score: 7.5, maxScore: 10 },
      { name: 'Interview Readiness', score: 8.0, maxScore: 10 },
    ],
  },
};

export const mentorTrackBullets = [
  'Learning Progress',
  'Assignment Performance',
  'Project Quality',
  'Weak Areas',
  'Mock Interview Scores',
  'Career Readiness',
];

export const featuredProjectsData: ProjectItem[] = [
  {
    id: 'ecommerce-sales',
    title: 'E-commerce Sales Analytics',
    description: 'End-to-end analysis of sales data to derive business insights.',
    publicSummary: 'Real-world project-oriented learning: end-to-end analysis of a live business dataset to derive decision-ready insights.',
    confidential: true,
    iconName: 'shopping-cart',
    iconBgColor: '#F3E8FF',
    iconColor: '#7E22CE',
    category: 'Data Analytics',
    difficulty: 'Intermediate',
    technologies: ['Python', 'Pandas', 'PowerBI', 'SQL'],
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Prediction',
    description: 'Predict customer churn using classification models.',
    publicSummary: 'Hands-on portfolio development: build classification models that predict customer behavior from historical data.',
    confidential: true,
    iconName: 'users',
    iconBgColor: '#DCFCE7',
    iconColor: '#16A34A',
    category: 'Machine Learning',
    difficulty: 'Advanced',
    technologies: ['Scikit-Learn', 'XGBoost', 'Feature Engineering'],
  },
  {
    id: 'hr-analytics',
    title: 'HR Analytics Dashboard',
    description: 'Interactive dashboard to analyze employee performance.',
    publicSummary: 'Applied learning: design an interactive analytics dashboard that turns raw operational data into visual insight.',
    confidential: true,
    iconName: 'bar-chart',
    iconBgColor: '#FFEDD5',
    iconColor: '#EA580C',
    category: 'Business Intelligence',
    difficulty: 'Intermediate',
    technologies: ['Tableau', 'SQL', 'Python'],
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Optimization',
    description: 'Analyze and optimize supply chain operations.',
    publicSummary: 'Capstone-style experience: apply optimization techniques to a complex, multi-variable operations dataset.',
    confidential: true,
    iconName: 'truck',
    iconBgColor: '#E0F2FE',
    iconColor: '#0284C7',
    category: 'Data Engineering & Analytics',
    difficulty: 'Advanced',
    technologies: ['Python', 'NumPy', 'Optimization Algorithms'],
  },
];

export const successStoriesData: TestimonialItem[] = [
  {
    id: 'amit-sharma',
    name: 'Amit Sharma',
    role: 'Data Analyst',
    company: 'Deloitte',
    packageOffered: '₹52.2 LPA',
    rating: 4.8,
    review: '“The projects & mentorship helped me crack multiple offers.”',
    avatarUrl: '/assets/testimonials/amit.jpg',
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'ML Engineer',
    company: 'TCS',
    packageOffered: '₹55.5 LPA',
    rating: 4.8,
    review: '“Gurukul\'s step-by-step approach made complex topics so easy.”',
    avatarUrl: '/assets/testimonials/priya.jpg',
  },
  {
    id: 'rahul-verma-student',
    name: 'Rahul Verma',
    role: 'Data Scientist',
    company: 'Amazon',
    packageOffered: '₹62.3 LPA',
    rating: 4.9,
    review: '“I transformed from a beginner to a confident professional with Gurukul.”',
    avatarUrl: '/assets/testimonials/rahul.jpg',
  },
  {
    id: 'neha-iyer',
    name: 'Neha Iyer',
    role: 'Business Analyst',
    company: 'PwC',
    packageOffered: '₹50.5 LPA',
    rating: 4.7,
    review: '“The mock interviews and feedback sessions were game changers.”',
    avatarUrl: '/assets/testimonials/neha.jpg',
  },
];

export const featureStripItems = [
  {
    id: 'curriculum',
    label: 'Industry-Aligned Curriculum',
    iconName: 'clipboard-list',
  },
  {
    id: 'mentorship',
    label: 'Live Mentorship & Support',
    iconName: 'users',
  },
  {
    id: 'projects',
    label: 'Real Projects & Portfolio',
    iconName: 'briefcase',
  },
  {
    id: 'interview',
    label: 'Interview Preparation',
    iconName: 'message-square-code',
  },
  {
    id: 'career',
    label: 'Lifetime Career Support',
    iconName: 'shield-check',
  },
];

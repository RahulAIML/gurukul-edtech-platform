import { ProgramDetailData } from '@/types';

export const dataScienceProgram: ProgramDetailData = {
  id: 'data-science',
  slug: 'data-science',
  title: 'DATA SCIENCE CHAMPIONSHIP PROGRAM',
  subtitle: 'A 24-week applied curriculum to make you industry ready.',
  tagline: 'Turn Data Into Decisions. Build the Future.',
  badge: 'One Goal. Many Paths. Your Championship Starts Here.',
  weeks: 24,
  totalLearningHours: 192,
  weeklyHours: 10,
  weeklyTestHours: 2,
  status: 'available',
  overview: {
    description: [
      'The Gurukul Data Science Championship Program is an intensive, mentor-led 24-week mastery experience engineered to transform ambitious learners from foundational fundamentals to job-ready, elite Data Science professionals.',
      'Our dual-track pedagogy adapts to your current level: beginners receive comprehensive scaffolding in analytical foundations, while working professionals dive straight into advanced enterprise ML pipelines, business problem framing, and MLOps deployment.'
    ],
    highlights: [
      '24 Weeks of Comprehensive, Structured Learning',
      'Dual-Track Specialization: Foundations & Professional Paths',
      '192 Total Learning Hours with 10 Hours/Week Flexible Commitment',
      'Weekly Tests, Coding Quizzes & Milestone Gating Assessments',
      'Live 1-on-1 Mentor Code Reviews & Mock Technical Interviews',
      'Portfolio of 6+ Production-Grade Projects & Industry Capstone',
      'Recognized Gurukul Championship Certificate & Lifetime Career Network'
    ],
    whoShouldJoin: [
      'College Students & Fresh Graduates seeking high-impact data careers with premium starting packages',
      'Working Professionals (Software Engineers, QA, System Admins, Analysts) transitioning to Data Science & AI',
      'Business & Financial Analysts wanting to master Python, Statistical ML, and Automated Analytics',
      'Entrepreneurs & Product Managers aiming to leverage data-driven decision making and GenAI'
    ],
    prerequisites: [
      'Foundations Track: No prior programming or advanced math background required. Week 0 covers all fundamentals.',
      'Professional Track: Basic spreadsheet/analytics exposure. Week 0 placement assessment routes you into the optimal stream.'
    ]
  },
  marketInsights: [
    {
      title: '$156.89 Billion',
      value: '$156.89B',
      description: 'Global Data Science market in 2026 (~38% in North America)',
      icon: 'dollar-sign'
    },
    {
      title: '11.5 Million+',
      value: '11.5M+',
      description: 'New data science jobs worldwide by 2026',
      icon: 'briefcase'
    },
    {
      title: '36% Growth',
      value: '36%',
      description: 'Projected growth in US data scientist roles (2023–2033)',
      icon: 'trending-up'
    },
    {
      title: 'Fastest Growing Region',
      value: 'Asia-Pacific',
      description: 'Asia-Pacific CAGR ~26–27% from 2024 to 2033',
      icon: 'globe'
    },
    {
      title: 'Skills Gap',
      value: '49% & 44%',
      description: '49% cite data privacy concerns, 44% lack skilled professionals',
      icon: 'alert-circle'
    }
  ],
  phases: [
    {
      phase: 'Phase 1: Core Foundations',
      weeks: '1–12',
      audience: 'Everyone',
      focus: 'Statistics, Python, SQL, EDA',
      trackType: 'core'
    },
    {
      phase: 'Phase 2A: Foundations Track',
      weeks: '13–20',
      audience: 'Students / Beginners',
      focus: 'ML fundamentals, guided projects',
      trackType: 'foundations'
    },
    {
      phase: 'Phase 2B: Professional Track',
      weeks: '13–20',
      audience: 'Working Professionals',
      focus: 'Applied ML, deployment, business framing',
      trackType: 'professional'
    },
    {
      phase: 'Phase 3: Capstone Project',
      weeks: '21–24',
      audience: 'Everyone',
      focus: 'End-to-end project + portfolio',
      trackType: 'capstone'
    }
  ],
  weeklyBreakdown: [
    {
      activity: 'Video Lessons / Theory',
      hours: 3,
      icon: 'video'
    },
    {
      activity: 'Hands-on Labs / Coding',
      hours: 3,
      icon: 'code'
    },
    {
      activity: 'Weekly Test (Quizzes / Assessments)',
      hours: 2,
      icon: 'file-check'
    },
    {
      activity: 'Project / Practice',
      hours: 2,
      icon: 'rocket'
    }
  ],
  roadmap: [
    {
      week: '0',
      phase: 'Orientation',
      topic: 'Placement quiz, tool setup, onboarding',
      appliesTo: 'Everyone',
      details: ['Development environment setup (VS Code, Jupyter, Git)', 'Placement Diagnostic Assessment', 'Community and Mentor Onboarding']
    },
    {
      week: '1–2',
      phase: 'Core',
      topic: 'Statistics & Probability',
      appliesTo: 'Everyone',
      details: ['Descriptive Statistics & Distributions', 'Inferential Statistics & Hypothesis Testing', 'Bayes Theorem & Probability Distributions']
    },
    {
      week: '3–4',
      phase: 'Core',
      topic: 'Python for Data Analysis',
      appliesTo: 'Everyone',
      details: ['Python Fundamentals & Functional Programming', 'NumPy Multi-dimensional Arrays', 'Pandas Series & DataFrames']
    },
    {
      week: '5–6',
      phase: 'Core',
      topic: 'SQL & Data Wrangling',
      appliesTo: 'Everyone',
      details: ['Complex SQL Queries, Window Functions & CTEs', 'Data Cleaning & Transformation Pipelines', 'Relational Database Schema Design']
    },
    {
      week: '7–8',
      phase: 'Core',
      topic: 'EDA & Visualization',
      appliesTo: 'Everyone',
      details: ['Exploratory Data Analysis Methodologies', 'Matplotlib & Seaborn Styling', 'Interactive Visualizations & Storytelling']
    },
    {
      week: '9',
      phase: 'Core',
      topic: 'Data Ethics, Privacy & Bias',
      appliesTo: 'Everyone',
      details: ['Algorithmic Fairness & Bias Mitigation', 'GDPR, DPDP & Data Governance', 'Responsible AI Frameworks']
    },
    {
      week: '10–11',
      phase: 'Core',
      topic: 'Version Control & Workflows',
      appliesTo: 'Everyone',
      details: ['Git Branching Strategies & PR Workflows', 'Reproducible Research & Cookiecutter', 'Virtual Environments & Dependency Management']
    },
    {
      week: '12',
      phase: 'Core',
      topic: 'Checkpoint Project (Gate, 70%+ to proceed)',
      appliesTo: 'Everyone',
      details: ['Comprehensive Mid-Term Assessment', 'End-to-End EDA & Analytical Report Project', 'Mandatory 70%+ Score to unlock Specialization']
    },
    {
      week: '13–14',
      phase: 'Track',
      topic: 'Intro to ML / Applied ML & Pipelines',
      appliesTo: 'Foundations / Professional',
      details: ['Foundations: Supervised Learning, Linear/Logistic Regression', 'Professional: Scikit-Learn Pipelines & Feature Transformers']
    },
    {
      week: '15–16',
      phase: 'Track',
      topic: 'Classification & Clustering / Evaluation & Experimentation',
      appliesTo: 'Foundations / Professional',
      details: ['Foundations: Decision Trees, Random Forests, K-Means', 'Professional: Hyperparameter Tuning, Cross-Validation, MLflow']
    },
    {
      week: '17–18',
      phase: 'Track',
      topic: 'Model Evaluation Basics / Deployment & MLOps Basics',
      appliesTo: 'Foundations / Professional',
      details: ['Foundations: ROC-AUC, Precision-Recall, Confusion Matrices', 'Professional: FastAPI, Docker Containerization & Streamlit']
    },
    {
      week: '19–20',
      phase: 'Track',
      topic: 'Guided Mini Project / Deep Learning Intro',
      appliesTo: 'Foundations / Professional',
      details: ['Foundations: End-to-End Guided ML Project', 'Professional: PyTorch / Neural Networks & LLM API Integration']
    },
    {
      week: '21',
      phase: 'Capstone',
      topic: 'Proposal & Problem Framing',
      appliesTo: 'Everyone',
      details: ['Business Case Definition & Scope Lock', 'Dataset Acquisition & Validation', 'Architecture & Milestone Design']
    },
    {
      week: '22',
      phase: 'Capstone',
      topic: 'Data Prep + EDA Milestone Check-in',
      appliesTo: 'Everyone',
      details: ['Data Ingestion & Cleaning Validation', 'Deep Exploratory Insights & Feature Engineering', 'Mentor Review 1']
    },
    {
      week: '23',
      phase: 'Capstone',
      topic: 'Modeling + Evaluation Milestone Check-in',
      appliesTo: 'Everyone',
      details: ['Model Training, Benchmarking & Selection', 'Error Analysis & Performance Optimization', 'Mentor Review 2']
    },
    {
      week: '24',
      phase: 'Capstone',
      topic: 'Final Presentation & Portfolio Write-up',
      appliesTo: 'Everyone',
      details: ['Live Capstone Defense before Industry Jury', 'GitHub Repository & Production Documentation', 'Certificate Conferral & Career Placement Launch']
    }
  ],
  curriculum: [
    {
      id: 'module-0',
      number: 0,
      weeks: 'Week 0',
      title: 'Orientation & Diagnostic Onboarding',
      phase: 'Orientation',
      description: 'Set up your cloud and local development environments, establish learning routines, and take the Week 0 diagnostic test to personalize your mentorship track.',
      learningHours: 10,
      lessonsCount: 6,
      topics: ['Python & VS Code Tooling', 'Git & GitHub Workspace', 'Placement Diagnostic Assessment', 'Mentor Cohort Alignment'],
      tools: ['VS Code', 'GitHub', 'Terminal', 'Jupyter']
    },
    {
      id: 'module-1',
      number: 1,
      weeks: 'Weeks 1–2',
      title: 'Mathematical Foundations: Statistics & Probability',
      phase: 'Core Foundations',
      description: 'Master the statistical intuition that separates real data scientists from tool-runners: distributions, hypothesis testing, p-values, and Bayesian reasoning.',
      learningHours: 20,
      lessonsCount: 14,
      topics: ['Descriptive Statistics & Central Tendency', 'Probability Distributions (Normal, Poisson, Binomial)', 'Hypothesis Testing & A/B Testing Mathematics', 'Confidence Intervals & Central Limit Theorem'],
      tools: ['Python', 'SciPy', 'Statsmodels', 'Jupyter']
    },
    {
      id: 'module-2',
      number: 2,
      weeks: 'Weeks 3–4',
      title: 'Python for High-Performance Data Analysis',
      phase: 'Core Foundations',
      description: 'Deep dive into idiomatic Python for data crunching, vectorized computations with NumPy, and high-performance tabular manipulation with Pandas.',
      learningHours: 20,
      lessonsCount: 16,
      topics: ['Python Data Structures & Memory Efficiency', 'NumPy Vectorization & Broadcasting', 'Pandas Indexing, GroupBy & Aggregations', 'Merging, Joining & Reshaping Large Datasets'],
      tools: ['Python 3.11', 'NumPy', 'Pandas']
    },
    {
      id: 'module-3',
      number: 3,
      weeks: 'Weeks 5–6',
      title: 'Enterprise SQL & Data Wrangling',
      phase: 'Core Foundations',
      description: 'Write complex SQL like a veteran data engineer: multi-table joins, subqueries, analytical window functions, CTEs, and performance optimization.',
      learningHours: 20,
      lessonsCount: 15,
      topics: ['Advanced SQL Queries & Window Functions', 'CTEs, Recursive Queries & Subqueries', 'Data Quality, Handling Dirty Data & Outliers', 'PostgreSQL & BigQuery Fundamentals'],
      tools: ['PostgreSQL', 'BigQuery', 'DBeaver']
    },
    {
      id: 'module-4',
      number: 4,
      weeks: 'Weeks 7–8',
      title: 'Exploratory Data Analysis & Business Storytelling',
      phase: 'Core Foundations',
      description: 'Learn the structured art of uncovering hidden patterns, crafting compelling visualizations, and translating metrics into actionable business executive summaries.',
      learningHours: 20,
      lessonsCount: 14,
      topics: ['Systematic EDA Frameworks', 'Matplotlib & Seaborn Advanced Plots', 'Interactive Visualizations with Plotly', 'Executive Storytelling & Business Presentations'],
      tools: ['Matplotlib', 'Seaborn', 'Plotly', 'PowerBI']
    },
    {
      id: 'module-5',
      number: 5,
      weeks: 'Weeks 9–11',
      title: 'Data Ethics, Version Control & Engineering Workflows',
      phase: 'Core Foundations',
      description: 'Build production-grade discipline: clean code principles, algorithmic fairness, automated testing, reproducible pipelines, and collaborative Git practices.',
      learningHours: 30,
      lessonsCount: 18,
      topics: ['Algorithmic Bias, Ethics & Privacy (DPDP, GDPR)', 'Git Advanced Branching & Collaboration', 'Virtual Environments & Poetry Dependency Management', 'Code Quality (Black, Flake8, Pytest)'],
      tools: ['Git', 'GitHub', 'Poetry', 'Pytest']
    },
    {
      id: 'module-6',
      number: 6,
      weeks: 'Week 12',
      title: 'Mid-Term Checkpoint Gate Project',
      phase: 'Core Checkpoint',
      description: 'Put your foundational skills to the ultimate test in a timed, real-world scenario. Achieve 70%+ to unlock your track specialization.',
      learningHours: 10,
      lessonsCount: 2,
      topics: ['End-to-End Raw Dataset Ingestion', 'Statistical Validation & In-depth EDA', 'Executive Dashboard & Code Review'],
      tools: ['Python', 'SQL', 'Git', 'Streamlit'],
      project: {
        name: 'Enterprise Market Intelligence Engine',
        description: 'Clean, model, and visualize 500,000+ transaction records into an executive analytical decision tool.',
        publicSummary: 'A guided checkpoint project applying end-to-end data cleaning, modeling, and executive-ready visualization to a large real-world dataset.',
        confidential: true,
      }
    },
    {
      id: 'module-7',
      number: 7,
      weeks: 'Weeks 13–16',
      title: 'Supervised & Unsupervised Machine Learning',
      phase: 'Track Specialization',
      description: 'Master statistical machine learning algorithms from first mathematical principles to production-ready Scikit-Learn pipelines.',
      learningHours: 40,
      lessonsCount: 24,
      topics: ['Linear & Logistic Regression with Regularization (L1/L2)', 'Decision Trees, Random Forests & Ensemble Methods', 'Gradient Boosting (XGBoost, LightGBM, CatBoost)', 'Clustering (K-Means, DBSCAN) & Dimensionality Reduction (PCA)'],
      tools: ['Scikit-Learn', 'XGBoost', 'LightGBM', 'Optuna']
    },
    {
      id: 'module-8',
      number: 8,
      weeks: 'Weeks 17–20',
      title: 'Model Deployment, MLOps & GenAI Integration',
      phase: 'Track Specialization',
      description: 'Package models as microservices, containerize with Docker, establish automated tracking with MLflow, and incorporate modern Generative AI / LLM APIs.',
      learningHours: 40,
      lessonsCount: 22,
      topics: ['Building REST APIs with FastAPI', 'Docker Containerization & Cloud Deployment', 'Experiment Tracking with MLflow & Weights & Biases', 'LLM Prompt Engineering, RAG & OpenAI API Integration'],
      tools: ['FastAPI', 'Docker', 'MLflow', 'OpenAI API', 'LangChain']
    },
    {
      id: 'module-9',
      number: 9,
      weeks: 'Weeks 21–24',
      title: 'Industry Capstone & Career Placement Launch',
      phase: 'Capstone Project',
      description: 'Architect and defend a comprehensive production project from scratch, undergo intensive mock interviews, resume reviews, and get placed at top tech firms.',
      learningHours: 40,
      lessonsCount: 12,
      topics: ['Problem Definition & Business Feasibility', 'Production Data Pipeline & Model Deployment', 'Live Defense before Industry Jury', 'Resume Workshop, LinkedIn Optimization & 5x Mock Interviews'],
      tools: ['Full Data Stack', 'AWS/GCP', 'Docker', 'FastAPI', 'Streamlit'],
      project: {
        name: 'Autonomous Multi-Modal Enterprise Intelligence System',
        description: 'End-to-end production application combining predictive ML models and GenAI RAG search over proprietary data.',
        publicSummary: 'A capstone-grade production application combining predictive modeling with a Generative AI search experience, deployed as a live containerized service.',
        confidential: true,
      }
    }
  ],
  tools: [
    { name: 'Python', category: 'Language' },
    { name: 'SQL', category: 'Database' },
    { name: 'Pandas', category: 'Analytics' },
    { name: 'NumPy', category: 'Computation' },
    { name: 'Scikit-Learn', category: 'Machine Learning' },
    { name: 'XGBoost', category: 'Machine Learning' },
    { name: 'FastAPI', category: 'Deployment' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Tableau / PowerBI', category: 'Visualization' },
    { name: 'OpenAI API', category: 'Generative AI' },
    { name: 'MLflow', category: 'MLOps' },
    { name: 'Streamlit', category: 'App Framework' }
  ],
  projects: [
    {
      title: 'E-commerce Dynamic Pricing & Demand Forecasting',
      type: 'Mini Project',
      description: 'Build an automated time-series forecasting engine that predicts inventory demand and adjusts real-time pricing to maximize margins.',
      publicSummary: 'Build an automated forecasting engine that predicts demand and recommends real-time pricing to maximize margins.',
      confidential: true,
      techStack: ['Python', 'Prophet', 'Pandas', 'FastAPI'],
      outcomes: ['Simulated profit-uplift benchmark', 'Interactive pricing dashboard']
    },
    {
      title: 'High-Risk Customer Churn Prediction Engine',
      type: 'Checkpoint Project',
      description: 'Train and validate an ensemble classification pipeline with advanced feature engineering to identify at-risk subscribers before contract renewal.',
      publicSummary: 'Train and validate a classification pipeline with advanced feature engineering to flag at-risk customers before they churn.',
      confidential: true,
      techStack: ['Scikit-Learn', 'XGBoost', 'SHAP', 'Streamlit'],
      outcomes: ['High-accuracy predictive benchmark', 'Explainable AI feature importance report']
    },
    {
      title: 'Autonomous Multi-Modal Financial Intelligence Platform',
      type: 'Capstone Project',
      description: 'Full-stack production platform ingesting earnings reports, running sentiment analysis, and predicting price volatility with deployed REST endpoints.',
      publicSummary: 'A full-stack production platform that ingests real documents, runs sentiment analysis, and serves predictions through deployed REST endpoints.',
      confidential: true,
      techStack: ['FastAPI', 'Docker', 'PostgreSQL', 'LangChain', 'OpenAI'],
      outcomes: ['Deployed live containerized app', 'Complete portfolio case study']
    }
  ],
  instructors: [
    {
      name: 'Rahul Verma',
      role: 'Lead Mentor & Senior Data Scientist',
      currentCompany: 'Amazon',
      experience: '9+ Years in Enterprise ML & Big Data',
      bio: 'Ex-Microsoft, currently leading pricing intelligence pipelines at Amazon. Mentored 1,500+ successful data science candidates.'
    },
    {
      name: 'Dr. Ananya Sen',
      role: 'Statistical AI Specialist',
      currentCompany: 'Ex-Google Research',
      experience: 'Ph.D. in Applied Statistics & Machine Learning',
      bio: 'Published author in NeurIPS & ICML. Specializes in making complex mathematical principles intuitive and applicable.'
    }
  ],
  faqs: [
    {
      question: 'I have no programming background. Can I join this program?',
      answer: 'Yes, absolutely! The Foundations Track is specifically engineered from the ground up for beginners. Week 0 and Phase 1 start with core foundational logic and Python basics with heavy mentor guidance before moving to advanced algorithms.',
      category: 'Eligibility'
    },
    {
      question: 'How is this program different from recorded video courses?',
      answer: 'Gurukul is not an impersonal video repository. It is a live training ground with weekly mandatory coding checkpoints, 1-on-1 mentor code reviews, direct chat access to senior engineers, and rigorous milestone gates.',
      category: 'Program Structure'
    },
    {
      question: 'What is the weekly time commitment required?',
      answer: 'The program requires approximately 10 hours per week (3 hours video/theory, 3 hours hands-on coding labs, 2 hours weekly assessments, and 2 hours project work). Schedules are designed to accommodate working professionals and college students.',
      category: 'Commitment'
    },
    {
      question: 'What happens if I fail a weekly test or the Week 12 Checkpoint?',
      answer: 'You will receive personalized remedial sessions with your mentor and have an opportunity for a retake. We work with you until you achieve the 70%+ mastery standard.',
      category: 'Assessments'
    },
    {
      question: 'Does Gurukul provide placement support?',
      answer: 'Yes. Upon passing the Capstone Project, you enter our Placement Accelerator: 5x technical mock interviews, resume transformation, LinkedIn optimization, and direct referrals to hiring partner companies.',
      category: 'Career Support'
    }
  ],
  pricing: {
    originalPrice: '₹75,000',
    discountedPrice: '₹44,999',
    emiStartsAt: '₹3,750/month (No-cost EMI)',
    features: [
      'Full 24-Week Applied Championship Curriculum',
      'Dual-Track Access (Foundations & Professional)',
      '1-on-1 Dedicated Senior Industry Mentor',
      'Weekly Code Reviews & 24/7 Doubt Resolution',
      '6+ Production Projects & Verified Capstone',
      'Gurukul Championship Industry Certificate',
      'Guaranteed 5 Mock Technical & Behavioral Interviews',
      'Lifetime Access to Course Materials & Alumni Network'
    ]
  }
};

export const allProgramsList: ProgramDetailData[] = [
  dataScienceProgram,
  // Other programs with placeholder/coming-soon configurations
];

export type ChatMessage = { role: 'user' | 'bot'; text: string };

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export type ProjectStatus = 'Production' | 'Active R&D';

export type CaseStudy = {
  eyebrow: string;
  headline: string;
  headlineHighlight: string;
  summary: string;
  problems: string[];
  architectureTitle: string;
  architecture: string;
  architectureTags: string[];
  workflow: { title: string; desc: string; icon: string }[];
  techTagline: string;
  techs: { name: string; role: string }[];
  featuresHighlight: string;
  features: { title: string; desc: string }[];
  showcaseImage: { src: string; alt: string };
  metric?: { value: string; label: string };
  hurdles: string[];
  roadmap: string[];
  ctaTitle: string;
  ctaText: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  icon: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  caseStudy?: CaseStudy;
};

export type ConsultingProblem = {
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  icon: string;
  caseStudyPath?: string;
};

export type BlogPost = {
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  image: string;
  postNotes: {
    title: string;
    points: string[];
  };
  relatedPosts: {
    title: string;
    excerpt: string;
    tags: string[];
  }[];
  body: Array<string | { title: string; text: string }>;
};

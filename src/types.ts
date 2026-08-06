export type ChatMessage = { role: 'user' | 'bot'; text: string };

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

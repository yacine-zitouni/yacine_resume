export interface FocusArea {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  statusLabel?: string;
  linkText?: string;
  href?: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
  displayUrl: string;
}

export interface ResumeData {
  name: string;
  headline: string;
  lede: string;
  year: string;
  role: string;
  focusTagline: string;
  focusBottomTagline: string;
  email: string;
  dotMatrix: {
    total: number;
    filledIndices: number[];
    accentIndices: number[];
  };
  focusAreas: FocusArea[];
  projects: Project[];
  about: {
    paragraphs: string[];
    facts: Fact[];
  };
  socialLinks: SocialLink[];
  footer: {
    copyright: string;
    note: string;
  };
}

export const resumeData: ResumeData = {
  name: "Yacine Zitouni",
  headline: "Yacine\nZitouni",
  lede: "I build AI features, mobile apps and websites. I'm early in my career and learning by shipping small, finished projects.",
  year: "Portfolio 2026",
  role: "Junior developer",
  focusTagline: "Focus / AI · Mobile · Web",
  focusBottomTagline: "3 areas, 1 stack at a time",
  email: "your-email@example.com",
  dotMatrix: {
    total: 48,
    filledIndices: [1, 5, 10, 12, 19, 21, 26, 30, 35, 38, 44],
    accentIndices: [14, 33],
  },
  focusAreas: [
    {
      id: "ai",
      title: "AI",
      description:
        "Adding useful features to apps with language model APIs and small machine learning models. Learning prompting, embeddings and how to check that answers are good.",
      tags: ["Python", "LLM APIs", "Prompting", "scikit-learn"],
    },
    {
      id: "mobile",
      title: "Mobile",
      description:
        "Building cross-platform apps with a clear interface and real data. Learning navigation, state management and storing data on the device.",
      tags: ["React Native", "Expo", "TypeScript"],
    },
    {
      id: "web",
      title: "Web",
      description:
        "Building responsive, accessible sites and small full-stack apps. Learning semantic HTML, modern CSS, JavaScript and React.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
  ],
  projects: [
    {
      id: "study-notes",
      category: "AI",
      title: "Study Notes Summarizer",
      description:
        "Paste lecture notes and get a short summary plus practice questions to test yourself.",
      tags: ["Python", "LLM API", "Streamlit"],
      statusLabel: "Example",
      linkText: "Link: add when published",
    },
    {
      id: "habit-tracker",
      category: "Mobile",
      title: "Habit Tracker",
      description:
        "A daily habit app with streaks and reminders. Data is saved on the phone, so it works offline.",
      tags: ["React Native", "Expo", "AsyncStorage"],
      statusLabel: "Example",
      linkText: "Link: add when published",
    },
    {
      id: "recipe-finder",
      category: "Web",
      title: "Recipe Finder",
      description:
        "Search recipes by the ingredients you already have. Built to be fast and readable on a phone.",
      tags: ["HTML", "CSS", "JavaScript", "REST API"],
      statusLabel: "Example",
      linkText: "Link: add when published",
    },
  ],
  about: {
    paragraphs: [
      "I'm Yacine, a beginner developer interested in how AI, mobile apps and the web fit together. I like understanding how something works before I build on top of it.",
      "I learn by making small projects, reading other people's code and writing down what I figured out. My goal is to keep each project simple, finish it, and make the next one a bit better.",
    ],
    facts: [
      { label: "Focus", value: "AI, mobile, web" },
      { label: "Learning now", value: "TypeScript, Python, React" },
      { label: "Approach", value: "Small projects, finished" },
    ],
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/your-username",
      displayUrl: "github.com/your-username",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-name",
      displayUrl: "linkedin.com/in/your-name",
    },
  ],
  footer: {
    copyright: "© 2026 Yacine Zitouni",
    note: "Built with Next.js & React",
  },
};

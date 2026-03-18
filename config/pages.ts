import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Himaja Sri's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "key skills and areas of interest.",
    metadata: {
      title: "Skills",
      description:
        "Himaja Sri's key skills and areas of interest.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Himaja Sri's projects and work.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Naman Barkiya.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Naman Barkiya's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Naman Barkiya's resume.",
    metadata: {
      title: "Resume",
      description: "Naman Barkiya's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on AI, software engineering, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Naman Barkiya's blog — thoughts on AI, software engineering, and building in public.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Naman Barkiya's professional journey and experience timeline.",
    },
  },
};

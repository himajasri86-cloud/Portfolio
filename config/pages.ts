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
      description: "Contact Himaja Sri.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Himaja Sri's contributions and involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Himaja Sri's contributions and involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Himaja Sri resume.",
    metadata: {
      title: "Resume",
      description: "Himaja Sri resume.",
    },
  },
  blogs: {
  title: "Recommendations",
  description: "Professional feedback and endorsements.",
  metadata: {
    title: "Recommendations",
    description: "Professional recommendations for Himaja Sri.",
  },
}
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Himaja Sri professional journey and experience timeline.",
    },
  },
};

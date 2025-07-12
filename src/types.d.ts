interface ProjectType {
  url: string;
  frontmatter: {
    title: string;
    displayTitle: string;
    description: string;
    video?: string;
    order: number;
    tags: string[];
    archived: boolean;
    private: boolean;
  };
}

interface PostType {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    pubDate: string;
    img?: string[];
    video?: string;
    body: string[];
    draft: boolean;
  };
}

interface TimelineType {
  company: string;
  logo: string;
  title: string;
  date: string;
  place: string;
  direction: string;
  positions: {
    role: string;
    subrole: string;
    date: string;
    description?: string;
    actions: string[];
    clients: string[];
    skills: string[];
  }[];
}

interface EducationType {
  logo: string;
  institution: string;
  degree: string;
  date: string;
}

interface AwardsType {
  title: string;
  awards: string[];
}

interface ExhibitionType {
  date: string;
  title: string;
  location: string;
}

interface PageType {
  page: {
    data: PostType[];
  };
}
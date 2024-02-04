export interface ProjectType {
  url: string;
  frontmatter: {
    title: string;
    displayTitle: string;
    description: string;
    video?: string;
    order: number;
    tags: string[];
    archiver: boolean;
    private: boolean;
  };
}

export type ProjectOrderType = { frontmatter: { order: number } };

export interface PostType {
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

export type PostPubDateType = { frontmatter: { pubDate: string } };

type TimelineProjectType = { title: string; actions: string[] };

export interface TimelineType {
  company: string;
  title: string;
  date: string;
  place: string;
  role: string;
  description?: string;
  projects?: TimelineProjectType[];
  direction: string;
  logo: string;
  clients: string[];
  skills: string[];
}

export interface EducationType {
  date: string;
  description: string;
}

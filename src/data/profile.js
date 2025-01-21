import { getAge } from "@/scripts/profileActions";

const profile = {
  siteData: {
    siteName: "Max Elbo's Portfolio",
    title: "Max Elbo | Developer & Designer",
    description:
      "Hello, I am Max Elbo, a digital artisan. Welcome to my portfolio.",
    // keywords: [
    //   "Max Elbo portfolio",
    //   "Frontend developer, UI/UX designer, Art Director, Illustrator",
    //   "React developer, Salesforce developer, creative design specialist",
    // ],
    author: "Max Elbo",
    age: getAge(),
    role: "Designer / Developer",
    company: "Deloitte",
    city: "Tokyo",
    country: "Japan",
    email: "hello.maxelbo@gmail.com",
    logo: "logo.webp",
    url: "https://maxelbo.dev",
    social: {
      github: "https://www.github.com/maxelbo/",
      linkedin: "https://www.linkedin.com/in/maxelbo/",
    },
    image: {
      src: "/og-image.jpg",
      alt: "Max Elbo's Portfolio",
    },
    menuLinks: [
      {
        url: "/about/",
        path: "/about/",
        title: "About",
      },
      {
        url: "/posts/1/",
        path: "/posts/",
        title: "Blog",
      },
      {
        url: "/projects/all/",
        path: "/projects/",
        title: "Work",
      },
    ],
  },
  timelineData: [
    {
      company: "Deloitte",
      title: "Deloitte Tohmatsu Consulting",
      logo: "deloitte",
      date: "2020–present",
      place: "Tokyo, Japan",
      direction: "dir-r",
      positions: [
        {
          role: "Design Engineer",
          subrole: "Specialist Senior",
          date: "2024–present",
          description:
            "I am currently working at Deloitte Consulting as a Design Engineer, bridging the gap between design and development.",
          actions: [
            "Designed and developed the frontend of CRM apps and branding sites.",
            "Prototyped in production-ready code for efficient reuse.",
            "Created app store materials and promotional content to engage users.",
          ],
          clients: ["Yokohama City", "Fujisawa City", "Chiyoda Ward", "Tokyo Metropolitan Government", "Epson"],
          skills: [
            "Frontend Development",
            "UI Design",
            "Illustration",
            "JavaScript"
          ],
        },
        {
          role: "Frontend Developer/Art Director",
          subrole: "Specialist",
          date: "2020–2024",
          description:
            "I worked at Deloitte Consulting as a frontend developer and a designer, bridging the gap between both worlds. I've worked on corporate websites, and CRM apps to help the Japanese Government improve its DX.",
          actions: [
            "Designed and implemented the frontend of apps and landing pages.",
            "Reviewed designs to ensure their technical feasibility.",
            "Coded fully-functional prototypes, reducing the time from design to implementation.",
          ],
          clients: [
            "Tokyo Bureau of Social Welfare",
            "Shibuya Ward",
            "Chiyoda Ward",
            "Nara Prefecture",
            "Daito Trust Construction",
            "Dai-ichi Life",
          ],
          skills: [
            "Frontend Development",
            "JavaScript",
            "LWC",
            "SASS",
            "UI Design",
            "Illustration",
          ],
        },
      ],
    },
    {
      company: "AMP",
      title: "AMP",
      logo: "amp",
      date: "2018–2020",
      place: "Tokyo, Japan",
      direction: "dir-l",
      positions: [
        {
          role: "Art Director/Illustrator",
          description:
            "I moved to Japan and worked at AMPlifier, a design studio in Tokyo. Here, I got to learn new skills, like motion graphics and 3D modeling.",
          actions: [
            "Designed websites for Japanese brands.",
            "Created animations for museum exhibitions.",
            "Crafted award-winning illustrations for advertising campaigns.",
          ],
          clients: [
            "Tokyo National Museum",
            "KDDI Museum",
            "Glico",
            "Zojirushi",
            "Mineo",
            "Dentsu Tec",
            "MullenLowe Dubai",
            "MullenLowe Japan",
            "VMLY&R France",
          ],
          skills: ["Web Design", "Animation", "Illustration"],
        },
      ],
    },
    {
      company: "JWT Dubai",
      title: "J. Walter Thompson Dubai",
      logo: "jwt",
      date: "2016–2017",
      place: "Dubai, UAE",
      direction: "dir-r",
      positions: [
        {
          role: "Art Director",
          description:
            "I moved to Dubai and worked as an Art Director at JWT (J. Walter Thompson, not JSON Web Token). I won some awards, including a Grand Prix at the Dubai Lynx.",
          actions: [
            "Won local and international creative awards.",
            "Conceptualized advertising campaigns.",
            "Art directed television commercials and print ads.",
          ],
          clients: [
            "Coca-Cola",
            "Kenwood",
            "Kinokuniya",
            "Philadelphia Cream Cheese",
            "Kraft",
          ],
          skills: ["Art Direction", "Illustration"],
        },
      ],
    },
    {
      company: "Elborium",
      title: "Elborium",
      logo: "elborium",
      date: "2013–2016",
      place: "Multiple Locations",
      direction: "dir-l",
      positions: [
        {
          role: "Illustrator",
          description:
            "I started working as an Illustrator, freelancing for publishing companies and advertising agencies, while living in different countries.",
          actions: [
            "Illustrated content for books and magazines.",
            "Created award-winning illustrations for ad campaigns and theater posters.",
            "Storyboarded commercials for ad agencies.",
          ],
          clients: [
            "Mirador Interactive Museum",
            "Confin Ediciones",
            "Ciencia Joven Foundation",
            "MullenLowe Dubai",
            "DDB Dubai",
            "JWT Dubai",
            "JWT Argentina",
            "BBDO Argentina",
            "Del Campo Saatchi & Saatchi",
            "Madre Buenos Aires",
          ],
          skills: ["Illustration"],
        },
      ],
    },
    {
      company: "BBDO",
      title: "BBDO Buenos Aires",
      logo: "bbdo",
      date: "2012–2013",
      place: "Buenos Aires, Argentina",
      direction: "dir-r",
      positions: [
        {
          role: "Art Director",
          description:
            "I moved to BBDO as an Art Director, and had the chance to work with PepsiCo brands.",
          actions: [
            "Won local creative awards.",
            "Conceptualized advertising campaigns.",
            "Art directed television commercials and print ads.",
          ],
          clients: ["Doritos", "7up", "Dr Lemon"],
          skills: ["Art Direction"],
        },
      ],
    },
    {
      company: "Ogilvy",
      title: "Ogilvy & Mather Argentina",
      logo: "ogilvy",
      date: "2011–2012",
      place: "Buenos Aires, Argentina",
      direction: "dir-l",
      positions: [
        {
          role: "Junior Art Director",
          description:
            "I started my career working as a Junior Art Director at Ogilvy & Mather Argentina. I did my first TV commercial here, and I won my first awards, including a silver lion at Cannes.",
          actions: [
            "Won international creative awards.",
            "Conceptualized advertising campaigns.",
            "Art directed television commercials and print ads.",
          ],
          clients: ["Tang", "AMIA", "Mr. Muscle"],
          skills: ["Art Direction"],
        },
      ],
    },
  ],
  educationData: [
    {
      logo: "snhu",
      institution: "Southern New Hampshire University",
      degree: "Bachelor of Science in Computer Science",
      date: "2023–2026 (expected)"
    },
    {
      logo: "google",
      institution: "Google",
      degree: "Google UX Design Certificate",
      date: "2023",
    },
    {
      logo: "ztm",
      institution: "ZTM Academy",
      degree: "Fullstack Web Developer Bootcamp",
      date: "2022",
    },
    {
      logo: "jlpt",
      institution: "JLPT",
      degree: "Japanese-Language Proficiency Test N2",
      date: "2021",
    },
    {
      logo: "escuelita",
      institution: "Escuela Superior de Creativos Publicitarios",
      degree: "Technical Diploma in Art Direction",
      date: "2009–2011",
    },
  ],
  creativeAwards: [
    {
      title: "Cannes Lions",
      awards: ["Silver + Bronce - AMIA - The Bread of Memory (2013)"],
    },
    {
      title: "Dubai Lynx",
      awards: [
        "Grand Prix - Kinokuniya - Cost (2017)",
        "Silver + Bronze (x2) - Boecker - Pestryoshkas (2017)",
      ],
    },
    {
      title: "New York Festivals",
      awards: ["Bronze - Boecker - Pestryoshkas (2017)"],
    },
    {
      title: "Clio",
      awards: ["Bronze (x2) - AMIA - The Bread of Memory (2013)"],
    },
    {
      title: "EFFIE",
      awards: ["Silver - AMIA - The Bread of Memory (2013)"],
    },
    {
      title: "Wave Festival",
      awards: [
        "Gold (x2) + Silver + Bronze - AMIA - The Bread of Memory (2013)",
      ],
    },
    {
      title: "El sol",
      awards: [
        "Gold - AMMAR - Mom Calling Cards (2012)",
        "Gold + Bronze - AMIA - The Bread of Memory (2013)",
      ],
    },
    {
      title: "Yahoo Big Idea Chair Argentina",
      awards: ["Winner - AMIA - The Bread of Memory (2012)"],
    },
    {
      title: "Lories",
      awards: [
        "Silver - Infiniti - See What You Don't (2019) (as an illustrator)",
      ],
    },
    {
      title: "El diente",
      awards: [
        "Gold - AMIA - The Bread of Memory (2012)",
        "Bronze - Dr. Lemon - Kung Fu (2013)",
        "Bronze - Mercado - Make Sense where the World Doesn't (2015) (as an illustrator)",
      ],
    },
    {
      title: "FIAP",
      awards: [
        "Gold - AMIA - The Bread of Memory (2014)",
        "Silver + Bronze - AMMAR - Mom Calling Cards (2012)",
      ],
    },
    {
      title: "Antigua Festival",
      awards: ["Gold - AMIA - The Bread of Memory (2013)"],
    },
  ],
  exhibitions: [
    {
      date: "2016",
      title: "Art Stgo",
      location: "GAM, Santiago, Chile",
    },
    {
      date: "2016",
      title: "Solo Exhibition",
      location: "Biblioteca Viva Sur, Santiago, Chile",
    },
    {
      date: "2016",
      title: "De Radícibus",
      location: "Biblioteca Viva Tobalaba, Santiago, Chile",
    },
    {
      date: "2015",
      title: "Solo Exhibition",
      location: "Biblioteca Viva Norte, Santiago, Chile",
    },
    {
      date: "2015",
      title: "Café con Cuento",
      location: "Galería Escaparate, Valparaíso, Chile",
    },
    {
      date: "2010",
      title: "Solo Exhibition",
      location: "Centro Cultural Belleasco, Buenos Aires, Argentina",
    },
    {
      date: "2009",
      title: "Grand Small Works",
      location: "F.U.E.L Collection Gallery, Philadelphia, PA",
    },
  ],
};

export default profile;

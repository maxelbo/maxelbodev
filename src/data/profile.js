function getAge(dateString = "1988/07/25") {
  let today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const profile = {
  name: "Max Elbo",
  email: "hello.maxelbo@gmail.com",
  currentCompany: "Deloitte",
  currentRole: "Designer / Developer",
  currentLocation: "Tokyo, Japan",
  timelineData: [
    {
      company: "Deloitte",
      title: "Deloitte Tohmatsu Consulting",
      logo: "/assets/about/logo-deloitte.webp",
      date: "2020 - present",
      place: "Tokyo, Japan",
      direction: "dir-r",
      description:
        "I currently work in the marketing division at Deloitte Consulting, doing frontend development. I've worked on corporate websites, and CRM apps to help the Japanese Government improve its DX.",
      // clients: [
      //   "Tokyo",
      //   "Shibuya",
      //   "Chiyoda",
      //   "Nara Prefecture",
      //   "Yokohama",
      //   // "Daito Trust Construction",
      //   // "Dunlop",
      //   // "Toyota",
      // ],
      skills: ["Frontend Development", "Design", "Illustration"],
    },
    {
      company: "Amplifier",
      title: "AMP",
      logo: "/assets/about/logo-amp.webp",
      date: "2018 - 2020",
      place: "Tokyo, Japan",
      direction: "dir-l",
      description:
        "I moved to Japan and worked at Amplifier, a design studio in Tokyo. Here, I got to learn new skills, like motion graphics and 3D modeling.",
      clients: [
        "Tokyo National Museum",
        "KDDI Museum",
        "Dentsu Tec",
        "MullenLowe Japan",
      ],
      skills: ["Illustration", "Animation", "Web Design"],
    },
    {
      company: "JWT Dubai",
      title: "J. Walter Thompson Dubai",
      logo: "/assets/about/logo-jwt.webp",
      date: "2016 - 2017",
      place: "Dubai, UAE",
      direction: "dir-r",
      description:
        "I moved to Dubai and worked as an Art Director at J. Walter Thompson (not JSON Web Token). I won more awards, including a Grand Prix at the Dubai Lynx.",
      clients: [
        "Coca-Cola",
        "Kraft",
        "Kenwood",
        "Kinokuniya",
        "Philadelphia Cream Cheese",
      ],
      skills: ["Art Direction", "Illustration"],
    },
    {
      company: "Elborium",
      title: "Elborium",
      logo: "/assets/about/logo-elborium.webp",
      date: "2013 - 2016",
      place: "Argentina - Mexico - Chile",
      direction: "dir-l",
      description:
        "I started working as an Illustrator, freelancing for publishing companies and advertising agencies, while living in different countries.",
      clients: [
        "Editorial Confin",
        "Fundación Ciencia Joven",
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
    {
      company: "BBDO",
      title: "BBDO Buenos Aires",
      logo: "/assets/about/logo-bbdo.webp",
      date: "2012 - 2013",
      place: "Buenos Aires, Argentina",
      direction: "dir-r",
      description:
        "I moved to BBDO as an Art Director, and had the chance to work with PepsiCo brands.",
      clients: ["Doritos", "7up", "Dr Lemon"],
      skills: ["Art Direction"],
    },
    {
      company: "Ogilvy",
      title: "Ogilvy & Mather Argentina",
      logo: "/assets/about/logo-ogilvy.webp",
      date: "2011 - 2012",
      place: "Buenos Aires, Argentina",
      direction: "dir-l",
      description:
        "I started my career working as a Junior Art Director at Ogilvy & Mather Argentina. I did my first TV commercial here, and I won my first awards, including a silver lion at Cannes.",
      clients: ["Tang", "AMIA", "Mr. Muscle"],
      skills: ["Art Direction"],
    },
  ],
  earlyLife: [
    {
      date: "2011",
      description: `I graduated from the Escuela superior de creativos publicitarios, a technical school in Buenos Aires, Argentina.`,
    },
    {
      date: "2006",
      description: `I graduated from the Grange School, an international school in Santiago, Chile.`,
    },
    {
      date: "1988",
      description: `I was born in Santiago, Chile, on July 25. That means that I'm ${getAge()} years old as you read this.`,
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
    "2016 - Art Stgo, GAM, Santiago, Chile",
    "2016 - Solo Exhibition, Biblioteca Viva Sur, Santiago, Chile",
    "2016 - Dē Rādīcibus —a show with my siblings—, Biblioteca Viva Tobalaba, Santiago, Chile",
    "2015 - Solo Exhibition, Biblioteca Viva Norte, Santiago, Chile",
    "2015 - Café con Cuento, Galería Escaparate, Valparaíso, Chile",
    "2010 - Solo Exhibition, Centro Cultural Belleasco, Buenos Aires, Argentina",
    "2009 - Grand Small Works, juried art exhibition, F.U.E.L Collection Gallery, Philadelphia, PA",
  ],
};

export default profile;

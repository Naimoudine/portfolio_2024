export const data = [
  {
    page: "work",
    projects: [
      {
        id: 1,
        name: "Todo list",
        description:
          "This is a simple todo list app built with vuejs to test my current knowledge.",
        tags: ["dev", "personal project"],
        img: "/assets/images/projects/todo-screen.png",
        video: "",
        stack: ["Vuejs", "Tailwind"],
        links: [
          { to: "website", url: "https://todo-list-nine-xi.vercel.app/" },
          {
            to: "github",
            url: "https://github.com/Naimoudine/game-catalog/tree/main",
          },
        ],
        space: 3,
      },
      {
        id: 2,
        name: "Harry Potter Quiz",
        description:
          "This project is a Harry Potter quiz made for fan to test their knowledge. It was make with HTML/CSS & Javascript during a web developper training as a group project.",
        tags: ["dev", "group project"],
        img: "/assets/images/projects/harry-screen.png",
        video: "",
        stack: ["HTML", "CSS", "Javascript"],
        links: [
          { to: "website", url: "https://quiz-harry-potter-six.vercel.app/" },
          {
            to: "github",
            url: "https://github.com/Naimoudine/quiz-harry-potter",
          },
        ],
        space: 2,
      },
      {
        id: 3,
        name: "Game Catalog",
        description:
          "This project is a game catalog website built with Vue3 and the RAWG API for the games. My goal was to build a project that fetches APIs for data, so I used a video game API because I like games :).",
        tags: ["dev", "personal project"],
        img: "",
        video: "",
        stack: ["Vue", "CSS", "Javascript"],
        links: [
          { to: "website", url: "https://game-catalog-server.vercel.app" },
          {
            to: "github",
            url: "https://github.com/Naimoudine/game-catalog/tree/main",
          },
        ],
        space: 2,
      },
      {
        id: 4,
        name: "Ip address tracker",
        description:
          "This is a solution to the ip address tracker challenge. I built it with Vuejs and as recommended with leaftletjs library for the map and IP Geolocation API to get ip details.",
        tags: ["dev", "personal project"],
        img: "/assets/images/projects/ip-tracker-screen.png",
        video: "",
        stack: ["HTML", "CSS", "Javascript"],
        links: [
          { to: "website", url: "https://ip-tracker-app-omega.vercel.app/" },
          {
            to: "github",
            url: "https://github.com/Naimoudine/game-catalog/tree/main",
          },
        ],
        space: 3,
      },
    ],
  },
  {
    page: "Info",
    fullname: "Naïmoudine Saidi",
    jobTitle: "Fullstack developer",
    img: "",
    description:
      "Hello, My name is Naïmoudine SAIDI, I am 24 years old, and I am currently training to become a fullstack developer. Since I discovered web development, it has become an integral part of my life, much more than just a passion. I love seeing the tangible results of my creations and finding innovative solutions to complex problems. My goal is to become a reliable developer, capable of delivering modern and functional websites. I am determined to hone my skills to meet expectations and bring real added value to every project I work on. Welcome to my portfolio!",
    cv: "",
    stack: {
      frontend: ["React", "Vue", "Tailwind"],
      backend: ["Node", "Express", "SQL", "MySQL"],
    },
  },
];

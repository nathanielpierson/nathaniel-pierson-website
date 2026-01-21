import saladbarLogo from "../Images/SaladBar images/saladbar-logo03.gif";
import lastfmChartMain from "../Images/Charting App Images/2.png";
import lastfmChartScreen01 from "../Images/Charting App Images/lastfm-sorting-screenshot01.png";
import lastfmChartScreen03 from "../Images/Charting App Images/lastfm-sorting-screenshot03.png";
import kaleidoscopesGif from "../Images/Kaleidoscopes images/all-moderewstrictive.gif";

export const projects = [
  {
    slug: "saladbar-plant-growing-app",
    title: "Saladbar: The Plant-Growing App",
    description:
      "Track your plant collection, watering schedule, and growth over time with a playful, game-like interface.",
    longDescription:
      "Saladbar is a full-stack application for plant enthusiasts. It lets users create an account, add plants to their collection, and log care events like watering and repotting.\n\nOn the frontend, a React-based interface focuses on approachability and fun visuals so plant care feels more like a game than a chore. On the backend, a Node.js + Postgres API handles authentication, data storage, and querying, giving the app room to scale as collections grow.",
    technologies: ["React", "Node.js", "Postgres"],
    liveUrl: "https://plant-capstone-frontend.onrender.com",
    frontendGithubUrl:
      "https://github.com/nathanielpierson/plant-capstone-frontend",
    backendGithubUrl: "https://github.com/nathanielpierson/plant-capstone-app",
    image: saladbarLogo,
  },
  {
    slug: "album-charting-app",
    title: "Last FM Charting App",
    description: "Music data app that charts album plays over time using the last.fm API",
    longDescription:
      "My Last.fm Charting App is an exploration in processing and manipulating data from an API. It takes info from the music data analysis website Last fm and transforms it into a new time-based chart that the original site does not offer.",
    technologies: ["API Driven Development", "Express.js", "Node.js", "Cursor"],
    liveUrl: "https://lastfm-charting-app-frontend.onrender.com",
    frontendGithubUrl:
      "https://github.com/nathanielpierson/lastfm-timeline-frontend",
    backendGithubUrl:
      "https://github.com/nathanielpierson/lastfm-backend-node-version/tree/main",
    image: lastfmChartMain,
    screenshots: [
      {
        src: lastfmChartScreen01,
        caption:
          "After entering the username of a a last.fm user, this app returns their listening data for albums over various time frames with the ability to resort the data by whichever available time measurement you choose.",
      },
      {
        src: lastfmChartScreen03,
        caption: null,
      },
    ],
  },
  {
    slug: "modular-kaleidoscopes",
    title: "Modular Kaleidoscopes: An Experimental Art Piece using Coding",
    description:
      "Experimental, interactive kaleidoscope visuals built in Processing, focusing on recursion and user-driven variation.",
    longDescription:
      "This project explores recursion, symmetry, and emergent visuals using Processing, a Java-based creative coding framework.\n\nUsers can interact with parameters like color, rotation speed, and symmetry count to generate unique kaleidoscopic compositions, turning a simple ruleset into an endless set of visual outcomes.",
    technologies: ["Java", "Processing", "macOS"],
    liveUrl: null,
    frontendGithubUrl:
      "https://github.com/nathanielpierson/processing/tree/main",
    backendGithubUrl: null,
    image: kaleidoscopesGif,
    youtubeUrl: "https://www.youtube.com/watch?v=C6xWisqpqkg&t=7s",
  },
  {
    slug: "example-fullstack-project-four",
    title: "tournament project",
    description:
      "Work in progress. A way to view tournament results with no spoilers by clicking on matchups in the app.",
    longDescription:
      "Use this slot for another full-stack project. You can describe the problem it solves, the architecture, and anything you learned while building it.",
    technologies: ["Coding"],
    liveUrl: "https://example.com",
    frontendGithubUrl:
      "https://github.com/nathanielpierson/lastfm-timeline-frontend",
    backendGithubUrl:
      "https://github.com/nathanielpierson/smash-ai-tournament-backend",
    image: null,
  },
];

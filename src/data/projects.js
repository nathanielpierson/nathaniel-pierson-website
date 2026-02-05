import saladbarLogo from "../Images/SaladBar images/saladbar-logo03.gif";
import saladbarPlantGrow from "../Images/SaladBar images/plantgrow.gif";
import saladbarPlantUpdate from "../Images/SaladBar images/plant-update-screenshot.png";
import lastfmChartMain from "../Images/Charting App Images/2.png";
import lastfmChartScreen01 from "../Images/Charting App Images/lastfm-sorting-screenshot01.png";
import lastfmChartScreen03 from "../Images/Charting App Images/lastfm-sorting-screenshot03.png";
import kaleidoscopesGif from "../Images/Kaleidoscopes images/all-moderewstrictive.gif";
import tournamentLogo from "../Images/Tournament Images/Custom CPU Tournament Logo.png";

export const projects = [
  {
    slug: "saladbar-plant-growing-app",
    title: "Saladbar: The Plant-Growing App",
    description:
      "Track your plant collection, watering schedule, and growth over time with a playful, game-like interface.",
    longDescription:
      "Saladbar is a web application I built using Ruby on Rails and React.js. The project is a inspired by farming simulators but has a more realistic framing. The user has the ability to make new instances of available plants and water them once set intervals are reached until they are fully grown; currently, the app can track how many of a type of plant a user has grown as well as how many they have currently growing; my future plans with the project are to add rewards for growing certain amounts of certain plants. One thing I really like about the structure of the app is its the way I built it with scalability. As an admin of the app, I have the ability to add new types of plants that can be created with their own specific watering requirements and growth rates.",
    technologies: ["React", "Ruby on Rails", "Postgres", "npm"],
    liveUrl: "https://plant-capstone-frontend.onrender.com",
    frontendGithubUrl:
      "https://github.com/nathanielpierson/plant-capstone-frontend",
    backendGithubUrl: "https://github.com/nathanielpierson/plant-capstone-app",
    image: saladbarLogo,
    screenshots: [
      {
        src: saladbarPlantGrow,
        caption:
          "On your schedules page, you can plant new plants, choosing the type of plant from a dropdown menu. It is available immediately to water, and then it will tell you to come back after an amount of time (specific to the type of plant) to water it again.",
      },
      {
        src: saladbarPlantUpdate,
        caption:
          "Each type of plant has its own unique attributes; namely, the amount of time you have to wait between watering it, the amount of sunlight it needs, and how many times you need to water it before it is fully grown. The app also keeps track of how many of each time of plant you have currently growing and have already grown, and you can see those stats on your profile page.",
      },
    ],
  },
  {
    slug: "album-charting-app",
    title: "Last FM Charting App",
    description: "Music data app that charts album plays over time using the last.fm API.",
    longDescription:
      "My Last.fm Charting App is an exploration in processing and manipulating data from an API. It takes info from the music data analysis website Last fm and transforms it into a new time-based chart that the original site does not offer.\n\nThe Last.fm API provides \"top albums\" for a single timeframe at a time, but it does not offer historical breakdowns that allow direct comparison (for example, seeing how an album's popularity changes between 3 months and 6 months).\n\nThis backend solves that limitation by:\n\n- Making multiple Last.fm API requests across different time ranges\n- Normalizing the results into a single data model\n- Persisting derived play count data in a PostgreSQL database\n\nAll of this data manipulation happens behind the scenes so the user gets consistent album data for a clean chart of their streams over time.",
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
      "This project explores recursion, symmetry, and emergent visuals using Processing, a Java-based creative coding framework.\n\nUsers can interact with parameters like color, rotation speed, and symmetry count to generate unique kaleidoscopic compositions. Recursion occurs across different modes, such as with different shapes. Includes 2D and 3D modes, as well as a 2.5D using animated beziers. Different buttons change the colors, shapes, amount of repeating shapes, and other facets of the animation.",
    technologies: ["Java", "Processing", "macOS"],
    liveUrl: null,
    frontendGithubUrl:
      "https://github.com/nathanielpierson/processing/tree/main",
    backendGithubUrl: null,
    image: kaleidoscopesGif,
    youtubeUrl: "https://www.youtube.com/watch?v=C6xWisqpqkg&t=7s",
  },
  {
    slug: "smash-bros-custom-ai-tournament",
    title: "tournament project",
    description:
      "A project that combines video development with website programming to view tournament results by clicking on matchups in an app.",
    longDescription:
      "An abstract idea I had for testing how custom edited characters in a video game from 2014 has turned into one of my most ambitious and interesting coding projects. While still in progress, here you can see where the development of the project is going -- you click on a matchup and can watch it direct from a YouTube embed, or you can even hit skip to see the result if it's not a match you're interested in learning the nitty gritty of how the result happened.",
    technologies: ["Javascript", "HTML", "CSS", "Postgres", "Adobe Creative Suite"],
    liveUrl: "https://smash-ai-tournament-frontend.onrender.com",
    frontendGithubUrl:
      "https://github.com/nathanielpierson/smash-ai-tournament-frontend",
    backendGithubUrl:
      "https://github.com/nathanielpierson/smash-ai-tournament-backend",
    image: tournamentLogo,
  },
];

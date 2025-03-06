import project1 from "../assets/projects/project1.png";
import project3 from "../assets/projects/project2.png";
import project2 from "../assets/projects/project3.png";


export const EXPERIENCES = [
  {
    year: "May 2022 - Present",
    role: "Software Engineer",
    company: "JOVEO",
    description: [
      `Currently leading frontend development for the platform engineering team, delivering central features and packages for 10 different products. Developed Frontend for managing authentication for all products, including login via Email, Google and a centralized logout and an embeddable Appswitcher for navigating across all products`,
      `Developed UI for a Advanced User Management system that manages users, user groups, and roles across 10 different products, enabling seamless access control. Eliminated tech-ops involvement in access management, reducing tech-ops involvement in access control by approximately 80% (approx)`,
      `Engineered an embeddable, customizable, Generative-AI-powered chat-bot for web applications, enabling developers to tailor headings, avatars, and animations to match branding and UX needs, and reducing CSM queries by approximately 30%`,
      `Engineered a streamlined interface inspired by Facebook Business Manager to manage ads, campaigns, and budgets. Aligned with Facebook’s design standards, it attracted over 10 new customers within a month, showcasing its impact on user engagement and acquisition`,
      `Led a collaborative initiative with the Design team to enhance the UI/UX and accessibility of existing systems over a four-month period, resulting in a 210% improvement in the NPS score (Q4 2023)`,
      `Core contributor to design system library, Played a key role in developing the design system library, offering frontend developers modular React components, standardized fonts, and color schemes, significantly improving development efficiency and saving substantial time and effort.`,
    ],
    technologies: ["Angular","React","MaterialUI","NextJS", "CSS", "Javascript", "Typescript"],
  },
  {
    year: "June 2021 - May 2022",
    role: "Software Engineer-UI",
    company: "OFBUSINESS",
    description: [
      `Designed and implemented the user interface within our application for E-way Bill extension and cancellation, replacing manual processes through government portals. This initiative significantly improved efficiency and streamlined logistics for the operations team, marking a substantial advancement for the company`,
      `Created a user interface facilitating ledger management, email dispatch, and client onboarding via GSTIN, PAN, and bank accounts. This automation replaced manual processes previously handled by the operations team, enhancing efficiency and accuracy`,
      `Created central dashboards for internal users to view and take action on items like loans, applications and reminders.`
    ],
    technologies: ["React","AngularJS", "CSS", "HTML", "Javascript"],
  },
  {
    year: "Jan 2021 - May 2021",
    role: "Software Engineering Intern",
    company: "ZOSTEL",
    description: [
      `Solely designed and built Instagram-like UI with additional tools for monitoring social media metrics from scratch`,
      `Implemented dynamic grids and charts for real-time monitoring of bookings, sales, and ratings, replacing manual Excel comparisons and saving significant time and effort`,
    ],
    technologies: ["React", "CSS", "HTML", "Javascript"],
  },
];

export const NAVLINKS = {
  github: "https://github.com/Naman-l",
  linkedIn: "https://www.linkedin.com/in/naman-sharma-dev98/",
  x: "https://x.com/the_growing_up",
};


export const HERO_CONTENT = `
Frontend engineering leader who transforms business challenges into revenue-generating digital experiences, with a proven track record of boosting customer acquisition and operational efficiency.\n
I don't just write code—I build solutions that directly impact the bottom line.\n
I'm currently working @joveo \nBuilding with Javascript | ReactJs | Angular almost everyday since 4 years \n
`;

export const ABOUT_TEXT = `

Experienced frontend engineer proficient in JavaScript frameworks, expertise in developing central features and UI systems for large-scale projects.\n
Skilled in managing large-scale projects, authentication, access management, AI-powered chatbots and more.\n
Practical knowledge of browser compatibility issues, support, and how to create experiences that adapt across browsers and devices\n
Proven track record in enhancing UI/UX, specializing in high-performance interfaces and web performance optimization.\n
Passionate about creating engaging user experiences. Explore my work and connect! 
`




export const PROJECTS = [
  {
    title: "ZenFitX",
    image: project1,
    description:
      "Built the MVP for this fitness activity booking app. Made landing pages,login via OTP, payments, booking flows, checkout pages, and more.(only mobile web)",
    technologies: ["ReactJs", "TypeScript","JS","CSS"],
    liveLink: "https://zenfitx.in",
    githubLink: "https://github.com/agrawaltejas01/wellness-app"
  },
  {
    title: "Crypto Price Tracker",
    image: project3,
    description:
      "Realtime access to prices of over 250 cryptocurrencies using Coinbase Pro APIs. ",
    technologies: ["React", "CSS", "Websockets"],
    liveLink: "http://cryptopricetracker.vercel.app/",
    githubLink: "https://github.com/Naman-l/cryptoprice-tracker"
  },
  {
    title: "Twitter Clone",
    image: project2,
    description:
      "Built a frontend Twitter clone using React.js, styled using CSS, material UI and Deployed using Firebase.",
    technologies: ["React", "Tailwind", "Firebase"],
    liveLink: "https://twitter-clone-38274.web.app/",
    githubLink: "https://github.com/Naman-l/twitter-clone"
  },
];

export const CONTACT = {
  email: "namansharma99680@gmail.com",
  phoneNo: "+91-8239097117",
};


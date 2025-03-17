import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  swiggy,
  myntra_fwd,
  fancall,
  fs,
  garnier,
  Disha,
  ig,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Content Creator",
    icon: web,
  },
  {
    title: "Youtuber",
    icon: mobile,
  },
  {
    title: "Vlogger",
    icon: backend,
  },
  {
    title: "Speaker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Unstop",
    company_name: "Content Creator Intern",
    icon: starbucks,
    iconBg: "#383E56",
    date: " May 2024 - July 2024",
    points: [
      "Developed and executed visual content strategies that enhanced brand visibility, leading to over 20K increase in Instagram followers",
      "Collaborated on Ad campaigns for Flipkart Grid and Tata Crucible, resulting in over 4 lakh and over 1.2 lakh registrations, respectively",
      "Developed, edited, and performed in student-centric multimedia content that strengthened branding and expanded reach to 5 million",
    ],
  },
  {
    title: "YouTube | Instagram",
    company_name: "Content Creator",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2021 - Present",
    points: [
      "Built a YouTube and Instagram presence with over 35,000 followers by creating content, fostering a strong and engaged community",
      "Produced several viral videos, contributing to a view count of over 20 million, significantly enhancing channel & audience engagement",
      "Executed brand promotions, including partnerships with Spilz, by creatively integrating products into content, driving brand awareness",
    ],
  },
  {
    title: "Unacademy",
    company_name: "Educator",
    icon: shopify,
    iconBg: "#383E56",
    date: "October 2023 - November 2023",
    points: [
      "Created and produced informational videos on JEE/NEET preparation for Unacademy platform, reaching an audience of 10K+ students",
      "Collaborated closely with a team of creators and the Unacademy Marketing team to develop and deliver engaging educational content",
      "Developed and executed product advertising strategies within the content, significantly boosting brand visibility & student engagement",
    ],
  },
  {
    title: "Technology Filmmaking and Photography Society",
    company_name: "Senior Team Member",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "December 2021 - Present",
    points: [
      "Spearheaded the scriptwriting, screenplay, and cinematography for the Indian Film Project, completing the production within a 50-hour",
      "Played diverse roles in the IFP project, bringing characters to life with performances that enriched the creative vision and storytelling",
      "Directed and executed sound design for the Freshers’ Production P.T.O overseeing post-production that met high artistic standards",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gold | Open IIT Short Film Making | IIT Kharagpur",
    description:
      "Led a team of 5+ students to create a short film that won gold in the Open IIT Short Film Making Competition 2022. Managed the entire production process, from ideation to final editing, ensuring a compelling narrative. Fostered teamwork and creativity to achieve top honors in a competitive setting.",
    tags: [
      {
        name: "Gold",
        color: "blue-text-gradient",
      },
      {
        name: "Open IIT",
        color: "green-text-gradient",
      },
      {
        name: "Film-making",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://drive.google.com/file/d/1QeivcDGaue92GU09wEgmogEUgdx-JMNc/view?usp=drivesdk",
  },
  {
    name: "Gold | Reel Rush | Global Entreprenuership Submit | IIT Kharagpur ",
    description:
      "Won 1st place in the Reel Rush competition by E-Cell with a standout reel on the Global Entrepreneurship Summit. Created an impactful 50-second reel from 5 hours of footage, garnering 10k+ views and top recognition for storytelling and multimedia production.",
    tags: [
      {
        name: "Gold",
        color: "blue-text-gradient",
      },
      {
        name: "Reel-Rush",
        color: "green-text-gradient",
      },
      {
        name: "Reel-Making",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://drive.google.com/file/d/1QjtfGjStqUUCwwO7Vv0wbTZ8wS8dt431/view?usp=drivesdk",
  },
  {
    name: "Silver | Ad Design | General Championship | IIT Kharagpur",
    description:
      "Co-wrote and directed a mental health awareness ad that won silver in the Ad Design Competition at the General Championship. Ensured a polished, impactful final product and contributed to a compelling presentation that secured top recognition.",
    tags: [
      {
        name: "Silver",
        color: "blue-text-gradient",
      },
      {
        name: "Ad-Design",
        color: "green-text-gradient",
      },
      {
        name: "GC",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const projects2 = [
  {
    name: "Swiggy",
    description:
      "Collaborated with Swiggy on a reel that garnered 109K views, showcasing engaging content for their audience.",
    tags: [
      {
        name: "Swiggy",
        color: "blue-text-gradient",
      },
      {
        name: "Reel-Making",
        color: "green-text-gradient",
      },
     
    ],
    image: swiggy,
    source_code_link: "https://www.instagram.com/share/BBPrXxZhA8",
  },
  {
    name: "Flipkart Spoyl",
    description:
      "Partnered with Flipkart Spoyl to create a reel that reached 200K views, highlighting their brand offerings.",
    tags: [
      {
        name: "Flipkart Spoyl",
        color: "blue-text-gradient",
      },
      {
        name: "Reel-Making",
        color: "pink-text-gradient",
      },
    ],
    image: fs,
    source_code_link: "https://www.instagram.com/share/_0nQIOL-8",
  },
  {
    name: "Myntra FWD",
    description:
      "Worked with Myntra FWD on a reel that attracted 105K views, promoting their fashion-forward products.",
    tags: [
      {
        name: "Myntra FWD",
        color: "blue-text-gradient",
      },
      {
        name: "Reel-Making",
        color: "green-text-gradient",
      },
    ],
    image: myntra_fwd,
    source_code_link: "https://www.instagram.com/share/_eY2MrOXP",
  },
  {
    name: "Garnier",
    description:
      "Collaborated with Garnier on a reel that achieved 64K views, focusing on skincare and beauty content.",
    tags: [
      {
        name: "Garnier",
        color: "blue-text-gradient",
      },
     
      {
        name: "Reel-Making",
        color: "pink-text-gradient",
      },
    ],
    image: garnier,
    source_code_link: "https://www.instagram.com/share/BBACV5unZB",
  },
  {
    name: "FanCall",
    description:
      "Partnered with FanCall on a reel that received 1.5K views, exploring interactive fan engagement strategies.",
    tags: [
      {
        name: "FanCall",
        color: "blue-text-gradient",
      },
      {
        name: "Reel-Making",
        color: "green-text-gradient",
      },
      
    ],
    image: fancall,
    source_code_link: "https://www.instagram.com/share/BBLyym06DY",
  },
  {
    name: "Disha Publication",
    description:
      "Collaborated with Disha Publication on a reel that garnered 50K views, promoting educational content and resources.",
    tags: [
      {
        name: "Disha Publication",
        color: "blue-text-gradient",
      },
      {
        name: "Reel-Making",
        color: "pink-text-gradient",
      },
    ],
    image: Disha,
    source_code_link: "https://www.instagram.com/share/_q7XYHhsT",
  },
];

export { services, technologies, experiences, testimonials, projects, projects2 };

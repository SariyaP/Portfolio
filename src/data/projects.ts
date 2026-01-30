export type Project = {
  title: string;
  slug: string;
  date: string;
  role: string;
  summary: string;
  bullets: string[];
  tools: string[];
};

const projects: Project[] = [
  {
    title: "KU-Work",
    slug: "ku-work",
    date: "Sep 2025 – Nov 2025",
    role: "UX/UI Designer, Brand Identity Designer & Frontend Developer",
    summary:
      "A job board tailored for Kasetsart University students, with a focus on software and computer-related opportunities to streamline job discovery.",
    bullets: [
      "Conducted user research and analyzed user requirements to define core features and user flows",
      "Designed end-to-end UX/UI and interactive prototypes using Figma and Canva",
      "Developed a cohesive brand identity to ensure visual consistency across the application"
    ],
    tools: ["HTML", "CSS", "JavaScript", "Nuxt.js","Figma", "Canva"]
  },
  {
    title: "Weather Laundry",
    slug: "weather-laundry",
    date: "Apr 2025 – May 2025",
    role: "UX/UI Designer & Frontend Developer",
    summary:
      "A weather-informed laundry assistant that uses temperature, humidity, and wind data to help users plan the best time to do laundry.",
    bullets: [
      "Designed user interfaces and visual elements using Canva",
      "Developed responsive frontend using HTML, CSS, JavaScript, TailwindCSS, and Chart.js",
      "Created visual assets and data visualizations to improve usability and information clarity"
    ],
    tools: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Chart.js", "Canva"]
  },
  {
    title: "Personalised Pantry",
    slug: "personalised-pantry",
    date: "Sep 2024 – Dec 2024",
    role: "UX/UI Designer & Frontend Developer",
    summary:
      "A recipe companion that supports daily cooking with smarter guidance, reducing stress and improving the overall kitchen experience for home cooks.",
    bullets: [
      "Designed application UI and user flows using Canva",
      "Implemented frontend features using HTML, CSS, and JavaScript",
      "Conducted manual UI testing to improve user experience and interface reliability"
    ],
    tools: ["HTML", "CSS", "JavaScript", "Canva"]
  }
];

export const getAllProjects = () => projects;

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export default projects;

export const projects = [
  {
    title: "Shree Krishna Quotes App",
    description:
      "A spiritual web application that delivers Bhagavad Gita quotes with an engaging, modern UI. The app helps users find peace and positivity through mood-based quote filtering and interactive features.",
    techStack: ["React.js", "Tailwind CSS", "Axios"],
    project_img: "/images/shree-krishna-app.png",

    liveUrl: "https://shree-krishna-quotes-app.netlify.app",
    githubUrl: "https://github.com/goforindu/ai-quotes-frontend-app",
  },
  {
    title: "Feedback Widget for React",
    description:
      "An open-source NPM package that makes it simple to collect user feedback in React applications with a modern, interactive UI.",
    techStack: ["React", "Tailwind css"],
    project_img: "/images/feedback.png",
    liveUrl: " https://www.npmjs.com/package/@goforindu/feedback-widget",
    githubUrl: "",
  },
  {
    title: "Admin Dashboard For Shree Krishna Quotes App",
    description:
      "Full-featured task manager with authentication, deadline alerts, priority tagging, and responsive UI. Built with full-stack MERN.",
    techStack: ["MERN", "JWT Auth", "Tailwind", "Redux"],
    project_img: "/images/dashboard.png",
    liveUrl: "",
    githubUrl: "",
  },
];

export type Project = {
  title: string;
  description: string;
  project_image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
};

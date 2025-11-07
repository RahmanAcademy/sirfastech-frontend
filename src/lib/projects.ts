import type { Project } from "@/components/ProjectShowcase";

export const projects: Project[] = [
  {
    name: "Movielyzer",
    description: "A video analysis and manipulation tool",
    details:
      "Search through videos like text, summarize hours in seconds, and add natural-sounding AI narration.",
    technologies: ["Django", "React"],
    deployment: "AWS",
    url: "https://movielyzer.com/",
    image: "/projects/movielyzer_landing_page.png",
    accent: "white",
    background: "bg-slate-400",
  },
  {
    name: "Commitlyzer",
    description: "AI-assisted commit analysis & impact insights",
    details:
      "Automated summaries, token budgeting, and PR review helpers to speed up code reviews and align team context.",
    technologies: ["Next.js", "Django", "Postgres", "Celery"],
    deployment: "Cloud / GitHub App",
    url: "https://Commitlyzer.com/",
    image: "/projects/commitlyzer_landing_page.png",
    accent: "blue",
    background: "bg-blue-400",
  },

  {
    name: "Easymeal",
    description: "A robust CRUD application for managing vending machines",
    details:
      "Automates refills, encashment & sales monitoring, route planning, maintenance scheduling, and employee management.",
    technologies: ["Django", "Celery", "React"],
    deployment: "AWS",
    url: "#",
    accent: "emerald",
    background: "bg-amber-600",
  },
  {
    name: "RahmanAcademy",
    description: "An interactive learning platform for medical students",
    details:
      "Topic-based MCQs with performance insights and a comprehensive authoring workflow for educators.",
    technologies: ["React", "Django"],
    deployment: "Heroku",
    url: "#",
    accent: "sky",
    background: "bg-sky-600",
  },
  {
    name: "Snowflake Warehousing System",
    description: "A comprehensive data warehousing solution",
    details:
      "Handled transport of 1B+ rows with efficient pipelines and pruning; substantial compute & storage cost savings.",
    technologies: ["Python", "Snowflake"],
    deployment: "Snowflake",
    url: "#",
    accent: "cyan",
    background: "bg-cyan-600",
  },
];

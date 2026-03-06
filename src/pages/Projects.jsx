import React from "react";
import SectionHeading from "../components/portfolio/SectionHeading";
import ProjectCard from "../components/portfolio/ProjectCard";

const PROJECTS = [
  {
    title: "E-Signature Platform",
    description:
      "A production-grade E-Signature platform powering document creation, multi-step signing workflows, and dynamic form management at scale. Built as the core product at Actanos.",
    tech: [
      "React 18",
      "TypeScript",
      "TanStack Router",
      "React Query",
      "@dnd-kit",
      "react-rnd",
      "pdf-lib",
      "pdfjs-dist",
      "EditorJS",
      "Web Workers",
    ],
    date: "November 2024 – Present",
    highlights: [
      "Multi-page PDF editor with drag-and-drop field placement, resizable/movable fields, page rotation and reordering",
      "End-to-end PDF processing pipeline creation, editing, watermarking, image-to-PDF merging, and DOCX parsing",
      "Rich document editor with 16+ custom EditorJS plugins including AI-powered content generation",
      "Multi-method signature capture (draw, type, upload) with 20+ fonts, OTP verification, and audit trails",
      "Secure auth system with token refresh, 2FA, RBAC, and multi-tenant workspace isolation",
      "Performance optimized with Web Workers, virtual scrolling, code splitting, and IndexedDB caching",
      "Full collaboration engine with multi-document signing, approval chains, bulk send, and reusable templates",
    ],
  },
  {
    title: "Process & Disk Scheduling Simulator",
    description:
      "An interactive educational tool that visualizes CPU scheduling and disk I/O optimization algorithms, helping students understand operating system concepts through hands-on experimentation.",
    tech: ["JavaScript", "HTML", "CSS", "Plotly.js"],
    date: "January 2024 – April 2024",
    highlights: [
      "Implemented Round Robin, FCFS, SJN, and Priority-based CPU scheduling algorithms",
      "Built SCAN, C-SCAN, LOOK, and C-LOOK disk scheduling visualizations",
      "Interactive charts powered by Plotly.js for real-time algorithm comparison",
    ],
  },
  {
    title: "E-Shop — E-commerce Application",
    description:
      "A full-featured e-commerce storefront built with React, featuring product browsing, user authentication, and automated CI/CD deployment to GitHub Pages.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "GitHub Actions"],
    date: "August 2023 – December 2023",
    highlights: [
      "User sign-in/sign-out with profile management",
      "Automated GitHub Actions CI/CD pipeline for continuous deployment",
      "Responsive, mobile-first design with seamless data updates",
    ],
  },
];

export default function Projects() {
  return (
    <div className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my approach to solving complex frontend challenges"
        />

        <div className="grid grid-cols-1 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

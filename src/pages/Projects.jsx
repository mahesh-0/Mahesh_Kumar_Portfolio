import React, { useState } from "react";
import SectionHeading from "../components/portfolio/SectionHeading";
import ProjectCard from "../components/portfolio/ProjectCard";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "E-Signature Platform",
    category: "Full-Stack Web",
    type: "Professional",
    description:
      "Production-grade E-Signature platform powering document creation, multi-step signing workflows, and multi-tenant workspace management at scale. Built end-to-end at Orotron.",
    tech: [
      "React 18",
      "TypeScript",
      "Node.js",
      "Express.js",
      "TanStack Router",
      "React Query",
      "MongoDB",
      "@dnd-kit",
      "react-rnd",
      "pdf-lib",
      "pdfjs-dist",
      "EditorJS",
      "Web Workers",
      "JWT / RBAC",
      "2FA / OTP",
    ],
    date: "November 2024 – March 2026",
    highlights: [
      "Browser-based multi-page PDF editor with drag-and-drop field placement, resizable/movable components, and real-time overflow detection",
      "End-to-end document processing pipeline — PDF generation, editing, watermarking, image merging, and DOCX parsing",
      "Rich document editor with EditorJS and 16+ custom plugins including AI-powered content generation",
      "Multi-method signature capture (draw, type, upload) with 20+ fonts, OTP-based verification, enforced signing order, and automated audit trail generation",
      "Secure auth system: JWT, refresh tokens, 2FA, RBAC, and multi-tenant workspace isolation",
      "Performance optimized via Web Workers + Comlink, virtual scrolling, dynamic code splitting, and IndexedDB caching",
      "Full collaboration engine: multi-document signing sequences, approval chains, bulk send, reusable templates, and company-wide branding with cross-tab sync",
      "RESTful APIs with Node.js & Express.js for document handling, user management, and signing workflows",
    ],
  },
  {
    title: "ServiceHub",
    category: "Full-Stack Web",
    type: "Personal Project",
    description:
      "Full-stack service booking platform with role-based access for users, providers, and admins — enabling service discovery, booking, and end-to-end workflow management.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "REST APIs",
    ],
    date: "Personal Project",
    highlights: [
      "Role-based access control for three user types: customers, service providers, and admins",
      "RESTful APIs using Node.js and Express.js for user authentication, service listings, and booking lifecycle management",
      "Responsive frontend with React and TypeScript integrating dynamic booking flows and real-time status updates",
      "MongoDB data modeling handling users, services, bookings, and reviews with scalable schema design",
      "Secure authentication with JWT, refresh tokens, and RBAC; optimized performance through efficient API handling and caching",
      "Modular architecture aligned with microservices principles",
    ],
  },
  {
    title: "SplitSmart",
    category: "Mobile App",
    type: "Personal Project",
    description:
      "Cross-platform mobile application for managing and splitting group expenses with real-time balance tracking — built with React Native for both Android and iOS.",
    tech: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "REST APIs",
    ],
    date: "Personal Project",
    highlights: [
      "Cross-platform Android & iOS app using React Native with real-time balance tracking",
      "RESTful APIs with Node.js and Express.js for handling users, groups, expenses, and settlements",
      "MongoDB data modeling to efficiently manage group transactions, balances, and expense records",
      "Secure authentication using JWT and role-based access control for user session management",
      "Optimized settlement system to minimize transactions and provide clear debt resolution among group members",
    ],
  },
  {
    title: "Process & Disk Scheduling Simulator",
    category: "Frontend Web",
    type: "Academic Project",
    description:
      "Interactive web-based OS scheduling simulator implementing 11 algorithms across CPU and disk scheduling — with real-time visualizations, playback controls, and Firebase-backed user accounts.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Firebase Auth",
      "Firebase Firestore",
      "Plotly.js",
    ],
    date: "January 2024 – April 2024",
    highlights: [
      "11 algorithms across CPU scheduling (Round Robin, FCFS, SJN, Priority) and disk scheduling (SCAN, C-SCAN, LOOK, C-LOOK)",
      "Real-time visualizations and playback controls to animate execution timelines and disk head traversal",
      "Core performance metrics: waiting/turnaround/response time, context switches, CPU utilization, and seek time statistics",
      "Side-by-side algorithm benchmarking and CSV export for performance analysis and reporting",
      "Firebase Auth + Firestore integration for user accounts and persistent simulation history",
    ],
  },
];

const FILTER_OPTIONS = ["All", "Full-Stack Web", "Mobile App", "Frontend Web"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Full-stack web apps, mobile applications, and academic projects showcasing end-to-end development"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === opt
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {opt}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import SectionHeading from "../components/portfolio/SectionHeading";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Palette,
  Layers,
  GitBranch,
  Monitor,
  Cpu,
  Globe,
  Database,
  Cog,
  Workflow,
  FileText,
  Server,
  Smartphone,
  Shield,
  Cloud,
  Boxes,
  Terminal,
  LayoutTemplate,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
    skills: [
      { name: "TypeScript", level: 90, tag: "Advanced" },
      { name: "JavaScript", level: 92, tag: "Advanced" },
      { name: "Java", level: 70, tag: "Intermediate" },
      { name: "HTML5", level: 95, tag: "Advanced" },
      { name: "CSS3", level: 90, tag: "Advanced" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: LayoutTemplate,
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-400",
    skills: [
      { name: "React 18", level: 92, tag: "Advanced" },
      { name: "Next.js", level: 75, tag: "Intermediate" },
      { name: "TailwindCSS", level: 90, tag: "Advanced" },
      { name: "TanStack Router", level: 88, tag: "Advanced" },
      { name: "React Query", level: 88, tag: "Advanced" },
      { name: "Redux", level: 75, tag: "Intermediate" },
      { name: "React Router", level: 88, tag: "Advanced" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-400",
    skills: [
      { name: "Node.js", level: 85, tag: "Advanced" },
      { name: "Express.js", level: 85, tag: "Advanced" },
      { name: "RESTful APIs", level: 88, tag: "Advanced" },
      { name: "Microservices", level: 75, tag: "Intermediate" },
      { name: "HTTP Protocols", level: 85, tag: "Advanced" },
      { name: "JSON / API Design", level: 90, tag: "Advanced" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-400",
    skills: [
      { name: "React Native", level: 80, tag: "Advanced" },
      { name: "Cross-platform (Android & iOS)", level: 78, tag: "Advanced" },
      { name: "React Navigation", level: 78, tag: "Advanced" },
      { name: "REST API Integration", level: 85, tag: "Advanced" },
    ],
  },
  {
    id: "auth",
    label: "Auth & Security",
    icon: Shield,
    color: "from-red-500/20 to-red-600/20",
    iconColor: "text-red-400",
    skills: [
      { name: "JWT & Refresh Tokens", level: 88, tag: "Advanced" },
      { name: "OAuth 2.0", level: 78, tag: "Intermediate" },
      { name: "RBAC", level: 88, tag: "Advanced" },
      { name: "2FA / OTP", level: 85, tag: "Advanced" },
      { name: "Multi-tenant Auth", level: 80, tag: "Advanced" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-400",
    skills: [
      { name: "MongoDB", level: 82, tag: "Advanced" },
      { name: "SQL", level: 75, tag: "Intermediate" },
      { name: "Firebase Firestore", level: 80, tag: "Advanced" },
      { name: "IndexedDB", level: 78, tag: "Advanced" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & BaaS",
    icon: Cloud,
    color: "from-sky-500/20 to-sky-600/20",
    iconColor: "text-sky-400",
    skills: [
      { name: "Firebase Auth", level: 82, tag: "Advanced" },
      { name: "Firebase Firestore", level: 80, tag: "Advanced" },
      { name: "Firebase Storage", level: 78, tag: "Advanced" },
    ],
  },
  {
    id: "libraries",
    label: "Tools & Libraries",
    icon: Boxes,
    color: "from-yellow-500/20 to-yellow-600/20",
    iconColor: "text-yellow-400",
    skills: [
      { name: "EditorJS + 16+ plugins", level: 90, tag: "Advanced" },
      { name: "pdf-lib / pdfjs-dist", level: 90, tag: "Advanced" },
      { name: "html2canvas", level: 85, tag: "Advanced" },
      { name: "@dnd-kit", level: 88, tag: "Advanced" },
      { name: "react-rnd", level: 85, tag: "Advanced" },
      { name: "Web Workers + Comlink", level: 82, tag: "Advanced" },
    ],
  },
  {
    id: "concepts",
    label: "Concepts",
    icon: Cpu,
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-400",
    skills: [
      { name: "OOP", level: 85, tag: "Advanced" },
      { name: "Async Programming", level: 88, tag: "Advanced" },
      { name: "System Design Basics", level: 75, tag: "Intermediate" },
      { name: "Virtual Scrolling", level: 85, tag: "Advanced" },
      { name: "Code Splitting", level: 85, tag: "Advanced" },
      { name: "IndexedDB Caching", level: 80, tag: "Advanced" },
    ],
  },
  {
    id: "devtools",
    label: "Dev Tools",
    icon: Terminal,
    color: "from-zinc-500/20 to-zinc-600/20",
    iconColor: "text-zinc-400",
    skills: [
      { name: "Git & GitHub", level: 88, tag: "Advanced" },
      { name: "VS Code", level: 95, tag: "Advanced" },
      { name: "Postman", level: 82, tag: "Advanced" },
      { name: "Bruno", level: 78, tag: "Intermediate" },
    ],
  },
];

const LEVEL_COLORS = {
  Advanced: "bg-primary/20 text-primary",
  Intermediate: "bg-accent/20 text-accent",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleCategories =
    activeCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <div className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills"
          title="Technologies & Tools"
          description="Full-stack skill set covering frontend, backend, mobile, databases, cloud, and security"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
            }`}
          >
            All
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon
                    className={`w-5 h-5 ${category.iconColor}`}
                  />
                </div>
                <h3 className="font-bold text-foreground">{category.label}</h3>
              </div>

              {/* Skills list with progress bars */}
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.05 + i * 0.04 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          LEVEL_COLORS[skill.tag]
                        }`}
                      >
                        {skill.tag}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

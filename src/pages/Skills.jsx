import React from "react";
import SectionHeading from "../components/portfolio/SectionHeading";
import SkillBadge from "../components/portfolio/SkillBadge";
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
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: FileCode, level: "advanced" },
      { name: "JavaScript", icon: Code2, level: "advanced" },
      { name: "Java", icon: Cpu, level: "intermediate" },
      { name: "HTML5", icon: Globe, level: "advanced" },
      { name: "CSS3", icon: Palette, level: "advanced" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React 18", icon: Layers, level: "advanced" },
      { name: "TanStack Router", icon: Workflow, level: "advanced" },
      { name: "React Query", icon: Database, level: "advanced" },
      { name: "Redux", icon: Layers, level: "intermediate" },
      { name: "React Router", icon: Workflow, level: "advanced" },
      { name: "TailwindCSS", icon: Palette, level: "advanced" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: GitBranch, level: "advanced" },
      { name: "VS Code", icon: Monitor, level: "advanced" },
      { name: "EditorJS", icon: FileText, level: "advanced" },
      { name: "pdf-lib / pdfjs-dist", icon: FileText, level: "advanced" },
      { name: "@dnd-kit", icon: Cog, level: "advanced" },
      { name: "react-rnd", icon: Cog, level: "advanced" },
    ],
  },
  {
    title: "Concepts & Practices",
    skills: [
      { name: "Web Workers", icon: Cpu, level: "advanced" },
      { name: "Virtual Scrolling", icon: Layers, level: "advanced" },
      { name: "Code Splitting", icon: Workflow, level: "advanced" },
      { name: "Token Auth & 2FA", icon: Cog, level: "advanced" },
      { name: "Multi-tenancy", icon: Database, level: "intermediate" },
      { name: "IndexedDB Caching", icon: Database, level: "advanced" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills"
          title="Technologies & Tools"
          description="The technologies I work with daily to build production-grade web applications"
        />

        <div className="space-y-16">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                  {catIdx + 1}
                </span>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <SkillBadge key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

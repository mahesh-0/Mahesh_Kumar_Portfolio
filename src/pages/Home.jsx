import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Sparkles,
  Code2,
  Layers,
  Zap,
  Server,
  Smartphone,
  Database,
} from "lucide-react";

const STATS = [
  { value: "1+", label: "Year Experience" },
  { value: "3", label: "Full-Stack Projects" },
  { value: "16+", label: "Custom Plugins Built" },
  { value: "8.9", label: "B.Tech CGPA" },
];

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    desc: "React + TypeScript apps with complex UI — PDF editors, drag-and-drop builders, rich document editors, and signature capture systems.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "RESTful APIs with Node.js & Express.js — JWT auth, RBAC, 2FA, document processing pipelines, and microservices architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform Android & iOS apps with React Native — real-time tracking, role-based flows, and REST API integration.",
  },
  {
    icon: Database,
    title: "Database & Cloud",
    desc: "MongoDB, SQL, and Firebase Firestore for scalable data modeling. Firebase Auth & BaaS for authentication and cloud storage.",
  },
  {
    icon: Layers,
    title: "Complex UI Systems",
    desc: "Multi-page PDF editors, drag-and-drop field placement, virtual scrolling, real-time collaboration, and theming engines.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Web Workers with Comlink, virtual scrolling, dynamic code splitting, IndexedDB caching, and presigned URL generation.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
              Hi, I'm <span className="text-gradient">Mahesh Kumar</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              {["Full-Stack Developer", "React + Node.js", "React Native"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ),
              )}
            </motion.div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              A full-stack developer who builds production-grade web and mobile
              applications. From PDF editors and e-signature platforms to
              cross-platform mobile apps — I craft end-to-end solutions with
              React, Node.js, TypeScript, and modern architecture patterns.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl("Projects")}>
                <Button
                  size="lg"
                  className="rounded-xl bg-primary hover:bg-primary/90 gap-2 h-13 px-8 text-base cursor-pointer"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl gap-2 h-13 px-8 text-base border-border/50 hover:border-primary/30 cursor-pointer"
                >
                  Let's Talk
                </Button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1o3BYShhNx0xFVINr2QNoTKUt9kb_wrWa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-xl gap-2 h-13 px-8 text-base text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="relative py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 mb-4">
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Full-Stack, Frontend and Backend
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              I build complete products — from pixel-perfect UIs to scalable
              APIs, databases, and mobile apps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="relative py-12 px-6 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Core Tech Stack
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Express.js",
              "React Native",
              "Next.js",
              "MongoDB",
              "Firebase",
              "TailwindCSS",
              "TanStack Router",
              "React Query",
              "JWT / RBAC",
              "REST APIs",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl glass text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/30 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

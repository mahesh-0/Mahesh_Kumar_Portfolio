import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
  Code2,
  Layers,
  Zap,
} from "lucide-react";

const STATS = [
  { value: "1+", label: "Year Experience" },
  { value: "16+", label: "Custom Plugins Built" },
  { value: "20+", label: "Font Options Engineered" },
  { value: "8.9", label: "CGPA" },
];

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    desc: "React + TypeScript applications with scalable, maintainable architecture",
  },
  {
    icon: Layers,
    title: "Complex UI Systems",
    desc: "PDF editors, drag-and-drop builders, and rich document editing experiences",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Web Workers, virtual scrolling, code splitting, and client-side caching",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              Open to opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
              Hi, I'm <span className="text-gradient">Mahesh Kumar</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              A frontend engineer who builds production-grade web applications
              with React and TypeScript. I turn complex requirements into
              elegant, high-performance user experiences from PDF editors and
              e-signature platforms to real-time collaboration tools.
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
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69aad920428f8a2d6ed9efae/63991a369_MaheshKumarNalluri_Resume.pdf"
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

      {/* Highlights Section */}
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
              Building the Web, One Component at a Time
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
    </div>
  );
}

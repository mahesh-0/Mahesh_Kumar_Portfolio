import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import SectionHeading from "../components/portfolio/SectionHeading";
import {
  ArrowRight,
  GraduationCap,
  Calendar,
  Award,
  Mail,
  Phone,
  Linkedin,
  Briefcase,
  Code2,
  Server,
  Smartphone,
} from "lucide-react";

const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Rajiv Gandhi University of Knowledge Technologies, Ongole",
    date: "Nov 2020 – Apr 2024",
    gpa: "CGPA 8.9",
  },
  {
    degree: "Pre-University Course",
    school: "Rajiv Gandhi University of Knowledge Technologies, Ongole",
    date: "Jul 2018 – May 2020",
    gpa: "CGPA 8.5",
  },
  {
    degree: "Secondary School Certification (SSC)",
    school: "Zilla Parishad High School, Peda Alavalapadu",
    date: "Jun 2017 – Apr 2018",
    gpa: "CGPA 10.0",
  },
];

const STRENGTHS = [
  {
    icon: Code2,
    title: "Frontend",
    desc: "React, TypeScript, Next.js, TailwindCSS, TanStack Router & Query",
  },
  {
    icon: Server,
    title: "Backend",
    desc: "Node.js, Express.js, RESTful APIs, JWT, OAuth 2.0, RBAC, 2FA",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    desc: "React Native for cross-platform Android & iOS applications",
  },
];

export default function About() {
  return (
    <div className="pt-28 md:pt-36 pb-20">
      {/* Bio Section */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 mb-6">
                About Me
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Full-Stack Developer who builds{" "}
                <span className="text-gradient">end-to-end</span> products
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Mahesh Kumar Nalluri, a full-stack software developer
                  based in Hyderabad, India. I specialize in building complete,
                  production-grade applications — from complex React frontends
                  and Node.js/Express.js backends to cross-platform mobile apps
                  with React Native.
                </p>
                <p>
                  At Orotron, I work on a production-grade E-Signature platform
                  where I've built multi-page PDF editors with drag-and-drop
                  field placement, complete authentication systems with JWT,
                  2FA, and RBAC, rich document editors with 16+ custom
                  EditorJS plugins, and a full collaboration engine with
                  multi-document signing sequences and approval chains.
                </p>
                <p>
                  Beyond work, I've built full-stack projects like ServiceHub
                  (a service booking platform) and SplitSmart (a cross-platform
                  expense-splitting app with React Native). My backend work
                  spans MongoDB, SQL, and Firebase Firestore, with a strong
                  focus on secure authentication and scalable API design.
                </p>
                <p>
                  With a B.Tech in Computer Science from RGUKT Ongole (8.9
                  CGPA), I bring solid fundamentals in algorithms, OOP, system
                  design, and asynchronous programming to every project.
                </p>
              </div>
              <div className="mt-8">
                <Link to={createPageUrl("Contact")}>
                  <Button className="rounded-xl bg-primary hover:bg-primary/90 gap-2 h-12 px-6">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              <div className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href="mailto:maheshkumarnalluri7@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      maheshkumarnalluri7@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href="tel:+916302480643"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 6302480643
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Linkedin className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href="https://www.linkedin.com/in/mahesh-kumar-nalluri-6832b3238"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Mahesh-Nalluri · LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  Current Role
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Junior Software Development Executive
                    </p>
                    <p className="text-sm text-primary font-medium">Orotron</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      November 2024 – March 2026
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  Stack Overview
                </h3>
                <div className="space-y-3">
                  {STRENGTHS.map((s) => (
                    <div key={s.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <s.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {s.title}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Education"
            title="Academic Background"
            description="A strong foundation in computer science and engineering"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1 text-sm leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {edu.school}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-primary" />
                    <span className="text-primary font-semibold">{edu.gpa}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

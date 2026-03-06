import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import SectionHeading from "../components/portfolio/SectionHeading";
import TestimonialCard from "../components/portfolio/TestimonialCard";
import {
  ArrowRight,
  GraduationCap,
  Calendar,
  Award,
  MapPin,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

const EDUCATION = [
  {
    degree: "Bachelor's in Computer Science",
    school: "Rajiv Gandhi University of Knowledge Technologies, Ongole",
    date: "Nov 2020 – May 2024",
    gpa: "CGPA 8.9",
  },
  {
    degree: "Pre-University Course",
    school: "Rajiv Gandhi University of Knowledge Technologies, Ongole",
    date: "Jul 2018 – May 2020",
    gpa: "CGPA 8.5",
  },
  {
    degree: "Secondary School (SSC)",
    school: "Zilla Parishad High School, Peda Alavalapadu",
    date: "Jun 2017 – Apr 2018",
    gpa: "CGPA 10.0",
  },
];

const TESTIMONIALS = [
  {
    name: "Team Lead",
    role: "Engineering Manager, Actanos",
    text: "Mahesh quickly became an integral part of our frontend team. His ability to tackle complex UI challenges like our PDF editor and signature system was impressive for a junior engineer. He consistently delivered production-ready code with minimal revisions.",
  },
  {
    name: "Product Manager",
    role: "Product Team, Actanos",
    text: "Working with Mahesh on the E-Signature platform was a pleasure. He understood the product requirements deeply and translated them into polished, performant interfaces that our users loved.",
  },
  {
    name: "Peer Developer",
    role: "Frontend Developer, Actanos",
    text: "Mahesh has a great eye for performance optimization. The Web Worker implementation and virtual scrolling he built made a huge difference in our application's responsiveness with large datasets.",
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
                I build web experiences that feel{" "}
                <span className="text-gradient">native</span>
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Mahesh Kumar Nalluri, a frontend software engineer. I
                  specialize in building complex, high-performance web
                  applications using React, TypeScript, JavaScript and modern
                  frontend architecture patterns.
                </p>
                <p>
                  Currently at Actanos, I work on a production-grade E-Signature
                  platform where I've built everything from multi-page PDF
                  editors with drag-and-drop field placement to complete
                  authentication systems with 2FA and role-based access control.
                  I love the challenge of replicating native desktop experiences
                  in the browser.
                </p>
                <p>
                  With a B.Tech in Computer Science from RGUKT Ongole (8.9
                  CGPA), I bring a strong foundation in algorithms and systems
                  thinking to every problem I solve. I'm particularly passionate
                  about rendering performance, developer experience, and
                  building tools that make complex workflows feel effortless.
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
                  Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <a
                      href="mailto:maheshkumarnalluri7@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      maheshkumarnalluri7@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <a
                      href="tel:+916302480643"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 6302480643
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/mahesh-kumar-nalluri-6832b3238"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Mahesh Kumar Nalluri • LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  Current Role
                </h3>
                <p className="text-sm font-medium text-foreground">
                  Junior Software Engineer
                </p>
                <p className="text-sm text-primary">Actanos</p>
                <p className="text-xs text-muted-foreground mt-1">
                  November 2024 – Present
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 mb-24">
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
                <h3 className="font-bold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {edu.school}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-primary" />
                    <span className="text-primary font-medium">{edu.gpa}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title="What People Say"
            description="Feedback from colleagues and collaborators"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

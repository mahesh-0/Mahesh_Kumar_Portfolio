import React from "react";
import SectionHeading from "../components/portfolio/SectionHeading";
import TimelineItem from "../components/portfolio/TimelineItem";

const WORK_EXPERIENCE = [
  {
    title: "Junior Software Engineer",
    subtitle: "Actanos",
    date: "Nov 2024 – Present",
    type: "work",
    items: [
      "Building scalable frontend features for a production-grade E-Signature platform document creation, signing workflows, and dynamic form management",
      "Engineered the core app with React + TypeScript, TanStack Router, React Query, and TanStack Store for a maintainable architecture across a complex document management platform",
      "Built a multi-page PDF editor with drag-and-drop (@dnd-kit), resizable/movable fields (react-rnd), page rotation, reordering, and real-time content overflow detection",
      "Developed an end-to-end PDF processing pipeline using pdf-lib, pdfjs-dist, and html2canvas for creation, editing, watermarking, and DOCX-to-rich-text conversion",
      "Implemented a rich document editor with EditorJS and 16+ custom plugins including AI-powered content generation",
      "Built multi-method signature capture with draw/type/upload modes, 20+ fonts, OTP verification, enforced signing order, and automated audit trails",
      "Architected secure authentication with token-based auth, auto-refresh, 2FA, RBAC, and multi-tenant workspace isolation",
      "Optimized rendering with Web Workers + Comlink, virtual scrolling, dynamic code splitting, and IndexedDB caching",
      "Built a full collaboration engine — multi-document signing sequences, approval chains, bulk send, reusable templates, and a company-wide branding system with cross-tab sync",
    ],
  },
];

const EDUCATION_TIMELINE = [
  {
    title: "Bachelor's in Computer Science",
    subtitle: "RGUKT Ongole — CGPA 8.9",
    date: "Nov 2020 – May 2024",
    type: "education",
    items: [],
  },
  {
    title: "Pre-University Course",
    subtitle: "RGUKT Ongole — CGPA 8.5",
    date: "Jul 2018 – May 2020",
    type: "education",
    items: [],
  },
  {
    title: "Secondary School (SSC)",
    subtitle: "ZP High School, Peda Alavalapadu — CGPA 10.0",
    date: "Jun 2017 – Apr 2018",
    type: "education",
    items: [],
  },
];

export default function Experience() {
  return (
    <div className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="My career path and the impact I've made along the way"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
              Work Experience
            </h3>
            <div>
              {WORK_EXPERIENCE.map((item, i) => (
                <TimelineItem key={item.title} {...item} index={i} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
              Education
            </h3>
            <div>
              {EDUCATION_TIMELINE.map((item, i) => (
                <TimelineItem key={item.title} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

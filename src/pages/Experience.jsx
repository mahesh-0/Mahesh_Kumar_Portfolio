import React from "react";
import SectionHeading from "../components/portfolio/SectionHeading";
import TimelineItem from "../components/portfolio/TimelineItem";

const WORK_EXPERIENCE = [
  {
    title: "Junior Software Development Executive",
    subtitle: "Orotron",
    date: "Nov 2024 – Mar 2026",
    type: "work",
    items: [
      "Worked on a production-grade E-Signature platform, building scalable frontend and backend features for document creation, signing workflows, and multi-tenant workspace management",
      "Developed and integrated RESTful APIs using Node.js and Express.js for document handling, user management, and signing workflows",
      "Engineered a React + TypeScript application with TanStack Router and React Query, enabling efficient server-state management and seamless API integration",
      "Built a browser-based multi-page PDF editor with drag-and-drop field placement (dnd-kit), resizable components (react-rnd), and real-time overflow detection",
      "Designed an end-to-end document processing pipeline supporting PDF generation, editing, watermarking, image merging, and DOCX parsing",
      "Implemented secure authentication: JWT, refresh tokens, RBAC, OTP-based 2FA, and multi-tenant workspace isolation",
      "Implemented a rich document editor with EditorJS and 16+ custom plugins covering headers, tables, alignment, color, indentation, and AI-powered content generation",
      "Built a multi-method signature capture system: draw, type, and upload modes with 20+ font options, OTP-based verification, enforced signing order, and automated audit trail generation",
      "Contributed to modular backend architecture aligned with microservices principles, separating authentication, document processing, and workflow services",
      "Optimized rendering performance using Web Workers with Comlink for presigned URL generation, virtual scrolling for large datasets, dynamic code splitting, and IndexedDB caching",
      "Built a full collaboration engine: multi-document signing sequences, approval chains, bulk send, configurable reminders, reusable templates with clone/publish operations, and a company-wide branding/theming system with cross-tab synchronization",
    ],
  },
];

const EDUCATION_TIMELINE = [
  {
    title: "Bachelor of Technology — Computer Science",
    subtitle: "RGUKT Ongole · CGPA 8.9",
    date: "Nov 2020 – Apr 2024",
    type: "education",
    items: [],
  },
  {
    title: "Pre-University Course",
    subtitle: "RGUKT Ongole · CGPA 8.5",
    date: "Jul 2018 – May 2020",
    type: "education",
    items: [],
  },
  {
    title: "Secondary School Certification (SSC)",
    subtitle: "ZP High School, Peda Alavalapadu · CGPA 10.0",
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

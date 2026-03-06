import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export default function TimelineItem({
  title,
  subtitle,
  date,
  items,
  type = "work",
  index = 0,
}) {
  const Icon = type === "work" ? Briefcase : GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-12 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[18px] top-10 bottom-0 w-px bg-border last:hidden" />

      {/* Icon dot */}
      <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
        <Icon className="w-4 h-4 text-primary-foreground" />
      </div>

      <div className="glass rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <Badge
            variant="secondary"
            className="text-xs bg-primary/10 text-primary border-0"
          >
            {date}
          </Badge>
        </div>
        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-primary font-medium mb-4">{subtitle}</p>

        {items && items.length > 0 && (
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

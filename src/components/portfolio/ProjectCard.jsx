import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Calendar } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  tech,
  date,
  highlights,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl p-6 md:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-500">
          <span className="font-bold text-lg">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {date && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Calendar className="w-3 h-3" />
          {date}
        </div>
      )}

      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {description}
      </p>

      {highlights && highlights.length > 0 && (
        <ul className="space-y-2 mb-5">
          {highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="text-xs font-medium bg-primary/10 text-primary border-0"
          >
            {t}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

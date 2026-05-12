import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronDown, ChevronUp, Layers, Tag } from "lucide-react";

const TYPE_STYLES = {
  Professional: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Personal Project": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "Academic Project": "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

const CATEGORY_STYLES = {
  "Full-Stack Web": "bg-primary/10 text-primary",
  "Mobile App": "bg-purple-500/15 text-purple-400",
  "Frontend Web": "bg-cyan-500/15 text-cyan-400",
};

export default function ProjectCard({
  title,
  description,
  tech,
  date,
  highlights,
  category,
  type,
  index = 0,
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleHighlights = expanded ? highlights : highlights?.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group glass rounded-2xl p-6 md:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-500 shrink-0">
            <span className="font-bold text-lg">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
              {title}
            </h3>
            {date && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                <Calendar className="w-3 h-3" />
                {date}
              </div>
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col gap-2 items-end shrink-0">
          {type && (
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                TYPE_STYLES[type] ?? "bg-muted text-muted-foreground"
              }`}
            >
              {type}
            </span>
          )}
          {category && (
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 ${
                CATEGORY_STYLES[category] ?? "bg-muted text-muted-foreground"
              }`}
            >
              <Layers className="w-3 h-3" />
              {category}
            </span>
          )}
        </div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {description}
      </p>

      {highlights && highlights.length > 0 && (
        <div className="mb-5">
          <AnimatePresence initial={false}>
            <ul className="space-y-2">
              {visibleHighlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {h}
                </motion.li>
              ))}
            </ul>
          </AnimatePresence>

          {highlights.length > 3 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-medium transition-colors cursor-pointer"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  {highlights.length - 3} more highlights
                </>
              )}
            </button>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="text-xs font-medium bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors"
          >
            {t}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

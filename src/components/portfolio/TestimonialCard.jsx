import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialCard({ name, role, text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
    >
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
        "{text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xs">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

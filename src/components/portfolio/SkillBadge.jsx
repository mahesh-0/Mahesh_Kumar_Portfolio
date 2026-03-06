import React from "react";
import { motion } from "framer-motion";

export default function SkillBadge({ name, icon: Icon, level, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group glass rounded-xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
    >
      <div className="flex items-center gap-3 mb-3">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-foreground text-sm">{name}</h4>
          {level && (
            <span className="text-xs text-muted-foreground capitalize">
              {level}
            </span>
          )}
        </div>
      </div>
      {level && (
        <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width:
                level === "advanced"
                  ? "90%"
                  : level === "intermediate"
                    ? "70%"
                    : "50%",
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
      )}
    </motion.div>
  );
}

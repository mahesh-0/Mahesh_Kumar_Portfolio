import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", page: "Home" },
  { label: "About", page: "About" },
  { label: "Skills", page: "Skills" },
  { label: "Projects", page: "Projects" },
  { label: "Experience", page: "Experience" },
  { label: "Contact", page: "Contact" },
];

export default function Navbar({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to={createPageUrl("Home")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
            MK
          </div>
          <span className="font-semibold text-foreground hidden sm:block">
            Mahesh Kumar Nalluri
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.page}
              to={createPageUrl(item.page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                currentPage === item.page
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDark}
            className="rounded-lg cursor-pointer"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <a
            href="https://drive.google.com/file/d/1o3BYShhNx0xFVINr2QNoTKUt9kb_wrWa/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex"
          >
            <Button
              size="sm"
              className="rounded-lg bg-primary hover:bg-primary/90 gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/50"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    currentPage === item.page
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1o3BYShhNx0xFVINr2QNoTKUt9kb_wrWa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="sm"
                  className="w-full rounded-lg bg-primary hover:bg-primary/90 gap-2 mt-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

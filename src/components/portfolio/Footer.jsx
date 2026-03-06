import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                MK
              </div>
              <span className="font-semibold text-foreground">
                Mahesh Kumar
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Frontend engineer crafting scalable, performant web application.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((page) => (
                <Link
                  key={page}
                  to={createPageUrl(page)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:maheshkumarnalluri7@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                maheshkumarnalluri7@gmail.com
              </a>
              <a
                href="tel:+916302480643"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 6302480643
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Hyderabad, India
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/mahesh-kumar-nalluri-6832b3238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/mahesh-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mahesh Kumar Nalluri. Built with
            passion.
          </p>
        </div>
      </div>
    </footer>
  );
}

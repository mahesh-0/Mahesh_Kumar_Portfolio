import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/portfolio/SectionHeading";
import ContactForm from "../components/portfolio/ContactForm";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "maheshkumarnalluri7@gmail.com",
    href: "mailto:maheshkumarnalluri7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6302480643",
    href: "tel:+916302480643",
  },

  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mahesh Kumar Nalluri",
    href: "https://www.linkedin.com/in/mahesh-kumar-nalluri-6832b3238",
  },
];

export default function Contact() {
  return (
    <div className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Together"
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {CONTACT_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 block"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-foreground truncate">
                        {link.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </a>
                ) : (
                  <div className="glass rounded-xl p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {link.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="glass rounded-xl p-6 mt-6"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm currently open to full-stack roles, freelance projects, and
                collaborations. Whether you need someone to build an end-to-end
                web app, a REST API, or a cross-platform mobile app — let's talk.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

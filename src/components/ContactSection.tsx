import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "saraswatanusha99@gmail.com",
    href: "mailto:saraswatanusha99@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/anusha7s",
    href: "https://github.com/anusha7s",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anusha-saraswat",
    href: "https://www.linkedin.com/in/anusha-saraswat/",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Let's connect
            </h2>
            <p className="text-muted-foreground text-lg">
              I'm always open to discussing AI/ML projects, internship opportunities, or collaborations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-gradient-card border border-border/50 p-5 transition-all hover:border-primary/30 hover:glow-primary"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium">{contact.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

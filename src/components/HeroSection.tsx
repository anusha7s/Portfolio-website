import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import portfolioImage from "@/assets/portfolio.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-50 scale-110" />
              <img
                src={portfolioImage}
                alt="Anusha Saraswat"
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/30 glow-avatar"
              />
            </div>
          </motion.div>

          {/* Degree line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium tracking-widest text-primary uppercase mb-4"
          >
            B.Tech CSE • AI & Data Analytics
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Anusha Saraswat
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-gradient mb-6"
          >
            AI & Machine Learning Engineer | CSE Undergraduate
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Building intelligent, scalable solutions using machine learning,
            data analytics, and modern software engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg
                         bg-gradient-primary px-8 text-base font-semibold
                         text-primary-foreground transition-all
                         hover:opacity-90 hover:scale-105"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>

            {/* Download Resume */}
            <a
              href="/Anusha-Saraswat.pdf"
              download
              className="inline-flex h-12 items-center justify-center rounded-lg
                         border border-border bg-secondary/50 px-8
                         text-base font-semibold text-foreground
                         transition-all hover:bg-secondary hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};

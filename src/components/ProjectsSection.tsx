import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Box, TrendingUp, Languages, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "NEURA-3D",
    subtitle: "AI-Based 3D Product Design Assistant",
    icon: Box,
    highlights: [
      "Converts text and images into 3D models using generative AI",
      "Real-time previews with a clean, intuitive user interface",
      "Optimized backend pipeline for fast model generation",
    ],
  },
  {
    title: "INVESTIQ",
    subtitle: "AI Mutual Funds Manager",
    icon: TrendingUp,
    highlights: [
      "ML-based mutual fund performance analysis and prediction",
      "Asset-level data insights with comprehensive visualization",
      "Smart portfolio recommendations tailored to risk profiles",
    ],
  },
  {
    title: "FLUENTNOW",
    subtitle: "AI-Powered Multilingual Learning Assistant",
    icon: Languages,
    highlights: [
      "Real-time translation and speech interaction capabilities",
      "Document and image-based language learning features",
      "Accent customization with multilingual support",
    ],
  },
  {
    title: "FLUXOR",
    subtitle: "AI-Powered File Management System",
    icon: FolderOpen,
    highlights: [
      "Intelligent file renaming, translation, and categorization",
      "Multilingual AI assistant for seamless navigation",
      "Content-based and extension-based organization",
    ],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
              Featured Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Building intelligent solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative rounded-xl bg-gradient-card border border-border/50 p-6 transition-all hover:border-primary/30 hover:glow-primary"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  {/* <button className="p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </button> */}
                </div>
                
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

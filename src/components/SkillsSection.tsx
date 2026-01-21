import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Brain,
  Layers,
  Database,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "SQL", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "Regression",
      "Classification",
      "Clustering",
      "Neural Networks",
      "CNNs",
      "GANs",
      "NLP",
      "Retrieval-Augmented Generation (RAG)",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "LangChain",
      "Hugging Face Transformers",
    ],
  },
  {
    title: "Databases & Analytics Tools",
    icon: Database,
    skills: ["MySQL", "Power BI", "Tableau", "Excel"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto" ref={ref}>
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
              Technical Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Technologies I work with
            </h2>
          </motion.div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group rounded-xl bg-gradient-card border border-border/50
                           p-6 transition-all
                           hover:border-primary/30 hover:glow-primary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md
                                 bg-secondary px-3 py-1.5
                                 text-sm font-medium text-secondary-foreground
                                 transition-colors
                                 group-hover:bg-secondary/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

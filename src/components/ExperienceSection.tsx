import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Trophy } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Data Warehousing Intern",
    company: "IntMavens Pvt. Ltd",
    highlights: [
      "Designed and implemented relational database schemas for enterprise data management",
      "Built interactive PowerBI dashboards for business intelligence and reporting",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "EY Hackathon 2024",
    description: "Shortlisted for DhanSetu – voice-first financial literacy platform",
  },
  {
    icon: Trophy,
    title: "30-Hour ML Hackathon",
    description: "Deepfake & Fake News Detection system development",
  },
  {
    icon: Award,
    title: "Professional Certifications",
    description: "Python, SQL, Generative AI, Deep Learning (IBM, Great Learning, SkillCred, Kaggle)",
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
              Experience & Achievements
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Professional journey & recognition
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Briefcase className="h-5 w-5 text-primary" />
                Work Experience
              </h3>
              
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-gradient-card border border-border/50 p-6"
                >
                  <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Trophy className="h-5 w-5 text-primary" />
                Achievements & Certifications
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl bg-gradient-card border border-border/50 p-5 transition-all hover:border-primary/30"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Passionate about building intelligent systems
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a 3rd-year B.Tech (Hons.) Computer Science & Engineering student with a specialization in Artificial Intelligence, Machine Learning, and Data Analytics. My academic journey has been driven by a deep curiosity for how data can be transformed into actionable insights and intelligent solutions.
            </p>
            <p>
              With hands-on experience in applied machine learning, data warehousing, and business intelligence, I focus on creating systems that have real-world impact. From building AI-powered assistants to developing predictive analytics platforms, I enjoy tackling complex problems with elegant, scalable solutions.
            </p>
            <p>
              I'm constantly exploring new technologies and methodologies in the AI/ML space, with a particular interest in generative AI, natural language processing, and computer vision. My goal is to bridge the gap between cutting-edge research and practical applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

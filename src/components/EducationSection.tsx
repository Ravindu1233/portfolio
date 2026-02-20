import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface Education {
  degree: string;
  institution: string;
  year: string;
  courses: string[];
  achievements: string[];
}

const education: Education[] = [
  {
    degree: "Bachelor in Software Engineering (HND)",
    institution: "National Institute of Business Management (NIBM)",
    year: "2024 – Present",
    courses: [],
    achievements: [],
  },
  {
    degree: "Bachelor in Computer System Design (Diploma)",
    institution: "National Institute of Business Management (NIBM)",
    year: "2023 – 2024",
    courses: [],
    achievements: [],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Education
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card glow-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground font-mono">
                    {edu.year}
                  </p>

                  {edu.courses.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}

                  {edu.achievements.length > 0 && (
                    <div className="border-t border-border mt-4 pt-3 space-y-1">
                      {edu.achievements.map((a, j) => (
                        <p
                          key={j}
                          className="text-sm text-foreground font-medium"
                        >
                          🎓 {a}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

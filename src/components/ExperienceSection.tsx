import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "XYZ Technologies",
    role: "Full Stack Developer",
    duration: "Jan 2021 – Present",
    responsibilities: [
      "Designed and developed multiple web applications using React.js and Node.js.",
      "Led a team of 4 developers to successfully deliver project X on time.",
      "Collaborated with designers to improve UI/UX for enhanced user engagement.",
    ],
    achievements: ["Reduced page load time by 30% through performance optimization."],
  },
  {
    company: "ABC Innovations",
    role: "Software Engineer Intern",
    duration: "Jun 2020 – Dec 2020",
    responsibilities: [
      "Built RESTful APIs with Express.js and integrated third-party services.",
      "Wrote comprehensive unit and integration tests, increasing coverage to 90%.",
    ],
    achievements: ["Automated CI/CD pipeline, cutting deployment time by 50%."],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Work Experience</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glow-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground font-mono">{exp.duration}</span>
                  </div>
                  <p className="text-primary font-semibold text-sm mb-4">{exp.company}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  {exp.achievements.length > 0 && (
                    <div className="border-t border-border pt-3">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">Key Achievements</p>
                      {exp.achievements.map((a, j) => (
                        <p key={j} className="text-sm text-foreground font-medium">⚡ {a}</p>
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

export default ExperienceSection;

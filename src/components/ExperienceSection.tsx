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
    company: "Taznic Technologies",
    role: "Full-Stack Developer Intern",
    duration: "2024 – Present",
    responsibilities: [
      "Developed a Vehicle Sales Aggregator web application that consolidates vehicle listings from multiple platforms into a single unified interface.",
      "Built advanced search and filtering features allowing users to filter by make, model, year, price range, mileage, and location.",
      "Implemented a price comparison tool enabling side-by-side comparison of similar vehicles across different sources.",
      "Developed user and admin authentication systems with listing approval workflows to ensure quality control.",
      "Designed and optimized backend APIs for efficient data aggregation, storage, and retrieval of vehicle listings.",
      "Integrated user alerts and notifications for specific vehicle models or price ranges.",
    ],
    achievements: [
      "Delivered a full-featured aggregator platform covering the complete vehicle listing lifecycle from scraping to display.",
      "Implemented listing approval workflows that reduced fraudulent or duplicate listings significantly.",
    ],
  },
  {
    company: "Idea8 Solutions",
    role: "Full-Stack Developer Intern",
    duration: "2024",
    responsibilities: [
      "Built an MTG (Magic: The Gathering) Card Sorting application with advanced filtering, categorization, and sorting capabilities.",
      "Designed an admin panel where admins can define device types (e.g., 5×5 grids) and register individual devices under those types.",
      "Implemented a template creation system where templates are built based on device type, with each slot configurable for content, pricing, and card attributes.",
      "Supported both alphabetical and price-based sorting modes within templates, with flexible toggling between the two.",
      "Designed the full-stack architecture with a focus on API efficiency, scalable database design, and a clean, intuitive UI/UX.",
      "Enabled device login flows where each registered device can authenticate and load its assigned template configuration.",
    ],
    achievements: [
      "Delivered a fully configurable slot-based template engine adaptable to any device type and card sorting strategy.",
      "Reduced manual card sorting overhead with an automated categorization system driven by admin-defined rules.",
    ],
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Work Experience
          </h2>
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
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-primary font-semibold text-sm mb-4">
                    {exp.company}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((r, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground text-sm flex gap-2"
                      >
                        <span className="text-primary mt-0.5 flex-shrink-0">
                          ▹
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  {exp.achievements.length > 0 && (
                    <div className="border-t border-border pt-3">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                        Key Achievements
                      </p>
                      {exp.achievements.map((a, j) => (
                        <p
                          key={j}
                          className="text-sm text-foreground font-medium"
                        >
                          ⚡ {a}
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

export default ExperienceSection;

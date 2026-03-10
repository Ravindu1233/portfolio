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
    company: "Idea8 Solutions",
    role: "Full-Stack Developer Intern",
    duration: "2024 - Present",
    responsibilities: [
      "Developed a production-ready company web platform using Next.js 15, React 19, TypeScript, and Tailwind CSS 4 for a robotics and IoT product company.",
      "Built a protected admin dashboard with NextAuth v5 credentials, bcrypt password checks, and session-based route guards.",
      "Implemented project management APIs (GET/POST/PUT/PATCH/DELETE) with server-side validation, status filtering, and active/inactive visibility controls.",
      "Integrated Supabase Storage image uploads with file type and 5MB size validation, unique naming, public URL generation, and old file cleanup.",
      "Designed a dynamic public project showcase with Framer Motion animations, responsive layouts, and modal detail views across desktop and mobile.",
      "Added Cloudflare Turnstile verification and strengthened security by configuring Content Security Policy headers in Next.js.",
    ],
    achievements: [
      "Used Prisma ORM with PostgreSQL models and migrations for User and Project entities, including seeded admin bootstrap data.",
      "Delivered a secure full-stack CMS workflow for managing portfolio projects with authentication, media upload, and bot protection.",
    ],
  },
  {
    company: "Idea8 Solutions",
    role: "Full-Stack Developer Intern",
    duration: "2024",
    responsibilities: [
      "Developed an end-to-end MTG card-sorting platform with a React frontend and NestJS backend for sorting devices, templates, and slot configuration workflows.",
      "Built API-driven frontend modules for editing slot rules, managing templates and devices, and operating card-sorting configurations.",
      "Engineered a NestJS plus Prisma backend with PostgreSQL models for cards, devices, device types, templates, and slot definitions.",
      "Implemented role-separated authentication (admin JWT and device JWT), bcrypt-secured credentials, and ownership-based access control.",
      "Added admin account lifecycle features including registration, login, profile updates, password change, and OTP-based password reset via email.",
      "Designed and validated slot logic for PRICE, ALPHABET, LOADING, NONE, and UNSORTED types with overlap checks, range validation, and loading constraints.",
    ],
    achievements: [
      "Improved reliability with modular NestJS controller and service architecture, global validation pipes, and migration-driven schema evolution.",
      "Established quality gates with Jest and Supertest e2e testing and standardized lint/build/test scripts for CI-ready development.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="section-padding bg-background/40 backdrop-blur-sm"
    >
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
                          {">"}
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
                          * {a}
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

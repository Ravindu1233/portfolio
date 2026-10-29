import { Briefcase, MapPin, Sparkles, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectHighlight {
  title: string;
  points: string[];
  technologies: string[];
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  isCurrent?: boolean;
  projects?: ProjectHighlight[];
  responsibilities?: string[];
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    company: "KBOOKS Pvt Ltd",
    role: "Junior Web Application Developer",
    location: "Maharagama, Sri Lanka",
    duration: "June 2026 – Present",
    isCurrent: true,
    projects: [
      {
        title: "AuthorDesk (Author Portal)",
        points: [
          "Built a manuscript management portal for Sinhala book authors with page editing, completion tracking, version history with draft restore, and Word-compatible export; secured with session-based authentication and per-user access scoping.",
          "Implemented Sinhala dictionary-based spell checking and Gemini-powered spelling, grammar and syntax proofing with accept/ignore/undo suggestions, using Unicode normalization and tolerant text matching to place corrections accurately.",
        ],
        technologies: [
          "PHP",
          "CodeIgniter 4",
          "MySQL",
          "JavaScript",
          "HTML",
          "CSS",
          "Gemini API",
        ],
      },
      {
        title: "KBOOKS POS (Open Source Point of Sale)",
        points: [
          "Customized and deployed an OSPOS-based point-of-sale and inventory system for a multi-location bookstore, including server deployment and legacy database migrations.",
          "Built an Inventory Audit module with Gemini-powered purchase order suggestions, and a supplier consignment settlement feature with 90-day periods, per-location chains, and printable receipts.",
          "Built an API-key-secured stock lookup API so the OpenCart admin shows live KBOOKS-location stock; added order status tracking and customized gift cards, receivings, and reports.",
        ],
        technologies: [
          "PHP",
          "CodeIgniter 4",
          "MySQL",
          "JavaScript",
          "Bootstrap",
          "Docker",
          "Gemini API",
        ],
      },
      {
        title: "KBOOKS Online Store (OpenCart)",
        points: [
          "Set up and customized the live OpenCart 3 bookstore on a DigitalOcean VPS, with responsive mobile/tablet layouts, bundle offers, redesigned reviews, mini cart, and mobile checkout improvements.",
          "Migrated all product images to DigitalOcean Spaces served via Cloudflare CDN, and fixed thumbnail generation and permission issues.",
          "Built a prepaid KBOOKS VIP membership (customer group, per-order records, automatic expiry, free-delivery checks) and added payment gateway extensions (Mintpay, custom Koko).",
        ],
        technologies: [
          "PHP",
          "OpenCart",
          "Twig",
          "JavaScript",
          "CSS",
          "MySQL",
          "DigitalOcean (Spaces, VPS)",
          "Cloudflare",
        ],
      },
    ],
  },
  {
    company: "Idea8 Solutions",
    role: "Full-Stack Developer Intern",
    location: "Colombo, Sri Lanka",
    duration: "2024 – 2025",
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
    location: "Colombo, Sri Lanka",
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
              key={`${exp.company}-${exp.duration}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card glow-border rounded-xl p-6 md:p-8 hover:border-primary/40 transition-all ${
                exp.isCurrent ? "border-primary/40 shadow-lg shadow-primary/5" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  {/* Role & Duration Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Company & Location */}
                  <div className="flex items-center gap-3 text-sm mb-4 flex-wrap">
                    <span className="text-primary font-semibold">
                      {exp.company}
                    </span>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Sub-projects (for roles with multiple projects like KBOOKS) */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="space-y-5 mt-4">
                      {exp.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="pt-4 first:pt-1 border-t border-border/60 first:border-t-0 space-y-3"
                        >
                          <div className="flex items-center gap-2">
                            <FolderGit2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <h4 className="text-base font-bold text-foreground">
                              {proj.title}
                            </h4>
                          </div>

                          <ul className="space-y-2">
                            {proj.points.map((point, ptIdx) => (
                              <li
                                key={ptIdx}
                                className="text-muted-foreground text-sm flex items-start gap-2"
                              >
                                <span className="text-primary mt-0.5 flex-shrink-0 font-bold">
                                  &gt;
                                </span>
                                <span className="leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>

                          {proj.technologies && proj.technologies.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              <span className="text-xs text-muted-foreground font-mono mr-1">
                                Technologies:
                              </span>
                              {proj.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Standard responsibilities (for single project roles) */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((r, j) => (
                        <li
                          key={j}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5 flex-shrink-0 font-bold">
                            &gt;
                          </span>
                          <span className="leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Key Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="border-t border-border pt-3 mt-3">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-primary" /> Key
                        Achievements
                      </p>
                      {exp.achievements.map((a, j) => (
                        <p
                          key={j}
                          className="text-sm text-foreground font-medium"
                        >
                          • {a}
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

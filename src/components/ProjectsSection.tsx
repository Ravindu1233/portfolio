import { ExternalLink, Code2, Github, Play, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  role: string;
  githubLinks: { label: string; url: string }[];
  videoUrl?: string;
  type: "Personal" | "Group";
}

const projects: Project[] = [
  {
    name: "Book Management System",
    description:
      "A full-featured book management system with User and Admin login, authentication and authorization, category management, book uploads, and full CRUD operations built with Laravel.",
    technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    role: "Solo Developer",
    type: "Personal",
    githubLinks: [
      {
        label: "GitHub",
        url: "https://github.com/Ravindu1233/book_project.git",
      },
    ],
    videoUrl: "public/videos/Book-Management-System.mp4",
  },
  {
    name: "Todo Management Full Stack App",
    description:
      "Task management platform with two user roles — Admins can add, update, delete and manage todos; Users can mark tasks complete or incomplete. Secured with Spring Security and JWT. Built as microservices with React frontend and Spring Boot backend.",
    technologies: [
      "React",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Bootstrap",
      "REST API",
    ],
    role: "Solo Developer",
    type: "Personal",
    githubLinks: [
      {
        label: "Frontend",
        url: "https://github.com/Ravindu1233/todo-management-react-frontend.git",
      },
      {
        label: "Backend",
        url: "https://github.com/Ravindu1233/todo-management-springboot-backend.git",
      },
    ],
    videoUrl: "public/videos/todo-managment.mp4",
  },
  {
    name: "MERN Stack User Management App",
    description:
      "Full-stack user management app featuring secure JWT-based registration and login, profile updates, email verification, OTP-based password reset, and protected routes. Built with Formik for forms and Zustand for state management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Formik",
      "Zustand",
    ],
    role: "Solo Developer",
    type: "Personal",
    githubLinks: [
      {
        label: "GitHub",
        url: "https://github.com/Ravindu1233/Mern-Stack-User-Application",
      },
    ],
    videoUrl: "public/videos/user-managment.mp4",
  },
  {
    name: "Pathfinder Career Guidance App",
    description:
      "A platform where job seekers apply for jobs, companies post and manage listings, and admins handle users, subscriptions, and payments. Built as a group project with React frontend and Spring Boot backend.",
    technologies: ["React", "Spring Boot", "MySQL", "REST API", "Git"],
    role: "Frontend & Backend Developer",
    type: "Group",
    githubLinks: [
      {
        label: "Frontend",
        url: "https://github.com/tharaka-jayasinghe-7/pathfinder-react-springboot.git",
      },
      {
        label: "Backend",
        url: "https://github.com/tharaka-jayasinghe-7/pathfinder-backend.git",
      },
    ],
    videoUrl: "public/videos/pathfinder.mp4",
  },
  {
    name: "Vehicle Sales Aggregator",
    description:
      "Aggregates vehicle listings from multiple platforms into one unified interface. Features advanced search and filtering, price comparison, listing approval workflows, and user/admin authentication.",
    technologies: ["React", "Node.js", "MySQL", "REST API", "JWT"],
    role: "Full-Stack Developer Intern",
    type: "Group",
    githubLinks: [],
    videoUrl: "",
  },
  {
    name: "MTG Card Sorting Application",
    description:
      "Admin-configurable card sorting system where admins define device types (e.g. 5x5 grids), register devices, and create slot-based templates with alphabetical or price-based sorting modes.",
    technologies: ["React", "Node.js", "MySQL", "REST API"],
    role: "Full-Stack Developer Intern",
    type: "Group",
    githubLinks: [],
    videoUrl: "",
  },
];

const VideoModal = ({ url, onClose }: { url: string; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <div
      className="relative w-full max-w-3xl rounded-xl overflow-hidden bg-background shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      <video src={url} controls autoPlay className="w-full max-h-[70vh]" />
    </div>
  </div>
);

const ProjectsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            My Projects
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card glow-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-green transition-shadow">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <span
                  className={`text-xs font-mono px-2 py-1 rounded-full ${
                    project.type === "Personal"
                      ? "bg-primary/10 text-primary"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {project.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-border pt-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {project.role}
                  </span>

                  {/* Video button */}
                  {project.videoUrl && (
                    <button
                      onClick={() => setActiveVideo(project.videoUrl!)}
                      className="flex items-center gap-1 text-xs text-primary font-medium hover:underline"
                    >
                      <Play className="w-3 h-3" /> Demo
                    </button>
                  )}
                </div>

                {/* GitHub links */}
                {project.githubLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.githubLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        {link.label}
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <VideoModal url={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
};

export default ProjectsSection;

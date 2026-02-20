import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  role: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "Magic: The Gathering Sorting Machine",
    description: "Built a card sorting system using OCR and AI to sort Magic: The Gathering cards by color, rarity, and set.",
    technologies: ["Python", "OpenCV", "YOLOv8", "TensorFlow"],
    role: "Project Lead",
    link: "#",
  },
  {
    name: "TaskFlow – Project Manager",
    description: "A real-time collaborative project management tool with Kanban boards, Gantt charts, and team analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    role: "Full Stack Developer",
    link: "#",
  },
  {
    name: "EcoTrack – Carbon Footprint Tracker",
    description: "Mobile-first web app that tracks daily carbon emissions and provides personalized sustainability tips.",
    technologies: ["React Native", "Firebase", "Chart.js"],
    role: "Frontend Developer",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">My Projects</h2>
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
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-green transition-shadow">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">{project.role}</span>
                {project.link && (
                  <a href={project.link} className="flex items-center gap-1 text-primary text-sm font-medium hover:underline">
                    Demo <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

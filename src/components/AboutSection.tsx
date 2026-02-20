import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "C#", "SQL"],
  },
  {
    title: "Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "Spring Boot",
      "Laravel",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "MS SQL Server"],
  },
  {
    title: "Tools & Others",
    skills: [
      "Git / GitHub",
      "Postman",
      "REST APIs",
      "JWT",
      "Prisma ORM",
      "MERN Stack",
      "Microservices",
    ],
  },
];

const techStack = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container mx-auto max-w-5xl">
        {/* About Me Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card glow-border mb-4">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-muted-foreground font-mono">
              about_me
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            About Me
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm Ravindu Weerasinghe, a passionate Software Engineer currently
            pursuing a Bachelor's in Software Engineering at the National
            Institute of Business Management (NIBM). I have a solid foundation
            in object-oriented programming, data structures, and the software
            development lifecycle. My expertise spans React.js, Next.js, Java,
            Spring Boot, and full-stack development, with a focus on building
            scalable web applications. I've worked on projects like a Vehicle
            Sales Aggregator and MTG Card Sorting application, gaining
            experience with REST APIs, JWT authentication, and database
            management using MySQL, MongoDB, PostgreSQL, and Prisma ORM. I aim
            to create seamless, high-performance user experiences while ensuring
            scalability.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glow-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <h4 className="text-primary font-bold text-base mb-4">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.15 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-full glass-card glow-border flex items-center justify-center p-3 hover:border-primary/40 transition-all duration-300 hover:bg-primary/5">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

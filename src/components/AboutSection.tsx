import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            Institute of Business Management (NIBM). I have a strong foundation
            in object-oriented programming, data structures, and the software
            development lifecycle. My technical expertise spans across React.js,
            Next.js, Java, Spring Boot, and full-stack development, with a
            particular interest in building scalable, efficient web
            applications. Throughout my career, I've worked on a variety of
            projects, ranging from a Vehicle Sales Aggregator to an MTG Card
            Sorting application. I've gained practical experience with REST
            APIs, JWT authentication, and database management using tools like
            MySQL, MongoDB, PostgreSQL, and Prisma ORM. In my projects, I focus
            on creating seamless user experiences while ensuring performance and
            scalability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

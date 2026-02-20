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
            <span className="text-xs text-muted-foreground font-mono">about_me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer with a love for building elegant, performant web applications.
            With expertise spanning React, Node.js, and cloud technologies, I thrive on turning complex problems
            into intuitive digital experiences. When I'm not coding, you'll find me exploring the latest in AI
            research or hiking the trails of Northern California.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

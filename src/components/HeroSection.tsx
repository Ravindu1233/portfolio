import { Mail, Linkedin, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { value: "3+", label: "Years\nExperience" },
  { value: "50+", label: "Projects\nCompleted" },
  { value: "15+", label: "Technologies" },
  { value: "98%", label: "Client\nSatisfaction" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background pt-20">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(142 70% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 70% 45%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glow-border mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Full Stack Developer & AI Enthusiast | San Francisco, CA
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              John <span className="text-gradient">Doe</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-4xl font-medium">
                Developer Portfolio
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Building modern, scalable web applications with React, JavaScript,
              and cutting-edge technologies. Transforming ideas into exceptional
              digital experiences.
            </p>

            <div className="flex items-center gap-3 mb-12">
              <a
                href="mailto:john@example.com"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-green"
              >
                Get in Touch
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-lg glow-border glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-lg glow-border glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:john@example.com"
                className="w-11 h-11 rounded-lg glow-border glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 md:gap-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`${i > 0 ? "border-l border-border pl-6 md:pl-10" : ""}`}
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground whitespace-pre-line leading-tight mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="w-72 h-80 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden glow-border glow-green">
              <img
                src={profilePhoto}
                alt="John Doe - Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative corner brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Mail, Linkedin, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { value: "1+", label: "Years\nExperience" },
  { value: "10+", label: "Projects\nCompleted" },
  { value: "15+", label: "Technologies" },
  { value: "2", label: "Internships\nCompleted" },
];

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[100svh] flex items-center relative overflow-hidden bg-background pt-20"
    >
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
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-primary/8 blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glow-border mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                Full Stack Developer & Software Engineer | Colombo, Sri Lanka
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              Ravindu <span className="text-gradient">Weerasinghe</span>
              <br />
              <span className="text-muted-foreground text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                Developer Portfolio
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Enthusiastic Software Engineer with a strong foundation in
              object-oriented programming, React.js, Java, Next.js and Spring
              Boot. Passionate about building modern web applications and
              transforming ideas into exceptional digital experiences.
            </p>

            {/* Buttons & Social */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-10">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-green"
              >
                Get in Touch
              </button>

              <a
                href="https://www.linkedin.com/in/ravindu-weerasinghe-681656317/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg glow-border glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/Ravindu1233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg glow-border glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="mailto:ravindu.dilshan1013@gmail.com"
                className="w-11 h-11 rounded-lg glow-border glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground whitespace-pre-line leading-tight mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="w-56 h-64 sm:w-72 sm:h-80 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden glow-border glow-green">
              <img
                src={profilePhoto}
                alt="Ravindu Weerasinghe - Developer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

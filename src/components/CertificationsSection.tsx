import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  image: string;
}

const certifications: Certification[] = [
  {
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Issued Oct 2024",
    image: "/certifications/Postman API Fundamentals Student Expert.jfif",
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Issued Sep 2024",
    image: "/certifications/problem solving basic certificate.jfif",
  },
  {
    name: "Database Design Learner",
    issuer: "Oracle",
    date: "Issued Sep 2024",
    image: "/certifications/Database Design.png",
  },
  {
    name: "DFo Database Foundations Learner",
    issuer: "Oracle",
    date: "Issued Aug 2024",
    image: "/certifications/Database Foundations.png",
  },
  {
    name: "Object Oriented Programming",
    issuer: "Great Learning",
    date: "Issued Aug 2024",
    image: "/certifications/Object Oriented Programming.jfif",
  },
];

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 glass-card glow-border rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-foreground md:text-base">
                  {cert.name}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  {cert.issuer} - {cert.date}
                </p>
              </div>
              <a
                href={cert.image}
                target="_blank"
                rel="noreferrer"
                className="flex flex-shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                <span className="hidden sm:inline">Verify</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

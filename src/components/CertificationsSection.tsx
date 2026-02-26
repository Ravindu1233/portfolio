import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "March 2022",
    link: "#",
  },
  {
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "August 2022",
    link: "#",
  },
  {
    name: "Meta Front-End Developer Certificate",
    issuer: "Meta (Coursera)",
    date: "January 2023",
    link: "#",
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
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-sm md:text-base">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  className="flex-shrink-0 flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                >
                  <span className="hidden sm:inline">Verify</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

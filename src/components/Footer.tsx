import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-secondary/30 border-t border-border text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Code2 className="w-4 h-4 text-primary" />
        <span className="font-bold text-foreground text-sm">John Doe</span>
      </div>
      <p className="text-muted-foreground text-xs font-mono">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

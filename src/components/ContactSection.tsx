import { useState, useRef } from "react";
import { Mail, Send, CheckCircle, XCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_dud90ci";
const TEMPLATE_ID = "template_vr1iw0o";
const PUBLIC_KEY = "KrG0YRAcoQQ2ZyrdQ";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="text-gradient">Contact</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Let's build something impactful together — feel free to reach out!
          Whether you have a project in mind or just want to connect, I'd love
          to hear from you.
        </p>

        <div className="flex items-center justify-center gap-2 mb-10 text-muted-foreground text-sm">
          <Mail className="w-4 h-4 text-primary" />
          <span>ravindu.dilshan1013@gmail.com</span>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass-card rounded-xl p-6 md:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                <span className="text-primary">Your</span> Name
              </label>
              <input
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                <span className="text-primary">Your</span> Email
              </label>
              <input
                name="from_email"
                type="email"
                value={form.from_email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Let me know how I can help you"
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">
              <span className="text-primary">Your</span> Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Leave a message..."
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y"
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
              <XCircle className="w-4 h-4 flex-shrink-0" />
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-2 px-8 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

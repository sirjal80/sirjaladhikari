import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Instagram, MapPin, Send, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactSchema = z.object({
    name: z.string().trim().nonempty({ message: "Name cannot be empty" }).max(100),
    email: z.string().trim().email({ message: "Invalid email address" }).max(255),
    message: z.string().trim().nonempty({ message: "Message cannot be empty" }).max(1000),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const result = contactSchema.safeParse({ name, email, message });
    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Please check your inputs.";
      toast({
        title: "Validation error",
        description: firstError,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const res: any = await emailjs.send(
        'service_bl9glnn',
        'template_gy4hy8h',
        { from_name: name, from_email: email, message },
        'kqTNiDtfF3YlmPgsg'
      );

      if (!res || res.status !== 200) {
        throw new Error(res?.text || 'Email service did not return 200');
      }

      toast({ title: 'Success', description: 'Message sent successfully!' });
      formRef.current?.reset();
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: 'Error',
        description: error?.message || 'Failed to send message. Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sirjaladhikari80@gmail.com", href: "mailto:sirjaladhikari80@gmail.com" },
    { icon: Phone, label: "Phone", value: "+977-9744319122", href: "tel:+9779744319122" },
    { icon: MapPin, label: "Location", value: "Tilottama–Manigram, Butwal, Nepal" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/sirjal80", username: "@sirjal80" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sirjal-adhikari-7250792b1", username: "sirjal-adhikari" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/sirjal.adhikari", username: "@sirjal.adhikari" },
    { icon: Twitter, label: "X (Twitter)", href: "https://x.com/sirjal32", username: "@sirjal32" },
  ];

  return (
    <section id="contact" className="py-24 px-6" aria-label="Contact information and form">
      <div className="container max-w-4xl mx-auto">
        <header className="mb-16">
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-3">
            Contact
          </p>
          <h2 className="text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Have a project in mind? Let's collaborate and build something together.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 bg-card/60 border-border/40">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <Input id="name" name="name" placeholder="Your name" required className="bg-muted/30 border-border/40" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-muted/30 border-border/40" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea id="message" name="message" placeholder="Tell me about your project..." required className="min-h-[120px] bg-muted/30 border-border/40" />
              </div>
              <Button type="submit" className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90" disabled={isSubmitting}>
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/60 border-border/40">
              <h3 className="font-medium text-foreground mb-4">Contact Information</h3>
              <address className="space-y-4 not-italic">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-muted/50">
                      <item.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-foreground hover:text-accent transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </address>
            </Card>

            <Card className="p-6 bg-card/60 border-border/40">
              <h3 className="font-medium text-foreground mb-4">Connect With Me</h3>
              <nav className="space-y-2" aria-label="Social media profiles">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/40 transition-all"
                    aria-label={`${social.label} profile: ${social.username}`}
                  >
                    <div className="p-2 rounded-lg bg-muted/50">
                      <social.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{social.label}</p>
                      <p className="text-xs text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </nav>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Instagram, MapPin, Send, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        'kqTNiDtfF3YlmPgsg'
      );
      console.log('EmailJS response:', res);

      if (!res || res.status !== 200) {
        throw new Error(res?.text || 'Email service did not return 200');
      }

      toast({
        title: 'Success',
        description: 'Message sent successfully!',
      });

      // Reset form safely
      const form = e.currentTarget;
      if (form) {
        form.reset();
      }
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
    {
      icon: Mail,
      label: "Email",
      value: "sirjaladhikari80@gmail.com",
      href: "mailto:sirjaladhikari80@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977-9744319122",
      href: "tel:+9779744319122",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tilottama–Manigram, Butwal, Nepal",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sirjal80",
      username: "@sirjal80",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sirjal-adhikari-7250792b1",
      username: "sirjal-adhikari",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/sirjal.adhikari",
      username: "@sirjal.adhikari",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      href: "https://x.com/sirjal32",
      username: "@sirjal32",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 md:p-8 glass">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Your name" 
                  required 
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="your.email@example.com" 
                  required 
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..." 
                  required 
                  className="min-h-[150px] bg-background/50"
                />
              </div>

              <Button type="submit" className="w-full gap-2 glow" disabled={isSubmitting}>
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 glass">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 glass">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

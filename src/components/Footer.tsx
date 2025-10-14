import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Sirjal Adhikari</h3>
            <p className="text-muted-foreground">
              Future Tech Innovator building the tomorrow, today.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Projects", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/sirjal80"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:bg-primary/20 transition-all hover:glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sirjal-adhikari-7250792b1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:bg-primary/20 transition-all hover:glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/sirjal.adhikari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:bg-primary/20 transition-all hover:glow"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:sirjaladhikari80@gmail.com"
                className="p-3 rounded-lg glass hover:bg-primary/20 transition-all hover:glow"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Sirjal Adhikari. Built with
            <Heart className="w-4 h-4 text-primary" />
            and passion for technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

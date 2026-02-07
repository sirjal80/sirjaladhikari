import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="container max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Sirjal Adhikari</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Developer, event lead, and digital creator based in Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="space-y-3" aria-label="Footer navigation">
            <h4 className="text-sm font-medium text-foreground">Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Connect</h4>
            <nav className="flex gap-1" aria-label="Social media links">
              <a
                href="https://github.com/sirjal80"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sirjal-adhikari-7250792b1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/sirjal.adhikari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:sirjaladhikari80@gmail.com"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Sirjal Adhikari. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
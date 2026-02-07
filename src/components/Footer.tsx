import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="container max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand - understated */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Sirjal Adhikari</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building tomorrow, today.
            </p>
          </div>

          {/* Quick Links - minimal */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links - subtle */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Connect</h4>
            <div className="flex gap-1">
              <a
                href="https://github.com/sirjal80"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sirjal-adhikari-7250792b1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/sirjal.adhikari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:sirjaladhikari80@gmail.com"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - very subtle */}
        <div className="pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground/60">
            © 2022 Sirjal Adhikari
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

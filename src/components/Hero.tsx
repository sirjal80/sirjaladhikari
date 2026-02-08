import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram, Mail, Camera } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden noise-overlay pt-20 md:pt-24">
      {/* Subtle gradient background orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-24 w-[400px] h-[400px] bg-muted/30 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://i.postimg.cc/13pr7hzb/temp-Image-P7non-E.avif" 
                alt="Sirjal Adhikari - Developer and Event Lead from Nepal" 
                className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-3 border-border/50 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-accent/60 rounded-full" />
            </div>
          </div>
          
          {/* Name and intro - SEO optimized */}
          <header className="space-y-5 text-center">
            <h1 className="text-foreground">
              Sirjal Adhikari
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
              Developer, event lead, and digital creator from Nepal. 
              I build web experiences, organize tech events, and help businesses grow online.
            </p>
          </header>

          {/* CTAs */}
          <nav className="flex flex-wrap gap-3 justify-center pt-2" aria-label="Primary actions">
            <Button 
              size="lg" 
              className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-lg"
              asChild
            >
              <a href="#projects" aria-label="View my projects and work">
                View Work 
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-border/60 hover:bg-muted/50"
              asChild
            >
              <a href="#contact" aria-label="Contact me">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="gap-2 text-muted-foreground hover:text-foreground hover:bg-transparent"
              asChild
            >
              <a href="#photos" aria-label="View photo gallery">
                <Camera className="w-4 h-4" />
                Photos
              </a>
            </Button>
          </nav>

          {/* Social Links */}
          <nav className="flex gap-2 justify-center pt-6" aria-label="Social media links">
            <a 
              href="https://github.com/sirjal80" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sirjal-adhikari-7250792b1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/sirjal.adhikari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
              aria-label="Instagram profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Hero;
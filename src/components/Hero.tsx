import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram, Mail, Camera } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Subtle gradient background orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-24 w-[400px] h-[400px] bg-muted/30 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-24">
        <div className="max-w-2xl mx-auto space-y-10">
          {/* Profile Photo - slightly off-center for natural feel */}
          <div className="flex justify-center mb-6" style={{ marginLeft: '-8px' }}>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/13pr7hzb/temp-Image-P7non-E.avif" 
                alt="Sirjal Adhikari" 
                className="w-32 h-32 rounded-full object-cover border-2 border-border/50 shadow-soft"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent/60 rounded-full" />
            </div>
          </div>
          
          {/* Name and intro - editorial spacing */}
          <div className="space-y-5 text-center">
            <p className="text-muted-foreground text-sm tracking-wide uppercase">
              Class 11 · Computer Science
            </p>
            <h1 className="text-foreground">
              Sirjal Adhikari
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto" style={{ marginTop: '1.5rem' }}>
              Student from Nepal, exploring AI, robotics, and game development. 
              Building things that matter.
            </p>
          </div>

          {/* CTAs - minimal, practical */}
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button 
              size="lg" 
              className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-lg"
              asChild
            >
              <a href="https://www.youtube.com/@sirjaladhikari" target="_blank" rel="noopener noreferrer">
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
              <a href="#contact">
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
              <a href="#photos">
                <Camera className="w-4 h-4" />
                Photos
              </a>
            </Button>
          </div>

          {/* Social Links - restrained, subtle */}
          <div className="flex gap-2 justify-center pt-6">
            <a 
              href="https://github.com/sirjal80" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sirjal-adhikari-7250792b1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/sirjal.adhikari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram, Mail, Camera } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Tech workspace background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://i.postimg.cc/13pr7hzb/temp-Image-P7non-E.avif" 
              alt="Sirjal Adhikari" 
              className="w-48 h-48 rounded-full object-cover border-4 border-primary glow"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Sirjal Adhikari</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Future Tech Innovator | Aspiring Developer | Passionate Learner
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Class 11 Computer Science student from Nepal, passionate about AI, robotics, 
            and game development. Building the future, one line of code at a time.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="gap-2 glow group"
              asChild
            >
              <a href="https://www.youtube.com/@sirjaladhikari" target="_blank" rel="noopener noreferrer">
                View My Work 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              asChild
            >
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              asChild
            >
              <a href="#photos">
                <Camera className="w-4 h-4" />
                Photos
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/sirjal80" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all hover:glow"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sirjal-adhikari-7250792b1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all hover:glow"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/sirjal.adhikari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all hover:glow"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;

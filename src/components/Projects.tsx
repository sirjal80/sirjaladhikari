import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Gamepad2, Bot, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: "AI Voice Assistant",
      category: "Artificial Intelligence",
      description: "Python-based voice assistant with speech recognition and natural language processing capabilities. Built in Class 9 as an early exploration into AI technology.",
      tech: ["Python", "Speech Recognition", "NLP"],
      color: "from-primary to-secondary",
      codeHref: "https://github.com/sirjal80",
      viewHref: "https://www.youtube.com/@sirjaladhikari",
    },
    {
      icon: Gamepad2,
      title: "Unity Game Project",
      category: "Game Development",
      description: "Award-winning game developed for Day Dream Butwal 2025. Features innovative gameplay mechanics and polished user experience.",
      tech: ["Unity", "C#", "Game Design"],
      color: "from-accent to-primary",
      codeHref: "https://github.com/sirjal80",
      viewHref: "https://www.youtube.com/@sirjaladhikari",
    },
    {
      icon: Globe,
      title: "SEO-Optimized Website",
      category: "Web Development",
      description: "Responsive website with advanced SEO optimization for local businesses. Improved search rankings and user engagement significantly.",
      tech: ["HTML/CSS", "SEO", "Analytics"],
      color: "from-secondary to-accent",
      codeHref: "https://github.com/sirjal80",
      viewHref: "https://www.youtube.com/@sirjaladhikari",
    },
    {
      icon: Globe,
      title: "Bolt Hackathon Project",
      category: "Web Project",
      description: "Project built for the Bolt Hackathon.",
      tech: ["Web", "Hackathon"],
      color: "from-primary to-secondary",
      viewHref: "https://sirjaladhikari.netlify.app/",
      codeHref: "https://github.com/sirjal80",
    },
    {
      icon: Globe,
      title: "NASA Space Apps: Code4Earth",
      category: "Competition",
      description: "Code4Earth project for the NASA Space Apps Challenge.",
      tech: ["Web", "Challenge"],
      color: "from-secondary to-accent",
      viewHref: "https://code4earth.study/",
      codeHref: "https://github.com/sirjal80",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, game development, and web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 glass hover:card-glow transition-all group overflow-hidden relative"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative space-y-4">
                <div className="p-4 rounded-xl bg-primary/10 w-fit group-hover:scale-110 transition-transform">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="gap-2 flex-1"
                    asChild
                  >
                    <a href={project.codeHref ?? "https://github.com/sirjal80"} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="gap-2 flex-1"
                    asChild
                  >
                    <a href={project.viewHref ?? "https://www.youtube.com/@sirjaladhikari"} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <Card className="p-8 glass text-center">
          <h3 className="text-2xl font-bold mb-3">More Projects Coming Soon</h3>
          <p className="text-muted-foreground mb-6">
            Currently working on exciting new projects in AI, robotics, and game development. 
            Stay tuned for updates!
          </p>
          <Button variant="outline">
            Follow My Journey
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Projects;

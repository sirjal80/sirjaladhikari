import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Gamepad2, Bot, Globe, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: "AI Voice Assistant",
      category: "Artificial Intelligence",
      description: "Python-based voice assistant with speech recognition and natural language processing capabilities. Built as an early exploration into AI technology.",
      tech: ["Python", "Speech Recognition", "NLP"],
      codeHref: "https://github.com/sirjal80",
      viewHref: "https://youtu.be/MgeSx_0g_EQ",
    },
    {
      icon: Gamepad2,
      title: "Unity Game Project",
      category: "Game Development",
      description: "Award-winning game developed for Day Dream Butwal. Features innovative gameplay mechanics and polished user experience.",
      tech: ["Unity", "C#", "Game Design"],
      codeHref: "https://github.com/sirjal80",
      viewHref: "https://codejal.itch.io/impossble-e5cape",
    },
    {
      icon: Globe,
      title: "SEO-Optimized Website",
      category: "Web Development",
      description: "Responsive website with advanced SEO optimization for local businesses. Improved search rankings and user engagement significantly.",
      tech: ["HTML/CSS", "SEO", "Analytics"],
      codeHref: "https://github.com/sirjal80",
      viewHref: "https://www.youtube.com/@sirjaladhikari",
    },
    {
      icon: Globe,
      title: "Bolt Hackathon Project",
      category: "Web Project",
      description: "Project built for the Bolt Hackathon.",
      tech: ["Web", "Hackathon"],
      viewHref: "https://sirjaladhikari.netlify.app/",
      codeHref: "https://github.com/sirjal80",
    },
    {
      icon: Globe,
      title: "NASA Space Apps: Code4Earth",
      category: "Competition",
      description: "Code4Earth project for the NASA Space Apps Challenge.",
      tech: ["Web", "Challenge"],
      viewHref: "https://code4earth.study/",
      codeHref: "https://github.com/sirjal80",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6" aria-label="Projects and work portfolio">
      <div className="container max-w-4xl mx-auto">
        <header className="mb-16">
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-3">
            Projects
          </p>
          <h2 className="text-foreground">
            Things I've Built
          </h2>
        </header>

        {/* Featured Project - HackDay Butwal */}
        <article>
          <Card className="p-8 mb-10 bg-card/60 border-border/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">
                    Featured · Event Leadership
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    Event Lead at HackDay Butwal
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Led and organized HackDay Butwal, bringing together developers, designers, and innovators 
                for a collaborative hackathon experience in the Butwal tech community.
              </p>
              <Button 
                className="gap-2 bg-foreground text-background hover:bg-foreground/90"
                asChild
              >
                <a 
                  href="https://butwal.devpost.com/?ref_feature=challenge&ref_medium=discover" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View HackDay Butwal event on Devpost"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Event
                </a>
              </Button>
            </div>
          </Card>
        </article>

        {/* Other Projects */}
        <p className="text-sm text-muted-foreground mb-6">Other projects</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <article key={index}>
              <Card className="p-6 bg-card/60 border-border/40 hover:border-border/60 transition-all h-full">
                <div className="space-y-4">
                  <div className="p-2.5 rounded-lg bg-muted/50 w-fit">
                    <project.icon className="w-5 h-5 text-muted-foreground" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="font-semibold text-foreground">{project.title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="gap-2 flex-1 border-border/40" asChild>
                      <a href={project.codeHref} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`}>
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="gap-2 flex-1 bg-foreground text-background hover:bg-foreground/90" asChild>
                      <a href={project.viewHref} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`}>
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

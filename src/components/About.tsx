import { Card } from "@/components/ui/card";
import { Code2, Cpu, Gamepad2, Rocket } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Code2, title: "Development", description: "Python, C++, Web" },
    { icon: Cpu, title: "AI & Automation", description: "Smart solutions" },
    { icon: Gamepad2, title: "Game Dev", description: "Unity projects" },
    { icon: Rocket, title: "Events", description: "Tech community" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        {/* Section header - SEO optimized */}
        <header className="mb-16">
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-3">
            About
          </p>
          <h2 className="text-foreground">
            Who I am
          </h2>
        </header>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a developer and event organizer based in Butwal, Nepal. 
              I got into tech through curiosity—now I build things that solve 
              real problems and bring people together.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans web development, game development with Unity, and 
              organizing community events like HackDay Butwal. I also help 
              local businesses grow their online presence through SEO and 
              digital marketing consulting.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding or planning events, I'm usually exploring 
              new technologies, contributing to open-source, or mentoring 
              others getting started in tech.
            </p>
          </div>

          {/* Interest cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3" style={{ marginTop: '12px' }}>
            {interests.map((item, index) => (
              <Card 
                key={index} 
                className="p-5 bg-card/60 border-border/40 hover:border-border/60 transition-all"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-lg bg-muted/50 w-fit">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
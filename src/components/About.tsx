import { Card } from "@/components/ui/card";
import { Code2, Cpu, Gamepad2, Rocket } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Code2, title: "Programming", description: "Python, C++, C" },
    { icon: Cpu, title: "AI & Robotics", description: "Intelligent systems" },
    { icon: Gamepad2, title: "Game Dev", description: "Unity experiences" },
    { icon: Rocket, title: "Innovation", description: "Always building" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        {/* Section header - subtle left accent */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-3">
            About
          </p>
          <h2 className="text-foreground">
            A bit about me
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text content - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Class 11 Computer Science student at New Horizon EBS 
              in Tilottama–Manigram, near Butwal, Nepal. Started with curiosity, 
              now deep into building things that solve real problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From developing AI voice assistants in Class 9 to competing in 
              the NASA Space Apps Challenge and Game Jam Globals—I learn by doing. 
              When not coding, I help local businesses with SEO and digital presence.
            </p>
          </div>

          {/* Interest cards - 2 columns, slight offset for natural feel */}
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

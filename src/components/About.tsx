import { Card } from "@/components/ui/card";
import { Code2, Cpu, Gamepad2, Rocket } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Code2, title: "Programming", description: "Python, C++, and C" },
    { icon: Cpu, title: "AI & Robotics", description: "Building intelligent systems" },
    { icon: Gamepad2, title: "Game Dev", description: "Unity & interactive experiences" },
    { icon: Rocket, title: "Innovation", description: "Always learning & creating" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate learner on a journey to make an impact through technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm Sirjal Adhikari, a Class 11 Computer Science student at New Horizon EBS 
              in Tilottama–Manigram, near Butwal, Nepal. My journey in technology started 
              with curiosity and has evolved into a deep passion for creating innovative solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From developing AI voice assistants in Class 9 to competing in hackathons like 
              the NASA Space Apps Challenge and Game Jam Globals, I'm constantly pushing my 
              boundaries. I believe in learning by doing and solving real-world problems 
              through code.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or helping local businesses grow through SEO and 
              digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {interests.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 glass hover:card-glow transition-all hover:scale-105 group"
              >
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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

import { Card } from "@/components/ui/card";
import { Trophy, Users, Mic, TrendingUp, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Trophy,
      title: "Winner - Day Dream Butwal 2025",
      organization: "Game Jam Globals",
      description: "Led a team to victory in a competitive game development hackathon, showcasing creativity and technical skills in Unity.",
      skills: ["Unity", "Game Design", "Team Leadership"],
    },
    {
      icon: Users,
      title: "Participant - NASA Space Apps Challenge",
      organization: "NASA",
      description: "Collaborated with a diverse team to solve real-world space exploration challenges using technology and innovation.",
      skills: ["Problem Solving", "Collaboration", "Research"],
    },
    {
      icon: Mic,
      title: "AI Voice Assistant Project",
      organization: "Personal Project - Class 9",
      description: "Developed a Python-based voice assistant using speech recognition and natural language processing.",
      skills: ["Python", "Speech Recognition", "AI/ML"],
    },
    {
      icon: Code,
      title: "Data Science Tools Development",
      organization: "Personal Projects",
      description: "Created data analysis and visualization tools using Pandas and Matplotlib for various use cases.",
      skills: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    },
    {
      icon: TrendingUp,
      title: "Freelance SEO & Digital Marketing",
      organization: "Local Businesses",
      description: "Helping small businesses improve their online presence through SEO optimization and digital marketing strategies.",
      skills: ["SEO", "Digital Marketing", "Web Analytics"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projects, competitions, and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 glass hover:card-glow transition-all hover:scale-105 group"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.organization}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

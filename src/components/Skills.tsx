import { Card } from "@/components/ui/card";
import { Code2, Database, Palette, TrendingUp, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
      ],
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      skills: [
        { name: "Speech Recognition", level: 80 },
        { name: "NLP", level: 70 },
        { name: "AI Tools", level: 75 },
      ],
    },
    {
      icon: Palette,
      title: "Game Development",
      skills: [
        { name: "Unity", level: 85 },
        { name: "Game Design", level: 80 },
        { name: "C# Scripting", level: 75 },
      ],
    },
    {
      icon: Database,
      title: "Data Science",
      skills: [
        { name: "Pandas", level: 80 },
        { name: "Matplotlib", level: 75 },
        { name: "Data Analysis", level: 70 },
      ],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "Web Design", level: 80 },
        { name: "Responsive Design", level: 75 },
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      skills: [
        { name: "SEO", level: 85 },
        { name: "Digital Strategy", level: 80 },
        { name: "Analytics", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit built through hands-on projects and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 glass hover:card-glow transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Teamwork", "Creativity", "Problem Solving", "Communication", "Research", "Leadership"].map((skill, i) => (
              <span 
                key={i} 
                className="px-6 py-3 glass rounded-full font-medium hover:bg-primary/20 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

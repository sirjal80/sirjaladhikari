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
    <section id="skills" className="py-24 px-6" aria-label="Technical skills and expertise">
      <div className="container max-w-4xl mx-auto">
        <header className="mb-16">
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-3">
            Skills
          </p>
          <h2 className="text-foreground">
            Technical Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            A diverse toolkit built through hands-on projects and continuous learning
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/60 border-border/40 hover:border-border/60 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-muted/50">
                    <category.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} proficiency`}>
                        <div 
                          className="h-full bg-accent/60 rounded-full transition-all duration-1000"
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
        <div className="mt-12">
          <h3 className="text-lg font-medium text-foreground mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["Teamwork", "Creativity", "Problem Solving", "Communication", "Research", "Leadership"].map((skill, i) => (
              <span 
                key={i} 
                className="px-4 py-2 text-sm bg-muted/50 text-muted-foreground rounded-lg border border-border/30"
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

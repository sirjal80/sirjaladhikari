import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      year: "2023 - Present",
      title: "Class 11 - Computer Science",
      institution: "New Horizon EBS",
      location: "Tilottama–Manigram, Butwal, Nepal",
      description: "Focusing on advanced programming concepts, algorithms, and practical project development.",
      current: true,
    },
    {
      year: "2025",
      title: "SEE (Secondary Education Examination)",
      institution: "Completed with Strong Results",
      location: "Nepal",
      description: "Built a strong foundation in mathematics, science, and computer fundamentals.",
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and commitment to continuous learning
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <Card 
              key={index} 
              className={`p-6 md:p-8 glass hover:card-glow transition-all ${
                item.current ? 'border-primary/50' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={`p-4 rounded-lg ${
                    item.current ? 'bg-primary/20' : 'bg-muted'
                  } w-fit`}>
                    {item.current ? (
                      <BookOpen className="w-8 h-8 text-primary" />
                    ) : (
                      <GraduationCap className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium text-primary">{item.year}</span>
                    {item.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-lg font-medium text-muted-foreground">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

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
    <section id="education" className="py-24 px-6" aria-label="Education and academic background">
      <div className="container max-w-4xl mx-auto">
        <header className="mb-16">
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-3">
            Education
          </p>
          <h2 className="text-foreground">
            Academic Background
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            My academic journey and commitment to continuous learning
          </p>
        </header>

        <div className="space-y-6">
          {education.map((item, index) => (
            <article key={index}>
              <Card 
                className={`p-6 bg-card/60 border-border/40 hover:border-border/60 transition-all ${
                  item.current ? 'ring-1 ring-accent/20' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg ${item.current ? 'bg-accent/10' : 'bg-muted/50'}`}>
                    {item.current ? (
                      <BookOpen className={`w-5 h-5 ${item.current ? 'text-accent' : 'text-muted-foreground'}`} />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.current && (
                        <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.description}</p>
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

export default Education;

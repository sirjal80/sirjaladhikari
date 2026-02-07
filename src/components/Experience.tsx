import { Card } from "@/components/ui/card";
import { Trophy, Users, Mic, TrendingUp, Code, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Calendar,
      title: "Event Lead",
      organization: "HackDay Butwal",
      period: "2024 – Present",
      description: "Leading the organization and execution of HackDay Butwal, a community hackathon bringing together developers and creators.",
      responsibilities: [
        "Planned and coordinated event logistics, venue setup, and scheduling for 100+ participants",
        "Led a team of 8 volunteers, delegating tasks and ensuring smooth on-ground operations",
        "Managed communication with sponsors, mentors, and participating teams throughout the event",
        "Resolved real-time issues during the hackathon, from technical setup to participant queries",
        "Built partnerships with local tech communities to expand event reach and impact"
      ],
      skills: ["Event Management", "Team Leadership", "Communication", "Problem Solving"],
      featured: true,
    },
    {
      icon: Trophy,
      title: "Winner",
      organization: "Day Dream Butwal 2025 – Game Jam Globals",
      period: "2025",
      description: "Led a team to first place in a competitive game development hackathon, delivering a polished game within the time constraint.",
      skills: ["Unity", "Game Design", "Team Leadership", "C#"],
    },
    {
      icon: Users,
      title: "Participant",
      organization: "NASA Space Apps Challenge",
      period: "2024",
      description: "Collaborated with a diverse team to build solutions for real-world space exploration challenges using web technologies.",
      skills: ["Problem Solving", "Collaboration", "Research", "Web Development"],
    },
    {
      icon: Mic,
      title: "AI Voice Assistant",
      organization: "Personal Project",
      period: "2022",
      description: "Built a Python-based voice assistant with speech recognition and basic natural language processing capabilities.",
      skills: ["Python", "Speech Recognition", "AI/ML"],
    },
    {
      icon: Code,
      title: "Data Science Tools",
      organization: "Personal Projects",
      period: "2023",
      description: "Created data analysis and visualization tools using Python for various practical use cases.",
      skills: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    },
    {
      icon: TrendingUp,
      title: "Freelance SEO Consultant",
      organization: "Local Businesses",
      period: "2023 – Present",
      description: "Helping small businesses improve their online visibility through SEO audits, keyword optimization, and content strategy.",
      skills: ["SEO", "Digital Marketing", "Google Analytics", "Content Strategy"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        {/* Section header - SEO optimized */}
        <header className="mb-16">
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-3">
            Experience
          </p>
          <h2 className="text-foreground">
            Work & Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Projects, leadership roles, and real-world applications of my skills
          </p>
        </header>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <article key={index}>
              <Card 
                className={`p-6 bg-card/60 border-border/40 hover:border-border/60 transition-all ${
                  exp.featured ? 'ring-1 ring-accent/20' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg ${exp.featured ? 'bg-accent/10' : 'bg-muted/50'}`}>
                      <exp.icon className={`w-5 h-5 ${exp.featured ? 'text-accent' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{exp.title}</h3>
                        {exp.featured && (
                          <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exp.organization} · {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities (for featured entries) */}
                  {exp.responsibilities && (
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent/60 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Experience;
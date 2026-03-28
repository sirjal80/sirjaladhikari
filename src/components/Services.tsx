import { Card } from "@/components/ui/card";
import { Globe, TrendingUp, Code2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design",
      description: "Creating modern, responsive websites that look great on all devices. Focus on user experience and clean, professional designs.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Fast Loading Times",
        "SEO Friendly",
      ],
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "Boost your website's visibility on search engines. Data-driven strategies to improve rankings and drive organic traffic.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Performance Analytics",
      ],
    },
    {
      icon: Code2,
      title: "Python Development",
      description: "Custom Python solutions for automation, AI tools, and data analysis. From chatbots to data visualization tools.",
      features: [
        "AI Chatbots",
        "Automation Scripts",
        "Data Analysis",
        "Custom Tools",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6" aria-label="Services offered">
      <div className="container max-w-4xl mx-auto">
        <header className="mb-16">
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-3">
            Services
          </p>
          <h2 className="text-foreground">
            What I Offer
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Leveraging technology to solve real-world problems
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article key={index}>
              <Card className="p-6 bg-card/60 border-border/40 hover:border-border/60 transition-all h-full">
                <div className="space-y-5">
                  <div className="p-2.5 rounded-lg bg-muted/50 w-fit">
                    <service.icon className="w-5 h-5 text-muted-foreground" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

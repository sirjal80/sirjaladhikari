import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Code2, ArrowRight } from "lucide-react";

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
    <section id="services" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging technology to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 glass hover:card-glow transition-all group"
            >
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full gap-2 group-hover:bg-primary/10"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

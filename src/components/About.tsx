import { Target, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every venture we build is focused on solving real problems and creating meaningful impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and unconventional approaches to enhance traditional businesses.",
  },
  {
    icon: Users,
    title: "People-Centric",
    description: "Our success is built on empowering talented individuals and fostering collaborative cultures.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block animate-fade-up opacity-0">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-up opacity-0 animation-delay-100">
              Building the Future, <span className="text-gradient">One Venture at a Time</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed animate-fade-up opacity-0 animation-delay-200">
              MaizeTech is a technology holding company dedicated to nurturing and scaling 
              innovative businesses across diverse sectors. Founded with the vision of 
              transforming ideas into industry-leading enterprises, we provide our ventures 
              with the capital, expertise, and infrastructure they need to thrive.
            </p>
            <p className="text-muted-foreground leading-relaxed animate-fade-up opacity-0 animation-delay-300">
              Our name reflects our core philosophy: like maize, which has been cultivated 
              and refined over millennia to become a cornerstone of civilization, we believe 
              in the power of patient, purposeful growth to create lasting value.
            </p>
          </div>

          {/* Right - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="flex gap-5 p-6 rounded-xl bg-secondary/30 border border-border/50 animate-fade-up opacity-0"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

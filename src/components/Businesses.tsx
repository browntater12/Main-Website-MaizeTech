import BusinessCard from "./BusinessCard";
import { 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Coins, 
  Leaf 
} from "lucide-react";

const businesses = [
  {
    name: "MaizeAI",
    description: "Next-generation artificial intelligence solutions for enterprise automation and decision-making systems.",
    icon: Cpu,
    category: "Artificial Intelligence",
    color: "#FF6B35",
  },
  {
    name: "MaizeCloud",
    description: "Scalable cloud infrastructure and managed services for businesses of all sizes.",
    icon: Cloud,
    category: "Cloud Computing",
    color: "#4ECDC4",
  },
  {
    name: "MaizeSecure",
    description: "Comprehensive cybersecurity solutions protecting organizations from evolving digital threats.",
    icon: ShieldCheck,
    category: "Cybersecurity",
    color: "#A855F7",
  },
  {
    name: "MaizeFinance",
    description: "Innovative fintech platforms enabling seamless digital payments and financial services.",
    icon: Coins,
    category: "Financial Technology",
    color: "#FBBF24",
  },
  {
    name: "MaizeGreen",
    description: "Sustainable technology solutions driving environmental innovation and clean energy adoption.",
    icon: Leaf,
    category: "CleanTech",
    color: "#22C55E",
  },
];

const Businesses = () => {
  return (
    <section id="businesses" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block animate-fade-up opacity-0">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-up opacity-0 animation-delay-100">
            Businesses Under <span className="text-gradient">MaizeTech</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0 animation-delay-200">
            Each venture operates independently while benefiting from shared resources, 
            expertise, and the collective vision of the MaizeTech ecosystem.
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <BusinessCard
              key={business.name}
              {...business}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Businesses;

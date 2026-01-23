import BusinessCard from "./BusinessCard";
import { 
  MonitorCog,
  Coins, 
  Leaf, 
  Binary,
  HousePlus,
  Brain
} from "lucide-react";

const businesses = [
  {
    name: "Sales Territory Manager",
    description: "A customer relationship management software built for travelling salesmen by salesmen.",
    icon: MonitorCog,
    category: "Sales",
    color: "#FF6B35",
    link: "https://studio-1-backend--studio-3294958671-4c5c0.us-central1.hosted.app/main"
  },
  {
    name: "RealGen",
    description: "A unique lead generation and pipeline management software for real estate agents.",
    icon: HousePlus,
    category: "Real Estate",
    color: "#4ECDC4",
    link: "#"
  },
  {
    name: "Torque Calculator",
    description: "A torque calculator to help you determine the correct torque for fastening.",
    icon: Binary,
    category: "Computing",
    color: "#A855F7",
    link: "#"
  },
  {
    name: "BETA: North Port Auction",
    description: "Developing a local marketplace for secondary market items. Testing in North Port Florida.",
    icon: Coins,
    category: "Local",
    color: "#FBBF24",
    link: "#"
  },
  {
    name: "BETA: Industrial Chem",
    description: "Developing a marketplace for industrial chemicals. Straight forward pricing and reliable delivery.",
    icon: Leaf,
    category: "Marketplace",
    color: "#22C55E", 
    link: "#"  
  },
  {
    name: "AI Consulting",
    description: "Developing and implementing AI solutions for traditional small businesses.",
    icon: Brain,
    category: "Software Development",
    color: "#3B82F6", 
    link: "#"  
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

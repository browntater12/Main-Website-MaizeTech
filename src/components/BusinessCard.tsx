import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface BusinessCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  color: string;
  link: string;
  delay?: number;
}

const BusinessCard = ({ name, description, icon: Icon, category, color, link, delay = 0 }: BusinessCardProps) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleClick}
      className="group relative bg-gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-smooth glow-effect shadow-card hover:shadow-card-hover cursor-pointer animate-fade-up opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-smooth group-hover:scale-110"
        style={{ background: `linear-gradient(135deg, ${color}20, ${color}10)` }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>

      {/* Category Badge */}
      <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground mb-4">
        {category}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-smooth">
        {name}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {/* Arrow */}
      <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth transform translate-x-2 group-hover:translate-x-0">
        <ArrowUpRight className="w-5 h-5 text-foreground" />
      </div>
    </div>
  );
};

export default BusinessCard;

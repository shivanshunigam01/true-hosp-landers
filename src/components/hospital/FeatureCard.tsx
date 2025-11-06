import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
      <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-semibold text-xl text-foreground mb-2">{title}</h3>
      {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
};

export default FeatureCard;

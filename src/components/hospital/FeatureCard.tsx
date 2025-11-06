import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow duration-300 animate-fade-in">
      <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  );
};

export default FeatureCard;

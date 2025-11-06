import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;

import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border border-border/50">
      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="font-bold text-xl text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;

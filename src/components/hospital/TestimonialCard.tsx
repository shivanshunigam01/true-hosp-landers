import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  procedure: string;
  feedback: string;
}

const TestimonialCard = ({ name, procedure, feedback }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow duration-300">
      <Quote className="w-10 h-10 text-primary mb-4" />
      <p className="text-foreground mb-4 italic">"{feedback}"</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{procedure}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

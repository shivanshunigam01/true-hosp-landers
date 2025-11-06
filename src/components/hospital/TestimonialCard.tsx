import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  procedure: string;
  feedback: string;
}

const TestimonialCard = ({ name, procedure, feedback }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 h-full flex flex-col">
      <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-5">
        <Quote className="w-6 h-6 text-primary" />
      </div>
      <p className="text-foreground mb-6 italic leading-relaxed flex-grow">"{feedback}"</p>
      <div className="border-t border-border pt-5">
        <p className="font-bold text-lg text-foreground">{name}</p>
        <p className="text-sm text-primary font-medium mt-1">{procedure}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience?: string;
}

const DoctorCard = ({ name, specialization, experience }: DoctorCardProps) => {
  const handleBooking = () => {
    console.log(`Booking appointment with ${name}`);
    window.location.href = "tel:+919205007277";
  };

  return (
    <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-primary-light to-accent rounded-full flex items-center justify-center mb-5 shadow-md">
          <User className="w-12 h-12 text-primary" />
        </div>
        <h3 className="font-bold text-xl text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2 font-medium">{specialization}</p>
        {experience && <p className="text-xs text-muted-foreground mb-5 bg-secondary px-3 py-1 rounded-full">{experience}</p>}
        <Button onClick={handleBooking} className="w-full">
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;

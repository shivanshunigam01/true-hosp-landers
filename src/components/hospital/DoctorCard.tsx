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
    <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in">
      <div className="flex items-start space-x-4">
        <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-10 h-10 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-1">{specialization}</p>
          {experience && <p className="text-xs text-muted-foreground mb-3">{experience}</p>}
          <Button onClick={handleBooking} size="sm" className="mt-2">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;

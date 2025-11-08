import React from "react";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: string;
  description: string;
  image?: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  experience,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col justify-between bg-card p-8 rounded-2xl shadow-md hover:shadow-lg text-center transition-all duration-300">
      {/* Top Section */}
      <div>
        {/* Doctor Image */}
        <div className="flex justify-center mb-5">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-28 h-28 rounded-full object-cover border-4 border-primary/20 shadow-md hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold">
              {name.charAt(3)}
            </div>
          )}
        </div>

        {/* Text Content */}
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{specialization}</p>

        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-1 rounded-full mb-4">
          {experience}
        </span>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Fixed Button at Bottom */}
      <Button className="mt-6 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 mx-auto block w-fit">
        Book Appointment
      </Button>
    </div>
  );
};

export default DoctorCard;

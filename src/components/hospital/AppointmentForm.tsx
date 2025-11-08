import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { createLead } from "@/lib/api";

interface AppointmentFormProps {
  options: string[];
  selectLabel: string;
  category: "General Surgeon" | "Gynecologist"; // ✅ Explicit category prop
}

const AppointmentForm = ({
  options,
  selectLabel,
  category,
}: AppointmentFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    selectedOption: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Create correct payload for your backend
    const payload = {
      name: formData.name,
      phone: formData.phone,
      category,
      surgeryType:
        category === "General Surgeon" ? formData.selectedOption : "",
      concern: category === "Gynecologist" ? formData.selectedOption : "",
      date: new Date().toISOString().split("T")[0], // e.g. 2025-11-08
      status: "New",
    };

    try {
      await createLead(payload);
      toast({
        title: "Appointment booked successfully!",
        description: "Our team will contact you shortly.",
      });
      // ✅ Reset form
      setFormData({ name: "", phone: "", selectedOption: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-card p-6 rounded-xl shadow-card"
    >
      {/* Full Name */}
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="mt-1"
        />
      </div>

      {/* Phone Number */}
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="mt-1"
        />
      </div>

      {/* Concern / Surgery Type */}
      <div>
        <Label htmlFor="concern">{selectLabel}</Label>
        <Select
          value={formData.selectedOption}
          onValueChange={(value) =>
            setFormData({ ...formData, selectedOption: value })
          }
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full" size="lg">
        Book Consultation
      </Button>
    </form>
  );
};

export default AppointmentForm;

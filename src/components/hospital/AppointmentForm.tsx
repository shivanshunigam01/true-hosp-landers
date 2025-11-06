import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface AppointmentFormProps {
  options: string[];
  selectLabel: string;
}

const AppointmentForm = ({ options, selectLabel }: AppointmentFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    concern: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Appointment Request Received!",
      description: "Our team will contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", phone: "", concern: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-xl shadow-card">
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

      <div>
        <Label htmlFor="concern">{selectLabel}</Label>
        <Select value={formData.concern} onValueChange={(value) => setFormData({ ...formData, concern: value })}>
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

      <Button type="submit" className="w-full" size="lg">
        Book Consultation
      </Button>
    </form>
  );
};

export default AppointmentForm;

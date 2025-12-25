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
import { createLead } from "@/lib/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle, AlertTriangle } from "lucide-react";

interface AppointmentFormProps {
  options: string[];
  selectLabel: string;
  category: "General Surgeon" | "Gynecologist" | "orthopedic";
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

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"success" | "error" | "invalid">(
    "success"
  );

  const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ❌ Invalid phone
    if (!isValidPhone(formData.phone)) {
      setDialogType("invalid");
      setDialogOpen(true);
      return;
    }

    const payload = {
      name: formData.name,
      phone: formData.phone,
      category,
      surgeryType:
        category === "General Surgeon" ? formData.selectedOption : "",
      concern: category === "Gynecologist" ? formData.selectedOption : "",
      date: new Date().toISOString().split("T")[0],
      status: "New",
    };

    try {
      await createLead(payload);

      // ✅ Success
      setDialogType("success");
      setDialogOpen(true);

      setFormData({ name: "", phone: "", selectedOption: "" });
    } catch (err) {
      console.error(err);
      setDialogType("error");
      setDialogOpen(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-card p-6 rounded-xl shadow-card"
      >
        {/* Name */}
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="mt-1"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="Enter 10-digit number"
            value={formData.phone}
            maxLength={10}
            inputMode="numeric"
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, phone: value });
            }}
            required
            className="mt-1"
          />
        </div>

        {/* Select */}
        <div>
          <Label>{selectLabel}</Label>
          <Select
            value={formData.selectedOption}
            onValueChange={(value) =>
              setFormData({ ...formData, selectedOption: value })
            }
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
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

      {/* 🔔 DIALOG BOX */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-sm text-center">
          <DialogHeader>
            {dialogType === "success" && (
              <>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-14 w-14 text-green-600" />
                </div>
                <DialogTitle>Lead Submitted Successfully!</DialogTitle>
                <DialogDescription>
                  Our team will contact you shortly.
                </DialogDescription>
              </>
            )}

            {dialogType === "invalid" && (
              <>
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="h-14 w-14 text-yellow-500" />
                </div>
                <DialogTitle>Invalid Phone Number</DialogTitle>
                <DialogDescription>
                  Please enter a valid 10-digit mobile number.
                </DialogDescription>
              </>
            )}

            {dialogType === "error" && (
              <>
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="h-14 w-14 text-red-500" />
                </div>
                <DialogTitle>Something went wrong</DialogTitle>
                <DialogDescription>Please try again later.</DialogDescription>
              </>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppointmentForm;

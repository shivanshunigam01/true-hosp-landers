import Navbar from "@/components/hospital/Navbar";
import Footer from "@/components/hospital/Footer";
import AppointmentForm from "@/components/hospital/AppointmentForm";
import FeatureCard from "@/components/hospital/FeatureCard";
import ServiceCard from "@/components/hospital/ServiceCard";
import DoctorCard from "@/components/hospital/DoctorCard";
import TestimonialCard from "@/components/hospital/TestimonialCard";
import WhatsAppButton from "@/components/hospital/WhatsAppButton";
import { Award, Clock, Heart, Shield, Stethoscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import surgeonHero from "@/assets/surgeon-hero.jpg";

const GeneralSurgeon = () => {
  const surgeryOptions = [
    "Hernia Repair",
    "Gallbladder Stone Removal",
    "Appendix Surgery",
    "Fistula / Fissure / Piles",
    "Thyroid Surgery",
    "Breast Lump Removal",
    "Hydrocele Surgery",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={surgeonHero} alt="Expert Surgeons" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Expert General Surgery Care, Every Step of the Way
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Consult top surgeons at T.R.U.E. Hospitals, Sector 52, Gurugram for safe, affordable, and advanced
                surgical care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+919205007277">Call +91-9205007277</a>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <AppointmentForm options={surgeryOptions} selectLabel="Select Surgery Type" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose T.R.U.E. Hospitals?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience world-class surgical care with our expert team and state-of-the-art facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Users} title="Top General Surgeons" />
            <FeatureCard icon={Stethoscope} title="Advanced Laparoscopic Setup" />
            <FeatureCard icon={Clock} title="24×7 ICU & Post-Op Care" />
            <FeatureCard icon={Heart} title="Quick Recovery, Minimal Scars" />
            <FeatureCard icon={Shield} title="Affordable Packages" />
            <FeatureCard icon={Award} title="NABH Certified Hospital" />
          </div>
        </div>
      </section>

      {/* Common Surgeries Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Common Surgeries We Perform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert care across a wide range of surgical procedures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Stethoscope}
              title="Hernia Repair"
              description="Laparoscopic and open hernia repair with minimal recovery time"
            />
            <ServiceCard
              icon={Heart}
              title="Gallbladder Stone Removal"
              description="Advanced laparoscopic cholecystectomy for gallstones"
            />
            <ServiceCard
              icon={Shield}
              title="Appendix Surgery"
              description="Emergency appendectomy with expert post-operative care"
            />
            <ServiceCard
              icon={Users}
              title="Fistula / Fissure / Piles"
              description="Specialized treatments for anorectal conditions"
            />
            <ServiceCard
              icon={Award}
              title="Thyroid / Breast Lump Removal"
              description="Expert endocrine and breast surgery procedures"
            />
            <ServiceCard
              icon={Clock}
              title="Hydrocele Surgery"
              description="Effective treatment for hydrocele with quick recovery"
            />
          </div>
        </div>
      </section>

      {/* Surgeons Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Expert Surgeons</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highly qualified and experienced general surgeons committed to your well-being
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <DoctorCard
              name="Dr. Rajesh Kumar"
              specialization="General & Laparoscopic Surgery"
              experience="15+ years experience"
            />
            <DoctorCard
              name="Dr. Priya Sharma"
              specialization="General Surgery & Endoscopy"
              experience="12+ years experience"
            />
            <DoctorCard
              name="Dr. Amit Verma"
              specialization="Advanced Laparoscopic Surgery"
              experience="18+ years experience"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Patient Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied patients about their recovery journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              name="Ramesh Gupta"
              procedure="Hernia Surgery"
              feedback="Excellent care and quick recovery. The laparoscopic surgery was painless and I was back to work in just 10 days!"
            />
            <TestimonialCard
              name="Sunita Devi"
              procedure="Gallbladder Removal"
              feedback="The entire team was very supportive. Dr. Sharma explained everything clearly and the surgery went smoothly."
            />
            <TestimonialCard
              name="Vikram Singh"
              procedure="Appendix Surgery"
              feedback="Emergency surgery handled professionally. The 24×7 care made all the difference. Highly recommend T.R.U.E. Hospitals!"
            />
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Us Today</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in Sector 52, Gurugram with easy access and parking
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground mb-2">Address</p>
                  <p className="text-muted-foreground">T.R.U.E. Hospitals, Sector 52, Gurugram, Haryana 122003</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Phone</p>
                  <a href="tel:+919205007277" className="text-primary hover:underline">
                    +91-9205007277
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Email</p>
                  <a href="mailto:info@truehospitals.com" className="text-primary hover:underline">
                    info@truehospitals.com
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild>
                  <a href="tel:+919205007277">Call Now</a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=T.R.U.E.+Hospitals+Sector+52+Gurugram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-xl overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.2!2d77.0855!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDUnMDcuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="T.R.U.E. Hospitals Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralSurgeon;

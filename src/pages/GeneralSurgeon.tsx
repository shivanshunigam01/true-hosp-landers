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
import doctorsHero from "@/assets/doctors-hero.jpg";

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
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-accent overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary">
                  Expert Care, Every Step of the Way
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                  Explore our array of services designed to meet your unique health needs
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-hover border-4 border-white">
                <img src={doctorsHero} alt="Expert Doctors" className="w-full h-auto" />
              </div>
            </div>
            <div className="animate-slide-up">
              <AppointmentForm options={surgeryOptions} selectLabel="Select Surgery Type" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose T.R.U.E. Hospitals?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Experience world-class surgical care with our expert team and state-of-the-art facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Common Surgeries We Perform</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Expert care across a wide range of surgical procedures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Meet Our Expert Surgeons</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Highly qualified and experienced general surgeons committed to your well-being
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-secondary to-accent">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Patient Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Hear from our satisfied patients about their recovery journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Visit Us Today</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Conveniently located in Sector 52, Gurugram with easy access and parking
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="bg-card p-10 rounded-2xl shadow-card border border-border/50">
              <h3 className="text-3xl font-bold text-foreground mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-lg text-foreground mb-2">Address</p>
                  <p className="text-muted-foreground leading-relaxed">T.R.U.E. Hospitals, Sector 52, Gurugram, Haryana 122003</p>
                </div>
                <div>
                  <p className="font-semibold text-lg text-foreground mb-2">Phone</p>
                  <a href="tel:+919205007277" className="text-primary hover:underline text-lg font-medium">
                    +91-9205007277
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-lg text-foreground mb-2">Email</p>
                  <a href="mailto:info@truehospitals.com" className="text-primary hover:underline text-lg font-medium">
                    info@truehospitals.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button asChild className="flex-1">
                  <a href="tel:+919205007277">Call Now</a>
                </Button>
                <Button variant="outline" asChild className="flex-1">
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
            <div className="bg-muted rounded-2xl overflow-hidden h-[500px] shadow-card border border-border/50">
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

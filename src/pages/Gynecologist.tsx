import Navbar from "@/components/hospital/Navbar";
import Footer from "@/components/hospital/Footer";
import AppointmentForm from "@/components/hospital/AppointmentForm";
import FeatureCard from "@/components/hospital/FeatureCard";
import ServiceCard from "@/components/hospital/ServiceCard";
import DoctorCard from "@/components/hospital/DoctorCard";
import TestimonialCard from "@/components/hospital/TestimonialCard";
import WhatsAppButton from "@/components/hospital/WhatsAppButton";
import { Award, Baby, Clock, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import gynecologistDoctors from "@/assets/gynecologist-doctors.jpg";

const Gynecologist = () => {
  const concernOptions = [
    "Pregnancy Care",
    "Normal Delivery",
    "Cesarean Delivery",
    "PCOD / PCOS Treatment",
    "Menstrual Disorders",
    "Fibroid Treatment",
    "Fertility Consultation",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary">
                Expert Care, Every Step of the Way
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary/80">
                Explore our array of services designed to meet your unique health needs
              </p>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={gynecologistDoctors} alt="Expert Gynecologists" className="w-full h-auto" />
              </div>
            </div>
            <div className="animate-slide-up">
              <AppointmentForm options={concernOptions} selectLabel="Select Your Concern" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us for Women's Care?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated to providing comprehensive and compassionate care for women at every stage of life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Users} title="Experienced Gynecologists" />
            <FeatureCard icon={Baby} title="Modern Labor & Delivery Suites" />
            <FeatureCard icon={Heart} title="Comprehensive Maternity Programs" />
            <FeatureCard icon={Shield} title="Ultrasound & Fertility Support" />
            <FeatureCard icon={Clock} title="24×7 Emergency Care" />
            <FeatureCard icon={Award} title="Personalized Women's Care" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Gynecology Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete range of women's health and maternity services under one roof
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Baby}
              title="Pregnancy Care"
              description="Complete antenatal and postnatal care with regular monitoring"
            />
            <ServiceCard
              icon={Heart}
              title="Normal / Cesarean Delivery"
              description="Safe delivery options with expert obstetric care"
            />
            <ServiceCard
              icon={Shield}
              title="PCOD / PCOS Treatment"
              description="Advanced treatment for hormonal and metabolic disorders"
            />
            <ServiceCard
              icon={Users}
              title="Menstrual Disorder Management"
              description="Expert care for irregular periods and related conditions"
            />
            <ServiceCard
              icon={Award}
              title="Fibroid / Ovarian Cyst Surgery"
              description="Minimally invasive surgical options available"
            />
            <ServiceCard
              icon={Clock}
              title="Fertility Consultation"
              description="Comprehensive fertility evaluation and treatment plans"
            />
          </div>
        </div>
      </section>

      {/* Gynecologists Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Gynecologists</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert women's health specialists dedicated to your care and comfort
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <DoctorCard
              name="Dr. Meera Kapoor"
              specialization="Obstetrics & Gynecology"
              experience="20+ years experience"
            />
            <DoctorCard
              name="Dr. Anjali Gupta"
              specialization="High-Risk Pregnancy & Fertility"
              experience="15+ years experience"
            />
            <DoctorCard
              name="Dr. Kavita Reddy"
              specialization="Gynecological Surgery & PCOS"
              experience="14+ years experience"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Patient Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from mothers and women we've had the privilege to care for
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              name="Pooja Sharma"
              procedure="Normal Delivery"
              feedback="Dr. Meera and the team made my delivery experience so comfortable. The care I received was exceptional!"
            />
            <TestimonialCard
              name="Neha Patel"
              procedure="PCOD Treatment"
              feedback="After years of struggling with PCOD, Dr. Anjali's treatment plan finally worked. I'm grateful for her expertise."
            />
            <TestimonialCard
              name="Ritu Malhotra"
              procedure="High-Risk Pregnancy"
              feedback="The 24×7 support during my high-risk pregnancy gave me so much confidence. My baby and I are healthy thanks to T.R.U.E. Hospitals!"
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

export default Gynecologist;

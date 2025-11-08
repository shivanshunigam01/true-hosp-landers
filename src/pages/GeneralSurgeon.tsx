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
import avaneeshImg from "../assets/avaneeshImg.png";
import dharmendraImg from "../assets/dharmendra.png";
import gaurangaImg from "../assets/gauranga.png";
import doctorsHero from "../assets/doctors-hero.jpg";

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
      <section className="relative bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary">
                Expert Care, Every Step of the Way
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary/80">
                Explore our array of services designed to meet your unique
                health needs
              </p>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={doctorsHero}
                  alt="Expert Doctors"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="animate-slide-up">
              <AppointmentForm
                options={surgeryOptions}
                selectLabel="Select Surgery Type"
                category="General Surgeon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose T.R.U.E. Hospitals?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience world-class surgical care with our expert team and
              state-of-the-art facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={Users} title="Top General Surgeons" />
            <FeatureCard
              icon={Stethoscope}
              title="Advanced Laparoscopic Setup"
            />
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Surgeries We Perform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Surgeons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highly qualified and experienced general surgeons committed to
              your well-being
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <DoctorCard
              name="Dr. Avaneesh Hasiza"
              specialization="General & Laparoscopic Surgeon"
              experience="23 years experience (15 years as specialist)"
              description="MBBS - Expert in gall bladder stone, hernia, appendix, and advanced Stapler Piles Surgery (MIPH). Specialist in abdominal trauma and complex surgical cases."
              image={avaneeshImg}
            />
            <DoctorCard
              name="Dr. Dharmendra Pal Singh"
              specialization="General Surgeon"
              experience="20 years experience (19 years as specialist)"
              description="MS - General Surgery, MBBS - Extensive experience in general surgical procedures with proven track record."
              image={dharmendraImg}
            />
            <DoctorCard
              name="Dr. Gauranga Saikia"
              specialization="Laparoscopic & Bariatric Surgeon"
              experience="19 years experience (12 years as specialist)"
              description="MBBS, DNB - Specialist in Minimal Access Surgery, Scarless Laparoscopic Surgery, Advanced hernia repair, Laser Proctology, and Bariatric Surgery."
              image={gaurangaImg}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-30 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Us Today
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in Sector 52, Gurugram with easy access and
              parking
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground mb-2">Address</p>
                  <p className="text-muted-foreground">
                    372, near Artemis Hospital Road, Wazirabad, Sector 52,
                    Gurugram, Bindapur, Haryana 122003
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Phone</p>
                  <a
                    href="tel:9211731007"
                    className="text-primary hover:underline"
                  >
                    +91-9211731007
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Email</p>
                  <a
                    href="mailto:info@truehospitals.com"
                    className="text-primary hover:underline"
                  >
                    info@truehospitals.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button asChild className="flex-1">
                  <a href="tel:9211731007">Call Now</a>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=C3PC%2B4P+Gurugram+Haryana"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14023.589924470383!2d77.0618125!3d28.4353125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x910797b74522043e!2sC3PC%2B4P%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1731096000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="C3PC+4P Gurugram, Haryana Location"
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

import Navbar from "@/components/hospital/Navbar";
import Footer from "@/components/hospital/Footer";
import AppointmentForm from "@/components/hospital/AppointmentForm";
import FeatureCard from "@/components/hospital/FeatureCard";
import ServiceCard from "@/components/hospital/ServiceCard";
import DoctorCard from "@/components/hospital/DoctorCard";
import TestimonialCard from "@/components/hospital/TestimonialCard";
import WhatsAppButton from "@/components/hospital/WhatsAppButton";
import {
  Bone,
  HeartPulse,
  Clock,
  Shield,
  Users,
  Award,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import orthoHero from "../assets/orthoHero.png";
import drNavneet from "../assets/Navneet.jpg";
import drHimanshu from "../assets/Himanshu.jpg";
import drGuruditta from "../assets/guru.png";

const Orthopedic = () => {
  const surgeryOptions = [
    "Knee Replacement",
    "Hip Replacement",
    "Fracture Treatment",
    "Arthroscopy (Joint Surgery)",
    "Spine Surgery",
    "Shoulder Surgery",
    "Sports Injury Treatment",
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
                Restoring Mobility, Relieving Pain
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary/80">
                Comprehensive orthopedic care for your bones, joints, and spine.
              </p>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={orthoHero}
                  alt="Orthopedic Surgery Experts"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="animate-slide-up">
              <AppointmentForm
                options={surgeryOptions}
                selectLabel="Select Orthopedic Surgery Type"
                category="orthopedic"
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
              Why Choose T.R.U.E. Hospitals for Orthopedic Care?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced orthopedic treatments with experienced surgeons and
              world-class technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Highly Experienced Orthopedic Surgeons"
            />
            <FeatureCard
              icon={Bone}
              title="State-of-the-Art Operation Theatres"
            />
            <FeatureCard icon={Clock} title="24×7 Trauma & Emergency Support" />
            <FeatureCard
              icon={HeartPulse}
              title="Faster Recovery & Rehabilitation"
            />
            <FeatureCard icon={Shield} title="Affordable Treatment Packages" />
            <FeatureCard
              icon={Award}
              title="Trusted by Thousands of Patients"
            />
          </div>
        </div>
      </section>

      {/* Common Surgeries Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Orthopedic Surgeries
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert care for bones, joints, ligaments, and muscles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Bone}
              title="Knee Replacement"
              description="Total and partial knee replacement using advanced prosthetics for pain-free movement."
            />
            <ServiceCard
              icon={Stethoscope}
              title="Hip Replacement"
              description="Minimally invasive hip replacement for enhanced comfort and mobility."
            />
            <ServiceCard
              icon={HeartPulse}
              title="Fracture Treatment"
              description="Precise bone alignment and fixation with quick rehabilitation support."
            />
            <ServiceCard
              icon={Award}
              title="Arthroscopy"
              description="Minimally invasive keyhole surgery for shoulder, knee, and ligament repair."
            />
            <ServiceCard
              icon={Shield}
              title="Spine Surgery"
              description="Comprehensive care for spinal disorders and slip-disc conditions."
            />
            <ServiceCard
              icon={Clock}
              title="Sports Injury Treatment"
              description="Dedicated sports medicine unit for recovery and strength restoration."
            />
          </div>
        </div>
      </section>

      {/* Surgeons Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Orthopedic Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highly qualified and experienced orthopedic surgeons dedicated to
              restoring your mobility and improving quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <DoctorCard
              name="Dr. Navneet Goel"
              specialization="Senior Orthopedic Surgeon"
              experience="28 years experience in Orthopedics"
              description="MBBS, Diploma in Orthopedics — A veteran in trauma and reconstructive surgery, Dr. Goel combines evidence-based practices with minimally invasive techniques for optimal outcomes. Known for personalized rehabilitation and strong patient trust in complex cases."
              image={drNavneet}
            />

            <DoctorCard
              name="Dr. Guruditta Khurana"
              specialization="Orthopaedics (Joint Replacement and Robotics)"
              experience="10+ years of experience in Orthopaedics"
              description="MBBS, D. Ortho, FJRR — Fellowship in Joint Replacement & Robotics (Marengo Asia Hospitals, Gurgaon). Experienced in fracture, joint disorders, arthritis, hip/knee replacement and sports injuries. Member of IOA, IAS, ISKSAA, DOA and AAOS. Dr. Khurana emphasizes minimally invasive robotic surgery and patient-centred rehabilitation for faster recovery."
              image={drGuruditta}
            />

            <DoctorCard
              name="Dr. Himanshu Bansal"
              specialization="Orthopaedics (Joint Replacement & Arthroscopy)"
              experience="17+ years of experience including international fellowships"
              description="MBBS, MS (Orthopaedics), M.Ch (Orthopaedics) — Specialist in arthritis management, hip and knee replacement, ligament reconstruction, and complex trauma. Recipient of multiple fellowships including the prestigious German Arthroscopy Association Fellowship and Gold Medal in Masters of Orthopaedics."
              image={drHimanshu}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-30 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Testimonials
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stories of recovery and renewed movement from our patients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Pankaj Verma"
              procedure="Knee Replacement"
              feedback="After years of knee pain, the surgery was life-changing. I can now walk and climb stairs comfortably!"
            />
            <TestimonialCard
              name="Seema Sharma"
              procedure="Shoulder Arthroscopy"
              feedback="The team was supportive and caring. Recovery was smooth and the pain relief is remarkable!"
            />
            <TestimonialCard
              name="Anil Kumar"
              procedure="Spine Surgery"
              feedback="Dr. Navneet and his team gave me a new life. I’m back to my active routine without back pain."
            />
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Orthopedic Department
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in Sector 52, Gurugram with advanced diagnostics and
              physiotherapy support.
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
                    Gurugram, Haryana 122003
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

export default Orthopedic;

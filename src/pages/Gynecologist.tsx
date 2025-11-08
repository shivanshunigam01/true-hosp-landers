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

import gynecologistHero from "../assets/gynecologist-doctors.jpg";
import suman from "../assets/suman.jpg";
import surbhi from "../assets/surbhi.jpg";
import anam from "../assets/anam.png";

const Gynecologist = () => {
  const concernOptions = [
    "Pregnancy Care",
    "Normal Delivery",
    "Cesarean Delivery",
    "PCOD / PCOS Treatment",
    "Menstrual Disorders",
    "Fibroid / Ovarian Cyst Surgery",
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
                Compassionate Women's Health & Maternity Care
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary/80">
                From regular check-ups to high-risk pregnancy management, our
                expert gynecologists provide trusted, personalized care.
              </p>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={gynecologistHero}
                  alt="Expert Gynecologists"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="animate-slide-up">
              <AppointmentForm
                options={concernOptions}
                selectLabel="Select Your Concern"
                category="Gynecologist"
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
              Why Choose T.R.U.E. Hospitals for Women’s Care?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maternity and gynecology services delivered with
              compassion and expertise at every stage of a woman's life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={Users} title="Experienced Gynecologists" />
            <FeatureCard icon={Baby} title="Modern Labor & Delivery Suites" />
            <FeatureCard
              icon={Heart}
              title="Comprehensive Maternity Programs"
            />
            <FeatureCard icon={Shield} title="Ultrasound & Fertility Support" />
            <FeatureCard icon={Clock} title="24×7 Emergency Care" />
            <FeatureCard icon={Award} title="Personalized Women’s Care" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Gynecology & Maternity Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced women’s healthcare services designed for safety, comfort,
              and long-term wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Baby}
              title="Pregnancy & Antenatal Care"
              description="Comprehensive prenatal and postnatal support from our expert team."
            />
            <ServiceCard
              icon={Heart}
              title="Normal / Cesarean Delivery"
              description="Safe delivery options with advanced fetal monitoring systems."
            />
            <ServiceCard
              icon={Shield}
              title="PCOD / PCOS Management"
              description="Personalized plans for hormonal balance and reproductive health."
            />
            <ServiceCard
              icon={Users}
              title="Menstrual & Hormonal Disorders"
              description="Accurate diagnosis and treatment for irregular or painful cycles."
            />
            <ServiceCard
              icon={Award}
              title="Fibroid & Cyst Surgery"
              description="Minimally invasive laparoscopic and hysteroscopic procedures."
            />
            <ServiceCard
              icon={Clock}
              title="Fertility Consultation"
              description="Guided fertility assessment and advanced conception support."
            />
          </div>
        </div>
      </section>

      {/* Gynecologists Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leading Gynecologists
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted women’s health specialists dedicated to your care and
              comfort throughout every milestone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <DoctorCard
              name="Dr. Suman Bishnoi"
              specialization="Gynecologist, Obstetrician & Infertility Specialist"
              experience="44 years experience (31 years as specialist)"
              description="MBBS - Highly experienced women's health physician specializing in obstetrics, gynecology, and infertility treatments with comprehensive care for all female health concerns."
              image={suman}
            />
            <DoctorCard
              name="Dr. Surbhi Gupta"
              specialization="Reproductive Medicine & Infertility Specialist"
              experience="16 years experience (12 years as specialist)"
              description="MBBS, MS (Gold Medalist), FNB Reproductive Medicine - Expert in reproductive endocrinology, infertility, recurrent pregnancy loss, and advanced fertility treatments."
              image={surbhi}
            />
            <DoctorCard
              name="Dr. Anam Ghani"
              specialization="Obstetrician & Gynecologist"
              experience="11 years experience (5 years as specialist)"
              description="MBBS, MS Obstetrics & Gynaecology - Specialist in high-risk pregnancy, advanced ultrasound, PCOS treatment, and comprehensive women's healthcare with evidence-based compassionate care."
              image={anam}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Testimonials
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from mothers and women who trusted T.R.U.E. Hospitals
              for their journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Pooja Sharma"
              procedure="Normal Delivery"
              feedback="Dr. Meera and her team made my delivery experience seamless and stress-free. Forever grateful!"
            />
            <TestimonialCard
              name="Neha Patel"
              procedure="PCOD Treatment"
              feedback="After years of discomfort, Dr. Anjali’s holistic treatment helped me regain my health and confidence."
            />
            <TestimonialCard
              name="Ritu Malhotra"
              procedure="High-Risk Pregnancy"
              feedback="The care during my high-risk pregnancy was exceptional. My baby and I are both healthy and happy!"
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
              Conveniently located in Sector 52, Gurugram — with dedicated
              parking and 24×7 support.
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

export default Gynecologist;

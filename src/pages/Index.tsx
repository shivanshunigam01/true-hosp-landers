import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/hospital/Navbar";
import Footer from "@/components/hospital/Footer";
import WhatsAppButton from "@/components/hospital/WhatsAppButton";
import { ArrowRight, Heart, Stethoscope } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to T.R.U.E. Hospitals
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your trusted partner in health. Providing expert medical care with compassion and advanced technology.
            </p>
            <p className="text-lg mb-12 opacity-80">
              Sector 52, Gurugram | NABH Certified | 24×7 Emergency Care
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+919205007277">Call +91-9205007277</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Specialties</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert care across multiple medical specialties, all under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* General Surgery Card */}
            <div className="bg-gradient-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">General Surgery</h3>
                <p className="text-muted-foreground mb-6">
                  Expert general and laparoscopic surgery with advanced techniques for faster recovery and minimal scarring.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Hernia & Gallbladder Surgery</li>
                  <li>• Appendix & Fistula Treatment</li>
                  <li>• Thyroid & Breast Surgery</li>
                  <li>• 24×7 ICU & Post-Op Care</li>
                </ul>
                <Button asChild className="w-full group-hover:bg-primary-hover transition-colors">
                  <Link to="/general-surgeon">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Gynecology Card */}
            <div className="bg-gradient-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Women's Health & Maternity</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive gynecology and maternity care with personalized attention for every woman's health needs.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Pregnancy & Delivery Care</li>
                  <li>• PCOD / PCOS Treatment</li>
                  <li>• Fertility Consultation</li>
                  <li>• Modern Labor & Delivery Suites</li>
                </ul>
                <Button asChild className="w-full group-hover:bg-primary-hover transition-colors">
                  <Link to="/gynecologist">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Book Your Consultation?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our expert doctors are here to help. Call us or visit our hospital in Sector 52, Gurugram.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+919205007277">Call +91-9205007277</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">T.R.U.E. Hospitals</span>
                <span className="text-xs opacity-80 leading-tight">Your Health Partner</span>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Leading multispecialty hospital providing expert medical care with advanced technology and compassionate service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/general-surgeon" className="hover:opacity-100 transition-opacity">
                  General Surgeon
                </Link>
              </li>
              <li>
                <Link to="/gynecologist" className="hover:opacity-100 transition-opacity">
                  Gynecologist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>T.R.U.E. Hospitals, Sector 52, Gurugram, Haryana 122003</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919205007277" className="hover:opacity-100 transition-opacity">
                  +91-9205007277
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@truehospitals.com" className="hover:opacity-100 transition-opacity">
                  info@truehospitals.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} T.R.U.E. Hospitals. All rights reserved. | NABH Certified Healthcare</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

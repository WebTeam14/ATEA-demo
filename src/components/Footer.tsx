import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import AteaLogo from "@/assets/ATEA-logo.jpeg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-bg text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={AteaLogo} alt="Taloja Engineering Logo" className="h-12 w-12 object-contain flex-shrink-0" />
              <div>
                <h3 className="font-poppins font-bold text-lg">Taloja Engineering</h3>
                <p className="text-xs text-gray-medium">Cluster</p>
              </div>
            </div>
            <p className="text-gray-medium text-sm leading-relaxed mb-6">
              <span className="font-bold text-primary">Taloja Engineering Cluster</span> is a collaborative initiative empowering industries
              through shared resources, advanced manufacturing services, and skill development programs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface flex items-center justify-center hover:bg-primary transition-smooth">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface flex items-center justify-center hover:bg-primary transition-smooth">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface flex items-center justify-center hover:bg-primary transition-smooth">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface flex items-center justify-center hover:bg-primary transition-smooth">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Training Center", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-gray-medium text-sm hover:text-primary transition-smooth">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Advanced 5 Axis laser Cutting machine (3D)", "Machine Shop", "NBL Approved Material Testing Lab"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-medium text-sm hover:text-primary transition-smooth">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-medium text-sm">
                  Additional Taloja Engineering Association (Taloja Engineering Cluster)<br />
                  Plot no P-__, MIDC Taloja, Taluka Panvel,<br />
                  District Raigad 410208 Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-medium text-sm">+91  8080006900</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@talojaengineeringcluster.com" className="text-gray-medium text-sm hover:text-primary transition-smooth">info@talojaengineeringcluster.com</a>
                  <a href="mailto:atea@talojaengineeringcluster.com" className="text-gray-medium text-sm hover:text-primary transition-smooth">atea@talojaengineeringcluster.com</a>
                  <a href="mailto:director@talojaengineeringcluster.com" className="text-gray-medium text-sm hover:text-primary transition-smooth">director@talojaengineeringcluster.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-medium text-sm">
            © {new Date().getFullYear()} <span className="font-bold">Taloja Engineering Cluster</span>. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:shadow-orange transition-smooth"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

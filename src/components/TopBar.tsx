import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-dark-bg text-secondary-foreground py-3 px-4">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-xs md:text-sm">
        {/* Left Section */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <span className="text-white-muted-foreground hidden md:inline">Have any questions?</span>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-smooth">
            <Phone className="w-4 h-4" />
            <span className="truncate">+91 9876543210</span>
          </a>
          {/* <span className="text-muted-foreground hidden md:inline">/</span> */}
          {/* <a href="tel:+919123456789" className="hover:text-primary transition-smooth">
            <span className="truncate">+91 9123456789</span>
          </a> */}
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <a href="mailto:info@talojaengineeringcluster.com" className="flex items-center gap-2 hover:text-primary transition-smooth hidden md:flex">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">info@talojaengineeringcluster.com</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-smooth flex-shrink-0">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-smooth flex-shrink-0">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-smooth flex-shrink-0">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-smooth flex-shrink-0">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

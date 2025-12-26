import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const whoRef = useRef<HTMLLIElement | null>(null);
  const servicesRef = useRef<HTMLLIElement | null>(null);
  const [whoPersist, setWhoPersist] = useState(false);
  const [servicesPersist, setServicesPersist] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (whoRef.current && !whoRef.current.contains(target)) {
        setWhoWeAreOpen(false);
        setWhoPersist(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
        setServicesPersist(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full">

      {/* Main Navigation */}
      <div className="w-full bg-background shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="src/assets/ATEA-logo.jpeg" alt="Engineering Cluster Pune" className="h-16 md:h-24 lg:h-28 flex-shrink-0" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-4 xl:space-x-6 uppercase text-sm xl:text-base font-semibold text-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>

              <li ref={whoRef} className="relative">
                <button
                  className="hover:text-primary transition-colors flex items-center space-x-1"
                  onClick={() => setWhoWeAreOpen((prev) => { const next = !prev; setWhoPersist(!prev); return next; })}
                  onMouseEnter={() => setWhoWeAreOpen(true)}
                  onMouseLeave={() => { if (!whoPersist) setWhoWeAreOpen(false); }}
                >
                  <span>Who We Are</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {whoWeAreOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-48 bg-popover shadow-lg rounded-md py-2 z-50"
                    onMouseEnter={() => setWhoWeAreOpen(true)}
                    onMouseLeave={() => { if (!whoPersist) setWhoWeAreOpen(false); }}
                  >
                    <Link to="/about-us" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      About Us
                    </Link>
                    <Link to="/our-team" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      Our Team
                    </Link>
                    <Link to="/mission-vision" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      Mission & Vision
                    </Link>
                  </div>
                )}
              </li>

              <li ref={servicesRef} className="relative">
                <button
                  className="hover:text-primary transition-colors flex items-center space-x-1"
                  onClick={() => setServicesOpen((prev) => { const next = !prev; setServicesPersist(!prev); return next; })}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => { if (!servicesPersist) setServicesOpen(false); }}
                >
                  <span>Engineering Services</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-56 bg-popover shadow-lg rounded-md py-2 z-50"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => { if (!servicesPersist) setServicesOpen(false); }}
                  >
                    <Link to="/design-services" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      Advanced 5 Axis laser Cutting machine (3D)
                    </Link>
                    <Link to="/consulting" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      Machine Shop
                    </Link>
                    <Link to="/project-management" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      NABL Approved Material Testing Lab
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link to="/skill-development" className="hover:text-primary transition-colors whitespace-nowrap">
                  Skill Development Training Center
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary transition-colors">
                  Event
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="px-4 py-4">
              <ul className="space-y-3 uppercase text-sm font-semibold text-foreground">
                <li>
                  <Link to="/" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    className="w-full text-left py-2 hover:text-primary transition-colors flex items-center justify-between"
                    onClick={() => setWhoWeAreOpen(!whoWeAreOpen)}
                  >
                    <span>Who We Are</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${whoWeAreOpen ? "rotate-180" : ""}`} />
                  </button>
                  {whoWeAreOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link to="/about-us" className="block py-1 text-xs hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        About Us
                      </Link>
                      <Link to="/our-team" className="block py-1 text-xs hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Our Team
                      </Link>
                      <Link to="/mission-vision" className="block py-1 text-xs hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Mission & Vision
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <button
                    className="w-full text-left py-2 hover:text-primary transition-colors flex items-center justify-between"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>Engineering Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link to="/design-services" className="block py-1 text-xs hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Design Services
                      </Link>
                      <Link to="/consulting" className="block py-1 text-xs hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Consulting
                      </Link>
                      <Link to="/project-management" className="block py-1 text-xs hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Project Management
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <Link to="/skill-development" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Skill Development Training Center
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Event
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

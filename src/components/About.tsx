import { useEffect, useState, useRef } from "react";
import aboutFacility from "@/assets/Company.png";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const Counter = ({ end, suffix = "", label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count}{suffix}
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <img
              src={aboutFacility}
              alt="Taloja Engineering Cluster Facility"
              className="rounded-lg shadow-elevated w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <h2 className="section-title">
              We have been delivering high-end engineering services in the Taloja region since 2015
            </h2>
            
            <div className="border-t border-border pt-8 mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Counter end={1200} suffix="+" label="Happy Customers" />
                <Counter end={50} suffix="+" label="Industry Partners" />
                <Counter end={15} suffix="+" label="Services Offered" />
                <Counter end={10} suffix="+" label="Years Experience" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

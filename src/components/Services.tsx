import { Cog, FlaskConical, Cpu, GraduationCap, Wrench, Shield } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "CNC Machining",
    description: "High-precision CNC machining services including VMC, HMC, and Turn-mill operations for complex components."
  },
  {
    icon: Cpu,
    title: "3D Laser Cutting",
    description: "Advanced 5-axis 3D laser cutting for precision metal fabrication with tight tolerances and excellent finish."
  },
  {
    icon: FlaskConical,
    title: "Material Testing",
    description: "NABL-accredited material testing lab providing certified testing and analysis services for quality assurance."
  },
  {
    icon: GraduationCap,
    title: "Skill Development",
    description: "Industrial training programs for CNC operations, programming, and manufacturing skills development."
  },
  {
    icon: Wrench,
    title: "Tool Room Services",
    description: "Complete tool room facilities for manufacturing jigs, fixtures, dies, and precision tooling solutions."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO certified quality management with CMM inspection and comprehensive quality control services."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-bg text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
            Our Engineering Services
          </h2>
          <p className="text-gray-medium text-lg max-w-2xl mx-auto">
            Comprehensive engineering solutions to meet all your manufacturing needs 
            with state-of-the-art facilities and experienced professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg bg-dark-surface border border-border/10 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-smooth">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              
              <h3 className="font-poppins text-xl font-semibold mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-medium text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

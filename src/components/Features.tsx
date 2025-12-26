import { Award, Shield, Cog } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Award,
    title: "NABL Accredited Lab",
    description: "Accredited by NABL in accordance with ISO/IEC 17025:2017 standards, our Material Testing Laboratory delivers reliable and certified material analysis services.",
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop"
  },
  {
    number: "02",
    icon: Shield,
    title: "ISO/IEC 17025:2017",
    description: "Our testing laboratory is accredited by NABL ensuring highest standards of quality, competence, and reliability in all testing and calibration services.",
    bgImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop"
  },
  {
    number: "03",
    icon: Cog,
    title: "ISO 9001:2015",
    description: "We are an ISO Certified Company with our Quality Management System certified under ISO 9001:2015, ensuring excellence in operations and customer satisfaction.",
    bgImage: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&auto=format&fit=crop"
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative group overflow-hidden rounded-lg min-h-[400px] card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-dark-bg/85 group-hover:bg-dark-bg/90 transition-smooth" />
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-end text-secondary-foreground">
                <span className="font-poppins text-5xl font-bold text-primary opacity-50 mb-4">
                  {feature.number}
                </span>
                
                <div className="flex items-center gap-3 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <h3 className="font-poppins text-xl font-semibold">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-medium text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

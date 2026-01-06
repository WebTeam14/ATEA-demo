import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Manufacturing Director",
    company: "Auto Components Ltd.",
    content: "Taloja Engineering Cluster has been instrumental in our production efficiency. Their CNC machining services are top-notch with excellent precision and timely delivery.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Quality Manager",
    company: "Precision Tools Inc.",
    content: "The NABL-accredited testing lab has helped us maintain quality standards. Their testing services are reliable and the reports are comprehensive and timely.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Operations Head",
    company: "Metal Fabricators Pvt. Ltd.",
    content: "Outstanding skill development programs! Several of our operators received training here and the improvement in their skills has been remarkable.",
    rating: 5
  },
  {
    name: "Sunita Desai",
    role: "Production Manager",
    company: "Heavy Industries Corp.",
    content: "Their laser cutting services are exceptional. The 5-axis capability allows us to get complex cuts done accurately. Highly recommended for precision work.",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Hear from our valued customers about their experience working with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-6 rounded-lg shadow-card card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                {testimonial.content.split("Taloja Engineering Cluster").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="font-bold text-primary">Taloja Engineering Cluster</span>}
                  </span>
                ))}
              </p>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-poppins font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-xs text-primary">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

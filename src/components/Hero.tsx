import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-poppins font-medium uppercase tracking-wider">
              Welcome to
            </span>
            <div className="w-16 h-[2px] bg-primary" />
          </div>
          
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
            Additional Taloja Engineering Association
          </h1>
          
          <p className="text-lg md:text-xl text-gray-medium mb-8 max-w-xl">
            Taloja Engineering Cluster - Empowering industries through innovation, 
            precision engineering, and collaborative growth since establishment.
          </p>
          
          <a 
            href="#about" 
            className="btn-primary rounded-md hover:shadow-orange"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

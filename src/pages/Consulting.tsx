import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

export default function Consulting() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Banner Section */}
      <div 
        className="text-large new-banner-size w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop')",
          minHeight: "400px"
        }}
      >
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4 relative z-10">
            About Us
          </h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-6">Consulting</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Expert consulting services to guide your engineering projects to success.
        </p>
        <div className="space-y-6">
          {["Technical Consulting", "Process Optimization", "Quality Assurance", "Compliance Advisory"].map((service) => (
            <div key={service} className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-2">{service}</h3>
              <p className="text-muted-foreground">Comprehensive {service.toLowerCase()} to enhance your operations.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

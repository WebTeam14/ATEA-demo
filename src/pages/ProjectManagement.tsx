import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

export default function ProjectManagement() {
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
        <h1 className="text-4xl font-bold text-foreground mb-6">Project Management</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          End-to-end project management solutions for engineering excellence.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {["Planning", "Execution", "Monitoring", "Delivery", "Support", "Maintenance"].map((phase) => (
            <div key={phase} className="bg-card rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">{phase[0]}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{phase}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

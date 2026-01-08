import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SkillDevelopment() {
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
            Skill Development
          </h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-6">Skill Development Training Center</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Empowering professionals with cutting-edge skills and knowledge for the modern engineering industry.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {["Technical Training", "Soft Skills", "Certification Programs", "Workshops"].map((program) => (
            <div key={program} className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-2">{program}</h3>
              <p className="text-muted-foreground">Comprehensive {program.toLowerCase()} designed for engineering professionals.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

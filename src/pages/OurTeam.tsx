import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function OurTeam() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-6">Our Team</h1>
        <div className="prose max-w-none">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Meet the dedicated professionals who drive Engineering Cluster Pune's mission forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg p-6 text-center shadow-md">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground">Team Member {i}</h3>
                <p className="text-muted-foreground">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </main>
            <Footer />

    </div>
  );
}

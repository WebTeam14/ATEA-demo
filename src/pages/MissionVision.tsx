import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function MissionVision() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      {/* Banner Section */}
      <div 
        className="text-large new-banner-size w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('src/assets/vision.jpeg')",
          minHeight: "400px"
        }}
      >
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4 relative z-10">
            About Us
          </h1> */}
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-6">Mission & Vision</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To enable cohesive partnerships that drive engineering excellence and innovation, 
              fostering growth and development within the engineering community of Pune.
            </p>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading engineering cluster in India, recognized for excellence, 
              innovation, and sustainable development in engineering services.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

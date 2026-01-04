import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import visionImg from "../assets/vision.jpeg";

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Banner Section */}
      <div
        className="text-large new-banner-size w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${visionImg})`,
          minHeight: "400px",
        }}
      >
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center" />
      </div>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-10 text-center">
          Vision & Mission
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-card rounded-xl p-8 shadow-md border border-border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To deliver <span className="font-semibold text-foreground">
                24/7 high-end machinery
              </span> and{" "}
              <span className="font-semibold text-foreground">
                NABL-accredited metal testing services
              </span>{" "}
              using advanced technology and skilled experts, while offering
              industry-ready training for the automotive and engineering sectors.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-card rounded-xl p-8 shadow-md border border-border hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We are dedicated to providing fast, efficient, and high-quality
              services to ensure complete customer satisfaction. We strive for
              continuous improvement and aim to be a trusted partner in our
              industry.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

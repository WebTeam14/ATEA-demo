import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

export default function Event() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Banner Section */}
      <div 
        className="text-large new-banner-size w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('src/assets/event.jpg')",
          minHeight: "400px"
        }}
      >
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4 relative z-10">
            Events
          </h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-96">
          {/* Icon */}
          <div className="w-32 h-32 md:w-40 md:h-40 mb-8 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-8 border-primary flex items-center justify-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <Calendar className="w-24 h-24 md:w-32 md:h-32 text-primary/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-primary rounded-full flex items-center justify-center transform -rotate-45">
                      <div className="w-16 h-2 md:w-24 md:h-3 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Date and Text */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              No Upcoming Event
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              We're working on exciting events and workshops. Please check back soon for upcoming announcements.
            </p>
          </div>

          {/* Call to action */}
          <button className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            Notify Me
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

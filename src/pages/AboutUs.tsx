import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Banner Section */}
      <div 
        className="text-large new-banner-size w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('src/assets/abt_us.jpg')",
          minHeight: "400px"
        }}
      >
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4 relative z-10">
            About Us
          </h1> */}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16">

        {/* About Us Section with Image and Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Icon */}
          <img
            src="src/assets/Company.png"
            alt="About us illustration"
            className="order-2 md:order-1 mx-auto md:mx-0 w-80 h-80 md:w-[520px] md:h-[360px] object-cover rounded-2xl"
          />

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center order-1 md:order-2 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-primary block">ABOUT US</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We are dedicated to delivering innovative engineering solutions that drive business growth 
              and technological advancement. Our team of experienced professionals works collaboratively 
              with clients to understand their unique challenges and provide tailored solutions.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              With a commitment to excellence and continuous improvement, we have established ourselves 
              as a trusted partner in the engineering and consulting industry.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-foreground">
                <span className="text-primary font-bold mr-3">✓</span>
                Innovative Engineering Solutions
              </li>
              <li className="flex items-center text-foreground">
                <span className="text-primary font-bold mr-3">✓</span>
                Expert Team of Professionals
              </li>
              <li className="flex items-center text-foreground">
                <span className="text-primary font-bold mr-3">✓</span>
                Customer-Centric Approach
              </li>
              <li className="flex items-center text-foreground">
                <span className="text-primary font-bold mr-3">✓</span>
                Quality & Reliability
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

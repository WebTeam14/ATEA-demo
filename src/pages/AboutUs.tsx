import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import abtUsImg from "../assets/abt_us.jpg";
import companyImg from "../assets/Company.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Banner Section */}
      <div
        className="text-large new-banner-size w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${abtUsImg})`,
          minHeight: "400px",

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
            src={companyImg}
            alt="About us illustration"
            className="order-2 md:order-1 mx-auto md:mx-0 w-80 h-80 md:w-[520px] md:h-[360px] object-cover rounded-2xl"
          />

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center order-1 md:order-2 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-primary block">ABOUT US</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Established in April 2024, going to provide high-tech services and material testing to MSMEs in Taloja.
              It supports the automobile, Infrastructure and real estate  sector with advanced machinery services
              and includes a training center for industrial skills, supplying skilled manpower to the industry.
              Located in the significant industrial hub of Taloja Midc, the cluster is dedicated to
              enhancing MSME productivity, competitiveness, and capacity building.
              Managed by Taloja Engineering Cluster
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              It aims to improve performance of small scale industries in the Engineering , Auto,
              Infrastructure and real estate sectors through service support of high-end machining and
              skill development initiatives. It helps in high tech fabrication and metal protective services.
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

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import { Phone, Mail, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import contactImg from "../assets/Contact_us1.jpg";


export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Banner Section */}
      <div
        className="text-large new-banner-size w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${contactImg})`,
          minHeight: "400px"
        }}
      >
        <div className="bg-black/40 absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4 relative z-10">
            Contact Us
          </h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Get in touch with us for any inquiries or collaborations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground">+91 9764442901 / +91 9595715702</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">info@engineeringclusterpune.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-foreground mb-4">Send us a message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <div className="max-w-7xl mx-auto">
            <iframe
              title="Taloja Engineering Cluster Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0000000000005!2d73.00000000000001!3d18.999999999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU5JzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v0000000000000"
              className="w-full h-72 md:h-96 rounded-lg shadow-md border border-border"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

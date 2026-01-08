import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      toast.error("Please configure EmailJS credentials in Contact.tsx");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_name: "ATEA Team", // Optional: customize as needed
        },
        PUBLIC_KEY
      );

      toast.success("Thank you for your enquiry! We will contact you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email API Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us for any enquiries or to learn more about our services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-poppins text-2xl font-semibold text-foreground mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground text-sm">
                    Additional Taloja Engineering Association (Taloja Engineering Cluster)<br />
                    Plot no P-__, MIDC Taloja, Taluka Panvel,<br />
                    District Raigad 410208 Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    +91  8080006900<br />
                    +91 9123456789
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-1">Email</h4>
                  <div className="text-muted-foreground text-sm flex flex-col gap-1">
                    <a href="mailto:info@talojaengineeringcluster.com" className="hover:text-primary transition-smooth">info@talojaengineeringcluster.com</a>
                    <a href="mailto:atea@talojaengineeringcluster.com" className="hover:text-primary transition-smooth">atea@talojaengineeringcluster.com</a>
                    <a href="mailto:director@talojaengineeringcluster.com" className="hover:text-primary transition-smooth">director@talojaengineeringcluster.com</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-card">
            <h3 className="font-poppins text-2xl font-semibold text-foreground mb-6">
              Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="user_name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted border-border"
                />
                <Input
                  name="user_email"
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted border-border"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-muted border-border"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-muted border-border"
                />
              </div>

              <Textarea
                name="message"
                placeholder="Your Message *"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-muted border-border resize-none"
              />

              <Button type="submit" className="btn-primary w-full rounded-md" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

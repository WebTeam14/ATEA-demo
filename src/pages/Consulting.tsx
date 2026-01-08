import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, X } from "lucide-react";

// Images
import ShopImg from "@/assets/Shop.png";
import PowderCoatingImg from "@/assets/powder-coating.png";
import ZincFlakeImg from "@/assets/zinc-flake.png";
import CEDImg from "@/assets/CED-Phosphating.jpg";
import EpoxyImg from "@/assets/epoxy_paint.png";
import ShotBlastingImg from "@/assets/ShotBlasting.png";

const products = [
  {
    id: "powder-coating",
    title: "Powder Coating Service",
    shortDesc: "Durable and high-quality protective finish for metal parts.",
    description: "Our powder coating services provide a durable, high-quality finish that resists scratches, corrosion, and chemicals. Available in a wide range of colors and textures, this eco-friendly process ensures a superior aesthetic and protective coating for all your metal components.",
    image: PowderCoatingImg,
  },
  {
    id: "zinc-flake",
    title: "Zinc Flake Coating",
    shortDesc: "High-performance corrosion protection for fasteners and components.",
    description: "Zinc Flake Coating creates a cathodic protection layer that offers exceptional corrosion resistance, even with a thin coating thickness. Ideal for high-tensile fasteners and automotive components, it ensures no hydrogen embrittlement and long-lasting durability.",
    image: ZincFlakeImg,
  },
  {
    id: "ced-coating",
    title: "CED Coating / Phosphating",
    shortDesc: "Uniform coating thickness with excellent corrosion resistance.",
    description: "Cathodic Electro Deposition (CED) coating provides a uniform, corrosion-resistant finish even on complex shapes. Combined with phosphating pre-treatment, it ensures superior adhesion and long-term protection, making it a standard choice for automotive underbodies and parts.",
    image: CEDImg,
  },
  {
    id: "epoxy-paint",
    title: "Epoxy Painting",
    shortDesc: "Chemical and abrasion-resistant coating for industrial applications.",
    description: "Our Epoxy Painting service delivers a tough, durable coating that withstands harsh chemicals, abrasion, and heavy impact. Perfect for industrial flooring, machinery, and structural steel, ensuring longevity and ease of maintenance.",
    image: EpoxyImg,
  },
  {
    id: "shot-blasting",
    title: "Shot Blasting",
    shortDesc: "Surface preparation and cleaning for superior coating adhesion.",
    description: "Shot Blasting effectively cleans and prepares metal surfaces by removing rust, scale, and contaminants. This process improves the adhesion of subsequent coatings and enhances the fatigue strength of metal parts through peening.",
    image: ShotBlastingImg,
  },
];

export default function Consulting() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Banner Section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${ShopImg})`,
          minHeight: "400px",
        }}
      >
        <div className="bg-black/50 absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4 relative z-10 font-poppins">
            Surface Finishing Shop
          </h1> */}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-orange mb-4">Surface Finishing Shop</h2>
          <div className="h-1 w-16 bg-foreground mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group bg-white p-4"
            >
              <div className="h-56 w-full flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 flex flex-col items-center w-full">
                <h3 className="text-lg font-bold text-foreground mb-8 min-h-[3rem] items-center flex justify-center">
                  {product.title}
                </h3>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-8 py-3 border-2 border-orange text-orange font-bold text-sm uppercase tracking-wider hover:bg-orange hover:text-white transition-colors duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-none w-screen h-screen rounded-none border-none p-0 flex flex-col bg-background focus:outline-none sm:rounded-none">
          <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border px-6 py-4 flex items-center justify-between shadow-sm shrink-0">
            <DialogHeader className="p-0">
              <DialogTitle className="text-2xl font-bold text-primary">
                {selectedProduct?.title}
              </DialogTitle>
            </DialogHeader>
            <button
              onClick={() => setSelectedProduct(null)}
              className="group flex items-center gap-2 px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors border border-transparent hover:border-border text-sm font-medium text-muted-foreground"
            >
              <span>Close</span>
              <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-12">
              {/* Product Info */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="rounded-xl overflow-hidden border border-border shadow-md bg-muted/20">
                  <img
                    src={selectedProduct?.image}
                    alt={selectedProduct?.title}
                    className="w-full h-auto object-contain max-h-[500px]"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">Description</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {selectedProduct?.description}
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>High durability and wear resistance</li>
                      <li>Superior adhesion properties</li>
                      <li>Customizable finish options</li>
                      <li>Environmentally compliant processes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="border-t border-border pt-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-foreground mb-3">Interested in this Service?</h3>
                  <p className="text-muted-foreground">Fill out the form below and our team will get back to you shortly.</p>
                </div>
                <div className="bg-muted/30 p-1 md:p-6 rounded-xl max-w-4xl mx-auto">
                  <Contact />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
}
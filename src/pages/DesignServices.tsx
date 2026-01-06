import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

import ModelDA300 from "@/assets/Model-DA300.png";
import DA300Detail from "@/assets/DA300.png";
import A500Z from "@/assets/a500Z.png";
import HorizontalSetup from "@/assets/Horizontal-Setup.png";
import MCD5X from "@/assets/MCD-5X.png";
import HDG from "@/assets/HDG.png";
import HotDipProcess from "@/assets/hot-dip-process.jpg";
import GalvanizingFacility from "@/assets/galvanizing-facility.jpg";
import GalvanizingLayout from "@/assets/galvanising-layout.jpg";
import ZincFlakeProcess from "@/assets/zinc-flake-process.jpg";

// --- Data & Components for Sections ---

const machines = [
  {
    id: "da300",
    model: "DA300",
    subtitle: "5 AXIS Vertical Machining Center - MakinoDA300",
    tagline: "Reliable machines for part machining",
    image: ModelDA300,
    detailImage: DA300Detail,
    featuresTitle: "Shortening cycle time",
    features: [
      "New development 20000 min⁻¹ spindle",
      "Acceleration time: 1.5 sec. / 20000 min⁻¹",
      "Rigid tap: 60000 min⁻¹",
      "Agility and stable tilting and rotating spindle",
    ],
  },
  {
    id: "da400",
    model: "DA400",
    subtitle: "5-Axis Vertical Machining Center",
    tagline: "High-precision machining for complex parts",
    image: null,
    detailImage: null,
    featuresTitle: "Enhanced Productivity",
    features: [
      "High rigidity structure",
      "Thermal displacement control",
      "Fast rapid traverse rate: 60 m/min",
      "Wide range of spindle options",
    ],
  },
  {
    id: "da500",
    model: "DA500",
    subtitle: "5 AXIS Horizontal Machining Center",
    tagline: "5 AXIS Horizontal Machining Center – Makino a500Z",
    image: A500Z,
    detailImage: A500Z,
    featuresTitle: "Power and Efficiency",
    features: [
      "High torque spindle",
      "Large work envelope",
      "Efficient chip management",
      "User-friendly control interface",
    ],
  },
];

const VerticalMachiningContent = () => (
  <div className="space-y-16 py-6">
    {machines.map((machine) => (
      <div key={machine.id} className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 border-b border-border pb-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary/80">
              {machine.model}
            </h2>
            <p className="text-primary font-semibold">{machine.subtitle}</p>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground md:ml-8 mb-1">
            {machine.tagline}
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Detail Image (Left) */}
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="border border-border p-1 shadow-sm bg-card">
              <div className="aspect-square relative overflow-hidden">
                {machine.detailImage && (
                  <img
                    src={machine.detailImage}
                    alt={`${machine.model} detail`}
                    className="w-full h-full object-cover object-left"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Main Image (Center) */}
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="aspect-[4/3] flex items-center justify-center">
              {machine.image && (
                <img
                  src={machine.image}
                  alt={machine.model}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>

          {/* Features (Right) */}
          <div className="md:col-span-3 order-3">
            <h4 className="text-xl font-bold text-foreground mb-4">
              {machine.featuresTitle}
            </h4>
            <ul className="space-y-2">
              {machine.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm text-muted-foreground font-medium"
                >
                  <span className="mr-2 text-primary">○</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const HorizontalMachiningContent = () => (
  <div className="py-6">
    <p className="text-muted-foreground mb-12 max-w-3xl text-lg">
      High-accuracy, heavy-cutting machining of large workpieces using multi-face
      indexing and simultaneous 5-axis machining.
    </p>

    {/* Main Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left – Setup Image */}
      <div className="space-y-6">
        <div className="border border-border bg-card shadow-sm overflow-hidden">
          <img
            src={HorizontalSetup}
            alt="Horizontal setup"
            className="w-full h-64 object-cover"
          />
        </div>

        <p className="text-sm text-muted-foreground font-medium text-center">
          Horizontal Setup
        </p>

        {/* Small Specs */}
        <div className="border border-border bg-card p-4">
          <h4 className="font-bold text-foreground mb-3">
            a500Z – Specifications
          </h4>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 text-muted-foreground">X / Y / Z Axis</td>
                <td className="py-2 font-semibold text-right">
                  730 / 750 / 500 mm
                </td>
              </tr>
              <tr>
                <td className="py-2 text-muted-foreground">Spindle Speed</td>
                <td className="py-2 font-semibold text-right">18,000 min⁻¹</td>
              </tr>
              <tr>
                <td className="py-2 text-muted-foreground">Rapid Traverse</td>
                <td className="py-2 font-semibold text-right">60 m/min</td>
              </tr>
              <tr>
                <td className="py-2 text-muted-foreground">Table Size</td>
                <td className="py-2 font-semibold text-right">500 × 500 mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right – Machine & Models */}
      <div className="space-y-10">
        {/* Machine Image */}
        <div className="border border-border bg-card shadow-sm overflow-hidden">
          <img
            src={MCD5X}
            alt="MCD-5X Series"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Models */}
        <div className="border border-border bg-card p-6">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            MCD-5X Series
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Model 1 */}
            <div className="border border-border p-4">
              <h4 className="font-bold text-primary mb-2">MCD615-5XA</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Max Work Size: 1500 × 2000 mm</li>
                <li>• Spindle Speed: 10,000 min⁻¹</li>
                <li>• Table Load: 2300 kg</li>
              </ul>
            </div>

            {/* Model 2 */}
            <div className="border border-border p-4">
              <h4 className="font-bold text-primary mb-2">MCD816-5XB</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Max Work Size: 2000 × 2500 mm</li>
                <li>• Spindle Speed: 8,000 min⁻¹</li>
                <li>• Table Load: 3000 kg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TalojaContent = () => (
  <div className="py-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Image */}
      <div className="border border-border bg-card">
        <img
          src={HDG}
          alt="Hot Dip Galvanising Plant"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Details */}
      <div className="border border-border bg-card p-6">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-border">
            <tr>
              <td className="py-2 text-muted-foreground">Plant Size</td>
              <td className="py-2 font-semibold text-right">
                5.5 × 1.2 × 1.5 m (Expandable to 6.5 m)
              </td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Product Type</td>
              <td className="py-2 font-semibold text-right">Sundry</td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Capacity</td>
              <td className="py-2 font-semibold text-right">
                1.5 TPH (~1000 MT / Month)
              </td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Fuel</td>
              <td className="py-2 font-semibold text-right">LPG / CNG</td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Land Area</td>
              <td className="py-2 font-semibold text-right">5576 sq. mts</td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Process Tanks</td>
              <td className="py-2 font-semibold text-right">7.5 × 1.2 m</td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Hot Air Dryer</td>
              <td className="py-2 font-semibold text-right">7.5 × 1.2 m</td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Company</td>
              <td className="py-2 font-semibold text-right">
                Jayashree Galva P Ltd
              </td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Contact</td>
              <td className="py-2 font-semibold text-right">
                8080006900 / 9820639026 / 9820292729
              </td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Email</td>
              <td className="py-2 font-semibold text-right">
                talojaengineeringcluster@gmail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const HotDipGalvanizingContent = () => (
  <div className="py-6 space-y-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Description and Facility */}
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Hot-dip galvanizing is a corrosion protection process where steel or iron is immersed in a bath of molten zinc (around 460°C/860°F) to create a durable, protective coating, forming iron-zinc alloys and a final zinc-rich layer that prevents rust by acting as a barrier and providing sacrificial (cathodic) protection. This widely used method involves meticulous cleaning (degreasing, pickling, fluxing) before dipping, resulting in a robust, long-lasting coating ideal for structures needing rust resistance.
        </p>
        <div className="border border-border bg-card shadow-sm overflow-hidden rounded-lg">
          <img
            src={GalvanizingFacility}
            alt="Hot-dip galvanizing facility"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Process Diagram */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground">Our Process</h3>
        <div className="border border-border bg-card shadow-sm overflow-hidden rounded-lg p-2 bg-white">
          <img
            src={HotDipProcess}
            alt="Hot-dip galvanizing process"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>

    {/* Layout / Map */}
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-foreground">Facility Layout</h3>
      <div className="border border-border bg-card shadow-sm overflow-hidden rounded-lg max-w-4xl mx-auto p-2 bg-white">
        <img
          src={GalvanizingLayout}
          alt="Facility layout"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>
);

const ZincFlakeCoatingContent = () => (
  <div className="py-6 space-y-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Description */}
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          The zinc flake coating process involves surface preparation (cleaning/blasting), applying a liquid mix of zinc/aluminum flakes in a binder (via spray or dip-spin), and then heat-curing (baking) to create a tough, multi-layered, corrosion-resistant inorganic film that provides cathodic protection without hydrogen embrittlement, often followed by optional topcoats for added properties.
        </p>
      </div>

      {/* Process Diagram */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground">Our Process</h3>
        <div className="border border-border bg-card shadow-sm overflow-hidden rounded-lg p-2 bg-white">
          <img
            src={ZincFlakeProcess}
            alt="Zinc flake coating process"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export default function DesignServices() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: "vertical",
      title: "Vertical Machining Centers",
      description: "DA300, DA400, DA500 Series",
      content: <VerticalMachiningContent />,
      previewImage: ModelDA300,
    },
    {
      id: "horizontal",
      title: "Horizontal Machining Centers",
      description: "MCD-5X Series, High Accuracy",
      content: <HorizontalMachiningContent />,
      previewImage: MCD5X,
    },
    {
      id: "taloja",
      title: "Taloja Engineering Cluster",
      description: "Hot Dip Galvanising Plant",
      content: <TalojaContent />,
      previewImage: HDG,
    },
    {
      id: "galvanizing",
      title: "Hot-Dip Galvanizing",
      description: "Corrosion protection process",
      content: <HotDipGalvanizingContent />,
      previewImage: HotDipProcess,
    },
    {
      id: "zinc-flake",
      title: "Zinc Flake Coating",
      description: "Corrosion-resistant inorganic film",
      content: <ZincFlakeCoatingContent />,
      previewImage: ZincFlakeProcess,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      <Header />

      {/* Banner Section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop')",
          minHeight: "300px",
        }}
      >
        <div className="bg-black/60 absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 relative z-10 font-poppins">
            Design & Engineering Services
          </h1>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content / Introduction Area (Left Side - 3 cols) */}
          <div className="lg:col-span-3">
            <div className="lg:pr-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Comprehensive Engineering Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                ATEA provides world-class design and engineering services,
                leveraging state-of-the-art machining centers and industrial
                facilities. Our capabilities span from high-precision 5-axis
                machining to large-scale galvanising operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preview Cards for visuals on main page */}
                {sections.map((section) => (
                  <div
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className="group cursor-pointer border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden p-4">
                      {/* Placeholder visuals for the cards */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/10 transition-colors duration-500" />
                      {section.previewImage ? (
                        <img
                          src={section.previewImage}
                          alt={section.title}
                          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 relative z-10"
                        />
                      ) : (
                        <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">ATEA</span>
                      )}
                    </div>
                    <div className="p-4 border-t border-border">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Navigation (Right Side - 1 col) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-4 px-2 uppercase tracking-wider text-sm flex items-center">
                <span className="w-1 h-4 bg-primary mr-2 rounded-full"></span>
                Services Menu
              </h3>
              <div className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${activeSection === section.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-accent hover:text-accent-foreground text-muted-foreground bg-card border border-transparent hover:border-border"
                      }`}
                  >
                    <span>{section.title}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${activeSection === section.id ? "rotate-90" : "group-hover:translate-x-1"
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog
        open={!!activeSection}
        onOpenChange={(open) => !open && setActiveSection(null)}
      >
        <DialogContent className="max-w-7xl h-[90vh] overflow-y-auto w-[98vw] p-0 gap-0 focus:outline-none bg-background">
          <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-6 py-4 flex items-center justify-between shadow-sm">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                {sections.find((s) => s.id === activeSection)?.title}
              </DialogTitle>
            </DialogHeader>
            <button
              onClick={() => setActiveSection(null)}
              className="rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-colors border border-transparent hover:border-border"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 md:px-10 pb-12 pt-8 max-w-7xl mx-auto w-full">
            {sections.find((s) => s.id === activeSection)?.content}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

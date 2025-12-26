import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import MissionVision from "./pages/MissionVision";
import DesignServices from "./pages/DesignServices";
import Consulting from "./pages/Consulting";
import ProjectManagement from "./pages/ProjectManagement";
import SkillDevelopment from "./pages/SkillDevelopment";
import Event from "./pages/Event";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/design-services" element={<DesignServices />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/skill-development" element={<SkillDevelopment />} />
          <Route path="/events" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

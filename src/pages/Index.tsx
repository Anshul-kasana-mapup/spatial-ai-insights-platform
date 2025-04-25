
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import TechnicalSection from "@/components/TechnicalSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    document.title = "MapUp - AI-Driven Geospatial Intelligence";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ApplicationsSection />
      <TechnicalSection />
      <FooterSection />
    </div>
  );
};

export default Index;

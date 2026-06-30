import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IdentificationSection from "./components/IdentificationSection";
import EmotionalBanner from "./components/EmotionalBanner";
import TransitionSection from "./components/TransitionSection";
import Treatments from "./components/Treatments";
import About from "./components/About";
import Differentials from "./components/Differentials";
import ScientificApproach from "./components/ScientificApproach";
import EducationalHighlight from "./components/EducationalHighlight";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  useEffect(() => {
    // Set Page title
    document.title = "Dra. Cláudia Lima | Odontologia, Estética e Reabilitação Oral";
    
    // Dynamically query or add the description meta tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Atendimento odontológico personalizado com foco em estética, reabilitação oral, implantes, próteses, ortodontia e saúde do sorriso. Agende uma avaliação."
    );
  }, []);

  return (
    <div id="homepage-root" className="min-h-screen bg-stone-50 flex flex-col font-sans selection:bg-[#C6002B]/10 selection:text-[#C6002B]">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="homepage-main" className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Identification Section */}
        <IdentificationSection />

        {/* Horizontal Emotional Band */}
        <EmotionalBanner />

        {/* Transition section with CTA */}
        <TransitionSection />

        {/* Specialized Treatments section */}
        <Treatments />

        {/* About Dra. Cláudia Lima section */}
        <About />

        {/* Service Differentials section */}
        <Differentials />

        {/* Scientific approach / precision planning section */}
        <ScientificApproach />

        {/* Educational highlight block */}
        <EducationalHighlight />

        {/* Final direct booking CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating interactive WhatsApp CTA */}
      <WhatsAppButton />
    </div>
  );
}

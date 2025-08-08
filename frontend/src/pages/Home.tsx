import MatrixRain from "../components/MatrixRain";
import Navbar from "../components/NavbarLanding";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ArchitectureSection from "../components/ArchitectureSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import HederaSection from "../components/HederaSection";
import TechStack from "../components/TechStack";
import FAQ from "../components/FAQ";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
import CommunitySection from "../components/CommunitySection";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-background relative">
      {/* Matrix Rain Background */}
      <MatrixRain />
      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <div id="architecture">
          <ArchitectureSection />
        </div>
        <div id="techstack">
          <TechStack />
        </div>
        <div id="problems">
          <ProblemSolutionSection />
        </div>
        <div id="features">
          <Features />
        </div>

        <div id="hedera">
          <HederaSection />
        </div>

        <CallToAction />
        <CommunitySection />
        <div id="faq">
          <FAQ />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

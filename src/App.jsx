import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import LogoSlider from "./sections/LogoSlider";
import FeaturesSection from "./sections/FeaturesSection";
import CreativeSection from "./sections/CreativeSection";
import TestimonialCarousel from "./sections/TestimonialCarousel";
import PricingSection from "./sections/PricingSection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";
import Footer from "./components/layout/Footer";
import AboutSection from "./sections/aboutSection";



export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AboutSection />
      <LogoSlider />
      <FeaturesSection />
      <CreativeSection />
      <TestimonialCarousel />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

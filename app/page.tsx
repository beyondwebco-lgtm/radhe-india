import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesSection from "@/components/IndustriesSection";
import GlobalPresence from "@/components/GlobalPresence";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* Services moved BEFORE Products per client feedback */}
      <ServicesSection />
      <ProductsSection />
      <WhyChooseUs />
      <IndustriesSection />
      <GlobalPresence />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

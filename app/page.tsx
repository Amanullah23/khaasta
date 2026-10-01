import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import WhyUs from "@/components/WhyUs";
import AboutSection from "@/components/AboutSection";
import FranchiseSection from "@/components/FranchiseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <WhyUs />
      <AboutSection />
      <FranchiseSection />
      <ContactSection />
      <Footer />
      <PromoBanner />
    </main>
  );
}

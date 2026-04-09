import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import TechSection from "@/components/sections/TechSection";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <Services />
      <TechSection />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Contact />
    </main>
  );
}

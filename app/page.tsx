import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProductsPreview from "@/components/sections/ProductsPreview";
import Process from "@/components/sections/Process";
import FaqSection from "@/components/sections/FaqSection";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <ProductsPreview />
      <Process />
      <FaqSection />
      <FinalCta />
    </>
  );
}

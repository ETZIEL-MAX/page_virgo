import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/sections/PageHero";
import Story from "@/components/sections/about/Story";
import ValuesSection from "@/components/sections/ValuesSection";
import Capabilities from "@/components/sections/about/Capabilities";
import FinalCta from "@/components/sections/FinalCta";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Conoce a Plásticos Virgo: 20 años de experiencia fabricando polietileno de alta y baja densidad en el norte de México. Nuestra historia, misión, visión y valores.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="La experiencia de 20 años detrás de cada empaque"
        description="Una empresa mexicana especializada en la fabricación de productos de polietileno con los más altos estándares de calidad."
        crumbs={[{ label: "Nosotros", href: "/about" }]}
      />
      <Story />
      <ValuesSection />
      <Capabilities />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([{ name: "Inicio", href: "/" }, { name: "Nosotros", href: "/about" }])),
        }}
      />
    </>
  );
}

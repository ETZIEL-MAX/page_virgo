import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/sections/PageHero";
import Offers from "@/components/sections/custom/Offers";
import HowItWorks from "@/components/sections/custom/HowItWorks";
import Sustainability from "@/components/sections/Sustainability";
import FinalCta from "@/components/sections/FinalCta";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Manufactura a medida",
  description:
    "Fabricamos bolsas y empaques plásticos a la medida: medidas personalizadas, impresión de logotipos en uno o varios colores y precios de mayoreo. Somos fabricantes directos.",
  path: "/custom-manufacturing",
});

export default function CustomManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="a medida"
        title="Tu marca, tu medida, tu empaque perfecto"
        description="Personaliza las bolsas de tu empresa con tu logotipo, en todos los colores que se requieran, fabricadas a la medida y al mejor precio de mayoreo."
        crumbs={[{ label: "Manufactura a medida", href: "/custom-manufacturing" }]}
      />
      <Offers />
      <HowItWorks />
      <Sustainability />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Inicio", href: "/" },
              { name: "Manufactura a medida", href: "/custom-manufacturing" },
            ]),
          ),
        }}
      />
    </>
  );
}

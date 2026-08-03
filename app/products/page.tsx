import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { products } from "@/lib/products";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import ProductsGrid from "@/components/sections/products/ProductsGrid";
import FinalCta from "@/components/sections/FinalCta";
import { breadcrumbSchema, jsonLd, productSchema } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Productos",
  description:
    "Bolsas de alta y baja densidad, bolsas ziploc, para hielo, camiseta, emplaye, envases y bolsas impresas a medida. Materiales plásticos para tu negocio con impresión opcional.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Productos"
        smallWatermark
        title="Variedad de materiales plásticos para tu negocio"
        description="Ofrecemos una amplia selección de materiales, medidas y calibres adaptados a tus necesidades, con opción de impresión en uno o varios colores."
        crumbs={[{ label: "Productos", href: "/products" }]}
      />
      <section className={styles.section}>
        <Container>
          <ProductsGrid products={products} />
        </Container>
      </section>
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([{ name: "Inicio", href: "/" }, { name: "Productos", href: "/products" }])),
        }}
      />
      {products.map((product) => (
        <script
          key={product.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(productSchema(product)) }}
        />
      ))}
    </>
  );
}

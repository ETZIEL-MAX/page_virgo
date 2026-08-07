import type { Metadata } from "next";
import Image from "next/image";
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
    "Bolsas de alta y baja densidad, bolsas tipo ziploc, para hielo, camiseta, emplaye, envases y bolsas impresas a medida. Materiales plásticos para tu negocio con impresión opcional.",
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
      <section className={styles.section}>
        <Container>
          <div className={styles.gallery}>
            {["/images/producto1.jpeg", "/images/producto2.jpeg", "/images/producto3.jpeg", "/images/PRODUCTO4.jpeg"].map(
              (src) => (
                <div key={src} className={styles.galleryTile}>
                  <Image
                    src={src}
                    alt="Producto de Plásticos Virgo"
                    width={600}
                    height={800}
                    className={styles.galleryImage}
                    sizes="(max-width: 640px) 50vw, (max-width: 960px) 50vw, 25vw"
                  />
                </div>
              )
            )}
          </div>
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

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
  const availableProducts = [
    "Bolsas de alta y baja densidad en varias medidas, incluyendo opciones con fuelle",
    "Bolsas tipo ziploc",
    "Bolsa negra y transparente en baja densidad 90 x 120 cm",
    "Bolsas para hielo, con o sin impresión",
    "Bolsas camiseta con impresión",
    "Emplaye en distintos calibres, medidas y largos industrial y de grado alimenticio",
    "Envases y contenedores con impresión",
  ];

  const productGallery = [
    "/images/producto1.jpeg",
    "/images/producto2.jpeg",
    "/images/producto3.jpeg",
    "/images/PRODUCTO4.jpeg",
  ];

  return (
    <>
      <PageHero
        eyebrow="Productos"
        smallWatermark
        title="Variedad de materiales plásticos para tu negocio"
        description="Ofrecemos una amplia selección de materiales, medidas y calibres adaptados a tus necesidades."
        crumbs={[{ label: "Productos", href: "/products" }]}
      />
      <section className={styles.section}>
        <Container>
          <div className={styles.showcase}>
            <div className={styles.intro}>
              <p className={`${styles.kicker} mono`}>Productos disponibles</p>
              <h2 className={styles.introTitle}>Variedad de materiales plasticos para tu negocio</h2>
              <p className={styles.introText}>
                Ofrecemos una amplia seleccion de materiales, medidas y calibres adaptados a tus necesidades.
              </p>
              <ul className={styles.introList}>
                {availableProducts.map((item) => (
                  <li key={item} className={styles.introItem}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.introNote}>
                Bolsas impresas en uno o varios colores, perfectas para impulsar tu marca.
              </p>
            </div>

            <div className={styles.gallery}>
              {productGallery.map((src, index) => (
                <div key={src} className={`${styles.galleryTile} ${styles[`galleryTile${index}`]}`}>
                  <Image
                    src={src}
                    alt="Producto de Plasticos Virgo"
                    width={600}
                    height={800}
                    className={styles.galleryImage}
                    sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 28vw"
                  />
                </div>
              ))}
            </div>
          </div>

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

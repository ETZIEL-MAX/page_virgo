import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ui/ProductCard";
import styles from "./ProductsPreview.module.css";

const previewProducts = products.slice(0, 6);

export default function ProductsPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.headRow}>
          <p className={`${styles.index} mono`}>/ 03</p>
          <p className={`${styles.headEyebrow} mono`}>Nuestros productos</p>
        </Reveal>
        <Reveal>
          <h2 className={styles.title}>
            Variedad de materiales <span className="text-accent">plásticos</span> para tu negocio
          </h2>
        </Reveal>

        <div className={styles.bento}>
          {previewProducts.map((product, index) => (
            <Reveal
              key={product.id}
              delay={(index % 3) * 0.08}
              className={`${styles.bentoItem} ${styles[`span${index}`]}`}
            >
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.footer}>
          <Button href="/products" variant="secondary" size="lg">
            Ver todos los productos
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

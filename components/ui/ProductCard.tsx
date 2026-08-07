import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";
import { productCategories } from "@/lib/products";
import Badge from "./Badge";
import Button from "./Button";
import styles from "./ProductCard.module.css";

const productPhotos: Record<string, string> = {
  "alta-densidad": "/images/bolsa-alta.jpeg",
  "baja-densidad": "/images/bolsa-alta.jpeg",
  "camiseta": "/images/bolsa-alta.jpeg",
  "hielo": "/images/bolsa-hielo.webp",
  "ziploc": "/images/ziploc.webp",
  "impresas": "/images/bolsa-impresa.jpeg",
  "emplaye": "/images/emplaye.jpeg",
  "envases": "/images/envases.jpeg",
};

type ProductCardProps = {
  product: Product;
  detailed?: boolean;
};

export default function ProductCard({ product, detailed = false }: ProductCardProps) {
  const category = productCategories.find((c) => c.id === product.categoryId);
  const photo = productPhotos[product.id];

  return (
    <article className={styles.card} id={product.id}>
      <div className={styles.media}>
        {photo ? (
          <Image
            src={photo}
            alt={product.name}
            width={600}
            height={480}
            className={styles.image}
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
          />
        ) : null}
        {category ? (
          <Badge tone="blue" className={styles.category}>
            {category.label}
          </Badge>
        ) : null}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.tagline}>{product.tagline}</p>
        <p className={styles.description}>{product.description}</p>

        {detailed ? (
          <div className={styles.details}>
            <div>
              <h4 className={styles.detailTitle}>Aplicaciones</h4>
              <ul className={styles.chips}>
                {product.applications.map((item) => (
                  <li key={item} className={styles.chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={styles.detailTitle}>Personalización</h4>
              <ul className={styles.chips}>
                {product.customizations.map((item) => (
                  <li key={item} className={styles.chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        <div className={styles.actions}>
          <Button href="/contact" size="sm">
            Solicitar cotización
          </Button>
          <Button
            href={detailed ? "/contact" : `/products#${product.id}`}
            variant="ghost"
            size="sm"
          >
            {detailed ? "Cotizar ahora" : "Ver detalles"}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  );
}

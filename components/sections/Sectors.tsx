"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { sectors } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import ProductCard from "@/components/ui/ProductCard";
import styles from "./Sectors.module.css";

const sectorProducts: Record<string, string[]> = {
  industrial: ["emplaye", "envases", "alta-densidad"],
  manufacturero: ["emplaye", "impresas", "camiseta"],
  automotriz: ["emplaye", "alta-densidad", "envases"],
  comercial: ["camiseta", "ziploc", "baja-densidad", "impresas", "transparente"],
  alimenticio: ["hielo", "ziploc", "envases", "baja-densidad", "emplaye-alimentario"],
};

export default function Sectors() {
  const [active, setActive] = useState<string | null>(null);

  const activeProducts = active
    ? products.filter((p) => sectorProducts[active]?.includes(p.id))
    : [];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className={styles.eyebrow}>Sectores que atendemos</p>
            <h2 className={styles.heading}>
              Empaques para <span className="text-accent">cada industria</span>
            </h2>
            <p className={styles.intro}>
              Selecciona tu industria para ver los productos ideales para tu negocio.
            </p>
          </Reveal>
        </div>

        <div className={styles.rows}>
          {sectors.map((sector, index) => {
            const isActive = active === sector.id;
            return (
              <Reveal key={sector.id} delay={index * 0.06} className={styles.row}>
                <button
                  type="button"
                  className={`${styles.trigger} ${isActive ? styles.triggerActive : ""}`}
                  onClick={() => setActive(isActive ? null : sector.id)}
                  aria-expanded={isActive}
                  aria-controls={`sector-${sector.id}`}
                >
                  <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
                  <div className={styles.iconCircle}>
                    <Icon name={sector.icon} size={28} />
                  </div>
                  <div className={styles.textCol}>
                    <h3 className={styles.triggerTitle}>{sector.title}</h3>
                    <p className={styles.triggerDesc}>{sector.description}</p>
                  </div>
                  <span className={`${styles.arrow} ${isActive ? styles.arrowOpen : ""}`} aria-hidden="true">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {isActive && activeProducts.length > 0 ? (
                  <div id={`sector-${sector.id}`} className={styles.dropdown}>
                    <div className={styles.productsGrid}>
                      {activeProducts.map((product) => (
                        <ProductCard key={product.id} product={product} detailed />
                      ))}
                    </div>
                  </div>
                ) : null}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

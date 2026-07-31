"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/types";
import { productCategories } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";
import styles from "./ProductsGrid.module.css";

type ProductsGridProps = {
  products: Product[];
};

const tabs = [{ id: "todos", label: "Todos" }, ...productCategories];

export default function ProductsGrid({ products }: ProductsGridProps) {
  const [active, setActive] = useState("todos");

  const filtered = active === "todos" ? products : products.filter((p) => p.categoryId === active);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <p className={`${styles.count} mono`}>
          <span className={styles.countNum}>{String(products.length).padStart(2, "0")}</span>
          productos
        </p>
        <div className={styles.tabs} role="tablist" aria-label="Filtrar productos por categoría">
          {tabs.map((tab, index) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={cn(styles.tab, isActive && styles.tabActive)}
                onClick={() => setActive(tab.id)}
              >
                <span className={styles.tabIndex} aria-hidden="true">
                  {String(index).padStart(2, "0")}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={styles.item}
            >
              <ProductCard product={product} detailed />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

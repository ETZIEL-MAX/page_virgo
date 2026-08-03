import type { Metadata } from "next";
import { ArrowLeft, Home } from "lucide-react";
import Button from "@/components/ui/Button";
import Backdrop from "@/components/ui/Backdrop";
import Container from "@/components/ui/Container";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className={styles.section}>
      <Backdrop />
      <div className={styles.watermarkWrap}>
        <span className={styles.watermark} aria-hidden="true">
          Error
        </span>
      </div>
      <Container>
        <div className={styles.content}>
          <p className={`${styles.label} mono`}>
            <span className={styles.dot} aria-hidden="true" />
            Página no encontrada
          </p>
          <p className={styles.code} aria-hidden="true">
            404
          </p>
          <h1 className={styles.title}>Esta página se salió de la línea de producción</h1>
          <p className={styles.text}>
            La página que buscas no existe o fue movida. Volvamos al inicio para encontrar lo que
            necesitas.
          </p>
          <div className={styles.actions}>
            <Button href="/" size="lg">
              <Home size={18} aria-hidden="true" />
              Volver al inicio
            </Button>
            <Button href="/products" variant="outline" size="lg">
              <ArrowLeft size={18} aria-hidden="true" />
              Ver productos
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

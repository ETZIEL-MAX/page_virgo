"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/utils";
import Container from "@/components/ui/Container";
import styles from "./Hero.module.css";

const whatsAppMessage =
  "Hola Plásticos Virgo, me gustaría solicitar una cotización para mi negocio.";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src="/images/maquina.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className={styles.videoOverlay} aria-hidden="true" />

      <Container className={styles.wrapper}>
        <p className={styles.eyebrow}>FABRICANTES DE POLIETILENO</p>

        <h1 className={styles.headline}>
          Soluciones en empaque de polietileno con la más alta calidad y resistencia de
          México.
        </h1>

        <p className={styles.subtitle}>
          Fabricamos bolsas, emplaye y envases a la medida. Calidad, precio y
          servicio personalizado en todo el norte del país.
        </p>

        <div className={styles.ctas}>
          <a
            href={buildWhatsAppLink(siteConfig.whatsapp, whatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            Cotizar por WhatsApp
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href="/products" className={styles.secondaryCta}>
            Ver Catálogo de Productos
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.trust}>
          <span className={styles.trustItem}>20 años de experiencia</span>
          <span className={styles.trustItem}>Fabricantes directos</span>
          <span className={styles.trustItem}>Aditivos biodegradables</span>
        </div>
      </Container>
    </section>
  );
}

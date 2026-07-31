import { ArrowRight, Target, Eye } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { yearSince } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./AboutPreview.module.css";

const years = yearSince(siteConfig.foundedYear);

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <Reveal>
            <p className={styles.eyebrow}>Sobre nosotros</p>
            <h2 className={styles.title}>
              Desde <span className="text-accent">{siteConfig.foundedYear}</span> fabricando
              confianza, plástico a plástico
            </h2>
          </Reveal>

          <Reveal delay={0.1} className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{years}</span>
              <span className={styles.statLabel}>años de experiencia</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>{siteConfig.foundedYear}</span>
              <span className={styles.statLabel}>fundación</span>
            </div>
          </Reveal>
        </div>

        <div className={styles.main}>
          <Reveal className={styles.photoSlot} delay={0.06}>
            <Image
              src="/images/maquinaria.png"
              alt="Maquinaria Plásticos Virgo"
              width={700}
              height={525}
              className={styles.photo}
            />
          </Reveal>

          <div className={styles.copyCol}>
            <Reveal delay={0.1}>
              <p className={styles.text}>
                Plásticos Virgo se especializa en la fabricación de polietileno de alta y baja
                densidad en el norte de México. Hemos crecido gracias a un compromiso firme: la más
                alta calidad, la economía de nuestros clientes y el bienestar del medio ambiente.
              </p>
            </Reveal>

            <div className={styles.mvGrid}>
              <Reveal delay={0.14}>
                <article className={styles.mvCard}>
                  <div className={styles.mvIcon}>
                    <Target size={22} aria-hidden="true" />
                  </div>
                  <h3 className={styles.mvTitle}>Misión</h3>
                  <p className={styles.mvText}>
                    Ser el mejor proveedor con productos de la más alta calidad, cuidando la
                    economía de nuestros clientes y el medio ambiente.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={0.2}>
                <article className={styles.mvCard}>
                  <div className={styles.mvIcon}>
                    <Eye size={22} aria-hidden="true" />
                  </div>
                  <h3 className={styles.mvTitle}>Visión</h3>
                  <p className={styles.mvText}>
                    Ser una de las mejores empresas de México en productos plásticos de alta calidad
                    al mejor costo y servicio.
                  </p>
                </article>
              </Reveal>
            </div>

            <Reveal delay={0.26}>
              <Button href="/about" variant="ghost">
                Conoce nuestra historia
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

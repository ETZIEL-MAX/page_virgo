import { Eye, Target } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { yearSince } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./Story.module.css";

const galleryImages = [
  { src: "/images/linea-produccion.jpeg", alt: "Línea de producción" },
  { src: "/images/linea-produccion-maquinas.jpeg", alt: "Maquinaria en producción" },
  { src: "/images/personal.jpeg", alt: "Equipo de trabajo" },
  { src: "/images/asesoria.jpeg", alt: "Asesoría personalizada" },
];

const years = yearSince(siteConfig.foundedYear);

export default function Story() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.headRow}>
          <p className={`${styles.index} mono`}>/ Historia</p>
          <p className={`${styles.headEyebrow} mono`}>Desde {siteConfig.foundedYear}</p>
        </Reveal>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <h2 className={styles.title}>
                Dos décadas de experiencia en el <span className="text-accent">polietileno</span>
              </h2>
              <p className={styles.text}>
                Plásticos Virgo es una empresa fabricante de productos plásticos con más de 20 años
                de experiencia, instalada en el norte del país. Desde nuestra fundación en{" "}
                <strong>{siteConfig.foundedYear}</strong>, hemos tenido un amplio crecimiento gracias
                a la gran experiencia en el ramo del{" "}
                <strong>polietileno de alta y baja densidad</strong>.
              </p>
              <p className={styles.text}>
                Contamos con un equipo altamente capacitado y motivado, dispuesto a ofrecer
                soluciones efectivas y eficientes, así como las instalaciones adecuadas para
                producir tu producto con la mejor calidad.
              </p>
            </Reveal>

            <div className={styles.quote}>
              <Reveal delay={0.1}>
                <p className={styles.quoteText}>
                  Somos en <em>precio</em>, <em>calidad</em> y <em>rendimiento</em> la mejor opción
                  de México.
                </p>
                <span className={`${styles.quoteAuthor} mono`}>— Plásticos Virgo</span>
              </Reveal>
            </div>

            <div className={styles.mvGrid}>
              <Reveal delay={0.12}>
                <div className={styles.mvCard}>
                  <div className={styles.mvIcon}>
                    <Target size={22} aria-hidden="true" />
                  </div>
                  <h3 className={styles.mvTitle}>Misión</h3>
                  <p className={styles.mvText}>
                    Ser el mejor proveedor con productos de la más alta calidad, cuidando la
                    economía de nuestros clientes y el medio ambiente.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className={styles.mvCard}>
                  <div className={styles.mvIcon}>
                    <Eye size={22} aria-hidden="true" />
                  </div>
                  <h3 className={styles.mvTitle}>Visión</h3>
                  <p className={styles.mvText}>
                    Ser una de las mejores empresas de México en productos plásticos de alta calidad
                    al mejor costo y servicio.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal direction="left" delay={0.08} className={styles.side}>
            <div className={styles.yearsBox}>
              <span className={styles.years}>{years}</span>
              <span className={styles.yearsLabel}>años de experiencia</span>
            </div>
            <div className={styles.factRow}>
              <div className={styles.fact}>
                <span className="mono">{siteConfig.foundedYear}</span>
                <p>Fundación</p>
              </div>
              <div className={styles.fact}>
                <span className="mono">100%</span>
                <p>Nacional</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className={styles.gallery}>
            {galleryImages.map((img) => (
              <div key={img.src} className={styles.galleryItem}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className={styles.galleryImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { Leaf } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./Sustainability.module.css";

const points = [
  "Uno de los mejores aditivos biodegradables del continente.",
  "Opciones ecoamigables para negocios comprometidos.",
  "Producción responsable con reducción de merma.",
];

export default function Sustainability() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <Reveal direction="right" className={styles.visual}>
            <div className={styles.leafCard}>
              <div className={styles.ring} aria-hidden="true" />
              <Leaf size={150} strokeWidth={1} className={styles.leaf} aria-hidden="true" />
              <span className={`${styles.tag} mono`}>ECO / BIO</span>
            </div>
          </Reveal>

          <div className={styles.copy}>
            <Reveal>
              <p className={`${styles.eyebrow} mono`}>/ 05 · Sostenibilidad</p>
              <h2 className={styles.title}>
                Comprometidos con <span className="text-accent">el medio ambiente</span>
              </h2>
              <p className={styles.text}>
                Contamos con uno de los mejores aditivos biodegradables que existen en el
                continente, para que tu empaque cuide tu producto y también el planeta.
              </p>
            </Reveal>
            <ul className={styles.list}>
              {points.map((point, index) => (
                <Reveal as="li" key={point} delay={0.1 + index * 0.08} className={styles.item}>
                  <span className={styles.check}>
                    <Leaf size={14} aria-hidden="true" />
                  </span>
                  <span>{point}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

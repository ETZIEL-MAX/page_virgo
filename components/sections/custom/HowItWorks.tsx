import { customProcess } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.headRow}>
          <div>
            <p className={`${styles.eyebrow} mono`}>
              <span className={styles.dot} aria-hidden="true" />
              Cómo trabajamos
            </p>
            <h2 className={styles.heading}>De tu idea a tu producto personalizado</h2>
          </div>
          <p className={styles.intro}>Un proceso simple y transparente para fabricar tu empaque a la medida.</p>
        </Reveal>

        <div className={styles.list}>
          {customProcess.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08} className={styles.row}>
              <article className={styles.step}>
                <span className={`${styles.number} mono`}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.title}>{step.title}</h3>
                  <p className={styles.text}>{step.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

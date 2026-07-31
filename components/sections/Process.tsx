import { customProcess } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal>
          <div className={styles.head}>
            <p className={`${styles.index} mono`}>/ 04</p>
            <h2 className={styles.title}>
              De la idea a tu producto, <span className="text-accent">paso a paso</span>
            </h2>
            <p className={styles.sub}>
              Un proceso claro y controlado que garantiza calidad y puntualidad en cada pedido.
            </p>
          </div>
        </Reveal>

        <ol className={styles.track}>
          {customProcess.map((step, index) => (
            <Reveal as="li" key={step.step} delay={index * 0.09} className={styles.step}>
              <div className={styles.node}>
                <span className={`${styles.number} mono`}>{step.step}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

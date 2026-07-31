import { features } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className={styles.eyebrow}>Por qué elegirnos</p>
            <h2 className={styles.title}>
              La mejor opción en precio, calidad y rendimiento de México
            </h2>
            <p className={styles.sub}>
              Trabajamos para que cada pedido supere tus expectativas.
            </p>
          </Reveal>
        </div>

        <div className={styles.list}>
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06}>
              <article className={styles.row}>
                <div className={styles.icon}>
                  <Icon name={feature.icon} size={28} />
                </div>
                <div className={styles.rowBody}>
                  <h3 className={styles.rowTitle}>{feature.title}</h3>
                  <p className={styles.rowText}>{feature.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

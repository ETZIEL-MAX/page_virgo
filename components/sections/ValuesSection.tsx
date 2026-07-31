import { values } from "@/lib/site";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import styles from "./ValuesSection.module.css";

export default function ValuesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.head}>
          <p className={`${styles.index} mono`}>/ Nuestros valores</p>
          <h2 className={styles.title}>
            Lo que nos <span className="text-gradient">define</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={(index % 5) * 0.06}
              className={`${styles.item} ${index === 0 ? styles.featured : ""}`}
            >
              <article className={styles.card}>
                <div className={styles.icon}>
                  <Icon name={value.icon} size={24} />
                </div>
                <h3 className={styles.titleCard}>{value.title}</h3>
                <p className={styles.description}>{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { stats } from "@/lib/site";
import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.bar}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.item}>
              <span className={styles.value}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

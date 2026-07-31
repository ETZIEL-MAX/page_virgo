import { Hexagon } from "lucide-react";
import styles from "./Marquee.module.css";

const items = [
  "Alta densidad",
  "Baja densidad",
  "Bolsas ziploc",
  "Bolsas para hielo",
  "Bolsas camiseta",
  "Emplaye",
  "Envases",
  "Impresión a medida",
  "Aditivo biodegradable",
];

export default function Marquee() {
  const row = [...items, ...items];

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            <span className={styles.text}>{item}</span>
            <Hexagon size={12} className={styles.icon} />
          </span>
        ))}
      </div>
    </div>
  );
}

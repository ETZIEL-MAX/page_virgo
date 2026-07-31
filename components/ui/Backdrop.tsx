import styles from "./Backdrop.module.css";

export default function Backdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.glowLeft} />
      <div className={styles.ring} />
      <div className={styles.gear} />
    </div>
  );
}

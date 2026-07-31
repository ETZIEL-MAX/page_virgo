import { Factory, Cog, Users, ShieldCheck, Package, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./Capabilities.module.css";

const capabilities = [
  {
    icon: Factory,
    title: "Instalaciones adecuadas",
    text: "Planta productiva equipada para fabricar tu producto con la mejor calidad.",
  },
  {
    icon: Cog,
    title: "Producción de polietileno",
    text: "Especialistas en extrusión de alta y baja densidad, con opciones con fuelle.",
  },
  {
    icon: Wrench,
    title: "Impresión profesional",
    text: "Estándar profesional de diseño usado por los mejores productores de México.",
  },
  {
    icon: Package,
    title: "Emplaye y envases",
    text: "Línea completa de emplaye en distintos calibres, envases y contenedores.",
  },
  {
    icon: Users,
    title: "Equipo capacitado",
    text: "Un equipo altamente capacitado y motivado dispuesto a ofrecer soluciones efectivas.",
  },
  {
    icon: ShieldCheck,
    title: "Control de calidad",
    text: "Verificación constante para cumplir los más altos niveles de calidad en cada entrega.",
  },
];

export default function Capabilities() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.headRow}>
          <p className={`${styles.index} mono`}>/ Capacidades</p>
          <p className={`${styles.headEyebrow} mono`}>Instalaciones y equipo</p>
        </Reveal>
        <Reveal>
          <h2 className={styles.title}>
            Infraestructura para <span className="text-accent">fabricar a la altura</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <Reveal key={capability.title} delay={(index % 2) * 0.08} className={styles.item}>
                <article className={styles.card}>
                  <span className={`${styles.num} mono`}>{String(index + 1).padStart(2, "0")}</span>
                  <div className={styles.icon}>
                    <IconComponent size={26} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className={styles.cardTitle}>{capability.title}</h3>
                  <p className={styles.text}>{capability.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

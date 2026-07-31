import { Ruler, Palette, TrendingDown, Leaf } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./Offers.module.css";

const offers = [
  {
    icon: Ruler,
    title: "Escoge la medida",
    text: "Todos nuestros productos pueden ser diseñados a la medida que el cliente requiera. Dimensiones exactas para tu uso y presentación.",
  },
  {
    icon: Palette,
    title: "Promociona tu marca",
    text: "Personaliza las bolsas de tu empresa con tu logotipo, en todos los colores que requieras, con la más alta calidad de impresión.",
  },
  {
    icon: TrendingDown,
    title: "Ahorra en mayoreo",
    text: "Aprovecha los precios que tenemos para nuestros clientes selectos al hacer pedidos en gran escala.",
  },
  {
    icon: Leaf,
    title: "Medio ambiente",
    text: "Contamos con uno de los mejores aditivos biodegradables existentes en el continente para empaques responsables.",
  },
];

export default function Offers() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.headRow}>
          <div>
            <p className={`${styles.eyebrow} mono`}>
              <span className={styles.dot} aria-hidden="true" />
              Somos fabricantes
            </p>
            <h2 className={styles.heading}>Personaliza cada detalle de tu empaque</h2>
          </div>
          <p className={styles.intro}>
            Desde la medida hasta la impresión, fabricamos tu producto como lo necesitas. Sin
            intermediarios y con estándares profesionales.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <Reveal key={offer.title} delay={(index % 2) * 0.08} className={styles.item}>
                <article className={styles.card}>
                  <div className={styles.icon}>
                    <IconComponent size={26} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className={styles.title}>{offer.title}</h3>
                  <p className={styles.text}>{offer.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

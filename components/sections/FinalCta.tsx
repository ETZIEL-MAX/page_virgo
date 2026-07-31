import { ArrowRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal>
          <div className={styles.panel}>
            <h2 className={styles.title}>
              Listo para tu próxima cotización
            </h2>
            <p className={styles.text}>
              Cuéntanos qué necesitas y recibe una cotización a la medida en menos de 24 horas.
            </p>
            <div className={styles.actions}>
              <Button href="/contact" size="lg">
                Solicitar cotización
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href={siteConfig.phoneHref} variant="light" size="lg">
                <PhoneCall size={18} aria-hidden="true" />
                {siteConfig.phone}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

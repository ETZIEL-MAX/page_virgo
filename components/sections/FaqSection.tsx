import { MessageCircle } from "lucide-react";
import { faqs, siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import styles from "./FaqSection.module.css";

const whatsappMessage = "Hola Plásticos Virgo, tengo una pregunta sobre sus productos.";

export default function FaqSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.head}>
            <Reveal direction="right">
              <p className={`${styles.index} mono`}>/ 07</p>
              <h2 className={styles.title}>
                Preguntas <span className="text-accent">frecuentes</span>
              </h2>
              <p className={styles.sub}>
                Resolvemos las dudas más comunes de nuestros clientes. Si no encuentras la tuya,
                escríbenos.
              </p>
              <a
                href={buildWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <span className={styles.cardIcon}>
                  <MessageCircle size={22} aria-hidden="true" />
                </span>
                <span className={styles.cardText}>
                  <strong>¿Otra pregunta?</strong>
                  <span>Chatea con un asesor por WhatsApp</span>
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.08} className={styles.accColumn}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

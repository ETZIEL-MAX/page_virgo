import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/utils";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contáctanos para solicitar una cotización. Plásticos Virgo: bolsas y empaques de polietileno a medida. WhatsApp, teléfono y correo para atención personalizada.",
  path: "/contact",
});

const infoCards = [
  {
    icon: Phone,
    index: "/ 01",
    title: "Teléfono",
    lines: [siteConfig.phone],
    href: siteConfig.phoneHref,
    cta: "Llamar ahora",
  },
  {
    icon: Mail,
    index: "/ 02",
    title: "Correo",
    lines: [siteConfig.email],
    href: siteConfig.emailHref,
    cta: "Escribir correo",
  },
  {
    icon: MapPin,
    index: "/ 03",
    title: "Ubicación",
    lines: [`Norte de México`, `${siteConfig.address.locality}, ${siteConfig.address.region}`],
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`,
    cta: "Ver en Google Maps",
    external: true,
  },
];

const whatsappMessage = "Hola Plásticos Virgo, me gustaría solicitar una cotización para mi negocio.";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu próximo pedido"
        description="Escríbenos, llámanos o mándanos un WhatsApp. Te respondemos con una cotización a la medida de tu proyecto."
        crumbs={[{ label: "Contacto", href: "/contact" }]}
      />

      <section className={styles.cardsSection}>
        <Container>
          <div className={styles.infoGrid}>
            {infoCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.07} className={styles.infoItem}>
                  <a
                    href={card.href}
                    className={styles.infoCard}
                    {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className={`${styles.infoIndex} mono`} aria-hidden="true">
                      {card.index}
                    </span>
                    <div className={styles.infoIcon}>
                      <IconComponent size={24} aria-hidden="true" />
                    </div>
                    <h2 className={styles.infoTitle}>{card.title}</h2>
                    {card.lines.map((line) => (
                      <p key={line} className={styles.infoLine}>
                        {line}
                      </p>
                    ))}
                    <span className={styles.infoCta}>{card.cta}</span>
                  </a>
                </Reveal>
              );
            })}
            <Reveal delay={0.21} className={styles.infoItem}>
              <a
                href={buildWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoCard}
              >
                <span className={`${styles.infoIndex} mono`} aria-hidden="true">
                  / 04
                </span>
                <div className={`${styles.infoIcon} ${styles.whatsappIcon}`}>
                  <MessageCircle size={24} aria-hidden="true" />
                </div>
                <h2 className={styles.infoTitle}>WhatsApp</h2>
                <p className={styles.infoLine}>Respuesta rápida en horario laboral</p>
                <span className={styles.infoCta}>Abrir chat</span>
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={styles.formSection}>
        <Container>
          <div className={styles.formGrid}>
            <Reveal className={styles.formColumn}>
              <div className={styles.formPanel}>
                <h2 className={styles.formTitle}>Solicita tu cotización</h2>
                <p className={styles.formIntro}>
                  Cuéntanos qué necesitas y un asesor te contactará. Los campos marcados con * son
                  obligatorios.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal direction="left" className={styles.sideColumn}>
              <div className={styles.hoursCard}>
                <div className={styles.sideIcon}>
                  <Clock size={24} aria-hidden="true" />
                </div>
                <h2 className={styles.sideTitle}>Horario de atención</h2>
                <ul className={styles.hoursList}>
                  {siteConfig.hours.map((slot) => (
                    <li key={slot.days} className={styles.hoursRow}>
                      <span className={styles.hoursDays}>{slot.days}</span>
                      <span className={styles.hoursTime}>{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.mapCard}>
                <div className={styles.mapPlaceholder} aria-hidden="true">
                  <MapPin size={44} strokeWidth={1.4} />
                </div>
                <div className={styles.mapInfo}>
                  <h2 className={styles.sideTitle}>Nuestra ubicación</h2>
                  <p className={styles.mapText}>
                    Instalados en el norte de México, atendemos pedidos en toda la República.
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    Ver ubicación en Google Maps
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([{ name: "Inicio", href: "/" }, { name: "Contacto", href: "/contact" }])),
        }}
      />
    </>
  );
}

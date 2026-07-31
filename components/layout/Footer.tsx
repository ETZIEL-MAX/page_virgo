import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { products } from "@/lib/products";
import Logo from "./Logo";
import Container from "@/components/ui/Container";
import styles from "./Footer.module.css";

const topProducts = products.slice(0, 4);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBand}>
        <Container>
          <div className={styles.ctaInner}>
            <div>
              <p className={`${styles.ctaEyebrow} mono`}>¿Listo para producir?</p>
              <p className={styles.ctaTitle}>Pide tu cotización a la medida hoy mismo.</p>
            </div>
            <Link href="/contact" className={styles.ctaButton}>
              Solicitar cotización
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </div>

      <div className={styles.main}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Logo inverse />
              <p className={styles.description}>
                Fabricantes de polietileno de alta y baja densidad. Calidad, precio y rendimiento
                para tu negocio desde {siteConfig.foundedYear}.
              </p>
              <a href={siteConfig.phoneHref} className={styles.hotline}>
                <Phone size={18} aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>

            <div className={styles.column}>
              <p className={`${styles.title} mono`}>/ Navegación</p>
              <ul className={styles.list}>
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.link}>
                      <span className={`${styles.index} mono`}>0{index + 1}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <p className={`${styles.title} mono`}>/ Productos</p>
              <ul className={styles.list}>
                {topProducts.map((product) => (
                  <li key={product.id}>
                    <Link href={`/products#${product.id}`} className={styles.link}>
                      <span className={styles.bullet} aria-hidden="true" />
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <p className={`${styles.title} mono`}>/ Contacto</p>
              <ul className={styles.contactList}>
                <li>
                  <a href={siteConfig.emailHref} className={styles.link}>
                    <Mail size={15} aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={siteConfig.phoneHref} className={styles.link}>
                    <Phone size={15} aria-hidden="true" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li className={styles.linkRow}>
                  <MapPin size={15} aria-hidden="true" />
                  {siteConfig.address.full}
                </li>
                <li className={styles.linkRow}>
                  <Clock size={15} aria-hidden="true" />
                  Lun–Vie 8:00–18:00 / Sáb 8:00–14:00
                </li>
                {siteConfig.rfc && (
                  <li className={styles.linkRow}>
                    <span className={styles.rfc}>RFC: {siteConfig.rfc}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className={styles.watermark} aria-hidden="true">
            VIRGO
          </div>

          <div className={styles.bottom}>
            <p className={styles.copy}>
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <p className={styles.made}>
              Calidad, precio y rendimiento — la mejor opción de México.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

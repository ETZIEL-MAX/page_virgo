import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Backdrop from "@/components/ui/Backdrop";
import styles from "./PageHero.module.css";

type Crumb = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, description, crumbs = [] }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Backdrop />
      <div className={styles.watermarkWrap}>
        <div className={styles.watermark} aria-hidden="true">
          {eyebrow}
        </div>
      </div>
      <Container>
        {crumbs.length > 0 ? (
          <nav aria-label="Migas de pan" className={`${styles.crumbs} mono`}>
            <Link href="/" className={styles.crumbLink}>
              Inicio
            </Link>
            {crumbs.map((crumb, index) => (
              <span key={crumb.href} className={styles.crumbGroup}>
                <ChevronRight size={13} aria-hidden="true" />
                {index === crumbs.length - 1 ? (
                  <span aria-current="page" className={styles.crumbCurrent}>
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className={styles.crumbLink}>
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        <p className={`${styles.eyebrow} mono`}>
          <span className={styles.dot} aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className="mono">2006</span>
            <p>Fundación</p>
          </div>
          <div className={styles.metric}>
            <span className="mono">20+</span>
            <p>Años de experiencia</p>
          </div>
          <div className={styles.metric}>
            <span className="mono">MX</span>
            <p>Fabricación nacional</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

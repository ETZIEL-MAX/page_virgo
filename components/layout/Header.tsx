"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          if (current > lastScrollY.current && current > 80) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          setSolid(current > 60);
          lastScrollY.current = current;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${hidden ? styles.headerHidden : ""} ${solid ? styles.headerSolid : ""}`}>
      <div className={styles.bar}>
        <div className={styles.inner}>
          <Link href="/" aria-label="Plásticos Virgo — Inicio" onClick={() => setMenuOpen(false)}>
            <Logo inverse />
          </Link>

          <nav className={styles.nav} aria-label="Navegación principal">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                <span className={styles.linkIndex}>0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href={siteConfig.phoneHref} className={styles.phone}>
              <Phone size={15} aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>
            <Button href="/contact" size="sm" className={styles.cta}>
              Cotizar
              <ArrowUpRight size={15} aria-hidden="true" />
            </Button>
            <button
              type="button"
              className={styles.burger}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <nav className={styles.mobileNav} aria-label="Navegación móvil">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index + 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={styles.mobileLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.mobileIndex}>0{index + 1}</span>
                    {item.label}
                    <ArrowUpRight size={22} className={styles.mobileArrow} aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className={styles.mobileCta}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.4 }}
            >
              <Button href="/contact" size="lg" onClick={() => setMenuOpen(false)}>
                Solicitar cotización
                <ArrowUpRight size={18} aria-hidden="true" />
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

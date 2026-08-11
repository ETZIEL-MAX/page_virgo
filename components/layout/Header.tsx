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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
    <header className={`${styles.header} ${hidden && !menuOpen ? styles.headerHidden : ""} ${solid ? styles.headerSolid : ""}`}>
      <div className={styles.bar}>
        <div className={styles.inner}>
          <Link
            href="/"
            aria-label="Plásticos Virgo — Inicio"
            onClick={() => setMenuOpen(false)}
            className={styles.logoLink}
          >
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
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
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

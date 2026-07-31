"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/utils";
import styles from "./ContactForm.module.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  product: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const buildMessage = () =>
    `Solicitud de cotización\n\nNombre: ${form.name}\nCorreo: ${form.email}${
      form.phone ? `\nTeléfono: ${form.phone}` : ""
    }\nProducto de interés: ${form.product || "No especificado"}\nMensaje: ${form.message}`;

  const validate = (): boolean => {
    if (!form.name.trim()) {
      setError("Por favor ingresa tu nombre.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Por favor ingresa un correo electrónico válido.");
      return false;
    }
    if (!form.message.trim()) {
      setError("Por favor describe lo que necesitas.");
      return false;
    }
    return true;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Cotización | ${form.name}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}>
          <CheckCircle2 size={40} aria-hidden="true" />
        </div>
        <h3 className={styles.successTitle}>¡Gracias por escribirnos!</h3>
        <p className={styles.successText}>
          Tu correo se abrió con tu mensaje listo para enviar. También puedes contactarnos directo
          por WhatsApp.
        </p>
        <a
          href={buildWhatsAppLink(siteConfig.whatsapp, buildMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.successButton}
        >
          <MessageCircle size={18} aria-hidden="true" />
          Enviar por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Nombre completo *
          </label>
          <input
            id="name"
            type="text"
            className={styles.input}
            value={form.name}
            onChange={(event) => update("name")(event.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Correo electrónico *
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            value={form.email}
            onChange={(event) => update("email")(event.target.value)}
            placeholder="tucorreo@empresa.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            className={styles.input}
            value={form.phone}
            onChange={(event) => update("phone")(event.target.value)}
            placeholder="+52 ..."
            autoComplete="tel"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="product">
            Producto de interés
          </label>
          <select
            id="product"
            className={styles.input}
            value={form.product}
            onChange={(event) => update("product")(event.target.value)}
          >
            <option value="">Selecciona un producto</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
            <option value="Otro">Otro / No estoy seguro</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Mensaje *
        </label>
        <textarea
          id="message"
          className={`${styles.input} ${styles.textarea}`}
          value={form.message}
          onChange={(event) => update("message")(event.target.value)}
          placeholder="Cuéntanos qué necesitas: medidas, cantidades, impresión..."
          rows={5}
          required
        />
      </div>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className={styles.submit}>
        <Send size={18} aria-hidden="true" />
        Enviar solicitud de cotización
      </button>
    </form>
  );
}

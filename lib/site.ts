import type { Feature, FaqItem, NavItem, Stat, Value } from "@/types";

export const siteConfig = {
  name: "Plásticos Virgo",
  legalName: "Plásticos Virgo",
  rfc: "",
  domain: "plasticosvirgo.com",
  url: "https://plasticosvirgo.com",
  foundedYear: 2006,
  region: "Norte de México",
  tagline:
    "Fabricantes de polietileno de alta y baja densidad con los más altos estándares de calidad.",
  description:
    "Plásticos Virgo es una empresa fabricante de bolsas y productos de polietileno con 20 años de experiencia. Alta y baja densidad, bolsas ziploc, para hielo, camiseta, emplaye, envases e impresión a medida. Atención personalizada y precios competitivos en el norte de México.",
  phone: "818 012 7981",
  phoneClean: "8180127981",
  phoneDisplay: "818 012 7981",
  phoneHref: "tel:+528180127981",
  whatsapp: "5218180127981",
  email: "ventas@plasticosvirgo.com",
  emailHref: "mailto:ventas@plasticosvirgo.com",
  address: {
    street: "Isidoro Sepúlveda #790",
    neighborhood: "Parque Industrial Apodaca",
    locality: "Apodaca",
    region: "Nuevo León",
    country: "México",
    full: "Isidoro Sepúlveda #790, Parque Industrial Apodaca, Apodaca, Nuevo León, México",
  },
  hours: [{ days: "Lunes a Viernes", hours: "9:00 am – 6:00 pm" }],
  mapsQuery: "Isidoro Sepúlveda 790, Parque Industrial Apodaca, Nuevo León",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61588715083254",
    instagram: "https://www.instagram.com/plasticosvirgo",
  },
} as const;

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/about" },
  { label: "Productos", href: "/products" },
  { label: "Manufactura a medida", href: "/custom-manufacturing" },
  { label: "Contacto", href: "/contact" },
];

export const stats: Stat[] = [
  { value: 20, suffix: "", label: "Años de experiencia" },
  { value: 2006, suffix: "", label: "Desde el año" },
];

export const features: Feature[] = [
  {
    title: "Fabricantes directos",
    description:
      "Sin intermediarios. Producimos tu empaque en nuestra planta con materiales de primera y precios competitivos, especialmente en mayoreo.",
    icon: "Factory",
  },
  {
    title: "20 años de experiencia",
    description:
      "Desde 2006 perfeccionamos la fabricación de polietileno de alta y baja densidad. Tu producto está en manos expertas.",
    icon: "Award",
  },
  {
    title: "Precios competitivos",
    description:
      "Al eliminar intermediarios trasladamos el ahorro a tu negocio. Aprovecha precios especiales para clientes selectos en pedidos de gran escala.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Atención personalizada",
    description:
      "Un equipo altamente capacitado te asesora en cada etapa: diseño, materiales, impresión y volumen.",
    icon: "Headphones",
  },
];

export const values: Value[] = [
  {
    title: "Calidad",
    description:
      "Fabricamos con los estándares profesionales que usan los mejores productores de México.",
    icon: "Gem",
  },
  {
    title: "Compromiso",
    description:
      "Cumplimos lo que prometemos: tiempos, medidas y acabados exactos en cada pedido.",
    icon: "Handshake",
  },
  {
    title: "Confianza",
    description:
      "Valoramos la confianza de nuestros clientes y trabajamos día a día para mantenerla.",
    icon: "ShieldCheck",
  },
  {
    title: "Medio ambiente",
    description:
      "Impulsamos aditivos biodegradables y prácticas responsables en nuestros procesos.",
    icon: "Leaf",
  },
  {
    title: "Innovación",
    description:
      "Mejoramos continuamente procesos y materiales para ofrecer soluciones eficientes.",
    icon: "Lightbulb",
  },
];

export const sectors = [
  {
    id: "industrial",
    title: "Industrial",
    description:
      "Emplaye de alto calibre y bolsas de alta densidad para protección y logística de manufactura pesada.",
    icon: "Factory",
  },
  {
    id: "manufacturero",
    title: "Manufacturero",
    description:
      "Empaques a medida con impresión para identificación de partes y componentes en línea de producción.",
    icon: "Cog",
  },
  {
    id: "automotriz",
    title: "Automotriz",
    description:
      "Bolsas y emplaye con especificaciones técnicas precisas para la industria automotriz nacional.",
    icon: "Car",
  },
  {
    id: "comercial",
    title: "Comercial",
    description:
      "Bolsas camiseta, ziploc y de baja densidad para tiendas, retail, restaurantes y abarrotes.",
    icon: "Store",
  },
  {
    id: "alimenticio",
    title: "Alimenticio",
    description:
      "Bolsas para hielo, envases con impresión y empaques aptos para contacto con alimentos.",
    icon: "Utensils",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "¿Pueden fabricar bolsas a la medida?",
    answer:
      "Sí. Todos nuestros productos pueden diseñarse a la medida que el cliente requiera: dimensiones, calibre y presentación. Solo compártenos tus necesidades y te asesoramos sin costo.",
  },
  {
    question: "¿Cuál es el pedido mínimo?",
    answer:
      "Trabajamos con pedidos desde volumen medio hasta escalas industriales. Al ser fabricantes directos, ofrecemos precios especiales de mayoreo para pedidos de gran escala.",
  },
  {
    question: "¿Pueden imprimir mi logotipo o diseño?",
    answer:
      "Sí. Imprimimos bolsas y productos en uno o varios colores con estándares profesionales. Envíanos tu arte y lo producimos en la más alta calidad de impresión.",
  },
  {
    question: "¿Qué materiales y calibres manejan?",
    answer:
      "Manejamos polietileno de alta y baja densidad en una amplia variedad de calibres, medidas y largos, incluyendo opciones con fuelle y presentaciones especiales.",
  },
  {
    question: "¿Ofrecen productos biodegradables?",
    answer:
      "Sí. Contamos con uno de los mejores aditivos biodegradables del continente, ideales para negocios comprometidos con el medio ambiente.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Escríbenos a ventas@plasticosvirgo.com, llámanos al 818 012 7981 o usa el formulario de contacto. Te responderemos con una cotización a la medida de tu proyecto.",
  },
];

export const customProcess = [
  {
    step: "01",
    title: "Escoge la medida",
    description:
      "Todos nuestros productos pueden ser diseñados a la medida que el cliente requiera. Definimos las dimensiones exactas según el uso que le darás.",
  },
  {
    step: "02",
    title: "Promociona tu marca",
    description:
      "Personaliza las bolsas de tu empresa con tu logotipo, en todos los colores que se requiera, con la más alta calidad de impresión.",
  },
  {
    step: "03",
    title: "Ahorra en mayoreo",
    description:
      "Aprovecha los precios que tenemos para nuestros clientes selectos al hacer pedidos en gran escala.",
  },
  {
    step: "04",
    title: "Medio ambiente",
    description:
      "Contamos con uno de los mejores aditivos biodegradables existentes en el continente para empaques responsables.",
  },
];

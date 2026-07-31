import type { Product, ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  { id: "alta", label: "Alta Densidad" },
  { id: "baja", label: "Baja Densidad" },
  { id: "especiales", label: "Bolsas Especiales" },
  { id: "emplaye-envases", label: "Emplaye y Envases" },
  { id: "impresion", label: "Impresión a Medida" },
];

export const products: Product[] = [
  {
    id: "alta-densidad",
    name: "Bolsas de Alta Densidad",
    shortName: "Alta Densidad",
    categoryId: "alta",
    tagline: "Resistencia firme para el día a día",
    description:
      "Bolsas de polietileno de alta densidad en múltiples medidas, incluyendo opciones con fuelle. Ideales para empaques que requieren firmeza y acabado limpio.",
    applications: ["Tiendas de autoservicio", "Farmacias y boutiques", "Empaques de mostrador"],
    customizations: ["Varias medidas", "Con fuelle", "Impresión opcional"],
  },
  {
    id: "baja-densidad",
    name: "Bolsas de Baja Densidad",
    shortName: "Baja Densidad",
    categoryId: "baja",
    tagline: "Flexibilidad y suavidad superior",
    description:
      "Bolsas de polietileno de baja densidad con gran flexibilidad, ideales para productos frágiles o de gran volumen. Variedad de medidas y calibres adaptados a tus necesidades.",
    applications: ["Mercados y verdulerías", "Ropa y textiles", "Productos voluminosos"],
    customizations: ["Varias medidas", "Distintos calibres", "Impresión opcional"],
  },
  {
    id: "ziploc",
    name: "Bolsas Ziploc",
    shortName: "Ziploc",
    categoryId: "especiales",
    tagline: "Cierre hermético y reusable",
    description:
      "Bolsas tipo ziploc con cierre hermético que protege, organiza y conserva el contenido. Perfectas para uso comercial e industrial.",
    applications: ["Industria alimentaria", "Ferretería y refacciones", "Organización y retail"],
    customizations: ["Varias medidas", "Impresión en colores", "Presentación al por mayor"],
  },
  {
    id: "hielo",
    name: "Bolsas para Hielo",
    shortName: "Hielo",
    categoryId: "especiales",
    tagline: "Fabricadas para resistir el frío",
    description:
      "Bolsas para hielo con o sin impresión, fabricadas con polietileno de alta densidad que resiste la humedad y la manipulación en frío.",
    applications: ["Hieleras y purificadoras", "Supermercados", "Distribuidores de hielo"],
    customizations: ["Con o sin impresión", "Varias medidas", "Impresión de marca"],
  },
  {
    id: "camiseta",
    name: "Bolsas Camiseta",
    shortName: "Camiseta",
    categoryId: "alta",
    tagline: "Prácticas y reforzadas",
    description:
      "Bolsas camiseta con asas ergonómicas y mayor capacidad de carga. Con impresión de uno o varios colores para impulsar tu marca.",
    applications: ["Tiendas y abarrotes", "Restaurantes", "Negocios de comida para llevar"],
    customizations: ["Impresión en colores", "Varias medidas", "Calibres reforzados"],
  },
  {
    id: "emplaye",
    name: "Emplaye / Stretch Film",
    shortName: "Emplaye",
    categoryId: "emplaye-envases",
    tagline: "Protección y firmeza en tu carga",
    description:
      "Emplaye en distintos calibres, medidas y largos para asegurar, proteger y agrupar tus productos en tarimas y envíos.",
    applications: ["Logística y almacén", "Empaque industrial", "Mudanzas y bodega"],
    customizations: ["Distintos calibres", "Medidas y largos variados", "Pedidos por rollo o caja"],
  },
  {
    id: "envases",
    name: "Envases y Contenedores",
    shortName: "Envases",
    categoryId: "emplaye-envases",
    tagline: "Presentación que vende",
    description:
      "Envases y contenedores con impresión de alta calidad para dar a tu producto una presentación profesional y diferenciada.",
    applications: ["Industria alimentaria", "Cosmética y cuidado", "Productos de limpieza"],
    customizations: ["Impresión a color", "Diseño de marca", "Volúmenes a medida"],
  },
  {
    id: "impresas",
    name: "Bolsas Impresas a Medida",
    shortName: "Impresas",
    categoryId: "impresion",
    tagline: "Tu marca en cada empaque",
    description:
      "Personaliza tus bolsas con tu logotipo y diseño en uno o varios colores. Producción profesional para que cada empaque impulse tu marca.",
    applications: ["Branding y retail", "Campañas de producto", "Distribución y eventos"],
    customizations: ["Uno o varios colores", "Logotipo y arte propio", "Diseño profesional"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

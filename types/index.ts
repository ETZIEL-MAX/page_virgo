export type NavItem = {
  label: string;
  href: string;
};

export type ProductId =
  | "alta-densidad"
  | "baja-densidad"
  | "ziploc"
  | "hielo"
  | "camiseta"
  | "emplaye"
  | "emplaye-alimentario"
  | "envases"
  | "impresas"
  | "transparente";

export type Product = {
  id: ProductId;
  name: string;
  shortName: string;
  categoryId: string;
  tagline: string;
  description: string;
  applications: string[];
  customizations: string[];
};

export type ProductCategory = {
  id: string;
  label: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Value = {
  title: string;
  description: string;
  icon: string;
};

export type Sector = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataArgs = {
  title: string;
  description: string;
  path: string;
};

const defaults = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "bolsas de polietileno",
    "bolsas plásticas",
    "alta y baja densidad",
    "bolsas ziploc",
    "bolsas para hielo",
    "emplaye",
    "envases plásticos",
    "impresión en bolsas",
    "fabricantes de plástico",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  publisher: siteConfig.name,
};

export function buildMetadata({ title, description, path }: PageMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_MX",
      type: "website",
      images: [{ url: `${siteConfig.url}/og-cover.svg`, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [`${siteConfig.url}/og-cover.svg`],
    },
  };
}

export const rootMetadata: Metadata = {
  title: {
    default: defaults.defaultTitle,
    template: defaults.titleTemplate,
  },
  description: defaults.description,
  keywords: defaults.keywords,
  authors: defaults.authors,
  publisher: defaults.publisher,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: "/images/logo_sf_v3.png", type: "image/png" }],
    shortcut: ["/images/logo_sf_v3.png"],
    apple: ["/images/logo_sf_v3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: defaults.defaultTitle,
    description: defaults.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_MX",
    type: "website",
    images: [{ url: `${siteConfig.url}/og-cover.svg`, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaults.defaultTitle,
    description: defaults.description,
    images: [`${siteConfig.url}/og-cover.svg`],
  },
};

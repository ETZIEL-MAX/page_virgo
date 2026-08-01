import type { ImageLoaderProps } from "next/image";

const basePath = "/plasticosvirgo";

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  const url = src.startsWith("/") ? `${basePath}${src}` : src;
  const params = new URLSearchParams();
  params.set("url", url);
  params.set("w", String(width));
  params.set("q", quality ? String(quality) : "75");
  return `${basePath}/_next/image?${params.toString()}`;
}

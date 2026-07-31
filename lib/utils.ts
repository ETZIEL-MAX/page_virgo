export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatWhatsAppNumber(phone: string): string {
  return phone.replace(/[^\d]/g, "");
}

export function buildWhatsAppLink(phone: string, message: string): string {
  return `https://wa.me/${formatWhatsAppNumber(phone)}?text=${encodeURIComponent(message)}`;
}

export function yearSince(start: number): number {
  return new Date().getFullYear() - start;
}

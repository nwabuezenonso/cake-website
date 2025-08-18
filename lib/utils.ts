import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function generateWhatsAppUrl(
  phoneNumber: string,
  cakeName: string,
  price: number,
  businessName: string
): string {
  const message = `Hi ${businessName}, I'm interested in the ${cakeName} (${formatPrice(
    price
  )}). Is it available for order?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

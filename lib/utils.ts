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
  businessName: string,
  cakeName?: string,
  size?: { label?: string; serves?: string; price?: number } | null,
  flavor?: { name?: string; emoji?: string } | string | null,
  extras: { label?: string; icon?: string }[] = [],
  addOns: { label?: string; icon?: string }[] = [],
  totalPrice?: number | string | null
): string {
  const lines: string[] = [];

  // Cake
  if (cakeName) {
    lines.push(`🍰 Cake: ${cakeName}`);
  }

  // Size
  if (size && size.label) {
    lines.push(`📏 Size: ${size.label}${size.serves ? ` (Serves ${size.serves})` : ""}`);
  }

  // Flavor (support string or object)
  if (flavor) {
    if (typeof flavor === "string") {
      lines.push(`🎂 Flavor: ${flavor}`);
    } else if (flavor.name) {
      lines.push(`🎂 Flavor: ${flavor.emoji ?? ""} ${flavor.name}`);
    }
  }

  // Extras
  if (Array.isArray(extras) && extras.length > 0) {
    const extraLines = extras.filter((e) => e && e.label).map((e) => `${e.icon ?? ""} ${e.label}`);
    if (extraLines.length > 0) {
      lines.push(`✨ Extras:\n${extraLines.join("\n")}`);
    }
  }

  // Add-ons
  if (Array.isArray(addOns) && addOns.length > 0) {
    const addOnLines = addOns.filter((a) => a && a.label).map((a) => `${a.icon ?? ""} ${a.label}`);
    if (addOnLines.length > 0) {
      lines.push(`➕ Add-ons:\n${addOnLines.join("\n")}`);
    }
  }

  // Total
  if (totalPrice !== undefined && totalPrice !== null && totalPrice !== "") {
    lines.push(`\n💰 Total Price: ${totalPrice}`);
  }

  const message = `Hello ${businessName} 👋,\nI'd like to place an order for the following cake:\n\n${lines.join(
    "\n"
  )}\n\nPlease confirm availability.\nThank you!`;

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

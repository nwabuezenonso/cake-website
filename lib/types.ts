export interface Cake {
  id?: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  size?: string;
  extra?: string;
  createdAt: string;
  featured?: boolean;
}

export interface BusinessSettings {
  name: string;
  whatsappNumber: string;
  description: string;
}

export type Category = "all" | "birthday" | "wedding" | "kids" | "cupcakes" | "custom";

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: "all", label: "All Cakes" },
  { value: "birthday", label: "Birthday" },
  { value: "wedding", label: "Wedding" },
  { value: "kids", label: "Kids" },
  { value: "cupcakes", label: "Cupcakes" },
  { value: "custom", label: "Custom" },
];

import { Cake, BusinessSettings } from "./types";

export const businessSettings: BusinessSettings = {
  name: "Sweet Dreams Bakery",
  whatsappNumber: "2348123456789", // Format: country code + number (no +)
  description: "Creating beautiful, delicious cakes for your special moments",
};

// Sample cake data (in production, this would come from a database)
export const sampleCakes: Cake[] = [
  {
    id: "1",
    slug: "chocolate-birthday-cake",
    name: "Chocolate Birthday Cake",
    description:
      "Rich chocolate cake with buttercream frosting, perfect for birthday celebrations.",
    price: 15000,
    category: "birthday",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    createdAt: "2025-01-01",
    featured: true,
  },
  {
    id: "2",
    slug: "elegant-wedding-cake",
    name: "Elegant Wedding Cake",
    description: "Three-tier vanilla and strawberry cake with delicate sugar flowers.",
    price: 75000,
    category: "wedding",
    imageUrl: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500",
    createdAt: "2025-01-02",
    featured: true,
  },
  {
    id: "3",
    slug: "unicorn-kids-cake",
    name: "Unicorn Kids Cake",
    description: "Colorful unicorn-themed cake that will make any child's day magical.",
    price: 20000,
    category: "kids",
    imageUrl: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=500",
    createdAt: "2025-01-03",
  },
  {
    id: "4",
    slug: "red-velvet-cupcakes",
    name: "Red Velvet Cupcakes",
    description: "Set of 12 red velvet cupcakes with cream cheese frosting.",
    price: 8000,
    category: "cupcakes",
    imageUrl: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500",
    createdAt: "2025-01-04",
  },
  {
    id: "5",
    slug: "custom-anniversary-cake",
    name: "Custom Anniversary Cake",
    description: "Personalized cake design for your special anniversary celebration.",
    price: 35000,
    category: "custom",
    imageUrl: "https://images.unsplash.com/photo-1540337706094-da10342c93d8?w=500",
    createdAt: "2025-01-05",
  },
  {
    id: "6",
    slug: "vanilla-birthday-delight",
    name: "Vanilla Birthday Delight",
    description: "Classic vanilla cake with rainbow sprinkles and vanilla buttercream.",
    price: 12000,
    category: "birthday",
    imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500",
    createdAt: "2025-01-06",
  },
];

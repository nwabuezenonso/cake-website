import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { businessSettings } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${businessSettings.name} - Premium Cake Gallery`,
  description: businessSettings.description,
  keywords: "cakes, birthday cakes, wedding cakes, custom cakes, Nigeria, Port Harcourt",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}

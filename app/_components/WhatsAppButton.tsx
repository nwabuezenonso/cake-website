"use client";

import { MessageCircle } from "lucide-react";
import { BusinessSettings } from "@/lib/types";
import { generateWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  cake?: any;
  businessSettings: BusinessSettings;
  className?: string;
}

export default function WhatsAppButton({ cake, businessSettings, className }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const whatsappUrl = generateWhatsAppUrl(
      businessSettings.whatsappNumber,
      businessSettings.name,
      cake.name,
      cake.size,
      cake.flavor,
      cake.extras,
      cake.addons,
      cake.totalPrice
    );
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={cn(
        "flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl",
        className
      )}
    >
      <MessageCircle className="h-5 w-5" />
      Order via WhatsApp
    </button>
  );
}

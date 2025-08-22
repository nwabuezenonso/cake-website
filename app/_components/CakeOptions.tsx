"use client";

import { useState, useMemo } from "react";
import { formatPrice } from "@/lib/utils";
import WhatsAppButton from "@/app/_components/WhatsAppButton";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Sparkles, Check, Gift, Zap, Heart, Crown } from "lucide-react";

const sizeOptions = [
  {
    label: 'Small (6")',
    value: "small",
    price: 0,
    serves: "2-4 people",
    description: "Perfect for intimate celebrations",
    popular: false,
  },
  {
    label: 'Medium (8")',
    value: "medium",
    price: 2000,
    serves: "6-8 people",
    description: "Great for small parties",
    popular: true,
  },
  {
    label: 'Large (10")',
    value: "large",
    price: 4000,
    serves: "10-12 people",
    description: "Ideal for celebrations",
    popular: false,
  },
  {
    label: 'Extra Large (12")',
    value: "xlarge",
    price: 6500,
    serves: "15-20 people",
    description: "Perfect for big gatherings",
    popular: false,
  },
];

const flavorOptions = [
  { name: "Vanilla", emoji: "🤍", description: "Classic and creamy" },
  { name: "Chocolate", emoji: "🍫", description: "Rich and decadent" },
  { name: "Red Velvet", emoji: "❤️", description: "Luxurious and smooth" },
  { name: "Strawberry", emoji: "🍓", description: "Fresh and fruity" },
  { name: "Coconut", emoji: "🥥", description: "Tropical delight" },
  { name: "Lemon Zest", emoji: "🍋", description: "Citrusy and refreshing" },
  { name: "Marble (Vanilla + Chocolate)", emoji: "🎨", description: "Best of both worlds" },
];

const extraOptions = [
  {
    label: "Chocolate Drip",
    value: "drip",
    price: 500,
    icon: "🍫",
    description: "Luxurious chocolate ganache drip",
    popular: true,
  },
  {
    label: "Fresh Fruit Topping",
    value: "fruit",
    price: 1000,
    icon: "🍓",
    description: "Seasonal fresh fruits",
    popular: true,
  },
  {
    label: "Extra Cream",
    value: "cream",
    price: 500,
    icon: "🥛",
    description: "Additional whipped cream layers",
    popular: false,
  },
  {
    label: "Nuts & Sprinkles",
    value: "nuts",
    price: 700,
    icon: "✨",
    description: "Crunchy nuts and colorful sprinkles",
    popular: false,
  },
  {
    label: "Custom Message",
    value: "message",
    price: 300,
    icon: "💝",
    description: "Personalized message on cake",
    popular: true,
  },
  {
    label: "Edible Image/Photo",
    value: "photo",
    price: 1500,
    icon: "📸",
    description: "Your photo printed on edible paper",
    popular: false,
  },
];

const addOnOptions = [
  {
    label: "Cupcake Set (6pcs)",
    value: "cupcakes",
    price: 2500,
    icon: "🧁",
    description: "Matching mini cupcakes",
  },
  {
    label: "Matching Cake Pops (12pcs)",
    value: "cakepops",
    price: 4000,
    icon: "🍭",
    description: "Bite-sized cake on sticks",
  },
  {
    label: "Candle Pack",
    value: "candles",
    price: 500,
    icon: "🕯️",
    description: "Premium birthday candles",
  },
  {
    label: "Cake Topper",
    value: "topper",
    price: 1000,
    icon: "👑",
    description: "Custom decorative topper",
  },
];

export default function CakeOptions({ cake, businessSettings }: any) {
  const [size, setSize] = useState("");
  const [flavor, setFlavor] = useState("");
  const [extras, setExtras] = useState<string[]>([]);
  const [addons, setAddons] = useState<string[]>([]);

  const toggle = (val: string, list: string[], setList: any) => {
    setList(list.includes(val) ? list.filter((x) => x !== val) : [...list, val]);
  };

  const totalPrice = useMemo(() => {
    let total = cake.price;
    total += sizeOptions.find((s) => s.value === size)?.price || 0;
    total += extras.reduce(
      (sum, e) => sum + (extraOptions.find((x) => x.value === e)?.price || 0),
      0
    );
    total += addons.reduce(
      (sum, a) => sum + (addOnOptions.find((x) => x.value === a)?.price || 0),
      0
    );
    return total;
  }, [cake.price, size, extras, addons]);

  const savings = useMemo(() => {
    const regularPrice = cake.price + 1000; // Simulate savings
    return regularPrice - totalPrice;
  }, [cake.price, totalPrice]);

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border-rose-200"
          >
            <Crown className="w-3 h-3 mr-1" />
            {cake.category}
          </Badge>
          <Badge variant="outline" className="text-green-700 border-green-200">
            <Clock className="w-3 h-3 mr-1" />
            24-48hrs delivery
          </Badge>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{cake.name}</h1>

        <p className="text-gray-600 text-base leading-relaxed">{cake.description}</p>

        {/* Rating and Social Proof */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium text-gray-900">4.9</span>
            <span className="text-gray-500 text-sm">(247 reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <Heart className="w-4 h-4" />
            <span>932 people loved this</span>
          </div>
        </div>
      </div>

      {/* Enhanced Pricing Section */}
      <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-6 border border-rose-100">
        <div className="flex items-center justify-between mb-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gray-900">{formatPrice(totalPrice)}</span>
              {savings > 0 && (
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Save {formatPrice(savings)}
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-600">Final price with all customizations</p>
          </div>
          <div className="text-right">
            <Badge variant="outline" className="bg-white">
              <Sparkles className="w-3 h-3 mr-1" />
              Made to Order
            </Badge>
          </div>
        </div>
      </div>

      {/* Enhanced Size Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Label className="text-lg font-semibold">Choose Size</Label>
          <Badge variant="secondary" className="text-xs">
            Required
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sizeOptions.map((sizeOption) => (
            <div
              key={sizeOption.value}
              className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                size === sizeOption.value
                  ? "border-rose-500 bg-rose-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSize(sizeOption.value)}
            >
              {sizeOption.popular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  Popular
                </Badge>
              )}

              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{sizeOption.label}</h3>
                <span className="text-lg font-bold text-rose-600">
                  {sizeOption.price > 0 ? `+${formatPrice(sizeOption.price)}` : "Base price"}
                </span>
              </div>

              <div className="space-y-1 text-sm text-gray-600">
                <p>Serves {sizeOption.serves}</p>
                <p className="text-xs">{sizeOption.description}</p>
              </div>

              {size === sizeOption.value && (
                <div className="absolute top-3 right-3">
                  <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Flavor Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Label className="text-lg font-semibold">Choose Flavor</Label>
          <Badge variant="secondary" className="text-xs">
            Required
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {flavorOptions.map((flavorOption) => (
            <div
              key={flavorOption.name}
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                flavor === flavorOption.name
                  ? "border-rose-500 bg-rose-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setFlavor(flavorOption.name)}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{flavorOption.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{flavorOption.name}</h3>
                  <p className="text-sm text-gray-600">{flavorOption.description}</p>
                </div>
                {flavor === flavorOption.name && (
                  <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Extra Options */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Label className="text-lg font-semibold">Extra Options</Label>
          <Badge variant="outline" className="text-xs">
            Optional
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {extraOptions.map((extra) => (
            <div
              key={extra.value}
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md relative ${
                extras.includes(extra.value)
                  ? "border-rose-500 bg-rose-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => toggle(extra.value, extras, setExtras)}
            >
              {extra.popular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                  Popular
                </Badge>
              )}

              <div className="flex items-start gap-3">
                <Checkbox
                  checked={extras.includes(extra.value)}
                  className="mt-1"
                  onChange={() => {}} // Handled by parent click
                />
                <span className="text-xl">{extra.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{extra.label}</h3>
                    <span className="font-bold text-rose-600">+{formatPrice(extra.price)}</span>
                  </div>
                  <p className="text-sm text-gray-600">{extra.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Add-ons */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Label className="text-lg font-semibold">Add-ons</Label>
          <Badge variant="outline" className="text-xs">
            Optional
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {addOnOptions.map((addon) => (
            <div
              key={addon.value}
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                addons.includes(addon.value)
                  ? "border-rose-500 bg-rose-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => toggle(addon.value, addons, setAddons)}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={addons.includes(addon.value)}
                  className="mt-1"
                  onChange={() => {}} // Handled by parent click
                />
                <span className="text-xl">{addon.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{addon.label}</h3>
                    <span className="font-bold text-rose-600">+{formatPrice(addon.price)}</span>
                  </div>
                  <p className="text-sm text-gray-600">{addon.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5 text-rose-500" />
          Order Summary
        </h3>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Base {cake.name}</span>
            <span>{formatPrice(cake.price)}</span>
          </div>

          {size && (
            <div className="flex justify-between">
              <span>Size: {sizeOptions.find((s) => s.value === size)?.label}</span>
              <span>+{formatPrice(sizeOptions.find((s) => s.value === size)?.price || 0)}</span>
            </div>
          )}

          {flavor && (
            <div className="flex justify-between">
              <span>Flavor: {flavor}</span>
              <span>Included</span>
            </div>
          )}

          {extras.map((extra) => {
            const extraOption = extraOptions.find((e) => e.value === extra);
            return extraOption ? (
              <div key={extra} className="flex justify-between">
                <span>{extraOption.label}</span>
                <span>+{formatPrice(extraOption.price)}</span>
              </div>
            ) : null;
          })}

          {addons.map((addon) => {
            const addonOption = addOnOptions.find((a) => a.value === addon);
            return addonOption ? (
              <div key={addon} className="flex justify-between">
                <span>{addonOption.label}</span>
                <span>+{formatPrice(addonOption.price)}</span>
              </div>
            ) : null;
          })}

          <div className="border-t pt-2 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-rose-600">{formatPrice(totalPrice)}</span>
          </div>
        </div>
      </div>

      {/* Enhanced Order Button */}
      <div className="space-y-4">
        <WhatsAppButton
          cake={{ ...cake, size, flavor, extras, addons, totalPrice }}
          businessSettings={businessSettings}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-lg py-4"
        />

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            Click above to start your WhatsApp order with all selections pre-filled
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Instant response
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3" />
              Secure ordering
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              24-48hr delivery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

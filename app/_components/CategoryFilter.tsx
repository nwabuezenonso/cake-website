"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  currentCategory: string;
}

export default function CategoryFilter({ currentCategory }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap md gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleCategoryChange(cat.value)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            currentCategory === cat.value
              ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

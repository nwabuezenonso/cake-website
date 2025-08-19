import { sampleCakes } from "@/lib/data";
import CakeCard from "./CakeCard";

import Link from "next/link";
import { Cake } from "lucide-react";

interface CakeGridProps {
  category: string;
  search: string;
}

export default function CakeGrid({ category, search }: CakeGridProps) {
  let filteredCakes = sampleCakes;

  // Filter by category
  if (category && category !== "all") {
    filteredCakes = filteredCakes.filter((cake) => cake.category === category);
  }

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredCakes = filteredCakes.filter(
      (cake) =>
        cake.name.toLowerCase().includes(searchLower) ||
        cake.description.toLowerCase().includes(searchLower)
    );
  }

  if (filteredCakes.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
            <Cake className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No cakes found</h3>
          <p className="text-gray-600 mb-6">
            {search
              ? `No cakes match "${search}". Try a different search term.`
              : `No cakes found in the ${category} category.`}
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            View All Cakes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      {/* Heading */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          {category === "all"
            ? "All Cakes"
            : `${category.charAt(0).toUpperCase()}${category.slice(1)} Cakes`}
          <span className="text-gray-500 font-normal ml-2">
            ({filteredCakes.length} {filteredCakes.length === 1 ? "cake" : "cakes"})
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {filteredCakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </div>
    </section>
  );
}

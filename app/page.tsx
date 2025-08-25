"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CakeGrid from "./_components/CakeGrid";
import CategoryFilter from "./_components/CategoryFilter";
import SearchBar from "./_components/SearchBar";
import { businessSettings } from "@/lib/data";
import {
  Cake,
} from "lucide-react";

// Skeleton for loading
function CakeGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="w-full h-64 bg-gray-200" />
          <div className="p-4">
            <div className="h-4 bg-gray-200 rounded mb-2" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Client wrapper for search params logic
function CakeGridWithFilters() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";

  return (
    <>
  <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
  <div className="container px-4 py-4 max-w-5xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
      {/* Search on top for mobile */}
      <div className="w-full max-w-sm order-1 md:order-none">
        <SearchBar currentSearch={search} />
      </div>
      {/* Categories below search on mobile, inline center on desktop */}
      <div className="flex-1 flex justify-center md:justify-start order-2 md:order-none">
        <CategoryFilter currentCategory={category} />
      </div>

    </div>

  </div>
</section>


      <main className="container py-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {category === "all"
              ? "Our Complete Collection"
              : `${category.charAt(0).toUpperCase() + category.slice(1)} Cakes`}
          </h2>
          {search && (
            <p className="text-lg text-gray-600">
              Showing results for{" "}
              <span className="font-semibold text-rose-600">&quot;{search}&quot;</span>
            </p>
          )}
        </div>

        <Suspense
          fallback={
            <div className="space-y-8">
              <CakeGridSkeleton />
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-gray-500">
                  <div className="w-4 h-4 border-2 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
                  <span>Loading delicious cakes...</span>
                </div>
              </div>
            </div>
          }
        >
          <CakeGrid category={category} search={search} />
        </Suspense>
      </main>
    </>
  );
}

// Main Page
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-pink-50 to-orange-100"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full blur-3xl"></div>

        <div className="relative container py-12 lg:py-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <Cake className="h-12 w-12 text-rose-500 drop-shadow-sm hidden sm:block" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
                {businessSettings.name}
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed font-light">
              {businessSettings.description}
            </p>
          </div>
        </div>
      </header>

      {/* Filters + Cake Grid */}
      <Suspense fallback={<CakeGridSkeleton />}>
        <CakeGridWithFilters />
      </Suspense>

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-500 to-orange-500">
        {/* ... your contact section and footer ... */}
      </section>
    </div>
  );
}

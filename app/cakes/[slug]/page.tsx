"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, Star } from "lucide-react";
import { sampleCakes, businessSettings } from "@/lib/data";
import CakeOptions from "@/app/_components/CakeOptions";

import { useParams } from "next/navigation";

// ❌ These two can't live in a client component, so remove them
// export async function generateMetadata() {}
// export async function generateStaticParams() {}

export default function CakePage() {
  const { slug } = useParams();

  const cake = sampleCakes.find((c) => c.slug === slug);

  if (!cake) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="container px-6 md:px-10 py-4">
          <div className="flex items-center justify-between">
           <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
  <Link
    href="/"
    className="inline-flex items-center gap-1 sm:gap-2 text-rose-600 hover:text-rose-700 font-medium transition-all duration-200 hover:bg-rose-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full truncate max-w-[120px] sm:max-w-none"
  >
    <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
    <span className="truncate">Back to Gallery</span>
  </Link>
  <span className="text-gray-400">/</span>
  <span className="text-gray-600 font-medium truncate max-w-[100px] sm:max-w-xs">
    {cake.name}
  </span>
</nav>


            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-6 md:px-10 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Section */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="aspect-square relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
                  <Image
                    src={cake.imageUrl}
                    alt={cake.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    priority
                  />
                  {cake.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-800">4.9</span>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="aspect-square relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  >
                    <Image
                      src={cake.imageUrl}
                      alt={`${cake.name} view ${index}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 ring-2 ring-transparent hover:ring-rose-300 transition-all duration-200 rounded-xl" />
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="mt-16 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8 px-6">
                    {["Description", "Ingredients", "Reviews", "Delivery Info"].map((tab) => (
                      <button
                        key={tab}
                        className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm transition-colors duration-200 first:text-rose-600 first:border-rose-600"
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Our {cake.name.toLowerCase()} is crafted with the finest ingredients and baked
                    fresh daily. Each cake is a perfect blend of flavor, texture, and visual appeal,
                    designed to make your special occasions truly memorable.
                  </p>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      {cake.name}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">4.9</span>
                        <span>(127 reviews)</span>
                      </div>
                      <span>•</span>
                      <span>Available for delivery</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">{cake.description}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-black/5">
                <CakeOptions cake={cake} businessSettings={businessSettings} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { Suspense } from "react";
import CakeGrid from "./_components/CakeGrid";
import CategoryFilter from "./_components/CategoryFilter";
import SearchBar from "./_components/SearchBar";
import { businessSettings } from "@/lib/data";
import {
  Cake,
  Search,
  Phone,
  Star,
  Clock,
  Sparkles,
  MessageCircle,
  Shield,
  Truck,
  Heart,
  Facebook,
  Instagram,
} from "lucide-react";

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

export default function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const category = searchParams.category || "all";
  const search = searchParams.search || "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
      {/* Enhanced Header with Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-pink-50 to-orange-100"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full blur-3xl"></div>

        <div className="relative container py-12 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo and Title */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <Cake className="h-12 w-12 text-rose-500 drop-shadow-sm" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
                {businessSettings.name}
              </h1>
            </div>

            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed font-light">
              {businessSettings.description}
            </p>

            {/* Call to Action Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-100">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-100">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">Quick Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Filters & Search */}
  <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
  <div className="container py-4">
    <div className="flex items-center justify-between gap-6">
      {/* Centered Category Filter */}
      <div className="flex-1 flex justify-center">
        <CategoryFilter currentCategory={category} />
      </div>

      {/* Search Bar stays on the right */}
      <div className="w-full max-w-sm">
        <SearchBar currentSearch={search} />
      </div>
    </div>
  </div>
</section>



      {/* Enhanced Main Content */}
      <main className="container py-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {category === "all"
              ? "Our Complete Collection"
              : `${category.charAt(0).toUpperCase() + category.slice(1)} Cakes`}
          </h2>
          {search && (
            <p className="text-lg text-gray-600">
              Showing results for <span className="font-semibold text-rose-600">"{search}"</span>
            </p>
          )}
        </div>

        {/* Cake Grid with Enhanced Loading */}
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

      {/* Enhanced Contact Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-500 to-orange-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative container py-16 lg:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Enhanced CTA */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Order Now</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Make Your
                <span className="block text-yellow-300">Sweet Dreams Reality?</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Browse our handcrafted collection and start your WhatsApp order with just one click.
                Fresh ingredients, artistic designs, unforgettable taste!
              </p>
            </div>

            {/* Enhanced Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* WhatsApp Order */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="p-3 bg-green-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold text-white">WhatsApp Order</span>
                </div>
                <p className="text-white/80 text-sm">
                  Click any cake to start your order via WhatsApp
                </p>
              </div>

              {/* Phone Contact */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="p-3 bg-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold text-white">Call Direct</span>
                </div>
                <p className="text-white/80 text-sm">Speak with our cake specialists</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">Secure Ordering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  <span className="text-sm">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  <span className="text-sm">Made with Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 relative overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative container py-12">
          <div className="text-center">
            {/* Footer Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Cake className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-semibold text-white">{businessSettings.name}</span>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200 text-sm">
                About Us
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200 text-sm">
                Our Story
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200 text-sm">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200 text-sm">
                Reviews
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
              >
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
              >
                <MessageCircle className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                &copy; 2025 {businessSettings.name}. Crafted with
                <Heart className="inline h-4 w-4 text-rose-400 mx-1" />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

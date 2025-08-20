import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WhatsAppButton from "@/app/_components/WhatsAppButton";
import { sampleCakes, businessSettings } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

interface CakePageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: CakePageProps): Promise<Metadata> {
  const cake = sampleCakes.find((c) => c.slug === params.slug);

  if (!cake) {
    return {
      title: "Cake Not Found",
    };
  }

  return {
    title: `${cake.name} - ${businessSettings.name}`,
    description: cake.description,
    openGraph: {
      title: cake.name,
      description: cake.description,
      images: [cake.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return sampleCakes.map((cake) => ({
    slug: cake.slug,
  }));
}

export default function CakePage({ params }: CakePageProps) {
  const cake = sampleCakes.find((c) => c.slug === params.slug);

  if (!cake) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="container px-6 md:px-10 py-4 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Gallery
          </Link>
        </div>
      </header>

      {/* Cake Section */}
      <main className="container px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Cake Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100">
              <Image
                src={cake.imageUrl}
                alt={cake.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Cake Details */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 capitalize">
                {cake.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {cake.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {cake.description}
              </p>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-primary-600">
                  {formatPrice(cake.price)}
                </span>
                <span className="text-sm text-gray-600 bg-gray-100 px-4 py-1 rounded-full">
                  Made to Order
                </span>
              </div>

              <WhatsAppButton
                cake={cake}
                businessSettings={businessSettings}
                className="w-full shadow-lg hover:scale-[1.02] transition-transform duration-300"
              />

              <p className="text-sm text-gray-500 mt-4 text-center">
                Click above to start your WhatsApp order with pre-filled details
              </p>
            </div>
          </div>
        </div>

        {/* Related Cakes */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCakes
              .filter((c) => c.id !== cake.id && c.category === cake.category)
              .slice(0, 3)
              .map((relatedCake) => (
                <Link
                  key={relatedCake.id}
                  href={`/cakes/${relatedCake.slug}`}
                  className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={relatedCake.imageUrl}
                      alt={relatedCake.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {relatedCake.name}
                    </h3>
                    <p className="text-primary-600 font-bold">
                      {formatPrice(relatedCake.price)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

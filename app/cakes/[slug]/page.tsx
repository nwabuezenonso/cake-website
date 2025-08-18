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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
        </div>
      </header>

      {/* Cake Details */}
      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-white shadow-lg">
              <Image src={cake.imageUrl} alt={cake.name} fill className="object-cover" priority />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4 capitalize">
                {cake.category}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{cake.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{cake.description}</p>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-primary-600">
                  {formatPrice(cake.price)}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Made to Order
                </span>
              </div>

              <WhatsAppButton cake={cake} businessSettings={businessSettings} className="w-full" />

              <p className="text-sm text-gray-500 mt-4 text-center">
                Click above to start your WhatsApp order with pre-filled details
              </p>
            </div>
          </div>
        </div>

        {/* Related Cakes */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCakes
              .filter((c) => c.id !== cake.id && c.category === cake.category)
              .slice(0, 3)
              .map((relatedCake) => (
                <Link key={relatedCake.id} href={`/cakes/${relatedCake.slug}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={relatedCake.imageUrl}
                        alt={relatedCake.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{relatedCake.name}</h3>
                      <p className="text-primary-600 font-bold">{formatPrice(relatedCake.price)}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Cake } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  return (
    <Link href={`/cakes/${cake.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={cake.imageUrl}
            alt={cake.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {cake.featured && (
            <div className="absolute top-2 left-2 bg-secondary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 capitalize">
            {cake.category}
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {cake.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{cake.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary-600">{formatPrice(cake.price)}</span>
            <span className="text-sm text-primary-600 group-hover:text-primary-700 font-medium">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

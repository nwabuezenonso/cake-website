import Image from "next/image";
import Link from "next/link";
import { Cake } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  return (
    <Link href={`/cakes/${cake.slug}`} className="group block">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform w-72 hover:-translate-y-1 py-0">
        {/* Image Section */}
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={cake.imageUrl}
            alt={cake.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Featured badge */}
          {cake.featured && (
            <Badge className="absolute top-2 left-2 text-white bg-primary">Featured</Badge>
          )}

          {/* Category badge */}
          <Badge
            variant="outline"
            className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-gray-700 capitalize"
          >
            {cake.category}
          </Badge>
        </div>

        {/* Content Section */}
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {cake.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{cake.description}</p>
        </CardContent>

        <CardFooter className="p-4">
          <div className="flex w-full items-center justify-between ">
            <span className="text-lg font-bold text-primary">{formatPrice(cake.price)}</span>
            <div className="text-sm text-primary group-hover:text-primary/80 font-medium">
              View Details →
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

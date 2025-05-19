import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="p-0 gap-5 pb-4 justify-between">
      <CardHeader className="p-0 relative">
        <Badge className="absolute top-2 left-2 z-10">{product.category.name}</Badge>
        <div className="relative">
          <img
            src={product.images[0]}
            alt={product.title}
            className="object-cover rounded-t-lg w-full aspect-square"
          />
        </div>
        <CardTitle className="px-6 pt-2 line-clamp-2">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-xl font-bold">${product.price}</p>
        <CardDescription className="line-clamp-3">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          <ShoppingCart className="size-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

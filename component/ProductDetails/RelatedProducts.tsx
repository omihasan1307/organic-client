import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  price: number;
  tags: { name: string }[];
}

interface RelatedProductsProps {
  products: Product[];
  title?: string;
  description?: string;
}

export function RelatedProducts({
  products,
  title = "Related Products",
  description,
}: RelatedProductsProps) {
  return (
    <section className="w-full py-8 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {description}
            </p>
          )}
        </div>

        <div className="grid w-full grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {products?.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-800/50 group"
            >
              <Link href={`/shop/${product?.id}`}>
                <CardHeader className="p-0">
                  <div className="relative  ">
                    <Image
                      src={product?.thumbnailUrl}
                      alt={product?.title}
                      width={500}
                      height={500}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between p-6 pt-0">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button size="sm" className="font-medium">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

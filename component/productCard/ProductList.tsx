import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";

const ProductList = ({ products }: { products: any }) => {
  return (
    <div>
      {products.map((product: any, index: number) => (
        <div key={product.id}>
          <div className="lg:flex items-center text-center lg:text-left gap-4">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-md mx-auto md:mx-0"
            />
            <div className="space-y-5">
              <p className=" text-2xl font-semibold text-baseColor mb-3">
                {product.name}
              </p>
              <p className="font-cursive text-lg font-semibold text-basicColor mb-3">
                ${product.price}
              </p>

              <p className="text-gray-700 text-sm mt-2">
                {product.description}
              </p>
              <div className="flex items-center lg:justify-start justify-center gap-5 ">
                <Button className="bg-basicColor hover:bg-basicColor/90">
                  Add to Cart
                </Button>
                <div className="p-3 border border-basicColor rounded-full">
                  <CiHeart className="text-basicColor" />
                </div>
              </div>
            </div>
          </div>

          {index !== products.length - 1 && <hr className="my-2" />}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

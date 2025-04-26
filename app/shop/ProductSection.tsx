"use client";
import Grid from "@/utils/Grid";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCardWithoutModal from "@/component/productCard/ProductCardWithoutModal";
import ProductList from "@/component/productCard/ProductList";

const ProductSection = ({ products }: { products: any }) => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between my-4">
        <Grid setIsGrid={setIsGrid} isGrid={isGrid} />
        <div className="flex items-center gap-10 text-gray-500 text-sm">
          Sort By
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort Options</SelectLabel>
                <SelectItem value="latest">Newest Arrivals</SelectItem>
                <SelectItem value="oldest">Oldest Arrivals</SelectItem>
                <SelectItem value="lowToHigh">Price: Low to High</SelectItem>
                <SelectItem value="highToLow">Price: High to Low</SelectItem>
                <SelectItem value="topRated">Top Rated</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <hr />
      <div>
        {isGrid ? (
          <div>
            <ProductCardWithoutModal products={products} />
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
};

export default ProductSection;

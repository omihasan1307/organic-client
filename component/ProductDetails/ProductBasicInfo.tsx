"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import Tags from "./Tags";

const productInfo = {
  name: "Organic Fresh Apple",
  price: 500,
  brand: "Organica",
  availability: "In Stock",
  availableStock: 20,
  sizes: ["S", "M", "L", "XL"],
  colors: ["#FF0000", "#00FF00", "#0000FF", "#000000"],
  tags: ["Organic", "Fresh", "Best Seller"],
};

const ProductBasicInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Product Name and Price */}
      <div className="space-y-2 text-left">
        <p className="text-2xl font-semibold text-baseColor">
          {productInfo.name}
        </p>
        <p className="font-cursive text-lg font-semibold text-basicColor">
          ${productInfo.price}
        </p>
      </div>

      {/* Brand & Availability */}
      <div className="flex -row items-center gap-6 text-gray-600 text-sm">
        <p>
          <span className="font-semibold">Brand:</span> {productInfo.brand}
        </p>
        <p>
          <span className="font-semibold">Availability:</span>{" "}
          {productInfo.availability}
        </p>
      </div>

      {/* Size Selection */}
      {productInfo.sizes.length > 0 && (
        <div className="space-y-2">
          <p className="font-semibold text-gray-700">Select Size:</p>
          <div className="flex gap-3 flex-wrap">
            {productInfo.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 rounded-full border text-sm font-semibold ${
                  selectedSize === size
                    ? "bg-basicColor text-white border-basicColor"
                    : "border-gray-400 text-gray-600 hover:bg-basicColor hover:text-white"
                } transition`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color Selection */}
      {productInfo.colors.length > 0 && (
        <div className="space-y-2">
          <p className="font-semibold text-gray-700">Select Color:</p>
          <div className="flex gap-3 flex-wrap">
            {productInfo.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-basicColor"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + Add to Cart + Wishlist */}
      <div className="flex flex-col sm:flex-row items-center gap-5">
        {/* Quantity Section */}
        <div className="flex items-center gap-3 border rounded-md p-2">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="w-8 h-8 rounded-full border border-basicColor text-basicColor hover:bg-basicColor hover:text-white transition"
          >
            -
          </button>
          <span className="min-w-[24px] text-center font-medium">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 rounded-full border border-basicColor text-basicColor hover:bg-basicColor hover:text-white transition"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <Button className="bg-basicColor hover:bg-basicColor/90 w-full sm:w-auto">
          Add to Cart
        </Button>

        {/* Wishlist Heart */}
        <div className="border border-basicColor p-2 rounded-full cursor-pointer text-basicColor hover:bg-basicColor hover:text-white transition duration-300">
          <CiHeart className="text-2xl" />
        </div>
      </div>

      {/* Tags */}
      {productInfo.tags.length > 0 && (
        <div>
          <Tags />
        </div>
      )}
    </div>
  );
};

export default ProductBasicInfo;

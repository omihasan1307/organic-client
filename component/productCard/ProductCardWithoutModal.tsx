"use client";
import React, { useState } from "react";
import ProductCardWithoutDialog from "./ProductCardWithoutDialog";

const ProductCardWithoutModal = ({ products }: { products: any[] }) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState<any>(1);

  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product) => (
        <div className="px-3" key={product.id}>
          <ProductCardWithoutDialog product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductCardWithoutModal;

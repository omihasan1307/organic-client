"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCardWithModal = ({ products }: { products: any[] }) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState<any>(1);

  // Next Arrow and Prev Arrow components
  const NextArrow = ({ onClick }: any) => (
    <div
      onClick={onClick}
      className="z-50 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
    >
      <ChevronRight className="w-10 h-10 p-2 rounded-full border border-baseColor bg-opacity-70 text-baseColor hover:bg-opacity-100 transition-all" />
    </div>
  );

  const PrevArrow = ({ onClick }: any) => (
    <div
      onClick={onClick}
      className="z-50 absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer"
    >
      <ChevronLeft className="w-10 h-10 p-2 rounded-full border border-baseColor bg-opacity-70 text-baseColor hover:bg-opacity-50 transition-all" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="py-16 lg:px-0 px-5 ">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="px-3" key={product.id}>
            <ProductCard
              product={product}
              onQuickView={() => {
                setSelectedProduct(product);
                setQuantity(1);
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCardWithModal;

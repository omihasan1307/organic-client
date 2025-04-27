"use client";

import Image from "next/image";
import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const productImages = [
  {
    id: 1,
    mainImage: "/product-img1.jpg",
    smallImage: "/product-img1.jpg",
  },
  {
    id: 2,
    mainImage: "/product-img1.jpg",
    smallImage: "/product-img1.jpg",
  },
  {
    id: 3,
    mainImage: "/about.png",
    smallImage: "/about.png",
  },
  {
    id: 4,
    mainImage: "/man.jpg",
    smallImage: "/man.jpg",
  },
];

const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const NextArrow = ({ onClick }: any) => (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/3 -translate-y-1/2 cursor-pointer z-10"
    >
      <ChevronRight className="w-7 h-7 p-1 rounded-full border border-gray-400 bg-white text-gray-600 hover:bg-gray-100 transition-all" />
    </div>
  );

  const PrevArrow = ({ onClick }: any) => (
    <div
      onClick={onClick}
      className="absolute left-0 top-1/3 -translate-y-1/2 cursor-pointer z-10"
    >
      <ChevronLeft className="w-7 h-7 p-1 rounded-full border border-gray-400 bg-white text-gray-600 hover:bg-gray-100 transition-all" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4">
      {/* Main Image */}

      <div className="w-full relative border rounded-md overflow-hidden">
        <InnerImageZoom
          src={selectedImage.mainImage}
          zoomSrc={selectedImage.mainImage}
          zoomType="hover"
          zoomPreload={true}
          hasSpacer={true}
          className="rounded w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="relative">
        <Slider {...settings}>
          {productImages.map((image) => (
            <div key={image.id} className="px-1">
              <div
                className={`border rounded-md p-1 cursor-pointer ${
                  selectedImage.id === image.id
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.smallImage}
                  alt="Thumbnail"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductImage;

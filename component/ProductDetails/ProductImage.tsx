"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Product Images JSON
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
    mainImage: "/product-img3.jpg",
    smallImage: "/product-img3.jpg",
  },
  {
    id: 4,
    mainImage: "/product-img1.jpg",
    smallImage: "/product-img1.jpg",
  },
];

const ProductImage = () => {
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
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4">
      {/* Main Image */}
      <div className="w-full relative border rounded-md">
        {isMobile ? (
          <Image
            src={selectedImage.mainImage}
            alt="Product"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
        ) : (
          <div className="w-full">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Product",
                  isFluidWidth: true,
                  src: selectedImage.smallImage || selectedImage.mainImage,
                  sizes: "(max-width: 768px) 100vw, 400px", // important for correct rendering
                },
                largeImage: {
                  src: selectedImage.mainImage,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "100%",
                },
                enlargedImagePosition: "beside",
                isHintEnabled: true,
                shouldUsePositiveSpaceLens: true,
              }}
            />
          </div>
        )}
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

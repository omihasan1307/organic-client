"use client";

import Image from "next/image";
import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImage = ({ images }: { images: any[] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

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
    infinite: images.length > 4,
    speed: 500,
    slidesToShow: Math.min(images.length, 4),
    slidesToScroll: 1,
    arrows: images.length > 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(images.length, 3),
          infinite: images.length > 3,
          arrows: images.length > 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(images.length, 2),
          infinite: images.length > 2,
          arrows: images.length > 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4">
      {/* Main Zoomable Image */}
      <div className="w-full relative border rounded-md overflow-hidden">
        <InnerImageZoom
          src={selectedImage?.url}
          zoomSrc={selectedImage?.url}
          zoomType="hover"
          zoomPreload={true}
          hasSpacer={true}
          className="rounded w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="relative">
        {images.length === 1 ? (
          <div className="flex justify-center">
            <div className="border rounded-md p-1 border-blue-500">
              <Image
                src={images[0]?.url}
                alt="Thumbnail"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded"
              />
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {images.map((image: any) => (
              <div key={image.id} className="px-1 w-full flex justify-center">
                <div
                  className={`border flex rounded-md p-1 cursor-pointer ${
                    selectedImage.id === image.id
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image?.url}
                    alt="Thumbnail"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded"
                  />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default ProductImage;

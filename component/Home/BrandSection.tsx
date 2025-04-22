"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Slider, { CustomArrowProps } from "react-slick";

const BrandSection = () => {
  const NextArrow = ({ onClick, ...rest }: CustomArrowProps) => {
    const { className, style, currentSlide, slideCount, ...filteredRest } =
      rest;
    return (
      <div
        {...filteredRest}
        onClick={onClick}
        className="z-50 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <ChevronRight className="w-10 h-10 p-2 rounded-full border border-baseColor bg-opacity-70 text-baseColor  hover:bg-basicColor hover:text-white hover:border-white transition-all" />
      </div>
    );
  };

  const PrevArrow = ({ onClick, ...rest }: CustomArrowProps) => {
    const { className, style, currentSlide, slideCount, ...filteredRest } =
      rest;
    return (
      <div
        {...filteredRest}
        onClick={onClick}
        className="z-50 absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <ChevronLeft className="w-10 h-10 p-2 rounded-full border border-baseColor bg-opacity-70 text-baseColor hover:bg-basicColor hover:text-white hover:border-white transition-all" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brands = [
    { src: "/lv.jpg", alt: "Louis Vuitton" },
    { src: "/DG.jpg", alt: "Dolce & Gabbana" },
    { src: "/brand.jpg", alt: "Brand" },
    { src: "/hermes.jpg", alt: "Hermes" },
    { src: "/wilson.jpg", alt: "Wilson" },
    { src: "/chanel.jpg", alt: "Chanel" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto my-16 px-4 border py-10 relative">
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="px-2 flex items-center justify-center h-24"
          >
            <div className="relative w-full h-full">
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSection;

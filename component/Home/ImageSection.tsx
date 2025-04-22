"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider, { CustomArrowProps } from "react-slick";

const ImageSection = () => {
  const NextArrow = ({ onClick, ...rest }: CustomArrowProps) => {
    const { className, style, currentSlide, slideCount, ...filteredRest } =
      rest;
    return (
      <div
        {...filteredRest}
        onClick={onClick}
        className="z-50 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <ChevronRight className="w-10 h-10 p-2 rounded-full border border-baseColor bg-opacity-70 text-baseColor hover:bg-basicColor hover:text-white hover:border-white transition-all" />
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
        className="z-50 absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <ChevronLeft className="w-10 h-10 p-2 rounded-full border border-baseColor bg-opacity-70 text-baseColor hover:bg-basicColor hover:text-white hover:border-white transition-all" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  const images = [
    { src: "/img1.jpg", alt: "img1" },
    { src: "/img2.jpg", alt: "img2" },
    { src: "/img3.jpg", alt: "img3" },
    { src: "/img4.jpg", alt: "img4" },
    { src: "/img5.jpg", alt: "img5" },
    { src: "/img6.jpg", alt: "img6" },
  ];

  return (
    <div className=" relative ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className=" relative">
            <Image
              src={image.src}
              alt={image.alt}
              height={500}
              width={500}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSection;

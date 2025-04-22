"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
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
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative ">
          <Image
            src={"/hero-img2.png"}
            alt="Hero Image 2"
            width={400}
            height={200}
            className="w-full"
          />
          <div className="absolute top-1/3 space-y-4 text-center ">
            <h1
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="text-basicColor uppercase text-6xl"
            >
              Face cleanser
            </h1>
            <h2
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="font-cursive text-5xl text-baseColor"
            >
              Mega - mushroom skin relife
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="w-2/3 mx-auto text-lg text-gray-600"
            >
              Organica we know that washing your face is the most important part
              of any skincare routine, but we all use different products to get
              the job ...
            </p>
            <Button
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              variant={"outline"}
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <Image
            src={"/hero-img1.png"}
            alt="Hero Image 1"
            width={600}
            height={200}
            className="w-full"
          />
          <div className="absolute top-1/3 space-y-4 text-center">
            <h1
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="text-basicColor uppercase text-4xl font-cursive"
            >
              Comes From Health
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="font-cursive text-6xl text-baseColor"
            >
              Rock And Glamour
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="w-2/3 mx-auto text-lg text-gray-600"
            >
              Organica we know that washing your face is the most important part
              of any skincare routine, but we all use different products to get
              the job ...
            </p>
            <Button
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              variant={"outline"}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const SalesSection = () => {
  return (
    <div className="relative">
      <Image
        src={"/sales.jpg"}
        alt="sales"
        width={400}
        height={200}
        className="w-full lg:h-full h-96"
      />
      <div className="absolute top-1/3 right-0 space-y-4 text-center lg:w-2/4">
        <h1
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="text-basicColor text-xl lg:text-3xl uppercase underline"
        >
          New Arrivals
        </h1>
        <h2
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="font-cursive text-4xl lg:text-8xl text-baseColor"
        >
          Organic
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="w-2/3 mx-auto text-sm lg:text-lg text-gray-600 "
        >
          New Arrivals Organic SALE UP TO 70% When you feel like going for a
          bold eye look, glitter will always do the trick and make you feel like
          the raddest unicorn at the party.
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
  );
};

export default SalesSection;

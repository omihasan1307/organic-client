import Image from "next/image";
import React from "react";

const SecondSection = () => {
  return (
    <div className="lg:flex items-center">
      <div className="w-full relative group overflow-hidden">
        <Image
          src={"/sec-1.png"}
          alt={"sec-1"}
          width={500}
          height={500}
          className="w-full h-full cursor-pointer transition-transform duration-500 group-hover:scale-105"
        />
        <div className="border-2 h-40 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 cursor-pointer"></div>
      </div>
      <div className="w-full relative group overflow-hidden">
        <Image
          src={"/sec-2.png"}
          alt={"sec-2"}
          width={500}
          height={500}
          className="w-full h-full cursor-pointer transition-transform duration-500 group-hover:scale-105"
        />
        <div className="border-2 h-40 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default SecondSection;

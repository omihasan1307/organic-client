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

// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { CiHeart } from "react-icons/ci";
// import { IoIosSearch } from "react-icons/io";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// const ProductCardWithModal = ({ products }: any) => {
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div className="py-16 lg:grid grid-cols-3 gap-10 px-5 lg:px-0">
//       {products.map((product: any) => (
//         <Dialog key={product.id}>
//           <div className="group relative border p-4 rounded-md cursor-pointer">
//             <div className="relative">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-auto"
//               />
//               <DialogTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className="text-xl px-6 py-2 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2
//                     opacity-0 group-hover:opacity-100 transition duration-300 bg-white text-basicColor border-basicColor hover:bg-basicColor hover:text-white"
//                   onClick={() => {
//                     setSelectedProduct(product);
//                     setQuantity(1);
//                   }}
//                 >
//                   Quick view
//                 </Button>
//               </DialogTrigger>
//             </div>

//             <div className="text-center py-4 space-y-5">
//               <h1 className="uppercase text-gray-700 text-xl">
//                 {product.name}
//               </h1>
//               <div className="space-y-2">
//                 <p className="font-cursive text-lg font-semibold text-baseColor">
//                   ${product.price}
//                 </p>
//                 <div className="flex items-center justify-center gap-5">
//                   <div className="border border-basicColor p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
//                     <CiHeart className="text-basicColor" />
//                   </div>
//                   <Button
//                     variant="outline"
//                     className="border-basicColor text-basicColor hover:bg-basicColor hover:text-white"
//                   >
//                     Add to cart
//                   </Button>
//                   <div className="border border-basicColor p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
//                     <IoIosSearch className="text-basicColor" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {selectedProduct?.id === product.id && (
//             <DialogContent className="sm:max-w-[425px] bg-white p-6">
//               <div className="grid gap-4 py-4">
//                 <div className="lg:flex items-center gap-4">
//                   <Image
//                     src={selectedProduct.image}
//                     alt={selectedProduct.name}
//                     width={200}
//                     height={200}
//                     className="rounded-md"
//                   />
//                   <div className="space-y-5">
//                     <p className=" text-2xl font-semibold text-baseColor mb-3">
//                       {selectedProduct.name}
//                     </p>
//                     <p className="font-cursive text-lg font-semibold text-basicColor mb-3">
//                       ${selectedProduct.price}
//                     </p>
//                     <Link
//                       href={selectedProduct.featuresUrl}
//                       className="text-sm underline text-gray-700"
//                     >
//                       See all features
//                     </Link>
//                     <p className="text-gray-700 text-sm mt-2">
//                       {selectedProduct.description}
//                     </p>
//                     <div className="flex items-center gap-5">
//                       <div className="flex items-center gap-3">
//                         <button
//                           onClick={() =>
//                             setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
//                           }
//                           className="w-8 h-8 rounded-full border border-basicColor text-basicColor hover:bg-basicColor hover:text-white transition"
//                         >
//                           -
//                         </button>
//                         <span className="min-w-[24px] text-center">
//                           {quantity}
//                         </span>
//                         <button
//                           onClick={() => setQuantity((prev) => prev + 1)}
//                           className="w-8 h-8 rounded-full border border-basicColor text-basicColor hover:bg-basicColor hover:text-white transition"
//                         >
//                           +
//                         </button>
//                       </div>
//                       <Button className="bg-basicColor hover:bg-basicColor/90">
//                         Add to Cart
//                       </Button>
//                       <div className="p-3 border border-basicColor rounded-full">
//                         <CiHeart className="text-basicColor" />
//                       </div>
//                     </div>
//                     <hr />
//                     <div className="flex items-center gap-5 text-gray-500">
//                       <Link
//                         href="https://facebook.com"
//                         target="_blank"
//                         className="border p-1 rounded border-baseColor"
//                       >
//                         <FaFacebookF className="text-xl hover:text-blue-600 transition" />
//                       </Link>
//                       <Link
//                         href="https://twitter.com"
//                         target="_blank"
//                         className="border p-1 rounded border-baseColor"
//                       >
//                         <FaTwitter className="text-xl hover:text-sky-500 transition" />
//                       </Link>
//                       <Link
//                         href="https://instagram.com"
//                         target="_blank"
//                         className="border p-1 rounded border-baseColor"
//                       >
//                         <FaInstagram className="text-xl hover:text-pink-500 transition" />
//                       </Link>
//                       <Link
//                         href="https://linkedin.com"
//                         target="_blank"
//                         className="border p-1 rounded border-baseColor"
//                       >
//                         <FaLinkedinIn className="text-xl hover:text-blue-700 transition" />
//                       </Link>
//                       <Link
//                         href="https://youtube.com"
//                         target="_blank"
//                         className="border p-1 rounded border-baseColor"
//                       >
//                         <FaYoutube className="text-xl hover:text-red-600 transition" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </DialogContent>
//           )}
//         </Dialog>
//       ))}
//     </div>
//   );
// };

// export default ProductCardWithModal;

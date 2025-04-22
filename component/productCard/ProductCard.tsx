import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

const ProductCard = ({
  product,
  onQuickView,
}: {
  product: any;
  onQuickView: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div className="group relative border p-4 rounded-md cursor-pointer">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="text-xl px-6 py-2 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 
                opacity-0 group-hover:opacity-100 transition duration-300 bg-white text-basicColor border-basicColor hover:bg-basicColor hover:text-white"
              onClick={onQuickView}
            >
              Quick view
            </Button>
          </DialogTrigger>
        </div>

        <div className="text-center py-4 space-y-5">
          <DialogTitle></DialogTitle>
          <h1 className="uppercase text-gray-700 text-xl">{product.name}</h1>
          <div className="space-y-2">
            <p className="font-cursive text-lg font-semibold text-baseColor">
              ${product.price}
            </p>
            <div className="flex items-center justify-center gap-5">
              <div className="border border-basicColor p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
                <CiHeart className="text-basicColor" />
              </div>
              <Button
                variant="outline"
                className="border-basicColor text-basicColor hover:bg-basicColor hover:text-white"
              >
                Add to cart
              </Button>
              <div className="border border-basicColor p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
                <IoIosSearch className="text-basicColor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DialogContent className="sm:max-w-[425px] bg-white p-6">
        <div className="lg:flex items-center gap-4">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="rounded-md"
          />
          <div className="space-y-5">
            <p className=" text-2xl font-semibold text-baseColor mb-3">
              {product.name}
            </p>
            <p className="font-cursive text-lg font-semibold text-basicColor mb-3">
              ${product.price}
            </p>
            <Link
              href={product.featuresUrl}
              className="text-sm underline text-gray-700"
            >
              See all features
            </Link>
            <p className="text-gray-700 text-sm mt-2">{product.description}</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="w-8 h-8 rounded-full border border-basicColor text-basicColor hover:bg-basicColor hover:text-white transition"
                >
                  -
                </button>
                <span className="min-w-[24px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full border border-basicColor text-basicColor hover:bg-basicColor hover:text-white transition"
                >
                  +
                </button>
              </div>
              <Button className="bg-basicColor hover:bg-basicColor/90">
                Add to Cart
              </Button>
              <div className="p-3 border border-basicColor rounded-full">
                <CiHeart className="text-basicColor" />
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-5 text-gray-500">
              {[
                ["facebook", FaFacebookF],
                ["twitter", FaTwitter],
                ["instagram", FaInstagram],
                ["linkedin", FaLinkedinIn],
                ["youtube", FaYoutube],
              ].map(([name, Icon]) => (
                <Link
                  key={`https://${name}.com`}
                  href={`https://${name}.com`}
                  target="_blank"
                  className="border p-1 rounded border-baseColor"
                >
                  <Icon className="text-xl transition hover:text-baseColor" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;

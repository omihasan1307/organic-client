import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

const ProductCardWithoutDialog = ({ product }: { product: any }) => {
  return (
    <Link href={"/shop/123"}>
      <div className="group relative  p-4 rounded-md cursor-pointer">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div className="text-center py-4 space-y-5">
          <h1 className="uppercase text-gray-700 text-xl">{product.name}</h1>
          <div className="space-y-2">
            <p className="font-cursive text-lg font-semibold text-baseColor">
              ${product.price}
            </p>
            <div className="flex items-center justify-center gap-5">
              <div className="border border-basicColor p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300  text-basicColor hover:bg-basicColor hover:text-white">
                <CiHeart />
              </div>
              <Button
                variant="outline"
                className="border-basicColor text-basicColor hover:bg-basicColor hover:text-white"
              >
                Add to cart
              </Button>
              <div className="border border-basicColor p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300  text-basicColor hover:bg-basicColor hover:text-white">
                <IoIosSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardWithoutDialog;

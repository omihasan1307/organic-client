import { Metadata } from "next";
import Breadcrumb from "@/component/shared/Breadcrumb";
import MainLayout from "@/layout/MainLayout";
import SideBarSection from "./SideBar";
import Image from "next/image";
import Grid from "@/utils/Grid";
import ProductSection from "./ProductSection";
import { getProductList } from "../actions/get/get.action";

export const metadata: Metadata = {
  title: "Shop | Organica",
  description: "Shop | Organica",
};

const categories = [
  { name: "Bakery", items: 6 },
  { name: "Beauty", items: 11 },
  { name: "Dairy", items: 5 },
  { name: "Fruits", items: 8 },
  { name: "Health", items: 11 },
];

const products = [
  {
    id: 1,
    name: "Cleansers nano",
    price: 60,
    image: "/product-img1.jpg",
    description:
      "This is a powerful facial cleanser. Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    featuresUrl: "/",
  },
  {
    id: 2,
    name: "Glow Serum",
    price: 45,
    image: "/product-img1.jpg",
    description:
      "A glow serum to enhance your skin. Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    featuresUrl: "/",
  },
  {
    id: 3,
    name: "Herbal Lotion",
    price: 35,
    image: "/product-img1.jpg",
    description:
      "A soothing herbal lotion. Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    featuresUrl: "/",
  },
  {
    id: 4,
    name: "Herbal Lotion",
    price: 35,
    image: "/product-img1.jpg",
    description:
      "A soothing herbal lotion. Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    featuresUrl: "/",
  },
  {
    id: 5,
    name: "Herbal Lotion",
    price: 35,
    image: "/product-img1.jpg",
    description:
      "A soothing herbal lotion. Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    featuresUrl: "/",
  },
];

const ShopPage = async () => {
  const productData = await getProductList();


  return (
    <MainLayout>
      <Breadcrumb />
      <div className="max-w-screen-xl mx-auto lg:grid grid-cols-4 gap-10 px-10 lg:px-0 py-5">
        <div className="lg:block hidden">
          <SideBarSection categories={categories} products={products} />
        </div>
        <div className="col-span-3">
          <Image
            src={"/sec-1.png"}
            alt={"sec-1"}
            width={500}
            height={500}
            className="w-full "
          />
          <ProductSection products={productData?.data?.data} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ShopPage;

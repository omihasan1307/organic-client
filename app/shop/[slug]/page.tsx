import ProductBasicInfo from "@/component/ProductDetails/ProductBasicInfo";
import ProductDetailsWithTab from "@/component/ProductDetails/ProductDetailsWithTab";
import ProductImage from "@/component/ProductDetails/ProductImage";
import Breadcrumb from "@/component/shared/Breadcrumb";
import MainLayout from "@/layout/MainLayout";

const ShopDetails = () => {
  return (
    <MainLayout>
      <Breadcrumb />
      <div className="max-w-screen-xl mx-auto py-10 space-y-5 px-5 lg:px-0">
        <div className="lg:grid grid-cols-2 gap-5 space-y-4 lg:space-y-0">
          <ProductImage />
          <ProductBasicInfo />
        </div>
        <div>
          <ProductDetailsWithTab />
        </div>
      </div>
    </MainLayout>
  );
};

export default ShopDetails;

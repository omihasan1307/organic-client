import { getSingleProduct } from "@/app/actions/get/get.action";
import ProductBasicInfo from "@/component/ProductDetails/ProductBasicInfo";
import ProductDetailsWithTab from "@/component/ProductDetails/ProductDetailsWithTab";
import ProductImage from "@/component/ProductDetails/ProductImage";
import { RelatedProducts } from "@/component/ProductDetails/RelatedProducts";
import Breadcrumb from "@/component/shared/Breadcrumb";
import MainLayout from "@/layout/MainLayout";

const ShopDetails = async ({ params }: { params: any }) => {
  const { data: productDetails } = await getSingleProduct(params.slug);
  const { result, relatedProducts } = productDetails || {};
  console.log(productDetails);
  return (
    <MainLayout>
      <Breadcrumb />
      <div className="max-w-screen-xl mx-auto py-10 space-y-5 px-5 lg:px-0">
        <div className="lg:grid grid-cols-2 gap-5 space-y-4 lg:space-y-0">
          <ProductImage images={result?.images} />
          <ProductBasicInfo product={result} />
        </div>
        <div>
          <ProductDetailsWithTab product={result} />
        </div>
        <RelatedProducts products={relatedProducts} />
      </div>
    </MainLayout>
  );
};

export default ShopDetails;

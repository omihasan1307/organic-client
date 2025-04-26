import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDescription from "./ProductDescription";
import Review from "./Review";
import Tags from "./Tags";
import AdditionalInfo from "./AdditionalInfo";



const ProductDetailsWithTab = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        className="max-w-screen-xl mx-auto py-16 border-t-2"
      >
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="flex gap-8 bg-transparent">
            <TabsTrigger value="description" className="tab-trigger">
              product description
            </TabsTrigger>
            <TabsTrigger value="reviews" className="tab-trigger">
              Reviews
            </TabsTrigger>
            <TabsTrigger value="Tags" className="tab-trigger">
              Tags
            </TabsTrigger>
            <TabsTrigger value="additional_info" className="tab-trigger">
              Additional Info
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="description"
            className="border my-5 p-5 text-gray-600"
          >
            <ProductDescription />
          </TabsContent>
          <TabsContent
            value="reviews"
            className="border my-5 p-5 text-gray-600"
          >
            <Review />
          </TabsContent>
          <TabsContent value="Tags" className="border my-5 p-5 text-gray-600">
            <Tags />
          </TabsContent>
          <TabsContent
            value="additional_info"
            className="border my-5 p-5 text-gray-600"
          >
            <AdditionalInfo />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetailsWithTab;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCardWithModal from "../productCard/ProductCardWithModal";

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
];

const ProductByCategory = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 border-t-2">
      <Tabs defaultValue="beauty" className="w-full">
        <TabsList className="flex gap-8 bg-transparent">
          <TabsTrigger value="beauty" className="tab-trigger">
            Beauty
          </TabsTrigger>
          <TabsTrigger value="health" className="tab-trigger">
            Health
          </TabsTrigger>
          <TabsTrigger value="newest" className="tab-trigger">
            Newest
          </TabsTrigger>
        </TabsList>

        <TabsContent value="beauty">
          <ProductCardWithModal products={products} />
        </TabsContent>
        <TabsContent value="health">
          <p>Health products coming soon.</p>
        </TabsContent>
        <TabsContent value="newest">
          <p>Newest products coming soon.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductByCategory;

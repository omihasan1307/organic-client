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

const ProductSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16">
      <h2
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="font-cursive text-5xl text-baseColor text-center"
      >
        DEAL OF THE DAYS
      </h2>
      <div data-aos="fade-up">
        <ProductCardWithModal products={products} />
      </div>
    </div>
  );
};

export default ProductSection;

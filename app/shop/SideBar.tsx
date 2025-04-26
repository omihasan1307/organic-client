import Image from "next/image";

const SideBarSection = ({
  categories,
  products,
}: {
  categories: any;
  products: any;
}) => {
  return (
    <div className="space-y-8">
      {/* categories */}
      <div>
        <div>
          <h1 className="font-cursive text-xl text-gray-500">Categories</h1>
        </div>
        <hr className="my-3 border" />
        <div className="px-3 py-2 space-y-3">
          {categories.map((category: any, index: number) => (
            <div key={index}>
              <h1 className="text-gray-600 text-sm hover:text-basicColor cursor-pointer">
                {category.name} ({category.items} items)
              </h1>
              {/* Only show hr if it's not the last item */}
              {index !== categories.length - 1 && <hr className="my-2" />}
            </div>
          ))}
        </div>
      </div>

      {/* discount Image */}

      <Image
        src={"/discount-shop.jpg"}
        alt="Off"
        width={100}
        height={600}
        className="w-2/3  "
      />

      {/* premium Listings */}
      <div>
        <div>
          <h1 className="font-cursive text-3xl text-gray-700">
            Premium Listings
          </h1>
        </div>
        <hr className="my-3 border" />

        <div className="px-3 py-2 space-y-3">
          {products.map((product: any, index: number) => (
            <div key={product.id}>
              <div className="flex gap-5 items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <div className="space-y-5">
                  <h1>{product.name}</h1>
                  <p className="font-cursive text-lg font-semibold text-baseColor">
                    ${product.price}
                  </p>
                </div>
              </div>
              {/* Show hr except after last item */}
              {index !== products.length - 1 && <hr className="my-2" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarSection;

import Breadcrumb from "@/component/shared/Breadcrumb";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";

const BlogDetails = ({ params }: { params: any }) => {
  console.log(params);
  return (
    <MainLayout>
      <Breadcrumb />

      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">
        {/* Title */}
        <h1 className="font-cursive font-semibold text-2xl sm:text-3xl md:text-4xl text-baseColor text-center md:text-left">
          Benefits of Natural Fruits
        </h1>

        {/* Meta Info */}
        <div className="space-y-2 text-sm text-gray-600 py-5 text-center md:text-left ">
          <hr className=" mx-auto md:mx-0" />
          <p>31/12/2016 | admin admin</p>
          <hr className=" mx-auto md:mx-0" />
        </div>

        {/* Image */}
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          <Image
            src={"/blog-img1.jpg"}
            alt={"Benefits of Natural Fruits"}
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-md shadow"
          />
        </div>

        {/* Content */}
        <div className="text-gray-600 text-sm  text-justify leading-relaxed py-6 space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet,
            consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt. Lorem ipsum dolor sit amet, consectetuer Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem
            ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetails;

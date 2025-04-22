import Breadcrumb from "@/component/shared/Breadcrumb";
import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Blog | Organica",
  description: "Blog | Organica",
};

const blogPosts = [
  {
    id: 1,
    title: "Benefits of Natural Fruits",
    date: "12/31/16",
    author: "admin admin",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam . ",
    image: "/blog-img1.jpg",
    link: "/blog/benefits-of-natural-fruits",
  },
  {
    id: 2,
    title: "Organic Farming Techniques",
    date: "01/15/17",
    author: "admin admin",
    excerpt:
      "Discover the best organic farming practices that help maintain soil health and produce nutritious crops without harmful chemicals.",
    image: "/blog-img1.jpg",
    link: "/blog/organic-farming-techniques",
  },
  {
    id: 3,
    title: "Seasonal Vegetables Guide",
    date: "02/22/17",
    author: "admin admin",
    excerpt:
      "Learn which vegetables are in season each month and how to incorporate them into your diet for maximum health benefits.",
    image: "/blog-img1.jpg",
    link: "/blog/seasonal-vegetables-guide",
  },
];

const BlogPage = () => {
  return (
    <MainLayout>
      <Breadcrumb />

      <div className="max-w-screen-xl mx-auto py-8 md:py-16 px-4 lg:px-0">
        <div className="space-y-10 md:space-y-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col lg:grid lg:grid-cols-4 gap-6 md:gap-8 border-b pb-10 md:pb-12 last:border-b-0 last:pb-0"
            >
              <div className="lg:col-span-1">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-3 md:space-y-4 lg:col-span-3">
                <h1 className="font-cursive font-semibold text-2xl md:text-3xl text-baseColor">
                  {post.title}
                </h1>
                <div className="space-y-2 text-sm text-gray-600">
                  <hr />
                  <p>
                    {post.date} | {post.author}
                  </p>
                  <hr />
                </div>
                <p className="text-sm text-gray-600">
                  {post.excerpt.split(" ").slice(0, 25).join(" ")}...
                </p>{" "}
                <div>
                  <Link
                    href={post.link}
                    className="text-baseColor flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;

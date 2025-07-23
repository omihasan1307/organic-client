import Breadcrumb from "@/component/shared/Breadcrumb";
import MainLayout from "@/layout/MainLayout";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { getBlogList } from "../actions/get/get.action";
import dayjs from "dayjs";

export const metadata: Metadata = {
  title: "Blog | Organica",
  description: "Blog | Organica",
};

const BlogPage = async () => {
  const { data: blogData } = await getBlogList();
  return (
    <MainLayout>
      <Breadcrumb />

      <div className="max-w-screen-xl mx-auto py-8 md:py-16 px-4 lg:px-0">
        <div className="space-y-10 md:space-y-12">
          {blogData?.data?.map((blog: any) => (
            <div
              key={blog?.id}
              className="flex flex-col lg:grid lg:grid-cols-4 gap-6 md:gap-8 border-b pb-10 md:pb-12 last:border-b-0 last:pb-0"
            >
              <div className="lg:col-span-1">
                <Image
                  src={blog?.image}
                  alt={blog?.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-3 md:space-y-4 lg:col-span-3">
                <h1 className="font-cursive font-semibold text-2xl md:text-3xl text-baseColor">
                  {blog?.title}
                </h1>
                <div className="space-y-2 text-sm text-gray-600">
                  <hr />
                  <p>
                    {dayjs(blog.createdAt).format("DD MMM, YYYY")} |{" "}
                    {blog?.author?.username}
                  </p>
                  <hr />
                </div>
                <p className="text-sm text-gray-600">
                  {blog.description.split(" ").slice(0, 25).join(" ")}...
                </p>{" "}
                <Link
                  href={`/blog/${blog?.id}`}
                  className="text-baseColor flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read More <FaArrowRightLong />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;

import { getSingleBlog } from "@/app/actions/get/get.action";
import Breadcrumb from "@/component/shared/Breadcrumb";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

const BlogDetails = async ({ params }: { params: any }) => {
  const { data: blogDetails } = await getSingleBlog(params.slug);

  const { image, description, title, createdAt, author } =
    blogDetails?.result || {}; 
  const relatedBlogs = blogDetails?.relatedBlogs || [];

  return (
    <MainLayout>
      <Breadcrumb />

      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">
        {/* Title */}
        <h1 className="font-cursive font-semibold text-2xl sm:text-3xl md:text-4xl text-baseColor text-center md:text-left">
          {title}
        </h1>

        {/* Meta Info */}
        <div className="space-y-2 text-sm text-gray-600 py-5 text-center md:text-left ">
          <hr className=" mx-auto md:mx-0" />
          <p>
            {dayjs(createdAt).format("DD MMM, YYYY")} | {author?.username}
          </p>
          <hr className=" mx-auto md:mx-0" />
        </div>

        {/* Image */}
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-md shadow"
          />
        </div>

        {/* Content */}
        <div className="text-gray-600 text-sm text-justify leading-relaxed py-6 space-y-4">
          {description}
        </div>

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <div className="py-10">
            <h2 className="text-xl md:text-2xl font-semibold text-baseColor mb-6">
              Related Blogs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.slice(0, 3).map((blog: any) => (
                <div
                  key={blog.id}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/blog/${blog.id}`}>
                    <div className="h-48 relative">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {dayjs(blog.createdAt).format("DD MMM, YYYY")} |{" "}
                        {blog.author?.username}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {blog.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default BlogDetails;

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa";
import CreateBlog from "./CreateBlog";
import DashboardLayout from "@/layout/DashboardLayout";
import BlogList from "./BlogList";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
          <div className=" mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  Blog Management
                </h1>
                <p className="text-lg text-gray-600">
                  Create, edit, and manage your blog content with ease. Track
                  performance and engage your audience.
                </p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2 px-6 py-3 bg-basicColor  text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <FaPlus className="text-lg" />
                    <span className="text-base">Create New Blog</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full sm:max-w-[60rem]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      Create New Blog Post
                    </DialogTitle>
                  </DialogHeader>
                  <CreateBlog />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h3 className="text-gray-500 text-sm font-medium">Total Blogs</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">24</p>
            <p className="text-green-600 text-sm mt-1">+5 from last month</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h3 className="text-gray-500 text-sm font-medium">Published</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">18</p>
            <p className="text-blue-600 text-sm mt-1">76% of total</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h3 className="text-gray-500 text-sm font-medium">Total Views</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">12,453</p>
            <p className="text-purple-600 text-sm mt-1">+24% from last month</p>
          </div>
        </div>

        {/* Blog List */}

        <BlogList />
      </div>
    </DashboardLayout>
  );
}

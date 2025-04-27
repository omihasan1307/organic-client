"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

// Define TypeScript interface for Blog
interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  status: "published" | "draft" | "archived";
  views: number;
  category: string;
}

// Mock data for blogs
const mockBlogs: Blog[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    author: "Jane Doe",
    date: "2023-10-15",
    status: "published",
    views: 1245,
    category: "Development",
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    author: "John Smith",
    date: "2023-09-22",
    status: "published",
    views: 892,
    category: "Development",
  },
  {
    id: "3",
    title: "The Future of React",
    author: "Alice Johnson",
    date: "2023-11-05",
    status: "draft",
    views: 0,
    category: "Frontend",
  },
  {
    id: "4",
    title: "CSS Grid Layout Explained",
    author: "Bob Brown",
    date: "2023-08-17",
    status: "published",
    views: 1532,
    category: "Design",
  },
  {
    id: "5",
    title: "State Management in 2023",
    author: "Charlie Wilson",
    date: "2023-07-30",
    status: "archived",
    views: 2100,
    category: "Frontend",
  },
  {
    id: "6",
    title: "Building Accessible Web Apps",
    author: "Diana Miller",
    date: "2023-11-12",
    status: "published",
    views: 745,
    category: "Accessibility",
  },
];

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  // Filter blogs based on search term
  const filteredBlogs = mockBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Published</Badge>
        );
      case "draft":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-600">Draft</Badge>
        );
      case "archived":
        return (
          <Badge className="bg-gray-500 hover:bg-gray-600">Archived</Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Input
          placeholder="Search blogs by title, author or category..."
          className="max-w-md"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page when searching
          }}
        />
        <div className="text-sm text-gray-500">
          Showing {indexOfFirstBlog + 1}-
          {Math.min(indexOfLastBlog, filteredBlogs.length)} of{" "}
          {filteredBlogs.length} blogs
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
      
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>{blog.author}</TableCell>
                  <TableCell>
                    {new Date(blog.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{blog.category}</Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(blog.status)}</TableCell>
                  <TableCell>{blog.views.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <FiEye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <FiEdit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <FiTrash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  No blogs found matching your search criteria.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <PaginationItem key={number}>
                  <PaginationLink
                    onClick={() => paginate(number)}
                    isActive={number === currentPage}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  currentPage < totalPages && paginate(currentPage + 1)
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default BlogList;

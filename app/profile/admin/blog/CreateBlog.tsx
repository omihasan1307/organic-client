"use client"; // Important if you're using Next.js App Router

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type BlogFormData = {
  title: string;
  image: FileList;
  description: string;
};

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormData>();

  const onSubmit = async (data: BlogFormData) => {
    console.log(data);

    // Example: how you can access the image file
    const imageFile = data.image[0];
    console.log("Uploaded image:", imageFile);

    // TODO: Handle form submission (like uploading to server)

    reset(); // Reset form after submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Title */}
      <div className="flex flex-col space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          {...register("title", { required: "Title is required" })}
          placeholder="Enter blog title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Image */}
      <div className="flex flex-col space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          {...register("image", { required: "Image is required" })}
        />
        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="flex flex-col space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          placeholder="Write your blog description..."
          rows={5}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      {/* Submit button */}
      <Button variant={"default"} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Create Blog"}
      </Button>
    </form>
  );
};

export default CreateBlog;

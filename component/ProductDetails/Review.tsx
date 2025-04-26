"use client";
import React, { useState, useEffect } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewFormData {
  name: string;
  rating: number;
  comment: string;
}

const Review = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm<ReviewFormData>({
    defaultValues: {
      name: "",
      rating: 0,
      comment: "",
    },
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        const mockReviews: Review[] = [
          {
            id: 1,
            name: "Alex Johnson",
            rating: 5,
            comment:
              "Excellent product! Exceeded my expectations in every way.",
            date: "2023-05-15",
          },
          {
            id: 2,
            name: "Sarah Williams",
            rating: 4,
            comment:
              "Very good quality, but delivery took longer than expected.",
            date: "2023-04-22",
          },
          {
            id: 3,
            name: "Michael Chen",
            rating: 3,
            comment:
              "Decent product for the price. Could be improved in some areas.",
            date: "2023-03-10",
          },
        ];
        setReviews(mockReviews);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const onSubmit = (data: ReviewFormData) => {
    if (!data.rating) {
      alert("Please select a rating");
      return;
    }

    const reviewToAdd: Review = {
      id: reviews.length + 1,
      name: data.name,
      rating: data.rating,
      comment: data.comment,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews([reviewToAdd, ...reviews]);
    reset();
    setHoverRating(0);
  };

  const handleRatingChange = (rating: number) => {
    setValue("rating", rating);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`${
          i < rating ? "text-yellow-400" : "text-gray-300"
        } text-xl`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Customer Reviews
      </h1>

      {/* Review Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <Input
              id="name"
              {...register("name", { required: true })}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Your Rating
            </label>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => handleRatingChange(i + 1)}
                  onMouseEnter={() => setHoverRating(i + 1)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none"
                >
                  <FaStar
                    className={`${
                      i < (hoverRating || watch("rating") || 0)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    } text-2xl`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-1">
              Your Review
            </label>
            <Textarea
              id="comment"
              {...register("comment", { required: true })}
              placeholder="Share your thoughts about the product..."
              className="min-h-[120px]"
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Review
          </Button>
        </form>
      </div>

      {/* Reviews List */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          {reviews.length} Customer Review{reviews.length !== 1 ? "s" : ""}
        </h2>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
          </div>
        ) : reviews.length === 0 ? (
          <p className="text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <FaUserCircle className="text-gray-400 text-4xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex mr-2">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-gray-500 text-sm">
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;

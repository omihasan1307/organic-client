"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useSignUp } from "../hooks/post/post.hook";
import { useRouter } from "next/navigation";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: handleContact, isPending } = useSignUp();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    handleContact(data, {
      onSuccess: () => {
        reset();
        router.push("/login");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-basicColor to-baseColor text-white p-6 text-center">
          <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2">
            <ChevronLeft className="w-6 h-6 hover:text-white/80 transition-colors" />
          </Link>
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-white/90 mt-1">Join us and start your journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          {/* Name Field */}
          <div className="space-y-3">
            <div className="relative">
              <Input
                id="name"
                placeholder="Full Name"
                className="pl-10 py-5 border-gray-300 focus:ring-2 focus:ring-basicColor focus:border-transparent"
                {...register("username", {
                  required: "Name is required",
                })}
              />
              <User className="absolute left-3 top-3 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-3">
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="pl-10 py-5 border-gray-300 focus:ring-2 focus:ring-basicColor focus:border-transparent"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <Mail className="absolute left-3 top-3 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-3">
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 py-5 border-gray-300 focus:ring-2 focus:ring-basicColor focus:border-transparent"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <Lock className="absolute left-3 top-3 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <button
                type="button"
                className="absolute right-3 top-3 -translate-y-1/2 text-gray-400 hover:text-basicColor transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-basicColor to-baseColor hover:from-basicColor/90 hover:to-basicColor py-6 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Sign Up <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>

        {/* Footer Links */}
        <div className="bg-gray-50 px-8 py-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-basicColor hover:underline"
            >
              Sign in
            </Link>
          </p>
          <p className="mt-4">
            <Link
              href="/"
              className="text-gray-500 hover:text-basicColor hover:underline"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowRight, Eye, EyeOff, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useLogin } from "../hooks/post/post.hook";
import { useAuth } from "../providers/auth-context";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: handleContact, isPending } = useLogin();
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    handleContact(data, {
      onSuccess: (response) => {
        login(response.data.access_token);
        reset();
        router.push("/profile");
      },
    });
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Header with back button */}
        <div className="relative bg-gradient-to-r from-basicColor to-baseColor text-white p-6 text-center">
          <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2">
            <ChevronLeft className="w-6 h-6 hover:text-white/80 transition-colors" />
          </Link>
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p className="text-white/90 mt-1">Sign in to continue your journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          <div className="space-y-3">
            {/* <Label
              htmlFor="email"
              className="flex items-center gap-2 text-gray-700"
            >
              <Mail className="w-5 h-5 text-basicColor" />
              Email Address
            </Label> */}
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

          <div className="space-y-3">
            {/* <Label
              htmlFor="password"
              className="flex items-center gap-2 text-gray-700"
            >
              <Lock className="w-5 h-5 text-basicColor" />
              Password
            </Label> */}
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-basicColor focus:ring-basicColor"
              />
              <Label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-600"
              >
                Remember me
              </Label>
            </div>

            <Link
              href="/forgot-password"
              className="text-sm text-basicColor hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-basicColor to-baseColor hover:from-basicColor/90 hover:to-basicColor py-6 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Sign In <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>

        {/* Social Login */}
        {/* <div className="px-8 pb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="py-5 border-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.797-1.677-4.188-2.698-6.735-2.698-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.496 10-10 0-0.67-0.069-1.325-0.189-1.961h-9.811z"></path>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="py-5 border-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
              </svg>
              Facebook
            </Button>
          </div>
        </div> */}

        {/* Footer Links */}
        <div className="bg-gray-50 px-8 py-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-basicColor hover:underline"
            >
              Sign up now
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

export default LoginPage;

"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
      <div className="relative h-1/2 w-full">
        {/* <Image src={img.notfound} alt="Not Found" fill style={{ objectFit: "contain" }} placeholder="blur" /> */}
      </div>
      <button
        onClick={handleGoBack}
        className="mt-4 px-4 py-2 bg-baseColor text-white rounded-lg cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;

import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";

const HeaderSection = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center py-4 md:py-8 ">
        <p className="text-gray-500 text-sm  text-center md:text-left hidden sm:block">
          Order online or call us 1-888-123-456-89
        </p>

        {/* Logo - centered on mobile, normal position on larger screens */}
        <Link href={"/"} className="flex justify-center md:block py-4 lg:py-0">
          <Image src={"/logo.png"} alt="logo" width={200} height={100} />
        </Link>

        {/* Right side elements */}
        <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-5">
          {/* Cart */}
          <div className="relative">
            <div className="border border-basicColor rounded-full p-2 sm:p-3">
              <RiShoppingCart2Line className="text-lg sm:text-xl" />
            </div>
            <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </p>
          </div>

          {/* Login button - hidden on smallest screens */}
          <Link href={"/login"}>
            <Button variant="default">Login</Button>
          </Link>

          {/* Search - full width on mobile, auto width on larger */}
          <div className="w-full sm:w-auto">
            <Command>
              <CommandInput
                placeholder="search all products"
                className="text-sm h-9 sm:h-10 outline-none"
              />
            </Command>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderSection;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: any) => {
    return pathname === path || (path !== "/" && pathname.startsWith(path));
  };

  return (
    <div className=" py-4 ">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
        <nav className="flex items-center  justify-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto whitespace-nowrap">
          {[
            { href: "/", label: "Home" },
            { href: "/shop", label: "Shop" },
            { href: "/blog", label: "Blog" },
            { href: "/contact-us", label: "Contact Us" },
            { href: "/about-us", label: "About Us" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative px-1 py-2 uppercase transition-colors
                ${
                  isActive(link.href)
                    ? "text-basicColor font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }
              `}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-600"></span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

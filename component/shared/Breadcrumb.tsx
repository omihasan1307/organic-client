"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Split the path into segments and filter out empty strings
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Create the breadcrumb path array
  const paths = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return { href, label };
  });

  return (
    <div className="bg-gray-100 py-3">
      <div className="max-w-screen-xl mx-auto flex items-center gap-2 px-8 lg:px-0 text-sm">
        <Link href="/" className="hover:text-basicColor duration-300">
          Home
        </Link>
        {paths.map((path, index) => (
          <div key={index} className="flex items-center gap-2">
            <span>/</span>
            {index === paths.length - 1 ? (
              <span className="text-basicColor">{path.label}</span>
            ) : (
              <Link
                href={path.href}
                className="hover:text-basicColor duration-300"
              >
                {path.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;

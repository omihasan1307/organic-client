"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiBook,
  FiFileText,
  FiVideo,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState, useEffect } from "react";

// Define menu items for user role
const userMenuItems = [
  {
    label: "Course List",
    href: "/profile/wishlist",
    icon: <FiBook className="w-5 h-5" />,
  },
  {
    label: "Log Out",
    href: "/",
    action: "logout",
    icon: <FiLogOut className="w-5 h-5" />,
  },
];

// Define menu items for admin role
const adminMenuItems = [
  {
    label: "Home",
    href: "/profile/admin",
    icon: <FiHome className="w-5 h-5" />,
  },
  {
    label: "Manage Blog",
    href: "/profile/admin/blog",
    icon: <FiFileText className="w-5 h-5" />,
  },
  {
    label: "Manage Module",
    href: "/profile/admin/module",
    icon: <FiBook className="w-5 h-5" />,
  },
  {
    label: "Manage Lecture",
    href: "/profile/admin/lectures",
    icon: <FiVideo className="w-5 h-5" />,
  },
  {
    label: "Log Out",
    href: "/",
    action: "logout",
    icon: <FiLogOut className="w-5 h-5" />,
  },
];

const DashboardSideBar = ({ data, logOutUser }: any) => {
  const pathname = usePathname();
  const role = data?.role || "user";
  const menuItems = role !== "admin" ? adminMenuItems : userMenuItems;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (item: any) => {
    if (item.action === "logout") {
      localStorage.removeItem("accessToken");
      logOutUser();
    }
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed z-40 top-4 left-4 p-2 rounded-md bg-white shadow-md md:hidden"
        >
          {isMobileOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-white p-4 rounded-lg shadow-lg h-fit md:h-[calc(100vh-100px)] sticky top-20 transition-all duration-300 ${
          isMobile
            ? `fixed z-30 w-64 h-full ${isMobileOpen ? "left-0" : "-left-64"}`
            : "static"
        }`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-6 p-4 bg-gray-50 rounded-lg">
          <img
            src="https://via.placeholder.com/110"
            alt="User Avatar"
            className="w-16 h-16 rounded-full mb-3 border-2 border-blue-100"
          />
          <h2 className="text-lg font-semibold text-gray-800">Customer Name</h2>
          <p className="text-sm text-gray-500">Customer Address</p>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.action === "logout") {
                  e.preventDefault();
                  handleMenuClick(item);
                }
              }}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                pathname === item.href
                  ? "bg-blue-50 text-basicColor font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile overlay */}
        {isMobileOpen && isMobile && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </aside>
    </>
  );
};

export default DashboardSideBar;

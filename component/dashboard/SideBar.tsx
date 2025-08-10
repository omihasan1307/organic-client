// components/dashboard/SideBar.tsx
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
  FiUser,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/providers/auth-context";

const DashboardSideBar = () => {
  const { role, logout, user } = useAuth();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  // Menu items configuration
  const menuItems = [
    // Common items for all roles
    {
      label: "Profile",
      href: role === "admin" ? "/profile/admin" : "/profile",
      icon: <FiUser className="w-5 h-5" />,
    },
    ...(role === "admin"
      ? [
          // Admin specific items
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
        ]
      : [
          // User specific items
          {
            label: "My Courses",
            href: "/profile/courses",
            icon: <FiBook className="w-5 h-5" />,
          },
          {
            label: "Wishlist",
            href: "/profile/wishlist",
            icon: <FiShoppingCart className="w-5 h-5" />,
          },
          {
            label: "Settings",
            href: "/profile/settings",
            icon: <FiSettings className="w-5 h-5" />,
          },
        ]),
    // Common logout item
    {
      label: "Log Out",
      href: "#",
      action: "logout",
      icon: <FiLogOut className="w-5 h-5" />,
    },
  ];

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
      logout();
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
          aria-label="Toggle menu"
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
            src={user?.avatar || "https://via.placeholder.com/110"}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mb-3 border-2 border-blue-100"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            {user?.name || "User"}
          </h2>
          <p className="text-sm text-gray-500 capitalize">
            {role || "user"} account
          </p>
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

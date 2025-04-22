import Link from "next/link";
import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

const FooterSection = () => {
  return (
    <footer>
      <div className="border">
        <div
          data-aos="fade-up"
          className="max-w-screen-xl mx-auto lg:grid grid-cols-4 gap-10 px-5 lg:px-0 "
        >
          {/* contact info */}
          <div className="lg:border-r-2 py-10">
            <h1 className="uppercase text-xl text-gray-600 font-semibold">
              Contact info
            </h1>
            <div className="pt-8 text-gray-400 space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <MdOutlinePhone />
                <p>+880 1862 4040 50</p>
              </div>
              <div className="flex items-center gap-3">
                <CiMail />
                <p>amihasan130@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <CiLocationOn />
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Main menu */}
          <div className="lg:border-r-2 lg:py-10">
            <h1 className="uppercase text-xl text-gray-600 font-semibold">
              Main menu
            </h1>
            <div className="pt-5 text-gray-400 uppercase space-y-3 text-sm flex flex-col">
              <Link href={"/"}>Home</Link>
              <Link href={"/shop"}>shop</Link>
              <Link href={"/blog"}>blog</Link>
              <Link href={"/contact-us"}>contact us</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:border-r-2 py-10">
            <h1 className="uppercase text-xl text-gray-600 font-semibold">
              Quick Links
            </h1>
            <div className="pt-5 text-gray-400 uppercase space-y-3 text-sm flex flex-col">
              <Link href={"/about-us"}>About Us</Link>
              <Link href={"/faq"}>FAQ</Link>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
              <Link href={"/terms-conditions"}>Terms & Conditions</Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:py-10 pb-10 lg:pb-0">
            <h1 className="uppercase text-xl text-gray-600 font-semibold">
              Follow Us
            </h1>
            <div className="pt-5 text-gray-400 uppercase space-y-3 text-sm flex flex-col">
              <Link href={"https://facebook.com"}>Facebook</Link>
              <Link href={"https://twitter.com"}>Twitter</Link>
              <Link href={"https://instagram.com"}>Instagram</Link>
              <Link href={"https://pinterest.com"}>Pinterest</Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-2 text-gray-400 ">
        © {new Date().getFullYear()} amihasan130@gmail.com.
      </p>
    </footer>
  );
};

export default FooterSection;

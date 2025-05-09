import FooterSection from "@/component/shared/Footer";
import HeaderSection from "@/component/shared/Header";
import Navbar from "@/component/shared/Navbar";
import TopHeader from "@/component/shared/TopHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "lms",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopHeader />
      <HeaderSection />
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
}

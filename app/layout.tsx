import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { Lobster_Two } from "next/font/google";
import { AosInit } from "@/lib/aos";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

// Primary font - Roboto
const roboto = Roboto({
  weight: ["600", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

// Your existing Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cursive font
const lobsterTwo = Lobster_Two({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lobster",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Organica",
  description: "Organica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} ${lobsterTwo.variable} antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}

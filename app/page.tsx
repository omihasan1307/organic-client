import BrandSection from "@/component/Home/BrandSection";
import ContactSection from "@/component/Home/ContactSection";
import HeroSection from "@/component/Home/HeroSection";
import ImageSection from "@/component/Home/ImageSection";
import ProductByCategory from "@/component/Home/ProductByCategory";
import ProductSection from "@/component/Home/ProductSection";
import SalesSection from "@/component/Home/SalesSection";
import SecondSection from "@/component/Home/SecondSection";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SecondSection />
      <ProductSection />
      <ContactSection />
      <SalesSection />
      <ProductByCategory />
      <BrandSection />
      <ImageSection />
    </MainLayout>
  );
}

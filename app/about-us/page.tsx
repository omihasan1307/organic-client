import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import { Leaf, Users, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/component/shared/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Organica",
  description: "About Us | Organica",
};

const AboutPage = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-basicColor" />,
      title: "100% Organic",
      description: "Certified organic products from trusted farms",
    },
    {
      icon: <Users className="w-8 h-8 text-basicColor" />,
      title: "Expert Team",
      description: "Knowledgeable staff to guide your organic journey",
    },
    {
      icon: <Award className="w-8 h-8 text-basicColor" />,
      title: "Quality Guarantee",
      description: "We stand behind every product we sell",
    },
    {
      icon: <Truck className="w-8 h-8 text-basicColor" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping options",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/man.jpg",
    },
    {
      name: "Michael Chen",
      role: "Head Farmer",
      image: "/man.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Nutrition Specialist",
      image: "/man.jpg",
    },
    {
      name: "David Wilson",
      role: "Customer Support",
      image: "/man.jpg",
    },
  ];

  return (
    <MainLayout>
      <Breadcrumb />
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16"
          data-aos="fade-right"
        >
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Organic Story
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Organic Harvest began with a simple mission: to
              bring the freshest, most nutritious organic products to your table
              while supporting sustainable farming practices.
            </p>
            <Button className="rounded-full border border-basicColor bg-white text-baseColor px-8 uppercase hover:bg-basicColor hover:text-white">
              Learn More
            </Button>
          </div>
          <div
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
            data-aos="fade-left"
          >
            <Image
              src="/about.png"
              alt="Organic farm"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Mission Section */}
        <section
          className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16"
          data-aos="zoom-in-up"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 mb-8">
              We believe in creating a healthier world through organic
              agriculture. Our values guide everything we do, from selecting
              products to supporting our farming partners.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Meet Our Team
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative aspect-square rounded-full overflow-hidden mb-4 mx-auto w-48 h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-basicColor text-white rounded-lg p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">12+</p>
              <p>Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">500+</p>
              <p>Organic Products</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">10K+</p>
              <p>Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-2">50+</p>
              <p>Farm Partners</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Join Our Organic Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Discover the difference that organic can make for your health and
            our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button className="rounded-full bg-basicColor hover:bg-basicColor/90 px-8 py-2">
                Shop Now
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="rounded-full border-basicColor text-basicColor hover:bg-basicColor/10 px-8 py-2"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;

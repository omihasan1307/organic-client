import MainLayout from "@/layout/MainLayout";
import { MapPin, Mail, Phone } from "lucide-react";
import Breadcrumb from "@/component/shared/Breadcrumb";
import ContactForm from "./ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Organica",
  description: "Contact Us | Organica",
};

const ContactPage = () => {
  return (
    <MainLayout>
      <Breadcrumb />
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to
            our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-basicColor/10 p-3 rounded-full">
                <MapPin className="text-basicColor w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Our Location</h3>
                <p className="text-gray-600">
                  123 Organic Street, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-basicColor/10 p-3 rounded-full">
                <Mail className="text-basicColor w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Email Us</h3>
                <p className="text-gray-600">contact@organic.com</p>
                <p className="text-gray-600">support@organic.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-basicColor/10 p-3 rounded-full">
                <Phone className="text-basicColor w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
                <p className="text-gray-600">Mon-Fri: 9am-5pm</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-lg overflow-hidden" data-aos="zoom-in-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155732918656!2d-73.98784492453896!3d40.74844047138911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;

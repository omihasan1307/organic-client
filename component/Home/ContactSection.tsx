import React from "react";
import { CiMail } from "react-icons/ci";
import { GrSupport } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";

const ContactSection = () => {
  const contactItems = [
    {
      icon: <IoCallOutline className="text-3xl md:text-4xl" />,
      title: "Do you have a question?",
      info: "+8801862404050",
    },
    {
      icon: <CiMail className="text-3xl md:text-4xl" />,
      title: "offer question?",
      info: "Contact@posthemes.com",
    },
    {
      icon: <GrSupport className="text-3xl md:text-4xl" />,
      title: "Support question?",
      info: "support@posthemes.com",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {contactItems.map((item, index) => (
            <div
              data-aos="zoom-in-up"
              key={index}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2"
            >
              <div className="flex items-center gap-4 w-full sm:w-40 text-baseColor uppercase">
                {item.icon}
                <h2 className="text-sm ">{item.title}</h2>
              </div>
              <p className="text-lg sm:text-xl md:text-xl text-gray-500  sm:text-left w-full sm:w-auto">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

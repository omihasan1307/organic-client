/* eslint-disable @typescript-eslint/no-explicit-any */
import { contactToDb, inquiryToDb } from "@/app/actions/post/post.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useInquiry = () => {
  return useMutation({
    mutationKey: ["INQUIRY"],
    mutationFn: async (data: any) => await inquiryToDb(data),
    onSuccess: (data) => {
      toast.success(` ${data?.data}! Inquiry added successfully`);
    },
    onError: (data) => {
      toast.error(data?.message || "Inquiry added Failed");
    },
  });
};

export const useContact = () => {
  return useMutation({
    mutationKey: ["CONTACT"],
    mutationFn: async (data: any) => await contactToDb(data),
    onSuccess: (data) => {
      console.log("succc res", data);
      toast.success(` ${data?.message} `);
    },
    onError: (data: any) => {
      console.log("error res", data);
      toast.error(data?.message || "Contact added Failed");
    },
  });
};

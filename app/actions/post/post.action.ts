/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/app/shared/config/axios.config";

export const inquiryToDb = async (data: any) => {
  try {
    const res = await axiosInstance.post("/inquiry", data);
    return res?.data;
  } catch (error: any) {
    throw new Error(`Inquiry Error : ${error?.message}`);
  }
};

export const contactToDb = async (data: any) => {
  try {
    const res = await axiosInstance.post("/contact", data);
    return res?.data;
  } catch (error: any) {
    console.log("contact Error", error);
    throw new Error(`Contact Error : ${error?.message}`);
  }
};

export const signUpToDb = async (data: any) => {
  try {
    const res = await axiosInstance.post("/auth/signup", data);
    return res?.data;
  } catch (error: any) {
    throw new Error(`Sign Up Error : ${error?.message}`);
  }
};

export const loginToDb = async (data: any) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    return res?.data;
  } catch (error: any) {
    throw new Error(`Sign Up Error : ${error?.message}`);
  }
};

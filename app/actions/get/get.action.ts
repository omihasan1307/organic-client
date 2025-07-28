/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/app/shared/config/axios.config";
import { ENV_CONFIG, FETCH_OPTIONS } from "@/app/shared/constant/app.constant";


export const getProjectList = async () => {
  try {
    const response = await axiosInstance.get(`/projects/project/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Projects item");
  }
};

export const getSingleProject = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/projects/project/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Project item");
  }
};

export const getServiceList = async () => {
  try {
    const response = await axiosInstance.get(`/services/service/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Services item");
  }
};

export const getSingleService = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/services/service/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Services item");
  }
};

export const getWebsite = async () => {
  try {
    const response = await fetch(`${ENV_CONFIG.baseApi}/base/website-data`, FETCH_OPTIONS);

    if (!response.ok) {
      throw new Error(`Failed to fetch website data. HTTP status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching website data:", error);
    throw new Error(error?.message || "Failed to fetch website data");
  }
};

export const getBlogList = async () => {
  try {
    const response = await axiosInstance.get(`/blog`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Blog item");
  }
};

export const getSingleBlog = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/blog/${id}/`);
    if (response?.data) {
      return response.data;
    } else {
      throw new Error("Failed to fetch Single Project item");
    }
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Project item");
  }
};


export const getAllOrders = async () => {
  try {
    const response = await axiosInstance.get("/api/admin/orders");
    return response?.data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Project item");
  }
};


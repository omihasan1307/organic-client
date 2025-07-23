"use server";

export const getAllOrders = async () => {
  try {
    const response = await fetch("/api/admin/orders");
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch Project item");
  }
};

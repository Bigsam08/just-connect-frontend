/**
 * @description perform all categories function
 */

import { axiosInstance } from "../libs/axiosInstance";

export const getAllCategories = async () => {
  try {
    const res = await axiosInstance.get("/categories");
    return res.data?.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error.message);
    return [];
  }
};

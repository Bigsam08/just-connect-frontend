/**
 * @description this folder handles all auth api operations with backend
 */

import { axiosAuth } from "../libs/axiosInstance";

export const authApi = {
  //Register
  register: async (formData) => {
    try {
      const { data } = await axiosAuth.post("/register", formData);
      return data;
    } catch (error) {
      const errMsg =
        error.response?.data?.message ||
        (error.request
          ? "Unable to connect to server. Please try again later."
          : "An unexpected error occurred.");
      throw new Error(errMsg);
    }
  },

  // Login
  login: async (formData) => {
    try {
      const { data } = await axiosAuth.post("/login", formData);
      return data;
    } catch (error) {
      const errMsg =
        error.response?.data?.message ||
        (error.request
          ? "Unable to connect to server. Please try again later."
          : "An unexpected error occurred.");
      throw new Error(errMsg);
    }
  },

  // logout
  logout: async () => {
    try {
      const { data } = await axiosAuth.post("/logout");
      return data;
    } catch (error) {
      const errMsg =
        error.response?.data?.message ||
        (error.request
          ? "Unable to connect to server. Please try again later."
          : "An unexpected error occurred.");
      throw new Error(errMsg);
    }
  },

  // Check authenticated user
  checkUser: async () => {
    try {
      const { data } = await axiosAuth.get("/me");
      return data;
    } catch (error) {
      const errMsg =
        error.response?.data?.message ||
        (error.request
          ? "Unable to connect to server. Please try again later."
          : "An unexpected error occurred.");
      throw new Error(errMsg);
    }
  },

  // Forgot password
  forgotPassword: async (email) => {
    try {
      const { data } = await axiosAuth.post("/forget-password", { email });
      return data;
    } catch (error) {
      const errMsg =
        error.response?.data?.message ||
        (error.request
          ? "Unable to connect to server. Please try again later."
          : "An unexpected error occurred.");
      throw new Error(errMsg);
    }
  },

  resetPassword: async (formData) => {
    try {
      const { data } = await axiosAuth.post("/reset-password", formData);
      return data;
    } catch (error) {
      const errMsg =
        error.response?.data?.message ||
        (error.request
          ? "Unable to connect to server. Please try again later."
          : "An unexpected error occurred.");
      throw new Error(errMsg);
    }
  },
};

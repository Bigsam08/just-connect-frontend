/**
 * @description creates a reuseable axios instance connection
 */

import axios from "axios";
import useAuthStore from "../store/authStore";


// axios for global use
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

// Axios for all auth endpoints
export const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_AUTH_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


// Attach token from the store for each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

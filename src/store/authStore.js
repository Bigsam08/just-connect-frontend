/**
 * @description Global store state management
 */
import { create } from "zustand";
import { authApi } from "../api/authApi";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  checkingUser: true,

  // LOGIN
  login: async (formData) => {
    const data = await authApi.login(formData);
    set({
      user: data.user,
      isAuthenticated: true,
    });
    console.log("AUTH STORE:", data)
    return data;
  },

  // LOGOUT
  logout: async () => {
    const data = await authApi.logout();
    set({
      user: null,
      isAuthenticated: false,
    });
    return data;
  },

  // CHECK USER
  checkUser: async () => {
    set({ checkingUser: true });
    try {
      const data = await authApi.checkUser();
      set({
        user: data.user,
        isAuthenticated: true,
        checkingUser: false,
      });
      return data;
    } catch {
      set({
        user: null,
        isAuthenticated: false,
        checkingUser: false,
      });

      return null;
    }
  },
}));
export default useAuthStore;
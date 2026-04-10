/**
 * @description Global store state management
 */
import { create } from "zustand";
import { authApi } from "../api/authApi";

const useAuthStore = create((set) => ({
  user: null,
  checkingUser: false,
  isAuthenticated: false,

  // LOGIN
  login: async (formData) => {
    const data = await authApi.login(formData);
    set({
      user: data.user,
      isAuthenticated: true,
    });
  },

  // LOGOUT
  logout: async () => {
    await authApi.logout();
    set({
      user: null,
      isAuthenticated: false,
    });
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
    } catch {
      set({
        user: null,
        isAuthenticated: false,
        checkingUser: false,
      });
    }
  },
}));
export default useAuthStore;
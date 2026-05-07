/**
 * @description A global log out function to help log out from all sizes
 */

import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useNotificationStore } from "../store/notificationStore";

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const { showNotification } = useNotificationStore();

  const handleLogout = async () => {
    try {
      const res = await logout();
      showNotification(res.message, "success");
      navigate("/");
    } catch (error) {
      showNotification(error.message, "error");
    }
  };

  return { handleLogout };
};
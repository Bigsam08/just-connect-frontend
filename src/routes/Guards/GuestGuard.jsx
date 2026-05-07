/**
 * @description This guard prevent logged in users from accessing outlets
 *              example routes are sign up, sign in, landing page, forget password etc
 * 
 * @access Guest or Unauthenticated users Only
 */

import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const GuestGuard = () => {
  const { isAuthenticated, user } = useAuthStore();
  return !isAuthenticated ? <Outlet /> : <Navigate to={`/dashboard/${user.role}`} replace />;
};

export default GuestGuard;

/**
 * @description Builds a role guard base to prevent unauthorized users in certain routes
 *
 * @access User role only [ user, professional, admin]
 */

import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const RoleGuard = ({ allowedRoles = [] }) => {
  const { isAuthenticated, user } = useAuthStore();

  // redirect user to login if not signed in
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // if user role does not match allowed roles redirect them to unauthorized page
  if (!allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" replace />;

  // Allow user access
  return <Outlet />;
};

export default RoleGuard;

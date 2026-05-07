/**
 * @description This displays all authentication routes pages in our app
 * @routes  Login Register Forgot password Reset password
 * @access Only unauthenticated user / Guest users
 */

import { lazy } from "react";
import { Route } from "react-router-dom"
import GuestGuard from "./Guards/GuestGuard.jsx";

const Login = lazy(() => import("../pages/Auth/Login.jsx"))
const Register = lazy(() => import("../pages/Auth/Register.jsx"));
const ForgotPassword = lazy(() => import("../pages/Auth/ForgotPassword.jsx"));
const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword.jsx"));

const AuthRoutes = (
  <>
    <Route element={<GuestGuard />}>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:id" element={<ResetPassword />} />
    </Route>
  </>
);

export default AuthRoutes
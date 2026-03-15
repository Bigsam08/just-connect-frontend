/**
 * @description Displays all the app routes of our app
 *              -Landing page as the index route of the app
 *              - Auth Routes displays authentication pages e.g login sign up forgot and reset password
 *              -User route as the group route for user Dashboard
 *              -Admin route as the group for all Admin routes 
 *              -Professionals Dashboard routes
 */

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import ProfessionalRoutes from "./ProfessionalRoutes";
import AuthRoutes from "./AuthRoutes";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const NotFoundPage = lazy(() => import("../pages/NotfoundPage"));
const UnauthorizedPage = lazy(() => import("../pages/UnauthorizedPage"));

const MainAppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {AdminRoutes}
      {UserRoutes}
      {ProfessionalRoutes}
      {AuthRoutes}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
    </Routes>
  );
}

export default MainAppRoute;
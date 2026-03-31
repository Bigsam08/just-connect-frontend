/**
 * @description Displays the Artisians routes, i.e those rendering services
 * @access Professionals Only.
 */

import { lazy } from "react";
import { Route } from "react-router-dom";

const Layout = lazy(() => import("../pages/ProfessionalDashboard/Layout"));
const Home = lazy(() => import("../pages/ProfessionalDashboard/Home"));
const Bookings = lazy(() => import("../pages/ProfessionalDashboard/Bookings"));
const Services = lazy(() => import("../pages/ProfessionalDashboard/Services"));
const Messages = lazy(() => import("../pages/ProfessionalDashboard/Messages"));
const Earnings = lazy(() => import("../pages/ProfessionalDashboard/Earnings"));
const Reviews = lazy(() => import("../pages/ProfessionalDashboard/Reviews"));
const Profile = lazy(() => import("../pages/ProfessionalDashboard/Profile"));
const Notifications = lazy(
  () => import("../pages/ProfessionalDashboard/Notifications"),
);
const Settings = lazy(() => import("../pages/ProfessionalDashboard/Settings"));

const ProfessionalRoutes = (
  <Route path="/dashboard/professional" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="bookings" element={<Bookings />} />
    <Route path="services" element={<Services />} />
    <Route path="messages" element={<Messages />} />
    <Route path="earnings" element={<Earnings />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="profile" element={<Profile />} />
    <Route path="notifications" element={<Notifications />} />
    <Route path="settings" element={<Settings />} />
  </Route>
);

export default ProfessionalRoutes;

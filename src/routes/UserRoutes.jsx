/**
 * @description Displays the User routes, i.e those who needs services
 * @access User Only.
 */

import { lazy } from "react"
import { Route } from "react-router-dom"
import RoleGuard from "./Guards/RoleGuard";

const Layout = lazy(() => import("../pages/UserDashboard/Layout"));
const Home = lazy(() => import("../pages/UserDashboard/Home"));
const Bookings = lazy(() => import("../pages/UserDashboard/Bookings"));
const FindArtisan = lazy(() => import("../pages/UserDashboard/Find-artisans"));
const Message = lazy(() => import("../pages/UserDashboard/Messages"));
const Saved = lazy(() => import("../pages/UserDashboard/Saved"));
const Profile = lazy(() => import("../pages/UserDashboard/Profile"));
const Settings = lazy(() => import("../pages/UserDashboard/Settings"));
const Chat = lazy(() => import("../pages/UserDashboard/Chat"));
const ArtisanProfile = lazy(() => import("../pages/UserDashboard/ArtisanProfile"));


const UserRoutes = (
  <Route element={<RoleGuard allowedRoles={["user"]}/>}>
    <Route path="/dashboard/user" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="find-artisan" element={<FindArtisan />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="messages" element={<Message />} />
      <Route path="messages/:id" element={<Chat />} />
      <Route path="saved" element={<Saved />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="artisan-profile/:id" element={<ArtisanProfile />} />
    </Route>
  </Route>
); 

export default UserRoutes
/**
 * @description Displays the User routes, i.e those who needs services
 * @access User Only.
 */

import { lazy } from "react"
import { Route } from "react-router-dom"

const Layout = lazy(() => import("../pages/UserDashboard/Layout"));
const Home = lazy(() => import("../pages/UserDashboard/Home"));

const UserRoutes = (
    <Route path="/dashboard/user" element={<Layout />}>
        <Route index element={<Home />} />
    </Route>
) 

export default UserRoutes
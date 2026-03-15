/**
 * @description Create all routes for the admin dashboard.
 *              - Guarded by the role guard to prevent unauthorized users from gaining access
 * @access Admin only
 */

import { Route } from "react-router-dom"
import Layout from "../pages/AdminDashboard/Layout"
import Home from "../pages/AdminDashboard/Home"

const AdminRoutes = (
    <Route path="/dashboard/admin" element={<Layout/>}>
        <Route index element={<Home />}/>
    </Route>
)

export default AdminRoutes;
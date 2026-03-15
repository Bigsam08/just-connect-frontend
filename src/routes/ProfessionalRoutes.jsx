/**
 * @description Displays the Artisians routes, i.e those rendering services
 * @access Professionals Only.
 */

import { lazy } from "react"
import { Route } from "react-router-dom"

const Layout = lazy(() => import("../pages/ProfessionalDashboard/Layout"));
const Home = lazy(() => import("../pages/ProfessionalDashboard/Home"));

const ProfessionalRoutes = (
  <Route path="/dashboard/professional" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
); 

export default ProfessionalRoutes;
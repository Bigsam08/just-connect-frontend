/**
 * @description This defines the landing page / public route for our page
 * @access Guest user only 
 */

import GuestGuard from "./Guards/GuestGuard";
import LandingPage from "../pages/LandingPage";
import { Route } from "react-router-dom";

const PublicRoute = (
    <Route element={<GuestGuard />}>
        <Route path="/" element={<LandingPage />} />
    </Route>
)

export default PublicRoute;
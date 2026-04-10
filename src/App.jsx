/**
 * @description APP ENTRY
 *              Global custom notification toast
 *              Global animation
 *              App routes file, where all routes are built
 */

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AppRoutes from "./routes/MainAppRoutes";
import NotificationToast from "./components/Common/NotificationToast";

const App = () => {
   useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      easing: "ease-in-out",
    });
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NotificationToast />
      <AppRoutes />
    </div>
  );
}

export default App
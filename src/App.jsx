/**
 * @description APP ENTRY
 */

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AppRoutes from "./routes/MainAppRoutes";

const App = () => {
   useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      easing: "ease-in-out",
    });
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AppRoutes />
    </div>
  );
}

export default App
/**
 * @description APP ENTRY
 */

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AppRoutes from "./routes/MainAppRoutes";

const App = () => {
   useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="h-screen">
      <AppRoutes />
    </div>
  )
}

export default App
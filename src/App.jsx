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
import useAuthStore from "./store/authStore";
import AppLoader from "./components/Common/AppLoader";

const App = () => {
  const { checkUser, user, checkingUser } = useAuthStore();

  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      easing: "ease-in-out",
    });
  }, []);

  // Check auth user
  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Display user data in dev mode only
  if (import.meta.env.DEV) {
    console.log("User:", user);
  }

  return (
    <>
      {checkingUser ? (
        <AppLoader />
      ) : (
        <div className="min-h-screen overflow-x-hidden">
          <NotificationToast />
          <AppRoutes />
        </div>
      )}
    </>
  );
};

export default App;

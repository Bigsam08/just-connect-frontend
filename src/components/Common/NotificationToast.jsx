/**
 * @description Notification toast design
 */

import { useEffect } from "react";
import { useNotificationStore } from "../../store/notificationStore";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const NotificationToast = () => {
  const { isOpen, message, type, closeNotification } = useNotificationStore();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeNotification();
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isOpen, closeNotification]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* Modal */}
      <div className="bg-white w-[90%] max-w-sm rounded-2xl shadow-xl p-6 flex flex-col items-center gap-3 animate-fadeIn">
        {/* Icon */}
        {type === "error" ? (
          <AiFillCloseCircle className="text-5xl text-red-500" />
        ) : (
          <AiFillCheckCircle className="text-5xl text-green-500" />
        )}

        {/* Message */}
        <h2
          className={`text-sm font-medium text-center ${
            type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </h2>
      </div>
    </div>
  );
};

export default NotificationToast;

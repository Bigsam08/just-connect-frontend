/**
 * @description Notification toast design
 */

import { useNotificationStore } from "../../store/notificationStore";

const NotificationToast = () => {
  const { isOpen, message, type, closeNotification, onConfirm } = useNotificationStore();

  if (!isOpen) return null;

  const handleClick = () => {
    closeNotification();
  }
  // This trigger whatever action when user clicks 'ok'
  if (onConfirm) {
    onConfirm()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-[90%] max-w-sm rounded-2xl shadow-xl p-6 text-center animate-fadeIn">
        {/* Title */}
        <h2
          className={`text-lg font-semibold mb-2 ${
            type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {type === "error" ? "Error" : "Success"}
        </h2>

        {/* Message */}
        <p className="text-gray-600 text-sm">{message}</p>

        {/* Button */}
        <button
          onClick={handleClick}
          className="mt-5 w-full bg-black hover:bg-gray-800 cursor-pointer text-white py-2 rounded-lg hover:opacity-90 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default NotificationToast;

/**
 * @description Component to display professional notification
 */


import { useState } from "react";

// Mock data (replace with backend fetch later)
const mockNotifications = [
  {
    id: 1,
    type: "booking",
    message: "New booking from Jane Doe",
    date: "2026-03-23 14:20",
    read: false,
  },
  {
    id: 2,
    type: "message",
    message: "Message from John Smith",
    date: "2026-03-22 10:15",
    read: true,
  },
  {
    id: 3,
    type: "update",
    message: "Your profile has been verified",
    date: "2026-03-20 09:00",
    read: true,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  // useEffect(() => {
  //   // TODO: replace with API fetch
  //   setNotifications(mockNotifications);
  // }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  return (
    <div className="w-full max-w-5xl flex flex-col gap-6" data-aos="fade">
      <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border border-gray-200 rounded-2xl shadow-sm flex justify-between items-center transition ${
                notification.read ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-gray-700">{notification.message}</span>
                <span className="text-gray-400 text-sm">
                  {notification.date}
                </span>
              </div>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="px-3 py-1 text-xs bg-black text-white rounded-full hover:opacity-90"
                >
                  Mark as Read
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;

/**
 * @description booking page for professionals, displaying incoming, accepted, ongoing , completed and cancelled bookings
 * @flow Incoming request accepted -> shows in the accepted, start job -> ongoing changes status to ongoing and -> completed when marked
 */

import { useState } from "react";

const tabs = ["Incoming", "Accepted", "Ongoing", "Completed", "Cancelled"];

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("Incoming");

  const [bookings, setBookings] = useState([
    {
      id: 1,
      service: "Plumbing Service",
      client: "John Doe",
      location: "Lekki",
      status: "Incoming",
    },
    {
      id: 2,
      service: "Leak Repair",
      client: "Jane Smith",
      location: "Ikeja",
      status: "Accepted",
    },
  ]);

  //  Actions
  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b)),
    );
  };

  // Filtered bookings
  const filtered = bookings.filter((b) => b.status === activeTab);

  return (
    <div className="w-full max-w-6xl flex flex-col gap-6">
      {/* Header */}
      <h1 className="text-lg font-semibold text-gray-800" data-aos="fade-in">Bookings</h1>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap bg-gray-200 p-3 rounded-3xl shadow-inset" data-aos="fade">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-2xl text-xs md:text-sm transition-all ${
              activeTab === tab
                ? "bg-brand text-white shadow-inset font-semibold"
                : " text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex flex-col gap-4" data-aos="zoom-in">
        {filtered.length > 0 ? (
          filtered.map((booking) => (
            <div
              key={booking.id}
              className="bg-brand-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              {/* Info */}
              <div>
                <h2 className="text-sm font-semibold text-gray-800">
                  {booking.service}
                </h2>
                <p className="text-xs text-gray-500">
                  Client: {booking.client}
                </p>
                <p className="text-xs text-gray-500">
                  Location: {booking.location}
                </p>
              </div>

              {/* Actions = Accept or deny*/}
              <div className="flex gap-2 flex-wrap">
                {booking.status === "Incoming" && (
                  <>
                    <button
                      onClick={() => updateStatus(booking.id, "Accepted")}
                      className="px-3 py-1 text-xs rounded-lg bg-green-300 text-green-700 hover:bg-green-500 hover:text-white cursor-pointer transition-all"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => updateStatus(booking.id, "Cancelled")}
                      className="px-3 py-1 text-xs rounded-lg bg-gray-200 hover:bg-red-500 hover:text-700 cursor-pointer transition-all"
                    >
                      Reject
                    </button>
                  </>
                )}

                {/** After booking has been accepted change the status to ongoing */}
                {booking.status === "Accepted" && (
                  <button
                    onClick={() => updateStatus(booking.id, "Ongoing")}
                    className="px-3 py-1 text-xs rounded-lg bg-black text-white"
                  >
                    Start Job
                  </button>
                )}

                {booking.status === "Ongoing" && (
                  <button
                    onClick={() => updateStatus(booking.id, "Completed")}
                    className="px-3 py-1 text-xs rounded-lg bg-black text-white"
                  >
                    Mark Completed
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No {activeTab.toLowerCase()} bookings
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;

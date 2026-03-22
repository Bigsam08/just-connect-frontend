/**
 * @description This component displays three booking states
 *              - upcoming bookings, completed bookings and the cancelled bookings
 */

import { useState } from "react";
import BookingCard from "../../components/User/BookingCard";

const sampleBookings = [
  {
    id: 1,
    artisanName: "John Electrician",
    service: "Electrical installation",
    date: "2026-03-20",
    time: "10:00 AM",
    location: "Lagos",
    status: "Upcoming",
    price: "₦5,000",
    img: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 2,
    artisanName: "Mary Plumber",
    service: "Plumbing & Repairs",
    date: "2026-03-15",
    time: "02:00 PM",
    location: "Ikeja",
    status: "Completed",
    price: "₦4,500",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    artisanName: "David Carpenter",
    service: "Furniture Repair",
    date: "2026-03-18",
    time: "09:00 AM",
    location: "Surulere",
    status: "Cancelled",
    price: "₦6,000",
    img: "https://i.pravatar.cc/150?img=14",
  },
];

const Bookings = () => {
  const [tab, setTab] = useState("Upcoming");

  const filteredBookings = sampleBookings.filter((b) => b.status === tab);

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl" data-aos="fade">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6 py-6 px-4 text-brand-white bg-brand rounded-xl">
        <h1 className="text-lg md:text-2xl font-semibold">My Bookings</h1>
       
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200">
        {["Upcoming", "Completed", "Cancelled"].map((status) => (
          <button
            key={status}
            className={`px-3 py-2 font-medium text-sm rounded-t-lg cursor-pointer ${
              tab === status
                ? "bg-black text-white"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setTab(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Booking Cards */}
      <div className="flex flex-col gap-4">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((b) => <BookingCard key={b.id} booking={b} />)
        ) : (
          <p className="text-gray-500 text-center py-8">
            No {tab.toLowerCase()} bookings.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

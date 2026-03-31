/**
 * @description A active booking reuseable card used in the user dashboard home
 *              The active booking is passed as object and then displayed
 */

const ActiveBooking = ({ booking }) => {
  if (!booking)
    return <div className="text-sm text-gray-600">No active bookings yet</div>;

  return (
    <div className="bg-brand-white shadow rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold">{booking.artisanName}</h3>
        <p className="text-gray-500 text-sm">{booking.service}</p>
        <p className="text-gray-400 text-sm">
          {booking.date} • {booking.time}
        </p>
      </div>

      <div className="flex flex-col items-start md:items-end gap-1">
        <span className="text-gray-700 font-semibold">{booking.price}</span>
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            booking.status === "Upcoming"
              ? "bg-blue-100 text-blue-800"
              : booking.status === "Completed"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {booking.status}
        </span>
      </div>
    </div>
  );
};

export default ActiveBooking;
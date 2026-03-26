/**
 * @returns A reuseable booking card for user dashboard booking page
 */

const BookingCard = ({ booking }) => {
  const statusColors = {
    Upcoming: "bg-blue-100 text-blue-800",
    Completed: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-lg transition">
      {/* Artisan Info */}
      <div className="flex items-center gap-4">
        <img
          src={booking.img}
          alt={booking.artisanName}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{booking.artisanName}</h3>
          <p className="text-gray-500 text-sm">{booking.service}</p>
          <p className="text-gray-400 text-sm">{booking.location}</p>
        </div>
      </div>

      {/* Booking Details */}
      <div className="flex flex-col items-start sm:items-end gap-1">
        <span className="text-gray-600 text-sm">
          {booking.date} • {booking.time}
        </span>
        <span
          className={`text-sm font-medium px-2 py-1 rounded-full ${statusColors[booking.status]}`}
        >
          {booking.status}
        </span>
      </div>

      {/* Actions */}
      {booking.status === "Upcoming" && (
        <button className="mt-2 sm:mt-0 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm">
          Cancel
        </button>
      )}
    </div>
  );
};

export default BookingCard;
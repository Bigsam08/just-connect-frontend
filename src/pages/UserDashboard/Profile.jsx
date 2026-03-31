/**
 * @description User Profile Page (public view style)
 */

import { getNameInitials } from "../../libs/getNameInitials";

const Profile = () => {
  // sample user data (replace with API later)
  const user = {
    name: "Big Sam",
    email: "bigsam@example.com",
    phone: "+234 800 000 0000",
    location: "Lagos, Nigeria",
    joined: "January 2026",
    img: "",
    bookings: 12,
    completed: 10,
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      {/* Profile Header */}
      <div
        className="bg-brand px-4 py-6 rounded-2xl text-brand-white"
        data-aos="fade"
      >
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-gray-200 text-sm">See your profile details</p>
      </div>

      {/** avatar header */}
      <section className="bg-white p-6 rounded-2xl shadow flex flex-col md:flex-row items-center gap-6">
        {user.img ? (
          <img
            src={user.img}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-lg bg-gray-200 shadow-2xs">
            <span> {getNameInitials(user.name)} </span>
          </div>
        )}

        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <p className="text-gray-500 text-sm">{user.location}</p>
          <p className="text-gray-400 text-xs mt-1">Joined {user.joined}</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="font-semibold text-lg">Personal Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Email</span>
            <p className="font-medium">{user.email}</p>
          </div>

          <div>
            <span className="text-gray-500">Phone</span>
            <p className="font-medium">{user.phone}</p>
          </div>

          <div>
            <span className="text-gray-500">Location</span>
            <p className="font-medium">{user.location}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold">{user.bookings}</h3>
          <p className="text-gray-500 text-sm">Total Bookings</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold">{user.completed}</h3>
          <p className="text-gray-500 text-sm">Completed Jobs</p>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-semibold text-lg mb-4">Recent Activity</h2>

        <div className="text-sm text-gray-500">No recent activity yet.</div>
      </section>
    </div>
  );
};

export default Profile;

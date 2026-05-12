/**
 * @description User Profile Page (public view style)
 */

import { getNameInitials } from "../../libs/getNameInitials";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import useAuthStore from "../../store/authStore";
import { FormatDateJoined } from "../../libs/convertDateFormat";

const Profile = () => {
  const { user } = useAuthStore();
  // const user = {
  //   name: "Big Sam",
  //   email: "bigsam@example.com",
  //   phone: "+234 800 000 0000",
  //   sex: "",
  //   address: "",
  //   location: "Lagos, Nigeria",
  //   is_verified: false,
  //   joined: "January 2026",
  //   profile_picture: "",
  //   bookings: 12,
  //   completed: 10,
  // };

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
        {user.profile_picture ? (
          <img
            src={user.profile_picture}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-lg bg-gray-200 shadow-2xs">
            <span> {getNameInitials(user.name)} </span>
          </div>
        )}

        <div className="text-center md:text-left w-fit">
          <h1 className="text-2xl font-semibold">
            {user.name}
            <span className="inline-flex rounded-full">
              {" "}
              {user.is_verified ? (
                <div className="flex items-center gap-2 px-2">
                  <FaCheckCircle color="green" size={14} />
                  <span className="text-xs text-gray-500"> verified</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 px-2">
                  <FaTimesCircle color="blue" size={14} />
                  <span className="text-xs text-gray-500"> not verified</span>
                </div>
              )}{" "}
            </span>
          </h1>
          <p className="text-gray-500 text-sm">
            {user.location || "location: N/A"}
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Joined: {FormatDateJoined(user.dateJoined)}
          </p>
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
            <span className="text-gray-500">Sex</span>
            <p className="font-medium">{user?.sex || "N/A"}</p>
          </div>
          <div>
            <span className="text-gray-500">Address</span>
            <p className="font-medium">{user?.address || "N/A"}</p>
          </div>
          <div>
            <span className="text-gray-500">Phone</span>
            <p className="font-medium">{user.phone || "N/A"}</p>
          </div>

          <div>
            <span className="text-gray-500">Phone</span>
            <p className="font-medium">{user.phone || "N/A"}</p>
          </div>

          <div>
            <span className="text-gray-500">Location</span>
            <p className="font-medium">{user.location || "N/A"}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold">{user.bookings || "0"}</h3>
          <p className="text-gray-500 text-sm">Total Bookings</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold">{user.completed || "0"}</h3>
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

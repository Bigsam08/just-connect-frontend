/**
 * @description displays the profile page for profesiionals
 */

import { MapPin, Star } from "lucide-react";
import { getNameInitials } from "../../libs/getNameInitials";

const Profile = () => {
  const user = {
    name: "agbebi olu",
    skill: "cleaner",
    image: "",
    location: "Ikeja, lagos",
    about: "",
    services: ["Pipe Installation", "Leak Repair", "Maintenance"],
  };

  return (
    <div className="w-full max-w-5xl flex flex-col gap-6" data-aos="fade">
      <div>
        <h1 className="text-black font-semibold text-lg"> Profile </h1>
        <p className="text-sm text-gray-500">See your profile settings here</p>
      </div>
      {/*  Header */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Avatar */}
        <div className="h-20 w-20 rounded-2xl overflow-hidden bg-black text-white flex items-center justify-center text-2xl font-semibold">
          {user?.image ? (
            <img
              src={user.image}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            getNameInitials(user?.name)
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            {user.name}
          </h2>

          <p className="text-sm text-gray-500 capitalize">{user.skill}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star size={16} className="fill-black" />
            4.8 (24 reviews)
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 capitalize text-sm text-gray-500">
            <MapPin size={16} />
            {user.location}
          </div>
        </div>
      </section>

      {/*  About */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">About</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {user.about || "No about yet."}
        </p>
      </section>

      {/* Skills / Services */}
      <section className="bg-white border rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Services</h3>

        <div className="flex flex-wrap gap-2">
          {user?.services?.length ? (
            user.services.map((service) => (
              <span
                key={service}
                className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
              >
                {service}
              </span>
            ))
          ) : (
            <span className="text-sm text-gray-400">No services yet</span>
          )}
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-white border rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <p>
            <span className="font-medium">Experience:</span> 5 years
          </p>
          <p>
            <span className="font-medium">Availability:</span> Weekdays
          </p>
          <p>
            <span className="font-medium">Service Area:</span> Lagos
          </p>
          <p>
            <span className="font-medium">Response Time:</span> ~1 hour
          </p>
        </div>
      </section>
    </div>
  );
};

export default Profile;

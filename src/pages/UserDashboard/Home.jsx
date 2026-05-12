/**
 * @description Displays user home dashboard
 *              Takes three sections, the greeting, the active booking and recommended artisans
 */

import { useState } from "react";
import ArtisanCard from "../../components/User/ArtisanCard";
import ActiveBooking from "../../components/User/ActiveBooking";
import { recommendedArtisans } from "../../data/RecommendedArtisans"
import { Search } from "lucide-react";
import useAuthStore from "../../store/authStore";


// Greeting function to set which time of the day.
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning ☀️";
  if (hour < 18) return "Good afternoon 🌤️";
  return "Good evening 🌙";
};

const Home = () => {
  const { user } = useAuthStore();
  const [search, setSearch] = useState("");
  const activeBooking = null; // Replace with API data

  const filteredArtisans = recommendedArtisans.filter(
    (artisan) =>
      artisan.name.toLowerCase().includes(search.toLowerCase()) ||
      artisan.skill.toLowerCase().includes(search.toLowerCase()) ||
      artisan.location.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="md:p-6 space-y-6 w-full" data-aos="fade">
      {/*1.  Header container */}
      <div className="space-y-6 bg-brand px-6 py-10 rounded-2xl shadow text-brand-white">
        {/* Greeting */}
        <section>
          <h1 className="text-2xl font-semibold">
            {getGreeting()}, {user.name} 👋
          </h1>
          <p className="text-gray-200 text-sm">
            What do you need help with today?
          </p>
        </section>

        {/* Search */}
        <section className="relative">
          <input
            type="text"
            placeholder="Search for artisans (e.g plumber, electrician...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-4 pr-10 bg-white text-gray-500 border border-gray-200 rounded-full outline-none focus:ring-2 focus:ring-orange-300"
          />

          <Search
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </section>
      </div>

      {/*2.  Active Booking */}
      <section className="bg-white shadow rounded-2xl p-4">
        <h2 className="font-semibold mb-2">Active Booking</h2>
        <ActiveBooking booking={activeBooking} />
      </section>

      {/* 3. Recommended Artisans */}
      <section>
        <h2 className="font-semibold mb-3">Recommended Artisans</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredArtisans.length > 0 ? (
            filteredArtisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center">
              No artisans found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
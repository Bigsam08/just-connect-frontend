/**
 * @description Page to search and view artisans
 */

import { useState } from "react";
import ArtisanCard from "../../components/User/ArtisanCard";
import { recommendedArtisans } from "../../data/RecommendedArtisans";


const Findartisans = () => {
  const [search, setSearch] = useState("");

  const filteredArtisans = recommendedArtisans.filter(
    (artisan) =>
      artisan.name.toLowerCase().includes(search.toLowerCase()) ||
      artisan.skill.toLowerCase().includes(search.toLowerCase()) ||
      artisan.location.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-6 w-full" data-aos="fade">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6 px-4 py-6 bg-brand text-brand-white rounded-xl">
        <h1 className="text-lg md:text-2xl font-semibold">Find Artisans</h1>
        <button className="mt-3 md:mt-0 bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Filter
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search artisans by name, skill, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 outline-none"
        />
      </div>

      {/* Artisans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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
    </div>
  );
};

export default Findartisans;
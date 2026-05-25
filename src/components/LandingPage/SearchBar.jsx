/**
 * @description Search bar for the hero section
 */

import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

const SearchBar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto backdrop-blur-md bg-white/95 shadow-2xl border border-gray-200 rounded-2xl p-3 md:p-4">
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Search skill */}
        <div className="flex items-center w-full border border-gray-200 rounded-xl px-3 bg-gray-50 focus-within:ring-2 focus-within:ring-brand transition">
          <FaSearch size={16} className="text-brand shrink-0" />

          <input
            type="text"
            placeholder="Search for artisan or skill..."
            className="w-full py-2 px-3 outline-none text-gray-700 bg-transparent text-xs"
          />
        </div>

        {/* Location */}
        <div className="flex items-center w-full border border-gray-200 rounded-xl px-3 bg-gray-50 focus-within:ring-2 focus-within:ring-brand transition text-xs">
          <FaMapMarkerAlt size={16} className="text-brand shrink-0" />

          <input
            type="text"
            placeholder="Location"
            className="w-full py-2 px-3 outline-none text-gray-700 bg-transparent"
          />
        </div>

        {/* Button */}
        <button className="flex items-center justify-center gap-3 bg-brand hover:bg-brand-hover text-white cursor-pointer px-6 md:px-8 py-3 text-xs rounded-xl font-medium transition whitespace-nowrap min-w-35">
          <GiCompass size={14} />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

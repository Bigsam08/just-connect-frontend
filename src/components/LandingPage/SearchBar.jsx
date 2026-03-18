/**
 * @description Search bar for the hero section
 */

import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

const SearchBar = () => {
  return (
    <div className="backdrop-blur-md bg-white shadow-xl border border-gray-200 rounded-xl p-2 md:p-4 flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full">
      {/* Search skill */}
      <div className="flex items-center w-full border rounded-lg px-3">
        <FaSearch className="text-brand mr-2" />
        <input
          type="text"
          placeholder="Search for artisan or skill..."
          className="w-full py-2 outline-none text-gray-700 bg-gray-100 ps-4 rounded-md"
        />
      </div>

      {/* Location */}
      <div className="flex items-center w-full border rounded-lg px-3">
        <FaMapMarkerAlt className="text-brand mr-2" />
        <input
          type="text"
          placeholder="Location"
          className="w-full py-2 outline-none text-gray-700 bg-gray-100 ps-4 rounded-md"
        />
      </div>

      {/* Button */}
      <button className="flex items-center justify-center gap-4 bg-brand hover:bg-brand-hover text-white cursor-pointer px-6 py-2 rounded-lg font-medium transition whitespace-nowrap">
        <GiCompass /> Search
      </button>
    </div>
  );
};

export default SearchBar;

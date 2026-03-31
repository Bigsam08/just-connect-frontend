/**
 * @description reuseable card to display artisans
 */

import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getNameInitials } from "../../libs/getNameInitials";

const ArtisanCard = ({ artisan }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition flex flex-col">
      {/* Image */}
      {artisan.img ? (
        <img
          src={artisan.img}
          alt={artisan.name}
          className="w-full h-32 object-cover rounded-2xl mb-4"
        />
      ) : (
        <div className="w-full h-32 flex items-center justify-center rounded-2xl mb-4 bg-gray-200 text-gray-500 text-sm font-bold">
          {getNameInitials(artisan.name)}
        </div>
      )}

      {/* Name & Skill */}
      <h3 className="font-semibold text-md md:text-lg">{artisan.name}</h3>
      <p className="text-gray-500 text-sm">{artisan.skill}</p>

      {/* Location & Rating */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <MapPin size={16} />
          <span>{artisan.location}</span>
        </div>
        <span className="text-yellow-500 font-medium text-xs md:text-sm">
          ⭐ {artisan.rating}
        </span>
      </div>

      {/* Price & Button */}
      <div className="mt-4 flex flex-col md:flex-row justify-between gap-3 md:gap-0 md:items-center">
        
        <button
          type="button"
          onClick={() =>
            navigate(`/dashboard/user/artisan-profile/${artisan.id}`)
          }
          className="bg-brand text-brand-white text-sm px-3 py-2 rounded-md hover:bg-brand-hover transition-all cursor-pointer"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ArtisanCard;
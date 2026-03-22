/**
 * @description Saved artisans page (favorites)
 */

import { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";


const initialSaved = [
  {
    id: 1,
    name: "John Electrician",
    skill: "Electrical installation",
    location: "Lagos",
    rating: 4.8,
    price: "₦5,000/day",
    img: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 2,
    name: "Mary Plumber",
    skill: "Plumbing & Repairs",
    location: "Ikeja",
    rating: 4.7,
    price: "₦4,500/day",
    img: "https://i.pravatar.cc/150?img=12",
  },
];

const Saved = () => {
  const [saved, setSaved] = useState(initialSaved);
  const navigate = useNavigate();
  const handleRemove = (id) => {
    setSaved(saved.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex justify-between items-center bg-brand py-6 px-4 text-brand-white rounded-xl" data-aos="fade">
        <h1 className="text-2xl font-semibold">Saved Artisans</h1>
        <p className="text-sm">{saved.length} saved</p>
      </div>

      {/* Grid */}
      {saved.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {saved.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white rounded-2xl shadow p-4 flex flex-col relative"
            >
              {/* Remove Button */}
              <button
                onClick={() => handleRemove(artisan.id)}
                className="absolute top-3 right-3 text-red-500 hover:scale-110 transition"
              >
                <Heart fill="currentColor" size={18} />
              </button>

              {/* Image */}
              <img
                src={artisan.img}
                alt={artisan.name}
                className="w-full h-36 object-cover rounded-xl mb-3"
              />

              {/* Info */}
              <h3 className="font-semibold">{artisan.name}</h3>
              <p className="text-gray-500 text-sm">{artisan.skill}</p>

              <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{artisan.location}</span>
                </div>
                <span>⭐ {artisan.rating}</span>
              </div>

              {/* Actions */}
              <div className="mt-4 flex justify-between items-center">
                <span className="font-medium text-gray-700">
                  {artisan.price}
                </span>

                <button type="button" onClick={() => navigate(`/dashboard/user/artisan-profile/${artisan.id}`)} className="bg-brand  text-white px-3 py-1 rounded-lg text-sm hover:bg-brand-hover transition cursor-pointer">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <h2 className="text-lg font-semibold">No saved artisans yet</h2>
          <p className="text-gray-500 text-sm mt-1">
            Start exploring and save artisans you like
          </p>

          <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
            Find Artisans
          </button>
        </div>
      )}
    </div>
  );
};

export default Saved;

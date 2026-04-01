/**
 * @description this displays the mini card for professionals in the landing page
 */

import { useNavigate } from "react-router-dom";
import { recommendedArtisans } from "../../data/RecommendedArtisans";
import { BadgeCheck } from "lucide-react";

const FeaturedProfessionals = () => {
  const navigate = useNavigate();

  return (
    <section
      id="professionals"
      className="scroll-mt-24 py-20 bg-gray-50 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header: title stays the same */}
        <div className="mb-16">
          <h2 className="text-section-title" data-aos="fade">
            Featured <span className="text-brand"> Professionals</span>
          </h2>
          <div
            className="h-1 w-16 bg-brand mx-auto mt-3 rounded-full"
            data-aos="fade-right"
            data-aos-delay="500"
          ></div>

          <p className="text-section-subtitle">
            See some of the trusted professionals available on our platform.
            Sign in to view more and book easily.
          </p>
        </div>

        {/* Cards + Browse More button */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 flex-1">
            {recommendedArtisans.slice(0, 3).map((pro) => (
              <div
                key={pro.id}
                data-aos="fade-up"
                data-aos-delay={150 * pro.id}
                className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition"
              >
                {/* Image with verified badge */}
                <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
                  <img
                    src={pro.img}
                    alt={pro.name}
                    className="w-full h-full object-center"
                  />
                    <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                      <BadgeCheck className="w-4 h-4 text-green-500" />
                    </div>
                </div>

                {/* Name */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{pro.name}</h3>
                </div>

                {/* Profession */}
                <p className="text-gray-500 text-sm text-left">{pro.skill}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">{pro.rating}</span>
                </div>

                {/* Location */}
                <p className="text-gray-400 text-sm mt-1 text-left">
                  📍 {pro.location}
                </p>

                {/* Card CTA */}
                <button
                  onClick={() => navigate("/login")}
                  className="mt-4 w-full bg-brand text-white py-2 rounded-xl hover:opacity-90"
                >
                  View More
                </button>
              </div>
            ))}
          </div>

          {/* Browse More button */}
          <div className="flex lg:flex-col items-center lg:justify-start lg:ml-6 mt-4 lg:mt-0">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
            >
              Browse More Professionals →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfessionals;

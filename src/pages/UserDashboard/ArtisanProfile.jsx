import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Star, ArrowLeft } from "lucide-react";
import { recommendedArtisans } from "../../data/RecommendedArtisans";
import { useState } from "react";
import BookingModal from "../../components/User/BookingModal";
import { getNameInitials } from "../../libs/getNameInitials";

const ArtisanProfile = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const artisan = recommendedArtisans.find((a) => a.id === Number(id));

  if (!artisan) {
    return <p>Artisan not found</p>;
  }

  // Handle booking confirmation
  const handleBookingConfirmation = () => {};

  return (
    <div className="w-full max-w-4xl pb-24 space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm mb-4 cursor-pointer hover:bg-gray-200"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-lg md:text-2xl font-bold mb-4">
        {artisan.name}’s Profile
      </h1>
      {/* Header */}
      <section className="bg-white p-6 rounded-2xl shadow flex flex-col md:flex-row gap-6 items-center md:items-start">
        {artisan.img ? (
          <img
            src={artisan.img}
            alt={artisan.name}
            className="w-32 h-32 rounded-2xl object-cover"
          />
        ) : (
          <div className="w-32 h-32 flex items-center justify-center rounded-2xl mb-4 bg-gray-200 text-gray-500 text-sm font-bold">
            {getNameInitials(artisan.name)}
          </div>
        )}

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-semibold">{artisan.name}</h1>

          <div className="flex justify-center md:justify-start items-center gap-2 mt-2 text-sm text-gray-600">
            <MapPin size={16} />
            <span>{artisan.location}</span>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-1 mt-1 text-yellow-500">
            <Star size={16} />
            <span className="text-sm font-medium">{artisan.rating}</span>
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-3 justify-center md:justify-start">
            <button
              onClick={() => setBookingOpen(true)}
              className="bg-gray-700 cursor-pointer transition-colors text-white px-4 py-2 rounded-lg hover:bg-green-500 hover:shadow-md"
            >
              Book Now
            </button>

            <button
              onClick={() => navigate("/dashboard/messages")}
              className="border border-gray-200 hover:border-gray-500 px-4 py-2 rounded-lg hover:shadow-md cursor-pointer"
            >
              Message
            </button>
          </div>
        </div>
      </section>

      {/** About section */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-semibold text-lg mb-2">About</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {artisan.about ||
            "This artisan hasn’t provided an About section yet."}
        </p>
      </section>
      {/* Services section */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-semibold text-lg mb-3">Services</h2>
        <div className="flex flex-wrap gap-2">
          {artisan.services && artisan.services.length > 0 ? (
            artisan.services.map((service, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {service}
              </span>
            ))
          ) : (
            <span className="text-gray-400 text-sm">
              No services listed yet.
            </span>
          )}
        </div>
      </section>

      {/* Reviews section */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="font-semibold text-lg mb-3">Reviews</h2>
        <div className="space-y-3">
          {artisan.reviews && artisan.reviews.length > 0 ? (
            artisan.reviews.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-200 pb-2 last:border-none"
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm">{review.name}</p>
                  <span className="text-yellow-500 text-sm">
                    ⭐ {review.rating}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">"{review.comment}"</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No reviews yet.</p>
          )}
        </div>
      </section>

      {/* Sticky Bottom CTA (Mobile UX) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 p-4 flex gap-3 md:hidden">
        <button
          type="button"
          onClick={() => setBookingOpen(true)}
          className="flex-1 bg-black text-white py-2 rounded-lg cursor-pointer hover:bg-green-500"
        >
          Book
        </button>
        <button className="flex-1 border py-2 rounded-lg">Message</button>
      </div>

      {/** ========== Booking Modal ===========*/}
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        artisan={artisan}
        onConfirm={handleBookingConfirmation}
      />
    </div>
  );
};

export default ArtisanProfile;

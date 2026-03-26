/**
 * @description disaplays profesiionals reviews
 */


import  { useState } from "react";

// Mock reviews data (replace with API fetch later)
const mockReviews = [
  {
    id: 1,
    clientName: "Jane Doe",
    rating: 5,
    comment: "Great work, very professional!",
    date: "2026-03-20",
  },
  {
    id: 2,
    clientName: "John Smith",
    rating: 4,
    comment: "Good service, on time.",
    date: "2026-03-18",
  },
];

const Reviews = () => {
  const [reviews] = useState(mockReviews);

  // // Fetch reviews (replace with actual API)
  // useEffect(() => {
  //   // TODO: fetch reviews from backend
  //   setReviews(mockReviews);
  // }, []);

  const averageRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1);

  return (
    <div className="w-full max-w-5xl flex flex-col gap-6" data-aos="fade">
      {/* Summary */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800">
          Reviews Overview
        </h2>
        <p className="text-gray-600">
          {reviews.length} review{reviews.length !== 1 && "s"} | Average rating:{" "}
          {averageRating.toFixed(1)} / 5
        </p>
      </section>

      {/* Reviews List */}
      <section className="flex flex-col gap-4">
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  {review.clientName}
                </span>
                <span className="text-yellow-500 font-bold">
                  {review.rating} ★
                </span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <span className="text-gray-400 text-sm">{review.date}</span>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Reviews;

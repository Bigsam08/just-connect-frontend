/**
 * @description Testimonials section with aligned image, name, and star rating
 */

import { testimonials } from "../../data/LandingPageData";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-gray-50 px-6 md:px-16 overflow-hidden">
      {/* Blurred shapes behind */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-200 opacity-10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200 opacity-10 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-section-title mb-4">
          What Our <span className="text-brand">Users Say</span>
        </h2>
        <div
          className="h-1 w-20 bg-brand mx-auto mt-3 mb-12 rounded-full"
          data-aos="fade-right"
          data-aos-delay="500"
        ></div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              {/* Quote */}
              <p className="text-gray-700 mb-6 italic text-md">"{t.quote}"</p>

              {/* Image + Name + Stars */}
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                />
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {t.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-1">{t.location}</p>
                  {/* Stars */}
                  <div className="flex gap-1 text-brand">
                    {[...Array(5)].map((_, starIdx) => (
                      <FaStar key={starIdx} size={14} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

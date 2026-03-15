/**
 * @description Call-to-Action section
 */

import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-32 bg-linear-to-b from-gray-50 via-orange-500 to-white px-6 md:px-16 text-center text-gray-800 rounded-t-3xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-section-title mb-6" data-aos="fade">
          Ready to connect with skilled artisans?
        </h2>
        <p className="mb-8 text-md md:text-lg">
          Join JustConnect today and find the perfect artisan for your project.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="register">
            <button type="button" className="bg-white text-brand cursor-pointer font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Find an Artisan
            </button>
          </Link>

          <Link to="/register" data-aos="fade-left">
            <button type="button" className="border cursor-pointer border-gray-500 font-semibold px-6 py-3 rounded-lg hover:bg-white transition">
              Raedy to offer services?
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

/**
 * @description Categories section for JustConnect
 */

import { categories } from "../../data/LandingPageData";

const Categories = () => {
  return (
    <section
      id="categories"
      className="scroll-mt-24 py-20 bg-gray-50 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-section-title" data-aos="fade">
            Explore <span className="text-brand"> Categories</span>
          </h2>
          <div
            className="h-1 w-16 bg-brand mx-auto mt-3 rounded-full"
            data-aos="fade-right"
            data-aos-delay="500"
          ></div>

          <p className="text-section-subtitle">
            Browse skilled professionals across different services and find the
            right artisan for your project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center p-6 bg-brand-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Icon */}
                <div className="w-24 h-24 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full text-xl mb-4 group-hover:bg-orange-500 group-hover:text-white transition">
                  <Icon size={60} />
                </div>

                {/* Name */}
                <span className="font-semibold text-gray-700 group-hover:text-orange-500 transition">
                  {category.name}
                </span>

                {/* Description */}
                <span className="text-xs md:text-sm mt-4 text-gray-700 group-hover:text-orange-500 transition">
                  {category.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

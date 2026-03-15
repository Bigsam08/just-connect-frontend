/**
 * @description How It Works section for JustConnect
 */

import { howItWorksData } from "../../data/LandingPageData";

const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className="scroll-mt-24 py-20 bg-gray-50 px-6 md:px-16 mt-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-section-title" data-aos="fade">
            How I<span className="text-brand">t Works</span>
          </h2>
          <div
            className="h-1 w-16 bg-brand mx-auto mt-3 rounded-full"
            data-aos="fade-right"
            data-aos-delay="500"
          ></div>
          <p className="text-section-subtitle">
            Getting the right artisan for your job is quick and easy with
            JustConnect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {howItWorksData.map((step, index) => (
            <div
              key={index}
              className="relative bg-brand-white border border-orange-100 p-8 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition duration-300"
              data-aos="zoom-out"
              data-aos-delay={index * 150}
            >

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 flex items-center justify-center bg-orange-100 text-brand rounded-full text-xl animate-pulse">
                  {<step.icon size={60} />}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

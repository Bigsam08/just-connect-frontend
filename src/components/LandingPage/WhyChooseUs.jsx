/**
 * @description Why Choose Us section
 */

import { FaCheckCircle, FaUserShield, FaBolt, FaStar } from "react-icons/fa";

const features = [
  {
    icon: <FaUserShield />,
    title: "Verified Artisans",
    desc: "All artisans are verified to ensure quality and trust.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Connections",
    desc: "Connect instantly with skilled artisans near you.",
  },
  {
    icon: <FaStar />,
    title: "Trusted Reviews",
    desc: "See honest reviews from previous clients.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Secure Payments",
    desc: "Safe and easy payments through our platform.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-brand-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-section-title">Why Choose JustConnect</h2>
        <div
          className="h-1 w-16 bg-brand mx-auto mt-3 rounded-full mb-12"
          data-aos="fade-right"
          data-aos-delay="500"
        ></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-16 px-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="text-brand text-8xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-center text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

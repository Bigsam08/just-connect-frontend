import AboutImage from "../../assets/about-us.webp";

const AboutUs = () => {
  return (
    <section
    id="about"
      className="relative scroll-mt-24 py-20 bg-gray-900 px-6 md:px-16 overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)" }}
    >
      {/* Gradient background */}
      <div className="absolute right-0 top-5 h-48 w-48 blur-3xl rounded-full bg-linear-to-l from-gray-100 via-orange-500 to-orange-900 opacity-40 lg:opacity-80"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="flex-1" data-aos="fade-right">
          <img
            src={AboutImage}
            alt="About JustConnect"
            className="w-full rounded-xl shadow-2xl"
            data-aos="fade"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-brand-white">
          <h2 className="text-section-title w-full text-center">
            About{" "}
            <span className="text-brand">
              <span className="text-brand-white">Just</span>Connect
            </span>
          </h2>

          {/* Decorative underline */}
          <div
            className="h-1 w-20 bg-brand mt-3 mx-auto rounded-full"
            data-aos="fade-right"
            data-aos-delay="500"
          ></div>

          <p
            className="text-gray-200 mt-8 mb-4 leading-relaxed"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            JustConnect is a platform dedicated to connecting individuals with
            talented professionals across Africa. Whether you’re looking for
            carpentry, tailoring, painting, or other skilled services, we make
            it simple to find trusted professionals.
          </p>

          <p
            className="text-gray-400 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our mission is to empower professionals, provide a secure and reliable
            experience for clients, and support local craftsmanship in every
            community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

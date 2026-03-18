/**
 * @description Contact Us section with form, address, header, and illustration
 */

import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactIllustration from "../../assets/contactUs.svg";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      id="contact"
      className="border border-gray-200 scroll-mt-24 py-20 px-6 md:px-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* Section Header */}
        <h2 className="text-section-title">
          Get in <span className="text-brand">Touch</span>
        </h2>
        <div
          className="h-1 w-16 bg-brand mx-auto mt-3 rounded-full"
          data-aos="fade-right"
          data-aos-delay="500"
        ></div>
        <p className="text-gray-400 mt-4">
          Have questions or want to collaborate? Reach out to us, and we’ll get
          back to you promptly.
        </p>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 md:col-span-2 p-8">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={message}
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
              <button
                type="submit"
                className="bg-brand hover:bg-brand-hover text-brand-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="bg-brand w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-8 rounded-xl relative"
            data-aos="fade-down"
          >
            <p className="mb-8 text-2xl font-bold">Reach Us On</p>
            <p className="text-sm mb-8 text-start">
              Choose the best way to reach us. We're committed to providing
              excellent customer service and support.
            </p>
            {/* Address / Contact Info */}
            <div className="flex flex-col gap-8 w-full text-gray-800">
              <div className="flex items-start text-sm">
                <FaMapMarkerAlt className="text-brand-white text-xl mr-4 mt-1" />
                <p>123 Artisan Street, Lagos, Nigeria</p>
              </div>
              <div className="flex items-start text-sm">
                <FaPhone className="text-brand-white text-xl mr-4 mt-1" />
                <p>+234 800 123 4567</p>
              </div>
              <div className="flex items-start text-sm">
                <FaEnvelope className="text-brand-white text-xl mr-4 mt-1" />
                <p>support@justconnect.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom-right illustration */}
      <div className="hidden lg:block absolute bottom-0 right-0 h-fit w-64 z-0">
        <img
          src={ContactIllustration}
          alt="Contact Illustration"
          className="w-64 object-contain"
          data-aos="zoom-in"
        />
      </div>
    </section>
  );
};

export default ContactUs;

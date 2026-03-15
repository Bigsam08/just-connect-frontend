/**
 * @description Sign Up page with role selection (Artisan or User)
 */

import { useState } from "react";
import Logo from "../../assets/vite.svg"; // your logo
import HeroImage from "../../assets/hero.png"

const Register = () => {
  const [role, setRole] = useState(""); // "artisan" or "user"

  return (
    <section className="min-h-screen flex">
      {/* Left Branding Section */}
      <div className="hidden md:flex w-1/2 relative text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }} // reuse HeroImage
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Join <span className="font-extrabold">JustConnect</span>
          </h1>
          <p className="text-lg text-orange-100 text-center bg-red-600">
            Discover and support skilled artisans, or become one yourself!
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md p-8">
          {/* Logo + Back Button */}
          <div className="flex items-center gap-4 mb-6">
            <button className="text-gray-500 hover:text-gray-700">
              &#8592;
            </button>
            <img src={Logo} alt="JustConnect Logo" className="h-8" />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">
            Create your account
          </h2>

          {/* Role Selection */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setRole("user")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                role === "user" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              User
            </button>
            <button
              onClick={() => setRole("artisan")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                role === "artisan" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              Artisan
            </button>
          </div>

          {/* Form */}
          {role && (
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Extra fields for Artisan */}
              {role === "artisan" && (
                <input
                  type="text"
                  placeholder="Skill / Craft"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              )}

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
              >
                Sign Up
              </button>
            </form>
          )}

          {/* Login link */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <span className="text-orange-500 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;

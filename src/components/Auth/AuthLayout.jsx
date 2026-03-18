/**
 * @description Auth layout with responsive, scrollable form card
 */

import { useNavigate } from "react-router-dom";
import HeroIllustration from "../../assets/hero.png";
import Logo from "../../assets/vite.svg";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-brand overflow-x-hidden">
      {/* ===== Top Background Section ===== */}
      <div
        className="h-[45vh] md:h-[50vh] w-full relative"
        style={{
          backgroundImage: `url(${HeroIllustration})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Logo + Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
          <div className="flex justify-center mb-6">
            <img src={Logo} alt="JustConnect Logo" className="h-8" />
          </div>
          <h1 className="hidden md:block text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome to{" "}
            <span className="font-extrabold">
              Just<span className="text-brand">Connect</span>
            </span>
          </h1>
          <p className="text-brand-white text-sm md:text-base">
            Connect with skilled artisans and bring your ideas to life.
          </p>
        </div>
      </div>

      {/* ===== Floating Form Section ===== */}
      <div className="relative z-20 -mt-24 md:-mt-32 px-4">
        <div
          className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 min-h-75 max-h-[80vh] overflow-y-auto"
        >
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="text-gray-500 text-sm mb-4 hover:bg-gray-200 cursor-pointer px-2 py-1 rounded"
          >
            ← Back
          </button>

          {/* Form */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

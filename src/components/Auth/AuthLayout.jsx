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
        className="min-h-20 md:min-h-96 w-full relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroIllustration})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Logo + Text */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center pb-24 md:pb-32">
          <div className="flex justify-center my-6">
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
      <div className="relative z-20 -mt-16 sm:-mt-20 md:-mt-32 px-4 pb-20">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl shadow-white/10 p-6 md:p-8 mb-20">
          {/* Sticky header still fine */}
          <div className="sticky top-0 bg-white pb-4 z-10">
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 text-xs hover:bg-gray-100 px-2 py-1 rounded"
            >
              ← Back
            </button>
          </div>

          {/* Form */}
          <div className="space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

/**
 * @description Reusable Input with password toggle
 */

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ label, type = "text", error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full">
      {/* Label */}
      <label className="text-xs text-gray-500 ps-2">{label}</label>

      {/* Input wrapper */}
      <div className="relative mt-1">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className={`bg-gray-50 w-full rounded-md p-2 ps-2 text-xs lg:text-sm text-gray-700 
          focus:ring-2 focus:ring-orange-500 outline-none transition
          ${error ? "border border-red-400" : "border border-gray-200"}`}
          {...props}
        />

        {/* Eye toggle (only for password) */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {/* Error */}
      {error && (
        <span className="text-xs text-red-500 ps-4 mt-1 block">{error}</span>
      )}
    </div>
  );
};

export default Input;

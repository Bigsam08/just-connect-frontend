/**
 * @description Displays the 404 page
 */

import { useNavigate } from "react-router-dom";
import { SearchX } from "lucide-react";

const NotfoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      {/* Icon as Image */}
      <div className="bg-white shadow-md rounded-full p-6 mb-6">
        <SearchX size={48} className="text-gray-400" />
      </div>

      {/* Big 404 */}
      <h1 className="text-6xl md:text-7xl font-bold text-black">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-xl font-semibold">Page not found</h2>

      <p className="text-gray-500 text-sm mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-8 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-100 transition"
        >
          Go Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-2 bg-brand text-white rounded-lg text-sm hover:bg-brand-hover transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotfoundPage;

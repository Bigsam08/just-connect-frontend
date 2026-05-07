/**
 * @description A Page showing 403 unauthorized page
 */

import { ShieldX, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full text-center bg-white shadow-xl rounded-3xl p-10 border border-gray-100">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-5 rounded-full">
            <ShieldX className="w-14 h-14 text-red-500" />
          </div>
        </div>

        {/* Status */}
        <p className="text-red-500 font-semibold text-sm tracking-widest mb-2">
          ERROR 403
        </p>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8 text-sm">
          You do not have permission to access this page. Please contact an
          administrator if you believe this is a mistake.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-5 py-2 text-sm rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 text-sm rounded-xl bg-black border hover:border-gray-500 text-white hover:opacity-90 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnauthorizedPage;

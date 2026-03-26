/** 
 * @description displays the home of the professional dashboard, showing the over view
 **/

import { Banknote, CalendarDays, CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    title: "Total Earnings",
    value: "₦120,000",
    icon: Banknote,
  },
  {
    title: "Pending Jobs",
    value: "3",
    icon: Clock,
  },
  {
    title: "Completed Jobs",
    value: "18",
    icon: CheckCircle,
  },
  {
    title: "Bookings",
    value: "24",
    icon: CalendarDays,
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              data-aos="fade-out"
              data-aos-delay={item.title * 150}
              className="bg-brand-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between shadow-sm"
            >
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.value}
                </h2>
              </div>

              <div className="p-3 bg-gray-100 rounded-xl">
                <Icon size={20} className="text-brand" />
              </div>
            </div>
          );
        })}
      </section>

      {/* Recent Activity + Quick Info */}
      <section
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        data-aos="zoom"
      >
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-brand-white border border-gray-300 rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Recent Bookings
          </h3>

          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Plumbing Service
                  </p>
                  <p className="text-xs text-gray-500">Lekki • 2 hours ago</p>
                </div>

                <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-brand rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-brand-white mb-4">
            Quick Actions
          </h3>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => navigate("/dashboard/professional/services")}
              className="w-full text-left p-3 rounded-xl bg-black/30 text-brand-white text-sm hover:bg-black/50 transition"
            >
              + Add New Service
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard/professional/bookings")}
              className="w-full text-left p-3 rounded-xl bg-black/30  text-brand-white text-sm hover:bg-black/50 transition"
            >
              View Bookings
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard/professional/profile")}
              className="w-full text-left p-3 rounded-xl bg-black/30 text-brand-white text-sm hover:bg-black/50 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="bg-brand-white border border-gray-200 rounded-2xl p-4 shadow-sm" data-aos="zoom">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          Recent Reviews
        </h3>

        <div className="flex flex-col gap-3">
          {[1, 2].map((item) => (
            <div key={item} className="p-3 rounded-xl bg-gray-50">
              <p className="text-sm text-gray-800">
                "Great service, very professional!"
              </p>
              <p className="text-xs text-gray-500 mt-1">
                — Customer from Ikeja
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

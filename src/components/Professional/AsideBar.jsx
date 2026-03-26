/**
 * @description This is a reuseable navlink component for professionals
 */

import { NavLink } from "react-router-dom";
import { professionalNavLinks } from "../../data/ProfessionalNavlink";
import { LogOut } from "lucide-react";

const AsideBar = () => {
  // Handle logout functionality
  const handleLogOut = () => {};

  return (
    <aside className="w-full h-full flex flex-col rounded-2xl bg-brand border border-gray-200 shadow-sm p-4">
      {/* Top Section */}
      <div className="mb-8 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-black text-brand-white flex items-center justify-center font-semibold">
          P
        </div>
        <div>
          <p className="text-sm font-semibold text-black">Professional</p>
          <p className="text-xs text-brand-white">Manage your services</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {professionalNavLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/dashboard/professional"}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-4 py-3 text-white rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              {/* Active Indicator */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full transition-all ${
                  location.pathname === link.path
                    ? "bg-black"
                    : "bg-transparent"
                }`}
              />

              {/* Icon */}
              <Icon
                size={20}
                className="shrink-0 transition-transform rounded-full duration-200 group-hover:scale-105"
              />

              {/* Label */}
              <span className="text-sm font-medium">{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Section Logout */}
      <div className="mt-auto pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={handleLogOut}
          className="flex items-center justify-center gap-3 text-sm bg-white w-full py-2 text-gray-500 rounded-md hover:text-red-500 transition-colors cursor-pointer"
        >
          Log Out <LogOut size={14} />
        </button>
      </div>
    </aside>
  );
};

export default AsideBar;

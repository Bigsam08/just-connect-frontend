/**
 * @description Side bar links for the user Dashboard
 */

import { NavLink } from "react-router-dom";
import { userNavlinksData } from "../../data/UserDashboardNavLink";
import { LogOut } from "lucide-react";

const AsideBar = ({ onNavigate }) => {
  // Handle log out function
  const handleLogout = () => {};

  return (
    <aside className="h-3/4 flex flex-col py-16 justify-between">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="mb-8 px-2">
          <h1 className="text-xl font-bold">User</h1>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1">
          {userNavlinksData.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/dashboard/user"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-white hover:bg-white hover:text-orange-500 transition-transform duration-300 hover:translate-x-4 hover:scale-x-110"
                  }`
                }
                onClick={onNavigate}
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-50 pt-4">
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm cursor-pointer bg-white text-red-500 hover:bg-red-500 hover:text-white rounded-lg"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
};

export default AsideBar;

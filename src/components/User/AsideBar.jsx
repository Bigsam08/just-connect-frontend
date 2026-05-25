/**
 * @description Side bar links for the user Dashboard
 */

import { NavLink } from "react-router-dom";
import { userNavlinksData } from "../../data/UserDashboardNavLink";
import { LogOut } from "lucide-react";
import { useLogout } from "../../libs/handleLogout";

const AsideBar = ({ onNavigate }) => {
  // Log out functonality
  const { handleLogout } = useLogout();

  return (
    <aside className="h-full flex flex-col py-8 justify-between overflow-hidden">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="mb-8 px-2 flex items-center gap-2">
          <div className="h-6 w-6 bg-black rounded-md text-center text-white font-bold">
            U
          </div>
          <div>
            <p className="text-md font-bold leading-4">User</p>
            <p className="text-xs text-brand-white">Manage your services</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 overflow-y-auto">
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
                      : "text-white hover:bg-white hover:text-orange-500 transition-all duration-300"
                  }`
                }
                onClick={onNavigate}
              >
                <Icon
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
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
          className="flex items-center gap-3 w-full text-left px-3 py-2 text-xs cursor-pointer bg-white text-red-500 hover:bg-red-500 hover:text-white rounded-lg"
        >
          <LogOut size={14} /> Logout
        </button>
      </div>
    </aside>
  );
};

export default AsideBar;

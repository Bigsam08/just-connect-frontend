/**
 * @description The top bar for professional dashboard
 */

import { Bell, LogOut, Menu, Search } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { getNameInitials } from "../../libs/getNameInitials";
import useAuthStore from "../../store/authStore";
import { useLogout } from "../../libs/handleLogout";

const TopBar = () => {
  const { user } = useAuthStore();
  const { handleLogout } = useLogout();
  const [isOpen, setIsOpen] = useState(false);
  const [openLogoutMenu, setOpenLogoutMenu] = useState(false);


  return (
    <>
      <header className="relative w-full h-16 bg-brand md:mt-4 rounded-lg flex items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={20} />
          </button>

          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        {/* Middle Section (Search - optional now, useful later) */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-3 py-2 w-80">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm w-full"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
            <Bell size={20} />

            {/* Notification dot */}
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 px-2 py-1 rounded-lg transition">
            <div
              onClick={() => setOpenLogoutMenu(!openLogoutMenu)}
              className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium cursor-pointer"
            >
              {user.profile_picture ? (
                <img
                  src={user.profile_picture}
                  alt={user.name}
                  className="h-full w-full object-center rounded-full"
                />
              ) : (
                <div>{getNameInitials(user.name)}</div>
              )}
            </div>
            <span className="hidden lg:block text-sm font-medium text-gray-700">
              {user.name.split(" ").pop()}
            </span>
          </div>
        </div>
        {/** Display Navbar logout drop down menu */}
        {openLogoutMenu && (
          <div
            className="absolute top-full bg-white right-0 w-32 h-20 border border-gray-200 shadow-xl p-4 rounded-md flex justify-center items-center z-50"
            data-aos="fade"
          >
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        )}
      </header>

      {/* Mobile Sidebar */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default TopBar;

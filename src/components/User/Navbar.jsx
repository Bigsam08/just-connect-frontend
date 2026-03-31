/**
 * @description This component styles the user dashboard navbar
 */

import { Bell, LogOut, Search, Settings, User } from "lucide-react";
import { useState } from "react";
import MobileNav from "../../components/User/MobileMenu";
import { useNavigate } from "react-router-dom";
import { getNameInitials } from "../../libs/getNameInitials";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = {
    name: "Agbebi Olu",
    image: "",
  };
  const nameInitial = getNameInitials(user.name)

  // Log out logic
  const handleLogout = () => {};

  return (
    <header className="bg-orange-500 md:bg-gray-50 h-16 px-4 md:px-10 w-full flex items-center justify-between">
      {/* Left: Page Title */}
      <div>
        <h1 className="hidden md:flex text-lg md:text-2xl font-semibold md:font-bold text-white md:text-gray-500">
          Dashboard
        </h1>
        {/** Mobile Menu View */}
        <MobileNav />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg lg:w-lg">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search artisans..."
            className="bg-transparent outline-none ml-2 text-sm"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg text-white md:text-gray-500">
          <Bell size={18} />
          {/* Notification badge */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <div className="relative shadow-2xs rounded-full">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer"
          >
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-9 h-9 rounded-full"
              />
            ) : (
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 text-sm font-bold">
                {nameInitial}
              </div>
            )}
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 pb-8 w-40 bg-white text-gray-500 border border-gray-200 rounded-lg shadow z-50">
              {/** Header */}
              <div className="py-6 bg-brand rounded-t-lg mb-4"></div>
              <button
                type="button"
                onClick={() => navigate("profile")}
                className="flex gap-2 items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              >
                <User size={14} /> Profile
              </button>
              <button
                type="button"
                onClick={() => navigate("settings")}
                className="flex gap-2 items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              >
                <Settings size={14} /> Settings
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="flex gap-2 items-center w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 cursor-pointer"
              >
                <LogOut size={14} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

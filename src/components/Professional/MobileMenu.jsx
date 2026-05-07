/**
 * @description Mobile menu for professional dashboard
 */

import { LogOut, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { professionalNavLinks } from "../../data/ProfessionalNavlink";
import { useLogout } from "../../libs/handleLogout";

const MobileMenu = ({ isOpen, onClose }) => {
  const { handleLogout } = useLogout();

  // Handle logout functionality
  const logOutUser = async () => {
    onClose();
    await handleLogout();
  };

  return (
    <div className="md:hidden">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-brand text-white px-2 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-orange-300">
          <div className="h-10 w-10 rounded-xl bg-black text-brand-white flex items-center justify-center font-semibold">
            P
          </div>
          <div>
            <p className="text-sm font-semibold text-black">Professional</p>
            <p className="text-xs text-brand-white">Manage your services</p>
          </div>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-4 gap-2">
          {professionalNavLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/dashboard/professional"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-white ${
                    isActive ? "bg-black" : "hover:bg-white/20"
                  }`
                }
              >
                <Icon size={20} />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Section Logout */}
        <div className="mt-aut pt-6 border-t border-orange-300">
          <button
            type="button"
            onClick={logOutUser}
            className="flex items-center justify-center gap-3 text-xs bg-white w-full py-2 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
          >
            Log Out <LogOut size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

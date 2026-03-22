/**
 * @description This is the mobile menu for user dashboard
 */


/**
 * @description Mobile navigation for user dashboard
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import AsideBar from "./AsideBar";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar (mobile only) */}
      <div className="md:hidden flex items-center justify-between text-white">
        {/* Menu button */}
        <button onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>

        {/* Title */}
        <h1 className="text-lg font-semibold">Dashboard</h1>

        {/* Spacer / future icon */}
        <div className="w-6" />
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-brand z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b border-orange-300">
          <h2 className="font-semibold text-brand-white">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="p-4">
          <AsideBar onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
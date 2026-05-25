/**
 * @description this shows the hamburger menu for mobile screens
 */

import { FaX } from "react-icons/fa6";
import { NavLinks } from "../../data/NavLink";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import { IoMdArrowForward } from "react-icons/io";
import { X } from "lucide-react";

const MobileMenu = ({ showMenu, closeMenu }) => {
  return (
    <div className="md:hidden">
      {/** Display the menu */}
      {showMenu && (
        <div className="fixed top-0 right-0 w-full h-screen bg-white/10 backdrop-blur-2xl z-999" data-aos="fade-left">
          {/** Close button */}
          <button
            type="button"
            onClick={closeMenu}
            className="bg-black float-end mt-4 p-4"
          >
            <X size={24} className="hover:text-orange-500" />
          </button>

          {/** Navlink display */}
          <div className="px-4 mt-18">
            <ul className="space-y-4 text-brand-white font-medium">
              {NavLinks.map((n, idx) => (
                <li
                  key={idx}
                  onClick={closeMenu}
                  className="p-4 hover:text-brand-hover text-xs cursor-pointer transition"
                >
                  <a href={n.link}>{n.title}</a>
                </li>
              ))}
            </ul>

            <Link to="/login">
              <Button className="w-full mt-4" size="sm">
                Sign In <IoMdArrowForward />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

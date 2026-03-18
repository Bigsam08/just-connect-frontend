/**
 * @description this shows the hamburger menu for mobile screens
 */
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { NavLinks } from "../../data/NavLink";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import { IoMdArrowForward } from "react-icons/io";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        className="cursor-pointer p-2 rounded-md hover:ring-2 hover:ring-orange-500 transition"
      >
        {!showMenu ? (
          <FaHamburger size={24} className="hover:text-brand-hover" />
        ) : (
          <FaX size={24} className="hover:text-brand-hover" />
        )}
      </button>

      {/** Display the menu */}
      {showMenu && (
        <div className="fixed top-17 left-0 w-full h-[80vh] bg-gray-700 z-999">
          <div className="px-4 pt-20">
            <ul className="space-y-8 text-brand-white font-medium">
              {NavLinks.map((n, idx) => (
                <li
                  key={idx}
                  onClick={() => setShowMenu(false)}
                  className="p-4 hover:text-brand-hover cursor-pointer transition"
                >
                  <a href={n.link}>{n.title}</a>
                </li>
              ))}
            </ul>

            <Link to="/login">
              <Button className="w-full mt-10" size="lg">
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

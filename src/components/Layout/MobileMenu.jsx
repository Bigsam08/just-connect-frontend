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
        <div className="md:hidden absolute top-full left-0 min-h-[80vh] mt-2 px-2 w-full bg-black/80 backdrop-blur-3xl">
          <ul className="space-y-8 py-16  items-center gap-8 text-brand-white font-medium">
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

          {/** CTA  */}
          <Link to="/login">
            <Button className="w-full">Sign In <IoMdArrowForward /></Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

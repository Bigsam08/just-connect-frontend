/**
 * @description Nav bar for the landing page in a glass style
 */

import { useEffect, useState } from "react";
import { NavLinks } from "../../data/NavLink";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import Button from "../Common/Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  /** Listen to when the page is scrolled and set state */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        {/* Glass container */}
        <div
          className={`flex items-center justify-between rounded-xl backdrop-blur-md border border-white/20 px-6 py-3 ${scrolled ? "bg-gray-700" : "bg-white/10"}`}
        >
          {/* Logo */}
          <button type="button" className="cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            <a href="/">
              <h1 className="text-xl font-bold text-brand-white">
                just<span className="text-brand">Connect</span>
              </h1>
            </a>
          </button>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-brand-white font-medium">
            {NavLinks.map((n, idx) => (
              <li
                key={idx}
                className="hover:text-brand-hover cursor-pointer transition"
              >
                <a href={n.link}>{n.title}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/register" className="hidden md:block">
            <Button>Join now</Button>
          </Link>

          {/** Mobile Nav link */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

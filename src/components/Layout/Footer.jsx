/**
 * @description Footer for JustConnect landing page
 */
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com" },
    { icon: <FaTwitter />, link: "https://www.x.com" },
    { icon: <FaInstagram />, link: "https://www.instagram.com" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com" },
  ];

  const quickLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "#about" },
    { title: "Contact", link: "#contact" },
    { title: "Categories", link: "#categories" },
    { title: "Login", link: "/login" },
  ];

  return (
    <footer className="bg-gray-900 text-brand-white py-12 px-4 sm:px-6 md:px-16 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-brand-white">
            Just <span className="text-brand">Connect</span>
          </h1>
          <p className="text-gray-400">
            Connecting you with skilled artisans across Africa. Find the right
            professional for your project with ease.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((n, idx) => (
              <a
                key={idx}
                href={n.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-brand-hover rounded-full p-2 transition"
              >
                {n.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          {quickLinks.map((sl, idx) => (
            <a
              key={idx}
              href={sl.link}
              className="text-gray-400 hover:text-brand-hover transition wrap-break-words"
            >
              {sl.title}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2 mt-8 md:mt-0">
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-gray-400 wrap-break-words">
            123 Artisan Street, Lagos, Nigeria
          </p>
          <p className="text-gray-400">+234 800 123 4567</p>
          <p className="text-gray-400">support@justconnect.com</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} JustConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
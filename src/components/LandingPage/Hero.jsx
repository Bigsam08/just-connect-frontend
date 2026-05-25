/**
 * @description Hero section of our landing page
 */

import HeroIllustration from "../../assets/hero.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdArrowForward } from "react-icons/io";
import Navbar from "../Layout/Navbar";
import SearchBar from "../../components/LandingPage/SearchBar";
import Button from "../Common/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col text-center text-brand-white"
      style={{
        backgroundImage: `url(${HeroIllustration})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-6 pt-24">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6"
            data-aos="fade"
          >
            Need Help At Home ? - <br />
            <span className="text-brand">Find Trusted Professionals</span> Near
            You
          </h1>

          <p
            className="text-md md:text-xl text-gray-200 mb-8"
            data-aos="fade"
            data-aos-delay="300"
          >
            Book skilled professionals for your home and everyday needs. Fast,
            easy, and reliable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/register"} className="w-full">
              <Button className="w-full" size="lg">
                <AiOutlineUserAdd />
                Create Account
              </Button>
            </Link>

            <Link to={"/login"} className="w-full">
              <Button size="lg" variant="outline" className="w-full">
                Already a Member
                <IoMdArrowForward />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative md:absolute md:-bottom-10 left-0 w-full px-4 sm:px-6 z-20 mt-10 md:mt-0">
        <div className="max-w-7xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;

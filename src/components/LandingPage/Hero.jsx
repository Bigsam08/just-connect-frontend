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
      className="relative min-h-[95vh] w-full flex flex-col items-center justify-center text-center text-brand-white"
      style={{
        backgroundImage: `url(${HeroIllustration})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          data-aos="fade"
        >
          Crafting
          <span className="text-brand">Unique Artisanal</span> Experiences
        </h1>

        <p
          className="text-lg md:text-xl text-gray-200 mb-8"
          data-aos="fade"
          data-aos-delay="300"
        >
          Discover and support talented artisans, find bespoke creations, and
          make your space truly special.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={"/register"} className="w-full">
            <Button className="w-full" size="lg">
              {" "}
              <AiOutlineUserAdd /> Create Account
            </Button>
          </Link>
          <Link to={"/login"} className="w-full">
            <Button size="lg" variant="outline" className="w-full">
              Already a Member <IoMdArrowForward />
            </Button>
          </Link>
        </div>
      </div>

      {/* Search Bar Overlap */}
      <div className="absolute -bottom-24 md:-bottom-10 left-0 w-full px-6 z-20">
        <div className="max-w-7xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;

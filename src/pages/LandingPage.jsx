/**
 * @description Displays the landing page for our app
 */

import AboutUs from "../components/LandingPage/AboutUs";
import Categories from "../components/LandingPage/Categories";
import ChatButton from "../components/LandingPage/Chat";
import ContactUs from "../components/LandingPage/ContatUs";
import CTA from "../components/LandingPage/CTA";
import FAQ from "../components/LandingPage/FAQ";
import Hero from "../components/LandingPage/Hero";
import HowItWorks from "../components/LandingPage/HowItWorks";
import Testimonials from "../components/LandingPage/Testimonials";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";
import Footer from "../components/Layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Categories />
      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <FAQ />
      <ContactUs />
      <Footer />
      <ChatButton />
    </div>
  );
};

export default LandingPage;

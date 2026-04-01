/**
 * @description Defines data for the landing page sections
 */

import Okoro from "../assets/okoro.webp"
import Ada from "../assets/ada.webp"
import Tunde from "../assets/tunde.webp";
import {
  FaSearch,
  FaCommentDots,
  FaCheckCircle,
  FaHammer,
  FaPaintBrush,
  FaBolt,
  FaTools,
  FaSeedling,
  FaCar,
  FaBroom,
  FaBrush,
  FaLightbulb,
  FaLaptopCode,
  FaPiedPiper,
} from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

/** How it works */
export const howItWorksData = [
  {
    icon: FaSearch,
    title: "Find a professional",
    text: "Search by skill, service, or location to discover talented professional near you.",
  },
  {
    icon: FaCommentDots,
    title: "Connect & Discuss",
    text: "Reach out directly to professional, discuss your project, and get quotes.",
  },
  {
    icon: FaCheckCircle,
    title: "Get It Done",
    text: "Hire your professional and get quality work done efficiently and safely.",
  },
];

/** Categories */
export const categories = [
  {
    name: "Carpentry",
    icon: FaHammer,
    description:
      "Skilled woodworkers for furniture, cabinets, and home repairs.",
  },
  {
    name: "Painting",
    icon: FaPaintBrush,
    description:
      "Professional painters for interior and exterior painting projects.",
  },
  {
    name: "Tailoring",
    icon: FaScissors,
    description: "Custom clothing, alterations, and sewing services.",
  },
  {
    name: "Electrical",
    icon: FaBolt,
    description:
      "Certified electricians for wiring, installation, and repairs.",
  },
  {
    name: "Plumbing",
    icon: FaPiedPiper,
    description: "Expert plumbers for installations, repairs, and maintenance.",
  },
  {
    name: "Gardening",
    icon: FaSeedling,
    description: "Gardeners for landscaping, lawn care, and plant maintenance.",
  },
  {
    name: "Cleaning",
    icon: FaBroom,
    description:
      "Professional cleaners for homes, offices, and commercial spaces.",
  },
  {
    name: "Tech Support",
    icon: FaLaptopCode,
    description:
      "IT professionals for computer setup, software, and troubleshooting.",
  },
  {
    name: "Car Services",
    icon: FaCar,
    description:
      "Mechanics and car specialists for repairs, maintenance, and detailing.",
  },
  {
    name: "Makeup & Beauty",
    icon: FaBrush,
    description: "Beauty experts for makeup, hair styling, and personal care.",
  },
  {
    name: "Lighting & Fixtures",
    icon: FaLightbulb,
    description:
      "Professionals for lighting installations, fixtures, and repairs.",
  },
  {
    name: "Renovation & Tools",
    icon: FaTools,
    description:
      "General contractors and handymen for home renovation projects.",
  },
];

/** FAq */
export const faqs = [
  {
    question: "How do I verify an professional?",
    answer:
      "All professionals are verified by our team before they can join the platform to ensure quality and trust.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payments are securely handled through our platform. You only release payment once the job is completed to your satisfaction.",
  },
  {
    question: "Can I cancel a job?",
    answer:
      "Yes, you can cancel a job before the professional starts. Terms vary depending on the agreement.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "We are currently developing a mobile app. You can use the web platform on any device in the meantime.",
  },
];

/** Testimonials */
export const testimonials = [
  {
    name: "Ada Nwosu",
    location: "Lagos, Nigeria",
    quote: "Found an amazing carpenter in minutes! Highly recommended.",
    img: Ada,
  },
  {
    name: "Tunde Balogun",
    location: "Abuja, Nigeria",
    quote: "The platform makes finding reliable professional so easy.",
    img: Tunde,
  },
  {
    name: "Chinwe Okoro",
    location: "Port Harcourt, Nigeria",
    quote: "I love how secure and fast the payment system is!",
    img: Okoro,
  },
];


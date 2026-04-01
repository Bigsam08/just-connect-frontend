/**
 * @description An exportable dmock up data to display recommendations for user in user dahboard
 */

import Pearl from "../assets/pearl.webp"
import Mayowa from "../assets/mayowa.webp";
import Emeka from "../assets/emeka.webp"

export const recommendedArtisans = [
  {
    id: 1,
    name: "Emeka Duru",
    skill: "Electrician",
    rating: 4.8,
    location: "Lagos",
    img: Emeka,
    about:
      "Experienced electrician with over 7 years of professional service. متخصص in wiring, installation, and maintenance.",
    services: ["House wiring", "Electricial installation", "Fault fixing"],
    reviews: [
      { id: 1, name: "Mary", comment: "Very professional!", rating: 5 },
      {
        id: 2,
        name: "David",
        comment: "Came on time and did a great job",
        rating: 4,
      },
    ],
  },
  {
    id: 2,
    name: "Mayowa Olajide",
    skill: "Plumber",
    rating: 4.7,
    location: "Ikeja, Lagos",
    img: Mayowa,
    about: "A fully certified Plumber with over 10 years experience",
    services: ["Pipe leak", "Full house installation"],
    reviews: [],
  },
  {
    id: 3,
    name: "Pearl Efe",
    skill: "Cleaner",
    rating: 4.9,
    location: "Uyo",
    img: Pearl,
    about: "",
    services: ["Furniture", "Interior designs", "Roofing"],
    reviews: [],
  },
];
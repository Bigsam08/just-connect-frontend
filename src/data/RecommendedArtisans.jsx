/**
 * @description An exportable dmock up data to display recommendations for user in user dahboard
 */


export const recommendedArtisans = [
  {
    id: 1,
    name: "John Doe",
    skill: "Electrician",
    rating: 4.8,
    location: "Lagos",
    img: "https://i.pravatar.cc/150?img=10",
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
    name: "Mary Smith",
    skill: "Plumber",
    rating: 4.7,
    location: "Ikeja",
    img: "",
    // img: "https://i.pravatar.cc/150?img=12",
    about: "A fully certified Plumber with over 10 years experience",
    services: ["Pipe leak", "Full house installation"],
    reviews: [],
  },
  {
    id: 3,
    name: "David Carpenter",
    skill: "Carpenter",
    rating: 4.9,
    location: "Surulere",
    img: "https://i.pravatar.cc/150?img=14",
    about: "",
    services: ["Furniture", "Interior designs", "Roofing"],
    reviews: [],
  },
];
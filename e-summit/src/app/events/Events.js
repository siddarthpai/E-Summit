"use client";
import React from "react";
import Cards from "./Cards";
import { Fade } from "react-reveal";
export default function Events() {
  const cardData = [
    {
      id: 1,
      title: "Founder Fusion",
      content:
        "Dive into the Innovation Fusion: Craft, Merge, and Conquer Challenges! Develop cutting-edge products, merge dynamic teams, and tackle crisis scenarios. Are you up for the ultimate innovation adventure?",
      size: "Team size - 2 people",
      POC: "Rasagnya and Lakshmi",
      date: "4th November, 2023",
      time: "11:00 AM - 2:00 PM",
      link: "https://www.google.com/",
      venue: "venue",
      cost: "Free",
      index: 0,
    },
    {
      id: 2,
      title: "Elevate or Eliminate ",
      content:
        "In this thrilling challenge, competitors navigate escalating trials, where success yields vital entrepreneurial insights and advancement. As they strive to outshine fellow challengers and reach the next level, others may falter in the face of real-world business challenges. This unforgettable and educational journey propels teams to new heights on the path to entrepreneurial success.",
      size: "Team size - 2 people",
      date: "4th November, 2023",
      POC: "Aditya Sharma and Tanishka",
      time: "2:00 PM - 5:00 PM ",
      link: "https://www.google.com/",
      venue: "venue",
      cost: "Free",
      index: 1,
    },
    {
      id: 3,
      title: "El Camino",
      content:
        "Step into the gritty, adrenaline-fueled world of Albuquerque's underground as we bring you 'El Camino'.Experience an auction like never before that encompasses elements from cartels of breaking bad combined with entrepreneurship and problem solving!Put yourself in the shoes of characters from the show and “be the one who knocks",
      size: "Team size - 2 people",
      date: "5th November, 2023",
      POC: "Aditya and Lalith",
      time: "11:00 AM -1:00 PM",
      link: "https://www.google.com/",
      venue: "venue",
      cost: "Free",
      index: 2,
    },
    {
      id: 4,
      title: "Best Regional Manager",
      content:
        "Leadership lunacy, where innovation meets strategy. Navigate Uncertainty with Expertise . Develop actionable strategies, real-time insights, and resilient solutions to handle any challenge effectively. Connect, learn, and ignite your business ventures. Be part of the entrepreneurial revolution!",
      size: "Team size - 1 person",
      date: "27 Nov 2023",
      POC: "Havish, Ashuthosh, Kamya",
      time: "11:00 AM-12:00 PM",
      link: "https://www.google.com/",
      venue: "venue",
      cost: "Free",
      index: 3,
    },
    {
      id: 5,
      title: "Startup Valley",
      content:
        "Hustle, innovate and display mastery across multiple entrepreneurial domains in this 2 day event consisting of an exciting medley of rounds designed to channel your inner founder, hone your decision making skills and test your entrepreneurial prowess",
      size: "Team size - 4 people",
      date: "4th and 5th November, 2023",
      POC: "Aditya and Lalith",
      time: "11:00 AM - 4:00 PM",
      link: "https://www.google.com/",
      venue: "Venue: PES Ring Road Campus",
      cost: "Paid",
      price: "Registration Fee: ₹300",
      index: 4,
    },
    {
      id: 6,
      title: "Entrepreneurial Odyssey",
      content:
        "Unearth hidden problem statements, ideate creative solutions, pitch your startup vision for investor funding, network with teams around you for insights, manage investments, bid for resources, and face unexpected crises – all in one thrilling night of entrepreneurial adventure!",
      size: "Team size - 3 to 4 people",
      date: "3rd and 4th November,2023",
      POC: "Ananya and Kaashika",
      time: "5:00 PM - 9:00 AM ",
      link: "https://www.google.com/",
      venue: "Venue: PES Electronic City Campus",
      cost: "Paid",
      price: "Registration Fee: ₹300",
      index: 5,
    },
  ];
  return (
    <div className="h-fit " style={{ backgroundColor: "#00214c" }}>
      <Fade left>
        <div className="flex flex-box justify-center text-center">
          <h1 className="text-white text-5xl mb-32 mt-32">
            Welcome to the Events Section
          </h1>
        </div>
      </Fade>

      <Cards cardData={cardData} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

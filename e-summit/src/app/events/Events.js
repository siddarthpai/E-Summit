"use client";
import React from "react";
import Cards from "./Cards";
import { Fade } from "react-reveal";
export default function Events() {
  const cardData = [
    {
      id: 1,
      title: "Founder Fusion",
      content: "test2",
      size: "Team size - 2 people",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
    {
      id: 2,
      title: "Elevate or Eliminate ",
      content: "test",
      size: "Team size - 2 people",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
    {
      id: 3,
      title: "El Camino",
      content: "test",
      size: "Team size - 2 people",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
    {
      id: 4,
      title: "Leadership Lunacy",
      content: "test",
      size: "Team size - 2 people",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
    {
      id: 5,
      title: "Startup Valley",
      content: "test",
      size: "Team size - 2 people",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
    {
      id: 6,
      title: "Entreprene- -urial Odyssey",
      content: "test",
      size: "Team size - 2 people",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
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

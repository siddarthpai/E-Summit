"use client";
import React from "react";
import Cards from "./Cards";
export default function Events() {
  const cardData = [
    {
      id: 1,
      title: "Press Stress",
      content: "test",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
    {
      id: 2,
      title: "Press Stress",
      content: "test",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
    {
      id: 3,
      title: "Press Stress",
      content: "test",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
    {
      id: 4,
      title: "Press Stress",
      content: "test",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
    {
      id: 5,
      title: "Press Stress",
      content: "test",
      date: "27 Nov 2023",
      time: "11:00 AM-12:00 PM",
    },
  ];
  return (
    <div className="h-screen" style={{ backgroundColor: "#00214c" }}>
      <Cards cardData={cardData} />
    </div>
  );
}

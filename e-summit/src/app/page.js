"use client";
import React from "react";
import Landing from "./landingpage/page";
import About from "./About";
import Events from "./events/Events";
import Navbar from "./navbar/Navbar";
import ContactUs from "./ContactUs/contactUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <div id="about">
        <About />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}

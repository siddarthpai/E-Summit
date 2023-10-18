import React from "react";
import Image from "next/image";
import Landing from "./landingpage/page";
import About from "./About";
import History from "./history/page";
import Events from "./events/Events";
import ContactUS from "./ContactUs/contactUs"
export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Events />
      <ContactUS/>
    </div>
  );
}
